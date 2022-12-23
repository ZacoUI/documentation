"use strict";(self.webpackChunksensity_doc=self.webpackChunksensity_doc||[]).push([[163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),l=r(7392),s=r(7094),u=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:v,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:O}=(0,s.U)(),[T,w]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=g[v];null!=e&&e!==T&&y.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,r=N.indexOf(t),n=y[r].value;n!==T&&(E(t),w(n),null!=v&&O(v,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},y.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:P,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},7291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(5488),i=r(5162);const l={id:"report",title:"Prendre traiter et terminer un report",description:"Nous allons voir aussi toutes la m\xe9canique \xe0 avoir lors de la prise de report"},s=void 0,u={unversionedId:"Sensity - ig/report",id:"Sensity - ig/report",title:"Prendre traiter et terminer un report",description:"Nous allons voir aussi toutes la m\xe9canique \xe0 avoir lors de la prise de report",source:"@site/docs/Sensity - ig/report.md",sourceDirName:"Sensity - ig",slug:"/Sensity - ig/report",permalink:"/sensity-doc/docs/Sensity - ig/report",draft:!1,editUrl:"https://github.com/ZacoUI/sensity-doc/tree/main/docs/docs/Sensity - ig/report.md",tags:[],version:"current",frontMatter:{id:"report",title:"Prendre traiter et terminer un report",description:"Nous allons voir aussi toutes la m\xe9canique \xe0 avoir lors de la prise de report"},sidebar:"tutorialSidebar",previous:{title:"Le menu staff",permalink:"/sensity-doc/docs/Sensity - ig/menu staff"},next:{title:"Tutorial - Extras",permalink:"/sensity-doc/docs/category/tutorial---extras"}},p={},c=[{value:"Les report",id:"les-report",level:2},{value:"Autre indication importante sur le report",id:"autre-indication-importante-sur-le-report",level:2},{value:"Les interdictions",id:"les-interdictions",level:3},{value:"Rappel",id:"rappel",level:3}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"les-report"},"Les report"),(0,a.kt)("p",null,"Pour les reports, il y a des nouvelles fonctionnalit\xe9s qui sont les suivantes : "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Quand vous allez prendre le report et qu'une personne est morte, vous pourrez lui parler en tchat \xe9crit pour savoir quelle est le probl\xe8me.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Le chat s'active avec T, pour le retiter il faut appuyer sur L ")),(0,a.kt)("h1",{id:"prendre-traiter-et-terminer-un-report"},"Prendre traiter et terminer un report"),(0,a.kt)("p",null," Dans vos report en attente, vous auriez ",(0,a.kt)("strong",{parentName:"p"},"3 choix.")," ",(0,a.kt)("em",{parentName:"p"},"(Participer/Quitter/Ferm\xe9)")," "),(0,a.kt)("p",null,"Le bouton particip\xe9 est pour accepter le report.\nLe bouton quitt\xe9 est pour quitter le report. (si vous cliquer sur quitter le report restera actif et ne ce ferme pas donc d'autre staff peuvent participer)\nLe bouton ferm\xe9 est pour fermer le report. "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"particip\xe9",label:"Particip\xe9",default:!0,mdxType:"TabItem"},"Le bouton particip\xe9 est pour accepter le report. Vous serez automatiquement t\xe9l\xe9port\xe9 \xe0 la personne \xe0 chaque fois que vous appuyez sur participer"),(0,a.kt)(i.Z,{value:"quitt\xe9",label:"Quitt\xe9",mdxType:"TabItem"},"Le bouton quitt\xe9 est pour quitter le report. (si vous cliquer sur quitter le report restera actif et ne ce ferme pas donc d'autre staff peuvent participer)"),(0,a.kt)(i.Z,{value:"ferm\xe9",label:"Ferm\xe9",mdxType:"TabItem"},"Le bouton ferm\xe9 est pour fermer le report. \xc0 noter que vous ne pourrez plus parler dans le chat avec le joueur une fois le report termin\xe9")),(0,a.kt)("h2",{id:"autre-indication-importante-sur-le-report"},"Autre indication importante sur le report"),(0,a.kt)("h3",{id:"les-interdictions"},"Les interdictions"),(0,a.kt)("admonition",{title:"Interdit ! ",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Il est interdit de porter no clip un joueur "),(0,a.kt)("p",{parentName:"admonition"},"Il est interdit de cl\xf4turer le report des autres "),(0,a.kt)("p",{parentName:"admonition"},"Il est interdit d'insulter sur les reports ")),(0,a.kt)("h3",{id:"rappel"},"Rappel"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vous devez \xeatre le plus objectif sur la situation et visualiser des rec en bda si les joueurs en ont.")),(0,a.kt)("admonition",{title:"Ban - jail",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Pour les novices et les helpers s'il y a des demandes de ban/unjail n'oubliez pas le salon ban-jail  ")))}m.isMDXComponent=!0}}]);