import{_ as n}from"./ShikiMagicMove.vue_vue_type_style_index_0_lang-BxRSoUuN.js";import{o as a,c as l,k as i,e as s,A as t,l as r,m as g,q as p,s as k,B as o}from"./modules/vue-CK9TVpM9.js";import{_ as Y}from"./default-B7Dvb3nZ.js";import{u as d,f as q}from"./slidev/context-BqqhU7gv.js";import"./lz-string-6c_MLJfo.js";import"./modules/file-saver-LUhfcczZ.js";import"./index-jHtVzOoD.js";import"./modules/shiki-DifSH8ZK.js";import"./props-Bn8Egkbs.js";const u={__name:"3-compilers-101.md__slidev_21",setup(h){const{$slidev:C,$nav:I,$clicksContext:e,$clicks:Q,$page:B,$renderContext:N,$frontmatter:m}=d();return e.setup(),(S,A)=>{const c=n;return a(),l(Y,p(k(o(q)(o(m),20))),{default:i(()=>[A[0]||(A[0]=s("h1",null,"3. Semantic Analysis",-1)),A[1]||(A[1]=s("ul",null,[s("li",null,'Analyzes the AST and makes sure that the code "makes sense"'),s("li",null,"Example: if a variable or function is used but not declared, there’s a semantical error"),s("li",null,[t("Produces a "),s("a",{href:"https://en.wikipedia.org/wiki/Symbol_table",target:"_blank"},"symbol table"),t(" during the analysis for the next step")])],-1)),r(c,g({},{"steps-lz":"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=","step-ranges":[[],[]]}),null,16)]),_:1},16)}}},V=u;export{V as default};