(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/FuturaPT-Medium.540c81bc.ttf"},49:function(e,t,a){e.exports=a.p+"static/media/FuturaPT-Heavy.8b9416a7.ttf"},50:function(e,t,a){e.exports=a.p+"static/media/FuturaPT-Book.0d987efe.ttf"},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),c=(a(28),a(4)),s=a(5),l=a(7),m=a(6),u=a(3),p=a(53),f=a(52),d=a(54),h=a(12),_=a.n(h),g=a(9),b=[{id:1223435356,name:"Hotel Anixy",description:"The James New York \u2013 NoMad has been recently refurbished, offering its guests a stylish and modern ambience..",price:7e3,rating:"Book now!",image:"img/1.jpg",width:"800",height:"500"},{id:1223435355,name:"Paraiso Beach Hotel",description:"Located in the lively Bloomsbury district, the Royal National Hotel is definitely a great choice for anyone who wants to stay in London..",price:950,rating:"Book now!",image:"img/2.jpg",width:"800",height:"500"},{id:1223435358,name:"Park Hotel Argo",description:"Located at on the Collins Avenue, Fontainebleau Hotel Miami Beach is the best place to be while visiting Florida. .",price:1e3,rating:"Book now!",image:"img/3.jpg",width:"800",height:"500"},{id:1223435345,name:"Sunrise All Suites Resort",description:"It offers a beautiful view of the ocean, an outdoor pool, a fitness centre and a beauty salon..",price:4030,rating:"Book now!",image:"img/4.jpg",width:"800",height:"500"},{id:1223435334,name:"The Cliff Beach & Spa Resort",description:"At Katsuya restaurant you can enjoy Japanese cuisine while the Bazaar offers the refined Spanish delicacies.",price:1350,rating:"Book now!",image:"img/5.jpg",width:"800",height:"500"},{id:1223435311,name:"Sirena Palace",description:"The hotel is located just 1.5 km from the historic Art Deco district, within a 20 minute drive from Miami International Airport..",price:1200,rating:"Book now!",image:"img/6.jpg",width:"800",height:"500"}];function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var v=function(e){Object(l.a)(a,e);var t=y(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.image,n=e.description,i=e.price,o=e.rating,c=e.width,s=e.height;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{width:c,height:s,src:a,className:"card__image"}),r.a.createElement("div",null,r.a.createElement("div",{className:"card__block"},r.a.createElement("h3",null,t),r.a.createElement("a",{href:"#",className:"card__rating"},o)),r.a.createElement("p",{className:"card__description"},n.length>100?n.substring(0,100)+"...":n)),r.a.createElement("span",{className:"card__price"},i))}}]),a}(n.Component);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var k=function(e){Object(l.a)(a,e);var t=E(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar"},r.a.createElement("i",{className:"search-icon fa fa-search"}),r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Look for a hotel",onChange:this.props.onSearch}))}}]),a}(n.Component);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var L=function(e){Object(l.a)(a,e);var t=N(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={displayedHotels:b},n.handleSearch=n.handleSearch.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleSearch",value:function(e){var t=e.target.value.toLowerCase(),a=b.filter(function(e){return-1!==(e.name.toLowerCase()+e.description.toLowerCase()).indexOf(t)});this.setState({displayedHotels:a})}},{key:"render",value:function(){var e=this.state.displayedHotels.sort(function(e,t){return e.price<t.price}).map(function(e){return r.a.createElement(v,{key:e.id,id:e.id,name:e.name,description:e.description,price:e.price,image:e.image,rating:e.rating})});return r.a.createElement("div",{className:"page"},r.a.createElement("h2",{className:"page__heading"},"Hotel Look"),r.a.createElement(k,{onSearch:this.handleSearch}),r.a.createElement("div",{className:"cards"},e))}}]),a}(n.Component),w=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("h2",{className:"page__heading"},"Contacts"))};function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var j=function(e){Object(l.a)(a,e);var t=O(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isOpen:!0},n.handleClose=n.handleClose.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleClose",value:function(){console.log("Hello!"),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isOpen&&r.a.createElement("section",null,"Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learnLorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn");return r.a.createElement("div",{className:"page page__page--modification"},r.a.createElement("h2",{className:"page__heading"},"Welcome guys!"),r.a.createElement("div",{className:"page__close-icon"},r.a.createElement("h3",null,"How does it work?"),r.a.createElement("i",{className:"times-icon fa fa-times close_icon",onClick:this.handleClose})),e,r.a.createElement("h4",null,"Creation date: ",(new Date).toDateString()))}}]),a}(n.Component);a(18);var x=function(e){return r.a.createElement("label",{className:e.checkboxClass},r.a.createElement("input",{className:"checkbox__input",name:"checkbox",type:"checkbox",required:!0}),r.a.createElement("span",{className:"checkbox__checkmark"}),r.a.createElement("span",{className:"checkbox__text"},"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"))};function C(e){return r.a.createElement("div",{className:"form form_user"},r.a.createElement("h1",null,"\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f *",required:!0}),r.a.createElement("input",{className:"form__field form__field_input",type:"tel",name:"phone",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 *",required:!0}),r.a.createElement("input",{className:"form__field form__field_input",type:"email",name:"mail",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",required:!0}),r.a.createElement("button",{className:"form__field form__field_button",type:"submit"},"\u0414\u0430\u043b\u0435\u0435"))}function R(e){return r.a.createElement("div",{className:"form form_user"},r.a.createElement("h1",null,"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u0430:"),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"address1",placeholder:"\u0423\u043b\u0438\u0446\u0430, \u0434\u043e\u043c *(\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043c\u0435\u0442\u0440\u043e*)"}),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"marketplace",placeholder:"\u041f\u0443\u043d\u043a\u0442 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0430 *"}),r.a.createElement("h1",null,"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438:"),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"address2",placeholder:"\u0423\u043b\u0438\u0446\u0430, \u0434\u043e\u043c *(\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043c\u0435\u0442\u0440\u043e*)"}),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"house",placeholder:"\u041a\u043e\u0440\u043f\u0443\u0441, \u043f\u043e\u0434\u044a\u0435\u0437\u0434 *"}),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"floor",placeholder:"\u042d\u0442\u0430\u0436"}),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"home",placeholder:"\u041a\u0432-\u0440\u0430/\u041e\u0444\u0438\u0441"}),r.a.createElement("input",{className:"form__field form__field_input",type:"datetime",name:"time",placeholder:"\u0412\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 *"}),r.a.createElement("button",{className:"form__field form__field_button",type:"submit"},"\u0414\u0430\u043b\u0435\u0435"))}function S(e){return r.a.createElement("div",{className:"form form_user"},r.a.createElement("h1",null,"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b:"),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"comment",placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 *"}),r.a.createElement("input",{className:"form__field form__field_input",type:"text",name:"code",placeholder:"\u041a\u043e\u0434 \u0434\u043e\u043c\u043e\u0444\u043e\u043d\u0430 *"}),r.a.createElement(x,{checkboxClass:"checkbox checkbox_mobile"}),r.a.createElement("button",{className:"form__field form__field_button",type:"submit"},"\u0414\u0430\u043b\u0435\u0435"),r.a.createElement(x,{checkboxClass:"checkbox checkbox_desktop"}))}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var D=_()(),P=function(e){Object(l.a)(a,e);var t=T(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isToggleOn:!0},n.stepClick=n.stepClick.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"stepClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/steps/",history:D},r.a.createElement("section",{className:"steps"},r.a.createElement("div",{className:"steps__navigation"},r.a.createElement(f.a,{className:this.state.isToggleOn?"steps__item steps__item_rotate":"steps__item steps__item_not",to:"/",onClick:this.stepClick},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement(f.a,{className:this.state.isToggleOn?"steps__item steps__item_rotate":"steps__item steps__item_not",to:"/info",onClick:this.stepClick},"\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),r.a.createElement(f.a,{className:this.state.isToggleOn?"steps__item steps__item_rotate":"steps__item steps__item_not",to:"/address",onClick:this.stepClick},"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),r.a.createElement(f.a,{className:this.state.isToggleOn?"steps__item steps__item_rotate":"steps__item steps__item_not",to:"/payment",onClick:this.stepClick},"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b")),r.a.createElement("form",{method:"POST"},r.a.createElement(d.a,{exact:!0,path:"/",component:j}),r.a.createElement(d.a,{exact:!0,path:"/info",component:C}),r.a.createElement(d.a,{exact:!0,path:"/address",component:R}),r.a.createElement(d.a,{exact:!0,path:"/payment",component:S}))))}}]),a}(n.Component);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var H=_()(),A=function(e){Object(l.a)(a,e);var t=B(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/hotelLookApp/",history:H},r.a.createElement("div",{className:"main_block app"},r.a.createElement("ul",{className:"main_block__list"},r.a.createElement("li",{className:"main_block__link"},r.a.createElement(f.a,{className:"main_block__menu",to:"/about"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440")),r.a.createElement("li",{className:"main_block__link"},r.a.createElement(f.a,{className:"main_block__menu",to:"/"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")),r.a.createElement("li",{className:"main_block__link"},r.a.createElement(f.a,{className:"main_block__menu",to:"/contacts"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))),r.a.createElement(d.a,{exact:!0,path:"/about",component:L}),r.a.createElement(d.a,{exact:!0,path:"/",component:P}),r.a.createElement(d.a,{exact:!0,path:"/contacts",component:w})))}}]),a}(n.Component),W=(a(48),a(49),a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Prototype",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Prototype","/service-worker.js");W?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.6e6681fe.chunk.js.map