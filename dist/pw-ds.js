/*! Poke World Design System v0.2.0 — https://github.com/jacques-tony/pw-ds */
(function(){
if(window.PWDS)return;
/* estilos embutidos: basta este <script> (funciona também em páginas que não podem carregar CSS externo) */
if(!document.getElementById('pw-ds-css')&&!document.querySelector('link[href*="pw-ds.css"]')){
  var st=document.createElement('style');st.id='pw-ds-css';st.textContent=":root{\n  --f-display:\"Cinzel\", \"Trajan Pro\", Georgia, serif;\n  /* ===== TEMA GLOBAL (compartilhado por todos os componentes) =====\n     tema padr\u00e3o = Poke World (dourado + azul). Outros temas redefinem s\u00f3 estes tokens. */\n  --pw-metal-0:#FFE0A3;   /* 0%   */\n  --pw-metal-1:#D19B46;   /* 40%  */\n  --pw-metal-2:#BC8738;   /* 80%  */\n  --pw-metal-3:#FAD183;   /* 100% */\n  --pw-filament:#FFE0A3;  /* border.solid.secondary \u2014 tra\u00e7ado central 1px */\n  --pw-glow:#FFE0A3;      /* pontos de luz (estimado) */\n  --pw-bg-center:#0E3370; /* background.gradient.blue 0% */\n  --pw-bg-edge:#051839;   /* 100% */\n  /* tertiary */\n  --pw-ter-bg-center:#001D3E; --pw-ter-bg-edge:#001225; --pw-ter-bg-op:.75;\n  --pw-ter-stroke-0:#001F3D; --pw-ter-stroke-1:#0A6999; --pw-ter-stroke-2:#03406B;\n  --pw-ter-stroke-3:#0D9BC4; --pw-ter-stroke-4:#054672; --pw-ter-stroke-5:#1556BF;\n  /* tab (selected) */\n  --pw-tab-fill-bottom:#0050B0; --pw-tab-fill-top:#001938;\n  --pw-tab-stroke-a:#9DF0FF; --pw-tab-stroke-b:#D5F8FF;\n  --pw-tab-drop:#9DEFFF; --pw-tab-inner:var(--pw-tab-drop);\n  --pw-tab-text:#FFFFFF; --pw-tab-text-idle:#FFFFFF;\n  --f-tab:\"Inter\", system-ui, sans-serif;\n  --pw-bg-solid:#071C41;  /* background.solid.blue (estimado) */\n\n  /* ===== CARD TOKENS ===== */\n  --card-glass:#D9D9D9;     /* c\u00f3pia vidro, luz suave */\n  --card-text:#F2E8D2;\n  --card-text-muted:#B9C3DA;\n  --card-stroke:3px; --card-filament-w:1px;\n  --card-blur:4; --card-tex-size:16.5; --card-tex-radius:5;\n  --card-pad-primary:34px; --card-pad-secondary:30px;\n  --card-dur:160ms; --card-ease:cubic-bezier(.2,.7,.3,1);\n  \n}\n/* ===================== COMPONENT: pw-card ===================== */\n/* temas: em qualquer ancestral (data-pw-theme) ou no pr\u00f3prio card (theme) */\n[data-pw-theme=\"mewtwo\"],pw-card[theme=\"mewtwo\"],pw-card-header[theme=\"mewtwo\"],pw-tabs[theme=\"mewtwo\"]{\n  --pw-metal-0:#E5A3FF;--pw-metal-1:#AA46D1;--pw-metal-2:#A638BC;--pw-metal-3:#EA83FA;\n  --pw-filament:#FDA3FF;--pw-glow:#FDA3FF;\n  --pw-bg-center:#540061;--pw-bg-edge:#2F0539;--pw-bg-solid:#2F0539;\n  --pw-ter-bg-center:#32003E;--pw-ter-bg-edge:#250023;\n  --pw-ter-stroke-0:#3C003D;--pw-ter-stroke-1:#970A99;--pw-ter-stroke-2:#69036B;\n  --pw-ter-stroke-3:#C40DB8;--pw-ter-stroke-4:#720563;--pw-ter-stroke-5:#BF15AE;\n  --pw-tab-fill-bottom:#9300B0;--pw-tab-fill-top:#001938;\n  --pw-tab-stroke-a:#FD9DFF;--pw-tab-stroke-b:#F7D5FF;\n  --pw-tab-drop:#F29DFF;--pw-tab-inner:#F29DFF;--pw-tab-text-idle:#FFFFFF}\npw-card{--card-metal-0:var(--pw-metal-0);--card-metal-1:var(--pw-metal-1);--card-metal-2:var(--pw-metal-2);--card-metal-3:var(--pw-metal-3);\n  --card-filament:var(--pw-filament);--card-glow:var(--pw-glow);\n  --card-bg-center:var(--pw-bg-center);--card-bg-edge:var(--pw-bg-edge);--card-bg-solid:var(--pw-bg-solid)}\npw-card{display:block;position:relative;box-sizing:border-box;color:var(--card-text);\n  --lift:0px; --press:1; --glow-op:.6; --dot-op:.5; --ring-op:0; --bg-bright:1;\n  transform:translateY(var(--lift)) scale(var(--press));transition:transform var(--card-dur) var(--card-ease)}\npw-card[variant=\"primary\"],pw-card:not([variant]){width:514px;height:376px}\npw-card[variant=\"secondary\"]{width:265px;height:374px}\npw-card[variant=\"tertiary\"]{width:320px;height:200px}\npw-card[variant=\"tertiary\"] .pwc-content{padding:20px}\npw-card[variant=\"tertiary\"][interactive][selected],pw-card[variant=\"tertiary\"][state=\"selected\"]{--bg-bright:1.35}\npw-card[variant=\"tertiary\"][interactive]:not([disabled]):hover,pw-card[variant=\"tertiary\"][state=\"hover\"]{--bg-bright:1.15}\npw-card[variant=\"tertiary\"][selected] .l-tstroke,pw-card[variant=\"tertiary\"][state=\"selected\"] .l-tstroke{filter:brightness(1.6)}\npw-card .pwc-frame{position:absolute;inset:0;overflow:visible;pointer-events:none}\npw-card .pwc-content{position:relative;height:100%;box-sizing:border-box;padding:var(--card-pad-primary);display:flex;flex-direction:column;gap:10px;transition:opacity var(--card-dur)}\npw-card[variant=\"secondary\"] .pwc-content{padding:var(--card-pad-secondary)}\npw-card .l-glow,pw-card .l-dots,pw-card .l-ring,pw-card .l-bg{transition:opacity var(--card-dur),filter var(--card-dur)}\npw-card .l-glow{opacity:var(--glow-op)}\npw-card .l-dots{opacity:var(--dot-op)}\npw-card .l-ring{opacity:var(--ring-op)}\npw-card .l-bg{filter:brightness(var(--bg-bright))}\npw-card .l-glass{mix-blend-mode:soft-light}\n\n/* tones (s\u00f3 o metal / brilho mudam; fundo azul permanece) */\npw-card[tone=\"info\"]   {--card-metal-0:#CDF2FF;--card-metal-1:#4FB0D8;--card-metal-2:#3A8EBC;--card-metal-3:#A7E3F8;--card-filament:#D9F5FF;--card-glow:#9FE2FF}\npw-card[tone=\"success\"]{--card-metal-0:#CFF7D9;--card-metal-1:#4DB873;--card-metal-2:#39985A;--card-metal-3:#A6E8B9;--card-filament:#DDFBE5;--card-glow:#9BF0B6}\npw-card[tone=\"warning\"]{--card-metal-0:#FFD6B0;--card-metal-1:#E8823A;--card-metal-2:#C8672A;--card-metal-3:#FFB57A;--card-filament:#FFE4CC;--card-glow:#FFB070}\npw-card[tone=\"error\"]  {--card-metal-0:#FFC2C2;--card-metal-1:#D64848;--card-metal-2:#AE3333;--card-metal-3:#F48E8E;--card-filament:#FFD6D6;--card-glow:#FF8A8A}\npw-card[tone=\"new\"]    {--card-metal-0:#EBD3FF;--card-metal-1:#A86BE0;--card-metal-2:#8A4FC4;--card-metal-3:#D5ABF8;--card-filament:#F2E2FF;--card-glow:#D3A6FF}\npw-card[tone=\"brand\"]  {--card-metal-0:#FFF0C4;--card-metal-1:#E6AE48;--card-metal-2:#CF9131;--card-metal-3:#FFDF8C;--card-filament:#FFF0C4;--card-glow:#FFD27A;--glow-op:.85;--dot-op:.7}\n\n/* appearance outline: s\u00f3 moldura, sem preenchimento */\npw-card[appearance=\"outline\"] .l-bg{display:none}\n\n/* estados \u2014 s\u00f3 quando interactive */\npw-card[interactive]{cursor:pointer;outline:none}\npw-card[interactive]:not([disabled]):hover,pw-card[state=\"hover\"]{--lift:-2px;--glow-op:1;--dot-op:.85}\npw-card[interactive]:not([disabled]):active,pw-card[state=\"pressed\"]{--lift:0px;--press:.985;--glow-op:.4;--dot-op:.35;--bg-bright:.92}\npw-card[interactive][selected],pw-card[state=\"selected\"]{--glow-op:1;--dot-op:1}\npw-card[interactive]:focus-visible .l-ring{opacity:1;stroke-dasharray:6 5}\npw-card[interactive][selected]:focus-visible .l-ring{stroke-dasharray:none}\npw-card[disabled],pw-card[state=\"disabled\"]{cursor:not-allowed;--glow-op:0;--dot-op:0;--ring-op:0;--lift:0px;--press:1}\npw-card[disabled] .l-art,pw-card[state=\"disabled\"] .l-art{filter:grayscale(.9) brightness(.75)}\npw-card[disabled] .pwc-content,pw-card[state=\"disabled\"] .pwc-content{opacity:.5}\n/* ===================== COMPONENT: pw-card-header ===================== */\npw-card-header{display:inline-flex;position:relative;height:58px;box-sizing:border-box;align-items:center;justify-content:center;justify-self:start;\n  --hdr-tip:22px;padding:0 calc(var(--hdr-tip) + 16px);color:#FFF8EC;font-family:var(--f-display);font-weight:700;font-size:20px;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}\npw-card-header .pwh-frame{position:absolute;inset:0;overflow:visible;pointer-events:none}\npw-card-header .pwh-label{position:relative;display:flex;align-items:center;gap:14px}\npw-card-header .pwh-label::before,pw-card-header .pwh-label::after{content:var(--hdr-icon,\"\\2726\");font-size:.8em;color:#FFF8EC;text-shadow:0 0 8px var(--pw-glow)}\npw-card-header[decor=\"none\"] .pwh-label::before,pw-card-header[decor=\"none\"] .pwh-label::after,\npw-card-header[show-icon=\"false\"] .pwh-label::before,pw-card-header[show-icon=\"false\"] .pwh-label::after{content:none}\npw-card-header .pwh-label:empty{display:none}\npw-icon{display:inline-flex;width:1em;height:1em;flex:none;color:inherit}pw-icon svg{width:100%;height:100%;display:block}\n\n/* ===================== COMPONENT: pw-tabs / pw-tab ===================== */\npw-tabs{position:relative;display:inline-flex;flex-wrap:wrap;gap:6px;align-items:center;\n  --tab-pad:8px;--tab-gap:4px;--tab-fs:12px;--tab-ic:14px}\npw-tabs[size=\"sm\"]{--tab-fs:10px;--tab-ic:12px;gap:4px}\npw-tabs[size=\"lg\"]{--tab-fs:14px;--tab-ic:16px;gap:8px}\npw-tab{--fill-op:0;--stroke-op:0;--drop-op:0;--shine:0;--sw:.5px;\n  position:relative;isolation:isolate;display:inline-flex;align-items:center;gap:var(--tab-gap);padding:var(--tab-pad);\n  border-radius:4px;box-sizing:border-box;font-family:var(--f-tab);font-size:var(--tab-fs);font-weight:400;line-height:1;white-space:nowrap;\n  color:var(--pw-tab-text-idle);cursor:pointer;user-select:none;outline:none;\n  box-shadow:0 0 7px -2px color-mix(in srgb,var(--pw-tab-drop) calc(75% * var(--drop-op)),transparent);\n  transition:color var(--card-dur),box-shadow var(--card-dur)}\n/* preenchimento: linear vertical + losango branco 50% (aprox. radial) + sombra interna */\npw-tab::after{content:\"\";position:absolute;inset:0;border-radius:inherit;z-index:-1;opacity:var(--fill-op);\n  background:linear-gradient(to top,var(--pw-tab-fill-bottom),var(--pw-tab-fill-top));\n  box-shadow:inset 0 0 6.5px 0 color-mix(in srgb,var(--pw-tab-inner) 75%,transparent);transition:opacity var(--card-dur)}\n/* losango branco 50%: da borda inferior at\u00e9 ~metade da altura \u2014 hover do selected */\npw-tab .pwt-shine{position:absolute;inset:0;border-radius:inherit;z-index:0;pointer-events:none;mix-blend-mode:lighten;opacity:var(--shine);transition:opacity var(--card-dur);\n  background:radial-gradient(70% 90% at 50% 100%,#fff 0%,rgb(255 255 255 / .9) 35%,rgb(255 255 255 / .55) 100%);\n  -webkit-mask:linear-gradient(to right,transparent 0%,#000 50%,transparent 100%),linear-gradient(to top,#000 0%,transparent 65%);-webkit-mask-composite:source-in;\n  mask:linear-gradient(to right,transparent 0%,#000 50%,transparent 100%),linear-gradient(to top,#000 0%,transparent 65%);mask-composite:intersect}\npw-tab .pwt-icon,pw-tab .pwt-label{position:relative;z-index:1}\n/* tra\u00e7ado interno 0.5px, gradiente diagonal 5 interrup\u00e7\u00f5es */\npw-tab::before{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:var(--sw);z-index:2;pointer-events:none;opacity:var(--stroke-op);\n  background:linear-gradient(135deg,var(--pw-tab-stroke-a) 0%,var(--pw-tab-stroke-b) 25%,var(--pw-tab-stroke-a) 50%,var(--pw-tab-stroke-b) 75%,var(--pw-tab-stroke-a) 100%);\n  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);\n  transition:opacity var(--card-dur)}\npw-tab .pwt-icon{display:inline-flex;width:var(--tab-ic);height:var(--tab-ic);flex:none}\npw-tab .pwt-icon svg{width:100%;height:100%}\npw-tab[show-icon=\"false\"] .pwt-icon{display:none}\npw-tab:not([disabled]):hover,pw-tab[state=\"hover\"]{--fill-op:.35;--stroke-op:.55;color:var(--pw-tab-text)}\npw-tab:not([disabled]):active{--fill-op:.55}\npw-tab[selected],pw-tab[state=\"selected\"]{--fill-op:1;--stroke-op:1;--drop-op:1;color:var(--pw-tab-text)}\npw-tab[selected]:not([disabled]):hover,pw-tab[state=\"selected-hover\"]{--shine:1}\n/* em telas 1x, 0,5px vira meia linha transl\u00facida e some na base escura: arredonda para 1px f\u00edsico */\n@media (max-resolution:1.5dppx){pw-tab{--sw:1px}}\npw-tab:focus-visible{outline:1.5px solid var(--pw-tab-stroke-a);outline-offset:2px}\n/* transi\u00e7\u00e3o entre abas: um \"fantasma\" com o visual do selected desliza da aba antiga para a nova */\npw-tabs .pwt-ghost{position:absolute;left:0;top:0;border-radius:4px;pointer-events:none;z-index:0;isolation:isolate;\n  background:linear-gradient(to top,var(--pw-tab-fill-bottom),var(--pw-tab-fill-top));\n  box-shadow:0 0 7px -2px color-mix(in srgb,var(--pw-tab-drop) 75%,transparent),inset 0 0 6.5px 0 color-mix(in srgb,var(--pw-tab-inner) 75%,transparent)}\npw-tabs .pwt-ghost::before{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:.5px;\n  background:linear-gradient(135deg,var(--pw-tab-stroke-a) 0%,var(--pw-tab-stroke-b) 25%,var(--pw-tab-stroke-a) 50%,var(--pw-tab-stroke-b) 75%,var(--pw-tab-stroke-a) 100%);\n  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}\n@media (max-resolution:1.5dppx){pw-tabs .pwt-ghost::before{padding:1px}}\npw-tab[data-arriving]{--fill-op:0!important;--stroke-op:0!important;--drop-op:0!important;transition:none}\npw-tab[data-arriving]::before,pw-tab[data-arriving]::after{transition:none}\npw-tab[disabled],pw-tab[state=\"disabled\"]{opacity:.38;cursor:not-allowed;--drop-op:0}\n@media (prefers-reduced-motion:reduce){pw-tab,pw-tab::before,pw-tab::after{transition:none}}\n.pw-titled{position:relative;display:inline-block;width:fit-content;justify-self:start;padding-top:26px}\n.pw-titled>pw-card-header{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:2}\n@media (prefers-reduced-motion:reduce){pw-card,pw-card *{transition:none!important}pw-card{--lift:0px!important}}";
  (document.head||document.documentElement).prepend(st);
}
/* ---------- geometria dos cantos (SVGs exportados, caixa 30x30, linha 3px) ---------- */
// cada canto: caminho principal do lado esquerdo até o topo (TL); os demais são espelhos x→W-x / y→H-y
var CORNERS={
  primary:{ // Rarity=Epic
    main:[['M',[1.5,29.5]],['L',[1.5,24.9853]],['C',[1.5,23.394],[2.13214,21.8679],[3.25736,20.7426]],['L',[5,19]],['L',[8.5,15.5]],
      ['C',[5.73512,11.8135],[3.83092,7.55459],[2.92718,3.03594]],['L',[2.9,2.9]],['L',[3.02607,2.92516]],
      ['C',[7.54851,3.82762],[11.811,5.73262],[15.5,8.5]],['L',[19,5]],['L',[20.7426,3.25736]],['C',[21.8679,2.13214],[23.394,1.5],[24.9853,1.5]],['L',[29.5,1.5]]],
    curl:[['M',[5,19]],['C',[6.933,20.933],[10.067,20.933],[12,19]],['L',[19,12]],['C',[20.933,10.067],[20.933,6.933],[19,5]]]
  },
  secondary:{ // Rarity=Common
    main:[['M',[1.5,29.5]],['L',[1.5,24.9853]],['C',[1.5,23.394],[2.13214,21.8679],[3.25736,20.7426]],['L',[8.5,15.5]],['L',[15.5,8.5]],['L',[20.7426,3.25736]],['C',[21.8679,2.13214],[23.394,1.5],[24.9853,1.5]],['L',[29.5,1.5]]],
    curl:null
  }
};
function endOf(s){return s[s.length-1]}
function reverse(segs){
  var out=[['M',endOf(segs[segs.length-1])]];
  for(var i=segs.length-1;i>0;i--){var s=segs[i],start=endOf(segs[i-1]);
    out.push(s[0]==='C'?['C',s[2],s[1],start]:['L',start]);}
  return out;
}
function map(segs,f){return segs.map(function(s){return [s[0]].concat(s.slice(1).map(f))})}
function r(n){return Math.round(n*1000)/1000}
function d(segs,cont){return segs.map(function(s,i){var t=(i===0&&cont)?'L':s[0];return t+s.slice(1).map(function(p){return r(p[0])+' '+r(p[1])}).join(' ')}).join(' ')}
function outline(W,H,c,off){ // contorno fechado; off desloca para fora (anel)
  off=off||0;var w=W+2*off,h=H+2*off;
  var t=function(p){return [p[0]-off,p[1]-off]};
  var fX=function(p){return t([w-p[0],p[1]])},fY=function(p){return t([p[0],h-p[1]])},fXY=function(p){return t([w-p[0],h-p[1]])};
  return d(map(c.main,t))+' '+d(map(reverse(c.main),fX),true)+' '+d(map(c.main,fXY),true)+' '+d(map(reverse(c.main),fY),true)+' Z';
}
function curls(W,H,c){
  if(!c.curl)return '';
  var fs=[function(p){return p},function(p){return [W-p[0],p[1]]},function(p){return [W-p[0],H-p[1]]},function(p){return [p[0],H-p[1]]}];
  return fs.map(function(f){return d(map(c.curl,f))}).join(' ');
}
function chamfer(W,H,i,c){
  return 'M'+(i+c)+' '+i+' L'+(W-i-c)+' '+i+' L'+(W-i)+' '+(i+c)+' L'+(W-i)+' '+(H-i-c)+' L'+(W-i-c)+' '+(H-i)+' L'+(i+c)+' '+(H-i)+' L'+i+' '+(H-i-c)+' L'+i+' '+(i+c)+' Z';
}
var uidN=0;

class PWCard extends HTMLElement{
  static get observedAttributes(){return ['variant','interactive','disabled','selected']}
  connectedCallback(){
    if(!this._init){
      this._init=true;this._uid='pwc'+(++uidN);
      var content=document.createElement('div');content.className='pwc-content';
      while(this.firstChild)content.appendChild(this.firstChild);
      this._svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      this._svg.setAttribute('class','pwc-frame');this._svg.setAttribute('aria-hidden','true');
      this.appendChild(this._svg);this.appendChild(content);
      this._ro=new ResizeObserver(()=>this.render());this._ro.observe(this);
      this.addEventListener('click',()=>{
        if(this.hasAttribute('interactive')&&!this.hasAttribute('disabled')&&!this.hasAttribute('state'))this.toggleAttribute('selected');
      });
      this.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&this.hasAttribute('interactive')){e.preventDefault();this.click()}});
    }else this._ro.observe(this);
    this.sync();this.render();
  }
  /* páginas que recriam o HTML a cada clique: solta o observador quando o card sai da página */
  disconnectedCallback(){if(this._ro)this._ro.disconnect()}
  attributeChangedCallback(){if(this._init){this.sync();this.render()}}
  sync(){
    var inter=this.hasAttribute('interactive'),dis=this.hasAttribute('disabled');
    if(inter){this.setAttribute('role','button');this.setAttribute('tabindex',dis?'-1':'0');
      this.setAttribute('aria-pressed',this.hasAttribute('selected')?'true':'false');
      dis?this.setAttribute('aria-disabled','true'):this.removeAttribute('aria-disabled');}
    else{['role','tabindex','aria-pressed','aria-disabled'].forEach(a=>this.removeAttribute(a))}
  }
  render(){
    var W=Math.round(this.offsetWidth),H=Math.round(this.offsetHeight);
    if(!W||!H||(W===this._w&&H===this._h&&this.getAttribute('variant')===this._v))return;
    this._w=W;this._h=H;this._v=this.getAttribute('variant');
    var v=this._v==='secondary'?'secondary':'primary',c=CORNERS[v],u=this._uid;
    var shape=outline(W,H,c),all=shape+' '+curls(W,H,c),ring=outline(W,H,c,4);
    var bgFill=v==='primary'?'url(#'+u+'-bg)':'var(--card-bg-solid)';
    var border='<path d="'+all+'" fill="none" stroke="var(--card-filament)" stroke-width="4"/>'+
               '<path d="'+all+'" fill="none" stroke="url(#'+u+'-metal)" stroke-width="2"/>';
    this._svg.setAttribute('width',W);this._svg.setAttribute('height',H);this._svg.setAttribute('viewBox','0 0 '+W+' '+H);
    if(this._v==='tertiary'){
      var rr=function(o){return '<rect x="'+(0.5-o)+'" y="'+(0.5-o)+'" width="'+(W-1+2*o)+'" height="'+(H-1+2*o)+'" rx="'+(7.5+o)+'"'};
      this._svg.innerHTML='<defs>'+
        '<radialGradient id="'+u+'-tbg" cx=".5" cy=".5" r=".7"><stop offset="0" style="stop-color:var(--pw-ter-bg-center)"/><stop offset="1" style="stop-color:var(--pw-ter-bg-edge)"/></radialGradient>'+
        '<linearGradient id="'+u+'-tst" x1="0" y1="0" x2="1" y2="1">'+[0,.21,.43,.61,.82,1].map((o,i)=>'<stop offset="'+o+'" style="stop-color:var(--pw-ter-stroke-'+i+')"/>').join('')+'</linearGradient></defs>'+
        '<g class="l-art">'+rr(0)+' class="l-bg" fill="url(#'+u+'-tbg)" style="fill-opacity:var(--pw-ter-bg-op)"/>'+
        rr(0)+' class="l-tstroke" fill="none" stroke="url(#'+u+'-tst)" stroke-width="1"/></g>'+
        rr(4)+' class="l-ring" fill="none" stroke="var(--pw-ter-stroke-3)" stroke-width="1.5"/>';
      return;
    }
    this._svg.innerHTML=
     '<defs>'+
      '<linearGradient id="'+u+'-metal" x1="0" y1="0" x2="1" y2="1">'+
        '<stop offset="0" style="stop-color:var(--card-metal-0)"/><stop offset=".4" style="stop-color:var(--card-metal-1)"/>'+
        '<stop offset=".8" style="stop-color:var(--card-metal-2)"/><stop offset="1" style="stop-color:var(--card-metal-3)"/></linearGradient>'+
      '<linearGradient id="'+u+'-glass" x1="0" y1="0" x2="1" y2="1">'+
        '<stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset=".45" style="stop-color:var(--card-glass)"/><stop offset="1" style="stop-color:var(--card-glass)" stop-opacity=".55"/></linearGradient>'+
      '<radialGradient id="'+u+'-bg" cx=".5" cy=".5" r=".62"><stop offset="0" style="stop-color:var(--card-bg-center)"/><stop offset="1" style="stop-color:var(--card-bg-edge)"/></radialGradient>'+
      '<filter id="'+u+'-tex" x="-10%" y="-10%" width="120%" height="120%">'+
        '<feTurbulence type="fractalNoise" baseFrequency="'+(1/16.5).toFixed(4)+'" numOctaves="1" seed="7" result="n"/>'+
        '<feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" result="t"/>'+
        '<feGaussianBlur in="t" stdDeviation="2"/></filter>'+
      '<filter id="'+u+'-dot" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="9"/></filter>'+
     '</defs>'+
     '<g class="l-art">'+
      '<path class="l-bg" d="'+shape+'" fill="'+bgFill+'"/>'+
      (v==='secondary'?'<path d="'+chamfer(W,H,7.5,17.485)+'" fill="none" stroke="var(--card-filament)" stroke-width="1"/>':'')+
      '<g class="l-glow" filter="url(#'+u+'-tex)">'+border+'</g>'+
      border+
      '<path class="l-glass" d="'+all+'" fill="none" stroke="url(#'+u+'-glass)" stroke-width="3"/>'+
      '<g class="l-dots" filter="url(#'+u+'-dot)">'+
        [[7,7],[W-7,7],[W-7,H-7],[7,H-7]].map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="7" fill="var(--card-glow)"/>').join('')+'</g>'+
     '</g>'+
     '<path class="l-ring" d="'+ring+'" fill="none" stroke="var(--card-filament)" stroke-width="1.5"/>';
  }
}
customElements.define('pw-card',PWCard);

/* ---------- pw-card-header: mesma borda do primary, pontas laterais ---------- */
var PW_ICONS={ /* provisório: será substituído pelo componente Icon */
  sparkle:'"\\2726"', star:'"\\2605"', diamond:'"\\25C6"', bolt:'"\\26A1\\FE0E"' };
class PWCardHeader extends HTMLElement{
  static get observedAttributes(){return ['icon']}
  attributeChangedCallback(){var i=PW_ICONS[this.getAttribute('icon')];i?this.style.setProperty('--hdr-icon',i):this.style.removeProperty('--hdr-icon')}
  connectedCallback(){
    this.attributeChangedCallback();
    if(this._init){this._ro.observe(this);return}this._init=true;this._uid='pwh'+(++uidN);
    var lab=document.createElement('span');lab.className='pwh-label';
    while(this.firstChild)lab.appendChild(this.firstChild);
    this._svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    this._svg.setAttribute('class','pwh-frame');this._svg.setAttribute('aria-hidden','true');
    this.appendChild(this._svg);this.appendChild(lab);
    if(!this.hasAttribute('role'))this.setAttribute('role','heading');
    if(!this.hasAttribute('aria-level'))this.setAttribute('aria-level','2');
    this._ro=new ResizeObserver(()=>this.render());this._ro.observe(this);this.render();
  }
  disconnectedCallback(){if(this._ro)this._ro.disconnect()}
  render(){
    var W=Math.round(this.offsetWidth),H=Math.round(this.offsetHeight);
    if(!W||!H||(W===this._w&&H===this._h))return;this._w=W;this._h=H;
    var u=this._uid,s=1.5,tip=Math.round(H*0.38),m=H/2;
    var shape='M'+tip+' '+s+' L'+(W-tip)+' '+s+' L'+(W-s)+' '+m+' L'+(W-tip)+' '+(H-s)+' L'+tip+' '+(H-s)+' L'+s+' '+m+' Z';
    this.style.setProperty('--hdr-tip',tip+'px');
    var border='<path d="'+shape+'" fill="none" stroke="var(--pw-filament)" stroke-width="4"/>'+
               '<path d="'+shape+'" fill="none" stroke="url(#'+u+'-metal)" stroke-width="2"/>';
    this._svg.setAttribute('width',W);this._svg.setAttribute('height',H);this._svg.setAttribute('viewBox','0 0 '+W+' '+H);
    this._svg.innerHTML='<defs>'+
      '<linearGradient id="'+u+'-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--pw-metal-0)"/><stop offset=".4" style="stop-color:var(--pw-metal-1)"/><stop offset=".8" style="stop-color:var(--pw-metal-2)"/><stop offset="1" style="stop-color:var(--pw-metal-3)"/></linearGradient>'+
      '<linearGradient id="'+u+'-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset=".45" style="stop-color:var(--card-glass)"/><stop offset="1" style="stop-color:var(--card-glass)" stop-opacity=".55"/></linearGradient>'+
      '<radialGradient id="'+u+'-bg" cx=".5" cy=".5" r=".6"><stop offset="0" style="stop-color:var(--pw-bg-center)"/><stop offset="1" style="stop-color:var(--pw-bg-edge)"/></radialGradient>'+
      '<filter id="'+u+'-tex" x="-10%" y="-30%" width="120%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="'+(1/16.5).toFixed(4)+'" numOctaves="1" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" result="t"/><feGaussianBlur in="t" stdDeviation="2"/></filter>'+
      '</defs>'+
      '<path d="'+shape+'" fill="url(#'+u+'-bg)"/>'+
      '<g filter="url(#'+u+'-tex)" opacity=".6">'+border+'</g>'+border+
      '<path d="'+shape+'" fill="none" stroke="url(#'+u+'-glass)" stroke-width="3" style="mix-blend-mode:soft-light"/>';
  }
}
customElements.define('pw-card-header',PWCardHeader);

/* ---------- pw-tabs / pw-tab ---------- */
var PW_SVG={ /* provisório: será substituído pelo componente Icon */
  grid:'<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
  star:'<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
  bolt:'<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
  map:'<path d="M9 4.5L3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/><path d="M9 4.5v13M15 6.5v13"/>',
  bag:'<rect x="4" y="8" width="16" height="12" rx="2.5"/><path d="M9 8V6.5a3 3 0 016 0V8M4 13h16"/>'
};
var PW_FILL={"close": "M7.22 4.54 L19.46 16.78 L21.00 21.00 L16.78 19.46 L4.54 7.22 L3.00 3.00 Z M19.46 7.22 L7.22 19.46 L3.00 21.00 L4.54 16.78 L16.78 4.54 L21.00 3.00 Z", "boost": "M12.00 2.00 L21.50 11.50 L15.80 11.50 L12.00 7.70 L8.20 11.50 L2.50 11.50 Z M12.00 11.50 L21.50 21.00 L15.80 21.00 L12.00 17.20 L8.20 21.00 L2.50 21.00 Z", "limit-break": "M12.98 0.84 L13.98 5.91 L18.10 2.61 L17.18 8.24 L22.91 9.48 L18.40 12.00 L22.82 14.90 L17.18 15.76 L17.77 21.60 L13.98 18.09 L12.59 23.18 L10.02 18.09 L4.65 20.45 L6.82 15.76 L1.54 16.01 L5.60 12.00 L1.69 7.62 L6.82 8.24 L4.95 3.30 L10.02 5.91 Z M13.40 4.40 L9.20 11.40 L12.40 11.60 L10.20 19.80 L15.20 10.20 L12.00 10.00 L14.80 4.40 Z", "craft": "M1.50 11.60 L19.50 11.60 L19.50 13.90 L15.80 14.80 L14.60 17.40 L17.40 18.80 L17.40 21.20 L5.60 21.20 L5.60 18.80 L8.40 17.40 L7.40 14.80 L5.60 14.20 L3.40 12.90 Z M14.67 -0.69 L21.92 4.98 L19.33 8.29 L12.08 2.62 Z M15.00 4.90 L16.42 6.01 L12.29 11.29 L10.87 10.18 Z M3.60 8.20 L6.20 10.60 L3.20 10.20 Z M7.00 4.80 L8.80 9.60 L6.60 8.80 Z"};
var PW_FILL_RULE={'limit-break':'evenodd'};
function pwFillSvg(n){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="'+(PW_FILL_RULE[n]||'nonzero')+'" d="'+PW_FILL[n]+'"/></svg>'}
class PWIcon extends HTMLElement{
  static get observedAttributes(){return ['name','size','label']}
  connectedCallback(){this.attributeChangedCallback()}
  attributeChangedCallback(){
    var n=this.getAttribute('name');this.innerHTML=PW_FILL[n]?pwFillSvg(n):'';
    var s=this.getAttribute('size');if(s){this.style.width=this.style.height=s+'px'}
    var l=this.getAttribute('label');if(l){this.setAttribute('role','img');this.setAttribute('aria-label',l)}else{this.setAttribute('aria-hidden','true')}
  }
}
customElements.define('pw-icon',PWIcon);
function pwIcon(n){if(PW_FILL[n])return pwFillSvg(n);return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">'+(PW_SVG[n]||PW_SVG.grid)+'</svg>'}
class PWTab extends HTMLElement{
  static get observedAttributes(){return ['icon','selected','disabled']}
  connectedCallback(){
    if(!this._init){this._init=true;
      var lab=document.createElement('span');lab.className='pwt-label';while(this.firstChild)lab.appendChild(this.firstChild);
      this._ic=document.createElement('span');this._ic.className='pwt-icon';
      var sh=document.createElement('span');sh.className='pwt-shine';sh.setAttribute('aria-hidden','true');
      this.appendChild(sh);this.appendChild(this._ic);this.appendChild(lab);
      this.setAttribute('role','tab');
      this.addEventListener('click',()=>{if(!this.hasAttribute('disabled')&&!this.hasAttribute('state'))this.parentElement.select&&this.parentElement.select(this)});
    }
    this.attributeChangedCallback();
  }
  attributeChangedCallback(){
    if(!this._init)return;
    this._ic.innerHTML=pwIcon(this.getAttribute('icon')||'grid');
    var sel=this.hasAttribute('selected');
    this.setAttribute('aria-selected',sel?'true':'false');
    this.hasAttribute('disabled')?this.setAttribute('aria-disabled','true'):this.removeAttribute('aria-disabled');
    this.setAttribute('tabindex',sel&&!this.hasAttribute('disabled')?'0':'-1');
    var p=this.getAttribute('aria-controls')&&document.getElementById(this.getAttribute('aria-controls'));if(p)p.hidden=!sel;
  }
}
class PWTabs extends HTMLElement{
  connectedCallback(){
    if(this._init)return;this._init=true;this.setAttribute('role','tablist');
    this.addEventListener('keydown',e=>{
      var tabs=[].slice.call(this.querySelectorAll('pw-tab:not([disabled])'));var i=tabs.indexOf(document.activeElement);if(i<0)return;
      var n={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:tabs.length-1}[e.key];if(n===undefined)return;
      e.preventDefault();n=(n+tabs.length)%tabs.length;this.select(tabs[n]);tabs[n].focus();
    });
  }
  select(t){
    var old=this.querySelector('pw-tab[selected]');
    if(old&&old!==t&&!matchMedia('(prefers-reduced-motion: reduce)').matches)this.slide(old,t);
    this.querySelectorAll('pw-tab').forEach(x=>x.toggleAttribute('selected',x===t));this.dispatchEvent(new CustomEvent('change',{detail:{tab:t}}))}
}
PWTabs.prototype.slide=function(from,to){
  var base=this.getBoundingClientRect(),a=from.getBoundingClientRect(),b=to.getBoundingClientRect();
  if(this._ghost){this._ghost.remove();this._arr&&this._arr.removeAttribute('data-arriving')}
  var g=document.createElement('span');g.className='pwt-ghost';g.setAttribute('aria-hidden','true');
  g.style.width=b.width+'px';g.style.height=b.height+'px';
  this.prepend(g);this._ghost=g;this._arr=to;to.setAttribute('data-arriving','');
  var x0=a.left-base.left,y0=a.top-base.top,x1=b.left-base.left,y1=b.top-base.top;
  var anim=g.animate([
    {transform:'translate('+x0+'px,'+y0+'px)',width:a.width+'px',height:a.height+'px'},
    {transform:'translate('+x1+'px,'+y1+'px)',width:b.width+'px',height:b.height+'px'}
  ],{duration:280,easing:'cubic-bezier(.3,.8,.25,1)',fill:'forwards'});
  anim.onfinish=()=>{to.removeAttribute('data-arriving');if(this._ghost===g){this._ghost=null}
    g.animate([{opacity:1},{opacity:0}],{duration:90,fill:'forwards'}).onfinish=()=>g.remove();};
};
customElements.define('pw-tab',PWTab);customElements.define('pw-tabs',PWTabs);
window.PWDS={version:"0.2.0",
  icons:PW_FILL,
  registerIcon:function(name,d,rule){PW_FILL[name]=d;if(rule)PW_FILL_RULE[name]=rule;}};
})();
