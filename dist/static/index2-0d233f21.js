import{f as j,cb as b,j as a,at as g,cg as P,af as L,ch as w,r as v,o as B,ci as k,av as T,cj as A,a1 as C,cd as S,au as _,ce as D,ar as H,ai as W,cf as E}from"./sanity-5e451c36.js";const G=j.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function F(l){const{childItemId:n,items:t,isActive:o,layout:i,showIcons:d,title:c}=l,{collapsed:u}=L(),r=w(t==null?void 0:t.filter(e=>e.type!=="divider")),x=v.useCallback(e=>{var s;return((s=t==null?void 0:t.find((h,m)=>m===e))==null?void 0:s.type)==="divider"},[t]),p=v.useCallback(e=>{var h;const s=(h=e.displayOptions)==null?void 0:h.showIcon;return typeof s<"u"?s!==!1:d!==!1},[d]),I=v.useCallback((e,s)=>{const{virtualIndex:h}=s;if(e.type==="divider")return a.jsx(B,{marginBottom:1,children:a.jsx(G,{})},`divider-${h}`);const m=!o&&n===e.id,y=o&&n===e.id,f=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return a.jsx(k,{icon:p(e)?e.icon:!1,id:e.id,layout:i,marginBottom:1,pressed:m,schemaType:e.schemaType,selected:y,title:r(e).title,value:f},e.id)},[n,r,o,i,p]);return a.jsx(T,{overflow:u?"hidden":"auto",children:t&&t.length>0&&a.jsx(A,{activeItemDataAttr:"data-hovered",ariaLabel:c,canReceiveFocus:!0,getItemDisabled:x,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1})})}const R=({index:l,menuItems:n,menuItemGroups:t,title:o})=>{const{features:i}=C(),{collapsed:d,isLast:c}=S(),u=c&&!d?-1:0;return a.jsx(_,{actions:a.jsx(D,{menuItems:n,menuItemGroups:t}),backButton:i.backButton&&l>0&&a.jsx(H,{as:W,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:u,title:o})};function K(l){const{childItemId:n,index:t,isActive:o,isSelected:i,pane:d,paneKey:c}=l,{defaultLayout:u,displayOptions:r,items:x,menuItems:p,menuItemGroups:I}=d,e=(r==null?void 0:r.showIcons)!==!1,{title:s}=b(d);return a.jsxs(g,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:c,maxWidth:640,minWidth:320,selected:i,children:[P,a.jsx(R,{index:t,menuItems:p,menuItemGroups:I,title:s}),a.jsx(F,{childItemId:n,isActive:o,items:x,layout:u,showIcons:e,title:s},c)]})}export{K as default};
