(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1338:(e,r,t)=>{Promise.resolve().then(t.bind(t,8453))},8453:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>U});var l=t(5155),i=t(2115),s=t(5565),a=t(5301);let n=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),o=e=>{let{label:r,image:t,imageHover:i,link:a,size:o="sm",isActive:d}=e,c={sm:32,md:40,lg:48};return(0,l.jsx)("a",{href:a,className:"",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center gap-1 items-center\n            ".concat(d?"bg-purple-600/20":"bg-transparent","\n            pt-1 w-[72px] h-[72px] rounded-[3px] hover:bg-purple-600/20 group"),children:[(0,l.jsx)(s.default,{src:t,alt:r,width:c[o],height:c[o],className:"object-cover group-hover:hidden"}),(0,l.jsx)(s.default,{src:i,alt:r,width:c[o],height:c[o],className:"object-cover group-hover:block hidden"}),(0,l.jsx)("span",{className:"font-Tiny5 text-[0.82rem]",children:n(r)})]})})},d=e=>{let[r,t]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let r=()=>{let r=null;for(let t of e){let e=document.getElementById(t);if(e){let l=e.getBoundingClientRect();if(l.top<=window.innerHeight/2&&l.bottom>=window.innerHeight/2){r=t;break}}}t(r)};return window.addEventListener("scroll",r),r(),()=>window.removeEventListener("scroll",r)},[e]),r},c=[{label:"home",image:a.n.computer,imageHover:a.n.computerHover},{label:"work",image:a.n.art,imageHover:a.n.artHover}],m=()=>{let e=d(["work","resume","contact"]);return(0,l.jsx)("nav",{className:"mx-2 mt-2 mb-1",children:(0,l.jsxs)("ul",{className:"flex list-none gap-1 ",children:[c.map(r=>(0,l.jsx)("li",{children:(0,l.jsx)(o,{image:r.image,imageHover:r.imageHover,label:r.label,size:"sm",link:"home"===r.label?"#":"#".concat(r.label),isActive:r.label===e})},r.label)),(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"hidden md:block",children:(0,l.jsx)(o,{image:a.n.note,imageHover:a.n.noteHover,label:"resume",size:"sm",link:"#resume"})}),(0,l.jsx)("div",{className:"md:hidden",children:(0,l.jsx)("a",{href:"/seo-resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 -mb-[0.84rem] font-Doto",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center gap-1 items-center pt-1 w-[72px] h-[72px] rounded-[3px] hover:bg-purple-600/20 group",children:[(0,l.jsx)(s.default,{src:a.n.note,alt:"",width:32,className:"object-cover group-hover:hidden"}),(0,l.jsx)(s.default,{src:a.n.noteHover,alt:"",width:32,className:"object-cover group-hover:block hidden"}),(0,l.jsx)("span",{className:"font-Tiny5 text-[0.82rem]",children:"Resume"})]})})})]})]})})},h=()=>{let[e,r]=(0,i.useState)(!0),t=(0,i.useRef)(0),l=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e;let i=()=>{l.current=!0},s=()=>{let i=window.scrollY;l.current&&(i<t.current?r(!0):i>t.current&&r(!1)),t.current=i,clearTimeout(e),e=setTimeout(()=>{l.current=!1},100)};return window.addEventListener("wheel",i),window.addEventListener("scroll",s),()=>{window.removeEventListener("wheel",i),window.removeEventListener("scroll",s)}},[]),e};var x=t(5446),b=t(2348),g=t(705);function u(e){let{onClick:r,icon:t,label:i,disabled:a,compact:n=!1}=e;return(0,l.jsxs)(g.A,{disabled:a,compact:n,children:[t&&(0,l.jsx)("span",{className:"flex items-center justify-center \n      ".concat(n?"w-[1rem] h-[0.9rem]":"w-[1.5rem] h-[1.5rem]"," \n      ").concat(a?"opacity-50":""," "),children:(0,l.jsx)(s.default,{src:t,alt:"",width:"".concat(n?12:14),height:"".concat(n?12:14)})}),i&&(0,l.jsx)("span",{className:"h-full text-center font-Doto text-[0.94rem] leading-[1.5rem] px-3",children:i})]})}var p=t(8752),f=t(4899);let A=e=>{let{currProjLink:r,prevProjLink:t,nextProjLink:i}=e;return(0,l.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(f.G,{href:r,children:(0,l.jsx)(u,{label:"View"})})}),(0,l.jsxs)("div",{className:"flex flex-row gap-[0.1rem]",children:[t?(0,l.jsx)("a",{href:t,children:(0,l.jsx)(u,{icon:p.K.triangleUp})}):(0,l.jsx)(u,{icon:p.K.triangleUpDisabled,disabled:!0}),i?(0,l.jsx)("a",{href:i,children:(0,l.jsx)(u,{icon:p.K.triangleDown})}):(0,l.jsx)(u,{icon:p.K.triangleDownDisabled,disabled:!0})]})]})};var v=t(3205),j=t(9214);let w=e=>{let{name:r,company:t,description:i,date:a,link:n,image:o,prevProjLink:d,nextProjLink:c}=e;return(0,l.jsxs)("div",{className:"md:relative md:mr-[5rem] lg:mr-[16rem] xl:mr-[18rem] lg:max-w-[1024px]",children:[(0,l.jsxs)(b.A,{label:r,children:[(0,l.jsxs)(f.G,{href:n,children:[(0,l.jsx)(j.v,{label:r}),(0,l.jsx)(v.A,{children:(0,l.jsx)(s.default,{src:o,alt:"Case study hero",className:"transition duration-300 hover:brightness-75"})})]}),(0,l.jsxs)("div",{className:"md:hidden flex flex-col gap-4 mx-3 mt-4 mb-3",children:[(0,l.jsx)("p",{className:"",children:i}),(0,l.jsx)(A,{currProjLink:n,prevProjLink:d,nextProjLink:c})]})]}),(0,l.jsx)("div",{className:"hidden md:block",children:(0,l.jsx)("div",{className:"absolute bottom-[12%]  -right-[5rem] lg:-right-[3.5rem] xl:-right-[5rem]  w-[26rem] xl:w-[28rem]",children:(0,l.jsxs)(b.A,{label:t,date:a,children:[(0,l.jsx)(j.v,{children:(0,l.jsxs)("p",{children:[(0,l.jsx)("span",{children:t}),(0,l.jsx)("span",{className:"mx-1",children:"\xb7"}),(0,l.jsx)("span",{children:a})]})}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 mx-3 mt-4 mb-3",children:[(0,l.jsx)("p",{className:"",children:i}),(0,l.jsx)(A,{currProjLink:n,prevProjLink:d,nextProjLink:c})]})]})})})]})},N=[{name:"Medium",image:p.K.medium,href:"https://medium.com/@eunjinnyseo",tooltip:"Writing"},{name:"Behance",image:p.K.behance,href:"https://www.behance.net/jinny_eunji_seo",tooltip:"Art"},{name:"Code",image:p.K.code,href:"https://codesandbox.io/u/jinny-seo",tooltip:"Code"},{name:"Instagram",image:p.K.instagram,href:"https://www.instagram.com/jinnyse0",tooltip:"Life"}],y=()=>(0,l.jsx)("ul",{className:"flex gap-4 py-1",children:N.map((e,r)=>(0,l.jsxs)("li",{className:"relative group",children:[(0,l.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(s.default,{src:e.image,alt:e.name,width:26,height:26,className:"block md:hidden"}),(0,l.jsx)(s.default,{src:e.image,alt:e.name,width:30,height:30,className:"hidden md:block"})]}),(0,l.jsx)("div",{className:"absolute left-1/2 -translate-x-1/2 -top-9 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black",children:e.tooltip})]},r))}),k=()=>(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("p",{className:"font-Doto p-hero",children:"In the wild"}),(0,l.jsx)(y,{})]}),D=()=>{let[e,r]=(0,i.useState)(!1),t=async t=>{e||(await navigator.clipboard.writeText("ogum536@gmail.com"),r(!0),setTimeout(()=>{r(!1)},1500))};return(0,l.jsx)("button",{onClick:t,disabled:e,className:"font-Doto mx-1\n        text-blue-800 p-hero transition-colors duration-300\n        ".concat(e?"cursor-default text-blue-800":"hover:underline cursor-pointer","\n      "),children:e?"Copied!":"Copy"})},H=()=>(0,l.jsxs)("div",{className:"flex flex-col gap-1 mr-12",children:[(0,l.jsx)("p",{className:"font-Doto p-hero",children:"Contact me"}),(0,l.jsxs)("div",{className:"inline-flex w-fit gap-2 items-center",children:[(0,l.jsx)(s.default,{src:p.K.mail,alt:"",width:15,height:15,className:"shrink-0 mx-[1px]"}),(0,l.jsx)("span",{className:"mb-[0rem] p-hero",children:"ogum536@gmail.com"}),(0,l.jsx)(D,{})]}),(0,l.jsxs)("a",{className:"inline-flex w-fit gap-2",href:"https://linkedin.com/in/jinny-seo",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(s.default,{src:p.K.link,alt:"",width:17,height:17}),(0,l.jsx)("span",{className:"mt-[0rem] p-hero underline underline-offset-2 hover:no-underline",children:"LinkedIn"})]})]}),E=()=>(0,l.jsx)("section",{id:"hero",className:"p-container",children:(0,l.jsx)("div",{className:"flex mx-1 md:h-[80vh] md:items-center",children:(0,l.jsxs)("div",{className:"flex flex-1",children:[(0,l.jsx)("div",{className:"lg:pr-12 xl:pr-16",children:(0,l.jsxs)("div",{className:"flex-1 w-full ",children:[(0,l.jsx)("h1",{className:"title-hero",children:"Eunji Jinny Seo"}),(0,l.jsx)("p",{className:"subtitle-hero",children:"Enterprise Product Designer"}),(0,l.jsx)("p",{className:"subtitle-hero divider-hero-spacing",children:". . ."}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("p",{className:"max-w-[800px] lg:max-w-[836px] p-hero",children:"I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters."}),(0,l.jsx)("p",{className:"max-w-[800px] lg:max-w-[836px] p-hero"}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 my-6 lg:hidden",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)(H,{})}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)(k,{})})]})]})]})}),(0,l.jsxs)("div",{className:"hidden lg:flex flex-col justify-center gap-12 pl-12 xl:pl-16 border-l border-slate-500 bg-red-500/0 p-hero max-w-[40%] min-w-[40%]",children:[(0,l.jsx)(H,{}),(0,l.jsx)(k,{})]})]})})}),C=e=>{let{title:r}=e;return(0,l.jsxs)("div",{className:"flex flex-col gap-[1rem] pb-[1rem] md:pb-[1.25rem] lg:pb-[2rem] mx-1",children:[(0,l.jsx)("h2",{className:"font-Doto text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]",children:r}),(0,l.jsx)("p",{className:"font-Doto text-[1.15rem] md:text-[1.2rem] lg:text-[1.3rem]",children:". . ."})]})};function _(e){let{children:r,leftMarginWidth:t="w-[64px] md:w-[88px] lg:w-[96px]",notebookPaperBg:i=!0}=e,s=i?"bg-notebook":"";return(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"border-r border-red-400/50 ".concat(s),children:(0,l.jsx)("div",{className:t})}),(0,l.jsx)("div",{className:"w-full ".concat(s," pl-2 pr-[2rem]"),children:r})]})}let B=e=>{let{items:r,company:t,title:i,startDate:s,endDate:a}=e;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"font-Doto leading-[1.8rem] underline ",children:[t,i?", ".concat(i):""," * ",s," – ",a]}),(0,l.jsx)("ul",{className:"list-disc ml-6",children:r.map((e,r)=>(0,l.jsx)("li",{className:"m-[0rem] p-[0rem] leading-[1.8rem] pl-2 max-w-[600px]",children:e},r))})]})},W=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"bg-white shadow-lg lg:mr-[13rem] xl:mr-[16rem] lg:max-w-[800px]",children:[(0,l.jsx)(_,{notebookPaperBg:!1,children:(0,l.jsxs)("div",{className:"flex mt-[4.5rem]",children:[(0,l.jsx)("h2",{className:"flex-1 font-Doto -mb-[0.4rem] text-[1.8rem] lg:text-[2rem]",children:"Resume"}),(0,l.jsxs)("a",{href:"/seo-resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 -mb-[0.84rem] font-Doto text-blue-800 hover:underline ",children:[(0,l.jsx)(s.default,{src:p.K.download,alt:"",width:13.5,height:13.5}),(0,l.jsx)("p",{className:"mt-[0.1rem]",children:"View PDF"})]})]})}),(0,l.jsx)(_,{children:(0,l.jsx)("div",{className:"mt-[1.8rem] aspect-[8/11]",children:(0,l.jsxs)("div",{className:"flex flex-col gap-[1.8rem] pt-[0.5rem] pb-[3rem]",children:[(0,l.jsx)(B,{company:"Mimic",title:"Senior Product Designer",startDate:"12/2023",endDate:"02/2025",items:["One of two founding designers at a cybersecurity startup, supporting company growth from $27M to $70M+ in funding","Delivered MVP in 8 months, securing U.S. government and Fortune 500 clients like REI","Established design system and brand identity, as well as ensuring WCAG compliance on the public-facing website"]}),(0,l.jsx)(B,{company:"Crayon",title:"Senior UX Designer",startDate:"08/2018",endDate:"12/2021",items:["Led platform-wide redesign of the navigation, onboarding, and integrations to improve user workflows","Shipped improvements to daily alerts and email clarity, helping users understand key feature values of the platform","Collaborated with development to create company’s first component library"]}),(0,l.jsx)(B,{company:"projekt202",title:"Experience Designer",startDate:"08/2018",endDate:"12/2021",items:["Delivered complex B2B enterprise consulting engagements for 8 companies across healthcare, financial services, and more","Built and maintained design systems for complex enterprise solutions","Created company-wide audit process for accessibility engagements and internal education materials"]}),(0,l.jsx)(B,{company:"Sabre Labs",title:"R&D UX Designer",startDate:"08/2018",endDate:"12/2021",items:["Created interactive prototypes to explore future tech applications in the travel and hospitality space","Produced tech trend reports with custom illustrations to communicate R&D insights","Published industry-first chatbot guidelines with 100k+ views and 2k+ likes"]}),(0,l.jsx)("span",{className:"font-Doto text-[1.45rem] leading-[1.8rem]",children:"Education"}),(0,l.jsx)(B,{company:"Dartmouth College",startDate:"2012",endDate:"2016",items:["B.A. in Studio Art","Minors in Computer Science and Digital Art"]})]})})})]})});function U(){let e=h();return(0,l.jsxs)("main",{className:"flex flex-col w-full ",children:[(0,l.jsx)("div",{className:"".concat(e?"-translate-y-[10%]":"translate-y-[120%]"," transition-transform duration-300 \n      fixed flex justify-center bottom-0 left-0 right-0 z-10\n      lg:translate-y-0 lg:justify-end md:m-4"),children:(0,l.jsx)("div",{className:"bg-purple-200/20 backdrop-blur-lg rounded-lg border-purple-400 border-none",children:(0,l.jsx)(m,{})})}),(0,l.jsx)("div",{className:"h-[100vh]",children:(0,l.jsx)("div",{className:"bg-hero-grid ",children:(0,l.jsx)("div",{className:"bg-hero-gradient",children:(0,l.jsx)(E,{})})})}),(0,l.jsxs)("div",{className:"flex flex-col p-container",children:[(0,l.jsx)("div",{id:"work",className:"py-container",children:(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(C,{title:"Work"}),x.J.map((e,r)=>{let t=r>0?"#project-".concat(x.J[r-1].link):null,i=r<x.J.length-1?"#project-".concat(x.J[r+1].link):null;return(0,l.jsx)("div",{id:"project-".concat(e.link),className:"pt-[1rem] md:pt-[2rem] pb-[2rem] md:pb-[4rem] ",children:(0,l.jsx)(w,{name:e.name,company:e.company,date:e.date,description:e.description,link:"/projects/".concat(e.link),image:e.image,prevProjLink:t,nextProjLink:i})},e.name)})]})}),(0,l.jsxs)("section",{id:"resume",className:"hidden md:block py-container",children:[(0,l.jsx)(W,{}),(0,l.jsxs)("div",{className:"grid grid-cols-3 gap-x-1 py-12 lg:mr-[13rem] xl:mr-[16rem] lg:max-w-[800px] justify-center",children:[(0,l.jsx)("div",{className:"col-span-1",children:(0,l.jsxs)("div",{className:"bg-green-200/70 border-orange-300/50 border-[0.05em] flex flex-col gap-y-2 px-[1.8em] py-[1.5em] w-[16em] h-[16em] aspect-[1] rotate-2 shadow-lg",children:[(0,l.jsx)("span",{className:"font-Doto text-[1.1rem]",children:"Product"}),(0,l.jsxs)("ul",{className:"grid grid-cols-1 gap-x-[0.5rem] list-inside ",children:[(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Interaction design"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Prototyping"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"User research"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"User testing"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Design systems"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Accessibility"})]})]})}),(0,l.jsx)("div",{className:"mt-4 col-span-1",children:(0,l.jsxs)("div",{className:"bg-yellow-200/80 border-yellow-300/50 border-[0.05em] flex flex-col gap-y-2 px-[1.8em] py-[1.5em] w-[16em] h-[16em] aspect-[1] -rotate-3 shadow-lg",children:[(0,l.jsx)("span",{className:"font-Doto text-[1.1rem]",children:"Design"}),(0,l.jsxs)("ul",{className:"grid grid-cols-1 gap-x-[0.5rem] list-inside ",children:[(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Figma"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Sketch"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Illustrator"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Photoshop"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"After Effects"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"InDesign"})]})]})}),(0,l.jsx)("div",{className:"col-span-1 ",children:(0,l.jsxs)("div",{className:"bg-red-200 border-red-300/50 border-[0.05em] flex flex-col gap-y-2 px-[1.8em] py-[1.5em] w-[16em] h-[16em] aspect-[1] rotate-2 shadow-lg md:-ml-8 lg:-ml-4",children:[(0,l.jsx)("span",{className:"font-Doto text-[1.1rem]",children:"Code"}),(0,l.jsxs)("ul",{className:"grid grid-cols-1 gap-x-[0.5rem] list-inside ",children:[(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"HTML/CSS"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"JavaScript"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"TypeScript"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"React"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"NextJS"}),(0,l.jsx)("li",{className:"relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0",children:"Tailwind"})]})]})})]})]}),(0,l.jsx)("footer",{className:"py-[7rem] lg:pt-[4rem] lg:pb-[0rem]",children:(0,l.jsxs)("div",{className:"flex flex-col py-container gap-6 md:gap-8 lg:gap-10 items-center lg:items-start",children:[(0,l.jsx)("p",{className:"font-Doto text-[1.15rem] md:text-[1.2rem] lg:text-[1.3rem]",children:". . ."}),(0,l.jsxs)("div",{className:"flex flex-col gap-[0.5rem] font-Doto text-center lg:text-left",children:[(0,l.jsxs)("div",{className:"block lg:hidden",children:[(0,l.jsx)("p",{children:"Hand-coded with \uD83E\uDE77 with React, NextJS, and Tailwind"}),(0,l.jsx)("a",{href:"https://github.com/jinny-seo/design-portfolio-2025",target:"_blank",rel:"noopener noreferrer",className:"text-blue-800 underline underline-offset-2 hover:no-underline",children:"View on Github"})]}),(0,l.jsxs)("div",{className:"hidden lg:block ",children:[(0,l.jsx)("span",{children:"Hand-coded with \uD83E\uDE77 with React, NextJS, and Tailwind"}),(0,l.jsx)("a",{href:"https://github.com/jinny-seo/design-portfolio-2025",target:"_blank",rel:"noopener noreferrer",className:"text-blue-800 underline underline-offset-2 hover:no-underline mx-2 px-2",children:"View on Github"})]}),(0,l.jsx)("p",{className:"my-6",children:"Jinny Seo (c) 2025"})]})]})})]})]})}},8752:(e,r,t)=>{"use strict";t.d(r,{K:()=>l});let l={triangleUp:{src:"/_next/static/media/triangle-up.bb759b1a.svg",height:18,width:18,blurWidth:0,blurHeight:0},triangleDown:{src:"/_next/static/media/triangle-down.ad05af91.svg",height:18,width:18,blurWidth:0,blurHeight:0},triangleUpDisabled:{src:"/_next/static/media/triangle-up-disabled.0d304f08.svg",height:18,width:18,blurWidth:0,blurHeight:0},triangleDownDisabled:{src:"/_next/static/media/triangle-down-disabled.7019a53f.svg",height:18,width:18,blurWidth:0,blurHeight:0},maximize:{src:"/_next/static/media/maximize.c63cf5a7.svg",height:18,width:18,blurWidth:0,blurHeight:0},calendar:{src:"/_next/static/media/calendar.2387f091.svg",height:36,width:36,blurWidth:0,blurHeight:0},clock:{src:"/_next/static/media/clock.933ccfee.svg",height:36,width:36,blurWidth:0,blurHeight:0},download:{src:"/_next/static/media/download.5169a891.svg",height:9,width:9,blurWidth:0,blurHeight:0},expand:{src:"/_next/static/media/expand.9790a3b6.svg",height:18,width:18,blurWidth:0,blurHeight:0},instagram:{src:"/_next/static/media/instagram.33b37dd7.svg",height:10,width:10,blurWidth:0,blurHeight:0},linkedin:{src:"/_next/static/media/linkedin.9732c22c.svg",height:16,width:16,blurWidth:0,blurHeight:0},medium:{src:"/_next/static/media/medium.408c6f3b.svg",height:24,width:24,blurWidth:0,blurHeight:0},mail:{src:"/_next/static/media/mail.a80bef27.svg",height:10,width:10,blurWidth:0,blurHeight:0},behance:{src:"/_next/static/media/behance.6d2acc35.svg",height:24,width:24,blurWidth:0,blurHeight:0},outbound:{src:"/_next/static/media/outbound.801273e4.svg",height:16,width:16,blurWidth:0,blurHeight:0},link:{src:"/_next/static/media/link.e5db4c6c.svg",height:24,width:24,blurWidth:0,blurHeight:0},code:{src:"/_next/static/media/code.8ba70929.svg",height:24,width:24,blurWidth:0,blurHeight:0}}},5301:(e,r,t)=>{"use strict";t.d(r,{n:()=>l});let l={computer:{src:"/_next/static/media/1-computer.400f9667.svg",height:18,width:18,blurWidth:0,blurHeight:0},computerHover:{src:"/_next/static/media/1-computer-hover.a2ff7cd5.svg",height:18,width:18,blurWidth:0,blurHeight:0},art:{src:"/_next/static/media/2-art.bbf4e13f.svg",height:18,width:18,blurWidth:0,blurHeight:0},artHover:{src:"/_next/static/media/2-art-hover.0863148a.svg",height:18,width:18,blurWidth:0,blurHeight:0},note:{src:"/_next/static/media/3-note.55e73df7.svg",height:18,width:18,blurWidth:0,blurHeight:0},noteHover:{src:"/_next/static/media/3-note-hover.6a88b41b.svg",height:18,width:18,blurWidth:0,blurHeight:0},mail:{src:"/_next/static/media/4-mail.b57fea9e.svg",height:18,width:18,blurWidth:0,blurHeight:0},mailHover:{src:"/_next/static/media/4-mail-hover.94e5d544.svg",height:18,width:18,blurWidth:0,blurHeight:0},arrowLeft:{src:"/_next/static/media/arrow-left.1b672b69.svg",height:18,width:18,blurWidth:0,blurHeight:0},arrowLeftHover:{src:"/_next/static/media/arrow-left-hover.1618d858.svg",height:18,width:18,blurWidth:0,blurHeight:0},arrowRight:{src:"/_next/static/media/arrow-right.0f31464d.svg",height:18,width:18,blurWidth:0,blurHeight:0},arrowRightHover:{src:"/_next/static/media/arrow-right-hover.d6d617d1.svg",height:18,width:18,blurWidth:0,blurHeight:0},arrowCurve:{src:"/_next/static/media/arrow-curve.237bf8a5.svg",height:18,width:18,blurWidth:0,blurHeight:0},arrowCurveHover:{src:"/_next/static/media/arrow-curve-hover.77f75f95.svg",height:18,width:18,blurWidth:0,blurHeight:0}}},5446:(e,r,t)=>{"use strict";t.d(r,{J:()=>s});var l=t(2257),i=t(3121);let s=[{name:"Building a cybersecurity platform from the ground up",company:"Mimic",date:"01/2024 — 02/2025",duration:"14 months",description:"A technical MVP transformed into a user-centered platform that secured $50M in funding through persona-driven IA and redesign",link:"mimic",image:{src:"/_next/static/media/Mimic_hero.2cfe7b88.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEX7+/v29/j19fLo6uo/Pj1PTUlGRUOug8J8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nB3BgQ0AIAyAMGDT/082seWMaMOdSmXHAtn4HgTDADbcuM8RAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},imageSecondary:{src:"/_next/static/media/Mimic_hero-node-degraded.f00c56e7.png",height:1920,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEX7+/v29vX49d7v8O7mOGvFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIElEQVR4nCWIsQ0AAAyCQP//uWlkAqg8kiSq/LB2sh4HA3MAHzGZ4lgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},{name:"Redesigning Crayon's onboarding experience",company:"Crayon",date:"02/2022 — 07/2022",duration:"6 months",description:"A simple request to port an internal tool became a top-rated customer experience through usability reframing",link:"crayon",image:l.A,imageSecondary:i.A},{name:"Transforming a pharmaceutical cost-savings platform",company:"AmerisourceBergen",date:"03/2021 - 12/2021",duration:"10 months",description:"A navigation fix developed into an onboarding system that clarified value to customers and empowered users",link:"ab",image:{src:"/_next/static/media/AB_hero.01cc8c72.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEX4+Pfx9fbv8vHn7fLd7/fd1j0rAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIElEQVR4nBXCgQ0AAAzCoFb9/+ZlAZoaItvWKvgETIIcBHQAM2b6C98AAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},imageSecondary:{src:"/_next/static/media/AB_hero-with-nav.6a794043.png",height:1920,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEXv8/XM2eT3+fm5xND9/fzi8vnq7vDBy9bS3+n+j4asAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nB3EuQ0AMAwDsZMiP/tPHMAsiKTVSlRVgU03XIntOMw78wEKrwB/pEHjVwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}}]},705:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var l=t(5155);function i(e){let{onClick:r,children:t,disabled:i,compact:s}=e;return(0,l.jsx)("div",{onClick:i?void 0:r,className:"h-full mt-[1px] group bg-slate-300 border-slate-500 border-t-[0.5px] border-l-[0.5px] rounded-[2px]\n        \n        ".concat("rounded-[2px]","\n        ").concat(i?"opacity-50 cursor-not-allowed":"cursor-pointer hover:bg-slate-400/40 active:bg-slate-400/40"),children:(0,l.jsx)("div",{className:"h-full  \n          ".concat(s?"border-slate-800 border-r-[1.5px] border-b-[1.5px] rounded-[1px]":"border-slate-600 border-r-2 border-b-2 rounded-[1px]","\n          ").concat(i?"border-slate-400":"group-active:border-slate-100"),children:(0,l.jsx)("div",{className:"h-full border-slate-300 border-l border-t rounded-[1px]\n            \n            ".concat(i?"border-slate-200":"group-active:border-slate-900"),children:(0,l.jsx)("div",{className:"h-full border-white group-hover:border-slate-100\n              \n              ".concat(s?"border-l-[1.25px] border-t-[1.25px] rounded-bl-[2px] rounded-tr-[2px] rounded-tl-[1px]":"border-l-2 border-t-2","\n              ").concat(i?"border-slate-300":"group-active:border-slate-500/90"),children:(0,l.jsx)("div",{className:"h-full \n                ".concat(s?"border-slate-500 border-r-[1.5px] border-b-[1.5px]":"border-slate-400 border-r-2 border-b-2 ","\n                ").concat(i?"border-slate-300":"group-hover:border-slate-600/50 group-active:border-slate-200/50"),children:(0,l.jsx)("div",{className:"flex w-full h-full items-center justify-center gap-1",children:t})})})})})})}},3205:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var l=t(5155);function i(e){let{children:r}=e;return(0,l.jsx)("div",{className:"h-full border-slate-300 border-t-[3px]",children:(0,l.jsx)("div",{className:"h-full border-slate-100 border-b-2 border-r-2",children:(0,l.jsx)("div",{className:"h-full border-slate-400 border-t-2 border-l-2",children:(0,l.jsx)("div",{className:"h-full border-slate-500 border-t border-l",children:(0,l.jsx)("div",{className:"h-full border-slate-300 border-b border-r",children:r})})})})})}},2348:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var l=t(5155);function i(e){let{children:r,label:t="",date:i,duration:s}=e;return(0,l.jsx)("div",{className:"bg-slate-300 border-slate-900 border-b-[0.5px] border-r-[0.5px] rounded-[5px] shadow-lg max-w-full overflow-hidden",children:(0,l.jsx)("div",{className:"border-slate-400 border-t-[0.5px] border-l-[0.5px] rounded-[4px]",children:(0,l.jsx)("div",{className:"border-slate-600 border-b-2 border-r-2 rounded-[4px]",children:(0,l.jsx)("div",{className:"border-slate-300 border-t-[1px] border-l-[1px] rounded-[3px]",children:(0,l.jsx)("div",{className:"border-slate-400 border-b-2 border-r-2 rounded-[2px]",children:(0,l.jsx)("div",{className:"border-slate-100 border-t-2 border-l-2 rounded-[2px]",children:(0,l.jsx)("div",{className:"border-slate-300 border-2 rounded-[2px] mt-[1px] ml-[1.5px] mr-[2.5px]",children:r})})})})})})})}},9214:(e,r,t)=>{"use strict";t.d(r,{v:()=>i});var l=t(5155);t(2115);let i=e=>{let{children:r,label:t}=e;return(0,l.jsx)("div",{className:"bg-blue-800 w-full mb-[1px]",children:(0,l.jsxs)("div",{className:"font-Doto text-white text-[.94rem] leading-[1.5rem] mx-2 pr-4 truncate w-full",children:[t&&(0,l.jsx)("span",{children:t}),r&&(0,l.jsx)("div",{children:r})]})})}},4899:(e,r,t)=>{"use strict";t.d(r,{G:()=>o});var l=t(5155),i=t(8173),s=t.n(i);t(2115);var a=t(6046);function n(e){return new Promise(r=>setTimeout(r,e))}let o=e=>{let{href:r,children:t,...i}=e,o=(0,a.useRouter)(),d=async e=>{e.preventDefault();let t=document.querySelector("body");null==t||t.classList.add("page-transition"),await n(500),o.push(r),await n(500),null==t||t.classList.remove("page-transition")};return(0,l.jsx)(s(),{onClick:d,href:r,...i,children:t})}},2257:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});let l={src:"/_next/static/media/Crayon_hero-dropdown.b42a21b0.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEX5+fr9/f3x9PZksMzRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nCXJwQ0AIACEsB77D23UHynCVlJmrvx4zw4CLQAbyPoq/wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},3121:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});let l={src:"/_next/static/media/Crayon_hero-insights.b22e4eff.png",height:1920,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEX8/P309vaaCtmVAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHElEQVR4nGNgZIACRkYokxHMAiGwAJjByAjiAQABgAATi3EAjwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}}},e=>{var r=r=>e(e.s=r);e.O(0,[738,173,441,517,358],()=>r(1338)),_N_E=e.O()}]);