(this.webpackJsonppeter=this.webpackJsonppeter||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(19),i=a.n(r),l=(a(28),a(22)),d=a.p+"static/media/logo.e3db38d6.svg",o=(a(29),a(11)),m=a(2),b=a(9),h=a(10),j=a(13),p=a(12),u=(a(30),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).state={showContinueError:!1},c}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{id:"landingpage",children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("img",{src:d,className:"App-logo",alt:"logo"})}),Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("button",{type:"button",className:"btn",id:"continueButton",onClick:function(t){return e.setState({showContinueError:!0})},children:"Continue"})}),this.state.showContinueError&&Object(c.jsxs)("div",{id:"ContinueError",children:[Object(c.jsx)("p",{children:"There's nothing else here yet... sorry"}),Object(c.jsx)("button",{type:"button",className:"btn",id:"closeContinueErrorButton",onClick:function(t){return e.setState({showContinueError:!1})},children:"Ok :("})]})]})})}}]),a}(n.a.Component)),g=(a(38),a.p+"static/media/Headshot.02300f51.jpg"),x=a(21),O=a.n(x);function N(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{id:"contactForm",className:"contact-form",onSubmit:function(t){t.preventDefault(),""!==t.target[0].value&&""!==t.target[1].value&&""!==t.target[2].value?(O.a.sendForm("service_7wbfogp","template_y6k6ezo",t.target,"user_asrTodBmpM0sMI7eJoBKQ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),document.getElementById("contactForm").reset(),e.didSubmit()):e.needFields()},children:[Object(c.jsxs)("div",{className:"row form-group",children:[Object(c.jsx)("input",{id:"uname",className:"col mx-2 form-control",type:"text",name:"user_name",placeholder:"your name"}),Object(c.jsx)("input",{id:"uemail",className:"col mx-2 form-control",type:"email",name:"user_email",placeholder:"your email"})]}),Object(c.jsx)("div",{className:"row form-group",children:Object(c.jsx)("textarea",{id:"umessage",className:"col mx-2 form-control",name:"message",placeholder:"your message"})}),Object(c.jsx)("div",{className:"row form-group",children:Object(c.jsx)("input",{id:"submitButton",className:"btn btn-light",type:"submit",value:"Send Message"})})]})})}var v=[{path:"/landing",component:u},{path:"/",component:function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).contactSubmitted=function(){c.setState({contactSubmitted:!0}),c.setState({contactNeedsFields:!1})},c.contactNeedsFields=function(){c.setState({contactNeedsFields:!0})},c.state={contactSubmitted:!1,contactNeedsFields:!1},c}return Object(h.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:"mainpage",children:[Object(c.jsx)("div",{className:"container py-5",children:Object(c.jsxs)("div",{className:"row center-row fadeInLeft",children:[Object(c.jsx)("img",{src:g,alt:"Headshot",id:"Headshot"}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("h1",{className:"theme-gradient font-weight-bold mb-0",id:"Name",children:"Peter King"}),Object(c.jsx)("br",{}),Object(c.jsx)("lead",{className:"lead",children:"Software Developer"})]})]})}),Object(c.jsxs)("div",{className:"container fadeInRight pb-4",id:"accordion",children:[Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",id:"headingOne","data-toggle":"collapse","data-target":"#collapseOne",children:Object(c.jsx)("h4",{className:"mb-0 ml-3 py-2 theme-gradient font-weight-bold",children:"About Me"})}),Object(c.jsx)("div",{id:"collapseOne",className:"collapse show","data-parent":"#accordion",children:Object(c.jsx)("div",{className:"card-body",children:"I'm a Computer Science student at Southern Methodist University in Dallas, TX. I'm primarily focused on Software Development and have experience in C++, React JS, HTML, CSS, Python, and more. Click the Projects tab below to see what I've been working on."})})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",id:"headingTwo","data-toggle":"collapse","data-target":"#collapseTwo",children:Object(c.jsx)("h4",{className:"mb-0 ml-3 py-2 theme-gradient font-weight-bold",children:"Projects"})}),Object(c.jsx)("div",{id:"collapseTwo",className:"collapse","data-parent":"#accordion",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("div",{className:"d-flex flex-wrap justify-content-around",children:[Object(c.jsx)("div",{className:"pcardwrapper",children:Object(c.jsxs)("a",{className:"pcard text-center reg-a",href:"https://github.com/petermking18/VacationGram",target:"_blank",children:[Object(c.jsx)("h4",{className:"mb-1",children:"TravelGram"}),Object(c.jsxs)("h5",{className:"mb-1",children:[Object(c.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"React"}),Object(c.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"HTML/CSS"}),Object(c.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"Javascript"}),Object(c.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"SQL"})]}),Object(c.jsx)("p",{className:"p-y-1 mb-1",children:"A simple vacation sharing social website to document and discover new trips around the globe."}),Object(c.jsx)("a",{href:"https://github.com/petermking18/VacationGram",target:"_blank",children:"See on Github"})]})}),Object(c.jsx)("div",{className:"pcardwrapper",children:Object(c.jsxs)("a",{className:"pcard text-center reg-a",href:"https://github.com/petermking18/Algorithm-Library",target:"_blank",children:[Object(c.jsx)("h4",{className:"mb-1",children:"Algorithm Library"}),Object(c.jsx)("h5",{className:"mb-1",children:Object(c.jsx)("span",{className:"badge badge-pill theme-gradient-badge",children:"C++"})}),Object(c.jsx)("p",{className:"p-y-1 mb-1",children:"A collection of sorting and searching algorithms, as well as a travelling salesman solver with naive, dynamic programming, and metaheuristic techniques."}),Object(c.jsx)("a",{href:"https://github.com/petermking18/Algorithm-Library",target:"_blank",children:"See on GitHub"})]})})]})})})]}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",id:"headingThree","data-toggle":"collapse","data-target":"#collapseThree",children:Object(c.jsx)("h4",{className:"mb-0 ml-3 py-2 theme-gradient font-weight-bold",children:"Contact Me"})}),Object(c.jsx)("div",{id:"collapseThree",className:"collapse","data-parent":"#accordion",children:Object(c.jsxs)("div",{className:"card-body",children:[this.state.contactNeedsFields&&Object(c.jsx)("p",{className:"text-center",children:"All fields required!"}),!this.state.contactSubmitted&&Object(c.jsx)(N,{didSubmit:this.contactSubmitted,needFields:this.contactNeedsFields}),this.state.contactSubmitted&&Object(c.jsx)("p",{className:"text-center",children:"Message sent!"})]})})]})]})]})}}]),a}(n.a.Component)}];a(41),a(44);var f=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(m.c,{children:v.map((function(e,t){return Object(c.jsx)(m.a,Object(l.a)({},e),t)}))})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.0a565655.chunk.js.map