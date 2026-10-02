#!/usr/bin/env python3
"""
List every visible English string on the active pages and report the ones
missing from assets/i18n/es.json. Run after changing any copy:

    python3 scripts/i18n-check.py          # report missing keys, exit 1 if any
    python3 scripts/i18n-check.py --dump   # print every key (for new translations)

Keys are matched exactly like assets/js/main.js does it: each text node and
each aria-label / placeholder / alt / title attribute, whitespace collapsed.
"""
import json, re, sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ['index.html', '404.html', 'services/index.html', 'services/shield/index.html',
         'services/care/index.html', 'services/ai-phone-agent/index.html',
         'websites/index.html', 'contact/index.html',
         'components/header.html', 'components/footer.html']
ATTRS = ('aria-label', 'placeholder', 'alt', 'title')
SKIP_TAGS = {'script', 'style', 'svg', 'head'}
# Strings that read the same in both languages (numbers, names, symbols).
NEUTRAL = re.compile(r'^[\d\s$+()/.,:&–·©-]*$')
# Brand and product names that stay in English on the Spanish site.
SAME = {'Sebby IT', 'Sebby IT Shield', 'Sebby IT Care', 'Made by Sebby', 'WhatsApp',
        'LinkedIn', 'hello@sebbyservices.com'}


def norm(s):
    return re.sub(r'\s+', ' ', s).strip()


class Collector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.keys = [], []

    def skipping(self):
        return any(t in SKIP_TAGS or no for t, no in self.stack)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title':
            self.stack.append(('title-ok', False))
            return
        no = a.get('translate') == 'no'
        if tag not in ('img', 'input', 'meta', 'link', 'br', 'source'):
            self.stack.append((tag, no))
        if not (self.skipping() or no):
            for k in ATTRS:
                if a.get(k):
                    self.keys.append(norm(a[k]))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] in (tag, 'title-ok' if tag == 'title' else None):
                del self.stack[i:]
                break

    def handle_data(self, data):
        in_title = any(t == 'title-ok' for t, _ in self.stack)
        if not in_title and self.skipping():
            return
        k = norm(data)
        if k:
            self.keys.append(k)


def collect():
    seen = []
    for p in PAGES:
        c = Collector()
        c.feed((ROOT / p).read_text(encoding='utf-8'))
        for k in c.keys:
            if k not in seen and k not in SAME and not NEUTRAL.match(k):
                seen.append(k)
    return seen


if __name__ == '__main__':
    keys = collect()
    if '--dump' in sys.argv:
        print(json.dumps(keys, ensure_ascii=False, indent=1))
        sys.exit(0)
    es = json.loads((ROOT / 'assets/i18n/es.json').read_text(encoding='utf-8'))
    missing = [k for k in keys if k not in es]
    for k in missing:
        print('MISSING:', k)
    print(f'{len(keys) - len(missing)}/{len(keys)} strings translated')
    sys.exit(1 if missing else 0)
