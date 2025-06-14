import{Button_default as e,IconSwitchTransition_default as t,Icon_default as n,Input_default as r,Loading_default as i,Scrollbar_default as a,Transition as o,XButton as s,c$1 as c,cB as l,cE as u,cM as d,cNotM as f,call as p,changeColor as m,computed as h,createInjectionKey as g,createKey as _,createTheme as v,defineComponent as y,depx as b,getPreciseEventTarget as ee,h as x,hsl2hsv as S,hsl2rgb as C,hsla as w,hsv2hsl as T,hsv2rgb as E,hsva as D,iconSwitchTransition as O,inject as k,isMounted as te,isSlotEmpty as A,light_default$1 as ne,light_default$2 as re,light_default$5 as j,nextTick as ie,off as M,on as N,provide as ae,pxfy as P,ref as F,resolveSlot as I,resolveWrappedSlot as L,rgb2hsl as R,rgb2hsv as z,rgba as B,toHexString as V,toHexaString as H,toHslString as U,toHslaString as W,toHsvString as oe,toHsvaString as G,toRef as se,toRgbString as ce,toRgbaString as K,useConfig as le,useFormItem as ue,useLocale as de,useMergedState as fe,useRtl as q,useStyle as J,useThemeClass as pe,use_memo_default as Y,use_theme_default as me,warn as X,watch as he,watchEffect as ge,withDirectives as _e}from"./Checkbox-BL8Dxu4H.js";import{Binder_default as Z,Follower_default as ve,Target_default as ye,clickoutside_default as be,fadeInScaleUpTransition as xe,useAdjustedTo as Se}from"./esm-BMwcTg-m.js";var Ce=y({name:`Add`,render(){return x(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},x(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`}))}}),we=y({name:`Remove`,render(){return x(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},x(`line`,{x1:`400`,y1:`256`,x2:`112`,y2:`256`,style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Te=l(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[c(`>`,[l(`input`,[c(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),l(`button`,[c(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[u(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),c(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[u(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),c(`*`,[c(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[c(`>`,[l(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),l(`base-selection`,[l(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),l(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),c(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[c(`>`,[l(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),l(`base-selection`,[l(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),l(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),u(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const Ee={};var Q=y({name:`InputGroup`,props:Ee,setup(e){let{mergedClsPrefixRef:t}=le(e);return J(`-input-group`,Te,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return x(`div`,{class:`${e}-input-group`},this.$slots)}});function De(e){let{fontSize:t,boxShadow2:n,popoverColor:r,textColor2:i,borderRadius:a,borderColor:o,heightSmall:s,heightMedium:c,heightLarge:l,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,dividerColor:p}=e;return{panelFontSize:t,boxShadow:n,color:r,textColor:i,borderRadius:a,border:`1px solid ${o}`,heightSmall:s,heightMedium:c,heightLarge:l,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,dividerColor:p}}const Oe=v({name:`ColorPicker`,common:j,peers:{Input:re,Button:ne},self:De});var ke=Oe;function Ae(e,t){let n=e[0];switch(n){case`hex`:return t?`#000000FF`:`#000000`;case`rgb`:return t?`rgba(0, 0, 0, 1)`:`rgb(0, 0, 0)`;case`hsl`:return t?`hsla(0, 0%, 0%, 1)`:`hsl(0, 0%, 0%)`;case`hsv`:return t?`hsva(0, 0%, 0%, 1)`:`hsv(0, 0%, 0%)`}return`#000000`}function je(e){return e===null?null:/^ *#/.test(e)?`hex`:e.includes(`rgb`)?`rgb`:e.includes(`hsl`)?`hsl`:e.includes(`hsv`)?`hsv`:null}function Me(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ne(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Pe={rgb:{hex(e){return H(B(e))},hsl(e){let[t,n,r,i]=B(e);return W([...R(t,n,r),i])},hsv(e){let[t,n,r,i]=B(e);return G([...z(t,n,r),i])}},hex:{rgb(e){return K(B(e))},hsl(e){let[t,n,r,i]=B(e);return W([...R(t,n,r),i])},hsv(e){let[t,n,r,i]=B(e);return G([...z(t,n,r),i])}},hsl:{hex(e){let[t,n,r,i]=w(e);return H([...C(t,n,r),i])},rgb(e){let[t,n,r,i]=w(e);return K([...C(t,n,r),i])},hsv(e){let[t,n,r,i]=w(e);return G([...S(t,n,r),i])}},hsv:{hex(e){let[t,n,r,i]=D(e);return H([...E(t,n,r),i])},rgb(e){let[t,n,r,i]=D(e);return K([...E(t,n,r),i])},hsl(e){let[t,n,r,i]=D(e);return W([...T(t,n,r),i])}}};function Fe(e,t,n){if(n||=je(e),!n)return null;if(n===t)return e;let r=Pe[n];return r[t](e)}const Ie=`12px`,Le=12,$=`6px`;var Re=y({name:`AlphaSlider`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){let t=F(null);function n(n){!t.value||!e.rgba||(N(`mousemove`,document,r),N(`mouseup`,document,i),r(n))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=(n.clientX-a)/(i-Le);e.onUpdateAlpha(Ne(o))}function i(){var t;M(`mousemove`,document,r),M(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,railBackgroundImage:h(()=>{let{rgba:t}=e;return t?`linear-gradient(to right, rgba(${t[0]}, ${t[1]}, ${t[2]}, 0) 0%, rgba(${t[0]}, ${t[1]}, ${t[2]}, 1) 100%)`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return x(`div`,{class:`${e}-color-picker-slider`,ref:`railRef`,style:{height:Ie,borderRadius:$},onMousedown:this.handleMouseDown},x(`div`,{style:{borderRadius:$,position:`absolute`,left:0,right:0,top:0,bottom:0,overflow:`hidden`}},x(`div`,{class:`${e}-color-picker-checkboard`}),x(`div`,{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&x(`div`,{style:{position:`absolute`,left:$,right:$,top:0,bottom:0}},x(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${$})`,borderRadius:$,width:Ie,height:Ie}},x(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:K(this.rgba),borderRadius:$,width:Ie,height:Ie}}))))}});const ze=g(`n-color-picker`);function Be(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Ve(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function He(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Ue(e){let t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function We(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Ge={paddingSmall:`0 4px`};var Ke=y({name:`ColorInputUnit`,props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){let t=F(``),{themeRef:n}=k(ze,null);ge(()=>{t.value=r()});function r(){let{value:t}=e;if(t===null)return``;let{label:n}=e;return n===`HEX`?t:n===`A`?`${Math.floor(t*100)}%`:String(Math.floor(t))}function i(e){t.value=e}function a(n){let i,a;switch(e.label){case`HEX`:a=Ue(n),a&&e.onUpdateValue(n),t.value=r();break;case`H`:i=Ve(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`S`:case`L`:case`V`:i=He(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`A`:i=We(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`R`:case`G`:case`B`:i=Be(n),i===!1?t.value=r():e.onUpdateValue(i);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:i}},render(){let{mergedTheme:e}=this;return x(r,{size:`small`,placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Ge,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label===`A`?`flex-grow: 1.25;`:``})}}),qe=y({name:`ColorInput`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){let{showAlpha:r}=e;if(e.mode===`hex`){e.onUpdateValue((r?H:V)(n));return}let i;switch(i=e.valueArr===null?[0,0,0,0]:Array.from(e.valueArr),e.mode){case`hsv`:i[t]=n,e.onUpdateValue((r?G:oe)(i));break;case`rgb`:i[t]=n,e.onUpdateValue((r?K:ce)(i));break;case`hsl`:i[t]=n,e.onUpdateValue((r?W:U)(i));break}}}},render(){let{clsPrefix:e,modes:t}=this;return x(`div`,{class:`${e}-color-picker-input`},x(`div`,{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?``:`pointer`}},this.mode.toUpperCase()+(this.showAlpha?`A`:``)),x(Q,null,{default:()=>{let{mode:e,valueArr:t,showAlpha:n}=this;if(e===`hex`){let e=null;try{e=t===null?null:(n?H:V)(t)}catch{}return x(Ke,{label:`HEX`,showAlpha:n,value:e,onUpdateValue:e=>{this.handleUnitUpdateValue(0,e)}})}return(e+(n?`a`:``)).split(``).map((e,n)=>x(Ke,{label:e.toUpperCase(),value:t===null?null:t[n],onUpdateValue:e=>{this.handleUnitUpdateValue(n,e)}}))}}))}});function Je(e,t){if(t===`hsv`){let[t,n,r,i]=D(e);return K([...E(t,n,r),i])}return e}function Ye(e){let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.fillStyle=e,t.fillStyle):`#000000`}var Xe=y({name:`ColorPickerSwatches`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){let t=h(()=>e.swatches.map(e=>{let t=je(e);return{value:e,mode:t,legalValue:Je(e,t)}}));function n(t){let{mode:n}=e,{value:r,mode:i}=t;return i||(i=`hex`,/^[a-zA-Z]+$/.test(r)?r=Ye(r):(X(`color-picker`,`color ${r} in swatches is invalid.`),r=`#000000`)),i===n?r:Fe(r,n,i)}function r(t){e.onUpdateColor(n(t))}function i(e,t){e.key===`Enter`&&r(t)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:i}},render(){let{clsPrefix:e}=this;return x(`div`,{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>x(`div`,{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:e=>{this.handleSwatchKeyDown(e,t)}},x(`div`,{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Ze=y({name:`ColorPickerTrigger`,slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){let{colorPickerSlots:t,renderLabelRef:n}=k(ze,null);return()=>{let{hsla:r,value:i,clsPrefix:a,onClick:o,disabled:s}=e,c=t.label||n.value;return x(`div`,{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:o},x(`div`,{class:`${a}-color-picker-trigger__fill`},x(`div`,{class:`${a}-color-picker-checkboard`}),x(`div`,{style:{position:`absolute`,left:0,right:0,top:0,bottom:0,backgroundColor:r?W(r):``}}),i&&r?x(`div`,{class:`${a}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?`black`:`white`}},c?c(i):i):null))}}}),Qe=y({name:`ColorPreview`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{let t=je(e);return!!(!e||t&&t!==`hsv`)}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(t){var n;let r=t.target.value;(n=e.onUpdateColor)==null||n.call(e,Fe(r.toUpperCase(),e.mode,`hex`)),t.stopPropagation()}return{handleChange:t}},render(){let{clsPrefix:e}=this;return x(`div`,{class:`${e}-color-picker-preview__preview`},x(`span`,{class:`${e}-color-picker-preview__fill`,style:{background:this.color||`#000000`}}),x(`input`,{class:`${e}-color-picker-preview__input`,type:`color`,value:this.color,onChange:this.handleChange}))}});const $e=`12px`,et=12,tt=`6px`,nt=6,rt=`linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`;var it=y({name:`HueSlider`,props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){let t=F(null);function n(e){t.value&&(N(`mousemove`,document,r),N(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=Me((n.clientX-a-nt)/(i-et)*360);e.onUpdateHue(o)}function i(){var t;M(`mousemove`,document,r),M(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,handleMouseDown:n}},render(){let{clsPrefix:e}=this;return x(`div`,{class:`${e}-color-picker-slider`,style:{height:$e,borderRadius:tt}},x(`div`,{ref:`railRef`,style:{boxShadow:`inset 0 0 2px 0 rgba(0, 0, 0, .24)`,boxSizing:`border-box`,backgroundImage:rt,height:$e,borderRadius:tt,position:`relative`},onMousedown:this.handleMouseDown},x(`div`,{style:{position:`absolute`,left:tt,right:tt,top:0,bottom:0}},x(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${tt})`,borderRadius:tt,width:$e,height:$e}},x(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:tt,width:$e,height:$e}})))))}});const at=`12px`,ot=`6px`;var st=y({name:`Pallete`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){let t=F(null);function n(e){t.value&&(N(`mousemove`,document,r),N(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,height:a,left:o,bottom:s}=r.getBoundingClientRect(),c=(s-n.clientY)/a,l=(n.clientX-o)/i,u=100*(l>1?1:l<0?0:l),d=100*(c>1?1:c<0?0:c);e.onUpdateSV(u,d)}function i(){var t;M(`mousemove`,document,r),M(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{palleteRef:t,handleColor:h(()=>{let{rgba:t}=e;return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return x(`div`,{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:`palleteRef`},x(`div`,{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),x(`div`,{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))`}}),this.rgba&&x(`div`,{class:`${e}-color-picker-handle`,style:{width:at,height:at,borderRadius:ot,left:`calc(${this.displayedSv[0]}% - ${ot})`,bottom:`calc(${this.displayedSv[1]}% - ${ot})`}},x(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ot,width:at,height:at}})))}}),ct=c([l(`color-picker`,`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),l(`color-picker-panel`,`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[xe(),l(`input`,`
 text-align: center;
 `)]),l(`color-picker-checkboard`,`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[c(`&::after`,`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),l(`color-picker-slider`,`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[u(`image`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),c(`&::after`,`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),l(`color-picker-handle`,`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[u(`fill`,`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),l(`color-picker-pallete`,`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[u(`layer`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[d(`shadowed`,`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),l(`color-picker-preview`,`
 display: flex;
 `,[u(`sliders`,`
 flex: 1 0 auto;
 `),u(`preview`,`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),u(`fill`,`
 display: block;
 width: 30px;
 height: 30px;
 `),u(`input`,`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),l(`color-picker-input`,`
 display: flex;
 align-items: center;
 `,[l(`input`,`
 flex-grow: 1;
 flex-basis: 0;
 `),u(`mode`,`
 width: 72px;
 text-align: center;
 `)]),l(`color-picker-control`,`
 padding: 12px;
 `),l(`color-picker-action`,`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[l(`button`,`margin-left: 8px;`)]),l(`color-picker-trigger`,`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[u(`value`,`
 white-space: nowrap;
 position: relative;
 `),u(`fill`,`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),d(`disabled`,`cursor: not-allowed`),l(`color-picker-checkboard`,`
 border-radius: var(--n-border-radius);
 `,[c(`&::after`,`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),l(`color-picker-swatches`,`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[l(`color-picker-swatch`,`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[u(`fill`,`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),c(`&:focus`,`
 outline: none;
 `,[u(`fill`,[c(`&::after`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const lt=Object.assign(Object.assign({},me.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>[`rgb`,`hex`,`hsl`]},placement:{type:String,default:`bottom-start`},to:Se.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var ut=y({name:`ColorPicker`,props:lt,slots:Object,setup(t,{slots:n}){let r=F(null),i=null,a=ue(t),{mergedSizeRef:o,mergedDisabledRef:s}=a,{localeRef:c}=de(`global`),{mergedClsPrefixRef:l,namespaceRef:u,inlineThemeDisabled:d}=le(t),f=me(`ColorPicker`,`-color-picker`,ct,ke,t,l);ae(ze,{themeRef:f,renderLabelRef:se(t,`renderLabel`),colorPickerSlots:n});let m=F(t.defaultShow),g=fe(se(t,`show`),m);function v(e){let{onUpdateShow:n,"onUpdate:show":r}=t;n&&p(n,e),r&&p(r,e),m.value=e}let{defaultValue:y}=t,b=F(y===void 0?Ae(t.modes,t.showAlpha):y),O=fe(se(t,`value`),b),k=F([O.value]),A=F(0),ne=h(()=>je(O.value)),{modes:re}=t,j=F(je(O.value)||re[0]||`rgb`);function M(){let{modes:e}=t,{value:n}=j,r=e.findIndex(e=>e===n);~r?j.value=e[(r+1)%e.length]:j.value=`rgb`}let N,P,I,L,q,J,Y,X,_e=h(()=>{let{value:e}=O;if(!e)return null;switch(ne.value){case`hsv`:return D(e);case`hsl`:return[N,P,I,X]=w(e),[...S(N,P,I),X];case`rgb`:case`hex`:return[q,J,Y,X]=B(e),[...z(q,J,Y),X]}}),Z=h(()=>{let{value:e}=O;if(!e)return null;switch(ne.value){case`rgb`:case`hex`:return B(e);case`hsv`:return[N,P,L,X]=D(e),[...E(N,P,L),X];case`hsl`:return[N,P,I,X]=w(e),[...C(N,P,I),X]}}),ve=h(()=>{let{value:e}=O;if(!e)return null;switch(ne.value){case`hsl`:return w(e);case`hsv`:return[N,P,L,X]=D(e),[...T(N,P,L),X];case`rgb`:case`hex`:return[q,J,Y,X]=B(e),[...R(q,J,Y),X]}}),ye=h(()=>{switch(j.value){case`rgb`:case`hex`:return Z.value;case`hsv`:return _e.value;case`hsl`:return ve.value}}),be=F(0),xe=F(1),Ce=F([0,0]);function we(e,n){let{value:r}=_e,i=be.value,a=r?r[3]:1;Ce.value=[e,n];let{showAlpha:o}=t;switch(j.value){case`hsv`:Q((o?G:oe)([i,e,n,a]),`cursor`);break;case`hsl`:Q((o?W:U)([...T(i,e,n),a]),`cursor`);break;case`rgb`:Q((o?K:ce)([...E(i,e,n),a]),`cursor`);break;case`hex`:Q((o?H:V)([...E(i,e,n),a]),`cursor`);break}}function Te(e){be.value=e;let{value:n}=_e;if(!n)return;let[,r,i,a]=n,{showAlpha:o}=t;switch(j.value){case`hsv`:Q((o?G:oe)([e,r,i,a]),`cursor`);break;case`rgb`:Q((o?K:ce)([...E(e,r,i),a]),`cursor`);break;case`hex`:Q((o?H:V)([...E(e,r,i),a]),`cursor`);break;case`hsl`:Q((o?W:U)([...T(e,r,i),a]),`cursor`);break}}function Ee(e){switch(j.value){case`hsv`:[N,P,L]=_e.value,Q(G([N,P,L,e]),`cursor`);break;case`rgb`:[q,J,Y]=Z.value,Q(K([q,J,Y,e]),`cursor`);break;case`hex`:[q,J,Y]=Z.value,Q(H([q,J,Y,e]),`cursor`);break;case`hsl`:[N,P,I]=ve.value,Q(W([N,P,I,e]),`cursor`);break}xe.value=e}function Q(e,n){i=n===`cursor`?e:null;let{nTriggerFormChange:r,nTriggerFormInput:o}=a,{onUpdateValue:s,"onUpdate:value":c}=t;s&&p(s,e),c&&p(c,e),r(),o(),b.value=e}function De(e){Q(e,`input`),ie(Oe)}function Oe(e=!0){let{value:n}=O;if(n){let{nTriggerFormChange:r,nTriggerFormInput:i}=a,{onComplete:o}=t;o&&o(n);let{value:s}=k,{value:c}=A;e&&(s.splice(c+1,s.length,n),A.value=c+1),r(),i()}}function Me(){let{value:e}=A;e-1<0||(Q(k.value[e-1],`input`),Oe(!1),A.value=e-1)}function Ne(){let{value:e}=A;e<0||e+1>=k.value.length||(Q(k.value[e+1],`input`),Oe(!1),A.value=e+1)}function Pe(){Q(null,`input`);let{onClear:e}=t;e&&e(),v(!1)}function Fe(){let{value:e}=O,{onConfirm:n}=t;n&&n(e),v(!1)}let Ie=h(()=>A.value>=1),Le=h(()=>{let{value:e}=k;return e.length>1&&A.value<e.length-1});he(g,e=>{e||(k.value=[O.value],A.value=0)}),ge(()=>{if(!(i&&i===O.value)){let{value:e}=_e;e&&(be.value=e[0],xe.value=e[3],Ce.value=[e[1],e[2]])}i=null});let $=h(()=>{let{value:e}=o,{common:{cubicBezierEaseInOut:t},self:{textColor:n,color:r,panelFontSize:i,boxShadow:a,border:s,borderRadius:c,dividerColor:l,[_(`height`,e)]:u,[_(`fontSize`,e)]:d}}=f.value;return{"--n-bezier":t,"--n-text-color":n,"--n-color":r,"--n-panel-font-size":i,"--n-font-size":d,"--n-box-shadow":a,"--n-border":s,"--n-border-radius":c,"--n-height":u,"--n-divider-color":l}}),Be=d?pe(`color-picker`,h(()=>o.value[0]),$,t):void 0;function Ve(){var r;let{value:i}=Z,{value:a}=be,{internalActions:o,modes:s,actions:u}=t,{value:p}=f,{value:m}=l;return x(`div`,{class:[`${m}-color-picker-panel`,Be?.themeClass.value],onDragstart:e=>{e.preventDefault()},style:d?void 0:$.value},x(`div`,{class:`${m}-color-picker-control`},x(st,{clsPrefix:m,rgba:i,displayedHue:a,displayedSv:Ce.value,onUpdateSV:we,onComplete:Oe}),x(`div`,{class:`${m}-color-picker-preview`},x(`div`,{class:`${m}-color-picker-preview__sliders`},x(it,{clsPrefix:m,hue:a,onUpdateHue:Te,onComplete:Oe}),t.showAlpha?x(Re,{clsPrefix:m,rgba:i,alpha:xe.value,onUpdateAlpha:Ee,onComplete:Oe}):null),t.showPreview?x(Qe,{clsPrefix:m,mode:j.value,color:Z.value&&V(Z.value),onUpdateColor:e=>{Q(e,`input`)}}):null),x(qe,{clsPrefix:m,showAlpha:t.showAlpha,mode:j.value,modes:s,onUpdateMode:M,value:O.value,valueArr:ye.value,onUpdateValue:De}),(r=t.swatches)?.length&&x(Xe,{clsPrefix:m,mode:j.value,swatches:t.swatches,onUpdateColor:e=>{Q(e,`input`)}})),u?.length?x(`div`,{class:`${m}-color-picker-action`},u.includes(`confirm`)&&x(e,{size:`small`,onClick:Fe,theme:p.peers.Button,themeOverrides:p.peerOverrides.Button},{default:()=>c.value.confirm}),u.includes(`clear`)&&x(e,{size:`small`,onClick:Pe,disabled:!O.value,theme:p.peers.Button,themeOverrides:p.peerOverrides.Button},{default:()=>c.value.clear})):null,n.action?x(`div`,{class:`${m}-color-picker-action`},{default:n.action}):o?x(`div`,{class:`${m}-color-picker-action`},o.includes(`undo`)&&x(e,{size:`small`,onClick:Me,disabled:!Ie.value,theme:p.peers.Button,themeOverrides:p.peerOverrides.Button},{default:()=>c.value.undo}),o.includes(`redo`)&&x(e,{size:`small`,onClick:Ne,disabled:!Le.value,theme:p.peers.Button,themeOverrides:p.peerOverrides.Button},{default:()=>c.value.redo})):null)}return{mergedClsPrefix:l,namespace:u,selfRef:r,hsla:ve,rgba:Z,mergedShow:g,mergedDisabled:s,isMounted:te(),adjustedTo:Se(t),mergedValue:O,handleTriggerClick(){v(!0)},handleClickOutside(e){var t;(t=r.value)?.contains(ee(e))||v(!1)},renderPanel:Ve,cssVars:d?void 0:$,themeClass:Be?.themeClass,onRender:Be?.onRender}},render(){let{mergedClsPrefix:e,onRender:t}=this;return t?.(),x(`div`,{class:[this.themeClass,`${e}-color-picker`],ref:`selfRef`,style:this.cssVars},x(Z,null,{default:()=>[x(ye,null,{default:()=>x(Ze,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),x(ve,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Se.tdkey,to:this.adjustedTo},{default:()=>x(o,{name:`fade-in-scale-up-transition`,appear:this.isMounted},{default:()=>this.mergedShow?_e(this.renderPanel(),[[be,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),dt={feedbackPadding:`4px 0 0 2px`,feedbackHeightSmall:`24px`,feedbackHeightMedium:`24px`,feedbackHeightLarge:`26px`,feedbackFontSizeSmall:`13px`,feedbackFontSizeMedium:`14px`,feedbackFontSizeLarge:`14px`,labelFontSizeLeftSmall:`14px`,labelFontSizeLeftMedium:`14px`,labelFontSizeLeftLarge:`15px`,labelFontSizeTopSmall:`13px`,labelFontSizeTopMedium:`14px`,labelFontSizeTopLarge:`14px`,labelHeightSmall:`24px`,labelHeightMedium:`26px`,labelHeightLarge:`28px`,labelPaddingVertical:`0 0 6px 2px`,labelPaddingHorizontal:`0 12px 0 0`,labelTextAlignVertical:`left`,labelTextAlignHorizontal:`right`,labelFontWeight:`400`};function ft(e){let{heightSmall:t,heightMedium:n,heightLarge:r,textColor1:i,errorColor:a,warningColor:o,lineHeight:s,textColor3:c}=e;return Object.assign(Object.assign({},dt),{blankHeightSmall:t,blankHeightMedium:n,blankHeightLarge:r,lineHeight:s,labelTextColor:i,asteriskColor:a,feedbackTextColorError:a,feedbackTextColorWarning:o,feedbackTextColor:c})}const pt={name:`Form`,common:j,self:ft};var mt=pt;function ht(e){let{textColorDisabled:t}=e;return{iconColorDisabled:t}}const gt=v({name:`InputNumber`,common:j,peers:{Button:ne,Input:re},self:ht});var _t=gt,vt={buttonHeightSmall:`14px`,buttonHeightMedium:`18px`,buttonHeightLarge:`22px`,buttonWidthSmall:`14px`,buttonWidthMedium:`18px`,buttonWidthLarge:`22px`,buttonWidthPressedSmall:`20px`,buttonWidthPressedMedium:`24px`,buttonWidthPressedLarge:`28px`,railHeightSmall:`18px`,railHeightMedium:`22px`,railHeightLarge:`26px`,railWidthSmall:`32px`,railWidthMedium:`40px`,railWidthLarge:`48px`};function yt(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e,a=`rgba(0, 0, 0, .14)`;return Object.assign(Object.assign({},vt),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:a,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${m(t,{alpha:.2})}`})}const bt={name:`Switch`,common:j,self:yt};var xt=bt,St=c([l(`input-number-suffix`,`
 display: inline-block;
 margin-right: 10px;
 `),l(`input-number-prefix`,`
 display: inline-block;
 margin-left: 10px;
 `)]);function Ct(e){return e==null||typeof e==`string`&&e.trim()===``?null:Number(e)}function wt(e){return e.includes(`.`)&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^-?\d*$/.test(e))||e===`-`||e===`-0`}function Tt(e){return e==null?!0:!Number.isNaN(e)}function Et(e,t){return typeof e==`number`?t===void 0?String(e):e.toFixed(t):``}function Dt(e){if(e===null)return null;if(typeof e==`number`)return e;{let t=Number(e);return Number.isNaN(t)?null:t}}const Ot=800,kt=100,At=Object.assign(Object.assign({},me.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:`right`},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},round:{type:Boolean,default:void 0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]});var jt=y({name:`InputNumber`,props:At,slots:Object,setup(e){let{mergedBorderedRef:t,mergedClsPrefixRef:n,mergedRtlRef:r}=le(e),i=me(`InputNumber`,`-input-number`,St,_t,e,n),{localeRef:a}=de(`InputNumber`),o=ue(e),{mergedSizeRef:s,mergedDisabledRef:c,mergedStatusRef:l}=o,u=F(null),d=F(null),f=F(null),m=F(e.defaultValue),g=se(e,`value`),_=fe(g,m),v=F(``),y=e=>{let t=String(e).split(`.`)[1];return t?t.length:0},b=t=>{let n=[e.min,e.max,e.step,t].map(e=>e===void 0?0:y(e));return Math.max(...n)},ee=Y(()=>{let{placeholder:t}=e;return t===void 0?a.value.placeholder:t}),x=Y(()=>{let t=Dt(e.step);return t===null||t===0?1:Math.abs(t)}),S=Y(()=>{let t=Dt(e.min);return t===null?null:t}),C=Y(()=>{let t=Dt(e.max);return t===null?null:t}),w=()=>{let{value:t}=_;if(Tt(t)){let{format:n,precision:r}=e;n?v.value=n(t):t===null||r===void 0||y(t)>r?v.value=Et(t,void 0):v.value=Et(t,r)}else v.value=String(t)};w();let T=t=>{let{value:n}=_;if(t===n){w();return}let{"onUpdate:value":r,onUpdateValue:i,onChange:a}=e,{nTriggerFormInput:s,nTriggerFormChange:c}=o;a&&p(a,t),i&&p(i,t),r&&p(r,t),m.value=t,s(),c()},E=({offset:t,doUpdateIfValid:n,fixPrecision:r,isInputing:i})=>{let{value:a}=v;if(i&&wt(a))return!1;let o=(e.parse||Ct)(a);if(o===null)return n&&T(null),null;if(Tt(o)){let a=y(o),{precision:s}=e;if(s!==void 0&&s<a&&!r)return!1;let c=Number.parseFloat((o+t).toFixed(s??b(o)));if(Tt(c)){let{value:t}=C,{value:r}=S;if(t!==null&&c>t){if(!n||i)return!1;c=t}if(r!==null&&c<r){if(!n||i)return!1;c=r}return e.validator&&!e.validator(c)?!1:(n&&T(c),c)}}return!1},D=Y(()=>{let e=E({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1});return e===!1}),O=Y(()=>{let{value:t}=_;if(e.validator&&t===null)return!1;let{value:n}=x,r=E({offset:-n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1});return r!==!1}),k=Y(()=>{let{value:t}=_;if(e.validator&&t===null)return!1;let{value:n}=x,r=E({offset:+n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1});return r!==!1});function te(t){let{onFocus:n}=e,{nTriggerFormFocus:r}=o;n&&p(n,t),r()}function A(t){var n,r;if(t.target===(n=u.value)?.wrapperElRef)return;let i=E({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(i!==!1){let e=(r=u.value)?.inputElRef;e&&(e.value=String(i||``)),_.value===i&&w()}else w();let{onBlur:a}=e,{nTriggerFormBlur:s}=o;a&&p(a,t),s(),ie(()=>{w()})}function ne(t){let{onClear:n}=e;n&&p(n,t)}function re(){let{value:t}=k;if(!t){W();return}let{value:n}=_;if(n===null)e.validator||T(P());else{let{value:e}=x;E({offset:e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function j(){let{value:t}=O;if(!t){H();return}let{value:n}=_;if(n===null)e.validator||T(P());else{let{value:e}=x;E({offset:-e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}let M=te,ae=A;function P(){if(e.validator)return null;let{value:t}=S,{value:n}=C;return t===null?n===null?0:Math.min(0,n):Math.max(0,t)}function I(e){ne(e),T(null)}function L(e){var t,n,r;(t=f.value)?.$el.contains(e.target)&&e.preventDefault(),(n=d.value)?.$el.contains(e.target)&&e.preventDefault(),(r=u.value)==null||r.activate()}let R=null,z=null,V=null;function H(){V&&(window.clearTimeout(V),V=null),R&&(window.clearInterval(R),R=null)}let U=null;function W(){U&&(window.clearTimeout(U),U=null),z&&(window.clearInterval(z),z=null)}function oe(){H(),V=window.setTimeout(()=>{R=window.setInterval(()=>{j()},kt)},Ot),N(`mouseup`,document,H,{once:!0})}function G(){W(),U=window.setTimeout(()=>{z=window.setInterval(()=>{re()},kt)},Ot),N(`mouseup`,document,W,{once:!0})}let ce=()=>{z||re()},K=()=>{R||j()};function J(t){var n,r;if(t.key===`Enter`){if(t.target===(n=u.value)?.wrapperElRef)return;let e=E({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});e!==!1&&((r=u.value)==null||r.deactivate())}else if(t.key===`ArrowUp`){if(!k.value||e.keyboard.ArrowUp===!1)return;t.preventDefault();let n=E({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});n!==!1&&re()}else if(t.key===`ArrowDown`){if(!O.value||e.keyboard.ArrowDown===!1)return;t.preventDefault();let n=E({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});n!==!1&&j()}}function pe(t){v.value=t,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&E({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}he(_,()=>{w()});let X={focus:()=>{var e;return(e=u.value)?.focus()},blur:()=>{var e;return(e=u.value)?.blur()},select:()=>{var e;return(e=u.value)?.select()}},ge=q(`InputNumber`,r,n);return Object.assign(Object.assign({},X),{rtlEnabled:ge,inputInstRef:u,minusButtonInstRef:d,addButtonInstRef:f,mergedClsPrefix:n,mergedBordered:t,uncontrolledValue:m,mergedValue:_,mergedPlaceholder:ee,displayedValueInvalid:D,mergedSize:s,mergedDisabled:c,displayedValue:v,addable:k,minusable:O,mergedStatus:l,handleFocus:M,handleBlur:ae,handleClear:I,handleMouseDown:L,handleAddClick:ce,handleMinusClick:K,handleAddMousedown:G,handleMinusMousedown:oe,handleKeyDown:J,handleUpdateDisplayedValue:pe,mergedTheme:i,inputThemeOverrides:{paddingSmall:`0 8px 0 10px`,paddingMedium:`0 8px 0 12px`,paddingLarge:`0 8px 0 14px`},buttonThemeOverrides:h(()=>{let{self:{iconColorDisabled:e}}=i.value,[t,n,r,a]=B(e);return{textColorTextDisabled:`rgb(${t}, ${n}, ${r})`,opacityDisabled:`${a}`}})})},render(){let{mergedClsPrefix:e,$slots:t}=this,i=()=>x(s,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:`minusButtonInstRef`},{icon:()=>I(t[`minus-icon`],()=>[x(n,{clsPrefix:e},{default:()=>x(we,null)})])}),a=()=>x(s,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:`addButtonInstRef`},{icon:()=>I(t[`add-icon`],()=>[x(n,{clsPrefix:e},{default:()=>x(Ce,null)})])});return x(`div`,{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},x(r,{ref:`inputInstRef`,autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,round:this.round,textDecoration:this.displayedValueInvalid?`line-through`:void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var n;return this.showButton&&this.buttonPlacement===`both`?[i(),L(t.prefix,t=>t?x(`span`,{class:`${e}-input-number-prefix`},t):null)]:(n=t.prefix)?.call(t)},suffix:()=>{var n;return this.showButton?[L(t.suffix,t=>t?x(`span`,{class:`${e}-input-number-suffix`},t):null),this.buttonPlacement===`right`?i():null,a()]:(n=t.suffix)?.call(t)}}))}});const Mt=Object.assign(Object.assign({},me.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:`right`},xPlacement:{type:String,default:`bottom`}}),Nt=y({name:`Scrollbar`,props:Mt,setup(){let e=F(null),t={scrollTo:(...t)=>{var n;(n=e.value)==null||n.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var n;(n=e.value)==null||n.scrollBy(t[0],t[1])}};return Object.assign(Object.assign({},t),{scrollbarInstRef:e})},render(){return x(a,Object.assign({ref:`scrollbarInstRef`},this.$props),this.$slots)}});var Pt=Nt,Ft=l(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[u(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),u(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),u(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),l(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[O({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),u(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),u(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),u(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c(`&:focus`,[u(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d(`round`,[u(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[u(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),f(`disabled`,[f(`icon`,[d(`rubber-band`,[d(`pressed`,[u(`rail`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),u(`rail`,[c(`&:active`,[u(`button`,`max-width: var(--n-button-width-pressed);`)])]),d(`active`,[d(`pressed`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),u(`rail`,[c(`&:active`,[u(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),d(`active`,[u(`rail`,[u(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),u(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[u(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[O()]),u(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),d(`active`,[u(`rail`,`background-color: var(--n-rail-color-active);`)]),d(`loading`,[u(`rail`,`
 cursor: wait;
 `)]),d(`disabled`,[u(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const It=Object.assign(Object.assign({},me.props),{size:{type:String,default:`medium`},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Lt;var Rt=y({name:`Switch`,props:It,slots:Object,setup(e){Lt===void 0&&(Lt=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=le(e),r=me(`Switch`,`-switch`,Ft,xt,e,t),i=ue(e),{mergedSizeRef:a,mergedDisabledRef:o}=i,s=F(e.defaultValue),c=se(e,`value`),l=fe(c,s),u=h(()=>l.value===e.checkedValue),d=F(!1),f=F(!1),m=h(()=>{let{railStyle:t}=e;if(t)return t({focused:f.value,checked:u.value})});function g(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:a}=e,{nTriggerFormInput:o,nTriggerFormChange:c}=i;n&&p(n,t),a&&p(a,t),r&&p(r,t),s.value=t,o(),c()}function v(){let{nTriggerFormFocus:e}=i;e()}function y(){let{nTriggerFormBlur:e}=i;e()}function ee(){e.loading||o.value||(l.value===e.checkedValue?g(e.uncheckedValue):g(e.checkedValue))}function x(){f.value=!0,v()}function S(){f.value=!1,y(),d.value=!1}function C(t){e.loading||o.value||t.key===` `&&(l.value===e.checkedValue?g(e.uncheckedValue):g(e.checkedValue),d.value=!1)}function w(t){e.loading||o.value||t.key===` `&&(t.preventDefault(),d.value=!0)}let T=h(()=>{let{value:e}=a,{self:{opacityDisabled:t,railColor:n,railColorActive:i,buttonBoxShadow:o,buttonColor:s,boxShadowFocus:c,loadingColor:l,textColor:u,iconColor:d,[_(`buttonHeight`,e)]:f,[_(`buttonWidth`,e)]:p,[_(`buttonWidthPressed`,e)]:m,[_(`railHeight`,e)]:h,[_(`railWidth`,e)]:g,[_(`railBorderRadius`,e)]:v,[_(`buttonBorderRadius`,e)]:y},common:{cubicBezierEaseInOut:ee}}=r.value,x,S,C;return Lt?(x=`calc((${h} - ${f}) / 2)`,S=`max(${h}, ${f})`,C=`max(${g}, calc(${g} + ${f} - ${h}))`):(x=P((b(h)-b(f))/2),S=P(Math.max(b(h),b(f))),C=b(h)>b(f)?g:P(b(g)+b(f)-b(h))),{"--n-bezier":ee,"--n-button-border-radius":y,"--n-button-box-shadow":o,"--n-button-color":s,"--n-button-width":p,"--n-button-width-pressed":m,"--n-button-height":f,"--n-height":S,"--n-offset":x,"--n-opacity-disabled":t,"--n-rail-border-radius":v,"--n-rail-color":n,"--n-rail-color-active":i,"--n-rail-height":h,"--n-rail-width":g,"--n-width":C,"--n-box-shadow-focus":c,"--n-loading-color":l,"--n-text-color":u,"--n-icon-color":d}}),E=n?pe(`switch`,h(()=>a.value[0]),T,e):void 0;return{handleClick:ee,handleBlur:S,handleFocus:x,handleKeyup:C,handleKeydown:w,mergedRailStyle:m,pressed:d,mergedClsPrefix:t,mergedValue:l,checked:u,mergedDisabled:o,cssVars:n?void 0:T,themeClass:E?.themeClass,onRender:E?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:a,onRender:o,$slots:s}=this;o?.();let{checked:c,unchecked:l,icon:u,"checked-icon":d,"unchecked-icon":f}=s,p=!(A(u)&&A(d)&&A(f));return x(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},x(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:a},L(c,t=>L(l,n=>t||n?x(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},x(`div`,{class:`${e}-switch__rail-placeholder`},x(`div`,{class:`${e}-switch__button-placeholder`}),t),x(`div`,{class:`${e}-switch__rail-placeholder`},x(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),x(`div`,{class:`${e}-switch__button`},L(u,n=>L(d,r=>L(f,a=>x(t,null,{default:()=>this.loading?x(i,{key:`loading`,clsPrefix:e,strokeWidth:20}):this.checked&&(r||n)?x(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(a||n)?x(`div`,{class:`${e}-switch__button-icon`,key:a?`unchecked-icon`:`icon`},a||n):null})))),L(c,t=>t&&x(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),L(l,t=>t&&x(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{Ce as Add_default,ut as ColorPicker_default,Q as InputGroup_default,jt as InputNumber_default,Pt as Scrollbar_default,Rt as Switch_default,vt as _common_default,mt as light_default,ft as self,De as self$1};