"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[552],{4644:function(t,n,r){r.d(n,{Gr:function(){return h},II:function(){return p},gx:function(){return f}});var e=r(8683),s=r(5987),i=(r(2791),r(1170)),o=r(6139),u=r(184),a=["input","meta","children"],c=["child","input","meta"],l=["child","input","meta"],d=function(t){t.input;var n=t.meta,r=n.touched,e=n.error,o=t.children,c=((0,s.Z)(t,a),r&&e);return(0,u.jsxs)("div",{className:"".concat(i.Z.formControl," ").concat(c&&i.Z.error),children:[(0,u.jsx)("div",{children:o}),c&&(0,u.jsx)("span",{children:e})]})},f=function(t){t.child;var n=t.input,r=(t.meta,(0,s.Z)(t,c));return(0,u.jsx)(d,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("textarea",(0,e.Z)((0,e.Z)({},n),r))}))},p=function(t){t.child;var n=t.input,r=(t.meta,(0,s.Z)(t,l));return(0,u.jsx)(d,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("input",(0,e.Z)((0,e.Z)({},n),r))}))},h=function(t,n,r,e,s,i){return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,{name:n,component:e,type:r,placeholder:t,validate:s}),i]})}},6723:function(t,n,r){r.d(n,{S:function(){return c},w:function(){return a}});r(2791);var e=r(6139),s=r(704),i=r(545),o=r(4644),u=r(184),a=(0,i.DT)(10),c=(0,s.Z)({form:"newPostForm"})((function(t){return(0,u.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,u.jsx)("div",{children:(0,u.jsx)(e.Z,{name:"newPost",component:o.gx,type:"text",placeholder:"New post",validate:[i.lp,a]})}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{children:"Add post"})})]})}))},552:function(t,n,r){r.r(n),r.d(n,{ProfileContainerAPI:function(){return D}});var e=r(8683),s=r(5671),i=r(3144),o=r(136),u=r(2882),a=r(2791),c="Profile_profile__5NpeN",l="ProfileInfo_profileInfo__-24vO",d="ProfileInfo_content_image__6Fymo",f="ProfileInfo_description__6yZFt",p=r(4420),h=r(885),m=r(184),x=function(t){var n=(0,a.useState)(!1),r=(0,h.Z)(n,2),e=r[0],s=r[1],i=(0,a.useState)(t.status),o=(0,h.Z)(i,2),u=o[0],c=o[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,m.jsx)("div",{children:e?(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},type:"text",value:u})}):(0,m.jsx)("div",{children:(0,m.jsx)("span",{onDoubleClick:function(){s(!0)},children:u||"No status"})})})},j=function(t){return t.profile?(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("div",{className:d}),(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("img",{src:t.profile.photos?t.profile.photos.small:"",alt:"Profile ava"}),(0,m.jsx)(x,{status:t.status,updateStatus:t.updateStatus})]})]}):(0,m.jsx)(p.p,{})},v="MyPosts_posts__3MT21",_="Post_post__RM2QY",Z=function(t){return(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)("img",{src:"https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg",alt:""}),(0,m.jsx)("span",{children:t.message}),(0,m.jsxs)("div",{children:["Likes: ",t.likes]})]})},g=r(6723),S=r(8687),y=r(8949),P=a.memo((function(){console.log("1");var t=(0,S.I0)(),n=(0,S.v9)((function(t){return t.profileReducer.myPostsData})).map((function(t){return(0,m.jsx)(Z,{id:t.id,message:t.message,likes:t.likes},t.id)}));return(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("h3",{children:"My posts"}),(0,m.jsx)("div",{children:(0,m.jsx)(g.S,{onSubmit:function(n){t((0,y.Wl)(n.newPost)),n.newPost=""}})}),(0,m.jsx)("div",{children:n})]})})),N=function(t){return(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)(j,{authed:t.authed,status:t.status,profile:t.profile,updateStatus:t.updateStatus}),(0,m.jsx)(P,{})]})},C=r(7781),k=r(9271),I=r(7284),w=function(t){(0,o.Z)(r,t);var n=(0,u.Z)(r);function r(){return(0,s.Z)(this,r),n.apply(this,arguments)}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=null!==this.props.authed?this.props.authed.toString():"")||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return(0,m.jsx)(N,(0,e.Z)((0,e.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),r}(a.Component),D=(0,C.qC)((0,S.$j)((function(t){return{profile:t.profileReducer.profile,status:t.profileReducer.status,authed:t.authReducer.userID}}),{getUserProfile:y.om,getUserStatus:y.xD,updateStatus:y.NN}),k.EN,I.D)(w)},7284:function(t,n,r){r.d(n,{D:function(){return l}});var e=r(8683),s=r(5987),i=(r(2791),r(9271)),o=r(8687),u=r(184),a=["isAuth"],c=function(t){return{isAuth:t.authReducer.isAuth}};function l(t){return(0,o.$j)(c)((function(n){var r=n.isAuth,o=(0,s.Z)(n,a);return r?(0,u.jsx)(t,(0,e.Z)({},o)):(0,u.jsx)(i.l_,{to:"/login"})}))}},545:function(t,n,r){r.d(n,{DT:function(){return s},lp:function(){return e}});var e=function(t){if(!t)return"Field is required."},s=function(t){return function(n){if(n&&n.length>t)return"Max length of the field is ".concat(t," symbols.")}}},1170:function(t,n){n.Z={formControl:"FormsControls_formControl__Y75OI",error:"FormsControls_error__TB8HK",formSummaryError:"FormsControls_formSummaryError__rJYd+"}}}]);
//# sourceMappingURL=552.10057043.chunk.js.map