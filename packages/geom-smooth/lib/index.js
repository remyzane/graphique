"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),r=require("@visx/shape"),n=require("@visx/scale"),a=require("@visx/curve"),u=require("recoil"),l=require("@graphique/gg");require("d3-time-format");var o=require("d3-scale-chromatic"),i=require("loess"),s=require("d3-regression"),c=require("d3-array"),d=require("jstat");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=f(t),p=f(i),y=e.__spreadArrays([o.schemeTableau10[0],o.schemeTableau10[1],o.schemeTableau10[4],o.schemeTableau10[2],o.schemeTableau10[3]],o.schemeTableau10.slice(5)),h=function(e){var t=e.left,n=e.y,a=e.lineVals,o=e.markerFill,i=e.markerRadius,s=e.strokeOpacity,c=u.useRecoilValue(l.themeState).markerStroke,d=u.useRecoilValue(l.layoutState),f=d.height,p=d.margin;return m.default.createElement(m.default.Fragment,null,m.default.createElement("g",null,m.default.createElement(r.Line,{from:{x:t,y:0},to:{x:t,y:f-p.top-p.bottom},stroke:"#888",strokeWidth:1.5,style:{pointerEvents:"none"},strokeDasharray:"2,2"})),a.map((function(e){var r=e.group,a=e.isOutsideBounds,u=e.y;return r&&!a?m.default.createElement("g",{key:"linemarker-"+r},m.default.createElement("circle",{cx:t,cy:n({y:u}),r:i,fill:o(r),fillOpacity:s||.9,stroke:c,strokeOpacity:.92,strokeWidth:i/3.2,style:{pointerEvents:"none"}})):null})))},g=function(e){var t=e.data,r=e.hasXAxisTooltip,n=void 0!==r&&r,a=t[0].formattedX;return t&&m.default.createElement(l.TooltipContainer,null,!n&&m.default.createElement("div",{style:{marginTop:2,marginBottom:1===t.length?2:6,color:"#555"}},a),t.map((function(e,r){return m.default.createElement("div",{key:"group-tooltip-"+(e.label||e.group)},m.default.createElement("div",{style:{marginTop:3,marginBottom:t.length<r+1?3:2,display:"flex",alignItems:"center"}},(e.label||"__group"!==e.group)&&m.default.createElement(m.default.Fragment,null,e.mark,m.default.createElement("div",{style:{display:"flex",alignItems:"flex-end",marginLeft:4}},m.default.createElement("div",{style:{marginRight:5}},m.default.createElement("span",null,e.label||e.group," ")))),m.default.createElement("div",{style:{fontWeight:500,fontSize:13}},e.formattedY)))})))},v=function(e){var n=e.data,a=e.method,o=e.x,i=e.y,s=e.b,d=e.markerRadius,f=e.strokeOpacity,p=e.fillOpacity,y=e.thisStrokeScale,v=e.thisSizeScale,x=e.thisDashArrayScale,k=e.stroke,E=e.size,S=e.dashArray,_=e.models,b=u.useRecoilValue(l.tooltipState),O=b.x0,M=b.content,q=b.xAxis,R=b.position,T=b.yFormat,w=b.xFormat,N=u.useRecoilValue(l.layoutState),A=N.height,F=N.id,V=N.margin,z=t.useMemo((function(){return c.extent(n,s)}),[n,s]),X=t.useMemo((function(){return+O<z[0]||+O>z[1]}),[O,z]),B=t.useMemo((function(){return O&&_.map((function(e){var t=c.extent(e.model.x[0]),n=+O<t[0]||+O>t[1],u="loess"===a?e.model.predict({x:[+O]}).fitted[0]:e.model.predict(+O),l=m.default.createElement("svg",{height:20,width:20},m.default.createElement("rect",{width:20,height:20,fill:y(e.group),fillOpacity:p}),m.default.createElement(r.Line,{from:{x:0,y:10},to:{x:24,y:10},stroke:y(e.group),strokeWidth:v(e.group),strokeDasharray:x(e.group)}));return{group:e.group,mark:l,x:o({x:O}),y:u,formattedY:T?T(u):u,formattedX:w?w(O):O.toString(),isOutsideBounds:n}})).filter((function(e){return!e.isOutsideBounds}))}),[_,o,O,S,p,E,y,v,y,T,a]),C=t.useMemo((function(){return B&&c.mean(B.filter((function(e){return!e.isOutsideBounds})).map((function(e){return i({y:e.y})})))}),[B,i]);return O&&!X?m.default.createElement(m.default.Fragment,null,m.default.createElement(h,{left:o({x:O}),y:i,markerRadius:d,markerFill:function(e){return"__group"===e?k:y(e)},strokeOpacity:f,lineVals:B}),q&&m.default.createElement(l.XTooltip,{id:F,left:o({x:O}),top:-V.bottom-5,value:"boolean"==typeof q?m.default.createElement(l.TooltipContainer,null,w?w(O):O.toString()):q({x:O})}),B&&B.length&&m.default.createElement(l.YTooltip,{id:F,left:o({x:+O}),top:"data"===R&&C?-(A-C):-A,value:M?M({data:B}):m.default.createElement(g,{data:B,hasXAxisTooltip:!!q})})):null},x=function(o){var i=o.stroke,f=o.strokeOpacity,h=void 0===f?1:f,g=o.strokeDashArray,x=o.size,k=void 0===x?2.5:x,E=o.scales,S=o.se,_=void 0!==S&&S,b=o.fill,O=o.fillOpacity,M=void 0===O?.2:O,q=o.method,R=void 0===q?"loess":q,T=o.span,w=void 0===T?.75:T,N=o.band,A=void 0===N?.8:N,F=o.bins,V=void 0===F?80:F,z=o.level,X=void 0===z?.95:z,B=o.hideTooltip,C=void 0!==B&&B,D=o.markerRadius,L=void 0===D?5:D,W=o.onMouseOver,j=o.onMouseOut,Y=E.x,G=E.y,I=u.useRecoilValue(l.aesState),P=u.useRecoilValue(l.dataState),U=u.useRecoilValue(l.themeState).defaultStroke,H=u.useRecoilValue(l.scalesState),J=H.stroke,K=H.size,Q=H.dashArray,Z=u.useSetRecoilState(l.scalesState),$=t.useRef(X);t.useCallback((function(){(X<=0||X>=1)&&($.current=.95,console.warn("level should be between 0 and 1. Using default level of 0.95"))}),[X])();var ee=t.useCallback((function(t,r){Z((function(n){return e.__assign(e.__assign({},n),{y:e.__assign(e.__assign({},n.y),{domain:"min"===t?[r,G.domain()[1]]:[G.domain()[0],r]})})}))}),[Z,G]),te=function(e){return Y&&Y(e.x)},re=function(e){return G&&G(e.y)},ne=function(e){return G&&G(e.y0)},ae=function(e){return G&&G(e.y1)},ue=t.useMemo((function(){return I.group||I.stroke||I.fill||I.size||function(e){return"__group"}}),[I]),le=t.useMemo((function(){var e=ue?Array.from(new Set(P.map(ue))).map((function(e){return null===e?"[null]":e})):["__group"],t=e.filter((function(e){return P.filter((function(t){return ue(t)===e})).filter((function(e,t,r){return+I.x(e)!=+I.x(r[0])||I.y(e)!==I.y(r[0])})).length<=2}));return t.length&&console.warn("Excluding "+R+" smoother for groups with not enough (unique) points: "+t.map((function(e){return"'"+e+"'"})).join(", ")),e=e.filter((function(e){return!t.includes(e)}))}),[P,ue,R,I]),oe=t.useMemo((function(){return(null==J?void 0:J.scale)||n.scaleOrdinal({domain:ue?Array.from(new Set(P.map(ue))).sort():["__group"],range:(null==J?void 0:J.scheme)||y})}),[null==J?void 0:J.scale,null==J?void 0:J.scheme]),ie=n.scaleOrdinal({domain:le,range:K?null==K?void 0:K.values:[k]}),se=n.scaleOrdinal({domain:le,range:null==Q?void 0:Q.values}),ce=t.useMemo((function(){return[]}),[]),de=t.useMemo((function(){return s.regressionLinear().x((function(e){return+I.x(e)})).y((function(e){return parseFloat(I.y(e))}))}),[I]),fe=t.useCallback((function(e){var t=de(e),r=e.map((function(e){return ue(e)})).filter((function(e){return e}))[0];ce.push({group:r,model:{predict:t.predict,x:[[t[0][0],t[1][0]]]}});var n=e.filter((function(e){return![void 0,null,NaN].includes(I.x(e))&&![void 0,null,NaN].includes(I.y(e))})).map((function(e){return{x:+I.x(e),y:I.y(e)}})),a=n.map((function(e){return e.x})),u=n.map((function(e){return e.y})),l=a.map((function(e){return t.predict(e)})),o=Math.sqrt(c.sum(a.map((function(e,t){return Math.pow(u[t]-l[t],2)})))/(a.length-2)),i=d.studentt.inv(1-(1-$.current)/2,a.length-2),s=c.sum(a.map((function(e,t,r){return Math.pow(e-c.mean(r),2)}))),f=[];return a.sort((function(e,t){return e<t?-1:1})).forEach((function(e,n,u){var l=t.predict(e),d=o*Math.sqrt(1/a.length+Math.pow(e-c.mean(u),2)/s),m=i*d,p={x:e,y:l,y0:l-m,y1:l+m,group:r};f.push(p)})),f}),[de,ce,I,ue]),me=t.useCallback((function(e){var t=e.map((function(e){return+I.x(e)})),r=e.map((function(e){return parseFloat(I.y(e))})),n=e.map((function(e){return ue(e)})).filter((function(e){return e}))[0],a=new p.default({x:t.filter((function(e,t){return![void 0,null,NaN].includes(e)&&![void 0,null,NaN].includes(r[t])})),y:r.filter((function(e,r){return![void 0,null,NaN].includes(e)&&![void 0,null,NaN].includes(t[r])}))},{span:w,band:A});ce.push({group:n,model:a});var u=a.grid([t.length-1>=V?V:t.length-1]),l=a.predict(u),o=[];return u.x.forEach((function(e,t){var r={x:e,y:l.fitted[t],y0:l.fitted[t]-l.halfwidth[t],y1:l.fitted[t]+l.halfwidth[t],group:n};o.push(r)})),o}),[I,A,V,w,ce,ue]),pe=t.useMemo((function(){return le.map((function(e){var t,r=P.filter((function(t){return ue(t)===e}));return"loess"===R?t=me(r):"linear"===R&&(t=fe(r)),t})).flat()}),[P,le,ue,R,me,fe]);return t.useEffect((function(){_&&c.min(pe,(function(e){return e.y0}))<G.domain()[0]?ee("min",c.min(pe,(function(e){return e.y0}))):_&&c.max(pe,(function(e){return e.y1}))>G.domain()[1]&&ee("max",c.max(pe,(function(e){return e.y1})))}),[ee,G,pe,_]),m.default.createElement(m.default.Fragment,null,le.map((function(e,t){var n=pe.filter((function(t){return t.group===e}));return m.default.createElement("g",{key:"smoother-"+t,style:{pointerEvents:"none"}},_&&m.default.createElement(r.Area,{data:n,curve:a.curveMonotoneX,x:te,y0:ne,y1:ae,fill:b||("__group"!==e?oe(e):i||U),fillOpacity:M}),m.default.createElement(r.LinePath,{data:n,curve:a.curveMonotoneX,x:te,y:re,stroke:"__group"!==e?oe(e):i||U,strokeOpacity:h,strokeWidth:ie(e),strokeDasharray:"__group"!==e&&(null==Q?void 0:Q.values)?se(e):g}))})),!C&&m.default.createElement(m.default.Fragment,null,m.default.createElement(v,{data:"loess"===R?pe:ce,method:R,x:te,y:re,b:function(e){return e.x},models:ce,markerRadius:L,strokeOpacity:h,fillOpacity:_?M:0,stroke:i||U,thisStrokeScale:oe,thisSizeScale:ie,thisDashArrayScale:se,size:k}),m.default.createElement(l.EventField,{xScale:Y,yScale:G,onMouseOver:W,onMouseOut:j})))};x.displayName="GeomSmooth",exports.GeomSmooth=x;
//# sourceMappingURL=index.js.map
