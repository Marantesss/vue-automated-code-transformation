import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CeozRB-c.js";import{o as r,c as y,k,e as i,A as s,l as d,m as g,q as D,s as p,B as h}from"./modules/vue-CK9TVpM9.js";import{_ as E}from"./default-B7Dvb3nZ.js";import{u as o,f as C}from"./slidev/context-BqqhU7gv.js";import"./modules/unplugin-icons-DJp9IAVw.js";import"./index-jHtVzOoD.js";import"./modules/shiki-DifSH8ZK.js";import"./props-Bn8Egkbs.js";const F={__name:"4-in-practice.md__slidev_34",setup(c){const{$slidev:B,$nav:f,$clicksContext:l,$clicks:A,$page:u,$renderContext:m,$frontmatter:a}=o();return l.setup(),(v,t)=>{const e=n;return r(),y(E,D(p(h(C)(h(a),33))),{default:k(()=>[t[1]||(t[1]=i("h1",null,"Visitor Design Pattern Example",-1)),t[2]||(t[2]=i("p",null,[i("a",{href:"https://refactoring.guru/design-patterns/visitor",target:"_blank"},"Visitor design pattern"),s(" to the rescue;")],-1)),t[3]||(t[3]=i("p",null,[s("Quick Example: Given a number array "),i("em",null,"N"),s(", return two arrays of odd and even numbers in "),i("em",null,"N"),s(":")],-1)),d(e,g({},{ranges:["*",""]}),{default:k(()=>t[0]||(t[0]=[i("pre",{class:"shiki shiki-themes Night Owl Night Owl Light slidev-code",style:{"--shiki-dark":"#d6deeb","--shiki-light":"#403f53","--shiki-dark-bg":"#011627","--shiki-light-bg":"#FBFBFB"}},[i("code",{class:"language-ts"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"type"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," VisitorFunctionResult "),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"="),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#C5E478","--shiki-light":"#4876D6"}},"number"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"[], "),i("span",{style:{"--shiki-dark":"#C5E478","--shiki-light":"#4876D6"}},"number"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"[]]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"type"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," VisitorFunction "),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"="),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}}," ("),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53"}},"elem"),i("span",{style:{"--shiki-dark":"#7FDBCA","--shiki-light":"#0C969B"}},":"),i("span",{style:{"--shiki-dark":"#C5E478","--shiki-light":"#4876D6"}}," number"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},", "),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53"}},"result"),i("span",{style:{"--shiki-dark":"#7FDBCA","--shiki-light":"#0C969B"}},":"),i("span",{style:{"--shiki-dark":"#FFCB8B","--shiki-light":"#111111"}}," VisitorFunctionResult"),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," =>"),i("span",{style:{"--shiki-dark":"#FFCB8B","--shiki-light":"#111111"}}," VisitorFunctionResult")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"const"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#4876D6","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," array"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," ="),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}},"1"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}},"2"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}},"3"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}},"4"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}},"5"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}},"6"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"const"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#4876D6","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," visitors"),i("span",{style:{"--shiki-dark":"#7FDBCA","--shiki-light":"#0C969B"}},":"),i("span",{style:{"--shiki-dark":"#FFCB8B","--shiki-light":"#111111","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," VisitorFunction"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"[]"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," ="),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},"  ("),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"elem"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"odd"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," even"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"]"),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," =>"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," elem "),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"%"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}}," 2"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," !=="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}}," 0"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," ?"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," [["),i("span",{style:{"--shiki-dark":"#7FDBCA","--shiki-light":"#0C969B"}},"..."),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"odd"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," elem"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"],"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," even"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"]"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," :"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"odd"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," even"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"],"),i("span",{style:{"--shiki-dark":"#637777","--shiki-light":"#939DBB"}},"   //"),i("span",{style:{"--shiki-dark":"#637777","--shiki-light":"#939DBB","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," oddVisitor")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},"  ("),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"elem"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"odd"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," even"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"]"),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," =>"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," elem "),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"%"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}}," 2"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," ==="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#AA0982"}}," 0"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," ?"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"odd"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#7FDBCA","--shiki-light":"#0C969B"}},"..."),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"even"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," elem"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"]]"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," :"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," ["),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"odd"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," even"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"],"),i("span",{style:{"--shiki-dark":"#637777","--shiki-light":"#939DBB"}},"   //"),i("span",{style:{"--shiki-dark":"#637777","--shiki-light":"#939DBB","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," evenVisitor")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"]")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"const"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#4876D6","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," result"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," ="),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," visitors"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#4876D6","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"reduce"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},"<"),i("span",{style:{"--shiki-dark":"#FFCB8B","--shiki-light":"#111111","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"VisitorFunctionResult"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},">"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},"  ("),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"result"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},","),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," visitor"),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," =>"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," array"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#4876D6","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"reduce"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"("),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},"("),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"_result"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},","),i("span",{style:{"--shiki-dark":"#D7DBE0","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," e"),i("span",{style:{"--shiki-dark":"#D9F5DD","--shiki-light":"#111111"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}}," =>"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#4876D6","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," visitor"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"("),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"e"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," _result"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},","),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," result"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#994CC3"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},"  [[],"),i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}}," []]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#D6DEEB","--shiki-light":"#403F53"}},")")])])],-1)])),_:1},16)]),_:1},16)}}},w=F;export{w as default};
