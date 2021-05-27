#!/usr/bin/env python3

from pathlib import Path

from bs4 import BeautifulSoup
from pygments import highlight
from pygments.lexers.html import HtmlLexer
from pygments.formatters.terminal import TerminalFormatter
from yaargh import ArghParser


DEPLOY_DIR = Path(__file__).parent.parent / "deploy"
SRC_FILE = DEPLOY_DIR / "index2.html"
DEST_FILE = DEPLOY_DIR / "index.html"


def fix_index_html():
    """Fixes reprent public url to links and rename file."""
    public_url = r"https://s-weigand.github.io/dev-emoji-page"

    soup = BeautifulSoup(SRC_FILE.read_text(), features="lxml")

    for meta_tag in soup.select("meta,link"):
        if meta_tag.has_attr("content") and meta_tag["content"].startswith("/"):
            meta_tag["content"] = f"{public_url}{meta_tag['content']}"

        elif meta_tag.has_attr("href") and meta_tag["href"].startswith("/"):
            meta_tag["href"] = f"{public_url}{meta_tag['href']}"

    DEST_FILE.write_text(str(soup))
    SRC_FILE.unlink(missing_ok=True)


def pretty_print():
    """pretttyprint html in the terminal"""
    pretty_html = BeautifulSoup(DEST_FILE.read_text(), features="lxml").prettify()
    print(highlight(pretty_html, HtmlLexer(), TerminalFormatter()))


parser = ArghParser()
parser.add_commands([fix_index_html, pretty_print])


if __name__ == "__main__":
    parser.dispatch()
