(this.webpackJsonppeter=this.webpackJsonppeter||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),r=a.n(c),n=a(19),i=a.n(n),l=(a(28),a(22)),d=a.p+"static/media/logo.e3db38d6.svg",o=(a(29),a(11)),m=a(2),b=a(9),h=a(10),j=a(13),p=a(12),g=(a(30),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(b.a)(this,a),(s=t.call(this,e)).state={showContinueError:!1},s}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{id:"landingpage",children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("img",{src:d,className:"App-logo",alt:"logo"})}),Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("button",{type:"button",className:"btn",id:"continueButton",onClick:function(t){return e.setState({showContinueError:!0})},children:"Continue"})}),this.state.showContinueError&&Object(s.jsxs)("div",{id:"ContinueError",children:[Object(s.jsx)("p",{children:"There's nothing else here yet... sorry"}),Object(s.jsx)("button",{type:"button",className:"btn",id:"closeContinueErrorButton",onClick:function(t){return e.setState({showContinueError:!1})},children:"Ok :("})]})]})})}}]),a}(r.a.Component)),u=(a(38),a.p+"static/media/Headshot.02300f51.jpg"),x=a(21),O=a.n(x);function N(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("form",{id:"contactForm",className:"contact-form",onSubmit:function(t){t.preventDefault(),""!==t.target[0].value&&""!==t.target[1].value&&""!==t.target[2].value?(O.a.sendForm("service_7wbfogp","template_y6k6ezo",t.target,"user_asrTodBmpM0sMI7eJoBKQ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),document.getElementById("contactForm").reset(),e.didSubmit()):e.needFields()},children:[Object(s.jsxs)("div",{className:"row form-group",children:[Object(s.jsx)("input",{id:"uname",className:"col mx-2 form-control",type:"text",name:"user_name",placeholder:"your name"}),Object(s.jsx)("input",{id:"uemail",className:"col mx-2 form-control",type:"email",name:"user_email",placeholder:"your email"})]}),Object(s.jsx)("div",{className:"row form-group",children:Object(s.jsx)("textarea",{id:"umessage",className:"col mx-2 form-control",name:"message",placeholder:"your message"})}),Object(s.jsx)("div",{className:"row form-group",children:Object(s.jsx)("input",{id:"submitButton",className:"btn btn-light",type:"submit",value:"Send Message"})})]})})}var f=[{path:"/landing",component:g},{path:"/",component:function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(b.a)(this,a),(s=t.call(this,e)).contactSubmitted=function(){s.setState({contactSubmitted:!0}),s.setState({contactNeedsFields:!1})},s.contactNeedsFields=function(){s.setState({contactNeedsFields:!0})},s.state={contactSubmitted:!1,contactNeedsFields:!1},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"mainpage",children:[Object(s.jsx)("div",{className:"container py-5",children:Object(s.jsxs)("div",{className:"row center-row fadeInLeft",children:[Object(s.jsx)("img",{src:u,alt:"Headshot",id:"Headshot"}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h1",{className:"theme-gradient font-weight-bold mb-0",id:"Name",children:"Peter King"}),Object(s.jsx)("br",{}),Object(s.jsx)("lead",{className:"lead",children:"Software Developer"}),Object(s.jsx)("br",{}),Object(s.jsxs)("lead",{className:"lead",children:[Object(s.jsxs)("a",{role:"button",href:"https://github.com/petermking18",target:"_blank",rel:"noreferrer",className:"badge badge-pill theme-gradient-badge no-decoration mr-2",children:[Object(s.jsx)("span",{className:"fa fa-github mr-1"}),"Github"]}),Object(s.jsxs)("a",{role:"button",href:"https://www.linkedin.com/in/peter-king-9254b2174/",target:"_blank",rel:"noreferrer",className:"badge badge-pill theme-gradient-badge no-decoration mr-2",children:[Object(s.jsx)("span",{className:"fa fa-linkedin-square mr-1"}),"Linkedin"]}),Object(s.jsxs)("a",{role:"button",href:"/resume.pdf",target:"_blank",rel:"noreferrer",className:"badge badge-pill theme-gradient-badge no-decoration",children:[Object(s.jsx)("span",{className:"fa fa-file-pdf-o mr-1"}),"Resume"]})]})]})]})}),Object(s.jsxs)("div",{className:"container fadeInRight pb-4",id:"accordion",children:[Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",id:"headingOne","data-toggle":"collapse","data-target":"#collapseOne",children:Object(s.jsx)("h4",{className:"mb-0 ml-3 py-2 theme-gradient font-weight-bold",children:"About Me"})}),Object(s.jsx)("div",{id:"collapseOne",className:"collapse show","data-parent":"#accordion",children:Object(s.jsx)("div",{className:"card-body",children:"I'm a Computer Science student at Southern Methodist University in Dallas, TX. I'm primarily focused on Software Development and have experience in C++, React JS, React Native, HTML, CSS, Python, and more. I work part time as a software developer at a company in Dallas during the school year. Click the Projects tab below to see what I've been working on."})})]}),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",id:"headingTwo","data-toggle":"collapse","data-target":"#collapseTwo",children:Object(s.jsx)("h4",{className:"mb-0 ml-3 py-2 theme-gradient font-weight-bold",children:"Projects"})}),Object(s.jsx)("div",{id:"collapseTwo",className:"collapse","data-parent":"#accordion",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("div",{className:"d-flex flex-wrap justify-content-around",children:[Object(s.jsx)("div",{className:"pcardwrapper",children:Object(s.jsxs)("a",{className:"pcard text-center reg-a pb-4",href:"https://apps.apple.com/US/app/id1595707496?mt=8",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("h4",{className:"mb-1 py-0",children:"RateMyBar"}),Object(s.jsxs)("h5",{className:"mb-2",children:[Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"Node"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"React"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"MySQL"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"Express"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"Docker"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"NGINX"})]}),Object(s.jsx)("p",{className:"p-y-1 mb-1 py-0",children:"A social app for rating and discovering bars in your area."}),Object(s.jsx)("a",{href:"https://www.ratemybar.app",target:"_blank",rel:"noreferrer",className:"mt-2",children:"Visit Website"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://apps.apple.com/US/app/id1595707496?mt=8",target:"_blank",rel:"noreferrer",className:"mt-2",children:"App Store"})]})}),Object(s.jsx)("div",{className:"pcardwrapper",children:Object(s.jsxs)("a",{className:"pcard text-center reg-a",href:"https://github.com/petermking18/VacationGram",target:"_blank",children:[Object(s.jsx)("h4",{className:"mb-1",children:"TravelGram"}),Object(s.jsxs)("h5",{className:"mb-2",children:[Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"React"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"HTML/CSS"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"Javascript"}),Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge mx-1 my-1",children:"SQL"})]}),Object(s.jsx)("p",{className:"p-y-1 mb-2",children:"A simple vacation sharing social website to document and discover new trips around the globe."}),Object(s.jsx)("a",{href:"https://github.com/petermking18/VacationGram",target:"_blank",children:"See on Github"})]})}),Object(s.jsx)("div",{className:"pcardwrapper",children:Object(s.jsxs)("a",{className:"pcard text-center reg-a",href:"https://github.com/petermking18/Algorithm-Library",target:"_blank",children:[Object(s.jsx)("h4",{className:"mb-1",children:"Algorithm Library"}),Object(s.jsx)("h5",{className:"mb-1",children:Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge",children:"C++"})}),Object(s.jsx)("p",{className:"p-y-1 mb-1",children:"A collection of sorting and searching algorithms, as well as a travelling salesman solver with naive, dynamic programming, and metaheuristic techniques."}),Object(s.jsx)("a",{href:"https://github.com/petermking18/Algorithm-Library",target:"_blank",children:"See on GitHub"})]})}),Object(s.jsx)("div",{className:"pcardwrapper",children:Object(s.jsxs)("a",{className:"pcard text-center reg-a",href:"https://github.com/petermking18/Data-Structures-Library",target:"_blank",children:[Object(s.jsx)("h4",{className:"mb-1 py-2",children:"Data Structures Library"}),Object(s.jsx)("h5",{className:"mb-1 py-2",children:Object(s.jsx)("span",{className:"badge badge-pill theme-gradient-badge",children:"C++"})}),Object(s.jsx)("p",{className:"p-y-1 mb-1 py-2",children:"Custom implementations of useful data structures."}),Object(s.jsx)("a",{href:"https://github.com/petermking18/Data-Structures-Library",target:"_blank",className:"mt-2",children:"See on GitHub"})]})})]})})})]}),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",id:"headingThree","data-toggle":"collapse","data-target":"#collapseThree",children:Object(s.jsx)("h4",{className:"mb-0 ml-3 py-2 theme-gradient font-weight-bold",children:"Contact Me"})}),Object(s.jsx)("div",{id:"collapseThree",className:"collapse","data-parent":"#accordion",children:Object(s.jsxs)("div",{className:"card-body",children:[this.state.contactNeedsFields&&Object(s.jsx)("p",{className:"text-center",children:"All fields required!"}),!this.state.contactSubmitted&&Object(s.jsx)(N,{didSubmit:this.contactSubmitted,needFields:this.contactNeedsFields}),this.state.contactSubmitted&&Object(s.jsx)("p",{className:"text-center",children:"Message sent!"})]})})]})]})]})}}]),a}(r.a.Component)}];a(41),a(44);var v=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.a,{children:Object(s.jsx)(m.c,{children:f.map((function(e,t){return Object(s.jsx)(m.a,Object(l.a)({},e),t)}))})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.8adb92b0.chunk.js.map