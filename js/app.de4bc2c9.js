(function(t){function e(e){for(var r,i,s=e[0],u=e[1],o=e[2],f=0,b=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dpm/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1eb0":function(t,e,n){},6326:function(t,e,n){},"82b1":function(t,e,n){"use strict";n("9571")},9571:function(t,e,n){},"9dd8":function(t,e,n){"use strict";n("1eb0")},b12a:function(t,e,n){},bbe1:function(t,e,n){"use strict";n("b12a")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app"},c={id:"nav"},i=Object(r["f"])("Home"),s=Object(r["f"])(" | "),u=Object(r["f"])("Activities"),o=Object(r["f"])(" | "),l=Object(r["f"])("Chart"),f=Object(r["f"])(" | "),b=Object(r["f"])("Config");function p(t,e){var n=Object(r["x"])("router-link"),p=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["g"])("div",c,[Object(r["g"])(n,{to:"/"},{default:Object(r["H"])((function(){return[i]})),_:1}),s,Object(r["g"])(n,{to:"/activities"},{default:Object(r["H"])((function(){return[u]})),_:1}),o,Object(r["g"])(n,{to:"/chart"},{default:Object(r["H"])((function(){return[l]})),_:1}),f,Object(r["g"])(n,{to:"/config"},{default:Object(r["H"])((function(){return[b]})),_:1})]),Object(r["g"])(p)])}n("bbe1");const d={};d.render=p;var h=d,v=n("9483");Object(v["a"])("".concat("/dpm/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=n("6c02"),O={class:"home"};function g(t,e,n,a,c,i){var s=Object(r["x"])("LoginButton");return Object(r["q"])(),Object(r["d"])("div",O,[Object(r["g"])(s),Object(r["g"])("button",{onClick:e[1]||(e[1]=function(){return t.refreshToken&&t.refreshToken.apply(t,arguments)})},"Refresh token")])}n("96cf");var j=n("1da1"),w={key:0,class:"login-button"};function y(t,e,n,a,c,i){return t.show?(Object(r["q"])(),Object(r["d"])("div",w,[Object(r["g"])("button",{onClick:e[1]||(e[1]=function(){return t.login&&t.login.apply(t,arguments)})},"Login with strava")])):Object(r["e"])("",!0)}n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d");var x=n("d4ec"),k=n("bee2"),S="https://dynamic-performance-modelling.herokuapp.com",R=function(){function t(){Object(x["a"])(this,t)}return Object(k["a"])(t,null,[{key:"refreshToken",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(S+"/api/refresh-token",{method:"POST",body:JSON.stringify({refresh_token:e}),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"accessTokens",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(S+"/api/access-token",{method:"POST",body:JSON.stringify({code:e}),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),I=n("edfe"),_=Object(I["a"])("localforage","keyvaluepairs");window.set=I["c"],window.get=I["b"],window.store=_;var T=function(){function t(){Object(x["a"])(this,t)}return Object(k["a"])(t,null,[{key:"setItem",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(I["c"])(e,n,_);case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"getItem",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(I["b"])(e,_);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),A="50808",C=Object(r["h"])({name:"LoginButton",data:function(){return{show:!0}},computed:{loginLink:function(){var t=new URL("https://www.strava.com/oauth/authorize");return t.searchParams.append("client_id",A),t.searchParams.append("redirect_uri",window.location.href),t.searchParams.append("response_type","code"),t.searchParams.append("scope","activity:read_all"),t.toString()}},methods:{login:function(){window.location.href=this.loginLink}},created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.getItem("refresh_token");case 2:if(!e.sent){e.next=4;break}t.show=!1;case 4:if(n=t.$route.query.code,t.$route.query.scope,!n){e.next=19;break}return e.next=9,R.accessTokens(n);case 9:if(r=e.sent,a=r.access_token,c=r.refresh_token,!a){e.next=19;break}return e.next=15,T.setItem("access_token",a);case 15:return e.next=17,T.setItem("refresh_token",c);case 17:return e.next=19,t.$router.push("/activities");case 19:case"end":return e.stop()}}),e)})))()}});C.render=y;var P=C,H=function(){function t(){Object(x["a"])(this,t),this.permission="granted"===Notification.permission}return Object(k["a"])(t,[{key:"requestPermission",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Notification.requestPermission();case 2:return e=t.sent,this.permission="granted"===e,t.abrupt("return",this.permission);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"notify",value:function(t){if(this.permission)return new Notification(t)}}]),t}(),q=new H,D=Object(r["h"])({name:"Home",components:{LoginButton:P},methods:{refreshToken:function(){return Object(j["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.getItem("refresh_token");case 2:return e=t.sent,t.next=5,R.refreshToken(e);case 5:return n=t.sent,t.next=8,T.setItem("refresh_token",n.refresh_token);case 8:return t.next=10,T.setItem("access_token",n.access_token);case 10:case"end":return t.stop()}}),t)})))()}},created:function(){return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(q.permission);case 1:case"end":return t.stop()}}),t)})))()}});D.render=g;var B=D,M=(n("b0c0"),n("ac1f"),n("1276"),{class:"activities"}),N=Object(r["g"])("label",{for:"start"},"Start",-1),J=Object(r["g"])("label",{for:"end"},"End",-1),L=Object(r["g"])("div",null,[Object(r["g"])("input",{type:"submit",value:"Fetch activities"})],-1),U={class:"activities"},z=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Date"),Object(r["g"])("th",null,"Name"),Object(r["g"])("th",null,"TSS")])],-1),F={key:0},V={key:1};function $(t,e,n,a,c,i){var s=Object(r["x"])("router-link"),u=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",M,[Object(r["g"])("form",{action:"#",onSubmit:e[3]||(e[3]=Object(r["J"])((function(){return i.fetchActivities&&i.fetchActivities.apply(i,arguments)}),["prevent"]))},[Object(r["g"])("div",null,[N,Object(r["I"])(Object(r["g"])("input",{type:"date",name:"start",id:"start","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.start=t})},null,512),[[r["E"],c.start]])]),Object(r["g"])("div",null,[J,Object(r["I"])(Object(r["g"])("input",{type:"date",name:"end",id:"end","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.end=t})},null,512),[[r["E"],c.end]])]),L],32),Object(r["g"])("table",U,[z,Object(r["g"])("tbody",null,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(c.activities,(function(t,e){return Object(r["q"])(),Object(r["d"])("tr",{key:e},[Object(r["g"])("td",null,Object(r["z"])(new Date(t.start_date).toISOString().split("T")[0]),1),Object(r["g"])("td",null,[Object(r["g"])(s,{to:"/activities/"+t.id},{default:Object(r["H"])((function(){return[Object(r["f"])(Object(r["z"])(t.name),1)]})),_:2},1032,["to"])]),t.tss?(Object(r["q"])(),Object(r["d"])("td",F,Object(r["z"])(Math.round(100*t.tss)/100),1)):(Object(r["q"])(),Object(r["d"])("td",V,[Object(r["g"])("a",{onClick:Object(r["J"])((function(t){return i.getStreams([e])}),["prevent"]),href:"#"},"Calculate",8,["onClick"])]))])})),128))])])]),Object(r["g"])(u)],64)}n("13d5"),n("b64b"),n("07ac");var E=n("b85c"),K=n("5530"),G=function(){function t(){Object(x["a"])(this,t)}return Object(k["a"])(t,null,[{key:"getActivities",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:null,n=a.length>1&&void 0!==a[1]?a[1]:null,r=new URL("https://www.strava.com/api/v3/athlete/activities"),e&&n&&(r.searchParams.append("after",(e.getTime()/1e3).toString()),r.searchParams.append("before",(n.getTime()/1e3).toString())),t.t0=fetch,t.t1=r.toString(),t.next=8,T.getItem("access_token");case 8:return t.t2=t.sent,t.t3="Bearer "+t.t2,t.t4={Authorization:t.t3},t.t5={headers:t.t4},t.next=14,(0,t.t0)(t.t1,t.t5).then((function(t){return t.ok?t.json():[]}));case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getActivity",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new URL("https://www.strava.com/api/v3/activities/".concat(e)),t.t0=fetch,t.t1=n.toString(),t.next=5,T.getItem("access_token");case 5:return t.t2=t.sent,t.t3="Bearer "+t.t2,t.t4={Authorization:t.t3},t.t5={headers:t.t4},t.next=11,(0,t.t0)(t.t1,t.t5).then((function(t){return t.json()}));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getActivityStream",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new URL("https://www.strava.com/api/v3/activities/".concat(e,"/streams")),n.searchParams.append("keys","heartrate"),n.searchParams.append("key_by_type","true"),n.searchParams.append("series_type","time"),n.searchParams.append("resolution","high"),t.t0=fetch,t.t1=n.toString(),t.next=9,T.getItem("access_token");case 9:return t.t2=t.sent,t.t3="Bearer "+t.t2,t.t4={Authorization:t.t3},t.t5={headers:t.t4},t.next=15,(0,t.t0)(t.t1,t.t5).then(function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ok){t.next=2;break}return t.abrupt("return",{});case 2:return t.abrupt("return",e.json());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),Q=function(t){return(t.thresHr-t.restHr)/(t.maxHr-t.restHr)},W=function(t){return 60*Q(t)*.64*Math.exp(t.trimpFactor*Q(t))},X=function(t,e,n){return t/60*e*.64*Math.exp(n.trimpFactor*e)},Y=function(t,e){for(var n=0,r=1;r<t.heartrate.data.length;r++){var a=t.time.data[r]-t.time.data[r-1],c=(t.heartrate.data[r]+t.heartrate.data[r-1])/2;c=(c-e.restHr)/(e.maxHr-e.restHr),n+=X(a,c,e)}return n},Z=function(t,e){return t/e*60};function tt(t,e){return Z(Y(t,e),W(e))}var et;(function(t){t[t["M"]=1.92]="M",t[t["F"]=1.67]="F"})(et||(et={}));var nt={restHr:43,thresHr:193,maxHr:208,trimpFactor:et.M},rt=function(){function t(){Object(x["a"])(this,t)}return Object(k["a"])(t,null,[{key:"importStreams",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],r=Object(E["a"])(e),t.prev=2,r.s();case 4:if((a=r.n()).done){t.next=13;break}return c=a.value,t.t0=n,t.next=9,this.importStream(c);case 9:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 11:t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t2=t["catch"](2),r.e(t.t2);case 18:return t.prev=18,r.f(),t.finish(18);case 21:return t.abrupt("return",n);case 22:case"end":return t.stop()}}),t,this,[[2,15,18,21]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"importStream",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.getItem("activity."+e.toString());case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0={};case 5:if(n=t.t0,n.id){t.next=10;break}return t.next=9,G.getActivity(e);case 9:n=t.sent;case 10:return t.next=12,G.getActivityStream(e);case 12:return r=t.sent,r.tss=tt(r,nt),n=Object(K["a"])(Object(K["a"])({},n),r),t.next=17,T.setItem("activity."+e.toString(),n);case 17:return t.abrupt("return",n);case 18:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),at={name:"Activities",data:function(){return{start:(new Date).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0],activities:{},streams:[]}},methods:{fetchActivities:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Date(t.start),r=new Date(t.end),r.setTime(r.getTime()+864e5),e.next=5,G.getActivities(n,r);case 5:return a=e.sent,c=a.reduce((function(t,e){return t[e.id]=e,t}),{}),t.activities=Object(K["a"])(Object(K["a"])({},c),t.activities),e.next=10,t.save();case 10:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.setItem("activities",JSON.parse(JSON.stringify(t.activities)));case 2:case"end":return e.stop()}}),e)})))()},getStreams:function(t){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,c,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=Object.values(t),n.next=3,rt.importStreams(r);case 3:a=n.sent,c=Object(E["a"])(a);try{for(c.s();!(i=c.n()).done;)s=i.value,e.activities[s.id]=s}catch(u){c.e(u)}finally{c.f()}e.streams=[];case 7:case"end":return n.stop()}}),n)})))()}},created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.getItem("activities");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:n=e.t0,n=Object.keys(n).sort().reverse().reduce((function(t,e){return t[parseInt(e)]=n[parseInt(e)],t}),{}),t.activities=n,r=0,a=Object.keys(n);case 9:if(!(r<a.length)){e.next=18;break}return c=a[r],e.next=13,T.getItem("activity."+c);case 13:i=e.sent,i&&i.tss&&(t.activities[c].tss=i.tss);case 15:r++,e.next=9;break;case 18:case"end":return e.stop()}}),e)})))()}};n("da6f");at.render=$;var ct=at,it=Object(r["K"])("data-v-f9087ace");Object(r["t"])("data-v-f9087ace");var st={class:"activity"},ut=Object(r["g"])("dt",null,"TSS",-1),ot=Object(r["g"])("dt",null,"Start date",-1),lt={class:"chart"};Object(r["r"])();var ft=it((function(t,e,n,a,c,i){var s=Object(r["x"])("v-chart");return Object(r["q"])(),Object(r["d"])("div",st,[Object(r["g"])("h1",null,Object(r["z"])(t.activity.name),1),Object(r["g"])("dl",null,[ut,Object(r["g"])("dd",null,Object(r["z"])(t.activity.tss),1),ot,Object(r["g"])("dd",null,Object(r["z"])(t.activity.start_date),1)]),Object(r["g"])("button",{onClick:e[1]||(e[1]=function(e){return t.getStream(t.activity.id)})},"Get stream"),t.activity.time?(Object(r["q"])(),Object(r["d"])("button",{key:0,onClick:e[2]||(e[2]=function(){return t.showChart&&t.showChart.apply(t,arguments)})},"Show chart")):Object(r["e"])("",!0),Object(r["g"])("div",lt,[Object(r["g"])(s,{option:t.option},null,8,["option"])])])})),bt=n("5c7f"),pt=(n("313e"),Object(r["h"])({name:"Activity",components:{VChart:bt["a"]},data:function(){return{activity:{},option:{}}},methods:{getStream:function(t){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,rt.importStream(t);case 2:e.activity=n.sent;case 3:case"end":return n.stop()}}),n)})))()},showChart:function(){this.option={tooltip:{trigger:"axis"},legend:{data:["HR"]},xAxis:{data:this.activity.time.data},yAxis:{},series:[{name:"HR",type:"line",data:(this.activity.heartrate||{}).data||[]}]}}},created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,T.getItem("activity."+n);case 3:if(r=e.sent,r){e.next=10;break}return e.next=7,G.getActivity(n);case 7:return r=e.sent,e.next=10,T.setItem("activity."+n,r);case 10:t.activity=r,t.activity.time&&t.showChart();case 12:case"end":return e.stop()}}),e)})))()}}));n("82b1");pt.render=ft,pt.__scopeId="data-v-f9087ace";var dt=pt,ht=Object(r["K"])("data-v-b49bbc38");Object(r["t"])("data-v-b49bbc38");var vt={class:"chart"},mt=Object(r["g"])("label",{for:"tsb"},"TSB",-1),Ot=Object(r["g"])("label",{for:"bannister"},"Bannister",-1),gt=Object(r["g"])("label",{for:"busso"},"Busso",-1),jt=Object(r["g"])("input",{type:"submit",value:"Calculate"},null,-1);Object(r["r"])();var wt=ht((function(t,e,n,a,c,i){var s=Object(r["x"])("v-chart");return Object(r["q"])(),Object(r["d"])("div",vt,[Object(r["g"])("form",{action:"#",onSubmit:e[4]||(e[4]=Object(r["J"])((function(){return t.calculate&&t.calculate.apply(t,arguments)}),["prevent"]))},[Object(r["g"])("div",null,[Object(r["I"])(Object(r["g"])("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.chart=e}),name:"chart",id:"tsb",value:"tsb"},null,512),[[r["D"],t.chart]]),mt]),Object(r["g"])("div",null,[Object(r["I"])(Object(r["g"])("input",{type:"radio","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.chart=e}),name:"chart",id:"bannister",value:"bannister"},null,512),[[r["D"],t.chart]]),Ot]),Object(r["g"])("div",null,[Object(r["I"])(Object(r["g"])("input",{type:"radio",disabled:"disabled","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.chart=e}),name:"chart",id:"busso",value:"busso"},null,512),[[r["D"],t.chart]]),gt]),jt],32),Object(r["g"])(s,{option:t.option},null,8,["option"])])})),yt=(n("4de4"),n("d81d"),n("22b4")),xt=n("f95e"),kt=n("3620"),St=n("9394"),Rt=n("2da7"),It=n("ff32"),_t=864e5,Tt=function(t){var e,n={},r=Object(E["a"])(t);try{for(r.s();!(e=r.n()).done;){var a=e.value,c=new Date(a.start_date_local).toISOString().split("T")[0];n[c]?(n[c].tss=(n[c].tss||0)+a.tss,n[c].activities.push({name:a.name,id:a.id})):n[c]={tss:a.tss,activities:[{name:a.name,id:a.id}]}}}catch(i){r.e(i)}finally{r.f()}return n};function At(t){var e=[],n=Tt(t),r=new Date("2021-01-01"),a=(new Date).getTime()+14*_t;while(r.getTime()<=a){var c=r.toISOString().split("T")[0],i=n[c]||{date:c,tss:0};e.push(Object(K["a"])({date:c},i)),r.setTime(r.getTime()+_t)}return e}var Ct=2/8,Pt=2/43;function Ht(t,e){var n=(e.tss||0)*Ct+(1-Ct)*(t.atl||0),r=(e.tss||0)*Pt+(1-Pt)*(t.ctl||0);return{atl:n,ctl:r,form:(t.ctl||0)-(t.atl||0)}}function qt(t){var e,n=At(t),r={atl:0,ctl:0,form:0,tss:0},a=Object(E["a"])(n);try{for(a.s();!(e=a.n()).done;){var c=e.value,i=Ht(r,c);c.atl=i.atl,c.ctl=i.ctl,c.form=i.form,r=Object(K["a"])({},i)}}catch(s){a.e(s)}finally{a.f()}return n}var Dt=1,Bt=1.8,Mt=42,Nt=11,Jt=function(t,e,n){return Math.exp(-(e-n)/Mt)*t},Lt=function(t,e,n){return Math.exp(-(e-n)/Nt)*t},Ut=function(t,e,n){return t+Dt*e-Bt*n};function zt(t){var e,n=At(t),r=0,a=0,c=Object(E["a"])(n);try{for(c.s();!(e=c.n()).done;){for(var i=e.value,s=0;s<a;s++)i.ctl=(i.ctl||0)+Jt(n[s].tss||0,a,s),i.atl=(i.atl||0)+Lt(n[s].tss||0,a,s);i.form=Ut(r,i.ctl||0,i.atl||0),a++}}catch(u){c.e(u)}finally{c.f()}return n}Object(yt["a"])([xt["a"],kt["a"],St["a"],Rt["a"],It["a"]]);var Ft=Object(r["h"])({name:"Chart",components:{VChart:bt["a"]},data:function(){return{chart:"tsb",days:[],option:{}}},methods:{calculate:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=Object,e.next=3,T.getItem("activities");case 3:e.t1=e.sent,n=e.t0.keys.call(e.t0,e.t1),r=[],a=0,c=n;case 7:if(!(a<c.length)){e.next=16;break}return i=c[a],e.next=11,T.getItem("activity."+i);case 11:s=e.sent,s&&r.push(s);case 13:a++,e.next=7;break;case 16:return e.next=18,T.setItem("tsb",qt(r));case 18:return e.next=20,T.setItem("bannister",zt(r));case 20:return e.t2=t,e.next=23,T.getItem(t.chart);case 23:e.t3=e.sent,e.t2.setOptions.call(e.t2,e.t3);case 25:case"end":return e.stop()}}),e)})))()},setOptions:function(t){this.option={tooltip:{trigger:"axis"},legend:{data:["Atl","Ctl","Form","TSS"]},xAxis:{data:Object.values(t).map((function(t){return t.date}))},yAxis:{},series:[{type:"line",markLine:{data:[{name:"Today",xAxis:(new Date).toISOString().split("T")[0]}]}},{name:"TSS",type:"scatter",data:Object.values(t).filter((function(t){return t.tss})).map((function(t){return{value:[t.date,Math.round(t.tss)],name:"hoi"}})),markLine:{data:[{yAxis:25}]}},{name:"Form",type:"line",data:Object.values(t).map((function(t){return[t.date,t.form]}))},{name:"Atl",type:"line",data:Object.values(t).map((function(t){return[t.date,t.atl]}))},{name:"Ctl",type:"line",data:Object.values(t).map((function(t){return[t.date,t.ctl]}))}]}}},watch:{chart:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.getItem(e);case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0={};case 5:n=t.t0,this.setOptions(n);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.getItem("config");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={chart:"tsb"};case 5:return t.chart=e.t0.chart,e.next=8,T.getItem(t.chart);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:n=e.t1,t.setOptions(n);case 13:case"end":return e.stop()}}),e)})))()}});n("9dd8");Ft.render=wt,Ft.__scopeId="data-v-b49bbc38";var Vt=Ft,$t={class:"config"},Et=Object(r["g"])("p",null,"Preferred chart.",-1),Kt=Object(r["g"])("label",{for:"tsb"},"TSB",-1),Gt=Object(r["g"])("label",{for:"busso"},"Busso",-1),Qt=Object(r["g"])("label",{for:"bannister"},"Bannister",-1),Wt=Object(r["g"])("div",null,[Object(r["g"])("input",{type:"submit",value:"Save"})],-1);function Xt(t,e,n,a,c,i){return Object(r["q"])(),Object(r["d"])("div",$t,[Object(r["g"])("form",{action:"#",onSubmit:e[4]||(e[4]=Object(r["J"])((function(){return i.save&&i.save.apply(i,arguments)}),["prevent"]))},[Object(r["g"])("div",null,[Et,Object(r["g"])("div",null,[Object(r["g"])("div",null,[Object(r["I"])(Object(r["g"])("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.chart=t}),name:"chart",id:"tsb",value:"tsb"},null,512),[[r["D"],c.chart]]),Kt]),Object(r["g"])("div",null,[Object(r["I"])(Object(r["g"])("input",{type:"radio","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.chart=t}),name:"chart",id:"busso",value:"busso"},null,512),[[r["D"],c.chart]]),Gt]),Object(r["g"])("div",null,[Object(r["I"])(Object(r["g"])("input",{type:"radio","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.chart=t}),name:"chart",id:"bannister",value:"bannister"},null,512),[[r["D"],c.chart]]),Qt])])]),Wt],32)])}var Yt={name:"Config",data:function(){return{chart:"tsb"}},methods:{save:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.parse(JSON.stringify(t.$data)),e.next=3,T.setItem("config",n);case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.getItem("config");case 2:n=e.sent,Object.assign(t.$data,n);case 4:case"end":return e.stop()}}),e)})))()}};Yt.render=Xt;var Zt=Yt,te=[{path:"/",name:"Home",component:B},{path:"/activities",name:"Activities",component:ct},{path:"/activities/:id",component:dt},{path:"/chart",component:Vt},{path:"/config",component:Zt}],ee=Object(m["a"])({history:Object(m["b"])("/dpm/"),routes:te}),ne=ee;Object(r["c"])(h).use(ne).mount("#app")},da6f:function(t,e,n){"use strict";n("6326")}});
//# sourceMappingURL=app.de4bc2c9.js.map