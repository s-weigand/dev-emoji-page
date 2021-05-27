#!/usr/bin/env python3

from pathlib import Path

from bs4 import BeautifulSoup


deploy_dir = Path(__file__).parent.parent / "deploy"
src_file = deploy_dir / "index2.html"

public_url = r"https://s-weigand.github.io/dev-emoji-page"

soup = BeautifulSoup(src_file.read_text(), features="lxml")

for meta_tag in soup.select("meta,link"):
    if meta_tag.has_attr("content") and meta_tag["content"].startswith("/"):
        meta_tag["content"] = f"{public_url}{meta_tag['content']}"

    elif meta_tag.has_attr("href") and meta_tag["href"].startswith("/"):
        meta_tag["href"] = f"{public_url}{meta_tag['href']}"

dest_file = deploy_dir / "index.html"

dest_file.write_text(str(soup))
src_file.unlink(missing_ok=True)
