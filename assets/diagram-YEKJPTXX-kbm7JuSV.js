var D=Object.defineProperty;var A=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var M=(a,t,e)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,C=(a,t)=>{for(var e in t||(t={}))P.call(t,e)&&M(a,e,t[e]);if(A)for(var e of A(t))z.call(t,e)&&M(a,e,t[e]);return a};var L=(a,t,e)=>new Promise((r,s)=>{var o=n=>{try{i(e.next(n))}catch(c){s(c)}},l=n=>{try{i(e.throw(n))}catch(c){s(c)}},i=n=>n.done?r(n.value):Promise.resolve(n.value).then(o,l);i((e=e.apply(a,t)).next())});import{p as G}from"./chunk-JWPE2WC7-VPZZSw25.js";import{s as B,g as W,t as V,q as H,a as j,b as N,_ as d,Q as U,A as X,N as b,L as T,O as q,l as S,R as K,d as Q}from"./mermaid.core-B4vn-X9S.js";import{p as Y}from"./cynefin-EF2NZ3EQ-t7sY7AXD.js";import"./index-CnSRTFJF.js";import"./vendor-react-NR0m6cSI.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},y=32,k={axes:[],curves:[],options:h},m=structuredClone(k),Z=q.radar,J=d(()=>b(C(C({},Z),T().radar)),"getConfig"),O=d(()=>m.axes,"getAxes"),tt=d(()=>m.curves,"getCurves"),et=d(()=>m.options,"getOptions"),at=d(a=>{m.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name}})},"setAxes"),rt=d(a=>{m.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name,entries:st(t.entries)}})},"setCurves"),st=d(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=O();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>{var o;return((o=s.axis)==null?void 0:o.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),nt=d(a=>{var e,r,s,o,l,i,n,c,p,u;const t=a.reduce((g,x)=>(g[x.name]=x,g),{});m.options={showLegend:(r=(e=t.showLegend)==null?void 0:e.value)!=null?r:h.showLegend,ticks:(o=(s=t.ticks)==null?void 0:s.value)!=null?o:h.ticks,max:(i=(l=t.max)==null?void 0:l.value)!=null?i:h.max,min:(c=(n=t.min)==null?void 0:n.value)!=null?c:h.min,graticule:(u=(p=t.graticule)==null?void 0:p.value)!=null?u:h.graticule},m.options.ticks>y&&(S.warn(`Radar diagram ticks (${m.options.ticks}) exceeds maximum allowed (${y}). Using ${y} instead.`),m.options.ticks=y)},"setOptions"),ot=d(()=>{X(),m=structuredClone(k)},"clear"),f={getAxes:O,getCurves:tt,getOptions:et,setAxes:at,setCurves:rt,setOptions:nt,getConfig:J,clear:ot,setAccTitle:N,getAccTitle:j,setDiagramTitle:H,getDiagramTitle:V,getAccDescription:W,setAccDescription:B},it=d(a=>{G(a,f);const{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),lt={parse:d(a=>L(void 0,null,function*(){const t=yield Y("radar",a);S.debug(t),it(t)}),"parse")},ct=d((a,t,e,r)=>{var $;const s=r.db,o=s.getAxes(),l=s.getCurves(),i=s.getOptions(),n=s.getConfig(),c=s.getDiagramTitle(),p=U(t),u=dt(p,n),g=($=i.max)!=null?$:Math.max(...l.map(w=>Math.max(...w.entries))),x=i.min,v=Math.min(n.width,n.height)/2;ut(u,o,v,i.ticks,i.graticule),pt(u,o,v,n),R(u,o,l,x,g,i.graticule,n),E(u,l,i.showLegend,n),u.append("text").attr("class","radarTitle").text(c).attr("x",0).attr("y",-n.height/2-n.marginTop)},"draw"),dt=d((a,t)=>{var o;const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return Q(a,r,e,(o=t.useMaxWidth)!=null?o:!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),ut=d((a,t,e,r,s)=>{if(s==="circle")for(let o=0;o<r;o++){const l=e*(o+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(s==="polygon"){const o=t.length;for(let l=0;l<r;l++){const i=e*(l+1)/r,n=t.map((c,p)=>{const u=2*p*Math.PI/o-Math.PI/2,g=i*Math.cos(u),x=i*Math.sin(u);return`${g},${x}`}).join(" ");a.append("polygon").attr("points",n).attr("class","radarGraticule")}}},"drawGraticule"),pt=d((a,t,e,r)=>{const s=t.length;for(let o=0;o<s;o++){const l=t[o].label,i=2*o*Math.PI/s-Math.PI/2,n=Math.cos(i),c=Math.sin(i);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*n).attr("y2",e*r.axisScaleFactor*c).attr("class","radarAxisLine");const p=n>.01?"start":n<-.01?"end":"middle",u=c>.01?"hanging":c<-.01?"auto":"central",g=4;a.append("text").text(l).attr("x",e*r.axisLabelFactor*n+g*n).attr("y",e*r.axisLabelFactor*c+g*c).attr("text-anchor",p).attr("dominant-baseline",u).attr("class","radarAxisLabel")}},"drawAxes");function R(a,t,e,r,s,o,l){const i=t.length,n=Math.min(l.width,l.height)/2;e.forEach((c,p)=>{if(c.entries.length!==i)return;const u=c.entries.map((g,x)=>{const v=2*Math.PI*x/i-Math.PI/2,$=I(g,r,s,n),w=$*Math.cos(v),F=$*Math.sin(v);return{x:w,y:F}});o==="circle"?a.append("path").attr("d",_(u,l.curveTension)).attr("class",`radarCurve-${p}`):o==="polygon"&&a.append("polygon").attr("points",u.map(g=>`${g.x},${g.y}`).join(" ")).attr("class",`radarCurve-${p}`)})}d(R,"drawCurves");function I(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}d(I,"relativeRadius");function _(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const o=a[(s-1+e)%e],l=a[s],i=a[(s+1)%e],n=a[(s+2)%e],c={x:l.x+(i.x-o.x)*t,y:l.y+(i.y-o.y)*t},p={x:i.x-(n.x-l.x)*t,y:i.y-(n.y-l.y)*t};r+=` C${c.x},${c.y} ${p.x},${p.y} ${i.x},${i.y}`}return`${r} Z`}d(_,"closedRoundCurve");function E(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,o=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((i,n)=>{const c=a.append("g").attr("transform",`translate(${s}, ${o+n*l})`);c.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${n}`),c.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}d(E,"drawLegend");var gt={draw:ct},mt=d((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),xt=d(a=>{const t=K(),e=T(),r=b(t,e.themeVariables),s=b(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),ht=d(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=xt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${mt(t,e)}
	`},"styles"),bt={parser:lt,db:f,renderer:gt,styles:ht};export{bt as diagram};
