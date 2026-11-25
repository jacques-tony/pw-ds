# Changelog

Todas as mudanças da biblioteca. Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/), versões em [SemVer](https://semver.org/lang/pt-BR/).


























## 0.100.20

- v2 · Opções: coluna do menu 1px para dentro, deixando a borda azul do painel aparecer à esquerda e embaixo; 12px entre o item selecionado e a barra de rolagem; conteúdo rola por baixo do cabeçalho, sem overlay no topo (o de baixo continua).

## 0.100.19

- v2 · Opções: a coluna do menu lateral inteira fica mais escura, colada nas bordas do painel (da divisória do cabeçalho até o fundo), separada do conteúdo por uma linha vertical; sai o card interno; o rodapé fica só sob o conteúdo.

## 0.100.18

- v2 · Opções: cabeçalho no padrão dos widgets (56px, ícone de configurações, divisória da marca de 1px); menu lateral numa seção com fundo mais escuro, contorno fino e raio 10px, itens de 40px com espaçamento igual; menu sem overlay de rolagem (mantém a barra minimalista); conteúdo da direita mantém o overlay ao rolar; rodapé com Restaurar/Salvar volta a caber.

## 0.100.17

- Janelas arrastáveis pelo cabeçalho (Assistente de combo, Personalizar treinador, Sair, Opções): quando abertas centralizadas, não pulam mais para o canto ao começar a arrastar — a posição centralizada é convertida em posição real antes do arraste.
- Assistente de combo: "Salvar combo" só fica habilitado com pelo menos uma magia e o atalho preenchido; a dica explica o que falta.

## 0.100.16

- v2 · Assistente de combo: cabeçalho com a mesma altura e recuo dos widgets (56px, 16px) e o ícone do assistente de combo (o mesmo da barra superior) antes do título.

## 0.100.15

- v2 · Assistente de combo: cabeçalho no padrão dos widgets (faixa compacta de 34px com a divisória da marca de 1px) e botão fechar visível no cabeçalho (vale também para Opções, Personalizar treinador e Sair); magias alinhadas aos slots do combo.
- Assistente de combo: cada magia só pode entrar uma vez no combo (cliques repetidos não duplicam; a magia usada fica esmaecida); a animação ao adicionar fica só na imagem, sem mexer a etiqueta do número.

## 0.100.14

- Batalha: rótulo discreto "Filtros ˄/˅" acima da lista mostra/oculta os filtros e a ordenação (atributo `opts-hidden`, evento `optionstoggle`).
- v2 · Batalha: alvo selecionado ganha fundo vermelho leve além da borda vermelha.

## 0.100.13

- v2 · Batalha: alvo selecionado com borda vermelha de 2px; ícone de Grupo troca para "usuários com mais" do Line Icon Pack; respiro de 16px em todos os lados (topo, base e laterais iguais).

## 0.100.12

- v2 · Batalha: respiro superior igual ao inferior; filtros (Jogadores, NPCs, Pokémon selvagens, Pokémon de jogadores, Grupo) como botão primary — contorno amarelo quando desligado, amarelo cheio quando ligado, hover com leve aumento; alvo selecionado visível com borda amarela de 2px (antes o estado não aparecia na v2); ícones de jogador e grupo do Line Icon Pack.

## 0.100.11

- v2 · Estatísticas: respiro um token menor (12px em cima, 8px embaixo).
- v2 · menus suspensos: a barra de rolagem começa e termina 8px para dentro, alinhada ao título da primeira seção ("Versão"), sem passar das bordas.
- v2 · menu de exibição das Estatísticas: 240px de largura mínima e 8px de respiro entre o conteúdo e a barra de rolagem.

## 0.100.10

- v2 · Estatísticas: 16px de respiro acima e abaixo do conteúdo (como Mochila e Pokémon); rolagem começa abaixo do cabeçalho.
- v2 · menus suspensos (`pw-control-group`) com fundo sólido e barra de rolagem minimalista do DS.
- Estatísticas: reordenar itens do menu de exibição agora "pega" o item — ele vira um cartão que segue o cursor (levemente inclinado, com sombra), o lugar de destino fica marcado com um encaixe tracejado, a lista rola nas bordas e o cartão volta suave para o encaixe ao soltar.

## 0.100.9

- v2 · minimapa: barra de controles com padding fixo de 8px e tamanho fixo (centralizada, não cresce ao redimensionar o widget); barra de coordenadas/horário com o mesmo raio (12px), fundo e contorno da barra de controles; largura mínima do widget = barra de controles + 16px de recuo de cada lado (256px).
- Minimapa: excluir marcação abre num painel contextual ao lado do widget, como criar marcação (diálogo só com o minimapa maximizado).

## 0.100.8

- v2 · minimapa: ações da barra inferior como botão primary outline, sm, só ícone (borda e ícone amarelos, raio 8px); a barra usa raio 12px (raio do botão + recuo de 4px) para encaixar nos botões.
- v2 · ícones de marcação do mapa passam para o Line Icon Pack (estrela, coração, pin, setas, sacola, dinheiro, casa, perigo, atenção, energia, coroa, poção, ajuda, mapa, gema, além dos que já estavam). Caveira, ovo, pokébola e alvo seguem com o desenho atual por não existirem no pacote.

## 0.100.7

- v2 · minimapa: barra de coordenadas/horário e barra de controles com a mesma altura (36px) e o mesmo recuo lateral (16px); a barra de coordenadas desce 8px da divisória; botões de controle voltam a 28px (a escala geral dos botões da v2 quebrava a barra).
- v2 · ícone de maximizar troca para "abrir em janela maior" (caixa com seta para fora) do Line Icon Pack.

## 0.100.6

- v2 · widget Pokémon: 16px de respiro acima do conteúdo, igual ao de baixo.

## 0.100.5

- v2 · hover em slot com item: o item cresce 12% com transição suave.
- v2 · fim do "flick" ao recolher/abrir widgets: fundo e borda passam a ser do próprio card em CSS (acompanham a altura em tempo real) no lugar da moldura SVG redesenhada um quadro depois; o cabeçalho arredonda embaixo durante a animação (classes `collapsing`/`expanding`).

## 0.100.4

- v2 · Mochila/Loot/Pokémon: a área de rolagem começa abaixo do cabeçalho (sem margem negativa), então os slots não passam por baixo da divisória da marca; a barra de rolagem começa na altura dos slots; o degradê de "há mais acima" fica abaixo da divisória.

## 0.100.3

- v2 · Mochila/Loot/Pokémon: mesmo respiro acima e abaixo dos slots; hover nos itens volta (borda amarela de 1px + leve clareada).
- Mochila: ao abrir uma mochila com menos slots, o widget reduz a altura para não sobrar espaço vazio (mesmo depois de redimensionado à mão).
- Mochila: duplo clique na alça de redimensionar mostra todos os slots.

## 0.100.2

- v2 · a animação das barras da marca agora acontece junto com o recolher (classe `collapsing` durante a animação de altura); antes o atributo `collapsed` só entrava no fim e as barras sumiam sem transição.

## 0.100.1

- v2 · ao recolher o widget, as barras da marca encolhem até zero (do centro, 320ms) e voltam ao expandir; os cantos de teste encolhem para a própria ponta. Sem animação com "Reduzir movimento".

## 0.100.0

- v2 · sinal de marca oficial dos widgets: divisória de 1px de ponta a ponta no fim do cabeçalho (amarela, com o final azul em corte diagonal), em todos os widgets sem `brand`. Os testes continuam disponíveis via atributo `brand`.
- v2 · widget recolhido: o traçado da marca some por completo (inclusive os cantos de teste).

## 0.99.18

- v2 · teste de sinal de marca: opção `brand="under-full-15"`, a divisória inteira com 1,5px.

## 0.99.17

- v2 · `brand="under-full"`: divisória passa a 1px.

## 0.99.16

- v2 · `brand="under-full"`: barras amarela e azul ligadas direto por um corte diagonal, sem o vão entre elas.

## 0.99.15

- v2 · `brand="under-full"`: a divisória vai de borda a borda do widget.

## 0.99.14

- v2 · teste de sinal de marca: opção `brand="under-full"`, divisória inteira de 2px no fim do cabeçalho (amarela, com o trecho final azul após um corte diagonal).

## 0.99.13

- v2 · teste de sinal de marca: opção `brand="under"`, sublinhado de 3px sob o título (barra amarela + barra azul curta, pontas inclinadas) sobre a divisória do cabeçalho.

## 0.99.12

- v2 · teste de sinal de marca: opção `brand="none"`, widget sem nenhum detalhe de marca.

## 0.99.11

- v2 · teste de sinal de marca: nova opção `brand="br-sm"`, canto inferior direito com as barras menores (24px em vez de 40px).

## 0.99.10

- v2 · teste de sinal de marca ganha mais duas opções: `brand="tl"` (triângulo azul + faixa amarela recortados no canto superior esquerdo) e `brand="br"` (o mesmo no canto inferior direito), presas ao arredondado do widget.

## 0.99.9

- v2 · `brand="strip"`: a faixa acompanha o arredondado dos cantos do widget (inclusive recolhido), sem sobrar fora do contorno.

## 0.99.8

- v2 · contorno de 1px (`#2C5AB0`) em volta do widget inteiro, desenhado por cima do cabeçalho e do rodapé, que antes cobriam a borda.

## 0.99.7

- v2 · teste de sinal de marca: os três lado a lado (atual, `corner`, `strip`); `corner` some suave para baixo; `strip` passa a 5px.
- v2 · rodapé do bate-papo espelha a faixa do cabeçalho (mesmo fundo e linha divisória), fechando a moldura.

## 0.99.6

- v2 · teste de sinal de marca no cabeçalho (seção "Teste: sinal de marca no cabeçalho"): `brand="corner"` (faixas diagonais azul e amarela no canto superior esquerdo, ícone por cima com sombra leve) e `brand="strip"` (faixa de 4px no topo, azul com final amarelo em diagonal), lado a lado no bate-papo.

## 0.99.5

- `pw-widget-chat`: lista do painel de canais usa `pw-scroll` do DS.

## 0.99.4

- `pw-widget-chat`: "Canais" abre num painel contextual colado ao widget (direita, esquerda ou acima, conforme o espaço; alinhado embaixo quando o bate-papo está no fim da tela), no mesmo padrão da marcação do minimapa, em vez do diálogo central. Fecha com Cancelar, X, Esc ou clique fora.

## 0.99.3

- Alças de redimensionar (Mochila, Loot, Pokémon, Batalha, Estatísticas, Minimapa, Bate-papo) passam para fora do widget, com folga da borda, nas duas versões.

## 0.99.2

- v2 · widget recolhido: o cabeçalho fica com os cantos de baixo arredondados (10px) e sem a divisória inferior.

## 0.99.1

- v2 · botões um tamanho acima: sm 32px com ícone de 18px, md 40px/20px, lg 48px/22px, xl 56px/24px.
- v2 · ícones do Line Icon Pack fora de botão limitados a 1,5em (corrige o relógio gigante nas Estatísticas); títulos dos widgets voltam a cortar com reticências.

## 0.99.0

- v2 · ícones de ação padronizados com o [Line Icon Pack](https://lineiconpack.com) (preset Original no estado normal, Fill no hover, aba/item selecionado e botão pressionado): expandir/recolher (chevrons), bloquear/desbloquear, fechar, enviar, mensagem/chat, lixeira, mais, configurações, atualizar, play, busca, +/−, setas, tela cheia, check, editar, pin, ver, menu, relógio, sair e copiar. A v1 e o tema Mewtwo continuam com os ícones atuais.
- Crédito ao Line Icon Pack no Storybook, como pede a licença.

## 0.98.6

- v2 · bate-papo: abas no menor tamanho (pílula de 24px, texto 12px), inativas em azul cheio e ativa em amarelo; 8px de respiro entre o cabeçalho e as abas.
- v2 · sinal de marca desenhado em SVG (polígonos) em vez de degradê, sem serrilhado na diagonal.

## 0.98.5

- v2: o sinal de marca (faixa diagonal azul + amarela) passa para o canto superior esquerdo do cabeçalho dos widgets e janelas, colado na borda e acompanhando o arredondado; sai das barrinhas depois do título.

## 0.98.4

- Simulação (Global Navigation): começa só com a HUD inferior, a barra de magias e o bate-papo. Minimapa, Batalha, Estatísticas, Mochila e Pokémon começam fechados e abrem pela barra superior.

## 0.98.3

- v2 · botões crescem 4% no hover com transição suave (180ms) e voltam a 98% ao pressionar; desligado com "Reduzir movimento".

## 0.98.2

- v2 · botões reestruturados no padrão filled / outline / ghost por variante (primary, secondary, danger, success): outline com fundo transparente e borda e texto na cor da variante; ghost só texto. Hover simples: só a cor de fundo muda (token `--b-h` por variante), sem brilho, escala, deslocamento ou partículas; foco com anel amarelo de 2px; desativado a 45%.
- v2 · hovers simplificados em cards interativos (sem elevação/brilho), itens de lista e abas.
- v2 · tema Mewtwo continua na versão 1 (cards, botões, abas e tokens) mesmo com a v2 ativa.

## 0.98.1

- v2: tokens de verde e vermelho do site (`#3DDC84`, `#FF5A5A`) em todos os tons success/error (sólido, borda, texto, tint, status, barras), sem halo nem brilho. Botão success em verde chapado com texto escuro; outlines de success e danger em linha fina da cor.
- v1: botão success mais contido (sem halo externo, sem sombra no texto, brilho de topo reduzido).

## 0.98.0

- **Versão 2 (prévia)** ao lado da v1, sem alterar a v1: ativada por `<html data-ds="v2">` e pelo seletor de versão no topo da navegação do Storybook (lembrado no navegador).
- v2 segue o tema azul do site: painel `#0A2352` em degradê, borda 1px `#2C5AB0`, linha interna `rgba(157,240,255,.16)`, fonte Archivo, títulos em faixa simples com as duas barrinhas inclinadas (azul `#1D7AEE` + amarelo `#FFE14D`), amarelo volt só no ativo (aba, item de menu, botão principal, chave), botões em 3 pesos, abas em pílula, cards arredondados sem chanfro, brilho ou vidro. Vale para todos os componentes e widgets da v1.

## 0.97.0

- Oficial: cantos dos cards por token (`--pw-chamfer-sm` 12px no primary, `--pw-chamfer-md` 24px no secondary, pontas `--pw-chamfer-curve`) e borda metal em um único traço (degradê `metal-0..3` a 135° com tom claro realçado; 2px, 1px em cards pequenos). Tertiary com 4 paradas da paleta própria; quaternary com as 3.
- Removidos: canto exportado em SVG (`CORNERS`, `outline`), traço de filamento duplo e camada "vidro" (soft-light) dos cards, e os atributos de teste `corners` e `border`.
- Storybook: as duas seções de teste viram a seção "Chanfro e borda (tokens)".

## 0.96.1

- `pw-card border="metal"` (teste): tom claro do metal realçado no degradê (metal-0 com 55% de branco, metal-1 com 25%, metal-2 com 12%) para recuperar o brilho que vinha do vidro.
- Storybook: `<meta charset="utf-8">` no topo para o navegador nunca errar a codificação.

## 0.96.0

- `pw-card`: teste `border="metal"` — borda em um único traço (degradê `metal-0..3` a 135°, 2px nas cascas e 1px em cards pequenos), sem filamento nem vidro. Tertiary cai para 4 paradas da própria paleta; quaternary mantém as 3. Comparação lado a lado na seção "Borda metálica: atual × uma linha".

## 0.95.1

- `pw-card corners="token"`: nitidez em 100% — a curva das pontas fica proporcional ao chanfro (4px no md, 2px no sm, como o SVG original) e a diagonal é alinhada à grade de pixels (x+y = n+0,5), eliminando o serrilhado.

## 0.95.0

- Tokens novos: `--pw-chamfer-sm` (12px, primary), `--pw-chamfer-md` (24px, secondary) e `--pw-chamfer-curve` (4px).
- `pw-card`: teste `corners="token"` — canto gerado por código (diagonal reta do token + pontas curvas), comparado lado a lado com o canto atual na seção "Chanfro: atual × por token".
- Limpeza: removidos o canto "Épico" (`CORNERS.primary`) e `curls`, que não eram usados.

## 0.94.5

- Modo clássico: recorte do fundo dos painéis laterais acompanha o chanfro do card (14px), corrigindo o canto superior interno com borda quebrada.

## 0.94.4

- Modo clássico: corrigido o cálculo que escondia a borda interna dos painéis laterais (um painel só esconde a borda do lado que outro painel cobre por inteiro). Borda dourada volta no lado do jogo dos painéis laterais, de cima até o bate-papo, e no topo do bate-papo.

## 0.94.3

- Modo clássico: `pw-dock` mostra a borda dourada só nos lados que encostam no jogo; some nas bordas da tela e onde um painel encosta no outro (fim da borda dupla entre bate-papo e painéis laterais). Fundo sólido do painel preenche as bordas escondidas.
- Simulação: ao entrar no modo clássico, todos os widgets visíveis (Minimapa, Batalha, Estatísticas, Mochila, Pokémon, Loot) encaixam automaticamente no painel do lado em que estão.

## 0.94.2

- Modo clássico: `pw-dock` volta a usar o card de fundo com borda dourada e chanfros (cantos retos só nas bordas da tela e embaixo), como antes da 0.91.7.

## 0.94.1

- `pw-widget-combo`: sprites com a mesma altura (96px, largura proporcional, como o Caterpie) e 24px mais para a esquerda; nome em `title-lg` com as tags de tipo logo abaixo.

## 0.94.0

- `pw-widget-combo`: ambientação por Pokémon (`pokemon.ambient`) atrás do cabeçalho, esmaecendo com máscara para a esquerda e para baixo sobre as magias; sprite do Pokémon fora do card, só com sombra leve. Simulação: ambientes em SVG (código, sem PNG) para Charizard (brasas), Blastoise (água), Gengar (névoa), Caterpie e Metapod (folhas).

## 0.93.5

- `pw-widget-stats`: itens e seções do menu (⋮) podem ser arrastados (alça ⠿) para reordenar; o widget segue a mesma ordem, guardada por versão (propriedade `order`, evento `orderchange`). O menu fecha ao rolar o widget, em vez de ficar solto longe do botão.

## 0.93.4

- `pw-widget-stats`: as duas versões são personalizáveis pelo menu (⋮). Minimalista: itens (marcados) + outras seções (desmarcadas). Completa: itens do resumo e seções, todos marcados por padrão. Escolhas guardadas por versão: `hiddenMinimal`, `minimalSections`, `fullHiddenRows`, `fullHidden`; eventos `rowschange` e `sectionschange`.

## 0.93.3

- `pw-widget-stats`: a versão completa sempre mostra todas as seções (menu só com a troca de versão). Na minimalista, o menu traz os itens (XP total, Loot, Gasto, Saldo, Dano) e as outras seções (desmarcadas por padrão) para adicionar abaixo. `hiddenSections` foi substituída por `minimalSections`; `sectionschange` envia `detail.sections`.

## 0.93.2

- `pw-widget-stats`: na versão minimalista o menu (⋮) traz checkboxes para cada item (XP total, Loot, Gasto em $, Saldo em $, Dano); na completa, para cada seção. Propriedade `hiddenMinimal` e evento `minimalchange`.

## 0.93.1

- `pw-widget-stats`: "Loot em R$" vira "Loot". O menu (⋮) ganha checkboxes por seção da versão completa (Experiência, Saque, Suprimentos, Inimigos derrotados, Dano causado, Dano recebido) para o jogador escolher o que aparece; propriedade `hiddenSections` e evento `sectionschange`. O menu fica aberto enquanto marca as seções.

## 0.93.0

- `pw-widget-stats`: modo de exibição com menu (⋮) no canto direito da seção Sessão — Versão minimalista (padrão) ou Versão completa. A minimalista mostra só XP total, Loot em R$, Gasto em $, Saldo em $ e Dano, vindos de `stats.minimal`. Atributo/propriedade `view="minimal|full"` e evento `viewchange`.

## 0.92.8

- `pw-widget-combo`: card do Pokémon 32px mais para a esquerda (afastado do botão fechar).

## 0.92.7

- `pw-widget-combo`: nome e detalhes alinhados ao topo do card do Pokémon; card do Pokémon 25% menor (96px, padding 12px, sprite 72px).

## 0.92.6

- `pw-widget-combo`: card do Pokémon vai para a direita do cabeçalho, 20% maior (sprite em 96px) com 16px de padding interno.

## 0.92.5

- Barra superior: removidos os ícones Habilidades e Atalhos (simulação e exemplo do `pw-navbar`).

## 0.92.4

- Modo clássico: widgets encaixados mantêm sempre o chanfro padrão do card em todos os cantos.

## 0.92.3

- `pw-party`: no modo Mover, dá para arrastar segurando em qualquer parte do card de fundo, não só nos cards dos Pokémon.

## 0.92.2

- Modo clássico: a borda superior do bate-papo encaixado acompanha o chanfro dos cantos (usa a própria moldura do card, mascarada abaixo do topo).

## 0.92.1

- `pw-party`: "Mover" do menu contextual vira um modo igual ao Editar ordem — fundo do card e botão ✓ aparecem; arraste a equipe (ou setas); ✓/Enter salva, Esc volta à posição anterior.

## 0.92.0

- Modo clássico: bate-papo encaixado só com a borda superior (divisão com a HUD). Widgets encaixados ficam com canto reto só nos cantos que tocam a borda da tela; entre widgets mantêm o chanfro.
- `pw-party` (perfil reduzido flutuante): sem fundo, alça e botão no hover; Mover, Modo minimalista/completo e Editar ordem ficam num menu contextual pelo botão direito. Mover faz a equipe seguir o ponteiro até o próximo clique (Esc cancela).

## 0.91.9

- Modo clássico: widgets encaixados voltam a ter a moldura dourada; só o bate-papo fica sem borda.

## 0.91.8

- Modo clássico: `pw-dock` passa a pintar o fundo sólido direto até as bordas (sem o filete do card de fundo), com chanfro só nos cantos superiores internos via clip-path. Widgets encaixados, incluindo o bate-papo, ficam sem moldura dourada e encostam nas bordas da tela e nos painéis laterais.

## 0.91.7

- Modo clássico: `pw-dock` (painéis laterais e inferior) sem a moldura dourada; fica só o fundo. Os widgets encaixados mantêm a própria borda.

## 0.91.6

- `pw-widget-minimap`: diálogo de marcação em tela cheia sem overlay escurecendo a página.

## 0.91.5

- `pw-widget-minimap`: criar/editar marcação abre num painel lateral integrado ao widget (à direita, ou à esquerda se faltar espaço). Com o minimapa maximizado, segue o diálogo, agora com card primary sem glow na borda.

## 0.91.4

- `pw-card-header variant="banner"`: removido o halo de brilho que vazava abaixo do header.

## 0.91.3

- Simulação: corrigido erro (`PW_POKE_SPR is not defined`) que impedia o Assistente de combo de mostrar o Pokémon ao clicar na equipe da HUD.

## 0.91.2

- `pw-widget-combo`: imagem do Pokémon passa a ser o sprite do jogo (`pokemon.sprite`, com fallback para `image`) em um card pequeno à esquerda; nome, tipos e detalhes ficam à direita; magias e combo ocupam a largura toda. Largura volta para 640px. Simulação: sprites de Charizard, Blastoise, Gengar, Caterpie e Metapod.

## 0.91.1

- `pw-widget-exit`: texto centralizado na largura toda do card (removido o limite de largura dos parágrafos).

## 0.91.0

- Novo `pw-widget-exit` (Sair do jogo): banner do HUD arrastável + card tech sólido, texto explicativo e ações Forçar saída / Sair do jogo / Cancelar; evento `exit` cancelável com `detail.force`. Na simulação abre pelo ícone de saída da barra superior.

## 0.90.17

- `pw-widget-combo`: removido o quadro de efetividade; magias e combo ficam ao lado da imagem do Pokémon; largura do widget passa para 768px para as magias caberem em uma linha.

## 0.90.16

- `pw-widget-options`: o banner do cabeçalho anima ao abrir o painel.

## 0.90.15

- `pw-widget-options`: botões do rodapé com 24px de respiro; "Concluir" virou "Salvar"; removido o texto "As alterações são aplicadas na hora." (o status segue anunciado só para leitores de tela).

## 0.90.14

- `pw-widget-options`: card tech com `fill="solid"`; overlay em degradê no topo e na base das áreas roláveis (categorias e conteúdo) para o conteúdo não parecer cortado.

## 0.90.13

- `pw-widget-options`: removido o check da categoria selecionada no menu.

## 0.90.12

- `pw-widget-options`: padding de 24px no conteúdo do card.

## 0.90.11

- `pw-widget-options`: removida a busca de configuração e os divisores entre topo, navegação, conteúdo e rodapé.

## 0.90.10

- `pw-widget-options`: navegação de categorias usa `pw-scroll` do DS; a subseção clicada fica marcada na hora e, no fim da rolagem, a última seção (ex.: Opacidade) é destacada.

## 0.90.9

- `pw-widget-options`: cabeçalho banner do HUD (arrastável) e card tech, no padrão do assistente de combo e do Personalizar treinador; busca passa para a barra interna do card.

## 0.90.8

- Modo clássico: o canto superior interno dos painéis laterais e dos widgets encaixados volta a ter chanfro; só os cantos na borda lateral da tela e os inferiores ficam retos.

## 0.90.7

- Modo clássico: `pw-dock` e widgets encaixados ficam sem chanfro nos cantos que tocam a borda da tela e nos cantos inferiores (junção com o bate-papo e os painéis); cantos superiores internos mantêm o chanfro.

## 0.90.6

- Modo clássico: `pw-dock` e widgets encaixados mantêm os chanfros padrão (antes ficavam com cantos retos).

## 0.90.5

- `pw-widget-outfit`: rolagem nas abas Títulos e Efeitos quando a lista excede o card; paleta de Cores ocupa todo o espaço disponível do card.

## 0.90.4

- `pw-widget-outfit`: divisor das abas até o fim do modal; 16px de padding e espaçamento nos cards internos (incluindo o checkbox).
- Simulação: removido Deslocamento do menu do personagem.

## 0.90.3
- `pw-widget-outfit`: painel mais baixo; 16px entre as abas e os cards; sem os quadradinhos de cor nos botões Cabeça/Corpo/Pernas/Pés.
- Itens bloqueados (`locked: true` em roupas, títulos e efeitos): esmaecidos, com cadeado, tooltip “Bloqueado” e não selecionáveis. Checkbox **Mostrar apenas liberados** (`pw-checkbox`) nas abas Visual, Títulos e Efeitos.

## 0.90.2
- `pw-widget-outfit`: sprites centralizados pelo conteúdo real do quadro (campos `ox`/`oy`); painel com a mesma altura em todas as abas; card de nome alinhado ao topo do painel da esquerda; prévia em card tertiary retangular, centralizada; Confirmar alinhado embaixo; modal um pouco mais largo.

## 0.90.1
- `pw-widget-outfit`: sprites olhando para frente (coluna 3); girar percorre as 4 direções (colunas) e andar anima os 3 quadros (linhas); abas `pw-tabs` folder `xs`; card de nome com altura fixa (linha do título e do efeito sempre reservadas); removido o texto “Escolha a parte e depois uma cor”.

## 0.90.0
- Novo `<pw-widget-outfit>` (Personalizar treinador): janela `pw-card` tech + `pw-card-header` banner (animado, sem linhas/ícones), abas `pw-tabs` Visual / Títulos / Efeitos / Cores.
  - Itens em `pw-card` tertiary (brand quando selecionado).
  - Paleta de 133 cores por parte (cabeça, corpo, pernas, pés), navegável por setas.
  - Prévia ao vivo com título, nome e efeito, botões girar e andar (sprite 4×3 quadros de 64px) e Confirmar.
  - Evento `confirm` (cancelável) com `{ outfit, title, effect, colors }`.
- Simulação: botão direito no personagem abre o menu (Examinar, Usar, Deslocamento, Escolher roupa, Copiar nome); **Escolher roupa** abre o widget.
- Sprites de exemplo em `assets/outfits/`.

## 0.89.1
- `pw-widget-minimap`: botão direito em cima de uma marcação abre **Editar marcação** (mesmo diálogo, preenchido, botão Salvar) e **Excluir marcação** (confirmação em `pw-dialog`). Eventos `markedit` e `markdelete` (canceláveis).

## 0.89.0
- `pw-widget-minimap`: botão direito no mapa abre um menu (`pw-control-group`) com **Criar marcação**, que abre o diálogo **Criar marca no mapa** (`pw-dialog`): posição do ponto clicado com botão copiar, grade de 28 ícones em `pw-card` tertiary (radio, navegável por setas), descrição (`pw-input`), Cancelar / Criar marca. A marca aparece no mapa no andar certo, com tooltip da descrição. Evento `mark` (cancelável); marcas ficam em `minimap.marks`.

## 0.88.0
- `pw-hud`: hotkeys com recarga igual à barra de spells (varredura + segundos, ícone acinzentado, brilho ao ficar pronta). Campo `cd` (segundos) no atalho; usar durante a recarga é bloqueado; método `cooldown(slot, segundos)`.
- Demo: Pó vermelho 3s, Garra do dragão 8s, Pedra azul 5s, Cristal verde 12s.

## 0.87.6
- Widgets com `static` (ex.: bate-papo fixo no modo Clássico) ficam fora do magnetismo: outros widgets não grudam nem arrastam/empurram ele, e ele não move vizinhos.

## 0.87.5
- Simulação (Clássico): barra de spells empurrada em tempo real ao redimensionar o painel inferior (sem a transição da HUD durante o arraste e cálculo no mesmo quadro).

## 0.87.4
- `pw-dock`: soltar um widget entre dois widgets do painel conecta ele no meio (ordem pela posição).
- Simulação (Clássico): painel inferior com 224px de altura mínima (mesma largura dos painéis laterais); chat fixo sem recolher nem bloquear; a barra de spells só se move quando a HUD, empurrada pelo painel inferior, encosta nela (e volta à posição original no Estendido).

## 0.87.3
- `pw-dock`: novos atributos `resizable` (alça na borda de cima para mudar a altura; `min`/`max`, setas ↑ ↓, evento `resize`) e `overlap` (o widget avança N px sobre as bordas vizinhas, evitando linha dupla).
- Simulação (Clássico): chat sem linha dupla nas extremidades e com altura ajustável arrastando a borda de cima; HUD e barra de spells acompanham.

## 0.87.2
- Widgets: magnetismo ignora elementos `pw-widget-*` sem conjunto (Opções, Assistente de combo, Barra de spells). Um erro ali interrompia a troca Clássico ↔ Estendido: o chat não ia para a barra inferior e os widgets dos painéis não voltavam à posição.

## 0.87.1
- `pw-dock`: sem o tracejado ao arrastar sobre o painel; efeito de magnetismo em volta de todo o widget ao fixar; widgets empilhados sobrepõem a borda (linha única na junção); widgets fixos podem ajustar a altura pela borda de baixo.
- Simulação (Clássico): bate-papo fixo na barra inferior (não arrasta nem redimensiona).

## 0.87.0
- Novo `<pw-dock>`: painel onde widgets ficam fixos. Soltar um widget sobre o painel fixa (largura do painel, sem chanfros, sem alças de largura); arrastar para fora solta e devolve o tamanho; arrastar dentro reordena. `orientation="horizontal"` faz o widget preencher o painel. Eventos `dock` / `undock`.
- `pw-widget-options`: Modo de visualização passa a ser **Estendido** / **Clássico**.
- Simulação: modo Clássico com painéis laterais de largura fixa (largura da Mochila, 224px) em toda a altura e barra inferior com o chat ocupando o espaço restante; Mochila e Pokémon vão para o painel direito, Minimap para o esquerdo. Voltar para Estendido restaura as posições.

## 0.86.2
- `pw-widget-combo`: quantidade de espaços do combo igual à quantidade de magias do Pokémon invocado (antes fixa em 8).

## 0.86.1
- `pw-card-header` `no-lines`: remove só as linhas (as asas laterais ficam).
- `pw-widget-combo`: banner com `animate`, tocando a animação de abertura sempre que o widget abre; lista todas as magias do Pokémon invocado (10 na demo).

## 0.86.0
- `pw-card-header` banner: novos booleanos `no-lines` (sem linhas/asas laterais) e `no-icons` (sem os ✦).
- `pw-widget-combo`:
  - Banner com `no-lines no-icons`; padding de 24px no conteúdo e no botão fechar.
  - Tipos com `pw-badge icon`; número/classe/nível colados ao nome.
  - Efetividade num card próprio com 5 níveis (super efetivo, efetivo, normal, inefetivo, muito inefetivo).
  - Dica abaixo das magias.
  - Slots com raio de 8px e 2px menores (40×40).
  - Combo sem espaços vazios no meio (vai sempre para o próximo espaço; arrastar insere e reordena).
  - Atalho no `pw-input` do DS (foco + tecla).
  - Um combo por Pokémon (salvar substitui; sem lista de predefinições); arte em `pw-card` tertiary brand ocupando a altura disponível.
- `pw-widget-spells`: novo atributo `combo-key` — mostra a tecla do combo como badge no slot do Assistente de combo, no padrão das spells.
- Simulação: começa sem Pokémon invocado; salvar o combo mostra a tecla na barra de spells e troca ao invocar outro Pokémon.

## 0.85.1
- `pw-widget-combo`: janela em `pw-card` tech com título `pw-card-header` banner (arrastar pelo banner); combos salvos em uma linha só.

## 0.85.0
- Novo `<pw-widget-combo>` (Assistente de combo), sempre ligado ao Pokémon invocado:
  - Ficha com arte, nome, número, classe, nível, tipos (`pw-badge` + `pw-icon`) e efetividade em 4 níveis com cor.
  - Magias para arrastar ou clicar; combo de 8 espaços numerados, reordenar arrastando, clique remove; tempo estimado do combo.
  - Atalho gravado por tecla (`pw-input`); Salvar / Limpar; lista de combos salvos por Pokémon (`pw-list` + `pw-kbd`) com editar e apagar.
  - Sem Pokémon invocado mostra `pw-empty`.
  - API `show(pokemon)`, `close()`, `pokemon`, `combos`; evento `save` (cancelável).
- `pw-hud`: novo evento `teamselect` ao trocar o Pokémon ativo.
- Simulação: abre pelo ícone de minigames da barra superior e pelo slot ⚡ da barra de spells, e acompanha o Pokémon invocado.

## 0.84.0
- `pw-widget-spells`: tom `brand` (moldura dourada) passa a ser o padrão dos slots e do assistente de combo; demo de comparação removida. `slot-tone="neutral"` continua disponível.

## 0.83.3
- Diálogo **Mover itens**: corpo sem rolagem — ao clicar em − / + não aparece mais barra de scroll.

## 0.83.2
- Diálogo **Mover itens**: sem overlay (o jogo continua visível e sem escurecer) e quantidade inicial 1.

## 0.83.1
- Diálogo **Mover itens**: card `primary`, quantidade só com `pw-number` (− / + e botão **Máx.**), sem a faixa; todos os botões sem efeitos (`fx="none"`), inclusive o fechar.
- `pw-number`: corrigido o campo que não atualizava ao usar − / + ou Máx. com o campo em foco (ao sair do campo, o valor antigo voltava).

## 0.83.0
- `pw-widget-bag` (e Loot Stash): arrastar itens entre espaços, mochilas e o Loot Stash. Soltar em espaço vazio move; no mesmo item empilha; em outro item troca; numa mochila guarda dentro dela.
- Pilhas com mais de 1 abrem o diálogo **Mover itens** (`pw-dialog` + `pw-card` + `pw-number` + `pw-slider` + `pw-button`): quantidade com campo, faixa e setas ‹ ›, Confirmar (Enter) e Cancelar (Esc).
- Evento `itemmove` (cancelável) com origem, destino, item e quantidade.

## 0.82.3
- `pw-widget-spells`: badge do atalho segue o `pw-badge` xs padrão, com largura mínima igual à altura (14×14) — antes ficava estreita (9px) em números de 1 dígito.

## 0.82.2
- `pw-widget-spells`: raio do card da spell em 8px.

## 0.82.1
- `pw-widget-spells`: card da spell com raio de 12px e 2px menor (30×30); a arte da spell mantém o tamanho (30×30) e a borda do tom fica por cima dela.
- `pw-card` tertiary: raio da moldura configurável por `--ter-r` (padrão 8px).

## 0.82.0
- Card de Pokémon vazio usa o verso de carta PokeWorld Universe: vertical na HUD fixa (`assets/hud/empty-slot.webp`), horizontal na equipe flutuante (`assets/hud/empty-slot-h.webp`, `window.PW_PARTY_EMPTY` para trocar).
- `pw-party[minimal]` mais compacto: cards de 28px de altura, barras de 4px com 2px entre elas, 4px entre os cards.

## 0.81.1
- `pw-widget-spells`: novo atributo `slot-tone` (`neutral` padrão, `brand` em teste) para o tom dos slots de spell e do assistente de combo. Demo mostra as duas versões lado a lado para comparação.

## 0.81.0
- Novo `<pw-widget-options>` (Widget Opções) com todas as configurações do jogo, reorganizadas em 9 categorias:
  - Geral: idioma, fonte, diálogo, notificações.
  - Interface: layout e janelas, HUD e Pokémon, barra de ações, minimapa, opacidade.
  - Mapa e combate: mapa e criaturas, golpes.
  - Controles: movimento, confirmações, tempos de resposta.
  - Chat: console, mensagens privadas.
  - Gráficos: tela, qualidade, iluminação.
  - Áudio: volume, sons.
  - Atalhos: perfis (criar/renomear/apagar), busca, tabela Primário/Secundário/Terciário com gravação de tecla, adicionar mensagem, redefinir tudo.
  - Backup: salvar/carregar com pasta e itens.
  - Busca global com destaque, subseções com scroll-spy, dependências entre opções, restaurar padrões por categoria, arrastar pela barra de título, Esc fecha.
  - API `show()`, `close()`, `open(categoria)`, `values`; eventos `change`, `hotkey`, `reset`, `backup-save`, `backup-load`, `manage-ignored`.
- Novos componentes `pw-switch` e `pw-slider`.
- Novos ícones: `volume`, `monitor`, `keyboard`, `save`, `gamepad`.
- Simulação: o ícone Configurações da barra superior abre as Opções.

## 0.80.6
- `pw-widget-spells`: Assistente de combo virou um slot (`pw-card` tertiary com ícone `zap`) no fim da barra, depois das spells; saiu do menu de opções. Dispara o evento `combo`; fica desativado durante a edição de ordem.

## 0.80.5
- `pw-party`: cabeçalho do bloco com 12px de padding em todos os lados (alça, ⋮ e ✓ a 12px das bordas e 12px até os cards); tokens `--pt-pad` e `--pt-hd`.

## 0.80.4
- `pw-party`: arte em camada própria dentro da moldura (a borda do card fica por cima e inteira), cobrindo a altura do card e esmaecendo com máscara suave até as barras — sem o degradê por cima que deixava o corte da imagem e os cantos estranhos; botão de opções (⋮) e ✓ com 8px de respiro da borda direita.

## 0.80.3
- `pw-party`:
  - Corrigida a ponta no canto direito dos cards (o degradê agora segue o raio da moldura, por dentro dela).
  - Degradê sobre a arte mais suave (várias paradas).
  - Modo minimalista mostra as barras de vida e de CD, ambas sem o valor.
  - Alça de mover no canto esquerdo; botão de opções (⋮) com respiro no canto direito; o ✓ de salvar a ordem aparece no lugar do botão de opções.

## 0.80.2
- `pw-party`: arte do Pokémon volta a ser o fundo do próprio `pw-card` (`bg-image`, dentro da moldura) em vez de uma camada por cima; degradê para as barras.
- Espaçamentos padronizados em 4px: badges de atalho e tipos a 4px das bordas, 4px entre as barras.
- Selecionado (25% maior) mantém as badges no mesmo tamanho dos outros cards.
- Corrigido `aria-label` quebrado nos cards.

## 0.80.1
- `pw-card` tertiary `highlight`: corrigida a borda dourada dupla — o anel de `box-shadow` (com raio diferente da moldura) foi removido; a borda agora é só a moldura dourada, e o brilho externo continua. Vale para todos os cards em destaque (HUD, equipe flutuante, demos).

## 0.80.0
- `pw-party`:
  - Novo botão ghost (⋮) no canto direito, visível no hover, que abre um `pw-control-group` com **Modo minimalista** / **Modo completo** e **Editar ordem**.
  - Editar ordem saiu do menu de cada card (botão direito nos cards da equipe flutuante não abre mais menu).
  - Novo atributo `minimal`: cards menores só com a arte e a vida (sem atalho, tipos e CD); evento `minimal`.

## 0.79.1
- `pw-party`: ao editar a ordem pelo perfil reduzido, o botão ✓ de salvar aparece junto dos cards flutuantes (no lugar da alça); a barra de salvar da HUD fica escondida nesse caso.
- Mover o conjunto: o bloco agora acompanha o ponteiro exatamente, sem pular para longe da alça (descontava a margem duas vezes).

## 0.79.0
- `pw-party`:
  - Troca de Pokémon selecionado mais suave: o card que cresce e o que diminui animam tamanho e posição juntos, e os outros deslizam para o lugar; não recria os cards quando nada mudou.
  - Mover o conjunto no mesmo padrão da barra de spells: fundo `pw-card` tertiary e alça ⠿ só ao passar o mouse; cadeado quando `locked`.

## 0.78.4
- `pw-widget-spells`: botões de menu e de check (salvar ordem) com o formato padrão do `pw-button` (sem arredondamento total).

## 0.78.3
- `pw-widget-spells`: ao editar a ordem, um botão de check (✓) aparece no lugar do botão de menu para salvar; removida a faixa "Arraste as spells…" (a dica fica no tooltip do check).

## 0.78.2
- `pw-widget-spells`: menu de ações usa o `pw-control-group` padrão do DS em `size="sm"` (mesmo dos menus da HUD e da Batalha), sem o `type` que alterava a aparência.

## 0.78.1
- `pw-widget-spells`:
  - Bloqueada mostra um ícone de cadeado no lugar da alça.
  - Editar ordem igual à HUD: barra "Arraste as spells para mudar a ordem" + Salvar, slots balançando, arrastar com as outras abrindo espaço animado, números acompanhando; Salvar, Enter, Esc ou clique fora conclui.
  - Redefinir ordem (e Shift + setas) com animação das spells voltando ao lugar.
  - Botão de ações só aparece no hover/foco (fica visível com o menu aberto).
  - Fundo da barra agora é um `pw-card` tertiary do DS.

## 0.78.0
- Novo `<pw-widget-spells>` (Barra de spells), com até 12 spells:
  - Slots `pw-card` tertiary 32×32 com `pw-badge` do atalho.
  - Fundo e alça de mover aparecem só ao passar o mouse.
  - Horizontal ou vertical (`orientation`).
  - Recarga com varredura e segundos; usa a arte "off" quando informada (`imageOff`), senão escurece.
  - Menu (`pw-button` + `pw-control-group`): Mudar orientação, Bloquear, Editar ordem (arrastar slot sobre slot ou Shift + setas), Redefinir ordem e Assistente de combo.
  - API `spells`, `cast()`, `cooldown()`, `edit()`, `resetOrder()`; eventos `cast` (cancelável), `ready`, `reorder`, `combo`, `move`, `lock`, `orientation`.
- Novos ícones: `grip`, `rotate-cw`.
- Ícones de spells de exemplo em `icons/spells/`.
- Simulação: barra de spells acima da HUD.

## 0.77.2
- Simulação: itens coletados no Loot Stash entram na Mochila — empilham no mesmo item (somando a quantidade) ou ocupam o primeiro espaço livre, com um destaque rápido nos slots que mudaram. Se a Mochila estiver cheia, a coleta é cancelada.

## 0.77.1
- Simulação: o Loot Stash abre e fecha pelo botão **Coleta automática** do card de perfil da HUD inferior (não mais pelo ícone Caça da barra superior).

## 0.77.0
- Novo `<pw-widget-loot>` (Widget Loot Stash): estende a Mochila (mesma casca, grade de slots 32×32, magnetismo, overlay de rolagem) e só redimensiona na altura.
  - Clique (ou Espaço/Enter) seleciona itens, com marcação de check.
  - Rodapé com espaços ocupados / total e quantidade selecionada.
  - Botões **Coletar** e **Enviar para stash** agem nos selecionados ou em tudo; os itens saem com animação.
  - API `items`, `selected`; eventos `collect` e `stash` (canceláveis).

## 0.76.0
- Todos os widgets (`pw-widget-*`) agora se conectam ao topo da HUD inferior (`pw-hud`) por magnetismo, como já fazem com a barra superior. A HUD não se move com o conjunto.
- Widgets conectados à HUD acompanham quando ela muda de altura (perfil reduzido, esconder hotkeys), levando o grupo junto.

## 0.75.2
- Restaurado o `data-tip-title` que tinha sido removido por engano em 0.65.0: tooltips voltam a mostrar o título (nome do Pokémon na HUD, ações do perfil, hotkeys, pins do minimapa e demos).
- `pw-party`: tooltip com nome, nível e HP, igual à HUD fixa.

## 0.75.1
- Novas artes de Charizard, Blastoise, Gengar, Caterpie e Metapod na HUD fixa e na equipe flutuante (`assets/art/`).
- `pw-party`: a arte ocupa a parte esquerda do card, centralizada no Pokémon e esmaecendo sob as barras.

## 0.75.0
- `pw-party` (equipe no perfil reduzido) refeito com `pw-card` tertiary, igual ao card da HUD fixa:
  - Mesmas badges: atalho `pw-badge` xs no canto superior direito e tipos `2xs` empilhados.
  - Barra de vida e nova barra de CD, com texto dentro (% e "CD Ns"/"Sem CD").
  - Card vazio igual ao da HUD (pokébola de fundo + badge).
  - Pokémon selecionado 25% maior.
  - Ao passar o mouse aparece uma caixa com a alça "Mover": arraste (ou setas com foco) para posicionar o conjunto em qualquer lugar do contêiner; evento `move`; `locked` desativa.

## 0.74.1
- `pw-hud`: corrigida a piscada ao esconder as hotkeys (os slots só voltam ao estado normal depois que a fileira terminou de recolher).

## 0.74.0
- `pw-hud`: rótulos de Perfil reduzido / Esconder hotkeys em caixa-alta.
- Hotkeys entram e saem com balanço sutil em cascata, como cartas de um baralho (respeita `prefers-reduced-motion`).
- Com hotkeys escondidas, o espaço entre os cards e o rodapé fica em 12px (antes sobrava um vão extra).

## 0.73.1
- `pw-hud`: botões Perfil reduzido / Esconder hotkeys como `pw-button` ghost sm sem efeitos (estilo padrão do botão, sem caixa-alta); padding inferior visível de 16px (`--hd-pad`), igual ao de cima e das laterais; 12px entre hotkeys e rodapé.

## 0.73.0
- `pw-hud`: badge de atalho (Ctrl+N) dos cards de Pokémon dentro do card, no canto superior direito a 2px das bordas.
- Padding de 16px em cima e nas laterais (`--hd-pad`); espaço entre o perfil e os cards igual ao espaço entre os cards (`--hd-gap`, 8px).

## 0.72.0
- `pw-hud`: card de perfil com a mesma altura e alinhamento dos cards de Pokémon (`--hd-card-h`); botões de ação mais baixos para caber; 12px entre os cards e as hotkeys.

## 0.71.2
- `pw-hud`: setas de navegação das hotkeys como `pw-button` ghost sem efeitos (`fx="none"`).

## 0.71.1
- `pw-progress` `value-inside`: valor alinhado à direita dentro da barra.
- `pw-hud`: mais espaço entre as barras de Vida e Experiência; ícones mais próximos das barras (4px).

## 0.71.0
- `pw-progress`: ícone na cor da barra (acompanha verde/amarelo/vermelho no `hp`); novo `icon-text` (ícone em texto, ex.: "EXP"); novo `value-inside` (valor centralizado dentro da barra no `layout="inline"`).
- `pw-hud`: Vida com coração verde e Experiência com "EXP" dourado, valores dentro das barras, barras mais grossas (14px).

## 0.70.0
- `pw-progress`: novo atributo `icon` (substitui o rótulo visual; o `label` vira o nome acessível). Em `variant="hp"` o ícone fica vermelho.
- Novo ícone `exp`.
- `pw-hud`: Vida com ícone de coração e Experiência com ícone EXP; foto do perfil ocupa toda a altura do card (descontando o padding); botões de ação com 8px entre eles, ocupando a largura e a altura que sobram.
- Exemplo: jogador renomeado para "Level Máximo Jr".

## 0.69.0
- `pw-progress`: novo `layout="inline"` — rótulo na frente, barra no meio e valor atrás; `--pr-label-w` e `--pr-value-w` alinham várias barras.
- `pw-hud`: Vida e Experiência em linha; card de perfil 64px mais largo (`--hd-profile-w`) para a barra ter espaço.

## 0.68.2
- `pw-hud`: espaçamento de 8px (`--pw-space-2`) entre os slots de hotkeys.

## 0.68.1
- `pw-hud`: slots de hotkeys com 32×32 (mesmo tamanho da Mochila); aceitam `sprite` + `frames` animados.
- Exemplos de hotkeys trocados pelos itens da Mochila (Pó vermelho, Garra do dragão, Pedra azul, Cristal verde).

## 0.68.0
- `pw-hud`: slots de hotkeys no mesmo formato do slot da Mochila (`pw-card` tertiary neutral); a tecla aparece no canto superior direito com o mesmo estilo de texto da quantidade de itens (que segue no inferior direito); espaçamento de 12px entre slots.

## 0.67.1
- `pw-hud`: estrelas dos cards de Pokémon alinhadas à base do card de tipos, com 2px de espaço.

## 0.67.0
- `pw-icon`: novo tamanho `2xs` (12px).
- `pw-hud` e `pw-party`: ícones de tipo em `2xs`, com até dois tipos empilhados (`types: ['fogo','voador']`; `type` continua aceito).
- `pw-hud`: card principal sem glow por padrão (use `glow="true"` para ligar).

## 0.66.2
- `pw-widget-chat`: não pode ser fechado (sem botão fechar; `close()` não faz nada).
- Recolhido, continua redimensionável na largura pelas alças da esquerda e da direita.

## 0.66.1
- `pw-widget-chat`: altura mínima calculada para mostrar 3 mensagens (largura mínima 320px).
- Removido o botão Minimizar do rodapé.
- Overlay pequeno nas bordas das abas de canais quando há mais abas para os lados.

## 0.66.0
- Novo `<pw-widget-chat>` (Widget Bate-papo): casca padrão dos widgets, redimensiona na largura (direita e esquerda) e na altura.
  - Canais em abas (`pw-button`), com setas e ← → no teclado, `pw-badge` de não lidas e botão do meio para fechar canais abertos.
  - Log com horário, autor (clique responde em privado com `/w`) e tipos `system`, `private`, `error`, `me`; overlay de rolagem; botão "Novas mensagens" quando você está lendo o histórico.
  - `pw-input` com Enter para enviar e ↑ ↓ para o histórico; Minimizar (só a barra de digitar); limpar canal.
  - Diálogo Canais (`pw-dialog` + `pw-list` + `pw-input` "Abrir novo canal").
  - API `chat`, `channel`, `push()`, `send()`, `select()`, `openChannel()`, `closeChannel()`; eventos `send` (cancelável), `channel`, `open-channel`, `close-channel`, `clear`.
- Novos ícones: `send`, `trash`, `globe`.
- `pw-dialog`: corrigido o card que esticava até a altura máxima da tela.
- Simulação: bate-papo no canto inferior direito.

## 0.65.2
- `pw-widget-stats`: título no mesmo padrão dos outros widgets (mesma fonte, com reticências quando excede); ícone do cabeçalho e atalho na simulação passam a ser `tasks` (Tarefas).

## 0.65.1
- `pw-widget-stats`: ícone do cabeçalho vem da barra superior (`ranking`, configurável via atributo `icon`).
- Relação de drop usa os itens da Mochila (Garra do dragão, Pedra azul, Pó vermelho) com sprite animado; listas aceitam `sprite` + `frames`.

## 0.65.0
- Novo `<pw-widget-stats>` (Widget Estatísticas): cronômetro da sessão (pausar/retomar, zerar, copiar), resumo e seções recolhíveis (Experiência com histórico em barras, Saque, Suprimentos, Inimigos derrotados, Dano causado e recebido) com listas de itens, monstros e habilidades. Redimensiona só na altura (mínimo: bloco da sessão), overlay de rolagem e magnetismo iguais aos outros widgets.
- API `stats`, `update(id, valor)`, `toText()`; eventos `pause`, `resume`, `reset` (cancelável), `copy`, `tick`.
- Novos ícones: `play`, `pause`, `copy`, `bar-chart`.
- Simulação: o ícone Ranking da navbar abre/fecha o widget.

## 0.64.4
- `pw-widget-battle`: overlay inferior respeita o chanfro da moldura (token `--wb-ch`), sem cobrir a borda.

## 0.64.3
- `pw-widget-battle`: overlay de rolagem inferior igual ao da Mochila (rolagem vai até a borda com cantos chanfrados, sem faixa cortada no rodapé).

## 0.64.2
- `pw-widget-battle`: removido o estado visual "atacando você"; os alvos têm só os estados normal e alvo selecionado.

## 0.64.1
- `pw-widget-battle`: layout de Ordenar/Prioridade volta ao original (lado a lado, sem card envolvendo); `pw-card` quaternary aplicado só nos 5 slots de filtro.
- Overlay de rolagem em cima e embaixo da lista, igual à Mochila.
- Espaço interno na lista para o hover do primeiro alvo não cortar a borda.
- Estado atacando agora fica cinza de verdade (moldura em escala de cinza), sem escurecer o card.

## 0.64.0
- `pw-widget-battle`: filtros e selects agrupados num `pw-card` quaternary; Ordenar/Prioridade em largura total (sem truncar).
- Redimensionamento vertical pela borda de baixo (padrão da Mochila), com mínimo de 1 alvo visível; lista rola dentro de `pw-scroll`.
- Reordenar (ordenação/prioridade/filtro) anima os cards deslizando até a nova posição (FLIP), e alvos novos entram com fade.
- Sprites de exemplo: Gengar, Nidoking, Charizard e Arcanine (`assets/sprites/`).

## 0.63.0
- Novo `<pw-widget-battle>` (Widget Batalha): filtros (Jogadores, NPCs, Pokémon selvagens, Pokémon de jogadores, Grupo), selects Ordenar/Prioridade, lista de alvos com sprite e barra de vida; estados normal, atacando e alvo (tone error + selected). API `battle`, `setTarget()`, `updateTarget()`; eventos `filter`, `sort`, `target`. Integrado à simulação pelo ícone Batalha da navbar.

## 0.62.1
- Widgets: ao abrir/recolher, a moldura e as alças de redimensionar não deixam mais "rastro" fora do widget (recorte durante a animação e alças escondidas).

## 0.62.0
- `pw-widget-pokemon`: removida a linha de ações (chamar/recolher e posturas Ofensivo, Equilibrado e Defensivo). O widget mostra retrato, equipe, vida e cooldown.

## 0.61.8
- `pw-widget-minimap` maximizado: ocupa 80% da área (cerca de 20% menor), centralizado.

## 0.61.7
- `pw-widget-minimap`: alça de redimensionar também na lateral esquerda (cresce para a esquerda mantendo a borda direita no lugar), no mesmo padrão das outras.

## 0.61.6
- `pw-widget-minimap`: volta o degradê superior anterior e todas as bordas esmaecem de forma mais suave (várias paradas, faixa mais larga).

## 0.61.5
- `pw-widget-minimap`: degradê superior sólido até o cabeçalho e esmaecendo até depois da faixa de coordenadas.

## 0.61.4
- `pw-widget-minimap`: o mapa fica dentro da moldura (não cobre mais a borda dourada) com os cantos no formato do chanfro; imagem do andar desenhada como fundo com tamanho explícito (`floors[z].w/h`), carregando de forma confiável; mapas de exemplo em WebP (bem menores).

## 0.61.3
- `pw-widget-minimap`: corrige o mapa que não aparecia em alguns navegadores (bordas esmaecidas agora por degradê sobreposto em vez de `mask`, sem `will-change` na camada; tamanho da imagem definido ao carregar).

## 0.61.2
- `pw-widget-minimap`: você fica no centro da área visível do mapa (entre a faixa de coordenadas e as ações); botões menores (24px) com mais respiro da borda; redimensionar no mesmo padrão da mochila: alça embaixo (altura) e alça na lateral direita (largura), com dica e teclado.

## 0.61.1
- `pw-widget-minimap`: o mapa ocupa todo o fundo do card (sem card interno), com as bordas esmaecidas; ações (`pw-button`) num `pw-card` tertiary sempre centralizado (embaixo; na vertical à esquerda quando maximizado). Corrige o mapa preto na versão pequena.

## 0.61.0
- Novo componente **`pw-widget-minimap`** (widget Minimap), no padrão dos widgets e só com peças do DS:
  - Coordenadas e horário do jogo em card tertiary; mapa do andar atual com você no centro (arrastar para mover, roda/+/− para zoom 1–4, setas no teclado).
  - Controles em `pw-button`: subir e descer andar, centralizar (fica destacado quando o mapa saiu de você), maximizar/restaurar, zoom − e +.
  - Maximizado: ocupa a área do jogo, controles na vertical sobre o mapa e legenda "Locais de caça" com `pw-checkbox` (Comum, Wildscape, Primal) filtrando os marcadores.
  - Abre no tamanho padrão (largura da mochila) e cresce na largura e na altura pelo canto inferior direito; recolher, bloquear, fechar, arrastar e magnetismo iguais aos outros widgets.
  - `.map` (floors, origin, player, hunts, time, filters), `floor()`, `zoom()`, `center()`, `maximize()`, `setPlayer()`, `.time`; eventos `floor`, `zoom`, `pan`, `maximize`, `filter`, `resize`.
- Ícone `map-pin`; imagens de exemplo dos andares em `assets/minimap/`.
- Storybook: seção Widget Minimap e o minimapa na simulação do jogo (o ícone de mapa da barra superior abre e fecha).

## 0.60.5
- Barra de cooldown (`pw-widget-pokemon` e cards da `pw-hud`): desce de forma linear e contínua entre as atualizações de 1s; ao reiniciar, enche na hora.

## 0.60.4
- `pw-widget-pokemon`: o card acompanha a altura animada ao abrir/recolher (antes pulava para o tamanho final), deixando a animação igual à da mochila.

## 0.60.3
- `pw-widget-pokemon`: barra de recarga padronizada como na HUD: "Cooldown" quando ativa e "Sem CD" quando não há.

## 0.60.2
- `pw-widget-pokemon`:
  - Posturas num único card tertiary não interativo, com hover só no ícone.
  - Vida e recarga em `pw-progress` padrão (label e valor).
  - Pokébolas alinhadas ao topo do retrato e barras alinhadas à base dele.
  - Abrir/recolher igual ao da mochila.
- Widgets: a animação de abrir/recolher não trava mais no `min-height` (vale para todos). Padrão documentado em `docs/widgets.md`.
- Storybook: botão "Simular combate" no Widget Pokémon (vida e recarga ao vivo, também na simulação do jogo).

## 0.60.1
- `pw-widget-pokemon`: mesma largura da mochila (224px) e altura fixa; ícone do cabeçalho = ícone "team" da barra superior; só cards tertiary neutral no padrão de slot da mochila (retrato com 2 slots, linha de 5 slots com chamar, recolher e as 3 posturas; postura ativa em `state="selected"`). Sprite de exemplo: Clefable olhando para o sul (`icons/widget/clefable-south.webp`).

## 0.60.0
- Novo componente **`pw-widget-pokemon`** (widget Pokémon), no mesmo padrão do Widget Mochila e só com peças do DS:
  - Card primary sólido sem brilho; cabeçalho com recolher, bloquear e fechar; arrastar e magnetismo/conjuntos com mochilas e com a barra superior.
  - Retrato do Pokémon ativo (`pw-card` tertiary com imagem), 6 pokébolas da equipe (cheia, vazia ou desmaiado), vida e recarga (`pw-progress`).
  - Botões em `pw-card` quaternary: chamar/recolher (`action`) e posturas Ofensivo, Equilibrado e Defensivo (`stance`, cancelável, cor por tom).
  - `.pokemon`, `update({hp, cdLeft…})`, `setStance()`.
- Ícones novos em `icons/widget/`: pokeball-filled, pokeball-empty, stance-offensive, stance-balanced, stance-defensive.
- Magnetismo entre todos os widgets `pw-widget-*`.
- Storybook: seção Widget Pokémon e o widget na simulação do jogo.

## 0.59.0
- `pw-navbar` (Barra superior):
  - Moldura passa a ser o mesmo `pw-card` primary da Mochila, com `fill="gradient"` e sem brilho.
  - 16px nas laterais e ícones com espaçamento igual.
  - Nova animação: a pokébola vai ao centro, se divide ao meio, as metades vão às laterais e voltam ao meio (ao recolher e ao abrir).
  - Brilho do item selecionado 20% menor.
  - Animação correta dentro de container escalado.
- Storybook: separadores removidos das barras de exemplo e dicas na ordem Perfil … Sair do Jogo.
- `pw-widget-bag`: a Barra superior também é ímã (a mochila gruda nela, embaixo ou nas laterais).

## 0.58.2
- `pw-widget-bag`: mochila conectada pela lateral volta a aceitar conexão em cima e embaixo (todos os lados livres); só os cantos diagonais da junção continuam bloqueados.

## 0.58.1
- `pw-widget-bag`: a janela aberta com Ctrl + botão direito leva o caminho das mochilas; o "Voltar" nela sobe para a mochila de onde ela saiu, até a principal.

## 0.58.0
- `pw-widget-bag`: Ctrl + botão direito numa mochila interna abre ela num widget separado ao lado (com o ícone e o nome dela, removido ao fechar); `openBagWindow(i)`, evento `bagwindow` (cancelável). Slots vazios não são interativos (sem hover, clique, toque ou menu).

## 0.57.6
- `pw-widget-bag`: filete de conexão mais longo na lateral; cantos e trechos de lateral na junção de um lado já conectado não aceitam novas conexões (diagonal ou lateral que cubra a junção).

## 0.57.5
- `pw-widget-bag`: encaixe diagonal com as linhas dos chanfros sobrepostas (uma linha só); mochila conectada na diagonal acompanha quando a outra muda de altura.

## 0.57.4
- `pw-widget-bag`: filete de conexão termina antes dos chanfros e o brilho segue a forma do filete (sem as pontas escuras nos cantos).

## 0.57.3
- `pw-widget-bag`: brilho do filete de conexão só em branco/dourado (o `--pw-glow` azul escurecia a área ao redor).

## 0.57.2
- `pw-widget-bag`: lado (ou canto diagonal) que já tem mochila conectada não aceita outra conexão; efeito de conexão sem o pulso com filtro (que recortava a moldura), fica só o filete de luz na junção.
- Storybook: redimensionar a mochila em tela cheia não sai mais da tela cheia.

## 0.57.1
- `pw-widget-bag`: sem brilho por padrão (`glow="true"` liga); cabeçalho um token menor (56px, 14px acima e abaixo dos botões; fechada com 56px); conectadas mantêm o chanfro padrão.

## 0.57.0
- `pw-card` primary: borda de 2px no total (filete 2px + metal/reflexo 1,3px) e chanfro com 50% do tamanho anterior. `chamfer` continua multiplicando por canto.
- `pw-card`: novo `glow="false"` (propriedade `.glow`) para desligar o brilho externo da borda; padrão ligado. No playground do Card.
- `pw-hud` e `pw-widget-bag` repassam `glow="false"` ao card; magnetismo das mochilas ajustado para a borda e o chanfro novos.
- Removidos os testes (`data-thin`, `data-noglow`, `data-stroke`) e a seção "Teste de borda"; Global Navigation volta ao padrão dos componentes.

## 0.56.5
- Teste (experimental): `pw-hud data-thin data-noglow` (moldura 2px, meio chanfro, sem brilho) e `pw-navbar data-thin` (moldura 2px, meio chanfro, sem a linha interna). Sem os atributos nada muda. Storybook: aplicado só na simulação do jogo.

## 0.56.4
- Teste (experimental): `pw-card data-noglow` esconde o brilho externo da borda; `pw-widget-bag data-noglow` repassa. Storybook: comparação "Teste de borda" (3px e 2px, com e sem brilho). Overlays da mochila de 2px acompanham o chanfro menor.

## 0.56.3
- Teste (experimental): `pw-widget-bag data-thin` usa borda de 2px no total e metade do chanfro. O `pw-card` ganhou o atributo experimental `data-stroke`; sem ele nada muda.

## 0.56.2
- Ícones `fullscreen` e `fullscreen-exit`.
- Storybook: botão Tela cheia na simulação do jogo (ocupa a tela toda mantendo 16:9; Esc ou o botão saem).

## 0.56.1
- `pw-widget-bag`: encaixe diagonal (canto com canto): os chanfros encostam numa linha só, sem espaço entre as mochilas, e contam como conjunto; animação de conexão mais curta (~0,5s).

## 0.56.0
- `pw-card`: novo atributo `chamfer="tl tr br bl"` que escala o chanfro de cada canto da moldura primary/secondary (ex.: `1 1 .5 .5`).
- `pw-widget-bag`:
  - Mochilas empilhadas (em cima/embaixo) ficam com metade do chanfro nos cantos da junção.
  - Lado a lado mantêm o chanfro e só encostam as bordas.
  - Ao conectar, um filete de luz percorre a junção e as mochilas pulsam.

## 0.55.1
- `pw-widget-bag`: efeito de conexão bem mais sutil; mochilas conectadas sobrepõem as molduras em 3px (`PWWidgetBag.O`) para a divisão virar uma linha só.

## 0.55.0
- `pw-widget-bag`: magnetismo e conjuntos.
  - Ao arrastar perto de outra mochila (até 14px), gruda na borda (lado a lado ou empilhada) e alinha as bordas; as mochilas brilham enquanto vão grudar.
  - Mochilas que se encostam formam um conjunto (atributo `grouped`): arrastar qualquer uma move todas. Alt ao arrastar solta do conjunto; mochilas bloqueadas não são levadas.
  - Num conjunto empilhado, abrir, recolher ou redimensionar uma mochila empurra as de baixo junto.
  - `bag.group()`, evento `groupchange`; `move` traz `detail.group`.

## 0.54.2
- `pw-widget-bag`: "‹ Voltar" fica abaixo do título sem mudar a posição do título nem o espaçamento do cabeçalho.

## 0.54.1
- `pw-widget-bag`: ao abrir uma mochila interna, o ícone do cabeçalho vira o ícone dela e aparece um texto pequeno "‹ Voltar" abaixo do nome (no lugar do botão ←).

## 0.54.0
- `pw-widget-bag`: mochila dentro da mochila. Item `{ type: "bag", items: [...], slots }`; botão direito abre a mochila interna (transição lateral), o título mostra o nome dela e o botão ← (ghost sm, no lugar do ícone) volta para a anterior. Vários níveis; altura se ajusta aos slots enquanto o usuário não redimensionar. Métodos `openBag(i)`, `back()`, `fitAll()`; eventos `bagopen` (cancelável) e `bagback`.
- Barra de rolagem 1px mais para a esquerda.
- Storybook: item de mochila animado no exemplo, com uma mochila dentro de outra.

## 0.53.9
- `pw-widget-bag`: slots alinhados às extremidades do cabeçalho (16px de cada lado, até o botão Fechar); barra de rolagem independente do conteúdo, sobre o padding, a ~4px da borda dourada direita; largura sem a reserva da barra (224px).

## 0.53.8
- `pw-widget-bag`: botões do cabeçalho em `pw-button` ghost, fill, `size="sm"` padrão (28px) e `fx="none"` (só o hover, sem brilho, partículas ou anel).

## 0.53.7
- `pw-widget-bag`: overlay de cima começa no limite da área dos slots (não fica no meio deles); área dos slots com os cantos de baixo chanfrados como a moldura, sem pontas aparecendo fora do overlay.

## 0.53.6
- `pw-widget-bag`: a área dos slots vai até a borda dourada e o overlay de baixo começa nela, então ao redimensionar os slots somem suavemente na borda em vez de serem cortados antes dela; a barra de rolagem continua limitada à altura dos slots.

## 0.53.5
- `pw-widget-bag`: hover dos slots da primeira linha e da primeira coluna não é mais cortado (folga na área de rolagem, sem mudar o espaçamento).

## 0.53.4
- `pw-widget-bag`: cabeçalho de 64px com o conteúdo centralizado (20px em cima e embaixo dos botões) igual aberto e fechado, sem salto ao abrir.

## 0.53.3
- `pw-widget-bag`: volta 24px embaixo (overlay continua indo até a borda); espaço entre o cabeçalho e os slots igual ao espaço do topo do cabeçalho.

## 0.53.2
- `pw-widget-bag`: espaço embaixo igual ao de cima (12px); overlay de baixo vai até a borda; imagens dos itens com 2px de respiro, redimensionadas e centralizadas no slot. Storybook: só os 4 itens animados de exemplo.

## 0.53.1
- `pw-widget-bag`: overlays de rolagem na mesma cor do fundo solid (`--pw-bg-solid`; com `fill="gradient"`, a borda do degradê); abre mostrando todos os slots sem rolagem (método `fitAll()`), e a altura máxima do redimensionamento é exatamente a de todos os slots; cabeçalho na mesma posição aberto e fechado (sem salto na transição).

## 0.53.0
- `pw-card` primary: novo atributo `fill` = `gradient` (padrão, degradê radial) ou `solid` (cor única `--card-bg-solid`), para widgets.
- `pw-widget-bag`: usa `fill="solid"` por padrão (`fill="gradient"` volta o degradê); cabeçalho com 12px em cima e embaixo nas duas versões.

## 0.52.0
- Storybook: nova página inicial **Global Navigation** (abre primeiro), com a simulação da tela do jogo em 1920×1080 no topo e as seções Barra superior (antiga Navigation Bar), HUD inferior e Widget Mochila na mesma página.
- `pw-hud` e `pw-widget-bag`: menus, editar ordem, arrastar e redimensionar funcionam também dentro de um container escalado (`transform: scale`).

## 0.51.4
- `pw-widget-bag`: cabeçalho com 12px embaixo (fechada = 64px); barra de rolagem limitada à área dos slots, sem entrar na borda; overlay também em cima quando há slots acima.

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
