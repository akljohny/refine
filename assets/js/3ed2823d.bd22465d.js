"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83537],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),r=a(67294),o=a(72389),i=a(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),d=a(86010),p="tabItem_vU9c";function u(e){var t,a,n,o=e.lazy,i=e.block,u=e.defaultValue,c=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),b=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,r.useState)(v),C=w[0],q=w[1],x=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=b[m];null!=P&&P!==C&&g.some((function(e){return e.value===P}))&&q(P)}var I=function(e){var t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==C&&(T(t),q(n),null!=m&&y(m,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},h)},g.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,d.Z)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:I,onClick:I},null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},37386:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return k},default:function(){return f}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(59815),l=a(43783),s=a(19272),d=a(26396),p=a(58215),u=["components"],c={id:"graphql",title:"GraphQL"},m=void 0,h={unversionedId:"guides-and-concepts/data-provider/graphql",id:"version-2.xx.xx/guides-and-concepts/data-provider/graphql",isDocsHomePage:!1,title:"GraphQL",description:"refine graphql and strapi-graphql data provider built with gql-query-builder and graphql-request is made for GraphQL implemantation. It aims to create a query dynamically with gql-query-builder and send requests with graphql-request.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/data-provider/graphql.md",sourceDirName:"guides-and-concepts/data-provider",slug:"/guides-and-concepts/data-provider/graphql",permalink:"/docs/guides-and-concepts/data-provider/graphql",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/data-provider/graphql.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"graphql",title:"GraphQL"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Interface References",permalink:"/docs/api-references/interfaceReferences"},next:{title:"Strapi-v4",permalink:"/docs/guides-and-concepts/data-provider/strapi-v4"}},k=[{value:"GraphQL Query Builder",id:"graphql-query-builder",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Create Collections",id:"create-collections",children:[],level:2},{value:"List Page",id:"list-page",children:[],level:2},{value:"Edit Page",id:"edit-page",children:[],level:2},{value:"Show Page",id:"show-page",children:[],level:2}],g={toc:k};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/graphql"},"graphql")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/strapi-graphql"},"strapi-graphql")," data provider built with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"gql-query-builder")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request")," is made for GraphQL implemantation. It aims to create a query dynamically with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"gql-query-builder")," and send requests with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request"),"."),(0,o.kt)("h2",{id:"graphql-query-builder"},"GraphQL Query Builder"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"GraphQL Query Builder")," allows us to build queries and mutations. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getList"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getMany")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getOne")," methods in our ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," generate a query to send a request. On the other hand, the ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createMany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteOne")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteMany")," methods generate a mutation to send a request."),(0,o.kt)("p",null,"In order to create a GraphQL query, our ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," has to take some options, such as specifying which fields will come in response, we pass these options to our ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods with ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaDataQuery"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder#options"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")," properties for detailed usage. ","\u2192")),(0,o.kt)("p",null,"Hooks and components that support ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaDataQuery"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported other hooks"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported components"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useUpdate"},(0,o.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/form/useForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/components/buttons/delete-button"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useUpdateMany"},(0,o.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/form/useModalForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/components/buttons/refresh-button"},(0,o.kt)("inlineCode",{parentName:"a"},"RefreshButton")," ","\u2192"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useDelete"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/form/useDrawerForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useDeleteMany"},(0,o.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/form/useStepsForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useCreate"},(0,o.kt)("inlineCode",{parentName:"a"},"useCreate")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/table/useTable"},(0,o.kt)("inlineCode",{parentName:"a"},"useTable")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useCreateMany"},(0,o.kt)("inlineCode",{parentName:"a"},"useCreateMany")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/table/useEditableTable"},(0,o.kt)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useList"},(0,o.kt)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/show/useSimpleList"},(0,o.kt)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useOne"},(0,o.kt)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/show/useShow"},(0,o.kt)("inlineCode",{parentName:"a"},"useShow")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useMany"},(0,o.kt)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/import-export/useExport"},(0,o.kt)("inlineCode",{parentName:"a"},"useExport")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/data/useCustom"},(0,o.kt)("inlineCode",{parentName:"a"},"useCustom")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/field/useCheckboxGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/field/useSelect"},(0,o.kt)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api-references/hooks/field/useRadioGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine @pankod/refine-strapi-graphql graphql-request\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We used ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/strapi-graphql"},"strapi-graphql")," server for this guide. You can customize your data provider for your own GraphQL server."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To activate data provider in ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-strapi-graphql"),", we have to pass the API address with ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLClient"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n// highlight-start\nimport dataProvider from "@pankod/refine-strapi-graphql";\nimport { GraphQLClient } from "graphql-request";\n// highlight-end\n\nconst client = new GraphQLClient("API_URL");\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n// highlight-next-line\n            dataProvider={dataProvider(client)}\n        />\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," you can do things like add headers for authentication. On the other hand, you can send a request with your query."))),(0,o.kt)("h2",{id:"create-collections"},"Create Collections"),(0,o.kt)("p",null,"We created two collections on ",(0,o.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,o.kt)("a",{parentName:"p",href:"https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,o.kt)("p",null,"You can see the fields of the collections we created as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="post"',title:'"post"'},'{\n    "id": 1,\n    "title": "Eius ea autem.",\n    "content": "Explicabo nihil delectus. Nam aliquid sunt numquam...",\n    "category": {\n        "id": 24,\n        "title": "Placeat fuga"\n    }\n}\n')),(0,o.kt)("h2",{id:"list-page"},"List Page"),(0,o.kt)("p",null,"When sending the request, we must specify which fields will come, so we send ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"metaData")," to hooks that we will fetch data from."),(0,o.kt)(d.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"usage",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export const PostList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n// highlight-start\n        metaData: {\n            fields: [\n                "id",\n                "title",\n                {\n                    category: ["title"],\n                },\n            ],\n        },\n// highlight-end\n    });\n\n    const { selectProps } = useSelect<ICategory>({\n        resource: "categories",\n// highlight-start\n        metaData: {\n            fields: ["id", "title"],\n        },\n// highlight-end\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter={{ multiple: 2 }}\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                />\n                <Table.Column\n                    key="title"\n                    dataIndex="title"\n                    title="Title"\n                    sorter={{ multiple: 1 }}\n                />\n                <Table.Column<IPost>\n                    dataIndex="category"\n                    title="Category"\n                    filterDropdown={(props) => (\n                        <FilterDropdown {...props}>\n                            <Select\n                                style={{ minWidth: 200 }}\n                                mode="multiple"\n                                placeholder="Select Category"\n                                {...selectProps}\n                            />\n                        </FilterDropdown>\n                    )}\n                    render={(_, record) => record.category.title}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <Space>\n                            <EditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <ShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <DeleteButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n'))),(0,o.kt)(p.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"\nquery ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"GraphQL list page"})),(0,o.kt)("h2",{id:"edit-page"},"Edit Page"),(0,o.kt)("p",null,"On the edit page ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/form/useForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm"))," sends a request with the record id to fill the form. ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," must be sent in ",(0,o.kt)("inlineCode",{parentName:"p"},"metaData")," to determine which fields will come in this request."),(0,o.kt)(d.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"usage",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export const PostEdit: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps, queryResult } = useForm<\n        IPost,\n        HttpError,\n        IPost\n    >({\n// highlight-start\n        metaData: {\n            fields: [\n                "id",\n                "title",\n                {\n                    category: ["id", "title"],\n                },\n                "content",\n            ],\n        },\n// highlight-end\n    });\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n        defaultValue: postData?.category.id,\n// highlight-start\n        metaData: {\n            fields: ["id", "title"],\n        },\n// highlight-end\n    });\n\n    const [selectedTab, setSelectedTab] =\n        useState<"write" | "preview">("write");\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n                onFinish={(values) =>\n                    formProps.onFinish?.({\n                        ...values,\n                        category: values.category.id,\n                    } as any)\n                }\n            >\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <ReactMde\n                        selectedTab={selectedTab}\n                        onTabChange={setSelectedTab}\n                        generateMarkdownPreview={(markdown) =>\n                            Promise.resolve(\n                                <ReactMarkdown>{markdown}</ReactMarkdown>,\n                            )\n                        }\n                    />\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The create page is largely the same as the edit page, there is no need to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"metaData")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/form/useForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm"))," on the create page. If you want to use the created record as a response after the request, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"metaData"),".")))),(0,o.kt)(p.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"GraphQL edit page"})),(0,o.kt)("h2",{id:"show-page"},"Show Page"),(0,o.kt)("p",null,"Show component includes the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/components/buttons/refresh-button"},(0,o.kt)("inlineCode",{parentName:"a"},"<RefreshButton>"))," by default. So we have to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"metaData")," to it. Also, we must pass ",(0,o.kt)("inlineCode",{parentName:"p"},"metaData")," again so that ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/show/useShow"},(0,o.kt)("inlineCode",{parentName:"a"},"useShow"))," knows which fields it will fetch."),(0,o.kt)(d.Z,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"usage",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-start\nconst metaData = {\n    fields: [\n        "id",\n        "title",\n        {\n            category: ["title"],\n        },\n        "content",\n    ],\n};\n// highlight-end\n\nexport const PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>({\n        resource: "posts",\n// highlight-next-line\n        metaData,\n    });\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show\n            isLoading={isLoading}\n// highlight-next-line\n            pageHeaderProps={{ extra: <RefreshButton metaData={metaData} /> }}\n        >\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n\n            <Title level={5}>Category</Title>\n            <Text>{record?.category.title}</Text>\n\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n'))),(0,o.kt)(p.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:s.Z,alt:"GraphQL show page"})))}f.isMDXComponent=!0},43783:function(e,t,a){t.Z=a.p+"assets/images/graphql-edit-440bcd8a36cfe2638741b71b9f7db286.png"},59815:function(e,t,a){t.Z=a.p+"assets/images/graphql-list-e468bece3b6d2e722ea70ce87d04af42.png"},19272:function(e,t,a){t.Z=a.p+"assets/images/graphql-show-646d3800eab440110eb0490c74a8a4c7.png"}}]);