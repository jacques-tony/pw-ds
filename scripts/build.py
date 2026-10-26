#!/usr/bin/env python3
"""Gera dist/ a partir de storybook/index.html (fonte única).
Uso: python3 scripts/build.py 0.2.0
"""
import json, re, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
ver = sys.argv[1] if len(sys.argv) > 1 else json.loads((root / 'package.json').read_text())['version']
src = (root / 'storybook' / 'index.html').read_text()

def between(a, b):
    i = src.index(a) + len(a); j = src.index(b, i); return src[i:j].strip('\n')

STORY_ONLY = ('.icon-lib', '.icon-tile', '#hpStage', '.tabpanel')
tokens_body = between('/* @pwds-tokens-start */', '/* @pwds-tokens-end */')
comp = '\n'.join(l for l in between('/* @pwds-css-start */', '/* @pwds-css-end */').split('\n') if not l.startswith(STORY_ONLY))
fonts = '@import url("https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap");'
tokens = f':root{{\n  --f-display:"Cinzel", "Trajan Pro", Georgia, serif;\n{tokens_body}\n}}'
js_body = between('/* @pwds-js-start */', '/* @pwds-js-end */')
css_all = tokens + '\n' + comp

dist = root / 'dist'; dist.mkdir(exist_ok=True)
head = f'/*! Poke World Design System v{ver} — https://github.com/jacques-tony/pw-ds */\n'
(dist / 'pw-tokens.css').write_text(head + fonts + '\n' + tokens + '\n')
(dist / 'pw-components.css').write_text(head + comp + '\n')
(dist / 'pw-ds.css').write_text(head + fonts + '\n' + css_all + '\n')
js = head + '''(function(){
if(window.PWDS)return;
/* estilos embutidos: basta este <script> (funciona também em páginas que não podem carregar CSS externo) */
if(!document.getElementById('pw-ds-css')&&!document.querySelector('link[href*="pw-ds.css"]')){
  var st=document.createElement('style');st.id='pw-ds-css';st.textContent=%s;
  (document.head||document.documentElement).prepend(st);
}
%s
window.PWDS={version:%s,
  icons:PW_FILL,
  registerIcon:function(name,d,rule){PW_FILL[name]=d;if(rule)PW_FILL_RULE[name]=rule;}};
})();
''' % (json.dumps(css_all), js_body, json.dumps(ver))
(dist / 'pw-ds.js').write_text(js)
pkg = json.loads((root / 'package.json').read_text()); pkg['version'] = ver
(root / 'package.json').write_text(json.dumps(pkg, indent=2, ensure_ascii=False) + '\n')
print('dist/ gerado para v' + ver)
