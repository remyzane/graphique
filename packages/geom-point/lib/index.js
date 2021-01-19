"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),a=require("@visx/shape"),l=require("@visx/scale"),n=require("d3-array");require("d3-time-format");var o=require("d3-scale-chromatic"),u=require("recoil"),r=require("@graphique/gg"),i=require("@visx/voronoi");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=s(t),d=e.__spreadArrays([o.schemeTableau10[0],o.schemeTableau10[1],o.schemeTableau10[4],o.schemeTableau10[2],o.schemeTableau10[3]],o.schemeTableau10.slice(5)),f=function(e){var a=e.data,l=e.x,n=e.y,o=e.onMouseOver,s=e.onMouseLeave,d=e.onClick,f=u.useRecoilValue(r.aesState),m=u.useRecoilValue(r.layoutState),y=m.width,p=m.height,g=m.margin,v=t.useMemo((function(){return i.voronoi({x:function(e){return l(f.x(e))},y:function(e){return n(f.y(e))},width:y,height:p}).extent([[g.left,g.top],[y-g.right,p-g.bottom-g.top]])}),[f,y,p,l,n,g])(a).polygons();return c.default.createElement("g",{onMouseLeave:s?function(e){return s()}:void 0},v.map((function(e,t){return c.default.createElement(i.VoronoiPolygon,{key:"voronoi-polygon-"+t,polygon:e,fill:"transparent",style:{cursor:d?"pointer":"default"},onMouseOver:o?function(a){o({d:e.data,i:t})}:void 0,onClick:d?function(a){return d({d:e.data,i:t})}:void 0})})))},m=function(e){var t=e.data,a=u.useRecoilValue(r.labelsState),l=a.x,n=a.y,o=u.useRecoilValue(r.aesState),i=o.x,s=o.y;return t&&c.default.createElement(r.TooltipContainer,null,t.map((function(e){return c.default.createElement("div",{key:"group-tooltip-"+(e.label||e.group)},c.default.createElement("div",{style:{marginTop:4,marginBottom:4}},(e.label||"__group"!==e.group)&&c.default.createElement(c.default.Fragment,null,e.mark,c.default.createElement("div",{style:{display:"flex",alignItems:"flex-end",fontWeight:500}},c.default.createElement("div",{style:{marginBottom:4}},c.default.createElement("span",null,e.label||e.group," ")))),c.default.createElement("div",{style:{display:"flex",marginBottom:2}},c.default.createElement("div",null,l||i.toString(),":"),c.default.createElement("div",{style:{marginLeft:2,fontWeight:500,fontSize:13}},e.formattedX)),c.default.createElement("div",{style:{display:"flex"}},c.default.createElement("div",null,n||s.toString(),":"),c.default.createElement("div",{style:{marginLeft:2,fontWeight:500,fontSize:13}},e.formattedY))))})))},y=function(e){var t=e.scales,a=e.group,l=e.datum,n=u.useRecoilValue(r.tooltipState),o=n.position,i=n.content,s=n.yFormat,d=n.xFormat,f=n.xAxis,y=u.useRecoilValue(r.aesState),p=u.useRecoilValue(r.layoutState),g=p.id,v=p.height,x=p.margin,E=t.x,h=t.y,k={given:y.label&&y.label(l),keyed:y.key&&y.key(l),default:null==l?void 0:l._id},S=[{x:y.x&&E(y.x(l)),y:y.y&&h(y.y(l)),formattedX:y.x&&(d?d(y.x(l)):y.x(l)),formattedY:y.y&&(s?s(y.y(l)):y.y(l)),group:a(l),label:k.given===k.default?k.keyed:k.given,datum:l}];return c.default.createElement(c.default.Fragment,null,f&&c.default.createElement(r.XTooltip,{id:g,left:S[0].x,top:-x.bottom-5,value:"boolean"==typeof f?c.default.createElement(r.TooltipContainer,null,d?d(y.x(l)):y.x(l)):f({x:y.x(l)})}),c.default.createElement(r.YTooltip,{id:g,left:S[0].x,top:"data"===o?-(v-S[0].y):-v,value:i?i({data:S}):c.default.createElement(m,{data:S})}))},p=function(o){var i=o.data,s=o.stroke,m=o.strokeWidth,p=o.fill,g=o.opacity,v=void 0===g?1:g,x=o.strokeOpacity,E=o.size,h=o.scales,k=o.hideTooltip,S=void 0!==k&&k,_=o.focused,b=o.focusedStyle,M=o.unfocusedStyle,O=o.onFocus,q=o.onFocusSelection,T=o.onExit,z=u.useRecoilValue(r.dataState),R=i||z,V=u.useRecoilValue(r.aesState),F=u.useRecoilValue(r.themeState).defaultFill,C=u.useRecoilState(r.scalesState),L=C[0],W=C[1],P=t.useMemo((function(){return L}),[L]),w=P.fill,A=P.stroke,B=P.size,X=P.groups,Y=h.x,j=h.y,G=t.useMemo((function(){return V.group||V.fill||V.stroke||V.size||function(e){return"__group"}}),[V]),I=G?Array.from(new Set(z.map(G))).map((function(e){return null===e?"[null]":e})).sort():["__group"],N=t.useMemo((function(){return l.scaleSqrt({domain:V.size&&n.extent(R,V.size),range:(null==B?void 0:B.range)||[3,30]})}),[R,V.size,B]),D=t.useMemo((function(){return function(e){return N&&V.size?N(V.size(e)):E}}),[N,V,E]),H=t.useMemo((function(){return s?[s]:(null==A?void 0:A.scale)||l.scaleOrdinal({domain:I,range:(null==A?void 0:A.scheme)||(s?[s]:d)})}),[I,A,s]),J=t.useMemo((function(){return function(e){return s||(H&&V.stroke?H(V.stroke(e)):void 0)}}),[V,H,s]),K=t.useMemo((function(){return p?[p]:(null==w?void 0:w.scale)||l.scaleOrdinal({domain:I,range:(null==w?void 0:w.scheme)||(p?[p]:d)})}),[I,w,p]),Q=t.useMemo((function(){return function(e){return p||(K&&V.fill?K(V.fill(e)):F)}}),[V,K,p,F]),U=t.useState(_||[]),Z=U[0],$=U[1];t.useEffect((function(){$(_||[])}),[_]),t.useEffect((function(){X||W((function(t){return e.__assign(e.__assign({},t),{groups:I})}))}),[W,I,X]);var ee=t.useState({x:0,y:0})[0],te=t.useMemo((function(){return Z.length||ee.x>3}),[Z,ee]),ae=e.__assign({fillOpacity:1,strokeOpacity:1},b),le=e.__assign({fillOpacity:.15,strokeOpacity:.15},M);return R?c.default.createElement(c.default.Fragment,null,c.default.createElement("g",null,R.map((function(t,l){var n=V.key&&Z.map(V.key).includes(V.key(t));return V.x(t)&&V.y(t)?c.default.createElement(a.Circle,{style:te?n?e.__assign({},ae):e.__assign({},le):{pointerEvents:"none"},key:"point-"+l,fill:Q(t),fillOpacity:v,strokeOpacity:x,stroke:J(t),strokeWidth:m,r:E||(V.size?D(t):2.5),cx:Y(V.x(t)),cy:j(V.y(t))}):null}))),!S&&c.default.createElement(c.default.Fragment,null,c.default.createElement(f,{data:R,x:Y,y:j,onMouseOver:function(e){var t=e.d;e.i;$([t]),O&&O({data:t})},onClick:q?function(e){var t=e.d;e.i;q({data:t})}:void 0,onMouseLeave:function(){$([]),T&&T()}}),Z&&Z[0]&&c.default.createElement(y,{group:G,datum:Z[0],scales:h}))):null};p.displayName="GeomPoint",exports.GeomPoint=p;
//# sourceMappingURL=index.js.map
