import{Button_default as e,Checkbox_default as t,Close_default as n,Empty_default as r,Icon_default as i,Input_default as a,Scrollbar_default as o,VirtualList_default as s,c$1 as c,cB as l,cE as u,cM as d,cNotM as f,call as p,composite as m,computed as h,createInjectionKey as g,createKey as _,createTheme as v,createVNode as y,defineComponent as b,depx as x,getTitleAttribute as S,h as C,inject as w,isMounted as T,light_default as E,light_default$1 as D,light_default$2 as O,light_default$3 as k,light_default$4 as A,light_default$5 as j,provide as M,ref as N,toRef as P,useConfig as F,useFormItem as I,useLocale as L,useMergedState as R,use_memo_default as z,use_theme_default as B}from"./Checkbox-BL8Dxu4H.js";import{Tree_default as V,_common_default as H,createElementTreeData as U,pcStencilIcons as W}from"./tree-BxgrI3V_.js";import{ElementType as G}from"./element-Ckb9hs9W.js";import"./table-DB8VWZJj.js";var K=b({name:`Search`,render(){return C(`svg`,{version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,style:`enable-background: new 0 0 512 512`},C(`path`,{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}});function q(e){let{fontWeight:t,fontSizeLarge:n,fontSizeMedium:r,fontSizeSmall:i,heightLarge:a,heightMedium:o,borderRadius:s,cardColor:c,tableHeaderColor:l,textColor1:u,textColorDisabled:d,textColor2:f,textColor3:p,borderColor:h,hoverColor:g,closeColorHover:_,closeColorPressed:v,closeIconColor:y,closeIconColorHover:b,closeIconColorPressed:x}=e;return Object.assign(Object.assign({},H),{itemHeightSmall:o,itemHeightMedium:o,itemHeightLarge:a,fontSizeSmall:i,fontSizeMedium:r,fontSizeLarge:n,borderRadius:s,dividerColor:h,borderColor:h,listColor:c,headerColor:m(c,l),titleTextColor:u,titleTextColorDisabled:d,extraTextColor:p,extraTextColorDisabled:d,itemTextColor:f,itemTextColorDisabled:d,itemColorPending:g,titleFontWeight:t,closeColorHover:_,closeColorPressed:v,closeIconColor:y,closeIconColorHover:b,closeIconColorPressed:x})}const J=v({name:`Transfer`,common:j,peers:{Checkbox:E,Scrollbar:A,Input:O,Empty:k,Button:D},self:q});var ee=J;const Y=g(`n-transfer`);var te=l(`transfer`,`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[d(`disabled`,[l(`transfer-list`,[l(`transfer-list-header`,[u(`title`,`
 color: var(--n-header-text-color-disabled);
 `),u(`extra`,`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),l(`transfer-list`,`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[d(`source`,`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[u(`border`,`border-right: 1px solid var(--n-divider-color);`)]),d(`target`,`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[u(`border`,`border-left: none;`)]),u(`border`,`
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),l(`transfer-list-header`,`
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[c(`> *:not(:first-child)`,`
 margin-left: 8px;
 `),u(`title`,`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),u(`button`,`
 position: relative;
 `),u(`extra`,`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),l(`transfer-list-body`,`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[l(`transfer-filter`,`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),l(`transfer-list-flex-container`,`
 flex: 1;
 position: relative;
 `,[l(`scrollbar`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),l(`empty`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),l(`transfer-list-content`,`
 padding: 0;
 margin: 0;
 position: relative;
 `,[l(`transfer-list-item`,`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[u(`background`,`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),u(`checkbox`,`
 position: relative;
 margin-right: 8px;
 `),u(`close`,`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),u(`label`,`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),d(`source`,`cursor: pointer;`),d(`disabled`,`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),f(`disabled`,[c(`&:hover`,[u(`background`,`background-color: var(--n-item-color-pending);`),u(`close`,`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),X=b({name:`TransferFilter`,props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){let{mergedThemeRef:e,mergedClsPrefixRef:t}=w(Y);return{mergedClsPrefix:t,mergedTheme:e}},render(){let{mergedTheme:e,mergedClsPrefix:t}=this;return C(`div`,{class:`${t}-transfer-filter`},C(a,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,clearable:!0,size:`small`},{"clear-icon-placeholder":()=>C(i,{clsPrefix:t},{default:()=>C(K,null)})}))}}),Z=b({name:`TransferHeader`,props:{size:{type:String,required:!0},selectAllText:String,clearText:String,source:Boolean,onCheckedAll:Function,onClearAll:Function,title:[String,Function]},setup(t){let{targetOptionsRef:n,canNotSelectAnythingRef:r,canBeClearedRef:i,allCheckedRef:a,mergedThemeRef:o,disabledRef:s,mergedClsPrefixRef:c,srcOptionsLengthRef:l}=w(Y),{localeRef:u}=L(`Transfer`);return()=>{let{source:d,onClearAll:f,onCheckedAll:p,selectAllText:m,clearText:h}=t,{value:g}=o,{value:_}=c,{value:v}=u,y=t.size===`large`?`small`:`tiny`,{title:b}=t;return C(`div`,{class:`${_}-transfer-list-header`},b&&C(`div`,{class:`${_}-transfer-list-header__title`},typeof b==`function`?b():b),d&&C(e,{class:`${_}-transfer-list-header__button`,theme:g.peers.Button,themeOverrides:g.peerOverrides.Button,size:y,tertiary:!0,onClick:a.value?f:p,disabled:r.value||s.value},{default:()=>a.value?h||v.unselectAll:m||v.selectAll}),!d&&i.value&&C(e,{class:`${_}-transfer-list-header__button`,theme:g.peers.Button,themeOverrides:g.peerOverrides.Button,size:y,tertiary:!0,onClick:f,disabled:s.value},{default:()=>v.clearAll}),C(`div`,{class:`${_}-transfer-list-header__extra`},d?v.total(l.value):v.selected(n.value.length)))}}}),Q=b({name:`NTransferListItem`,props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(e){let{targetValueSetRef:t,mergedClsPrefixRef:n,mergedThemeRef:r,handleItemCheck:i,renderSourceLabelRef:a,renderTargetLabelRef:o,showSelectedRef:s}=w(Y),c=z(()=>t.value.has(e.value));function l(){e.disabled||i(!c.value,e.value)}return{mergedClsPrefix:n,mergedTheme:r,checked:c,showSelected:s,renderSourceLabel:a,renderTargetLabel:o,handleClick:l}},render(){let{disabled:e,mergedTheme:r,mergedClsPrefix:i,label:a,checked:o,source:s,renderSourceLabel:c,renderTargetLabel:l}=this;return C(`div`,{class:[`${i}-transfer-list-item`,e&&`${i}-transfer-list-item--disabled`,s?`${i}-transfer-list-item--source`:`${i}-transfer-list-item--target`],onClick:s?this.handleClick:void 0},C(`div`,{class:`${i}-transfer-list-item__background`}),s&&this.showSelected&&C(`div`,{class:`${i}-transfer-list-item__checkbox`},C(t,{theme:r.peers.Checkbox,themeOverrides:r.peerOverrides.Checkbox,disabled:e,checked:o})),C(`div`,{class:`${i}-transfer-list-item__label`,title:S(a)},s?c?c({option:this.option}):a:l?l({option:this.option}):a),!s&&!e&&C(n,{focusable:!1,class:`${i}-transfer-list-item__close`,clsPrefix:i,onClick:this.handleClick}))}}),$=b({name:`TransferList`,props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){let{mergedThemeRef:e,mergedClsPrefixRef:t}=w(Y),n=N(null),r=N(null);function i(){var e;(e=n.value)==null||e.sync()}function a(){let{value:e}=r;if(!e)return null;let{listElRef:t}=e;return t}function o(){let{value:e}=r;if(!e)return null;let{itemsElRef:t}=e;return t}return{mergedTheme:e,mergedClsPrefix:t,scrollerInstRef:n,vlInstRef:r,syncVLScroller:i,scrollContainer:a,scrollContent:o}},render(){let{mergedTheme:e,options:t}=this;if(t.length===0)return C(r,{theme:e.peers.Empty,themeOverrides:e.peerOverrides.Empty});let{mergedClsPrefix:n,virtualScroll:i,source:a,disabled:c,syncVLScroller:l}=this;return C(o,{ref:`scrollerInstRef`,theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:i?this.scrollContainer:void 0,content:i?this.scrollContent:void 0},{default:()=>i?C(s,{ref:`vlInstRef`,style:{height:`100%`},class:`${n}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:l,onScroll:l,keyField:`value`},{default:({item:e})=>{let{source:t,disabled:n}=this;return C(Q,{source:t,key:e.value,value:e.value,disabled:e.disabled||n,label:e.label,option:e})}}):C(`div`,{class:`${n}-transfer-list-content`},t.map(e=>C(Q,{source:a,key:e.value,value:e.value,disabled:e.disabled||c,label:e.label,option:e})))})}});function ne(e){let t=N(e.defaultValue),n=R(P(e,`value`),t),r=h(()=>{let t=new Map;return(e.options||[]).forEach(e=>t.set(e.value,e)),t}),i=h(()=>new Set(n.value||[])),a=h(()=>{let e=r.value,t=[];return(n.value||[]).forEach(n=>{let r=e.get(n);r&&t.push(r)}),t}),o=N(``),s=N(``),c=h(()=>e.sourceFilterable||!!e.filterable),l=h(()=>{let{showSelected:t,options:n,filter:r}=e;return c.value?n.filter(e=>r(o.value,e,`source`)&&(t||!i.value.has(e.value))):t?n:n.filter(e=>!i.value.has(e.value))}),u=h(()=>{if(!e.targetFilterable)return a.value;let{filter:t}=e;return a.value.filter(e=>t(s.value,e,`target`))}),d=h(()=>{let{value:e}=n;return e===null?new Set:new Set(e)}),f=h(()=>{let e=new Set(d.value);return l.value.forEach(t=>{!t.disabled&&!e.has(t.value)&&e.add(t.value)}),e}),p=h(()=>{let e=new Set(d.value);return l.value.forEach(t=>{!t.disabled&&e.has(t.value)&&e.delete(t.value)}),e}),m=h(()=>{let e=new Set(d.value);return u.value.forEach(t=>{t.disabled||e.delete(t.value)}),e}),g=h(()=>l.value.every(e=>e.disabled)),_=h(()=>{if(!l.value.length)return!1;let e=d.value;return l.value.every(t=>t.disabled||e.has(t.value))}),v=h(()=>u.value.some(e=>!e.disabled));function y(e){o.value=e??``}function b(e){s.value=e??``}return{uncontrolledValueRef:t,mergedValueRef:n,targetValueSetRef:i,valueSetForCheckAllRef:f,valueSetForUncheckAllRef:p,valueSetForClearRef:m,filteredTgtOptionsRef:u,filteredSrcOptionsRef:l,targetOptionsRef:a,canNotSelectAnythingRef:g,canBeClearedRef:v,allCheckedRef:_,srcPatternRef:o,tgtPatternRef:s,mergedSrcFilterableRef:c,handleSrcFilterUpdateValue:y,handleTgtFilterUpdateValue:b}}const re=Object.assign(Object.assign({},B.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:[String,Function],selectAllText:String,clearText:String,targetTitle:[String,Function],filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(e,t)=>e?~`${t.label}`.toLowerCase().indexOf(`${e}`.toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]});var ie=b({name:`Transfer`,props:re,setup(e){let{mergedClsPrefixRef:t}=F(e),n=B(`Transfer`,`-transfer`,te,ee,e,t),r=I(e),{mergedSizeRef:i,mergedDisabledRef:a}=r,o=h(()=>{let{value:e}=i,{self:{[_(`itemHeight`,e)]:t}}=n.value;return x(t)}),{uncontrolledValueRef:s,mergedValueRef:c,targetValueSetRef:l,valueSetForCheckAllRef:u,valueSetForUncheckAllRef:d,valueSetForClearRef:f,filteredTgtOptionsRef:m,filteredSrcOptionsRef:g,targetOptionsRef:v,canNotSelectAnythingRef:y,canBeClearedRef:b,allCheckedRef:S,srcPatternRef:C,tgtPatternRef:w,mergedSrcFilterableRef:E,handleSrcFilterUpdateValue:D,handleTgtFilterUpdateValue:O}=ne(e);function k(t){let{onUpdateValue:n,"onUpdate:value":i,onChange:a}=e,{nTriggerFormInput:o,nTriggerFormChange:c}=r;n&&p(n,t),i&&p(i,t),a&&p(a,t),s.value=t,o(),c()}function A(){k([...u.value])}function j(){k([...d.value])}function N(){k([...f.value])}function L(e,t){k(e?(c.value||[]).concat(t):(c.value||[]).filter(e=>e!==t))}function R(e){k(e)}return M(Y,{targetValueSetRef:l,mergedClsPrefixRef:t,disabledRef:a,mergedThemeRef:n,targetOptionsRef:v,canNotSelectAnythingRef:y,canBeClearedRef:b,allCheckedRef:S,srcOptionsLengthRef:h(()=>e.options.length),handleItemCheck:L,renderSourceLabelRef:P(e,`renderSourceLabel`),renderTargetLabelRef:P(e,`renderTargetLabel`),showSelectedRef:P(e,`showSelected`)}),{mergedClsPrefix:t,mergedDisabled:a,itemSize:o,isMounted:T(),mergedTheme:n,filteredSrcOpts:g,filteredTgtOpts:m,srcPattern:C,tgtPattern:w,mergedSize:i,mergedSrcFilterable:E,handleSrcFilterUpdateValue:D,handleTgtFilterUpdateValue:O,handleSourceCheckAll:A,handleSourceUncheckAll:j,handleTargetClearAll:N,handleItemCheck:L,handleChecked:R,cssVars:h(()=>{let{value:e}=i,{common:{cubicBezierEaseInOut:t},self:{borderRadius:r,borderColor:a,listColor:o,titleTextColor:s,titleTextColorDisabled:c,extraTextColor:l,itemTextColor:u,itemColorPending:d,itemTextColorDisabled:f,titleFontWeight:p,closeColorHover:m,closeColorPressed:h,closeIconColor:g,closeIconColorHover:v,closeIconColorPressed:y,closeIconSize:b,closeSize:x,dividerColor:S,extraTextColorDisabled:C,[_(`extraFontSize`,e)]:w,[_(`fontSize`,e)]:T,[_(`titleFontSize`,e)]:E,[_(`itemHeight`,e)]:D,[_(`headerHeight`,e)]:O}}=n.value;return{"--n-bezier":t,"--n-border-color":a,"--n-border-radius":r,"--n-extra-font-size":w,"--n-font-size":T,"--n-header-font-size":E,"--n-header-extra-text-color":l,"--n-header-extra-text-color-disabled":C,"--n-header-font-weight":p,"--n-header-text-color":s,"--n-header-text-color-disabled":c,"--n-item-color-pending":d,"--n-item-height":D,"--n-item-text-color":u,"--n-item-text-color-disabled":f,"--n-list-color":o,"--n-header-height":O,"--n-close-size":x,"--n-close-icon-size":b,"--n-close-color-hover":m,"--n-close-color-pressed":h,"--n-close-icon-color":g,"--n-close-icon-color-hover":v,"--n-close-icon-color-pressed":y,"--n-divider-color":S}})}},render(){let{mergedClsPrefix:e,renderSourceList:t,renderTargetList:n,mergedTheme:r,mergedSrcFilterable:i,targetFilterable:a}=this;return C(`div`,{class:[`${e}-transfer`,this.mergedDisabled&&`${e}-transfer--disabled`],style:this.cssVars},C(`div`,{class:`${e}-transfer-list ${e}-transfer-list--source`},C(Z,{source:!0,selectAllText:this.selectAllText,clearText:this.clearText,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),C(`div`,{class:`${e}-transfer-list-body`},i?C(X,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,C(`div`,{class:`${e}-transfer-list-flex-container`},t?C(o,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar},{default:()=>t({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):C($,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),C(`div`,{class:`${e}-transfer-list__border`})),C(`div`,{class:`${e}-transfer-list ${e}-transfer-list--target`},C(Z,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),C(`div`,{class:`${e}-transfer-list-body`},a?C(X,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,C(`div`,{class:`${e}-transfer-list-flex-container`},n?C(o,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar},{default:()=>n({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):C($,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),C(`div`,{class:`${e}-transfer-list__border`})))}}),ae=b({name:`WidgetContextmenuBinds`,props:{graph:{required:!0,type:Object},plugin:{required:!0,type:Object}},setup(e,t){let n=h(()=>U(e.graph.canvas.children,e=>e.attrs.type!==G.Contextmenu&&!e.attrs[`is-draft`])),r=N([...e.graph.selected[0].attrs[`contextmenu-binds`]??[]]),i=({onCheck:e,pattern:t})=>y(V,{checkable:!0,blockLine:!0,checkOnClick:!0,keyField:`value`,data:n.value,pattern:t,filter:(e,t)=>t.value===e||t.label.includes(e),showIrrelevantNodes:!1,"render-label":({option:e})=>y(`div`,{title:`${G[e.type]}: ${e.label}`,class:`text-left w-full overflow-hidden whitespace-nowrap text-ellipsis`},[e.label]),"render-prefix":({option:e})=>y(`i`,{class:`iconfont ${W[e.type]}`},null),checkedKeys:r.value,onUpdateCheckedKeys:e},null),a=({option:e})=>y(`div`,{class:`flex items-center gap-2`},[y(`i`,{class:`iconfont ${W[e.type]}`},null),e.label]);return t.expose({update:()=>r.value}),()=>y(`section`,{class:`widget-contextmenu-binds`},[y(ie,{value:r.value,"onUpdate:value":e=>r.value=e,options:n.value,"render-source-list":i,"render-target-label":a,"source-filterable":!0},null)])}});export{ae as default};