# pw-ds — Poke World Design System

Componentes de interface do OTServ **Poke World Universe**, feitos como Web Components. Funcionam em qualquer página HTML, com ou sem framework.

| Componente | Tag |
|---|---|
| Card (primary, secondary, tertiary) | `<pw-card>` |
| Card Header | `<pw-card-header>` |
| Tabs | `<pw-tabs>` + `<pw-tab>` |
| Icon | `<pw-icon>` |

Temas: **Poke World** (padrão, dourado + azul) e **Mewtwo** (roxo).

## Instalação

Adicione no `<head>` do projeto:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jacques-tony/pw-ds@0/dist/pw-ds.css">
<script src="https://cdn.jsdelivr.net/gh/jacques-tony/pw-ds@0/dist/pw-ds.js" defer></script>
```

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

**pw-card** — `variant` (primary · secondary · tertiary), `tone` (neutral · info · success · warning · error · new · brand), `appearance` (filled · outline), `theme`, `interactive`, `selected`, `disabled`.

**pw-card-header** — texto como conteúdo, `show-icon="false"`, `icon`, `theme`.

**pw-tabs** — `size` (sm · md · lg), `theme`. Evento `change` com `detail.tab`.
**pw-tab** — `icon`, `show-icon="false"`, `selected`, `disabled`, `aria-controls`.

**pw-icon** — `name` (craft · boost · limit-break · close), `size` em px, `label` para leitores de tela.

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

```bash
# 1. editar dist/ e anotar no CHANGELOG.md
# 2. atualizar "version" no package.json e PWDS.version em dist/pw-ds.js
git commit -am "release: v0.2.0"
git tag v0.2.0
git push && git push --tags
```

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `dist/pw-ds.css` | Tokens + componentes (use este) |
| `dist/pw-tokens.css` | Só tokens e temas |
| `dist/pw-components.css` | Só estilos dos componentes |
| `dist/pw-ds.js` | Web Components |
| `icons/*.svg` | Ícones originais |
| `examples/index.html` | Página de exemplo |
