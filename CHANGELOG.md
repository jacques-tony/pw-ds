# Changelog

Todas as mudanças da biblioteca. Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/), versões em [SemVer](https://semver.org/lang/pt-BR/).


























## 0.51.3
- `pw-widget-bag`:
  - Cabeçalho (aberto e fechado) com 24px em cima e embaixo e 16px nas laterais.
  - Slots em `pw-card` tertiary neutral, sem tooltip.
  - Itens animados por folha de sprites (`sprite` + `frames`).
  - Overlay de rolagem vai até a borda do card.
  - Abrir/recolher sem cortar o brilho da moldura e com transição mais suave.

## 0.51.2
- `pw-widget-bag`: 24px nas laterais também aberta; abrir/recolher com transição suave de altura e fade (método `toggle()`); quantidade como texto no canto inferior direito do slot (vermelha em zero); overlay embaixo quando ainda há slots para rolar.

## 0.51.1
- `pw-widget-bag` fechado: altura mínima de 64px e 24px de espaço nas laterais.

## 0.51.0
- Novo componente **`pw-widget-bag`** (widget Mochila), feito só com peças do DS: `pw-card` primary, `pw-button` ghost, `pw-scroll`, slots `pw-card` quaternary 32×32 em 5 colunas e `pw-badge` de quantidade; ícone `bag` da barra de navegação.
  - Aberto e fechado (`collapsed`), bloqueado (`locked`: sem arrastar nem redimensionar) e fechar (`close()` / `show()`).
  - Arrastar pelo cabeçalho dentro do pai; redimensionar pela borda de baixo (encaixa em linhas inteiras; teclado ↑ ↓ Home End); vem para a frente ao clicar.
  - `heading`, `slots`, `.items` ou JSON (`image`/`icon`, `label`, `count`, `description`); eventos `select`, `itemmenu`, `move`, `resize`, `collapse`, `lock`, `close` (cancelável).

## 0.50.2
- `pw-hud`: badge Ctrl+N dos cards da equipe agora usa `tone="neutral"`.

## 0.50.1
- `pw-hud`: recarga zerada mostra "Sem CD". Novo método `updatePokemon(índice, {hp, cd, cdLeft})` atualiza vida e recarga ao vivo sem recriar a HUD (também nas pílulas do `pw-party`).
- Storybook: controle "Simular combate" / "Curar" fora da HUD para ver a vida caindo e a recarga subindo e descendo no Pokémon selecionado.

## 0.50.0
- `pw-hud`: todos os blocos internos são componentes do DS — perfil em `pw-card variant="tertiary" tone="neutral"`, atalhos em `pw-card variant="quaternary" interactive` (menu aberto = `state="selected"`), cards da equipe em `tertiary`, base e card de editar ordem em `primary`, menus em `pw-control-group`.
- Vida e experiência agora são `pw-progress` padrão com label ("Vida" com `variant="hp"`, "Experiência") e valor "atual / máximo", sem ícone.

## 0.49.2
- `pw-hud`: foto do avatar alinhada pelo topo (mostra o rosto também no perfil reduzido). Storybook: exemplo com foto do personagem.

## 0.49.1
- `pw-hud`: o atalho Ctrl+N dos cards da equipe agora é um `pw-badge` brand `xs` centralizado no topo do card, na mesma posição dos atalhos da barra (atualiza ao editar a ordem).

## 0.49.0
- `pw-badge`: novo tamanho `size="xs"` (14px, texto 8px), também no playground.
- `pw-hud`: badges das teclas dos atalhos usam o `xs`.

## 0.48.4
- `pw-hud`: os menus de contexto (botão direito nos atalhos e nos Pokémon/pílulas) agora são `pw-control-group` com `pw-control-group-item`: título com o nome do item/Pokémon, ícones, separador, ações destrutivas em vermelho e a tecla atual ao lado de "Definir atalho". Teclado do control group (setas, Home/End, letras, Enter); Esc/Tab fecham.
- Corrige o modo Editar ordem saindo sozinho ao ser aberto pelo Enter.

## 0.48.3
- `pw-hud`: atalhos de 40×40; badge da tecla centralizado no topo do atalho, `tone="brand"` preenchido, `size="sm"`.

## 0.48.2
- `pw-hud`: atalhos de 48×48 com 12px entre eles; badge da tecla no canto superior esquerdo, sobre a borda; setas rolam 4 atalhos considerando o novo tamanho.

## 0.48.1
- `pw-hud`: a tecla de cada atalho agora é um `pw-badge tone="brand" appearance="outline" size="sm"` no canto superior direito.
- Teclas padrão: os 22 primeiros atalhos já vêm com 1…9, 0 e F1…F12 (`key` definido nos dados tem prioridade; `key: null` deixa sem tecla). "Remover tecla" e "Limpar" preservam essa regra.

## 0.48.0
- Novos componentes **`pw-control-group`** e **`pw-control-group-item`**: lista suspensa para menus dropdown, menus de contexto, seletores e filtros.
  - `type`: `menu` (padrão, `role="menu"`), `single` (listbox) e `multi` (listbox multiselecionável, com checkbox).
  - `for="id"` prende ao gatilho: abre no clique/↓/↑, vira para cima se não couber, nunca sai da tela, fecha ao escolher, clicar fora, Esc ou Tab e devolve o foco. Sem `for`, fica fixo na página.
  - Itens com `icon`/`type`/`src`, `description`, `meta`, `shortcut` (em `pw-kbd`), `section`, `selected`, `disabled`, `tone="danger"`; `<hr>` separa grupos.
  - Teclado do WAI-ARIA (setas com volta, Home/End, typeahead, Enter/Espaço) com `aria-activedescendant`; `size` sm/md/lg; `value`, `data-cg-label` no gatilho; eventos `select` (cancelável), `change`, `open`, `close`.
- `pw-kbd keys="Ctrl+1"` agora desenha uma tecla para cada parte.

## 0.47.1
- `pw-card` primary: sem a linha interna e borda externa 1px mais fina (secondary não muda).
- `pw-hud`: imagem do item sempre centralizada no atalho; a tecla aparece só como texto no canto superior direito.

## 0.47.0
- Novo componente **`pw-kbd`** (tecla do teclado): `<pw-kbd>Q</pw-kbd>`, `keys="Ctrl+1"`, `size` xs/sm/lg, `tone="accent"`, método `press()`.
- `pw-hud`, barra de atalhos: clique usa o item; **botão direito** abre as opções (no espaço vazio, só "Definir atalho"). "Escolher atalho" virou "Definir atalho".
- Modal **Definir atalho** (`pw-dialog`): captura a tecla (com Ctrl/Alt/Shift), mostra em `pw-kbd` grande com animação, mostra o atalho atual e avisa quando a tecla já está em outro atalho (é movida). Evento `keybind` (cancelável) e método `bindKey(índice)`.
- Teclas definidas aparecem no canto do atalho e acionam o item ao serem pressionadas (evento `hotkey` com `action: "Usar"`).

## 0.46.0
- `pw-card` (todas as variantes): fundo com imagem. `bg-image` (url), `bg` = `image` (padrão, troca o fundo) ou `both` (imagem sobre o fundo do tema), `bg-opacity` (0–1), `bg-position` (center/top/bottom/left/right) e `bg-fit` (cover/contain). A imagem é recortada no formato do fundo de cada variante; bordas, brilho, anel e destaque não mudam.
- `pw-hud`: cards dos Pokémon e espaços vazios usam `bg-image`, sem a faixa entre a arte e a borda.

## 0.45.0
- `pw-hud`: ascensão estelar — 5 estrelas ao lado do ícone de tipo de cada card (`team[].stars`, 0 a 5; conquistadas em dourado).
- Card de editar ordem: mais alto (borda inferior escondida atrás da HUD), padding de 16px no topo e laterais; botão agora diz "Salvar".

## 0.44.1
- `pw-hud`: a instrução "Arraste os Pokémon para mudar a ordem" e o botão Concluir agora ficam num `pw-card variant="primary"` que sai deslizando de trás da HUD.

## 0.44.0
- `pw-hud` / `pw-party`: ordem da equipe agora é um modo **Editar ordem** (botão direito → Editar ordem). Os cards balançam e podem ser arrastados; ao passar sobre outro, os dois trocam de lugar com animação. Concluir, Enter, Esc ou clicar fora encerram. Eventos `reorder` (cancelável, `detail.order`) e `orderdone`; métodos `editOrder()` e `doneOrder()`. Remove o menu de mover/trocar e o método `move()` da 0.43.0.

## 0.43.0
- `pw-hud`: ordenar a equipe pelo botão direito num card (ou na pílula do `pw-party`): mover para o início/esquerda/direita/fim ou trocar com outro Pokémon, com animação de deslize. Atalhos Ctrl+N seguem a nova ordem. Evento `reorder` (cancelável) e método `move(de, para, trocar)`.

## 0.42.2
- `pw-hud`: efeitos de hover e foco dos botões da barra de atalhos não são mais cortados.

## 0.42.1
- `pw-hud`: as setas da barra de atalhos agora habilitam corretamente quando há mais atalhos do que cabem (recalcula ao mudar de tamanho).
- Esconder/mostrar hotkeys com transição suave de altura e opacidade.

## 0.42.0
- `pw-hud`: cards da equipe em `tertiary` `tone="neutral"` filled com a borda azul visível; borda dourada (mais grossa) só no selecionado.
- Largura da HUD calculada para o perfil + 6 cards (`--hd-w`).
- A HUD fica encaixada na borda de baixo: a parte inferior do card primary sai da tela. `docked="false"` mostra o card inteiro.

## 0.41.0
- `pw-hud`: a base agora é um `pw-card variant="primary"`; cards da equipe são `pw-card variant="tertiary" interactive`, e o selecionado ganha o destaque dourado (`highlight`).
- Equipe limitada a 6 Pokémon (Ctrl+1…6); espaços vazios mostram a arte `assets/hud/empty-slot.webp`.
- Hover dos cards não é mais cortado; barra de atalhos com overlay suave nas pontas quando há mais itens para rolar.

## 0.40.0
- Ícone novo `poke` (`icons/poke.svg` e `<pw-icon name="poke">`), usado nos espaços vazios da barra de atalhos do `pw-hud`.
- `pw-hud`: cards da equipe com arte de corpo inteiro (`team[].card`, 74×134); barras de HP/CD, vida e XP passam a ser `pw-progress`; ações, setas e botões do rodapé passam a ser `pw-button`; medidas trocadas por tokens de espaçamento, fonte e raio.
- `pw-party`: pílulas com a arte do Pokémon (`team[].banner` 180×40 e `team[].bannerLg` 210×50 com `size="lg"`) e barra `pw-progress variant="hp"`.

## 0.39.0
- Ícones: nova categoria **Barra de navegação** com os 23 ícones ilustrados novos (`icons/nav/*.webp`, máx. 40px) e reduções em `icons/nav/16`, `24` e `32` (nunca ampliados).
- `PWDS.navIcon(nome, tamanho)` aceita 16, 24 ou 32; `pw-nav-item` ganha `icon-size` e usa 24px automaticamente na `pw-navbar size="sm"`.
- `pw-navbar`: os ícones novos substituem os anteriores; o hover não é mais cortado pela barra; o traço de selecionado desliza com animação até o ícone clicado.

## 0.38.0

- Novo **pw-hud** (HUD inferior do jogador), com todos os tokens do DS.
  - **Perfil**: foto (silhueta com dica quando não há foto), nome, nível, barras de vida e XP e ações rápidas com dica e liga/desliga.
  - **Cards da equipe**: atalho Ctrl+N, retrato, tipo, vida com cor por faixa e recarga (CD); clique ou Ctrl+1…9 seleciona.
  - **Barra de atalhos**: pokébola apagada nos espaços vazios, quantidade (vermelha em zero), setas para rolar e menu de ação (Usar em si, Usar no alvo, Usar no pokémon, Com mira, Equipar, Escolher atalho, Limpar) com teclado.
  - **Modos** no rodapé: "Perfil reduzido / completo" (perfil em uma linha, equipe na lateral) e "Esconder / mostrar hotkeys", com transição suave da altura.
  - Dados por `.data` ou `<script type="application/json">`; eventos `action`, `pokemon`, `hotkey` (cancelável) e `profilechange`.
- Novo **pw-party**: equipe em pílulas na lateral, ligada ao HUD por `for`; aparece no perfil reduzido.
- Storybook: nova página **HUD inferior**.

## 0.37.0

- Novo **pw-navbar** (Navigation Bar do HUD), com `pw-nav-item` e `pw-nav-sep`.
  - Visual: moldura com cantos chanfrados, fundo e metal do tema, separadores entre grupos.
  - Itens: dica com o nome (`label`), `badge` (número ou `dot`), `active`, `disabled` e evento `select`.
  - Teclado: ← →, Home e End.
  - Tamanhos `size` sm, md e lg.
  - Pokébola nas cores do tema para recolher e abrir, com a mesma animação do jogo:
    - recolher: os ícones somem das pontas para o centro, a barra encolhe até um hexágono, a pokébola entra girando e sobe até ficar meio escondida no topo;
    - abrir: o caminho inverso.
  - Métodos `collapse()`, `expand()` e `toggle()`; evento `toggle`; atributo `collapsed`; `--nb-speed` para a velocidade.
- **23 ícones de jogo** da barra em `icons/nav/*.webp`, usados por nome com `game-icon` (trainer-card, aura, bag, pokedex, team, map, tasks, trade, badges, ranking, guild, shop, gifts, board, achievements, hunt, minigames, clan, referral, radar, boost, settings, exit). Servidos pelo jsDelivr na mesma versão da biblioteca; `window.PW_NAV_ICONS` troca os caminhos.
- `PWDS.navIcon(nome)` e `PWDS.navIconNames`.

## 0.36.0

- **pw-tabs folder**:
  - Novo `size="xs"`: 24px de altura, texto de 10px, ícone de 12px, largura mínima de 80px; a selecionada cresce 3px.
  - Novo `corners="chamfer"`: cantos de cima cortados a 45° no lugar dos arredondados. Borda, vidro e metal seguem o corte. O tamanho do corte fica em `--fd-c` (8px; 5px no xs).
- Storybook: exemplos chanfrados e xs; o playground da variante pasta ganhou `corners` e o tamanho xs.

## 0.35.0

- **pw-tabs folder**:
  - Todas as abas têm a mesma altura (`--fd-h`: sm 34, md 44, lg 54px), com ou sem ícone.
  - Só a selecionada fica mais alta (`--fd-grow`: 4, 6 e 8px), com transição suave.
  - A linha de base fica encostada embaixo das abas, sem passar por baixo delas.
- Storybook: playground próprio da variante pasta (abas, ícones, selecionada, desabilitada, size, `--fd-w`, `--fd-grow`, `block` e tema).

## 0.34.1

- **pw-tabs folder**: transição mais suave entre as abas.
  - O metal entra e sai num fade de 450ms.
  - A aba selecionada sobe 2px.
  - Uma luz desliza pela linha de base até a nova aba (420ms).
  - Cor, brilho e borda mudam juntos.
  - Respeita reduzir movimento.

## 0.34.0

- **pw-tabs `variant="folder"`**: abas de pasta.
  - Visual: cantos de cima arredondados, apoiadas numa linha de base acesa.
  - A aba selecionada recebe o metal do tema com brilho; as outras ficam no vidro escuro, com a borda acesa no topo.
  - `size` sm, md e lg; `block` divide a largura inteira; `--fd-w` define a largura mínima.
  - Mesmo comportamento, teclado e acessibilidade das Tabs.
- Storybook: nova seção "Variante pasta"; o playground das Tabs ganhou as opções `variant` e mais temas.

## 0.33.0

- **pw-card-header banner**:
  - Usa o mesmo texto do header de pontas: `--pw-text-title-caps` (Spectral, caixa alta) na cor `--pw-text-title`.
  - Mais espaço nas laterais: padding de `--pw-space-12` no md, `-8` no sm e `-16` no lg.
  - Ícones iguais aos do header de pontas: ✦ por padrão, `icon` para trocar e `show-icon="false"` para esconder.
  - Abertura numa única transição suave: a faixa cresce e aparece, as asas e as linhas saem e o texto surge, sem pular de tamanho nem piscar.

## 0.32.3

- **pw-card-header banner**: as linhas laterais e o ponto de luz que corre por elas ficam no centro vertical do header.
- O interior da faixa usa o fundo radial escuro do tema, como no header de pontas, com borda de metal, filete interno e brilho. O texto agora é claro, com sombra.

## 0.32.2

- **pw-card-header banner**: as linhas finas de baixo, nas laterais, foram removidas. Ficam só as linhas superiores, com o ponto de luz.

## 0.32.1

- Storybook: o playground do Card Header ganhou as opções `variant` (padrão ou banner), `size` (para o banner) e mais temas elementais.
- O botão "Copiar HTML" não estica mais na altura.
- Sem mudança nos componentes.

## 0.32.0

- **pw-card-header `variant="banner"`**: título de destaque no estilo HUD.
  - Visual: faixa com pontas chanfradas, duas asas em chevron de cada lado e linhas longas para fora.
  - `size` sm (40), md (52) e lg (64px); ícone só quando definido.
  - Ajustes: `--bn-wing`, `--bn-line` e `--bn-speed`.
  - Animação de abertura: a faixa estica do centro, as asas deslizam, as linhas correm e o texto se junta.
  - Animação ambiente: brilho atravessa a faixa, as asas pulsam em sequência e um ponto de luz corre pelas linhas.
  - Usa as cores do tema, aceita os valores de `animate` e `.play()` e respeita reduzir movimento.

## 0.31.1

- **pw-card quaternary**: o degradê da borda passa de vertical para diagonal: aceso no canto superior esquerdo e apagado no inferior direito, como no tertiary.

## 0.31.0

- **Tabela ranking com troféus**: a classe `.pw-table.trophies` troca os losangos por troféus.
  - Os três primeiros (`data-rank="1|2|3"`) viram troféus de ouro, prata e bronze, com a posição na taça; o 1º é um pouco maior e brilha.
  - Do 4º em diante fica só o número.
  - Funciona também com `.compact` e em qualquer tema.

## 0.30.0

- **pw-card `variant="tech"`**: a moldura Tech vira um tipo de card próprio, que funciona em qualquer tema (Poke World, Mewtwo e os 18 tipos).
  - Aceita `tone`, `appearance="outline"` e os estados interativos.
  - O tamanho padrão é 514 × 376, igual ao primary.
- `variant="primary" frame="tech"` continua funcionando.
- Storybook: a seção "Primary · moldura Tech (Mewtwo)" passa a se chamar **Tech**, com exemplos em vários temas e tons; o playground do Card ganhou a opção `tech`.

## 0.29.0

- **Tooltip (`data-tip`)** refeito: um balão desenhado por script, no lugar do pseudo-elemento.
  - Título interno (`data-tip-title`) e ícone (`data-tip-icon`).
  - Seta que aponta para o centro do elemento.
  - Posição automática: vira para o outro lado quando não cabe e fica dentro da tela.
  - `data-tip` vazio usa o `title` nativo do elemento e o remove.
  - Conteúdo rico (`data-tip-ref`), tons (`data-tip-tone`), `data-tip-delay` e `data-tip-width`.
  - Segue o tema do elemento; Esc fecha; liga o balão ao elemento por `aria-describedby`.

## 0.28.0

- Novo **pw-search**: campo de busca com sugestões, no padrão combobox do WAI-ARIA APG. Referências: Carbon Search, Porsche Input Search e Nord Autocomplete.
  - Sugestões agrupadas, com ícone ou tipo, descrição e meta à direita; o texto buscado aparece destacado, sem considerar acentos.
  - Buscas recentes (`recent`), atalho de teclado (`shortcut="/"`), botão de limpar, `loading`, `submit` e mensagem sem resultado.
  - Tamanhos `size` sm, md e lg; variantes `ghost` e `expandable`.
  - Teclado: ↑ ↓, Enter e Esc (fecha e, na segunda vez, limpa).
  - Eventos `search` (com debounce), `select`, `submit` e `clear`.
- Storybook: nova página **Search**.

## 0.27.0

- **pw-card tertiary e quaternary** passam a aceitar `tone` (info · success · warning · error · new · brand). O traçado de 6 interrupções usa as camadas do tom, e o fundo ganha um leve tingimento. Antes só primary e secondary aceitavam tom.
- **Tipografia display** para nome de boss e telas de destaque:
  - `--pw-text-display-lg` (64/68), `-md` (48/52) e `-sm` (40/44), em Spectral 700;
  - classes `.pw-text-display-lg`, `-md` e `-sm`, mais `.pw-text-display-caps` para caixa alta;
  - tamanhos `--pw-font-size-5xl` (40), `-6xl` (48) e `-7xl` (64).

## 0.26.0

- **pw-checkbox e pw-radio** refeitos com base em Carbon, Material 3, Atlassian, Polaris e WAI-ARIA APG:
  - label (conteúdo ou `label`) e `description`, ligada por `aria-describedby`;
  - área de toque de 24px com halo no hover e no pressionar;
  - estados: marcado, indeterminado, desabilitado, somente leitura (tracejado e focável), erro (`invalid`) e aviso (`warning`);
  - `size` sm, md e lg; `label-position="start"`; `required`;
  - `variant="card"` (opção em cartão) com `meta`.
- Novo **pw-choice-group**:
  - legenda, ajuda, `required` e mensagem de `error` ou `warning`;
  - `orientation` vertical ou horizontal;
  - `name` e `value` para radios; repassa `variant`, `disabled` e `readonly` aos itens;
  - `select-all` cria um checkbox pai que fica indeterminado;
  - `role="group"` ou `radiogroup`; evento `groupchange`.
- O evento `change` dos controles não dispara mais duas vezes.
- Storybook: nova página **Checkbox e Radio** (visão geral, anatomia, estados, opção em cartão, playgrounds, uso e regras).

## 0.25.0

- **pw-card primary**: passa a usar a mesma borda e os mesmos efeitos do secondary (cantos, filete interno, brilho, textura e reflexo). O fundo radial do primary continua igual.
- Afeta também os tons, o outline e os estados do primary. A moldura `frame="tech"` não muda.

## 0.24.0

- **Ícones (20)**: people, target, skull, shield, gem, flask, crown, coins, pencil, clock, sword, user-plus, gift, zap, compass, ball, egg, card, held e scroll.
- **Barras e progresso**: `pw-progress` (barra de progresso e de vida com `variant="hp"`, cor por faixa e rastro de dano), `pw-pips` (tentativas), `pw-segments` (buff em segmentos), `pw-steps` (trilha de fases) e `pw-ring` (anel de nível).
- **Overlays**: `pw-dialog` (painel pw-card secondary, foco preso, Esc, `data-close`), `pw-drawer` (lateral, `side="left"`), tooltip por atributo `data-tip` / `data-tip-pos` e toast (`pw-toast` e `PWDS.toast()`).
- **Dados e listas**: tabela `.pw-table` (ranking com medalhas `data-rank`, membros, `.is-me`), `pw-pagination`, bloco recolhível `details.fold`, `pw-empty`, `pw-list` + `pw-list-item` (seleção single, multiple ou none) e `pw-avatar` (hex, circle, square ou diamond, com raridade, nível e status).
- **Formulários**: `pw-input`, `pw-textarea`, `pw-checkbox` e `pw-radio`, com inputs nativos e `.pw-fieldset`.
- **pw-card tertiary**: `highlight` para destaque dourado; com texto (`highlight="Recomendado"`) mostra a faixa no topo.
- Tokens novos de medalha: `--pw-medal-gold`, `--pw-medal-silver` e `--pw-medal-bronze`, cada um com a versão `-light`.
- `PWDS` agora expõe `toast`, `icons`, `types` e `registerIcon`.
- Todos os novos componentes aceitam `theme` e seguem `data-pw-theme`.

## 0.23.0

- **pw-card quaternary**: o estado selected ficou bem evidente. O fundo é mais claro, na cor do traçado do tema, com borda acesa, brilho externo e luz interna.
- **Tipografia**: nova escala base, usada dentro dos componentes:
  - `--pw-font-size-3xs` a `--pw-font-size-4xl` (8 a 32px);
  - `--pw-font-weight-regular`, `-medium`, `-semibold` e `-bold`;
  - `--pw-line-height-none`, `-tight` e `-normal`;
  - `--pw-tracking-none` e `-wide`.
- Revisão de tokens em Card Header, Tabs, Button, Input Number, Scroll Bar, Badge e Element Item: tamanhos de fonte, pesos, altura de linha, raios e espaçamentos restantes agora usam tokens.
- Ajustes à escala:
  - Element Item: texto md 13→14 e lg 15→16; meta segue a escala (10, 12 e 14).
  - Button e Input Number: raio sm 5→4 e lg 7→8.
  - Input Number: sufixo e prefixo seguem a escala (10, 12 e 14).

## 0.22.0

- **Cores**: o sistema de tokens agora está completo, em três camadas.
  - **Primitivas**: rampas neutral, gold, blue, violet, teal, rose, orange, green, red, cyan e purple, mais preto e branco com alfa.
  - **Semânticas fixas**: `--pw-text-*`, `--pw-shadow-*`, `--pw-overlay` e os tons completos `--pw-tone-<tom>-<camada>`.
  - **Do tema (derivadas)**: `--pw-accent`, `--pw-text-accent*`, `--pw-text-help`, `--pw-border-*`, `--pw-surface-*`, `--pw-highlight-inset`, `--pw-focus-*` e `--pw-glow-soft`.
- **Espaçamento**: escala em múltiplos de 4px, de `--pw-space-0` a `--pw-space-32`, mais `-px` (1px) e `-0-5` (2px). Apelidos semânticos `--pw-gap-*`, `--pw-inset-*` e `--pw-stack-*`.
- **Raios**: `--pw-radius-none`, `-xs`, `-sm`, `-md`, `-lg`, `-xl` e `-full`.
- **Ícones**: 33 ícones de navegação (home, menu, search, settings, user, more-*, plus, minus, filter, sort, refresh, bell, chat, mail, map, bag, shop, trophy, star, heart, info, help, lock, unlock, login, logout, external, eye, calendar, grid, list e sliders).
- Todos os componentes passam a usar os tokens no lugar de cores e espaçamentos fixos. As cores ficaram idênticas (comparação pixel a pixel).
- Espaçamentos ajustados à escala de 4:
  - Card: padding do primary 34→32, do secondary 30→28 e gap do conteúdo 10→12; quaternary 12/14→12/16.
  - Card Header: distância dos ícones 14→16.
  - Tabs: gap 6→8 e, no lg, 8→12.
  - Badge: padding sm 6→4 e lg 10→12.
  - Button: gap md 6→8 e xl 8→12.
  - Input Number: gap 6→8 e, no lg, 8→12; botões 10→12.
- Storybook: novas páginas Cores (primitivas, texto e sombras, tema, tons) e Espaçamento.

## 0.21.0

- **pw-card**: nova variante `quaternary`, para blocos dentro de um tertiary. Tem fundo mais escuro e quase opaco, sombra interna no topo, traçado vertical aceso em cima e sombra externa. As cores derivam dos tokens do tertiary, então funciona em todos os temas.
- Estados: hover, selected e disabled.
- Novos tokens: `--pw-qua-bg-center`, `--pw-qua-bg-edge`, `--pw-qua-bg-op` e `--pw-qua-stroke-top/mid/bottom`.

## 0.20.0

- **pw-card-header**: os raios agora deslizam devagar e em velocidade constante pela borda (sem piscar), e o zigue-zague muda de forma suave, com as pontas esmaecidas.
- Fagulhas (estilhaços e pontos) saem da borda, se afastam do header girando e somem aos poucos.
- Interior com nebulosa: um núcleo de luz passeia pela faixa com partículas orbitando, nas cores do tema.
- A animação pausa quando o header sai da tela ou a aba fica oculta.
- Variáveis: `--hdr-ambient` passa a ser o tempo de uma volta (padrão 9s), `--hdr-bolt` agora tem padrão 2.5, e há três novas: `--hdr-bolts` (2), `--hdr-particles` (16) e `--hdr-inner` (1).

## 0.19.0

- **pw-card-header**: as "luzes" da animação ambiente foram trocadas por raios elétricos. Eles estalam em rajadas curtas pela borda, com núcleo branco, cor e halo do tema e pequenos galhos para fora.
- Na abertura, a borda é desenhada a partir da ponta esquerda e um raio percorre a moldura.
- Novas variáveis: `--hdr-bolt` (amplitude, padrão 4px). O valor padrão de `--hdr-ambient` passou a ser 1.6s (intervalo entre rajadas), e o reflexo `--hdr-shimmer` agora vem desligado (0).

## [0.18.0] — 2026-10-28

### Adicionado
- **pw-card-header**: propriedade `animate` (vazio/`both` · `intro` · `ambient` · `none`). Abertura: a faixa abre do centro, o traço acende e o título entra. Ambiente: duas luzes correm pela borda e um reflexo atravessa o fundo. Cores do tema (traçado e brilho). Método `.play()` repete a abertura. Variáveis `--hdr-intro`, `--hdr-ambient`, `--hdr-light`, `--hdr-light-glow`, `--hdr-shimmer`. Respeita "reduzir movimento".

## [0.17.0] — 2026-10-28

### Adicionado
- Ícones `check-circle` e `warning-circle` (anel com o símbolo recortado).
- Setas em 4 direções: `arrow-*`, `chevron-*` e `chevrons-*` (›››), com `*` = up · down · left · right.
- **Cores fixas** (iguais em todos os temas, um significado cada): `--pw-color-highlight` #E2B866 (destaque/ênfase), `--pw-color-next` #7CF3D0 (progressão, valor seguinte), `--pw-color-aura` #F0ABFC (boost e aura), `--pw-color-alert` #FFC27A (falta de item = warning).
- **Status**: `--pw-status-success` #8FE6B2, `--pw-status-warning`, `--pw-status-error` #FF9C9C, `--pw-status-info` #9FD8F5. Classes `.pw-c-*` para cada cor.

## [0.16.0] — 2026-10-27

### Adicionado
- **pw-card** primary: `frame="tech"`, moldura no estilo da Máquina do Mewtwo (cantos chanfrados, linha dupla com brilho interno, faixas diagonais nos cantos, gemas em losango, filetes de luz no topo e na base). Feita para o tema Mewtwo, com cores 100% dos tokens. Estados hover, selected e disabled iguais ao primary.

## [0.15.0] — 2026-10-27

### Adicionado
- **Scroll bar**: `<pw-scroll>` ou classe `.pw-scroll`. Barra de 2px, cantos arredondados, cor do metal do tema (acende no traçado ao passar o mouse). `axis` x · y, `track="none"`, `theme` e variáveis `--pw-scroll-size`, `--pw-scroll-radius`, `--pw-scroll-thumb`, `--pw-scroll-thumb-hover`, `--pw-scroll-track`. Funciona em todos os temas.

## [0.14.0] — 2026-10-27

### Alterado
- **Tema Mewtwo** passa do roxo-magenta para o violeta da arte da Máquina do Mewtwo: metal E3C8FF → 9B5CF0 → 6A35C8 → C79BFF, traçado D9B8FF, brilho B98BFF, fundo 2A1468 → 0D063A, tertiary 1E1252 → 0F0838 com traçado 1B0D50 · 7B4CCD · 3F176B · B855F1 · 3F1187 · 8C5CF0, Tabs 8934DB → 120934. Vale para todos os componentes no tema.

## [0.13.0] — 2026-10-26

### Adicionado
- **pw-number** (input number): `value`, `min`, `max`, `step`, `precision`; `layout` split · joined · compact; `size` sm · md · lg; botão de máximo (`show-max`, `max-label`); `label`, `help`, `prefix`, `suffix`; estados `invalid`, `disabled`, `readonly`; `block`, `theme`. Teclado (setas, Shift, Page Up/Down, Home/End), segurar para repetir, evento `change` com `detail.value`. Papel acessível `spinbutton`.

## [0.12.0] — 2026-10-26

### Adicionado
- **pw-button**: efeito de hover "sparkle" (adaptado do Button Hover Animation de Aaron Iker): botão sobe e brilha, anel de luz girando na borda, faixa de luz e partículas/estrelas subindo. Cores do tema.
- Configuração: `fx` (sparkle · glow · particles · none), `particles` (0–40) e as variáveis `--fx-color`, `--fx-particle-color`, `--fx-glow`, `--fx-glow-opacity`, `--fx-ring-width`, `--fx-ring-speed`, `--fx-sweep-opacity`, `--fx-sweep-speed`, `--fx-lift`, `--fx-scale`, `--fx-particle-size`, `--fx-particle-rise`, `--fx-particle-speed`, `--fx-duration`.

## [0.11.0] — 2026-10-26

### Adicionado
- **pw-button**: `variant` primary · secondary · ghost · danger · success; `appearance` fill · outline; `size` sm · md · lg · xl (28/36/44/52px); `icon` e `icon-end`; botão só de ícone com `label`; `disabled`, `loading`, `block`, `type`. Estados hover, pressed e foco visível.
- Primary usa o metal do tema: dourado no Poke World, rosa/roxo no Mewtwo (mesmo de-para das bordas). Referência: Adobe Spectrum.

## [0.10.0] — 2026-10-26

### Adicionado
- **pw-card** tertiary: propriedade `element`. Quando interativo e selecionado, usa o mesmo fundo elemental do Element Item (degradê do tipo + padrão da pétala). Nos outros estados, nada muda.

## [0.9.0] — 2026-10-26

### Adicionado
- **pw-badge**: `appearance` filled · outline; `tone` neutral · info · success · warning · error · new · brand (neutral e brand seguem o tema); `size` sm · md · lg (18/22/26px); `icon` à direita (ícones de interface ou de tipo); badge só de ícone com `label` acessível.
- Token `--pw-on-metal` (texto sobre o metal do tema; branco no Mewtwo).

## [0.8.0] — 2026-10-26

### Adicionado
- Ícones de interface `check` (visto com lâmina afinada) e `warning` (triângulo com exclamação recortada), no padrão de silhueta sólida.

## [0.7.0] — 2026-10-26

### Adicionado
- **pw-element-item**, estado selected: fundo próprio de cada elemento, com degradê nas cores do tipo e um padrão desenhado a partir das pétalas da roda (chamas, ondas, folhas, raios, cristais, favos, escamas, luas…). Só no Element Item e só quando selecionado.

## [0.6.0] — 2026-10-26

### Adicionado
- **Tokens de tipografia**: `--pw-font-title` (Spectral, títulos) e `--pw-font-body` (Inter, labels, textos complementares e informações maiores).
- Escala com 13 estilos (`title-xl/lg/md/sm`, `title-caps`, `body-lg/md/sm`, `label-lg/md/sm`, `caption`, `overline`): atalho `--pw-text-NOME` para `font:` e valores separados `-size`, `-line`, `-weight`, `-tracking`.
- Classes utilitárias `.pw-text-NOME`.

### Alterado
- **pw-card-header** usa `title-caps` (Spectral 700, 20px, caixa alta) no lugar de Cinzel.
- Tabs e Element Item usam `--pw-font-body`.

## [0.5.1] — 2026-10-26

### Alterado
- **pw-element-item**: padding 8px em todos os lados (gap entre ícone e texto continua 4px).

## [0.5.0] — 2026-10-26

### Adicionado
- **pw-element-item**: propriedade `width` (largura mínima em px). O card nunca fica menor que o conteúdo.

### Alterado
- **pw-element-item**: ícone e texto alinhados à esquerda e centralizados na vertical; o texto nunca quebra linha e o card cresce para caber (`block` também cresce além do container se preciso).

### Corrigido
- **pw-element-item**: o padding de 4px não era aplicado (o padding de 20px do tertiary tinha prioridade).

## [0.4.2] — 2026-10-26

### Alterado
- **pw-element-item**: padding 4px em todos os lados.

## [0.4.1] — 2026-10-26

### Alterado
- **pw-element-item**: padding 8px e 4px entre ícone e texto, em todos os tamanhos.

## [0.4.0] — 2026-10-26

### Adicionado
- **pw-element-item**: item de controle elemental (card tertiary interativo + ícone de tipo + nome + `meta` opcional). Tamanhos sm/md/lg, estados hover/selected/disabled, evento `change`.
- **18 temas elementais** (`theme="fogo"` ou `data-pw-theme="fogo"`), gerados a partir dos fundos da roda de tipos. Valem para todos os componentes. `theme="auto"` no element item usa o tema do próprio elemento.

## [0.3.0] — 2026-10-26

### Adicionado
- **Ícones de tipo elemental**: os 18 tipos (`<pw-icon type="fogo">`), com a arte fornecida, sem redesenho. Leitor de tela anuncia o nome do tipo. Originais em `icons/types/`.
- Tamanhos nomeados em `pw-icon`: `xs` 16, `sm` 20, `md` 24, `lg` 32, `xl` 48 (número em px continua valendo).
- `pw-tab icon="fogo"` aceita ícones de tipo.

## [0.2.0] — 2026-10-26

### Adicionado
- `pw-ds.js` agora traz os estilos embutidos: um único `<script>` basta. Funciona em páginas que não podem carregar CSS externo (como artifacts do Claude). Se a página já tiver `pw-ds.css`, o script não duplica.
- `storybook/index.html` no repositório como fonte única; `scripts/build.py` gera o `dist/` a partir dele.

### Alterado
- `pw-card` herda a fonte da página (antes forçava IBM Plex Sans).
- Card tertiary: degradê da borda na diagonal.
- Tabs: animação de troca de aba; texto Inter Regular 12px (md), 10px (sm), 14px (lg); padding 8px; brilho de hover do selected mais forte.
- Fundo radial do primary com as cores definitivas (0E3370 → 051839).

### Corrigido
- `pw-card` e `pw-card-header` soltam o ResizeObserver ao sair da página e voltam a observar ao retornar (páginas que recriam o HTML a cada clique).
- `.pw-titled` centraliza o header também dentro de layouts em grid.

## [0.1.0] — 2026-10-26

Primeira versão.

### Adicionado
- **pw-card**: variantes primary, secondary e tertiary; 7 tons semânticos; aparência outline; estados hover, pressed, selected, disabled e foco.
- **pw-card-header**: faixa de título com pontas, ícone opcional; composição `.pw-titled` com o card.
- **pw-tabs / pw-tab**: 3 tamanhos, ícone opcional, estados unselected, hover, selected, selected + hover e disabled; teclado WAI-ARIA; animação de troca de aba.
- **pw-icon**: craft, boost, limit-break, close.
- Temas Poke World (padrão) e Mewtwo.
