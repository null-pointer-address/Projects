import { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Box, 
  Moon, 
  Activity} from 'lucide-react';

// --- DATA ---
const ARCHITECT_NAME = "Sonu Bose";
const CONTACT_EMAIL = "letters4bose@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/sonu-bose-65685b175/";

const THEMES = {
  oneDark: {
    name: "DARK",
    icon: <Activity size={12} />,
    bg: "bg-[#282c34]",
    nav: "bg-[#282c34]/95",
    text: "text-[#e0e6f1]", // Brightened from #abb2bf
    subtext: "text-[#9ba1aa]", // Significantly brightened from #5c6370 for legibility
    card: "bg-[#21252b] border-[#181a1f] hover:border-[#61afef]/40",
    accent: "text-[#61afef]",
    accentBg: "bg-[#61afef]",
    border: "border-[#3e4451]", // Defined borders more clearly
    footer: "bg-[#1e2227] border-[#181a1f]",
    pill: "bg-[#282c34] border-[#3e4451]",
    hex: "#282c34",
    glow: "rgba(97, 175, 239, 0.08)"
  },
  dark: {
    name: "MONO",
    icon: <Moon size={12} />,
    bg: "bg-[#050505]",
    nav: "bg-[#050505]/95",
    text: "text-white",
    subtext: "text-zinc-400", // Brightened from zinc-500
    card: "bg-[#080808] border-zinc-900 hover:border-blue-900/30",
    accent: "text-blue-500",
    accentBg: "bg-blue-600",
    border: "border-zinc-800",
    footer: "bg-[#030303] border-zinc-900",
    pill: "bg-zinc-900/50 border-zinc-800",
    hex: "#050505",
    glow: "rgba(59, 130, 246, 0.05)"
  },
  amber: {
    name: "AMBER",
    icon: <Zap size={12} />,
    bg: "bg-[#050505]",
    nav: "bg-[#050505]/95",
    text: "text-stone-50",
    subtext: "text-stone-400", // Brightened from stone-500
    card: "bg-[#080808] border-stone-900 hover:border-amber-900/40",
    accent: "text-amber-500",
    accentBg: "bg-amber-500",
    border: "border-stone-800",
    footer: "bg-[#030303] border-stone-900",
    pill: "bg-amber-950/20 border-amber-900/30",
    hex: "#050505",
    glow: "rgba(245, 158, 11, 0.06)"
  }
};

const CAREER_TENURE = [
  { 
    id: 0, year: "2012 - 2018", title: "Technical Resolution Expert", context: "L2 Support Foundation",
    focus: "Engaged in remote technical diagnostics for enterprise hardware and OS environments, resolving system conflicts across diverse architectures.",
    engineering: "Focused on root-cause analysis and developed a diagnostic framework to support operational stability.",
    perspective: "Adopted a 'Systems-Thinking' approach, aligning technical resolution with broad organizational objectives.",
    skills: ["Enterprise Systems", "RCA", "OS Diagnostics"]
  },
  { 
    id: 1, year: "2018 - 2019", title: "Technical Support Engineer", context: "Operational Mentorship",
    focus: "Supported team-wide performance benchmarks through targeted intervention and competency development.",
    engineering: "Internalized the mechanics of operational excellence—balancing team productivity with structured mentoring.",
    perspective: "Transitioned into a supervision lens, supporting collective technical effectiveness and performance metrics.",
    skills: ["Mentorship", "Support Ops", "Supervision"]
  },
  { 
    id: 2, year: "2020 - 2024", title: "Senior Analyst, Engineering Automation", context: "Automation Architecture",
    focus: "Built automation frameworks to replace manual validation cycles, focusing on reducing technical overhead through intelligent scripts.",
    engineering: "Developed modular backend utilities and automation architectures that prioritize reusability within CI/CD pipelines.",
    perspective: "Evolved toward a full-lifecycle engineering mindset, establishing technical standards to support long-term risk mitigation.",
    skills: ["Python", "Selenium", "RPA", "Architecture"]
  },
  { 
    id: 3, year: "2024 - Present", title: "Software Senior Engineer", context: "Distributed Systems",
    focus: "Architecting distributed systems and backends designed for reliability and enterprise-scale deployment.",
    engineering: "Advancing the design of scalable service architectures while engaging in architectural code reviews and team guidance.",
    perspective: "Contributed to technical modernization, supporting peer growth through shared engineering standards and knowledge transfer.",
    skills: ["FastAPI", "Distributed Systems", "AI Engineering"]
  }
];

const PROJECTS = [
  {
    title: "Service Dispatch Intelligence Suite",
    metric: "AI-LED",
    label: "Decision Logic",
    subMetric: "Risk",
    subLabel: "Mitigation",
    precision: "Outcome",
    precisionLabel: "Optimization",
    description: "Focused on automating and optimizing service dispatch decisions using AI-driven intelligence to reduce unnecessary dispatches and improve entitlement validation across support channels.",
    points: [
      "Decision Logic: Built automated eligibility checks for parts and services using telemetry inputs.",
      "Visual Listening (VL): Integrated image-based diagnostics to verify damage and prevent fraudulent claims.",
      "Risk Assessment: Contributed to models that assess fraud risk based on historical patterns and image validation.",
      "Entitlement Flow: Implemented automated component entitlement checks to validate warranty coverage and prevent dispatch when not eligible."
    ],
    result: "Targeted optimization of dispatch precision and improved accuracy across support channels."
  },
  {
    title: "Tech Direct Automation Engine",
    metric: "95%",
    label: "Automation Depth",
    subMetric: "75%",
    subLabel: "Effort Reduction",
    precision: "92%",
    precisionLabel: "Part Precision",
    description: "Engaged in development and implementation of an automation solution for the TechDirect platform to streamline work order creation for TDWeb2Case submissions, delivering significant cost savings through process optimization.",
    points: [
      "Process Automation: Leveraged Python and RPA to reduce manual processing time by over 75%.",
      "Volume Scaling: Achieved 95% automation for mail-in work orders, significantly enhancing operational throughput.",
      "Data Mining: Utilized AI-driven text mining to improve accuracy and efficiency in work order ingestion.",
      "AI Foundation: Contributed to the development of part recommendation logic achieving 92% precision."
    ],
    result: "Enhanced operational efficiency and accuracy while establishing a foundation for advanced AI part recommendations."
  }
];

export default function App() {
  const [themeKey, setThemeKey] = useState('oneDark');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const t = THEMES[themeKey as keyof typeof THEMES];

  useEffect(() => {
    document.body.style.backgroundColor = t.hex;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [t]);

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} font-sans selection:bg-blue-600 selection:text-white transition-colors duration-1000 relative overflow-x-hidden`}>
      
      {/* SUBTLE SYSTEM OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(${t.text} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" 
           style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${t.glow} 0%, transparent 50%)` }} />
      
      <nav className={`fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center ${t.nav} backdrop-blur-md border-b ${t.border}`}>
        <div className="flex items-center gap-4 text-left">
          <div className={`w-8 h-8 ${t.accentBg} flex items-center justify-center font-black text-lg text-white rounded-sm transition-colors duration-500`}>Σ</div>
          <div className="flex flex-col">
            <span className={`text-[11px] font-black uppercase tracking-[0.5em] hidden sm:block leading-none ${t.text} transition-colors duration-500`}>{ARCHITECT_NAME}</span>
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${t.accent} hidden sm:block mt-1.5 transition-colors duration-500`}>Software Senior Engineer</span>
          </div>
        </div>
        
        <div className="flex items-center gap-12">
          <div className="hidden lg:flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">
            <a href="#evolution" className={`hover:${t.text} transition-colors`}>Evolution</a>
            <a href="#outcomes" className={`hover:${t.text} transition-colors`}>Outcomes</a>
            <a href="#horizon" className={`hover:${t.text} transition-colors`}>Horizon</a>
          </div>
          
          <div className={`flex items-center p-1 rounded border ${t.border} bg-black/5 transition-colors duration-500`}>
            {Object.keys(THEMES).map((key) => (
              <button
                key={key}
                onClick={() => setThemeKey(key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-500 ${
                  themeKey === key ? `${t.accentBg} text-white shadow-lg` : `hover:bg-white/10 ${t.subtext}`
                }`}
              >
                {THEMES[key as keyof typeof THEMES].icon}
                <span className="text-[9px] font-black tracking-tighter hidden md:block">{THEMES[key as keyof typeof THEMES].name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-56 pb-32 relative z-10">
        
        {/* HERO: PRODUCT-FOCUSED PITCH */}
        <section className="mb-72">
          <div className="grid lg:grid-cols-12 gap-32 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-px w-10 ${t.accentBg} transition-colors duration-500`} />
                <span className={`text-[11px] font-black uppercase tracking-[0.5em] ${t.accent} transition-colors duration-500`}>12 Years in Motion: Learning • Building • Evolving</span>
              </div>

              <div className="space-y-16 text-left">
                <h1 className={`text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.8] uppercase opacity-95 transition-colors duration-500 ${t.text}`}>
                  Analyze.<br />
                  Build.<br />
                  <span className={`${t.accent} transition-colors duration-500`}>Resolve.</span>
                </h1>
                <p className={`text-xl md:text-3xl ${t.subtext} font-light leading-relaxed max-w-4xl tracking-tight transition-colors duration-500`}>
                  <span className={`${t.text} font-semibold transition-colors duration-500`}>12 years at Dell Technologies</span> Building on foundation of precise 
                  <span className={`${t.text} italic font-medium transition-colors duration-500`}> remote diagnostics.</span> 
                  Evolving into the large-scale orchestration of 
                  <span className={`${t.text} italic font-medium transition-colors duration-500`}> distributed autonomous intelligence.</span>
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-0 flex flex-col justify-end h-full pt-12 text-left">
              <div className={`border-t ${t.border} pt-10 pb-16 relative group transition-colors duration-500`}>
                <div className={`absolute top-0 left-0 w-8 h-px ${t.accentBg} transition-all group-hover:w-full`} />
                <p className={`text-[10px] font-black ${t.accent} uppercase tracking-widest mb-3 transition-colors duration-500`}>Impact Node 01</p>
                <div className="flex items-baseline gap-4">
                   <span className={`text-7xl font-black italic tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>95%</span>
                   <span className={`text-[11px] ${t.subtext} uppercase font-bold tracking-wider leading-tight opacity-90 transition-colors duration-500`}>Automation<br/>Depth</span>
                </div>
              </div>
              <div className={`border-t ${t.border} pt-10 relative group transition-colors duration-500`}>
                <div className={`absolute top-0 left-0 w-8 h-px ${t.accentBg} transition-all group-hover:w-full`} />
                <p className={`text-[10px] font-black ${t.accent} uppercase tracking-widest mb-3 transition-colors duration-500`}>Impact Node 02</p>
                <div className="flex items-baseline gap-4">
                   <span className={`text-7xl font-black italic tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>75%</span>
                   <span className={`text-[11px] ${t.subtext} uppercase font-bold tracking-wider leading-tight opacity-90 transition-colors duration-500`}>Effort<br/>Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EVOLUTION: SYSTEM DATA */}
        <section id="evolution" className="mb-72">
          <div className={`flex items-end justify-between border-b ${t.border} pb-10 mb-24 transition-colors duration-500`}>
            <div className="space-y-2 text-left">
              <p className={`text-[10px] font-black ${t.accent} uppercase tracking-widest transition-colors duration-500`}>Milestones to Date</p>
              <h2 className={`text-6xl font-black uppercase tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>Technical Evolution</h2>
            </div>
            <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${t.subtext} mb-1 opacity-80 transition-colors duration-500`}>Dell_Tenure</p>
          </div>

          <div className="space-y-48">
            {CAREER_TENURE.map((stage, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-16 items-start group">
                <div className="lg:col-span-4 space-y-6 pt-1 text-left">
                  <div className={`flex items-center gap-4 ${t.accent} transition-all duration-500 group-hover:translate-x-2`}>
                    <span className="text-2xl font-black italic leading-none">0{idx + 1}</span>
                    <div className={`h-px w-full ${t.border} opacity-50 transition-colors duration-500`} />
                  </div>
                  <h3 className={`text-4xl font-black uppercase tracking-tight leading-none pt-2 transition-colors duration-500 ${t.text}`}>{stage.title}</h3>
                  <p className={`text-[11px] font-bold ${t.subtext} uppercase tracking-[0.4em] opacity-100 transition-colors duration-500`}>{stage.year}</p>
                </div>
                
                <div className={`lg:col-span-8 ${t.card} border p-12 md:p-16 transition-all duration-500 flex flex-col justify-between rounded-sm text-left`}>
                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-5">
                      <p className={`text-[10px] font-black ${t.accent} uppercase tracking-widest border-b ${t.border} pb-3 opacity-90 transition-colors duration-500`}>Focus</p>
                      <p className={`text-base leading-relaxed ${t.subtext} brightness-125 font-medium transition-colors duration-500`}>{stage.focus}</p>
                    </div>
                    <div className={`space-y-5 border-x-0 md:border-x ${t.border} md:px-8 transition-colors duration-500`}>
                      <p className={`text-[10px] font-black ${t.accent} uppercase tracking-widest border-b ${t.border} pb-3 opacity-90 transition-colors duration-500`}>Engineering</p>
                      <p className={`text-base leading-relaxed ${t.subtext} brightness-125 font-medium transition-colors duration-500`}>{stage.engineering}</p>
                    </div>
                    <div className="space-y-5">
                      <p className={`text-[10px] font-black ${t.accent} uppercase tracking-widest border-b ${t.border} pb-3 opacity-90 transition-colors duration-500`}>Perspective</p>
                      <p className={`text-base leading-relaxed ${t.subtext} brightness-125 font-medium transition-colors duration-500`}>{stage.perspective}</p>
                    </div>
                  </div>
                  <div className="mt-16 flex flex-wrap gap-3">
                    {stage.skills.map(skill => (
                      <span key={skill} className={`px-4 py-2 ${t.pill} text-[10px] font-bold ${t.subtext} uppercase tracking-widest border opacity-100 hover:opacity-100 transition-all duration-500`}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES: HIGH-CONTRAST DATA */}
        <section id="outcomes" className="mb-72">
           <div className="text-center mb-36 space-y-6">
              <p className={`text-[11px] font-black ${t.accent} uppercase tracking-widest transition-colors duration-500`}>Flagship Deployments</p>
              <h2 className={`text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>Engineering Outcomes</h2>
           </div>

           <div className={`grid lg:grid-cols-2 gap-10 text-left`}>
              {PROJECTS.map((p, idx) => (
                <div key={idx} className={`${t.card} border p-14 md:p-20 flex flex-col justify-between transition-all duration-500 h-full rounded-sm group`}>
                  <div className="space-y-16">
                    <div className="flex justify-between items-start">
                      <div className={`${t.accent} transition-all duration-500 group-hover:scale-110`}><Box size={40} strokeWidth={2.5} /></div>
                      <div className="text-right">
                        <div className={`text-6xl font-black italic tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>{p.metric}</div>
                        <div className={`text-[11px] font-black uppercase tracking-widest ${t.subtext} mt-3 opacity-90 transition-colors duration-500`}>{p.label}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className={`text-4xl font-black uppercase tracking-tight leading-tight transition-colors duration-500 ${t.text}`}>{p.title}</h3>
                      <p className={`${t.subtext} text-lg leading-relaxed italic brightness-110 opacity-100 transition-colors duration-500`}>{p.description}</p>
                    </div>

                    <ul className={`space-y-8 border-l ${t.border} pl-10 transition-colors duration-500`}>
                      {p.points.map((pt, i) => (
                        <li key={i} className={`text-base font-bold ${t.subtext} brightness-150 leading-snug hover:${t.accent} transition-colors cursor-default opacity-100`}>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-20 pt-10 border-t ${t.border} transition-colors duration-500`}>
                    <div className={`flex items-start gap-4 mb-12 bg-white/5 p-6 border ${t.border} transition-colors duration-500`}>
                      <div className={`${t.accent} pt-1 transition-colors duration-500`}><CheckCircle2 size={18} /></div>
                      <p className={`text-[13px] font-bold ${t.subtext} leading-relaxed uppercase tracking-wider transition-colors duration-500`}>
                        {p.result}
                      </p>
                    </div>
                    <div className="flex gap-16">
                       <div className="text-left">
                          <p className={`text-3xl font-black tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>{p.subMetric}</p>
                          <p className={`text-[9px] font-black ${t.subtext} uppercase tracking-[0.4em] mt-3 opacity-80 transition-colors duration-500`}>{p.subLabel}</p>
                       </div>
                       <div className="text-left">
                          <p className={`text-3xl font-black tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>{p.precision}</p>
                          <p className={`text-[9px] font-black ${t.subtext} uppercase tracking-[0.4em] mt-3 opacity-80 transition-colors duration-500`}>{p.precisionLabel}</p>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* HORIZON: STRATEGIC CONCLUSION */}
        <section id="horizon" className="py-72 text-center relative">
           <div className="max-w-5xl mx-auto space-y-20 relative z-10">
              <h2 className={`text-8xl md:text-[13rem] font-black uppercase tracking-tighter leading-none italic opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-colors duration-500 ${t.text}`}>ARCHITECT</h2>
              <div className="space-y-10">
                <p className={`text-[12px] font-black ${t.accent} uppercase tracking-[0.5em] transition-colors duration-500`}>Future Trajectory</p>
                <h3 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none transition-colors duration-500 ${t.text}`}>Strategic Horizon.</h3>
                <p className={`text-3xl md:text-5xl ${t.subtext} brightness-125 font-light leading-snug max-w-4xl mx-auto tracking-tight transition-colors duration-500`}>
                  "Transitioning into 
                  <span className={`${t.text} font-medium italic transition-colors duration-500`}> System Architect </span> 
                  with a specialization in <span className={`${t.accent} font-medium italic transition-colors duration-500`}> AI/ML Engineering</span>. 
                  My objective is to bridge foundational distributed systems with emerging AI capabilities."
                </p>
              </div>

              <div className="pt-20">
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-5 px-16 py-6 ${themeKey === 'light' ? 'bg-slate-900 text-white' : 'bg-white text-black'} font-black text-[12px] uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl rounded-sm`}
                >
                  LinkedIn Profile <ArrowUpRight size={20} />
                </a>
              </div>
           </div>
        </section>

      </main>

      <footer className={`${t.footer} py-32 border-t transition-colors duration-500 relative z-10`}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="space-y-3 text-center md:text-left">
            <p className={`text-[14px] font-black uppercase tracking-[0.8em] ${t.text} transition-colors duration-500`}>{ARCHITECT_NAME}</p>
            <p className={`text-[10px] font-bold ${t.subtext} uppercase tracking-[0.5em] opacity-80 transition-colors duration-500`}>SOFTWARE SENIOR ENGINEER</p>
          </div>
          <div className="flex flex-col md:items-end gap-3 text-center md:text-right">
             <p className={`text-[11px] font-black uppercase tracking-widest ${t.subtext} opacity-80 transition-colors duration-500`}>Direct Correspondence</p>
             <a href={`mailto:${CONTACT_EMAIL}`} className={`text-base font-semibold ${t.text} hover:${t.accent} transition-colors tracking-[0.1em]`}>
               {CONTACT_EMAIL}
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}