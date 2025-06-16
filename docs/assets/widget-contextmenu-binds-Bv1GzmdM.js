import{Button_default as e,Checkbox_default as t,Close_default as n,ElementType as r,Empty_default as i,Icon_default as a,Input_default as o,Scrollbar_default$1 as s,Tree_default as c,VirtualList_default as l,_common_default as u,c as d,cB as f,cE as p,cM as m,cNotM as h,call as g,composite as _,computed as v,createElementTreeData as y,createInjectionKey as b,createKey as x,createTheme as S,createVNode as C,defineComponent as w,depx as T,getTitleAttribute as E,h as D,inject as O,isMounted as k,light_default$1 as A,light_default$2 as j,light_default$3 as M,light_default$4 as N,light_default$5 as P,light_default$6 as F,pcStencilIcons as I,provide as L,ref as R,toRef as z,useConfig as B,useFormItem as V,useLocale as H,useMergedState as U,use_memo_default as W,use_theme_default as G}from"./index-DG3a2kbB.js";var K=w({name:`Search`,render(){return D(`svg`,{version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,style:`enable-background: new 0 0 512 512`},D(`path`,{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}});function q(e){let{fontWeight:t,fontSizeLarge:n,fontSizeMedium:r,fontSizeSmall:i,heightLarge:a,heightMedium:o,borderRadius:s,cardColor:c,tableHeaderColor:l,textColor1:d,textColorDisabled:f,textColor2:p,textColor3:m,borderColor:h,hoverColor:g,closeColorHover:v,closeColorPressed:y,closeIconColor:b,closeIconColorHover:x,closeIconColorPressed:S}=e;return Object.assign(Object.assign({},u),{itemHeightSmall:o,itemHeightMedium:o,itemHeightLarge:a,fontSizeSmall:i,fontSizeMedium:r,fontSizeLarge:n,borderRadius:s,dividerColor:h,borderColor:h,listColor:c,headerColor:_(c,l),titleTextColor:d,titleTextColorDisabled:f,extraTextColor:m,extraTextColorDisabled:f,itemTextColor:p,itemTextColorDisabled:f,itemColorPending:g,titleFontWeight:t,closeColorHover:v,closeColorPressed:y,closeIconColor:b,closeIconColorHover:x,closeIconColorPressed:S})}const J=S({name:`Transfer`,common:F,peers:{Checkbox:A,Scrollbar:P,Input:M,Empty:N,Button:j},self:q});var ee=J;const Y=b(`n-transfer`);var te=f(`transfer`,`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[m(`disabled`,[f(`transfer-list`,[f(`transfer-list-header`,[p(`title`,`
 color: var(--n-header-text-color-disabled);
 `),p(`extra`,`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),f(`transfer-list`,`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[m(`source`,`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[p(`border`,`border-right: 1px solid var(--n-divider-color);`)]),m(`target`,`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[p(`border`,`border-left: none;`)]),p(`border`,`
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
 `),f(`transfer-list-header`,`
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
 `,[d(`> *:not(:first-child)`,`
 margin-left: 8px;
 `),p(`title`,`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),p(`button`,`
 position: relative;
 `),p(`extra`,`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),f(`transfer-list-body`,`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[f(`transfer-filter`,`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),f(`transfer-list-flex-container`,`
 flex: 1;
 position: relative;
 `,[f(`scrollbar`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),f(`empty`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),f(`transfer-list-content`,`
 padding: 0;
 margin: 0;
 position: relative;
 `,[f(`transfer-list-item`,`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[p(`background`,`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),p(`checkbox`,`
 position: relative;
 margin-right: 8px;
 `),p(`close`,`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),p(`label`,`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),m(`source`,`cursor: pointer;`),m(`disabled`,`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),h(`disabled`,[d(`&:hover`,[p(`background`,`background-color: var(--n-item-color-pending);`),p(`close`,`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),X=w({name:`TransferFilter`,props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){let{mergedThemeRef:e,mergedClsPrefixRef:t}=O(Y);return{mergedClsPrefix:t,mergedTheme:e}},render(){let{mergedTheme:e,mergedClsPrefix:t}=this;return D(`div`,{class:`${t}-transfer-filter`},D(o,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,clearable:!0,size:`small`},{"clear-icon-placeholder":()=>D(a,{clsPrefix:t},{default:()=>D(K,null)})}))}}),Z=w({name:`TransferHeader`,props:{size:{type:String,required:!0},selectAllText:String,clearText:String,source:Boolean,onCheckedAll:Function,onClearAll:Function,title:[String,Function]},setup(t){let{targetOptionsRef:n,canNotSelectAnythingRef:r,canBeClearedRef:i,allCheckedRef:a,mergedThemeRef:o,disabledRef:s,mergedClsPrefixRef:c,srcOptionsLengthRef:l}=O(Y),{localeRef:u}=H(`Transfer`);return()=>{let{source:d,onClearAll:f,onCheckedAll:p,selectAllText:m,clearText:h}=t,{value:g}=o,{value:_}=c,{value:v}=u,y=t.size===`large`?`small`:`tiny`,{title:b}=t;return D(`div`,{class:`${_}-transfer-list-header`},b&&D(`div`,{class:`${_}-transfer-list-header__title`},typeof b==`function`?b():b),d&&D(e,{class:`${_}-transfer-list-header__button`,theme:g.peers.Button,themeOverrides:g.peerOverrides.Button,size:y,tertiary:!0,onClick:a.value?f:p,disabled:r.value||s.value},{default:()=>a.value?h||v.unselectAll:m||v.selectAll}),!d&&i.value&&D(e,{class:`${_}-transfer-list-header__button`,theme:g.peers.Button,themeOverrides:g.peerOverrides.Button,size:y,tertiary:!0,onClick:f,disabled:s.value},{default:()=>v.clearAll}),D(`div`,{class:`${_}-transfer-list-header__extra`},d?v.total(l.value):v.selected(n.value.length)))}}}),Q=w({name:`NTransferListItem`,props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(e){let{targetValueSetRef:t,mergedClsPrefixRef:n,mergedThemeRef:r,handleItemCheck:i,renderSourceLabelRef:a,renderTargetLabelRef:o,showSelectedRef:s}=O(Y),c=W(()=>t.value.has(e.value));function l(){e.disabled||i(!c.value,e.value)}return{mergedClsPrefix:n,mergedTheme:r,checked:c,showSelected:s,renderSourceLabel:a,renderTargetLabel:o,handleClick:l}},render(){let{disabled:e,mergedTheme:r,mergedClsPrefix:i,label:a,checked:o,source:s,renderSourceLabel:c,renderTargetLabel:l}=this;return D(`div`,{class:[`${i}-transfer-list-item`,e&&`${i}-transfer-list-item--disabled`,s?`${i}-transfer-list-item--source`:`${i}-transfer-list-item--target`],onClick:s?this.handleClick:void 0},D(`div`,{class:`${i}-transfer-list-item__background`}),s&&this.showSelected&&D(`div`,{class:`${i}-transfer-list-item__checkbox`},D(t,{theme:r.peers.Checkbox,themeOverrides:r.peerOverrides.Checkbox,disabled:e,checked:o})),D(`div`,{class:`${i}-transfer-list-item__label`,title:E(a)},s?c?c({option:this.option}):a:l?l({option:this.option}):a),!s&&!e&&D(n,{focusable:!1,class:`${i}-transfer-list-item__close`,clsPrefix:i,onClick:this.handleClick}))}}),$=w({name:`TransferList`,props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){let{mergedThemeRef:e,mergedClsPrefixRef:t}=O(Y),n=R(null),r=R(null);function i(){var e;(e=n.value)==null||e.sync()}function a(){let{value:e}=r;if(!e)return null;let{listElRef:t}=e;return t}function o(){let{value:e}=r;if(!e)return null;let{itemsElRef:t}=e;return t}return{mergedTheme:e,mergedClsPrefix:t,scrollerInstRef:n,vlInstRef:r,syncVLScroller:i,scrollContainer:a,scrollContent:o}},render(){let{mergedTheme:e,options:t}=this;if(t.length===0)return D(i,{theme:e.peers.Empty,themeOverrides:e.peerOverrides.Empty});let{mergedClsPrefix:n,virtualScroll:r,source:a,disabled:o,syncVLScroller:c}=this;return D(s,{ref:`scrollerInstRef`,theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:r?this.scrollContainer:void 0,content:r?this.scrollContent:void 0},{default:()=>r?D(l,{ref:`vlInstRef`,style:{height:`100%`},class:`${n}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:c,onScroll:c,keyField:`value`},{default:({item:e})=>{let{source:t,disabled:n}=this;return D(Q,{source:t,key:e.value,value:e.value,disabled:e.disabled||n,label:e.label,option:e})}}):D(`div`,{class:`${n}-transfer-list-content`},t.map(e=>D(Q,{source:a,key:e.value,value:e.value,disabled:e.disabled||o,label:e.label,option:e})))})}});function ne(e){let t=R(e.defaultValue),n=U(z(e,`value`),t),r=v(()=>{let t=new Map;return(e.options||[]).forEach(e=>t.set(e.value,e)),t}),i=v(()=>new Set(n.value||[])),a=v(()=>{let e=r.value,t=[];return(n.value||[]).forEach(n=>{let r=e.get(n);r&&t.push(r)}),t}),o=R(``),s=R(``),c=v(()=>e.sourceFilterable||!!e.filterable),l=v(()=>{let{showSelected:t,options:n,filter:r}=e;return c.value?n.filter(e=>r(o.value,e,`source`)&&(t||!i.value.has(e.value))):t?n:n.filter(e=>!i.value.has(e.value))}),u=v(()=>{if(!e.targetFilterable)return a.value;let{filter:t}=e;return a.value.filter(e=>t(s.value,e,`target`))}),d=v(()=>{let{value:e}=n;return e===null?new Set:new Set(e)}),f=v(()=>{let e=new Set(d.value);return l.value.forEach(t=>{!t.disabled&&!e.has(t.value)&&e.add(t.value)}),e}),p=v(()=>{let e=new Set(d.value);return l.value.forEach(t=>{!t.disabled&&e.has(t.value)&&e.delete(t.value)}),e}),m=v(()=>{let e=new Set(d.value);return u.value.forEach(t=>{t.disabled||e.delete(t.value)}),e}),h=v(()=>l.value.every(e=>e.disabled)),g=v(()=>{if(!l.value.length)return!1;let e=d.value;return l.value.every(t=>t.disabled||e.has(t.value))}),_=v(()=>u.value.some(e=>!e.disabled));function y(e){o.value=e??``}function b(e){s.value=e??``}return{uncontrolledValueRef:t,mergedValueRef:n,targetValueSetRef:i,valueSetForCheckAllRef:f,valueSetForUncheckAllRef:p,valueSetForClearRef:m,filteredTgtOptionsRef:u,filteredSrcOptionsRef:l,targetOptionsRef:a,canNotSelectAnythingRef:h,canBeClearedRef:_,allCheckedRef:g,srcPatternRef:o,tgtPatternRef:s,mergedSrcFilterableRef:c,handleSrcFilterUpdateValue:y,handleTgtFilterUpdateValue:b}}const re=Object.assign(Object.assign({},G.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:[String,Function],selectAllText:String,clearText:String,targetTitle:[String,Function],filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(e,t)=>e?~`${t.label}`.toLowerCase().indexOf(`${e}`.toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]});var ie=w({name:`Transfer`,props:re,setup(e){let{mergedClsPrefixRef:t}=B(e),n=G(`Transfer`,`-transfer`,te,ee,e,t),r=V(e),{mergedSizeRef:i,mergedDisabledRef:a}=r,o=v(()=>{let{value:e}=i,{self:{[x(`itemHeight`,e)]:t}}=n.value;return T(t)}),{uncontrolledValueRef:s,mergedValueRef:c,targetValueSetRef:l,valueSetForCheckAllRef:u,valueSetForUncheckAllRef:d,valueSetForClearRef:f,filteredTgtOptionsRef:p,filteredSrcOptionsRef:m,targetOptionsRef:h,canNotSelectAnythingRef:_,canBeClearedRef:y,allCheckedRef:b,srcPatternRef:S,tgtPatternRef:C,mergedSrcFilterableRef:w,handleSrcFilterUpdateValue:E,handleTgtFilterUpdateValue:D}=ne(e);function O(t){let{onUpdateValue:n,"onUpdate:value":i,onChange:a}=e,{nTriggerFormInput:o,nTriggerFormChange:c}=r;n&&g(n,t),i&&g(i,t),a&&g(a,t),s.value=t,o(),c()}function A(){O([...u.value])}function j(){O([...d.value])}function M(){O([...f.value])}function N(e,t){O(e?(c.value||[]).concat(t):(c.value||[]).filter(e=>e!==t))}function P(e){O(e)}return L(Y,{targetValueSetRef:l,mergedClsPrefixRef:t,disabledRef:a,mergedThemeRef:n,targetOptionsRef:h,canNotSelectAnythingRef:_,canBeClearedRef:y,allCheckedRef:b,srcOptionsLengthRef:v(()=>e.options.length),handleItemCheck:N,renderSourceLabelRef:z(e,`renderSourceLabel`),renderTargetLabelRef:z(e,`renderTargetLabel`),showSelectedRef:z(e,`showSelected`)}),{mergedClsPrefix:t,mergedDisabled:a,itemSize:o,isMounted:k(),mergedTheme:n,filteredSrcOpts:m,filteredTgtOpts:p,srcPattern:S,tgtPattern:C,mergedSize:i,mergedSrcFilterable:w,handleSrcFilterUpdateValue:E,handleTgtFilterUpdateValue:D,handleSourceCheckAll:A,handleSourceUncheckAll:j,handleTargetClearAll:M,handleItemCheck:N,handleChecked:P,cssVars:v(()=>{let{value:e}=i,{common:{cubicBezierEaseInOut:t},self:{borderRadius:r,borderColor:a,listColor:o,titleTextColor:s,titleTextColorDisabled:c,extraTextColor:l,itemTextColor:u,itemColorPending:d,itemTextColorDisabled:f,titleFontWeight:p,closeColorHover:m,closeColorPressed:h,closeIconColor:g,closeIconColorHover:_,closeIconColorPressed:v,closeIconSize:y,closeSize:b,dividerColor:S,extraTextColorDisabled:C,[x(`extraFontSize`,e)]:w,[x(`fontSize`,e)]:T,[x(`titleFontSize`,e)]:E,[x(`itemHeight`,e)]:D,[x(`headerHeight`,e)]:O}}=n.value;return{"--n-bezier":t,"--n-border-color":a,"--n-border-radius":r,"--n-extra-font-size":w,"--n-font-size":T,"--n-header-font-size":E,"--n-header-extra-text-color":l,"--n-header-extra-text-color-disabled":C,"--n-header-font-weight":p,"--n-header-text-color":s,"--n-header-text-color-disabled":c,"--n-item-color-pending":d,"--n-item-height":D,"--n-item-text-color":u,"--n-item-text-color-disabled":f,"--n-list-color":o,"--n-header-height":O,"--n-close-size":b,"--n-close-icon-size":y,"--n-close-color-hover":m,"--n-close-color-pressed":h,"--n-close-icon-color":g,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":v,"--n-divider-color":S}})}},render(){let{mergedClsPrefix:e,renderSourceList:t,renderTargetList:n,mergedTheme:r,mergedSrcFilterable:i,targetFilterable:a}=this;return D(`div`,{class:[`${e}-transfer`,this.mergedDisabled&&`${e}-transfer--disabled`],style:this.cssVars},D(`div`,{class:`${e}-transfer-list ${e}-transfer-list--source`},D(Z,{source:!0,selectAllText:this.selectAllText,clearText:this.clearText,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),D(`div`,{class:`${e}-transfer-list-body`},i?D(X,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,D(`div`,{class:`${e}-transfer-list-flex-container`},t?D(s,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar},{default:()=>t({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):D($,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),D(`div`,{class:`${e}-transfer-list__border`})),D(`div`,{class:`${e}-transfer-list ${e}-transfer-list--target`},D(Z,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),D(`div`,{class:`${e}-transfer-list-body`},a?D(X,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,D(`div`,{class:`${e}-transfer-list-flex-container`},n?D(s,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar},{default:()=>n({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):D($,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),D(`div`,{class:`${e}-transfer-list__border`})))}}),ae=w({name:`WidgetContextmenuBinds`,props:{graph:{required:!0,type:Object},plugin:{required:!0,type:Object}},setup(e,t){let n=v(()=>y(e.graph.canvas.children,e=>e.attrs.type!==r.Contextmenu&&!e.attrs[`is-draft`])),i=R([...e.graph.selected[0].attrs[`contextmenu-binds`]??[]]),a=({onCheck:e,pattern:t})=>C(c,{checkable:!0,blockLine:!0,checkOnClick:!0,keyField:`value`,data:n.value,pattern:t,filter:(e,t)=>t.value===e||t.label.includes(e),showIrrelevantNodes:!1,"render-label":({option:e})=>C(`div`,{title:`${r[e.type]}: ${e.label}`,class:`text-left w-full overflow-hidden whitespace-nowrap text-ellipsis`},[e.label]),"render-prefix":({option:e})=>C(`i`,{class:`iconfont ${I[e.type]}`},null),checkedKeys:i.value,onUpdateCheckedKeys:e},null),o=({option:e})=>C(`div`,{class:`flex items-center gap-2`},[C(`i`,{class:`iconfont ${I[e.type]}`},null),e.label]);return t.expose({update:()=>i.value}),()=>C(`section`,{class:`widget-contextmenu-binds`},[C(ie,{value:i.value,"onUpdate:value":e=>i.value=e,options:n.value,"render-source-list":a,"render-target-label":o,"source-filterable":!0},null)])}});export{ae as default};