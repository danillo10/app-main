(this.webpackJsonpunicom=this.webpackJsonpunicom||[]).push([[11],{266:function(n,r,e){"use strict";e.d(r,"a",(function(){return _})),e.d(r,"d",(function(){return S})),e.d(r,"c",(function(){return z})),e.d(r,"e",(function(){return C})),e.d(r,"f",(function(){return q})),e.d(r,"g",(function(){return A})),e.d(r,"b",(function(){return D}));var t,c,a,o,i,u,s,d,l,p,b,f,j,x,v,g,O,h=e(4),m=e(5),w=e(18),k=m.c.button(t||(t=Object(h.a)(["\n    align-items: center;\n    border: none;\n    border-radius: 30px;\n    color: var(--color-white);\n    display: flex;\n    font-size: 18px;\n    font-weight: bold;\n    justify-content: center;\n    transition: all 0.3s;\n    &:hover {\n        opacity: 0.5;\n        cursor: pointer;\n    }\n    &:focus {\n        outline: 0;\n    }\n"]))),y=Object(m.c)(k)(c||(c=Object(h.a)(["\n    padding: 10px 25px;\n"]))),_=Object(m.c)(y)(a||(a=Object(h.a)(["\n    background-color: var(--color-orange);\n"]))),S=(Object(m.c)(y)(o||(o=Object(h.a)(["\n    background-color: var(--color-green);\n    color: var(--color-font);\n"]))),Object(m.c)(y)(i||(i=Object(h.a)(["\n    background-color: var(--color-red);\n"])))),z=Object(m.c)(y)(u||(u=Object(h.a)(["\n    background-color: var(--color-orange);\n"]))),C=(Object(m.c)(y)(s||(s=Object(h.a)(["\n    background-color: var(--color-yellow);\n    color: var(--color-blue);\n"]))),Object(m.c)(y)(d||(d=Object(h.a)(["\n    background-color: var(--color-white);\n    color: var(--color-font);\n"])))),F=Object(m.c)(w.b)(l||(l=Object(h.a)(["\n    align-items: center;\n    border: none;\n    border-radius: 30px;\n    color: var(--color-white);\n    display:flex;\n    font-size: 18px;\n    font-weight: bold;\n    justify-content: center;\n    transition: all 0.3s;\n    &:hover {\n        opacity: 0.5;\n        cursor: pointer;\n    }\n    &:focus {\n        outline: 0;\n    }\n"]))),N=Object(m.c)(F)(p||(p=Object(h.a)(["\n    padding: 10px 25px;\n    text-decoration: none;\n"]))),E=Object(m.c)(F)(b||(b=Object(h.a)(["\n    padding: 5px 25px;\n"]))),q=Object(m.c)(N)(f||(f=Object(h.a)(["\n    background-color: var(--color-green);\n"]))),A=(Object(m.c)(N)(j||(j=Object(h.a)(["\n    background-color: var(--color-yellow);\n    color: var(--color-blue);\n"]))),Object(m.c)(E)(x||(x=Object(h.a)(["\n    background-color: var(--color-green);\n    color: var(--color-font);\n"]))),Object(m.c)(E)(v||(v=Object(h.a)(["\n    background-color: var(--color-orange);\n"])))),D=(Object(m.c)(E)(g||(g=Object(h.a)(["\n    background-color: var(--color-yellow);\n    color: var(--color-blue);\n"]))),m.c.div(O||(O=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding-top: 30px;\n"]))))},267:function(n,r,e){"use strict";var t=e(51),c=e.n(t),a=e(82),o=e(278),i=e.n(o),u=e(23),s=e(22),d=i.a.create({baseURL:u.a.envApi});d.interceptors.request.use(function(){var n=Object(a.a)(c.a.mark((function n(r){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=Object(s.a)())&&(r.headers.Authorization="".concat(e)),n.abrupt("return",r);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()),r.a=d},268:function(n,r,e){"use strict";e.d(r,"a",(function(){return t}));var t=function(n){return n.response.data.errors.message}},269:function(n,r,e){"use strict";e.d(r,"e",(function(){return j})),e.d(r,"d",(function(){return v})),e.d(r,"f",(function(){return g})),e.d(r,"a",(function(){return O})),e.d(r,"c",(function(){return w})),e.d(r,"g",(function(){return y})),e.d(r,"b",(function(){return _}));var t,c,a,o,i,u,s,d,l,p,b=e(4),f=e(5),j=f.c.div(t||(t=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    color: var(--color-font);\n    & div {\n        color: var(--color-red);\n        height: 8px;\n        margin: 0  0 4px 16px;\n        font-size: 12px;\n    }\n"]))),x=f.c.div(c||(c=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 16px;\n    & .variant {\n        border: 1px solid var(--color-font);\n        outline: 0;\n        color: var(--color-input);\n    }\n"]))),v=Object(f.c)(x)(a||(a=Object(b.a)(["\n    & input {\n        border: 1px solid var(--color-grey);\n        color: var(--color-font);\n        font-size: 16px;\n        padding: 10px 20px;\n        margin-top: 8px;\n        border-radius: 20px;\n        background-color: var(--color-background-input);\n    }\n    & input:focus {\n        outline: 0;\n    }\n"]))),g=Object(f.c)(x)(o||(o=Object(b.a)(["\n    & select {\n        border: 1px solid var(--color-grey);\n        color: var(--color-font);\n        font-size: 16px;\n        padding: 10px 20px;\n        margin-top: 8px;\n        border-radius: 20px;\n        background-color: var(--color-background-input);\n    }\n    & input:focus {\n        outline: 0;\n    }\n"]))),O=f.c.div(i||(i=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    padding: 10px 0;\n    & input {\n        margin-right: 5px;\n    }\n"]))),h=Object(f.b)(u||(u=Object(b.a)(["\n    border-color: green;\n"]))),m=Object(f.b)(s||(s=Object(b.a)(["\n    border-color: red;\n"]))),w=f.c.div.attrs({className:"dropzone"})(d||(d=Object(b.a)(["\n    border-radius: 10px;\n    border: 1px solid var(--color-grey);\n    cursor: pointer;\n    transition: height 0.2s ease;\n    background-color: var(--color-white);\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ","\n    ","\n"])),(function(n){return n.idDragActive&&h}),(function(n){return n.isDragReject&&m})),k={default:"var(--color-font)",error:"var(--color-red)",success:"var(--color-green)"},y=f.c.p(l||(l=Object(b.a)(["\n    display: flex;\n    color: ",";\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    margin: 0 !important;\n"])),(function(n){return k[n.type||"default"]})),_=f.c.div(p||(p=Object(b.a)(["\n    background-color: var(--color-background-input);\n    border: 1px solid var(--color-grey);\n    max-width: 450px;\n    width: 100%;\n    border-radius: 20px;\n    padding: 20px;\n    & img {\n        width: 100%;\n        margin-top: 20px;\n        border-radius: 10px;\n    }\n"])))},270:function(n,r,e){"use strict";var t,c,a,o=e(18),i=e(4),u=e(5),s=u.c.div(t||(t=Object(i.a)(["\n    background-color: var(--color-sidebar);\n"]))),d=u.c.div(c||(c=Object(i.a)(["\n    background-color: var(--color-background-title-bar);\n    color: var(--color-blue);\n    height: 80px;\n    padding-left: 60px;\n    display: flex;\n    align-items: center;\n    & h1 {\n        font-size: 24px;\n        color: var(--color-sidebar);\n    }\n"]))),l=u.c.ul(a||(a=Object(i.a)(["\n    padding: 2px 0;\n    list-style: none;\n    margin: 0 auto;\n    & li {\n        display: inline;\n        font-size: 16px;\n    }\n    & li + li:before {\n        color: var(--color-font);\n    }\n    & li a {\n        color: var(--color-blue);\n        text-decoration: none;\n        padding: 8px 8px 8px 0;\n        border-radius: 5px;\n    }\n    & li {\n        color: var(--color-font);\n    }\n    & li a:hover {\n        text-decoration: none;\n    }\n"]))),p=e(1);r.a=function(n){return Object(p.jsx)(s,{children:Object(p.jsx)(d,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:n.label}),Object(p.jsxs)(l,{children:[n.breadcrumb&&n.breadcrumb.map((function(n,r){return Object(p.jsxs)("li",{children:[Object(p.jsx)(o.b,{to:n.path,children:n.label}),"/"]},r)})),Object(p.jsx)("li",{children:n.currentPage})]})]})})})}},271:function(n,r,e){"use strict";var t,c=e(4),a=e(5).c.div(t||(t=Object(c.a)(["\n    width: 100%;\n    padding: 0 15px 15px 15px;\n"]))),o=e(1);r.a=function(n){return Object(o.jsx)(a,{children:n.children})}},272:function(n,r,e){"use strict";var t,c=e(4),a=e(5).c.div(t||(t=Object(c.a)(["\n    background-color: var(--color-background-card);\n    margin: 0 15px 15px 15px;\n    border-radius: 20px;\n    color: var(--color-font);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),o=e(1);r.a=function(n){return Object(o.jsx)(a,{children:n.children})}},273:function(n,r,e){"use strict";var t,c=e(4),a=e(5).c.div(t||(t=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid var(--color-grey);\n    color: var(--color-font);\n    & p {\n        padding: 15px 30px;\n        flex-grow: 1;\n        font-size: 20px;\n        line-height: 24px;\n        font-weight: bold;\n    }\n    & div {\n        padding: 15px;\n    }\n    @media (max-width: 1140px) {\n        & {\n            flex-direction: column;\n        }\n    }\n"]))),o=e(1);r.a=function(n){return Object(o.jsxs)(a,{children:[Object(o.jsx)("p",{children:n.title}),Object(o.jsx)("div",{children:n.children})]})}},274:function(n,r,e){"use strict";var t=e(269),c=e(1);r.a=function(n){var r=n.type,e=n.name,a=n.label,o=n.flexGrow,i=n.readOnly,u=n.variant,s=n.formik;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(t.d,{className:o||null,children:[Object(c.jsxs)(t.e,{children:[Object(c.jsx)("label",{htmlFor:e,children:a}),Object(c.jsx)("div",{children:s.touched[e]&&s.errors[e]?s.errors[e]:null})]}),Object(c.jsx)("input",{type:r||"text",id:e,name:e,readOnly:i,className:u,value:s.values[e],onChange:s.handleChange})]})})}},275:function(n,r,e){"use strict";var t,c=e(4),a=e(5).c.div(t||(t=Object(c.a)(["\n    &.alert-blue,\n    &.alert-red,\n    &.alert-green,\n    &.alert-orange {\n        border-radius: 8px;\n        padding: 12px 16px 12px 24px;\n        margin-bottom: 16px;\n    }\n    &.alert-red {\n        color: #721c24;\n        border: 1px solid #721c24;\n        background-color: #f8d7da;\n    }\n    &.alert-green {\n        color: #155724;\n        border: 1px solid #155724;\n        background-color: #d4edda;\n    }\n    &.alert-blue {\n        color: #004085;\n        border: 1px solid #004085;\n        background-color: #cce5ff;\n    }\n    &.alert-orange {\n        color: #856404;\n        border: 1px solid #856404;\n        background-color: #fff3cd;\n    }\n"]))),o=e(1);r.a=function(n){var r=n.formMessages,e=n.alert;return r.length>0&&Object(o.jsx)(a,{className:e,children:r})}},276:function(n,r,e){"use strict";var t,c=e(4),a=e(5).c.div(t||(t=Object(c.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    width: 24px;\n    height: 24px;\n    border: 5px solid #f3f3f3;\n    border-top: 5px solid var(--color-blue);\n    border-radius: 50%;\n    animation: spin 2s linear infinite;\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"]))),o=e(1);r.a=function(){return Object(o.jsx)(a,{})}},277:function(n,r,e){"use strict";var t=e(266),c=e(1);r.a=function(n){return Object(c.jsx)(t.a,{type:n.type,onClick:n.onClick,children:n.children})}},280:function(n,r,e){"use strict";var t=e(266),c=e(1);r.a=function(n){return Object(c.jsx)(t.b,{children:n.children})}},281:function(n,r,e){"use strict";var t,c=e(4),a=e(5).c.div(t||(t=Object(c.a)(["\n  padding: 30px 15px 15px;\n"]))),o=e(1);r.a=function(n){return Object(o.jsx)(a,{children:n.children})}},288:function(n,r,e){"use strict";e.d(r,"a",(function(){return i})),e.d(r,"d",(function(){return u})),e.d(r,"b",(function(){return s})),e.d(r,"c",(function(){return d}));var t=e(51),c=e.n(t),a=e(82),o=e(267),i=function(){var n=Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("/powerbi/groups");case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=Object(a.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("/powerbi/groups/".concat(r,"/reports"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=Object(a.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.post("/powerbi/reports/aad",r);case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=Object(a.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.post("/powerbi/reports/embed",r);case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},290:function(n,r,e){"use strict";e.d(r,"e",(function(){return u})),e.d(r,"c",(function(){return s})),e.d(r,"f",(function(){return d})),e.d(r,"g",(function(){return l})),e.d(r,"b",(function(){return p})),e.d(r,"a",(function(){return b})),e.d(r,"d",(function(){return f}));var t=e(51),c=e.n(t),a=e(82),o=e(267),i=e(268),u=function(){var n=Object(a.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.post("/report-cards/list-by-firm",{firm_id:r});case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=Object(a.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("/report-cards/".concat(r));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=Object(a.a)(c.a.mark((function n(r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.post("/report-cards/list-by-firm",{firm_id:r});case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(r,e,t,a){var u,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u={firm_id:t,group_id:e.group_id,report_id:e.report_id,dataset_id:e.dataset_id,name:e.name},n.prev=1,n.next=4,o.a.post("/report-cards/store",u);case 4:return s=n.sent,n.abrupt("return",r.push("/cards/".concat(s.data.id,"/upload")));case 8:n.prev=8,n.t0=n.catch(1),a({messages:Object(i.a)(n.t0),alert:"alert-orange"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(r,e,t,c){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(r,e,t,a){var u;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u={group_id:e.group_id,report_id:e.report_id,dataset_id:e.dataset_id,name:e.name},n.prev=1,n.next=4,o.a.put("/report-cards/".concat(t,"/update"),u);case 4:return n.abrupt("return",r.push("/cards"));case 7:n.prev=7,n.t0=n.catch(1),a({messages:Object(i.a)(n.t0),alert:"alert-orange"});case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(r,e,t,c){return n.apply(this,arguments)}}(),b=function(){var n=Object(a.a)(c.a.mark((function n(r,e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.delete("/report-cards/".concat(r));case 2:return n.abrupt("return",e.push("/cards"));case 3:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),f=function(){var n=Object(a.a)(c.a.mark((function n(r,e){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("file",r),n.prev=2,n.next=5,o.a.put("/report-cards/".concat(e,"/upload"),t);case 5:return n.abrupt("return");case 8:return n.prev=8,n.t0=n.catch(2),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(r,e){return n.apply(this,arguments)}}()},291:function(n,r,e){"use strict";var t=e(269),c=e(1);r.a=function(n){var r=n.name,e=n.label,a=n.flexGrow,o=n.readOnly,i=n.variant,u=n.formik,s=n.children;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(t.f,{className:a||null,children:[Object(c.jsxs)(t.e,{children:[Object(c.jsx)("label",{htmlFor:r,children:e}),Object(c.jsx)("div",{children:u.touched[r]&&u.errors[r]?u.errors[r]:null})]}),Object(c.jsx)("select",{id:r,name:r,readOnly:o,className:i,value:u.values[r],onChange:u.handleChange,children:s})]})})}},498:function(n,r,e){"use strict";e.r(r);var t=e(51),c=e.n(t),a=e(82),o=e(52),i=e(0),u=e(7),s=e(283),d=e(284),l=e(22),p=e(270),b=e(271),f=e(272),j=e(273),x=e(274),v=e(277),g=e(275),O=e(276),h=e(281),m=e(280),w=e(290),k=function(n){return{name:n.string().required("Campo obrigat\xf3rio"),group_id:n.string().required("Campo obrigat\xf3rio"),report_id:n.string().required("Campo obrigat\xf3rio")}},y=e(288),_=e(291),S=e(1);r.default=function(){var n=Object(i.useState)({}),r=Object(o.a)(n,2),e=r[0],t=r[1],z=Object(i.useState)([]),C=Object(o.a)(z,2),F=C[0],N=C[1],E=Object(i.useState)([]),q=Object(o.a)(E,2),A=q[0],D=q[1];Object(i.useEffect)((function(){t(Object(l.b)().data)}),[]),Object(i.useEffect)((function(){Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=N,n.next=3,Object(y.a)();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[]);var G=Object(i.useState)({messages:[],alert:""}),R=Object(o.a)(G,2),V=R[0],J=R[1],M=Object(u.g)(),P=Object(s.a)({initialValues:{name:"",group_id:"",report_id:"",dataset_id:""},validationSchema:d.object(k(d)),onSubmit:function(){return Object(w.g)(M,P.values,e.firm_id,J)}});Object(i.useEffect)((function(){Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!P.values.group_id){n.next=6;break}return n.t0=D,n.next=4,Object(y.d)(P.values.group_id);case 4:n.t1=n.sent,(0,n.t0)(n.t1);case 6:case"end":return n.stop()}}),n)})))()}),[P.values.group_id]),Object(i.useEffect)((function(){P.values.report_id&&(P.setFieldValue("name",A.find((function(n){return n.id===P.values.report_id})).name),P.setFieldValue("dataset_id",A.find((function(n){return n.id===P.values.report_id})).datasetId))}),[P.values.report_id]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a,{label:"Cards",currentPage:""}),Object(S.jsx)(b.a,{children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(j.a,{title:"Cadastrar"}),Object(S.jsx)(b.a,{children:Object(S.jsx)(h.a,{children:Object(S.jsxs)("form",{onSubmit:P.handleSubmit,children:[Object(S.jsx)(g.a,{formMessages:V.messages,alert:V.alert}),Object(S.jsxs)(_.a,{name:"group_id",label:"Grupos",formik:P,children:[Object(S.jsx)("option",{value:"",children:"Selecione..."}),F.map((function(n){return Object(S.jsx)("option",{value:n.id,children:n.name},n.id)}))]}),Object(S.jsxs)(_.a,{name:"report_id",label:"Relat\xf3rios",formik:P,children:[Object(S.jsx)("option",{value:"",children:"Selecione..."}),A.map((function(n){return Object(S.jsx)("option",{value:n.id,children:n.name},n.id)}))]}),Object(S.jsx)(x.a,{name:"name",label:"Nome",formik:P}),Object(S.jsx)(m.a,{children:Object(S.jsx)(v.a,{type:"submit",disabled:P.isSubmitting,children:P.isSubmitting?Object(S.jsx)(O.a,{}):"Enviar"})})]})})})]})})]})}}}]);
//# sourceMappingURL=11.be410953.chunk.js.map