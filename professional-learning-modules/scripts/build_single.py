"""Build single-file versions of every module for pasting into Google Sites
(Insert > Embed > Embed code). Output goes to dist/<module>.html.

Usage (from the repo root):  python3 scripts/build_single.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def inline(module_dir):
    html = open(os.path.join(module_dir, "index.html"), encoding="utf-8").read()
    def css(m):
        path = os.path.normpath(os.path.join(module_dir, m.group(1)))
        return "<style>\n" + open(path, encoding="utf-8").read() + "\n</style>"
    def js(m):
        path = os.path.normpath(os.path.join(module_dir, m.group(1)))
        return "<script>\n" + open(path, encoding="utf-8").read() + "\n</script>"
    html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
    html = re.sub(r'<script src="([^"]+)"></script>', js, html)
    return html

def main():
    mods = os.path.join(ROOT, "modules")
    out = os.path.join(ROOT, "dist")
    os.makedirs(out, exist_ok=True)
    for name in sorted(os.listdir(mods)):
        d = os.path.join(mods, name)
        if os.path.isfile(os.path.join(d, "index.html")):
            path = os.path.join(out, name + ".html")
            open(path, "w", encoding="utf-8").write(inline(d))
            print("built", os.path.relpath(path, ROOT))

if __name__ == "__main__":
    main()
