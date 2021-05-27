#!/usr/bin/env python3

import json
from pathlib import Path

from bs4 import BeautifulSoup
from pygments import highlight
from pygments.lexers.html import HtmlLexer
from pygments.formatters.terminal import TerminalFormatter
from yaargh import ArghParser


DEPLOY_DIR = Path(__file__).parent.parent / "deploy"
SRC_FILE = DEPLOY_DIR / "index2.html"
DEST_FILE = DEPLOY_DIR / "index.html"
MANIFEST_FILE = DEPLOY_DIR / "manifest.webmanifest"
PUBLIC_URL = r"https://s-weigand.github.io/dev-emoji-page"


def fix_index_html():
    """Fixes preprent public url to links and rename html file."""

    soup = BeautifulSoup(SRC_FILE.read_text(), features="lxml")

    for meta_tag in soup.select("meta,link"):
        if meta_tag.has_attr("content") and meta_tag["content"].startswith("/"):
            meta_tag["content"] = f"{PUBLIC_URL}{meta_tag['content']}"

        elif meta_tag.has_attr("href") and meta_tag["href"].startswith("/"):
            meta_tag["href"] = f"{PUBLIC_URL}{meta_tag['href']}"

    DEST_FILE.write_text(str(soup))
    SRC_FILE.unlink(missing_ok=True)


def fix_manifest():
    """Fixes preprent public url to links in manifest."""
    manifest = json.loads(MANIFEST_FILE.read_text())
    for icon in manifest["icons"]:
        icon["src"] = f"{PUBLIC_URL}{icon['src']}"
    manifest["start_url"] = f"{PUBLIC_URL}/index.html"
    manifest["scope"] = f"{PUBLIC_URL}/"
    MANIFEST_FILE.write_text(json.dumps(manifest))


def pretty_print():
    """pretttyprint html in the terminal"""
    pretty_html = BeautifulSoup(DEST_FILE.read_text(), features="lxml").prettify()
    print(highlight(pretty_html, HtmlLexer(), TerminalFormatter()))


def fix_all():
    """Run all fixes."""
    fix_index_html()
    fix_manifest()


parser = ArghParser()
parser.add_commands([fix_index_html, fix_manifest, fix_all, pretty_print])


if __name__ == "__main__":
    parser.dispatch()
