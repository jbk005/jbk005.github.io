(this["webpackJsonpjbk005.github.io"]=this["webpackJsonpjbk005.github.io"]||[]).push([[4],{142:function(e,t,a){},143:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":["#f44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"retina_detect":true}')},147:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},176:function(e,t,a){},297:function(e,t){},310:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},321:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(7),r=a(9),o=a(8),c=a(0),s=a.n(c),l=a(42),m=a(141),u=a.n(m),d=a(88),g=a.n(d),p=(a(142),a(143)),h=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isVisible:!e.state.isVisible})}),1e3)}},{key:"getName",value:function(){return l.name.split("").map((function(e,t){return s.a.createElement("span",{className:"animatedLetter",key:t},e)}))}},{key:"render",value:function(){return s.a.createElement("section",{id:"Home"},s.a.createElement(g.a,{className:"Background",params:p}),s.a.createElement("div",{className:"Content ".concat(this.state.isVisible?"Activated":"")},s.a.createElement("h1",null,this.getName()),s.a.createElement("h4",null,s.a.createElement(u.a,{strings:l.proffesions,typeSpeed:40,backSpeed:50,backDelay:1e3,cursorChar:"_",loop:!0}))))}}]),a}(c.Component),A=a(47),f=a(55),E=a(16),v=(a(147),a(332)),b=a(333),y=a(334),w=a(89),k=a.n(w),C=a.p+"static/media/selfie.601a6e67.jpg",B=a(63),D=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={__html:l.about_me},t=this.props.isVisible;return s.a.createElement("section",{id:"About"},s.a.createElement(v.a,{className:"Content ".concat(t?"Visible":"")},s.a.createElement(b.a,null,s.a.createElement(y.a,{className:"LeftSide"},s.a.createElement(k.a,{className:"Selfie",src:C,fallback:s.a.createElement(E.a,{size:48})}),s.a.createElement("div",{className:"Text"},s.a.createElement("p",null,"It's me!"),s.a.createElement(A.a,{icon:f.i}))),s.a.createElement(y.a,{className:"RightSide"},s.a.createElement("h1",{className:"sectionTitle"},"About me"),s.a.createElement("p",{dangerouslySetInnerHTML:e})))))}}]),a}(c.Component),I=Object(B.withIsVisible)(D),j=(a(168),a(340)),L=a(335),P=a(343),S=a(336),x=a.p+"static/media/cpp_logo.eef1b9c2.png",N=a.p+"static/media/csharp_logo.19615925.png",R=a.p+"static/media/python_logo.38f94c57.png",T=a.p+"static/media/html_logo.c5da0ecf.png",O=a.p+"static/media/css_logo.9d9f820c.png",z=a.p+"static/media/js_logo.a13cb5e1.png",M=a.p+"static/media/ts_logo.53b7ad20.png",Y=a.p+"static/media/mysql_logo.ab89a6ef.png",F=a.p+"static/media/mongodb_logo.da376630.png",H=a.p+"static/media/unity_logo.f27b670b.png",Q=a.p+"static/media/ue_logo.6fd69498.png",V=a.p+"static/media/aws_logo.fea4265a.png",q=a.p+"static/media/azure_logo.b3a6acdc.png",W=a.p+"static/media/firebase_logo.733a92d9.png",G=a.p+"static/media/androidstudio_logo.946b54ab.png",J=a.p+"static/media/blender_logo.b91e168d.png",Z=a.p+"static/media/gimp_logo.33c3e40b.png",U=a.p+"static/media/git_logo.9610d7a3.png",K=a.p+"static/media/pycharm_logo.de0be0ea.png",X="data:image/png;base64,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",_=a.p+"static/media/vs_logo.0ed63465.png",$=a(325),ee=a(92),te=a.n(ee),ae=(a(170),a(171)),ne=a(54),ie=new Map,re=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={particlesHeight:0},e.containerRef=s.a.createRef(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({particlesHeight:this.getContainerHeight()})}},{key:"getContainerHeight",value:function(){return this.containerRef.current.clientHeight}},{key:"getLayout",value:function(e,t,a,n){return s.a.createElement(oe,{icon:e,counter:t,title:a,id:n})}},{key:"getProjectsCount",value:function(){if(l.projects.length>0)return this.getLayout(f.d,l.projects.length,"Projects","projects")}},{key:"getExperienceTime",value:function(){var e=te()(l.startTime,"YYYY-MM-DD"),t=te()(),a={year:t.diff(e,"years"),months:t.diff(e,"months"),days:t.diff(e,"days"),hours:t.diff(e,"hours"),minutes:t.diff(e,"minutes"),seconds:t.diff(e,"seconds")};return a.year>0?this.getLayout(f.c,a.year,(1===a.year?"year":"years")+" of experience","experience"):a.months>0?this.getLayout(f.c,a.months,(1===a.months?"month":"months")+" of experience","experience"):a.days>0?this.getLayout(f.c,a.days,(1===a.days?"day":"days")+" of experience","experience"):a.minutes>0?this.getLayout(f.c,a.minutes,(1===a.minutes?"minute":"minutes")+" of experience","experience"):this.getLayout(f.c,a.seconds,(1===a.seconds?"second":"seconds")+" of experience","experience")}},{key:"getClientsCount",value:function(){if(l.clientsCount>0)return this.getLayout(f.b,l.clientsCount,"Total clients","clients")}},{key:"getAwardsCount",value:function(){if(l.awardsCount>0)return this.getLayout(f.l,l.clientsCount,"Total awards","awards")}},{key:"render",value:function(){if(this.props.isVisible){var e,t=Object($.a)(ie.entries());try{for(t.s();!(e=t.n()).done;){(0,e.value[1])()}}catch(a){t.e(a)}finally{t.f()}}return s.a.createElement("div",{id:"ExperienceCounters"},s.a.createElement(g.a,{className:"Background",height:this.state.particlesHeight}),s.a.createElement(v.a,{ref:this.containerRef},s.a.createElement(b.a,null,this.getProjectsCount(),this.getExperienceTime(),this.getClientsCount(),this.getAwardsCount())))}}]),a}(c.Component),oe=function(e){var t=Object(ae.useCountUp)({start:0,end:e.counter}),a=t.countUp,n=t.start;return ie.set(e.id,n),s.a.createElement(y.a,null,s.a.createElement("div",{className:"counterIcon"},s.a.createElement(A.a,{icon:e.icon,size:"2x"})),s.a.createElement("h4",{className:"counter"},a),s.a.createElement("p",{className:"title"},e.title))},ce=Object(ne.withIsVisible)(re),se=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).languagesBinding={general:[{logo:x,name:"C++",description:"Somewhat experienced"},{logo:N,name:"C#",description:"Advanced"},{logo:R,name:"Python",description:"Advanced"}],web:[{logo:T,name:"HTML",description:"Advanced"},{logo:O,name:"CSS",description:"Beginner"},{logo:z,name:"JS",description:"Somewhat experienced"},{logo:M,name:"TS",description:"Somewhat experienced"},{logo:Y,name:"MySQL",description:"Advanced"},{logo:F,name:"MongoDB",description:"Somewhat experienced"}]},e.enginesBinding=[{logo:H,name:"Unity",description:"Advanced"},{logo:Q,name:"Unreal Engine",description:"Beginner"}],e.servicesBinding=[{logo:W,name:"Firebase",description:"Advanced"},{logo:q,name:"Azure",description:"Beginner"},{logo:V,name:"AWS",description:"Beginner"}],e.softwareBinding=[{logo:_,name:"Visual Studio",description:"Somewhat experienced"},{logo:G,name:"Android Studio",description:"Somewhat experienced"},{logo:K,name:"PyCharm",description:"Advanced"},{logo:X,name:"Qt",description:"Beginner"},{logo:U,name:"Git",description:"Advanced"},{logo:J,name:"Blender",description:"Beginner"},{logo:Z,name:"Gimp",description:"Somewhat experienced"}],e}return Object(i.a)(a,[{key:"getEntries",value:function(e){return e.map((function(e){return e.logo?s.a.createElement(j.a,{key:e.name,placement:"top",overlay:s.a.createElement(L.a,null,e.description)},s.a.createElement(y.a,{className:"entryWithLogo"},s.a.createElement(k.a,{src:e.logo,fallback:s.a.createElement(E.a,null)}),s.a.createElement("h6",{class:"entryName"},e.name))):s.a.createElement(j.a,{key:e.name,placement:"top",overlay:s.a.createElement(L.a,null,e.description)},s.a.createElement(y.a,{className:"entry",key:e.name},s.a.createElement("h6",{class:"entryName"},e.name)))}))}},{key:"getExperience",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 0===e.length?s.a.createElement("div",{className:"Empty"},s.a.createElement("p",{className:"NoneText"},"None yet!"),t?s.a.createElement("a",{href:"mailto:".concat(l.email),className:"HireText"},"Hire me!"):null):e.map((function(e){return s.a.createElement(c.Fragment,{key:e.name},s.a.createElement("h6",null,s.a.createElement("a",{href:e.url},e.name)),s.a.createElement("ul",null,e.notes.map((function(e){return s.a.createElement("li",{key:e},e)}))))}))}},{key:"getCardLayout",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];switch(t){case"multiple":var i=a.map((function(e,t){return e.title?s.a.createElement(s.a.Fragment,{key:e.title},s.a.createElement("h4",{className:"contentSection"},s.a.createElement("span",null,e.title)),s.a.createElement(b.a,null,e.data)):s.a.createElement(y.a,{key:t},e)})),r=n?s.a.createElement(b.a,null,i):null;return s.a.createElement(P.a,null,s.a.createElement(P.a.Body,null,s.a.createElement(P.a.Title,null,e),s.a.createElement("hr",null),s.a.createElement("div",{className:"card-text"},r||i)));case"list":return s.a.createElement(P.a,null,s.a.createElement(P.a.Body,null,s.a.createElement(P.a.Title,null,e),s.a.createElement("hr",null),s.a.createElement("div",{className:"card-text listSection"},a)));case"text":return s.a.createElement(P.a,null,s.a.createElement(P.a.Body,null,s.a.createElement(P.a.Title,null,e),s.a.createElement(P.a.Text,{className:"experienceDescription"},a)));default:return s.a.createElement(P.a,null)}}},{key:"render",value:function(){var e=this.props.isVisible;return s.a.createElement("section",{id:"Experience"},s.a.createElement(v.a,{className:e?"Visible":""},s.a.createElement("h1",{className:"sectionTitle"},"Experience"),s.a.createElement("p",{className:"sectionDesc"},"You can also view my resume (in PDF) ",s.a.createElement("a",{href:"/resume"},"here")),s.a.createElement(S.a,null,this.getCardLayout("Programming Languages","multiple",[{title:"General",data:this.getEntries(this.languagesBinding.general)},{title:"Web",data:this.getEntries(this.languagesBinding.web)}]),this.getCardLayout("Human Languages","multiple",this.getEntries(l.humanLanguages),!0),this.getCardLayout("Working Experience","list",this.getExperience(l.workingExperience,!0)),this.getCardLayout(l.experienceDescriptionCard1.name,"text",l.experienceDescriptionCard1.content),this.getCardLayout(l.experienceDescriptionCard2.name,"text",l.experienceDescriptionCard2.content),this.getCardLayout("Education","list",this.getExperience(l.education)),this.getCardLayout("Engines","multiple",this.getEntries(this.enginesBinding),!0),this.getCardLayout("Services","multiple",this.getEntries(this.servicesBinding),!0),this.getCardLayout("Software","multiple",this.getEntries(this.softwareBinding),!0))),s.a.createElement(ce,null))}}]),a}(c.Component),le=Object(B.withIsVisible)(se),me=a(175),ue=(a(176),a(337)),de=a(339),ge=a(177),pe=a.n(ge),he=a(306),Ae=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={activeModal:-1},e.lockedProjects=[],e}return Object(i.a)(a,[{key:"showProject",value:function(e){this.setState({activeModal:e})}},{key:"hideProject",value:function(){this.setState({activeModal:-1})}},{key:"getProjects",value:function(){var e=this;return l.projects.map((function(t,a){var n=e.state.activeModal===a,i=e.showProject.bind(e),r=e.hideProject.bind(e),o=t.links.map((function(e){return s.a.createElement(ue.a,{key:e.title,href:e.link},e.title)})),c="projectDescription_"+a;return e.lockedProjects.includes(a)||(e.lockedProjects.push(a),fetch(t.description).then((function(e){return e.text()})).then((function(t){return e.setState(Object(me.a)({},c,t))}))),s.a.createElement(P.a,{key:t.title},t.logoUrl?s.a.createElement(P.a.Img,{variant:"top",src:t.logoUrl}):null,s.a.createElement(P.a.Body,null,s.a.createElement(P.a.Title,null,t.title),s.a.createElement(P.a.Text,{className:"shortDesc",dangerouslySetInnerHTML:{__html:t.shortDescription}}),s.a.createElement(ue.a,{variant:"primary",onClick:function(){i(a)}},"View more")),s.a.createElement(de.a,{show:n,onHide:function(){r()}},s.a.createElement(de.a.Header,{closeButton:!0},s.a.createElement(de.a.Title,null,t.title)),s.a.createElement(de.a.Body,null,Object(he.isString)(e.state[c])?s.a.createElement(pe.a,{source:e.state[c],escapeHtml:!1}):s.a.createElement(E.a,{size:64,className:"spinner"})),s.a.createElement(de.a.Footer,null,o,s.a.createElement(ue.a,{variant:"secondary",onClick:function(){r()}},"Close"))))}))}},{key:"render",value:function(){var e=this.props.isVisible;return s.a.createElement("section",{id:"Projects"},s.a.createElement(v.a,{className:e?"Visible":""},s.a.createElement("h1",{className:"sectionTitle"},"Projects"),s.a.createElement("p",{className:"sectionDesc"},'Click on "view more" to get more detailed description and links'),s.a.createElement("hr",null),0===l.projects.length?s.a.createElement("div",{className:"noProjects"},s.a.createElement("h1",null,"No Projects!"),s.a.createElement("p",null,"Please check that later, maybe there will be something new ",s.a.createElement("span",{role:"img","aria-label":"wink"},"\ud83d\ude09"))):s.a.createElement(S.a,null,this.getProjects())))}}]),a}(c.Component),fe=Object(ne.withIsVisible)(Ae),Ee=(a(310),a(311)),ve=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"getSocialLink",value:function(e,t,a){return t?s.a.createElement("a",{href:t,title:e},s.a.createElement(A.a,{icon:a,size:"4x"})):null}},{key:"render",value:function(){var e=this.props.isVisible;return s.a.createElement("section",{id:"Contact"},s.a.createElement(v.a,{className:e?"Visible":""},s.a.createElement("h1",{className:"sectionTitle"},"Contact"),s.a.createElement("p",{className:"sectionContent"},"Feel free to send me a message here: ",s.a.createElement("a",{href:"mailto:".concat(l.email)},l.email),", I'll try to respond as quick as I can!",s.a.createElement("br",null),"I'm also on these social media things, if you need me there:"),s.a.createElement("div",{className:"SocialIcons"},this.getSocialLink("Facebook",l.socials.facebook,Ee.a),this.getSocialLink("Twitter",l.socials.twitter,Ee.e),this.getSocialLink("Instagram",l.socials.instagram,Ee.b),this.getSocialLink("LinkedIn",l.socials.linkedin,Ee.c),this.getSocialLink("Twitch",l.socials.twitch,Ee.d),this.getSocialLink("YouTube",l.socials.twitch,Ee.f))))}}]),a}(c.Component),be=Object(B.withIsVisible)(ve),ye=(a(312),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"getCopyrightYear",value:function(){var e=parseInt(l.startTime.split("-")[0]),t=te()().year();return"".concat(e.toString()," ").concat(t>e?"- ".concat(t.toString()):"")}},{key:"render",value:function(){var e=this.props.isVisible;return s.a.createElement("footer",{className:"page-footer font-small blue"},s.a.createElement("div",{className:"footer-copyright text-center-py-3 ".concat(e?"Visible":"")},"\xa9 ",this.getCopyrightYear()," by Marek Grzyb"))}}]),a}(c.Component)),we=Object(ne.withIsVisible)(ye),ke=(a(313),a(130)),Ce=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scrollBind=null,e.state={isVisible:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.scrollBind=this.handleScroll.bind(this),window.addEventListener("scroll",this.scrollBind)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollBind)}},{key:"handleScroll",value:function(){var e=window.pageYOffset;0!==e!==this.state.isVisible&&this.setState({isVisible:0!==e})}},{key:"render",value:function(){return s.a.createElement(A.a,{icon:f.a,className:"BackToTop ".concat(this.state.isVisible?"Visible":""),size:"2x",onClick:function(){return ke.animateScroll.scrollToTop()}})}}]),a}(c.Component),Be=a(341),De=a(342),Ie=(a(321),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isVisible:!e.state.isVisible})}),2e3)}},{key:"getLink",value:function(e,t){return s.a.createElement(Be.a.Link,{onClick:function(){return ke.animateScroll.scrollTo(document.getElementById(e).offsetTop-50)}},s.a.createElement(A.a,{icon:t}),e)}},{key:"render",value:function(){return s.a.createElement(De.a,{bg:"dark",expand:"lg",variant:"dark",fixed:"top",className:this.state.isVisible?"Visible":""},s.a.createElement(De.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(De.a.Collapse,{id:"mainNavbar"},s.a.createElement(Be.a,{className:"mr-auto"},this.getLink("Home",f.g),this.getLink("About",f.k),this.getLink("Experience",f.j),this.getLink("Projects",f.e),this.getLink("Contact",f.h),s.a.createElement(Be.a.Link,{href:"/resume"},s.a.createElement(A.a,{icon:f.f}),"Resume"))),s.a.createElement(De.a.Brand,{onClick:function(){return ke.animateScroll.scrollToTop()}},l.name))}}]),a}(c.Component)),je=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement(Ie,null),s.a.createElement(Ce,null),s.a.createElement(h,null),s.a.createElement(I,null),s.a.createElement(le,null),s.a.createElement(fe,null),s.a.createElement(be,null),s.a.createElement(we,null))}}]),a}(c.Component);t.default=je},42:function(e){e.exports=JSON.parse('{"name":"Bharath Kumar","proffesions":["Game Developer","Programmer"],"about_me":"Hi! I\'m Bharath Kumar, a game developer and programmer from Poland, and I\'ve been making games since I was 12. I am currently an IT Technician student at <a href=\\"http://zsee.walbrzych.pl/\\">Zesp\xf3\u0142 Szk\xf3\u0142 Politechnicznych \\"Energetyk\\" w Wa\u0142brzychu</a><br/><br/>I love finding out how things work and visualizing them in a creative way using computer technology.<br/><br/>Here you can see some of the projects I\'ve had the opportunity of contributing to, and some of the personal-fun-things I\'ve been working on. I have a strong perseverance for learning new things and taking on challenges, and I always like to put some extra time in polishing my creations, to make sure the creative vision is achieved in the best possible way. I\'m especially focused on network programming. I\'ve always been extremely curious in the technical side of games, and sometimes this curiosity has led me to projects I cannot legally publish anywhere...<br/><br/>Sometimes I also make websites, like this one. If you have any questions please feel free to contact me &#128521;","email":"grzybdev@gmail.com","workingExperience":[{"name":"PeCet Serwis","url":"http://www.pecet.com.pl/","notes":["school practises","Installing and configuring operating systems and applications","Designing, installing and diagnosing local computer networks","Configuration of servers, network devices and VLANs"]}],"education":[{"name":"Zesp\xf3\u0142 Szk\xf3\u0142 Politechnicznych \\"Energetyk\\" w Wa\u0142brzychu","url":"http://zsee.walbrzych.pl","notes":["Finished High School with IT Technician degree"]}],"humanLanguages":[{"name":"English","description":"Good speaking & writing skills"},{"name":"Tamil","description":"Native"}],"experienceDescriptionCard1":{"name":"Game Development","content":"There is no part of the game development pipeline that I have not touched, and while every aspect of it is fun, I particularly enjoy network and gameplay programming."},"experienceDescriptionCard2":{"name":"Programming","content":"I love making useful apps, services and solutions. For me it is fun, while my focus is on game development, I am also making prototypes of services, scripts, and other things that can make my (and your!) life easier."},"projects":[{"title":"Brainfuck Interpreter","shortDescription":"Brainfuck Interpreter written in C++","description":"https://raw.githubusercontent.com/GrzybDev/Brainfuck/master/README.md","links":[{"title":"Source Code","link":"https://github.com/GrzybDev/Brainfuck"},{"title":"Download","link":"https://github.com/GrzybDev/Brainfuck/releases/latest"}]},{"title":"GrzybMic","shortDescription":"Tool that allows you to change your phone into microphone for your PC!","description":"/Markdown/GrzybMic.md","links":[{"title":"Project Page","link":"https://grzybmic.web.app"}]},{"title":"Jazz2Converter","shortDescription":"Jazz Jackrabbit 2 assets converter written in Python.","description":"https://raw.githubusercontent.com/GrzybDev/Jazz2Converter/master/README.md","links":[{"title":"Source Code","link":"https://github.com/GrzybDev/Jazz2Converter"}]},{"title":"Battlefield: Bad Company 2 Master Server Emulator","shortDescription":"An Master Server Emulator for Battlefield: Bad Company 2","description":"https://raw.githubusercontent.com/GrzybDev/BFBC2_MasterServer/master/README.md","links":[{"title":"Source Code","link":"https://github.com/GrzybDev/BFBC2_MasterServer"}]},{"title":"HQSolver","shortDescription":"Tool for predicting answers in HQ Trivia!","description":"https://raw.githubusercontent.com/GrzybDev/HQSolver/master/README.md","links":[{"title":"Source Code","link":"https://github.com/GrzybDev/HQSolver"}]},{"title":"It\'s Who You Know!","shortDescription":"Remake of <b>That\'s You!</b> Playstation 4 exclusive PlayLink title!","description":"data:,***Note: Due to questionable legality of this project, source code unfortunately are not available***","links":[]}],"startTime":"2019-12-01","clientsCount":0,"awardsCount":0,"socials":{"facebook":null,"twitter":"https://twitter.com/GrzybDev","instagram":null,"linkedin":"https://www.linkedin.com/in/grzybdev/","twitch":null,"youtube":null}}')}}]);
//# sourceMappingURL=4.82a533c8.chunk.js.map