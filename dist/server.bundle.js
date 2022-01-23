(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const n=require("react");var a=e.n(n);const o=require("react-dom/server");var c=e.n(o);const s=require("source-map-support");var i=e.n(s);const l=require("@emotion/react"),u=require("@emotion/cache");var m=e.n(u);const d=require("@emotion/server/create-instance");var p=e.n(d);const v=require("react-material-ui-carousel");var h=e.n(v);const y=require("@mui/material");function b(e){return a().createElement(h(),{autoPlay:!1},[{name:"Random Name #1",description:"Probably the most random thing you have ever seen!"},{name:"Random Name #2",description:"Hello World!"}].map(((e,t)=>a().createElement(q,{key:t,item:e}))))}function q(e){return a().createElement(y.Paper,null,a().createElement("h2",null,e.item.name),a().createElement("p",null,e.item.description),a().createElement(y.Button,{className:"CheckButton"},"Check it out!"))}i().install();const E=r()();E.use(r().static("dist")),E.get("*",((e,t)=>{const r=m()({key:"css"}),{extractCriticalToChunks:n,constructStyleTagsFromChunks:o}=p()(r),s=a().createElement(l.CacheProvider,{value:r},a().createElement(b,null)),i=c().renderToString(s),u=`\n  <!DOCTYPE html>\n  <html>\n    <head>\n    ${o(n(i))}\n    </head>\n    <body>\n      <div id="root">${i}</div>\n      <script src="/app.bundle.js"><\/script>\n      <script src="/vendor.bundle.js"><\/script>\n    </body>\n  </html>\n  `;t.send(u)})),E.listen(8e3,(()=>{console.log("UI started on port 8000")}))})();