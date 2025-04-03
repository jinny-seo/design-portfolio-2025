exports.id=73,exports.ids=[73],exports.modules={2024:(A,e,a)=>{Promise.resolve().then(a.bind(a,7953))},5576:(A,e,a)=>{Promise.resolve().then(a.bind(a,8024))},8024:(A,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var i=a(5512),t=a(9352),l=a(9334),s=a(8009),r=a(5103),n=a(28),g=a(8311),d=a(4589),h=a(5375),c=a(9039);let m=({label:A,image:e,imageHover:a,link:t})=>(0,i.jsx)(c.G,{href:t,children:(0,i.jsx)(h.A,{children:(0,i.jsxs)("div",{className:"flex flex-col justify-center gap-[0.26rem] ml-[0.04rem] mt-[0.1rem] min-w-[3.5rem] md:min-w-[4rem] items-center ",children:[(0,i.jsx)(r.default,{src:e,alt:"",width:24,className:"object-cover group-hover:hidden"}),(0,i.jsx)(r.default,{src:a,alt:"",width:24,className:"object-cover group-hover:block hidden"}),(0,i.jsx)("span",{className:"font-Tiny5 text-sm text-center leading-none",children:A})]})})});var o=a(4809),E=a(6745);let p=()=>{let A=(0,l.usePathname)(),[e,a]=(0,s.useState)(null),[t,h]=(0,s.useState)(!1);if((0,s.useEffect)(()=>{a(A.replace("/projects/","")),h(!0)},[A]),!t||!e)return null;let c=n.J.findIndex(A=>A.link===e);if(-1===c)return null;let p=n.J[(c-1+n.J.length)%n.J.length],B=n.J[(c+1)%n.J.length],u=`/#project-${e}`,w=n.J[c].date,x=w.match(/\d{4}/)?.[0];return(0,i.jsxs)("div",{children:[(0,i.jsx)(E.v,{children:(0,i.jsxs)("div",{className:"font-Doto",children:[(0,i.jsxs)("span",{children:["Project ",c+1]}),(0,i.jsx)("span",{className:"px-1",children:"\xb7"}),(0,i.jsx)("span",{children:n.J[c].company})]})}),(0,i.jsxs)("nav",{className:"flex gap-[0.25rem] my-[0.2rem]",children:[(0,i.jsx)("div",{className:"py-[1.5px]",children:(0,i.jsx)(m,{label:"Work",image:g.n.arrowCurve,imageHover:g.n.arrowCurveHover,link:u})}),(0,i.jsxs)("div",{className:"flex flex-col flex-1 text-sm leading-[160%] md:text-[1rem]",children:[(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)(o.A,{children:(0,i.jsxs)("div",{className:"flex gap-[0.6rem] px-[0.4rem]",children:[(0,i.jsx)(r.default,{src:d.K.calendar,alt:"",width:15,className:""}),(0,i.jsxs)("span",{className:"flex-1 font-Doto",children:[(0,i.jsx)("span",{className:"hidden md:inline",children:w}),(0,i.jsx)("span",{className:"inline md:hidden",children:x})]})]})})}),(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)(o.A,{children:(0,i.jsxs)("div",{className:"flex gap-[0.6rem] px-[0.4rem]",children:[(0,i.jsx)(r.default,{src:d.K.clock,alt:"",width:15,className:""}),(0,i.jsxs)("span",{className:"flex-1 font-Doto",children:[(0,i.jsx)("span",{className:"hidden md:inline",children:n.J[c].duration}),(0,i.jsx)("span",{className:"inline md:hidden truncate",children:n.J[c].duration.replace("months","mo")})]})]})})})]}),(0,i.jsx)("div",{className:"py-[1.5px]",children:(0,i.jsx)(m,{label:"Prev",image:g.n.arrowLeft,imageHover:g.n.arrowLeftHover,link:p.link})}),(0,i.jsx)("div",{className:"py-[1.5px]",children:(0,i.jsx)(m,{label:"Next",image:g.n.arrowRight,imageHover:g.n.arrowRightHover,link:B.link})})]})]})},B=()=>{let A=(0,l.usePathname)(),[e,a]=(0,s.useState)(null),[t,r]=(0,s.useState)(!1);if((0,s.useEffect)(()=>{a(A.replace("/projects/","")),r(!0)},[A]),!t||!e)return null;let d=n.J.findIndex(A=>A.link===e);if(-1===d)return null;let h=n.J[(d-1+n.J.length)%n.J.length],c=n.J[(d+1)%n.J.length],o=`/#project-${e}`,E=n.J[d].date;return E.match(/\d{4}/)?.[0],(0,i.jsxs)("nav",{className:"flex my-[0.3rem] h-[3.75rem]",children:[(0,i.jsx)(m,{label:"Work",image:g.n.arrowCurve,imageHover:g.n.arrowCurveHover,link:o}),(0,i.jsxs)("div",{className:"flex gap-[0.15rem]",children:[(0,i.jsx)("div",{className:"pr-3 md:pr-5 border-slate-500/40 border-r mt-[6px] mb-[3px]"}),(0,i.jsx)("div",{className:"pr-3 md:pr-5 border-slate-500/40 border-l mt-[6px] mb-[3px]"})]}),(0,i.jsxs)("div",{className:"flex  flex-1 gap-[0.25rem]",children:[(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)(m,{label:"Prev project",image:g.n.arrowLeft,imageHover:g.n.arrowLeftHover,link:h.link})}),(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)(m,{label:"Next project",image:g.n.arrowRight,imageHover:g.n.arrowRightHover,link:c.link})})]})]})};function u({children:A}){return(0,i.jsx)("div",{className:"bg-hero-grid",children:(0,i.jsx)("div",{className:"mx-auto max-w-[1100px] p-container ",children:(0,i.jsx)(t.A,{children:(0,i.jsxs)("main",{className:"flex flex-col ",children:[(0,i.jsx)(p,{}),A,(0,i.jsx)(B,{})]})})})})}},6597:(A,e,a)=>{"use strict";a.d(e,{HV:()=>l,QH:()=>s,pD:()=>r});var i=a(7204),t=a(3572);let l={ABinternaldash:{src:"/_next/static/media/AB_internal-dash.d4af50a0.png",height:2272,width:3280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAG1BMVEX3+Pjw8fH09PPq7O38/PzU193f4ebj5efDxsjyJ3oPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nB3BiQ0AIAwDscvTwv4TI2GzijN32TnKjjmpNCkyRoCUhM8W7QMRGwCAlNapLAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},ABinitialdesign:{src:"/_next/static/media/AB_initial-design.4b431a7a.png",height:847,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX4+fjw8/Kzy9y4zt65z+B1CLC/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgZmJiZmJiYmGAAEYGBkZGBkYQAHOgohA+AAQ2ACMo/wcXAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},ABinitialdesignfilters:{src:"/_next/static/media/AB_initial-design-filters.034153ed.png",height:847,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEV5enp8fXz6+vqlpaVzdHRbZ2/29vaBgYCOlp1RXWYLwiMbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nB3JwQ0AIAwDsUvaFNh/YQQ/SyZJzh4jaXWNAdHlD3V5eHp1AQw/AHT+GO/2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},ABscore:{src:"/_next/static/media/AB_score.abb0698f.png",height:789,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAD1BMVEX////9/fv5+/no9O37+edpZ51RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nB3BgQ0AAAiAILX+v7ktAOQpWlG4zRwA8wAdjjWXEwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},ABimprovement2:{src:"/_next/static/media/AB_improvement-2.9d1e2895.png",height:732,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEWAf35faHB8hYygnpx7fHlnb3fLlljLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAF0lEQVR4nGNgBAFWJiYGFgYGBhYGZmYAAPwAHfU5xYAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},ABimprovement3:{src:"/_next/static/media/AB_improvement-3.33447d05.png",height:1920,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEVpb3TGxsf+/v6pr7V6eXe6u7p8e3uvtbqMi4rt7e3t7u0tSu6NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJklEQVR4nDXBgQ0AIAwCMBQY0/8PNlliC3xSlVsFr2GcPS4YkgkfCREAf6fVuckAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},ABgif:{src:"/_next/static/media/AB_video.ca55d2e3.gif",height:1916,width:2878,blurWidth:0,blurHeight:0},ABfindings:{src:"/_next/static/media/AB_findings.903575c6.png",height:2652,width:4744,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEX5+fn8/Pzm5+vu8vL28O7yxLD3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nGNgYmJiZgABZiZmJmYWJgYGRkZGBkYGCAIzAQNdACawcfvQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},ABbacklog:{src:"/_next/static/media/AB_backlog.ac650974.png",height:1400,width:1817,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEX29vb8/Pzy8fHp6enIyMjLy8tDk6ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nBXGwRHAQBACINS9/lvOhBdOoqtLwniRwv3p5llr9VI1HwggAE8Xdr/9AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},s={CrayonOldMyFeed:{src:"/_next/static/media/Crayon-old_my-feed.ad8e9de0.png",height:1400,width:2608,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEX3+Pz9/f/z9PfZ4vHZ4vBAVlYTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIElEQVR4nB3JwQ0AAAiDQKjuP7OpvyMQUJFAGsUOFv48AjYAH3NdO3sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},CrayonOldSavedSearches:{src:"/_next/static/media/Crayon-old_saved-searches.eb913790.png",height:901,width:1593,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEX8/P33+Pjhd2dFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGNgZGSAAEZGRkYGEA8sAGGACAgDLAUAAdcAFUG5aG8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},CrayonOldTeamActivity:{src:"/_next/static/media/Crayon-old_team-activity.c81ac96a.png",height:1400,width:2608,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEX+/v73+Pft8PDf4uPFy80muecmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nGNgZGRkAAMmJkYQYGCACDAxMzAygZjMLAAB3gAgVxrx9QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},CrayonNewInsights:i.A,CrayonNewDropdown:t.A,CrayonNewAppcues:{src:"/_next/static/media/Crayon-new_appcues.15c2dae7.png",height:2048,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAHlBMVEWipqecoqTs7u/6+/u4u7ykqaqorK2TlpdscHHBxMRnYroMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAK0lEQVR4nCXHxxHAIADEQF0g9d8wg63XirbVknCctQc4ydEHuwLmZPCn91wPmAB04N678wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},CrayonNewGong1:{src:"/_next/static/media/Crayon-new_gong-1.e6e6dfc6.png",height:728,width:1274,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEX////n8vrv+P75/P739vXX5/LN3vAhVBUgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYGFhYWZgYGBgZmVlZGQCMdlYmRgZmUBiaAAABrYANe5xlzoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},CrayonNewGong2:{src:"/_next/static/media/Crayon-new_gong-2.1ba66ff7.png",height:900,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEX9/v709/opjovUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgYGRkZAADZAaECWdAxQEByAASBDxGGwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},CrayonCompetitiveAnalysis:{src:"/_next/static/media/Crayon_competitive-analysis.40d48283.png",height:1389,width:1634,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAP1BMVEX6+vv8/Pz18/Pz9ff8/f3t7u/3+Pn09fju8PLr7Ozp7e/f6er09PTj5eH29vjHxL6Lj5jY0M3u7Om+qJv////FSRZyAAAAFHRSTlPg+tS617zy39Lg47r+38Xd3cfy1ERoKpQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicBcGHAcAwCAMwQyBAVpf/v7USvNLDMBHsg+QNrDdIXjj7e2pXg0qXHCsBCqMTmKbqx9oPSIsCISlkBN0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},CrayonNavIterations:{src:"/_next/static/media/Crayon_early-iterations.1a71cdc7.png",height:1877,width:2234,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAKlBMVEX3+Pj09fbz9fXv7+/w8PH3+fnm5ub8/P3k5OTw8PD4+Pjk4+P4+fn////MQ30hAAAADHRSTlPhy8Xj1+fE6tn71/Xwpd/3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nB3JORIAIQwDQfmQDaz8/+9uQTBJDyoqV4Uj9tpfKmCAJejoGVLCE7uDEnum4Xn89gMjyAEnejb+IAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},CrayonUserTesting1:{src:"/_next/static/media/Crayon_user-testing-1.25114875.png",height:851,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEX///7w8PD6+/vo6vD09feBy9jY8PM8l8Ou4+XHDtaxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgYWZmYmJgY2VgZGZkZGHgYAcxWMAiTEwMIMAEAAZ4AE8bfhY/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},CrayonUserTesting2:{src:"/_next/static/media/Crayon_user-testing-2.65448f18.png",height:851,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEX29/fv8fP+/v7i6fLY2NfDy+mfgtDIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nBXHsREAIAwAIT7R/Vf2pEMVHcqMn7CXNd8DAnYAKGlfjrcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},CrayonUserTesting3:{src:"/_next/static/media/Crayon_user-testing-3.98808290.png",height:901,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEX09vfx8vL+/v7w7+/v6uqZ2d/rwsH25eVUo8rS7fHL7vBfsc3Iq8/BAAAAAnRSTlP+/T+gj6oAAAAJcEhZcwAACxMAAAsTAQCanBgAAAApSURBVHicHcGJEYAwDMRAobPzQP/9MskueOymKmgvxphqf1SSyMvD5Q8MQwB9y61yEwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},r={MimicOld:{src:"/_next/static/media/Mimic_old.b0f262fa.png",height:1479,width:1851,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEX8/Pz39/dfX1/q6OhgYGBhYWC824cZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nC2JAQoAIBDCNqv/fzm8EgQ3OdIsoqCSmjYWZzzB/s8FBJcAJJoxpYYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},MimicNewNodesOverview:{src:"/_next/static/media/Mimic_new-nodes-overview.fdcb5374.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEX6+vvz9vf29fLo6uo/Pj1PTUlGRUOo9d1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIklEQVR4nB3GsQ0AMAzDMMlO+//JAcKJvAqk/JqgzAWZcBYEWQAyJfP3mQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},MimicNewNodesDetails1:{src:"/_next/static/media/Mimic_new-node-details-1.48adfc6c.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX7+/v19fWjogKvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHUlEQVR4nGNgZGQAAUYGRgYGRkYQBRJgBDGhgBEAATQADyOQreAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},MimicNewNodesDetails2:{src:"/_next/static/media/Mimic_new-node-details-2.5937b27b.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEX7+/r19vX59d7v8O7Z2Ng47IPVAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nGNgZmQAARYGJiYmJkYQB4yZGZkhDEYGRgACiQAgfFB/6QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},MimicNewNodesDetails3:{src:"/_next/static/media/Mimic_new-node-details-3.c7524a9a.png",height:1600,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEX29vb7+/vx7+5joWF1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nC3HwQ0AIACEsB77D2008iqyG1UM7/Q1BwI1ABpAhLl3AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},MimicDS:{src:"/_next/static/media/Mimic_ds.a1e5d95e.png",height:701,width:1033,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEX5+Pr+/v708vLg4uM0BlKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYmZgBAEGBgjNyMDExAACWBgAA2QAIO/YyBwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},MimicMarketing:{src:"/_next/static/media/Mimic_marketing.c0e7aeb8.png",height:918,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEUCAgEUEg0qJRoZgXuWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNgQABGJiZGVAYDExNMDioAAQACWwATuYDMtgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},MimicDiagram:{src:"/_next/static/media/Mimic_diagram.b7a1011c.png",height:1860,width:2685,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAADFBMVEX4+Pn+/v7z8/To6+wO9BRUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nDXIsQ0AMBCDQPDvv3NEESp0YCFsAuIfsjVX6Zb6AATfADLCMth7AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}}},2661:(A,e,a)=>{"use strict";a.d(e,{R:()=>t});var i=a(5512);a(8009);let t=({children:A})=>(0,i.jsx)("ul",{className:"list-disc pl-5 mb-0",children:A})},4546:(A,e,a)=>{"use strict";a.d(e,{Q:()=>t});var i=a(5512);a(8009);let t=({children:A,fullWidth:e=!1,bgNone:a=!1,removeSpaceBottom:t=!1,removeSpaceTop:l=!1})=>(0,i.jsx)("div",{className:`${a?"bg-transparent":"bg-white"}`,children:(0,i.jsx)("div",{className:`mx-auto flex flex-col 
                ${e?"w-full p-6 pb-8":"px-6 pt-8 pb-10 md:p-12 lg:p-16 max-w-[650px]"}
            `,children:A})})},9959:(A,e,a)=>{"use strict";a.d(e,{D:()=>t});var i=a(5512);a(8009);let t=({children:A})=>(0,i.jsx)("div",{className:"flex flex-col gap-8 md:gap-12 lg:gap-14",children:A})},2746:(A,e,a)=>{"use strict";a.d(e,{y:()=>t});var i=a(5512);a(8009);let t=({children:A,sectionTitle:e,smaller:a=!1})=>(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[e&&(a?(0,i.jsx)("h4",{className:"title-4 mt-4",children:e}):(0,i.jsx)("h3",{className:"title-2 ",children:e})),A]})},1819:(A,e,a)=>{"use strict";a.d(e,{p:()=>l});var i=a(5512);a(8009);var t=a(5103);let l=({src:A,caption:e,alt:a="",spaceBottom:l=!1,className:s="border"})=>(0,i.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,i.jsx)(t.default,{className:`shadow-sm border-slate-200 ${s}`,src:A,alt:a}),e&&(0,i.jsx)("p",{className:`pt-4 caption ${l?"pb-4":"pb-0"}`,children:e})]})},6632:(A,e,a)=>{"use strict";a.d(e,{R:()=>l});var i=a(5512);a(8009);var t=a(4809);let l=({title:A})=>(0,i.jsx)(t.A,{children:(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsx)("h2",{className:"font-Doto title-3 py-[0.22rem] mx-auto",children:A})})})},7953:(A,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});let i=(0,a(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jinny/design-portfolio-2025/src/app/projects/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jinny/design-portfolio-2025/src/app/projects/layout.tsx","default")}};