# Padrão dos widgets (`pw-widget-*`)

Regras que todo widget do jogo segue (Mochila e Pokémon são a referência):

- **Moldura:** `pw-card variant="primary"` com `fill="solid"` e sem brilho (`glow="false"`); largura padrão da Mochila (224px).
- **Cabeçalho:** 56px, conteúdo centralizado, 16px nas laterais; ícone 24px da barra superior, título, e botões `pw-button` ghost sm `fx="none"`: recolher (⌃/⌄), bloquear (cadeado) e fechar.
- **Recolher/abrir:** sempre a animação herdada de `PWWidgetBag.toggle()` (FLIP de altura ~300ms + fade do corpo). O widget não pode ter `height` com `!important` nem `min-height` que trave a animação.
- **Arrastar e magnetismo:** herdados de `PWWidgetBag` (arrastar pelo cabeçalho, ímã de 14px, conjuntos, linha única na junção, diagonal, efeito de conexão, Alt solta). Conecta com qualquer `pw-widget-*` e com a barra superior.
- **Conteúdo:** só componentes do DS; slots em `pw-card variant="tertiary" tone="neutral"` de 32×32 com 8px de espaço; slot vazio não é interativo; barras em `pw-progress`.
- **Bloqueado:** desliga arrastar e redimensionar; recolher e fechar continuam.
