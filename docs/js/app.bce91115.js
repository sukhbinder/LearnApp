(function(e){function t(t){for(var n,r,i=t[0],o=t[1],u=t[2],j=0,b=[];j<i.length;j++)r=i[j],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,i=1;i<s.length;i++){var o=s[i];0!==c[o]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},c={app:0},a=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=o;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0f3b":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=a,e.exports=c,c.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),c=s("fae6"),a=s.n(c),r={class:"container"},i={id:"buttons"},o=Object(n["d"])("label",null,"Speak",-1),u={class:"container"},d=Object(n["d"])("img",{src:a.a},null,-1),j=Object(n["e"])(),b=Object(n["d"])("br",null,null,-1),f=Object(n["e"])(" All Done for Now. Please check back latter! "),l=Object(n["d"])("br",null,null,-1),h=[d,j,b,f,l];function p(e,t,s,c,a,d){var j=Object(n["l"])("Header"),b=Object(n["l"])("Review");return Object(n["h"])(),Object(n["c"])(n["a"],null,[Object(n["d"])("div",r,[Object(n["d"])("section",null,[Object(n["d"])("div",null,[Object(n["f"])(j,{onSubjectSelect:d.subject_selected,subjects:a.subjects},null,8,["onSubjectSelect","subjects"])])]),Object(n["d"])("section",null,[Object(n["d"])("div",i,[Object(n["d"])("button",{onClick:t[0]||(t[0]=function(){return d.toggle_review&&d.toggle_review.apply(d,arguments)})},"Hide Review"),o,Object(n["q"])(Object(n["d"])("input",{type:"checkbox",name:"check",id:"che","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.shouldspeak=e}),onClick:t[2]||(t[2]=function(){return d.toggle_speak&&d.toggle_speak.apply(d,arguments)})},null,512),[[n["n"],a.shouldspeak]])])])]),Object(n["q"])(Object(n["d"])("div",u,[Object(n["q"])(Object(n["d"])("h2",null," Please wait. loading... ",512),[[n["p"],a.isloading]]),Object(n["q"])(Object(n["d"])("div",null,h,512),[[n["p"],this.get_length<=0]]),Object(n["f"])(b,{onCorrectAnswer:d.correct_answer,onWrongAnswer:d.wrong_answer,onSpeakThis:d.speakthis,items:a.questions},null,8,["onCorrectAnswer","onWrongAnswer","onSpeakThis","items"])],512),[[n["p"],a.showreview]])],64)}s("ac1f"),s("5319"),s("a15b"),s("1276"),s("498a"),s("4de4");Object(n["j"])("data-v-86ff7f0a");var m={class:"container"},v=Object(n["d"])("div",null,[Object(n["d"])("h1",null,"Subjects")],-1),O=["onClick"];function k(e,t,s,c,a,r){return Object(n["h"])(),Object(n["c"])("div",m,[v,(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["k"])(s.subjects,(function(t){return Object(n["h"])(),Object(n["c"])("div",{key:t.id},[Object(n["d"])("ul",{onClick:function(s){return e.$emit("subject-select",t[0])}},Object(n["m"])(t[1]),9,O)])})),128))])}Object(n["i"])();var w={name:"Header",props:{subjects:Array}};s("867a");w.render=k,w.__scopeId="data-v-86ff7f0a";var g=w;Object(n["j"])("data-v-69b44bd0");var y={class:"container"};function _(e,t,s,c,a,r){var i=Object(n["l"])("ReviewItem");return Object(n["h"])(),Object(n["c"])("div",y,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["k"])(s.items,(function(t){return Object(n["h"])(),Object(n["c"])("div",{key:t.id},[Object(n["f"])(i,{onCorrectAnswer:function(s){return e.$emit("correct-answer",t)},onWrongAnswer:function(s){return e.$emit("wrong-answer",t)},onSpeakThis:function(s){return e.$emit("speak-this",t)},item:t},null,8,["onCorrectAnswer","onWrongAnswer","onSpeakThis","item"])])})),128))])}Object(n["i"])(),Object(n["j"])("data-v-fa27243a");var z={key:0},C={key:0},S=Object(n["d"])("i",{class:"fa fa-microphone"},null,-1),q=[S],x=Object(n["d"])("hr",null,null,-1),A={key:1},T=Object(n["d"])("i",{class:"fa fa-microphone"},null,-1),U=[T],P=Object(n["d"])("hr",null,null,-1),$={key:1};function R(e,t,s,c,a,r){var i=this;return Object(n["h"])(),Object(n["c"])("div",{class:"item",style:Object(n["g"])({display:a.isshown?"block":"none"})},[r.check_show()>0?(Object(n["h"])(),Object(n["c"])("div",z,[Object(n["d"])("div",null,[Object(n["q"])(Object(n["d"])("div",null,[Object(n["d"])("h5",null,Object(n["m"])(s.item.question),1)],512),[[n["p"],!s.item.isvoiceonly]]),s.item.isvoiceonly?(Object(n["h"])(),Object(n["c"])("div",A,[Object(n["q"])(Object(n["d"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.useranswer=e}),onChange:t[4]||(t[4]=function(){return r.check_ans&&r.check_ans.apply(r,arguments)}),onFocus:t[5]||(t[5]=function(t){return e.$emit("speak-this",i.item)}),autofocus:""},null,544),[[n["o"],a.useranswer]]),Object(n["d"])("a",{href:"javascript:void(0);",onClick:t[6]||(t[6]=function(t){return e.$emit("speak-this",i.item)})},U),Object(n["e"])(" "+Object(n["m"])(this.useranswer)+" ",1),P])):(Object(n["h"])(),Object(n["c"])("div",C,[Object(n["q"])(Object(n["d"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.useranswer=e}),onChange:t[1]||(t[1]=function(){return r.check_ans&&r.check_ans.apply(r,arguments)})},null,544),[[n["o"],a.useranswer]]),Object(n["d"])("a",{href:"javascript:void(0);",onClick:t[2]||(t[2]=function(t){return e.$emit("speak-this",i.item)})},q),Object(n["e"])(" "+Object(n["m"])(this.useranswer)+" ",1),x]))])])):(Object(n["h"])(),Object(n["c"])("div",$," ALL DONE "))],4)}Object(n["i"])();var M=s("c1df"),N=s.n(M),I={name:"ReviewItem",props:{item:Object},data:function(){return{useranswer:"",isshown:!0}},methods:{check_show:function(){return N()().diff(this.item.due_date,"hours")},check_ans:function(){this.useranswer.toUpperCase().trim()==this.item.answer.toUpperCase().trim()?(this.isshown=!1,this.$emit("correct-answer",this.item)):(this.useranswer="",this.$emit("wrong-answer",this.item))}}};s("b411"),s("8371");I.render=R,I.__scopeId="data-v-fa27243a";var H=I,D={name:"Review",props:{items:Array},components:{ReviewItem:H}};s("f62f");D.render=_,D.__scopeId="data-v-69b44bd0";var E=D,W=s("bc3a"),F=s.n(W);F.a.defaults.xsrfCookieName="csrftoken",F.a.defaults.xsrfHeaderName="X-CSRFTOKEN",F.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var L=[1,8,20,40,72,100,180,360,500,720],V={name:"App",components:{Header:g,Review:E},data:function(){return{questions:[],subject_id:6,subjects:[],showreview:!0,shouldspeak:!1,showsubjects:!0,isloading:!0}},computed:{get_length:function(){return this.questions.length}},methods:{check_show:function(e){return N()().diff(e.due_date,"hours")},correct_answer:function(e){this.shouldspeak&&this.speakthisin("Thats Correct"),this.increment(e),this.update_duedate(e),this.removetask(e.id),this.completeTask(e)},wrong_answer:function(e){var t=e.answer;t=t.replace(/___/g,"blank"),e.isvoiceonly&&(t=t.split("").join(" "));var s="Thats wrong, The answer is  "+t;this.shouldspeak&&this.speakthisin(s),confirm(s),this.decrement(e)},speakthisin:function(e){var t=new SpeechSynthesisUtterance;t.lang="en-US",t.text=e,window.speechSynthesis.speak(t)},increment:function(e){e.inum++,e.inum>L.length&&(e.inum=L.length-1)},decrement:function(e){e.inum--,e.inum<0&&(e.inum=0)},update_duedate:function(e){e.due_date=N()().add(L[e.inum-1],"hours").format()},iscorrect:function(e,t){return e.answer.toUpperCase().trim()===t.toUpperCase().trim()},completeTask:function(e){var t="https://learninghub.pythonanywhere.com/spelling/api/"+e.id+"/",s=e.inum,n=e.due_date;F.a.patch(t,{inum:s,due_date:n}).then((function(t){e.inum=t.data.inum})).catch((function(e){console.log(e)}))},speakthis:function(e){var t,s=e.question;s=s.replace(/___/g,"blank"),t=e.isvoiceonly?"Spell the word "+s:"The Question is "+s,this.speakthisin(t)},filtertasks:function(){var e=this;this.questions=this.questions.filter((function(t){return e.check_show(t)>0}))},removetask:function(e){this.questions=this.questions.filter((function(t){return t.id!==e}))},shuffleArray:function(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),n=[e[s],e[t]];e[t]=n[0],e[s]=n[1]}},toggle_speak:function(){this.shouldspeak=!this.shouldspeak},get_tasks:function(e){var t=this;this.isloading=!0,F.a.get("https://learninghub.pythonanywhere.com/spelling/subject/"+e).then((function(e){var s=e.data;t.shuffleArray(s),t.questions=s,t.filtertasks()})),this.isloading=!1},get_subjects:function(){var e=this;F.a.get("https://learninghub.pythonanywhere.com/spelling/subjects").then((function(t){return e.subjects=t.data}))},subject_selected:function(e){this.subject_id=e,this.get_tasks(e)},toggle_review:function(){this.showreview=!this.showreview},toggle_showsubjects:function(){this.showsubjects=!this.showsubjects}},created:function(){this.get_tasks(this.subject_id),this.get_subjects()},mounted:function(){}};s("9145");V.render=p;var J=V;Object(n["b"])(J).mount("#app")},"5db6":function(e,t,s){},8371:function(e,t,s){"use strict";s("dd70")},"867a":function(e,t,s){"use strict";s("d1a1")},9145:function(e,t,s){"use strict";s("0f3b")},b411:function(e,t,s){"use strict";s("5db6")},d1a1:function(e,t,s){},dd70:function(e,t,s){},e539:function(e,t,s){},f62f:function(e,t,s){"use strict";s("e539")},fae6:function(e,t,s){e.exports=s.p+"https://sukhbinder.github.io/LearnApp/img/done.00fe46bc.gif"}});
//# sourceMappingURL=app.bce91115.js.map