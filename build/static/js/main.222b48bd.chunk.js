(this.webpackJsonpunicom=this.webpackJsonpunicom||[]).push([[3],{153:function(n,e){},155:function(n,e){},169:function(n,e){},171:function(n,e){},199:function(n,e){},201:function(n,e){},202:function(n,e){},207:function(n,e){},209:function(n,e){},22:function(n,e,t){"use strict";t.d(e,"e",(function(){return i})),t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return l})),t.d(e,"c",(function(){return s})),t.d(e,"d",(function(){return d}));var o=t(78),r=t.n(o),c=t(23),i=function(){if(null!==localStorage.getItem(c.a.tokenKey))try{return r.a.verify(localStorage.getItem(c.a.tokenKey),c.a.envSecret)}catch(n){return!1}},a=function(){return r.a.decode(localStorage.getItem(c.a.tokenKey))},l=function(){return localStorage.getItem(c.a.tokenKey)},s=function(n){return localStorage.setItem(c.a.tokenKey,n)},d=function(n){return localStorage.removeItem(c.a.tokenKey),n.push("/login")}},228:function(n,e){},23:function(n,e,t){"use strict";var o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SECRET:"f9609888",REACT_APP_URL_API:"http://bi.nivel3ti.com.br:5000",REACT_APP_URL_APP:"http://bi.nivel3ti.com.br",REACT_APP_EMAIL_FROM:"enviodesenha@nivel3ti.com.br",REACT_APP_EMAIL_HOST:"smtp.sendgrid.net",REACT_APP_EMAIL_PORT:"587",REACT_APP_EMAIL_USER:"apikey",REACT_APP_EMAIL_PASS:"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",REACT_APP_CAPTCHA_KEY:"6LelQQsdAAAAAJ7nJzRED68GjRoRmRmojctiyD9q"}),r={envSecret:o.REACT_APP_SECRET,envApi:o.REACT_APP_URL_API,tokenKey:"@admin-Analyticdbi-Token"};e.a=r},240:function(n,e){},243:function(n,e){},265:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,l,s,d,b,j,u,p,x,h,O,g,f,m,v,y,P,w,_,A=t(0),k=t.n(A),E=t(141),C=t.n(E),R=t(18),S=t(7),T=t(9),F=t(4),I=t(5),z=Object(I.a)(o||(o=Object(F.a)(["\n    :root {\n        --color-sidebar: #214365;\n        --color-sidebar-hover: #00635F;\n        --color-background: #f8f8f8;\n        --color-background-card: #ffffff;\n        --color-background-title-bar: #f8f8f8;\n        --color-background-footer: #f8f8f8;\n        --color-background-input: #f2fafd;\n        --color-background-report-card: #f2fafd;\n        --color-font: #214365;\n        --color-icons: #00635F;\n        --color-white: #FFFFFF;\n        --color-grey: #d3cede;\n        --color-blue: #0180c3;\n        --color-green: #00635F;\n        --color-orange: #E85D04;\n        --color-red: #F55859;\n        --color-yellow: #f4d464;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        font-family: Arial, Helvetica, sans-serif;\n        margin: 0;\n\t\tpadding: 0;\n        background-color: var(--color-background);\n        color: var(--color-font);\n    }\n    h1, h2, h3, h4, h5, h6, p {\n        margin: 0;\n    }\n"]))),N=t(16),K=t(50),L=t(22),U=t(1),D=function(n){var e=n.component,t=n.redirect,o=Object(K.a)(n,["component","redirect"]);return Object(U.jsx)(S.b,Object(N.a)(Object(N.a)({},o),{},{render:function(n){return Object(L.e)()?Object(U.jsx)(S.a,{to:t}):Object(U.jsx)(e,Object(N.a)({},n))}}))},M=function(n){var e=n.component,t=n.redirect,o=Object(K.a)(n,["component","redirect"]);return Object(U.jsx)(S.b,Object(N.a)(Object(N.a)({},o),{},{render:function(n){return Object(L.e)()?Object(U.jsx)(e,Object(N.a)({},n)):Object(U.jsx)(S.a,{to:t})}}))},H=I.c.div(r||(r=Object(F.a)(["\n    display: flex;\n    background-color: var(--color-background);\n"]))),B=I.c.div(c||(c=Object(F.a)(["\n    min-height: calc(100vh - 60px);\n    width: 100%;\n    @media (max-width: 1140px) {\n        margin-top: 60px;\n    }\n"]))),G=I.c.div(i||(i=Object(F.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]))),J=I.c.div(a||(a=Object(F.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--color-white);\n    &:hover {\n        cursor: pointer;\n        opacity: 0.5;\n    }\n"]))),q=I.c.header(l||(l=Object(F.a)(["\n    height: 60px;\n    width: 100%;\n    background-color: var(--color-white);\n    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);\n    border-bottom: 1px solid var(--color-grey);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    @media (max-width: 1140px) {\n        position: fixed;\n    }\n"]))),V=Object(I.c)(J)(s||(s=Object(F.a)(["\n    transition: all ease 0.2s;\n    height: inherit;\n    & span {\n        margin-left: 20px;\n        font-size: 25px;\n        color: var(--color-sidebar);\n        display: flex;\n    }\n    @media (max-width: 1140px) {\n        & {\n            display: none;\n        }\n    }\n"]))),W=Object(I.c)(J)(d||(d=Object(F.a)(["\n    transition: all ease 0.2s;\n    & span {\n        color: var(--color-yellow);\n    }\n    &.menu-open {\n        margin-left: 240px;\n    }\n    @media (max-width: 2562px) {\n        & {\n            display: none;\n        }\n    }\n    @media (max-width: 1140px) {\n        & {\n            display: flex;\n        }\n    }\n"]))),X=I.c.button(b||(b=Object(F.a)(["\n    margin: 0 30px;\n    padding: 3px 25px;\n    border-radius: 30px;\n    border: none;\n    color: var(--color-white);\n    font-size: 14px;\n    background-color: var(--color-orange);\n    &:hover {\n        cursor: pointer;\n        opacity: 0.5;\n    }\n"]))),Q=I.c.div(j||(j=Object(F.a)(["\n    display: flex;\n    align-items: center;\n"]))),Y=(I.c.a(u||(u=Object(F.a)(["\n    height: 60px;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: var(--color-sidebar);\n    font-weight: bold;\n    padding: 0 15px;\n    & img {\n        height: 30px;\n        margin-right: 10px;\n    }\n"]))),t(25)),Z=t(52),$=Object(A.createContext)(),nn=function(n){var e=n.children,t=Object(A.useState)(!0),o=Object(Z.a)(t,2),r=o[0],c=o[1],i=Object(A.useState)({}),a=Object(Z.a)(i,2),l=a[0],s=a[1];return Object(U.jsx)($.Provider,{value:{toggle:r,setToggle:c,user:l,setUser:s},children:e})},en=function(){var n=Object(S.g)(),e=Object(A.useContext)($),t=e.toggle,o=e.setToggle;return Object(U.jsxs)(q,{children:[Object(U.jsx)(V,{onClick:function(){return o(!t)},children:Object(U.jsx)("span",{children:Object(U.jsx)(Y.a,{})})}),Object(U.jsx)(W,{onClick:function(){return o(!t)},className:t?"menu-open":"menu-closed",children:Object(U.jsx)("span",{children:Object(U.jsx)(Y.a,{})})}),Object(U.jsx)(Q,{children:Object(U.jsx)("div",{children:Object(U.jsx)(X,{onClick:function(){return Object(L.d)(n)},children:"Sair"})})})]})},tn=t(51),on=t.n(tn),rn=t(82),cn=I.c.section(p||(p=Object(F.a)(["\n    background-color: var(--color-white);\n    transition: all ease 0.2s;\n    z-index: 1;\n    max-width: 180px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 20px;\n    &.open { min-width: 180px; }\n    &.closed {\n        max-width: 80px;\n        padding: 0 5px;\n    }\n    & a {\n        text-decoration: none;\n    }\n    @media (max-width: 1140px) {\n        height: 100%;\n        position: fixed;\n        &.menu-closed {\n            transform: translateX(-100%);\n        }\n        &.menu-open {\n            transform: translateX(0);\n        }\n    }\n"]))),an=I.c.ul(x||(x=Object(F.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),ln=I.c.div(h||(h=Object(F.a)(["\n    transition: all ease 0.2s;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n    & .icone { width: 50px; }\n    &.open img.logo {\n        width: 150px;\n    }\n    &.open img.logo-mini {\n        display: none;\n    }\n    &.closed img.logo {\n        display: none;\n    }\n    &.closed img.logo-mini {\n        display: none;\n    }\n    &.open p {\n        color: var(--color-yellow);\n        font-size: 28px;\n        padding-left: 12px;\n        font-weight: 600;\n    }\n    &.closed p {\n        display: none;\n    }\n"]))),sn=Object(I.c)(R.b)(O||(O=Object(F.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 15px;\n    margin: 0 auto 30px auto;\n    transition: all ease 0.2s;\n    border-radius: 15px;\n    &:hover {\n        // background-color: var(--color-sidebar-hover);\n        cursor: pointer;\n    }\n    & img {\n        width: 80px;\n        height: 80px;\n        border-radius: 50%;\n        margin-bottom: 24px;\n    }\n    & img.closed {\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        margin-bottom: 0;\n    }\n    & div.closed {\n        display: none;\n    }\n"]))),dn=I.c.p(g||(g=Object(F.a)(["\n    font-size: 14px;\n    font-weight: bold;\n    text-align: center;\n    color: var(--color-green);\n"]))),bn=I.c.p(f||(f=Object(F.a)(["\n    font-size: 12px;\n    color: var(--color-green);\n    text-align: center;\n"]))),jn=I.c.li(m||(m=Object(F.a)(["\n    margin: 2px 0;\n    border-radius: 15px;\n    transition: all ease 0.2s;\n    &:hover {\n        background-color: var(--color-sidebar-hover);\n        color: var(--color-white) !important;\n        cursor: pointer;\n\n        & p, & span {\n            color: var(--color-white) !important;\n        }\n    }\n    & a {\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        padding: 20px 4px;\n        border-radius: 15px;\n        margin-bottom: 4px;\n        font-size: 16px;\n        font-weight: 500;\n    }\n    & a span {\n        padding: 0 10px;\n        font-size: 20px;\n        color: var(--color-icons);\n    }\n    &.open a p {\n        margin: 0;\n        color: var(--color-green);\n\n    }\n    &.closed a p {\n        display: none;\n    }\n    & .active-menu {\n        background-color: var(--color-sidebar-hover);\n        & span {\n            color: var(--color-white);\n        }\n        & p {\n            color: var(--color-white) !important;\n        }\n    }\n"]))),un=function(n){var e=Object(A.useContext)($).toggle;return Object(U.jsx)(jn,{className:e?"open":"closed",children:Object(U.jsxs)(R.c,{to:n.path,activeClassName:"active-menu",children:[Object(U.jsx)("span",{children:n.icon}),Object(U.jsx)("p",{children:n.label})]})})},pn=function(){var n=Object(A.useContext)($),e=n.toggle,t=n.user,o=n.setUser;Object(A.useEffect)((function(){Object(rn.a)(on.a.mark((function n(){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o(Object(L.b)().data);case 1:case"end":return n.stop()}}),n)})))()}),[]);t.file_url;var r=t.name,c=t.roles;return Object(U.jsx)(cn,{className:"\n        ".concat(e?"open":"closed","\n        ").concat(e?"menu-open":"menu-closed","\n      "),children:Object(U.jsxs)("div",{children:[Object(U.jsx)(R.b,{to:"/dashboard",children:Object(U.jsx)(ln,{className:e?"open":"closed",children:Object(U.jsx)("img",{className:"logo",src:"/logo-nivel-3-2.jpeg",alt:"unicom"})})}),Object(U.jsx)(sn,{to:"/profile",children:Object(U.jsxs)("div",{className:"".concat(e?"open":"closed"),children:[Object(U.jsx)(bn,{children:"Bem vindo"}),Object(U.jsx)(dn,{children:r})]})}),Object(U.jsxs)(an,{children:["admin"===c?Object(U.jsx)(un,{path:"/grupos",icon:Object(U.jsx)(Y.f,{}),label:"Relat\xf3rios"}):Object(U.jsx)(un,{path:"/relatorios",icon:Object(U.jsx)(Y.b,{}),label:"Relat\xf3rios"}),"admin"===c&&Object(U.jsx)(un,{path:"/usuarios",icon:Object(U.jsx)(Y.g,{}),label:"Usu\xe1rios"}),"admin"===c&&Object(U.jsx)(un,{path:"/cards",icon:Object(U.jsx)(Y.e,{}),label:"Cards"})]})]})})},xn=function(n){return function(e){return Object(U.jsxs)(H,{children:[Object(U.jsx)(pn,{}),Object(U.jsxs)(G,{children:[Object(U.jsx)(en,{}),Object(U.jsx)(B,{children:Object(U.jsx)(n,Object(N.a)({},e))})]})]})}},hn=I.c.section(v||(v=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  background-image: url('/edificio.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: auto auto;\n"]))),On=I.c.div(y||(y=Object(F.a)(["\n  flex: 3;\n  & div {\n    width: 100%;\n    height: 100%;\n  }\n  @media (max-width: 1440px) {\n    flex: 2;\n    & div {\n      background-position: left top;\n    }\n  }\n  @media (max-width: 960px) {\n    display: none;\n  }\n"]))),gn=I.c.div(P||(P=Object(F.a)(["\n  flex: 2;\n  padding: 25px;\n  display: flex;\n  justify-content: center;\n  "]))),fn=I.c.div(w||(w=Object(F.a)(["\n  padding: 15px;\n  background-color: var(--color-white);\n  max-width: 450px;\n  width: 100%;\n  border-radius: 50px;\n"]))),mn=I.c.div(_||(_=Object(F.a)(["\n  width: 100%;\n  padding: 25px 25px 50px 25px;\n  display: flex;\n  justify-content: center;\n  & img {\n    width: 200px;\n  }\n"]))),vn=function(n){return function(e){return Object(U.jsxs)(hn,{children:[Object(U.jsx)(gn,{children:Object(U.jsxs)(fn,{children:[Object(U.jsx)(mn,{children:Object(U.jsx)("img",{src:"/logo-nivel-3-2.jpeg",alt:"analitycdbi"})}),Object(U.jsx)(n,Object(N.a)({},e))]})}),Object(U.jsx)(On,{children:Object(U.jsx)("div",{})})]})}},yn=Object(T.a)((function(){return t.e(25).then(t.bind(null,496))})),Pn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,489))})),wn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,490))})),_n=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,491))})),An=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(13)]).then(t.bind(null,492))})),kn=Object(T.a)((function(){return t.e(24).then(t.bind(null,485))})),En=Object(T.a)((function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,497))})),Cn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,486))})),Rn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(23),t.e(22)]).then(t.bind(null,487))})),Sn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,488))})),Tn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,498))})),Fn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6)]).then(t.bind(null,499))})),In=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(9)]).then(t.bind(null,500))})),zn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,493))})),Nn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,494))})),Kn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,495))})),Ln=Object(T.a)((function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,501))})),Un=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,502))})),Dn=Object(T.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,503))})),Mn=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z,{}),Object(U.jsx)(nn,{children:Object(U.jsx)(R.a,{children:Object(U.jsxs)(S.d,{children:[Object(U.jsx)(D,{path:"/login",component:vn(Pn),redirect:"/dashboard"}),Object(U.jsx)(D,{path:"/esqueci-senha",component:vn(wn),redirect:"/dashboard"}),Object(U.jsx)(D,{path:"/recuperar-senha/:token",component:vn(_n),redirect:"/dashboard"}),Object(U.jsx)(M,{path:"/profile",component:xn(An),redirect:"/login"}),Object(U.jsx)(M,{path:"/grupos/:group_id/relatorios/:report_id/datasets/:dataset_id",component:xn(Rn),redirect:"/login"}),Object(U.jsx)(M,{path:"/grupos/:group_id/relatorios",component:xn(Cn),redirect:"/login"}),Object(U.jsx)(M,{path:"/grupos",component:xn(En),redirect:"/login"}),Object(U.jsx)(M,{path:"/cards/:id/upload",component:xn(In),redirect:"/login"}),Object(U.jsx)(M,{path:"/cards/:id/editar",component:xn(Fn),redirect:"/login"}),Object(U.jsx)(M,{path:"/cards/cadastrar",component:xn(Tn),redirect:"/login"}),Object(U.jsx)(M,{path:"/cards",component:xn(Sn),redirect:"/login"}),Object(U.jsx)(M,{path:"/relatorios",component:xn(Cn),redirect:"/login"}),Object(U.jsx)(M,{path:"/usuarios/:id/relatorios/:report_id/editar",component:xn(Dn),redirect:"/login"}),Object(U.jsx)(M,{path:"/usuarios/:id/relatorios/cadastrar",component:xn(Un),redirect:"/login"}),Object(U.jsx)(M,{path:"/usuarios/:id/relatorios",component:xn(Ln),redirect:"/login"}),Object(U.jsx)(M,{path:"/usuarios/:id/editar",component:xn(Kn),redirect:"/login"}),Object(U.jsx)(M,{path:"/usuarios/cadastrar",component:xn(Nn),redirect:"/login"}),Object(U.jsx)(M,{path:"/usuarios",component:xn(zn),redirect:"/login"}),Object(U.jsx)(M,{path:"/",component:kn,redirect:"/login"}),Object(U.jsx)(S.b,{path:"*",children:Object(U.jsx)(yn,{})})]})})})]})};C.a.render(Object(U.jsx)(k.a.StrictMode,{children:Object(U.jsx)(Mn,{})}),document.getElementById("root"))}},[[265,4,5]]]);
//# sourceMappingURL=main.222b48bd.chunk.js.map