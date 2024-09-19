import{_ as G}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CeozRB-c.js";import{_ as k}from"./ShikiMagicMove.vue_vue_type_style_index_0_lang-BxRSoUuN.js";import{C as E,o as e,c as W,k as a,e as s,l as t,m as i,D as u,b as h,A as n,q as U,s as g,B as r}from"./modules/vue-CK9TVpM9.js";import{_ as C}from"./default-B7Dvb3nZ.js";import{u as N,f as I}from"./slidev/context-BqqhU7gv.js";import"./modules/unplugin-icons-DJp9IAVw.js";import"./index-jHtVzOoD.js";import"./modules/shiki-DifSH8ZK.js";import"./lz-string-6c_MLJfo.js";import"./modules/file-saver-LUhfcczZ.js";import"./props-Bn8Egkbs.js";const F={grid:"~ cols-3 gap-2"},K={class:"col-span-2"},M={__name:"3-compilers-101.md__slidev_18",setup(L){const{$slidev:B,$nav:J,$clicksContext:o,$clicks:V,$page:y,$renderContext:w,$frontmatter:p}=N();return o.setup(),(H,l)=>{const c=k,A=G,m=E("click");return e(),W(C,U(g(r(I)(r(p),17))),{default:a(()=>[l[1]||(l[1]=s("h1",null,"1. Lexical Analysis",-1)),l[2]||(l[2]=s("ul",null,[s("li",null,"Analyze tokens in the source code, usually done with the help of regular expressions;"),s("li",null,"Think of this step as the language’s dictionary;"),s("li",null,"Makes sure there is no unwanted content in the source code;"),s("li",null,"Produces tokens which feeds into the next step;")],-1)),s("div",F,[s("div",K,[t(c,i({},{"steps-lz":"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=","step-ranges":[[],[]]}),null,16)]),u((e(),h("div",null,[t(A,i({},{ranges:[]}),{default:a(()=>l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes Night Owl Night Owl Light slidev-code",style:{"--shiki-dark":"#d6deeb","--shiki-light":"#403f53","--shiki-dark-bg":"#011627","--shiki-light-bg":"#FBFBFB"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,'- FUNCTION_KEYWORD "function"')]),n(`
`),s("span",{class:"line"},[s("span",null,'- IDENTIFIER "isEven"')]),n(`
`),s("span",{class:"line"},[s("span",null,'- LEFT_PAREN "("')]),n(`
`),s("span",{class:"line"},[s("span",null,'- IDENTIFIER "num"')]),n(`
`),s("span",{class:"line"},[s("span",null,'- COLON ":"')]),n(`
`),s("span",{class:"line"},[s("span",null,'- IDENTIFIER "number"')]),n(`
`),s("span",{class:"line"},[s("span",null,'- RIGHT_PAREN ")"')]),n(`
`),s("span",{class:"line"},[s("span",null,'- LEFT_BRACKET "{"')]),n(`
`),s("span",{class:"line"},[s("span",null,"- ...")])])],-1)])),_:1},16)])),[[m]])])]),_:1},16)}}},x=M;export{x as default};