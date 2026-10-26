# Changelog

Todas as mudanças da biblioteca. Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/), versões em [SemVer](https://semver.org/lang/pt-BR/).

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
