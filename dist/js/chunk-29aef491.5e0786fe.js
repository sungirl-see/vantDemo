(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29aef491"],{"25f0":function(e,t,a){"use strict";var s=a("6eeb"),n=a("825a"),i=a("d039"),r=a("ad6d"),o="toString",l=RegExp.prototype,u=l[o],c=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(c||d)&&s(RegExp.prototype,o,(function(){var e=n(this),t=String(e.source),a=e.flags,s=String(void 0===a&&e instanceof RegExp&&!("flags"in l)?r.call(e):a);return"/"+t+"/"+s}),{unsafe:!0})},"8e17":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-form",{on:{submit:e.onSubmit}},[a("van-cell-group",[a("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("van-field",{attrs:{name:"邮箱",label:"邮箱",placeholder:"邮箱",rules:[{pattern:e.yz_email,required:!0,message:"请填写邮箱"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("van-field",{attrs:{center:"",clearable:"",label:"邮箱验证码",placeholder:"请输入邮箱验证码"},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small",type:"primary","native-type":"button",disabled:e.able},on:{click:e.Send}},[e._v(e._s(e.tip)+e._s(e.time))])]},proxy:!0}]),model:{value:e.sms,callback:function(t){e.sms=t},expression:"sms"}}),a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请输入密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("van-field",{attrs:{type:"password",name:"确认密码",label:"确认密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.sure_password,callback:function(t){e.sure_password=t},expression:"sure_password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1)],1)],1)},n=[],i=(a("c975"),a("d3b7"),a("25f0"),{name:"Register",data:function(){return{username:"",email:"",sms:"",password:"",sure_password:"",tip:"发送验证码",time:"",able:!1,id:"",yz_email:""}},methods:{onClickLeft:function(){this.$router.push({path:"/person_file"})},Send:function(){var e=this,t={key:"vv9544",email:this.email};this.$axios.post("https://zhuzuoji.com:8443//send_email",this.$qs.stringify(t)).then((function(t){if("已发送"==t.data.msg&&200==t.status){e.$toast("发送成功"),e.id=t.data.task_id,e.tip="",e.time=30;var a=setInterval((function(){e.time--,0==e.time?(clearInterval(a),e.tip="发送验证码",e.time="",e.able=!1):e.able=!0}),1e3)}else e.$toast.fail("请联系管理员")})).catch((function(t){t.toString().indexOf("404")&&e.$toast.loading({message:"网络错误,请稍后"})}))},onSubmit:function(){var e=this,t=this.password,a=this.sure_password;t!=a&&this.$toast("两次输入密码不一致");var s={key:"vv9544",email:this.email,task_id:this.id,verify_code:this.sms,password:this.password,password_confirm:this.sure_password,name:this.username};this.$axios.post("https://zhuzuoji.com/myapi/employee/register",this.$qs.stringify(s)).then((function(t){console.log(t);var a=t.data.msg;e.$toast.fail(a),e.$toast.success(a),200==t.status&&t.data.status&&(e.$setCookie("email",e.email,1),e.$router.push({path:"/login"}))})).catch((function(t){var a=t.toString();-1!=a.indexOf("Network")&&e.$toast.fail("请检查网络")}))}}}),r=i,o=a("2877"),l=Object(o["a"])(r,s,n,!1,null,"22899870",null);t["default"]=l.exports},a640:function(e,t,a){"use strict";var s=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&s((function(){a.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,a){var s=a("83ab"),n=a("d039"),i=a("5135"),r=Object.defineProperty,o={},l=function(e){throw e};e.exports=function(e,t){if(i(o,e))return o[e];t||(t={});var a=[][e],u=!!i(t,"ACCESSORS")&&t.ACCESSORS,c=i(t,0)?t[0]:l,d=i(t,1)?t[1]:void 0;return o[e]=!!a&&!n((function(){if(u&&!s)return!0;var e={length:-1};u?r(e,1,{enumerable:!0,get:l}):e[1]=1,a.call(e,c,d)}))}},c975:function(e,t,a){"use strict";var s=a("23e7"),n=a("4d64").indexOf,i=a("a640"),r=a("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),c=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!u||!c},{indexOf:function(e){return l?o.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-29aef491.5e0786fe.js.map