import{u as d,j as t,m as n}from"./animations-D4aE4ZH-.js";import{a as l}from"./vendor-Dztk_LuL.js";import{S as p}from"./SEO-BUYEm7Cw.js";import{H as m}from"./Hero-8s7ckvIG.js";import{n as u}from"./navigation-CS1s6ytJ.js";import"./seo-YELAgV3Z.js";import"./index-CoemunLn.js";const j=()=>{const i=l.useRef(null),o=d(i,{once:!0,amount:.1}),s=()=>{u("/contact")},c=l.useMemo(()=>[{step:1,title:"Application",description:"Complete our online application form with your background and motivation",duration:"5-10 minutes",hasButton:!0},{step:2,title:"Interview",description:"Brief conversation about your goals, motivation, and program fit",duration:"30 minutes"},{step:3,title:"Program Selection",description:"Choose your program based on interests and career goals with our guidance",duration:"1 week"},{step:4,title:"Training",description:"Intensive hands-on training with experienced instructors and real projects",duration:"6 months"},{step:5,title:"Career Support",description:"Job placement assistance, resume building, and interview preparation",duration:"Ongoing"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"How It Works - For Students & Graduates",description:"Step-by-step guide to joining our programs. From application to career placement - here's your journey to a tech career.",canonical:"/how-it-works/students-graduates"}),t.jsxs("div",{id:"main-content",className:"min-h-screen bg-white pt-24",children:[t.jsx(m,{title:"Your Path to Tech Career",subtitle:"How It Works - For Students & Graduates",description:"A clear, step-by-step path from application to career placement. We guide you every step of the way."}),t.jsx("section",{ref:i,className:"section bg-white",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"relative timeline-container",children:[t.jsx("div",{className:"timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2",style:{backgroundColor:"rgba(12, 45, 90, 0.2)"}}),c.map((e,a)=>t.jsxs(n.div,{initial:{opacity:0,y:20},animate:o?{opacity:1,y:0}:{},transition:{duration:window.innerWidth<=768?.3:.6,delay:window.innerWidth<=768?a*.05:a*.1,ease:"easeOut"},className:`relative mb-12 flex step-container ${a%2===0?"flex-row":"flex-row-reverse"}`,children:[t.jsx("div",{className:"timeline-point absolute left-1/2 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-10",style:{backgroundColor:"#0c2d5a"},children:e.step}),t.jsx("div",{className:`content-card w-5/12 ${a%2===0?"pr-8 text-right":"pl-8"}`,children:t.jsxs("div",{className:"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border p-6",style:{borderColor:"rgba(12, 45, 90, 0.1)"},children:[t.jsxs("div",{className:`flex flex-col header-container ${a%2===0?"sm:flex-row-reverse":"sm:flex-row"} sm:items-center sm:justify-between mb-3`,children:[t.jsx("h3",{className:"heading-sm",style:{color:"#0c2d5a"},children:e.title}),t.jsx("span",{className:"text-sm font-medium mt-1 sm:mt-0 px-2 py-1 rounded-full",style:{color:"#0c2d5a",backgroundColor:"rgba(12, 45, 90, 0.1)"},children:e.duration})]}),t.jsx("p",{className:"text-body text-gray-600 mb-4 leading-relaxed",children:e.description}),e.hasButton&&t.jsx(n.button,{className:`button-alignment ${a%2===0?"ml-auto":""}`,style:{padding:"12px 24px",borderRadius:"50px",background:"#0c2d5a",color:"white",border:"none",fontWeight:"600",fontSize:"14px",cursor:"pointer",boxShadow:"0 4px 15px rgba(12, 45, 90, 0.3)",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px) scale(1.05)",r.currentTarget.style.boxShadow="0 6px 20px rgba(12, 45, 90, 0.4)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0) scale(1)",r.currentTarget.style.boxShadow="0 4px 15px rgba(12, 45, 90, 0.3)"},whileHover:window.innerWidth>768?{scale:1.05}:{},whileTap:{scale:.98},transition:{duration:.15},onClick:s,children:"Start Application"})]})}),t.jsx("div",{className:"empty-space w-5/12"})]},e.step))]})}),t.jsx(n.div,{initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{duration:.8,delay:.8},className:"text-center mt-16",children:t.jsxs("div",{className:"rounded-2xl p-8 border",style:{backgroundColor:"rgba(12, 45, 90, 0.05)",borderColor:"rgba(12, 45, 90, 0.1)"},children:[t.jsx("h3",{className:"heading-md mb-4",style:{color:"#0c2d5a"},children:"Ready to Get Started?"}),t.jsx("p",{className:"text-lg mb-6 max-w-2xl mx-auto text-gray-700",children:"Applications are rolling admission. Start your application today and begin your journey to a tech career."}),t.jsx(n.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:s,style:{padding:"16px 32px",borderRadius:"50px",background:"#0c2d5a",color:"white",border:"none",fontWeight:"600",fontSize:"16px",cursor:"pointer",boxShadow:"0 8px 25px rgba(12, 45, 90, 0.3)",transition:"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-3px) scale(1.05)",e.currentTarget.style.boxShadow="0 12px 30px rgba(12, 45, 90, 0.4)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)",e.currentTarget.style.boxShadow="0 8px 25px rgba(12, 45, 90, 0.3)"},children:"Begin Application"})]})})]})})]}),t.jsx("style",{children:`
        /* Performance optimizations for mobile */
        @media (max-width: 768px) {
          /* Enable hardware acceleration */
          .step-container {
            transform: translateZ(0);
            will-change: transform, opacity;
          }
          
          /* Optimize animations for mobile */
          .timeline-point,
          .content-card {
            backface-visibility: hidden;
            transform: translateZ(0);
          }
          
          /* Reduce motion for better performance */
          .timeline-container {
            position: relative !important;
          }
          
          /* Timeline Linie links positionieren auf Mobile */
          .timeline-line {
            left: 20px !important;
            transform: none !important;
            background-color: rgba(12, 45, 90, 0.2) !important;
          }
          
          /* Alle Steps als single column auf Mobile */
          .step-container {
            flex-direction: column !important;
            margin-bottom: 24px !important;
            padding-left: 40px !important;
          }
          
          /* Timeline Punkt links positionieren */
          .timeline-point {
            left: 20px !important;
            top: 8px !important;
            transform: none !important;
            width: 32px !important;
            height: 32px !important;
          }
          
          /* Content Card full width auf Mobile */
          .content-card {
            width: 100% !important;
            padding: 0 !important;
            text-align: left !important;
          }
          
          /* Empty space entfernen auf Mobile */
          .empty-space {
            display: none !important;
          }
          
          /* Header immer links ausrichten auf Mobile */
          .header-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          
          /* Button immer links ausrichten auf Mobile */
          .button-alignment {
            margin-left: 0 !important;
            align-self: flex-start !important;
          }
        }
      `})]})};export{j as default};
