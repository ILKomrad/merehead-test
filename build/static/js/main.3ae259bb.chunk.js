(this["webpackJsonpmerehead-test"]=this["webpackJsonpmerehead-test"]||[]).push([[0],{151:function(e,t,r){},153:function(e,t,r){},156:function(e,t,r){},224:function(e,t,r){},242:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(34),s=r.n(c),a=r(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(151);var u=r(52),i=r(22);function o(e){Object(n.useEffect)((function(){document.title=e}),[])}function l(){var e=Object(i.h)();return+new URLSearchParams(e.search).get("page")||1}var d=r(245),j=r(62),b=Object(j.a)({sortComparer:function(e,t){return t.id-e.id}}),f=b.getInitialState({error:null,state:"idle"}),p=b.getSelectors((function(e){return e.users})),O=p.selectIds,m=p.selectById,h=Object(j.b)({name:"users",initialState:f,reducers:{},extraReducers:{"users/fetchUsers/fulfilled":function(e,t){e.state="succeeded",e.error=null,b.upsertMany(e,t.payload)},"users/fetchUsers/rejected":function(e,t){e.state="error",e.error=t.payload},"users/addUser/fulfilled":function(e,t){b.addOne(e,t.payload)},"users/addUser/rejected":function(e,t){},"users/editUser/fulfilled":function(e,t){var r=t.payload.id,n=e.entities[r];if(n)for(var c in t.payload)n[c]=t.payload[c]},"users/deleteUser/fulfilled":function(e,t){b.setAll(e,t.payload)},"users/deleteUser/rejected":function(e,t){}}}).reducer,x=r(136),v=(r(153),r(7));function y(e){var t=e.id,r=Object(a.c)((function(e){return m(e,t)})),n=Object(a.b)(),c=Object(i.g)();return Object(v.jsxs)("article",{className:"users-list__item user",children:[Object(v.jsx)("img",{className:"user__img",src:r.avatar||"./images/no-user-image.jpg"}),Object(v.jsxs)("div",{className:"user__content",children:[Object(v.jsxs)("div",{className:"user__info",children:[Object(v.jsxs)("h3",{className:"user__name",children:[r.surname," ",r.name]}),Object(v.jsx)("p",{className:"user__desc",children:r.desc})]}),Object(v.jsxs)("footer",{children:[Object(v.jsx)(x.a,{type:"primary",onClick:function(){c.push("/editUser/".concat(r.id))},children:"edit"}),Object(v.jsx)(x.a,{danger:!0,type:"primary",onClick:function(){n({type:"DELETE_USER",payload:t})},children:"delete"})]})]})]})}var g=r(248);r(155);function U(e){var t=e.countPages,r=Object(i.h)(),n=Object(i.g)(),c=l();return Object(v.jsx)("div",{className:"paginator col-auto",children:Object(v.jsx)(g.a,{current:c,onChange:function(e){var t=new URLSearchParams(r.search);t.set("page",e),n.push(r.pathname+"?"+t.toString())},total:t,pageSize:1})})}var w=function(e){return e.settings.maxItemsOnPage},E=Object(j.b)({name:"settings",initialState:{serverUrl:"",maxItemsOnPage:5},reducers:{},extraReducers:{"settings/get/fulfilled":function(e,t){e.serverUrl=t.payload.serverUrl,e.maxItemsOnPage=t.payload.maxItemsOnPage},"settings/get/rejected":function(e,t){}}}).reducer;r(156);function S(){var e,t=Object(a.c)(w),r=Object(a.c)((function(e){return e.users.error})),c=l(),s=Object(a.c)(O),u=Object(n.useMemo)((function(){var e=(c-1)*t;return s.slice(e,e+t)}),[c,s,t]),i=Math.ceil(s.length/t);return e=r?Object(v.jsx)("div",{children:r}):u.map((function(e){return Object(v.jsx)(y,{id:e},e)})),Object(v.jsxs)("section",{className:"users",children:[Object(v.jsx)(d.a,{justify:"center",children:Object(v.jsx)("h3",{className:"title-md",children:"users"})}),Object(v.jsx)("div",{className:"usersList",children:e}),Object(v.jsx)(d.a,{justify:"center",children:Object(v.jsx)(U,{countPages:i})})]})}var _=r(50),k=r(137),I=r(247),T=r(249);function N(e){var t=e.title,r=e.btnTitle,n=e.onSubmit,c=e.initialValues,s=I.a.useForm(),a=Object(k.a)(s,1)[0];return Object(v.jsxs)(I.a,Object(_.a)(Object(_.a)({form:a},{labelCol:{span:24}}),{},{onFinish:function(e){n(e),a.resetFields()},name:"userForm",initialValues:c,children:[Object(v.jsx)("h3",{className:"form-title",children:t}),Object(v.jsx)(I.a.Item,{name:"name",label:"name",rules:[{required:!0,message:"Please input your name"}],children:Object(v.jsx)(T.a,{placeholder:"Input your name"})}),Object(v.jsx)(I.a.Item,{name:"surname",label:"surname",rules:[{required:!0,message:"Please input your surname"}],children:Object(v.jsx)(T.a,{placeholder:"Input your surname"})}),Object(v.jsx)(I.a.Item,{name:"desc",label:"description",children:Object(v.jsx)(T.a.TextArea,{placeholder:"Input your desc"})}),Object(v.jsx)(I.a.Item,{children:Object(v.jsx)(x.a,{type:"primary",htmlType:"submit",children:r||"Submit"})})]}))}function R(){var e=Object(a.b)();return Object(v.jsx)(N,{btnTitle:"Add",title:"Add user",onSubmit:function(t){e({type:"ADD_USER",payload:t})}})}var P=r(246);function C(){return o("Users"),Object(v.jsx)("main",{children:Object(v.jsxs)(d.a,{justify:"center",gutter:16,children:[Object(v.jsx)(P.a,{xs:23,sm:18,md:8,children:Object(v.jsx)(R,{})}),Object(v.jsx)(P.a,{xs:23,md:12,children:Object(v.jsx)(S,{})})]})})}function F(e){var t=Object(a.b)(),r=Object(i.g)();return e.id?Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(N,{btnTitle:"Save",title:"Edit user",initialValues:e,onSubmit:function(n){r.push("/"),t({type:"EDIT_USER",payload:Object(_.a)(Object(_.a)({},n),{id:e.id})})}}),Object(v.jsx)(u.b,{to:"/",children:"Back"})]}):Object(v.jsx)("div",{})}function L(e){var t=e.match;o("Edit user");var r=t.params.userId,n=Object(a.c)((function(e){return m(e,r)}));return Object(v.jsx)("main",{children:Object(v.jsx)(d.a,{justify:"center",gutter:16,children:Object(v.jsx)(P.a,{xs:23,sm:18,md:8,children:Object(v.jsx)(F,Object(_.a)({},n))})})})}r(224);function A(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.settings.serverUrl})),r=Object(v.jsx)("div",{children:"loading..."});return Object(n.useEffect)((function(){e({type:"FETCH_SETTINGS"})}),[e]),t&&(e({type:"FETCH_ALL_USERS"}),r=Object(v.jsx)(u.a,{children:Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{exact:!0,path:"/",children:Object(v.jsx)(C,{})}),Object(v.jsx)(i.b,{exact:!0,path:"/editUser/:userId",component:L}),Object(v.jsx)(i.a,{to:"/"})]})})),r}var D=r(31),B=r(139),H=Object(D.b)({settings:E,users:h}),M=r(20),V=r.n(M),q=r(25),G=r(130),J=r(131),W=r(132),z=r(133),K=r.n(z),$=function(){function e(){Object(J.a)(this,e)}return Object(W.a)(e,null,[{key:"send",value:function(){var t=Object(G.a)(V.a.mark((function t(r){var n,c,s,a,u;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.method,c=r.url,s=r.body,a={method:n,url:c,headers:e.headers},s&&(a.data=s),t.prev=3,t.next=6,K()(a);case 6:if("OK"!==(u=t.sent).statusText){t.next=9;break}return t.abrupt("return",u.data);case 9:throw new Error(u.statusText);case 12:return t.prev=12,t.t0=t.catch(3),t.abrupt("return",Promise.reject("Connection error"));case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()}]),e}();$.headers={"content-type":"application/json"};var Q=V.a.mark(Y),X=V.a.mark(Z);function Y(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)("FETCH_SETTINGS",Z);case 2:case"end":return e.stop()}}),Q)}function Z(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.b)($.send,{method:"get",url:"/settings.json"});case 3:return e=t.sent,t.next=6,Object(q.c)({type:"settings/get/fulfilled",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(q.c)({type:"settings/get/rejected",payload:t.t0});case 12:case"end":return t.stop()}}),X,null,[[0,8]])}var ee=Y,te=r(142),re=["method","url","body"],ne=V.a.mark(oe),ce=V.a.mark(le),se=V.a.mark(de),ae=V.a.mark(je),ue=V.a.mark(be),ie=V.a.mark(fe);function oe(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)("FETCH_ALL_USERS",de);case 2:return e.next=4,Object(q.e)("ADD_USER",je);case 4:return e.next=6,Object(q.e)("EDIT_USER",be);case 6:return e.next=8,Object(q.e)("DELETE_USER",fe);case 8:case"end":return e.stop()}}),ne)}function le(e){var t,r,n,c,s,a;return V.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.method,r=e.url,n=e.body,c=Object(te.a)(e,re),u.next=3,Object(q.d)();case 3:return s=u.sent,u.prev=4,u.next=7,Object(q.b)($.send,{method:t,url:s.settings.serverUrl+r,body:n});case 7:return a=u.sent,u.next=10,Object(q.c)({type:c.fulfilled,payload:a});case 10:u.next=16;break;case 12:return u.prev=12,u.t0=u.catch(4),u.next=16,Object(q.c)({type:c.rejected,payload:u.t0});case 16:case"end":return u.stop()}}),ce,null,[[4,12]])}function de(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.b)(le,{method:"get",url:"api/users",fulfilled:"users/fetchUsers/fulfilled",rejected:"users/fetchUsers/rejected"});case 2:case"end":return e.stop()}}),se)}function je(e){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.b)(le,{method:"post",url:"api/users",body:e.payload,fulfilled:"users/addUser/fulfilled",rejected:"users/addUser/rejected"});case 2:case"end":return t.stop()}}),ae)}function be(e){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.b)(le,{method:"put",url:"api/user/".concat(e.payload.id),body:e.payload,fulfilled:"users/editUser/fulfilled",rejected:"users/editUser/rejected"});case 2:case"end":return t.stop()}}),ue)}function fe(e){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.b)(le,{method:"delete",url:"api/user/".concat(e.payload),fulfilled:"users/deleteUser/fulfilled",rejected:"users/deleteUser/rejected"});case 2:case"end":return t.stop()}}),ie)}var pe=V.a.mark(Oe);function Oe(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([ee(),oe()]);case 2:case"end":return e.stop()}}),pe)}var me=Object(B.a)(),he=Object(D.d)(H,Object(D.a)(me));me.run(Oe),s.a.render(Object(v.jsx)(a.a,{store:he,children:Object(v.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[242,1,2]]]);
//# sourceMappingURL=main.3ae259bb.chunk.js.map