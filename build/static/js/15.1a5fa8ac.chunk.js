(this.webpackJsonpunicom=this.webpackJsonpunicom||[]).push([[15],{266:function(t,r,e){"use strict";e.d(r,"a",(function(){return _})),e.d(r,"d",(function(){return C})),e.d(r,"c",(function(){return R})),e.d(r,"e",(function(){return S})),e.d(r,"f",(function(){return N})),e.d(r,"g",(function(){return A})),e.d(r,"b",(function(){return E}));var n,a,c,o,s,i,u,p,d,l,b,f,j,h,x,v,O,m=e(4),g=e(5),w=e(18),y=g.c.button(n||(n=Object(m.a)(["\n    align-items: center;\n    border: none;\n    border-radius: 30px;\n    color: var(--color-white);\n    display: flex;\n    font-size: 18px;\n    font-weight: bold;\n    justify-content: center;\n    transition: all 0.3s;\n    &:hover {\n        opacity: 0.5;\n        cursor: pointer;\n    }\n    &:focus {\n        outline: 0;\n    }\n"]))),k=Object(g.c)(y)(a||(a=Object(m.a)(["\n    padding: 10px 25px;\n"]))),_=Object(g.c)(k)(c||(c=Object(m.a)(["\n    background-color: var(--color-orange);\n"]))),C=(Object(g.c)(k)(o||(o=Object(m.a)(["\n    background-color: var(--color-green);\n    color: var(--color-font);\n"]))),Object(g.c)(k)(s||(s=Object(m.a)(["\n    background-color: var(--color-red);\n"])))),R=Object(g.c)(k)(i||(i=Object(m.a)(["\n    background-color: var(--color-orange);\n"]))),S=(Object(g.c)(k)(u||(u=Object(m.a)(["\n    background-color: var(--color-yellow);\n    color: var(--color-blue);\n"]))),Object(g.c)(k)(p||(p=Object(m.a)(["\n    background-color: var(--color-white);\n    color: var(--color-font);\n"])))),U=Object(g.c)(w.b)(d||(d=Object(m.a)(["\n    align-items: center;\n    border: none;\n    border-radius: 30px;\n    color: var(--color-white);\n    display:flex;\n    font-size: 18px;\n    font-weight: bold;\n    justify-content: center;\n    transition: all 0.3s;\n    &:hover {\n        opacity: 0.5;\n        cursor: pointer;\n    }\n    &:focus {\n        outline: 0;\n    }\n"]))),V=Object(g.c)(U)(l||(l=Object(m.a)(["\n    padding: 10px 25px;\n    text-decoration: none;\n"]))),z=Object(g.c)(U)(b||(b=Object(m.a)(["\n    padding: 5px 25px;\n"]))),N=Object(g.c)(V)(f||(f=Object(m.a)(["\n    background-color: var(--color-green);\n"]))),A=(Object(g.c)(V)(j||(j=Object(m.a)(["\n    background-color: var(--color-yellow);\n    color: var(--color-blue);\n"]))),Object(g.c)(z)(h||(h=Object(m.a)(["\n    background-color: var(--color-green);\n    color: var(--color-font);\n"]))),Object(g.c)(z)(x||(x=Object(m.a)(["\n    background-color: var(--color-orange);\n"])))),E=(Object(g.c)(z)(v||(v=Object(m.a)(["\n    background-color: var(--color-yellow);\n    color: var(--color-blue);\n"]))),g.c.div(O||(O=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding-top: 30px;\n"]))))},267:function(t,r,e){"use strict";var n=e(51),a=e.n(n),c=e(82),o=e(278),s=e.n(o),i=e(23),u=e(22),p=s.a.create({baseURL:i.a.envApi});p.interceptors.request.use(function(){var t=Object(c.a)(a.a.mark((function t(r){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=Object(u.a)())&&(r.headers.Authorization="".concat(e)),t.abrupt("return",r);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),r.a=p},268:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t.response.data.errors.message}},270:function(t,r,e){"use strict";var n,a,c,o=e(18),s=e(4),i=e(5),u=i.c.div(n||(n=Object(s.a)(["\n    background-color: var(--color-sidebar);\n"]))),p=i.c.div(a||(a=Object(s.a)(["\n    background-color: var(--color-background-title-bar);\n    color: var(--color-blue);\n    height: 80px;\n    padding-left: 60px;\n    display: flex;\n    align-items: center;\n    & h1 {\n        font-size: 24px;\n        color: var(--color-sidebar);\n    }\n"]))),d=i.c.ul(c||(c=Object(s.a)(["\n    padding: 2px 0;\n    list-style: none;\n    margin: 0 auto;\n    & li {\n        display: inline;\n        font-size: 16px;\n    }\n    & li + li:before {\n        color: var(--color-font);\n    }\n    & li a {\n        color: var(--color-blue);\n        text-decoration: none;\n        padding: 8px 8px 8px 0;\n        border-radius: 5px;\n    }\n    & li {\n        color: var(--color-font);\n    }\n    & li a:hover {\n        text-decoration: none;\n    }\n"]))),l=e(1);r.a=function(t){return Object(l.jsx)(u,{children:Object(l.jsx)(p,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:t.label}),Object(l.jsxs)(d,{children:[t.breadcrumb&&t.breadcrumb.map((function(t,r){return Object(l.jsxs)("li",{children:[Object(l.jsx)(o.b,{to:t.path,children:t.label}),"/"]},r)})),Object(l.jsx)("li",{children:t.currentPage})]})]})})})}},271:function(t,r,e){"use strict";var n,a=e(4),c=e(5).c.div(n||(n=Object(a.a)(["\n    width: 100%;\n    padding: 0 15px 15px 15px;\n"]))),o=e(1);r.a=function(t){return Object(o.jsx)(c,{children:t.children})}},272:function(t,r,e){"use strict";var n,a=e(4),c=e(5).c.div(n||(n=Object(a.a)(["\n    background-color: var(--color-background-card);\n    margin: 0 15px 15px 15px;\n    border-radius: 20px;\n    color: var(--color-font);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),o=e(1);r.a=function(t){return Object(o.jsx)(c,{children:t.children})}},273:function(t,r,e){"use strict";var n,a=e(4),c=e(5).c.div(n||(n=Object(a.a)(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid var(--color-grey);\n    color: var(--color-font);\n    & p {\n        padding: 15px 30px;\n        flex-grow: 1;\n        font-size: 20px;\n        line-height: 24px;\n        font-weight: bold;\n    }\n    & div {\n        padding: 15px;\n    }\n    @media (max-width: 1140px) {\n        & {\n            flex-direction: column;\n        }\n    }\n"]))),o=e(1);r.a=function(t){return Object(o.jsxs)(c,{children:[Object(o.jsx)("p",{children:t.title}),Object(o.jsx)("div",{children:t.children})]})}},279:function(t,r,e){"use strict";e.d(r,"k",(function(){return v})),e.d(r,"f",(function(){return O})),e.d(r,"e",(function(){return m})),e.d(r,"g",(function(){return g})),e.d(r,"a",(function(){return w})),e.d(r,"c",(function(){return y})),e.d(r,"i",(function(){return k})),e.d(r,"j",(function(){return _})),e.d(r,"b",(function(){return C})),e.d(r,"h",(function(){return R})),e.d(r,"d",(function(){return S}));var n,a=e(51),c=e.n(a),o=e(82),s=e(267),i=e(22),u=e(268),p=new Uint8Array(16);function d(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(p)}var l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var b=function(t){return"string"===typeof t&&l.test(t)},f=[],j=0;j<256;++j)f.push((j+256).toString(16).substr(1));var h=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(f[t[r+0]]+f[t[r+1]]+f[t[r+2]]+f[t[r+3]]+"-"+f[t[r+4]]+f[t[r+5]]+"-"+f[t[r+6]]+f[t[r+7]]+"-"+f[t[r+8]]+f[t[r+9]]+"-"+f[t[r+10]]+f[t[r+11]]+f[t[r+12]]+f[t[r+13]]+f[t[r+14]]+f[t[r+15]]).toLowerCase();if(!b(e))throw TypeError("Stringified UUID is invalid");return e};var x=function(t,r,e){var n=(t=t||{}).random||(t.rng||d)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var a=0;a<16;++a)r[e+a]=n[a];return r}return h(n)},v=function(){var t=Object(o.a)(c.a.mark((function t(r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/users/list-by-firm",{firm_id:r});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(c.a.mark((function t(r,e,n){var a,o,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.email,o=e.password,t.prev=1,t.next=4,s.a.post("/users/login",{email:a,password:o});case 4:p=t.sent.data,Object(i.c)(p.token),"admin"===Object(i.e)().data.roles?r.push("/grupos"):r.push("/relatorios"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(r,e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(c.a.mark((function t(r,e){var n,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),a={emailTo:r.email,emailFrom:"enviodesenha@nivel3ti.com.br",smtpHost:"smtp.sendgrid.net",smtpPort:"587",smtpUser:"apikey",smtpPass:"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",uuid:n,emailMessage:'\n        <h2>Redefini\xe7\xe3o de senha</h2>\n        <p>Acesse o link abaixo para redefinir sua senha.</p>\n        <a href="'.concat("http://bi.nivel3ti.com.br","/recuperar-senha/").concat(n,'">').concat("http://bi.nivel3ti.com.br","/recuperar-senha/").concat(n,"</a>\n      ")},t.prev=2,t.next=5,s.a.post("/users/forgot-password",a);case 5:o=t.sent,e({messages:o.data.data.message,alert:"alert-green"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r,e){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(c.a.mark((function t(r,e,n,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.put("/users/recover-password/".concat(e),n);case 3:return t.abrupt("return",r.push("/login"));case 6:t.prev=6,t.t0=t.catch(0),a({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(r,e,n,a){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(c.a.mark((function t(r,e,n,a){var o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=x().split("-")[0],i={name:e.name,email:e.email,password:o,roles:e.roles,firm_id:n,emailFrom:"enviodesenha@nivel3ti.com.br",smtpHost:"smtp.sendgrid.net",smtpPort:"587",smtpUser:"apikey",smtpPass:"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",emailMessage:'\n     \t<h3>Cadastro realizado com sucesso!.</h3>\n     \t<p>Ol\xe1, seja bem vindo ao <strong>Unicom Embed</strong></p>\n     \t<p>Voc\xea foi cadastrado para acessar a plataforma <a href="'.concat("http://bi.nivel3ti.com.br",'">').concat("http://bi.nivel3ti.com.br","</a> e ter acesso aos Relat\xf3rios e Dashboard dos nossos principais projetos.</p>\n     \t<p>Segue abaixo os seus dados de acesso:</p>\n       <ul>\n     \t\t\t<li>Email: ").concat(e.email,"</li>\n     \t\t\t<li>Senha: ").concat(o,'</li>\n     \t</ul>\n       <p>CLique no link para acessar a plataforma e acompanhar os seus resultados <a href="').concat("http://bi.nivel3ti.com.br",'">').concat("http://bi.nivel3ti.com.br","</a>.</p>\n     ")},t.prev=2,t.next=5,s.a.post("/users/store-auth-user",i);case 5:return t.abrupt("return",r.push("/dashboard"));case 8:t.prev=8,t.t0=t.catch(2),a({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(r,e,n,a){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(c.a.mark((function t(r,e,n,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.put("/users/".concat(n,"/update-auth-user"),e);case 3:return t.abrupt("return",r.push("/usuarios"));case 6:t.prev=6,t.t0=t.catch(0),a({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(r,e,n,a){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(c.a.mark((function t(r,e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",r),t.prev=2,t.next=5,s.a.put("/users/".concat(e,"/upload"),n);case 5:return t.abrupt("return");case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(r,e){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(c.a.mark((function t(r,e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.put("/users/update-password",e);case 3:return t.abrupt("return",r.push("/dashboard"));case 6:t.prev=6,t.t0=t.catch(0),n({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(r,e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(c.a.mark((function t(r,e,n,a){var o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={name:n.name,email:n.email},t.prev=1,t.next=4,s.a.put("/users/".concat(e,"/update-auth-user"),o);case 4:return Object(i.d)(r),t.abrupt("return");case 8:t.prev=8,t.t0=t.catch(1),a({messages:Object(u.a)(t.t0),alert:"alert-orange"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(r,e,n,a){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(c.a.mark((function t(r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/users/".concat(r));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(c.a.mark((function t(r,e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("/users/".concat(r));case 2:return t.abrupt("return",e.push("/usuarios"));case 3:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}()},285:function(t,r,e){"use strict";e(0);var n,a=e(4),c=e(5).c.table(n||(n=Object(a.a)(["\n    width: 100%;\n    padding: 0 15px 15px;\n    & th {\n        padding: 12px;\n        text-align: left;\n        border-bottom: 1px solid var(--color-grey);\n    }\n    & tr:nth-child(even) {\n        background-color: var(--color-background-input);\n    }\n    & td {\n        padding: 8px;\n    }\n"]))),o=e(1);r.a=function(t){return Object(o.jsx)(c,{children:t.children})}},289:function(t,r,e){"use strict";e.d(r,"d",(function(){return i})),e.d(r,"b",(function(){return u})),e.d(r,"a",(function(){return p})),e.d(r,"e",(function(){return d})),e.d(r,"f",(function(){return l})),e.d(r,"c",(function(){return b}));var n=e(51),a=e.n(n),c=e(82),o=e(267),s=e(268),i=function(){var t=Object(c.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/reports/list-by-user-with-card",{user_id:r});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/reports/".concat(r));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(r,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/reports/show-by-report",{report_id:r,user_id:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(r,e,n,c){var i,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=JSON.parse(e.card),u={user_id:e.user_id,name:i.name,report_id:i.report_id,group_id:i.group_id,dataset_id:i.dataset_id,roles:e.roles,page_navigation:e.page_navigation},t.prev=2,t.next=5,o.a.post("/reports/store",u);case 5:return t.abrupt("return",r.push("/usuarios/".concat(n,"/relatorios")));case 8:t.prev=8,t.t0=t.catch(2),c({messages:Object(s.a)(t.t0),alert:"alert-orange"});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(r,e,n,a){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(r,e,n,c,i){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.put("/reports/".concat(n,"/update"),e);case 3:return t.abrupt("return",r.push("/usuarios/".concat(c,"/relatorios")));case 6:t.prev=6,t.t0=t.catch(0),i({messages:Object(s.a)(t.t0),alert:"alert-orange"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(r,e,n,a,c){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(r,e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/reports/".concat(r));case 2:return t.abrupt("return",n.push("/usuarios/".concat(e,"/relatorios")));case 3:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}()},295:function(t,r,e){"use strict";var n=e(266),a=e(1);r.a=function(t){return Object(a.jsx)(n.g,{to:t.to,children:t.children})}},304:function(t,r,e){"use strict";var n=e(266),a=e(1);r.a=function(t){return Object(a.jsx)(n.f,{to:t.to,children:t.children})}},501:function(t,r,e){"use strict";e.r(r);var n=e(51),a=e.n(n),c=e(82),o=e(52),s=e(0),i=e(7),u=e(289),p=e(279),d=e(270),l=e(271),b=e(272),f=e(273),j=e(285),h=e(304),x=e(295),v=e(25),O=e(1),m=function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{label:"Usu\xe1rios",currentPage:""}),Object(O.jsxs)(l.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(f.a,{title:"Usu\xe1rio"}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Nome"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"Permiss\xe3o"})]})}),Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.user.name}),Object(O.jsx)("td",{children:t.user.email}),Object(O.jsx)("td",{children:t.user.roles})]})})]})]}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(f.a,{title:"Relat\xf3rios",children:Object(O.jsx)(h.a,{to:"/usuarios/".concat(t.params.id,"/relatorios/cadastrar"),children:"Cadastrar"})}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{width:"60",children:"#"}),Object(O.jsx)("th",{children:"Relat\xf3rio"}),Object(O.jsx)("th",{children:"Card"}),Object(O.jsx)("th",{children:"Roles"}),Object(O.jsx)("th",{children:"Abas habilitada"}),Object(O.jsx)("th",{width:"50",children:"A\xe7\xf5es"})]})}),Object(O.jsx)("tbody",{children:t.data.map((function(r){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"#".concat(r.id)}),Object(O.jsx)("td",{children:r.name}),Object(O.jsx)("td",{children:r.card_name}),Object(O.jsx)("td",{children:r.roles}),Object(O.jsx)("td",{children:1===r.page_navigation?"Sim":"N\xe3o"}),Object(O.jsx)("td",{children:Object(O.jsx)(x.a,{to:"/usuarios/".concat(t.params.id,"/relatorios/").concat(r.id,"/editar"),children:Object(O.jsx)(v.d,{})})})]},r.id)}))})]})]})]})]})};r.default=function(){var t=Object(i.h)(),r=Object(s.useState)([]),e=Object(o.a)(r,2),n=e[0],d=e[1],l=Object(s.useState)({}),b=Object(o.a)(l,2),f=b[0],j=b[1];return Object(s.useEffect)((function(){Object(c.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=d,r.next=3,Object(u.d)(t.id);case 3:return r.t1=r.sent,(0,r.t0)(r.t1),r.t2=j,r.next=8,Object(p.h)(t.id);case 8:r.t3=r.sent,(0,r.t2)(r.t3);case 10:case"end":return r.stop()}}),r)})))()}),[t.id]),Object(O.jsx)(m,{data:n,params:t,user:f})}}}]);
//# sourceMappingURL=15.1a5fa8ac.chunk.js.map