# pw-ds — Poke World Design System

Componentes de interface do OTServ **Poke World Universe**, feitos como Web Components. Funcionam em qualquer página HTML, com ou sem framework.

| Componente | Tag |
|---|---|
| Card (primary, secondary, tertiary) | `<pw-card>` |
| Card Header | `<pw-card-header>` |
| Tabs | `<pw-tabs>` + `<pw-tab>` |
| Icon | `<pw-icon>` |
| Element Item | `<pw-element-item>` |
| Badge | `<pw-badge>` |
| Button | `<pw-button>` |
| Input Number | `<pw-number>` |
| Scroll Bar | `<pw-scroll>` ou `.pw-scroll` |

Tipografia: **Spectral** para títulos e **Inter** para labels e textos (`--pw-font-title`, `--pw-font-body`, escala `--pw-text-*` e classes `.pw-text-*`).

Temas: **Poke World** (padrão, dourado + azul), **Mewtwo** (roxo) e um tema para cada um dos **18 tipos** (`fogo`, `agua`, `planta`…).

## Instalação

Uma linha no `<head>` do projeto (os estilos vêm dentro do script):

```html
<script src="https://cdn.jsdelivr.net/gh/jacques-tony/pw-ds@0/dist/pw-ds.js" defer></script>
```

Se preferir carregar o CSS separado (por exemplo, para evitar o "piscar" antes do script rodar), adicione também:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jacques-tony/pw-ds@0/dist/pw-ds.css">
```

> **Artifacts do Claude** só aceitam scripts do jsDelivr no caminho `/npm/`. Enquanto a biblioteca não estiver no npm, o artifact recebe uma cópia embutida do `pw-ds.js` (marcada com a versão) e é atualizado a cada release.

### Escolhendo como receber atualizações

O número depois do `@` define quais versões o projeto aceita automaticamente:

| Você escreve | O projeto recebe |
|---|---|
| `@0` | Todas as versões 0.x.x (enquanto a biblioteca está em desenvolvimento) |
| `@1` | Todas as melhorias e correções da 1.x.x, nunca a 2.0 |
| `@1.4` | Só correções da 1.4.x |
| `@1.4.2` | Exatamente essa versão, congelada |

Recomendado em produção: travar na versão principal (`@1`) depois que a 1.0 sair.

> O jsDelivr guarda cache por até 12h para `@1` / `@1.4`. Versões exatas (`@1.4.2`) atualizam na hora.

## Uso

```html
<!-- Card -->
<pw-card variant="primary" tone="success" interactive>
  <h3>Missão concluída</h3>
</pw-card>

<!-- Card com título -->
<div class="pw-titled">
  <pw-card-header icon="star">Ascensão Estelar</pw-card-header>
  <pw-card variant="primary">…</pw-card>
</div>

<!-- Tabs -->
<pw-tabs size="md" aria-label="Pokédex">
  <pw-tab icon="craft" selected aria-controls="painel-1">Craft</pw-tab>
  <pw-tab icon="boost" aria-controls="painel-2">Boost</pw-tab>
</pw-tabs>

<!-- Icon -->
<pw-icon name="limit-break" size="24" label="Limit Break"></pw-icon>

<!-- Tema Mewtwo em uma área inteira -->
<section data-pw-theme="mewtwo"> … </section>
```

### Propriedades

**pw-card** — `variant` (primary · secondary · tertiary), `tone` (neutral · info · success · warning · error · new · brand), `appearance` (filled · outline), `theme`, `interactive`, `selected`, `disabled`; no tertiary, `element` (um dos 18 tipos) aplica o fundo elemental quando selecionado.

**pw-card-header** — texto como conteúdo, `show-icon="false"`, `icon`, `theme`.

**pw-tabs** — `size` (sm · md · lg), `theme`. Evento `change` com `detail.tab`.
**pw-tab** — `icon`, `show-icon="false"`, `selected`, `disabled`, `aria-controls`.

**pw-icon** — `name` (craft · boost · limit-break · close · check · warning) ou `type` (os 18 tipos: aco, agua, dragao, eletrico, fada, fantasma, fogo, gelo, inseto, lutador, normal, pedra, planta, psiquico, sombrio, terrestre, veneno, voador); `size` xs · sm · md · lg · xl ou px; `label` para leitores de tela.

**pw-element-item** — `element` (um dos 18 tipos), `theme` (`auto` = tema do elemento), `size` (sm · md · lg), `meta`, `width` (largura mínima em px), `selected`, `disabled`, `block`. O texto nunca quebra linha: o card cresce. Evento `change` com `detail.element`.

**pw-badge** — texto como conteúdo; `tone` (neutral · info · success · warning · error · new · brand), `appearance` (filled · outline), `size` (sm · md · lg), `icon` (à direita), `label` (obrigatório se só ícone), `theme`.

**pw-button** — texto como conteúdo; `variant` (primary · secondary · ghost · danger · success), `appearance` (fill · outline), `size` (sm · md · lg · xl), `icon`, `icon-end`, `label` (obrigatório se só ícone), `disabled`, `loading`, `block`, `type`, `theme`; efeito de hover com `fx` (sparkle · glow · particles · none), `particles` e variáveis `--fx-*`.

**pw-number** — `value`, `min`, `max`, `step`, `precision`, `layout` (split · joined · compact), `size` (sm · md · lg), `show-max`, `max-label`, `label`, `help`, `prefix`, `suffix`, `invalid`, `disabled`, `readonly`, `block`, `theme`. Evento `change` com `detail.value`; propriedade `.value`.

**pw-scroll** — área com rolagem e barra de 2px; `axis` (x · y), `track="none"`, `theme`; variáveis `--pw-scroll-*`. A classe `.pw-scroll` aplica a mesma barra em qualquer elemento.

### Ícones novos

```js
PWDS.registerIcon('nome-do-icone', 'M… Z', 'evenodd'); // path em grade 24×24
```

Os SVGs originais ficam em [`icons/`](icons/).

## Versionamento

Segue [Semantic Versioning](https://semver.org/lang/pt-BR/):

- **patch** (0.1.**1**): correção, sem mudança visual relevante
- **minor** (0.**2**.0): componente ou propriedade nova, sem quebrar nada
- **major** (**1**.0.0): mudança que quebra quem já usa

Cada versão é uma tag git (`v0.1.0`) e está descrita no [CHANGELOG](CHANGELOG.md). Durante a fase 0.x, mudanças que quebram sobem o minor.

### Publicar uma versão nova

O `storybook/index.html` é a fonte. Os componentes ficam entre os marcadores `@pwds-tokens`, `@pwds-css` e `@pwds-js`; o resto é a documentação.

```bash
python3 scripts/build.py 0.3.0   # gera dist/ e atualiza package.json
# anotar a versão no CHANGELOG.md
git commit -am "release: v0.3.0" && git push
```

Depois, crie a release `v0.3.0` no GitHub (Releases → Draft a new release).

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `dist/pw-ds.css` | Tokens + componentes (use este) |
| `dist/pw-tokens.css` | Só tokens e temas |
| `dist/pw-components.css` | Só estilos dos componentes |
| `dist/pw-ds.js` | Web Components |
| `icons/*.svg` | Ícones originais |
| `examples/index.html` | Página de exemplo |
