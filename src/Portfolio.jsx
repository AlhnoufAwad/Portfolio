import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight, Terminal as TermIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Content (bilingual)                                               */
/* ------------------------------------------------------------------ */
const T = {
  en: {
    dir: "ltr",
    nav: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
    tag: "Front-End Developer · Tabuk, Saudi Arabia",
    first: "Alhnouf",
    last: "Alenezi",
    role: "Front-End Developer",
    bio: "Recent graduate in Management Information Systems working as an Executive Administrator in a tech company. Experienced in Front-End development and ERP systems analysis. Skilled in translating business requirements into technical solutions using UML modeling. Passionate about bridging business and technology to build efficient, scalable systems.",
    cta1: "View work",
    cta2: "Get in touch",
    stats: [
      { n: "5+", l: "Projects" },
      { n: "5", l: "Training days led" },
      { n: "MIS", l: "Graduate" },
    ],
    aboutTitle: "About",
    about:  " recent graduate in Management Information Systems and currently working as an Executive Administrator in a technology company. I have experience in UI implementation, translating designs into functional interfaces, and contributing to ERP systems analysis and development using UML diagrams to understand and structure workflows. I also supervised digital transformation projects for corporate identity by monitoring project stages and coordinating between teams to ensure successful delivery. I focus on combining business administration with technical solutions to improve efficiency and support decision-making.",
    projTitle: "Project",
    projHint: "Run a command to open each project",
    expTitle: "Experience",
    exp: [
      {
        role: "Executive Administrator",
        org: "Suhb Tech Foundation",
        period: "Present",
        desc: "Coordinate digital operations and project delivery, pairing technical execution with organized administration and clear digital presentation of work.",
      },
      {
        role: "Front-End Training Lead",
        org: "5-Day Program",
        period: "Workshop",
        desc: "Designed and delivered a five-day front-end training program, guiding participants through HTML, CSS and JavaScript fundamentals to their first responsive interfaces.",
      },
    ],
    eduTitle: "Education",
    edu: {
      degree: "B.Sc. Management Information Systems",
      org: "University of Tabuk",
      period: "Graduated 2026",
      desc: "A background in MIS grounds my front-end work in a broader understanding of systems, workflows and business structure.",
    },
    langTitle: "Languages",
    langs: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Professional" },
    ],
    skillsTitle: "Skills",
    contactTitle: "Let's work together",
    contactSub: "Actively seeking full-time roles and freelance work in front-end development, system analysis, and digital solutions.",
    overview: "Overview",
    challenge: "Challenge",
    solution: "Solution",
    results: "Results",
    stack: "Stack",
    live: "Live demo",
    code: "Source",
    rights: "Built & designed by Alhnouf Alenezi",
    runHint: "click to run",
  },
  ar: {
    dir: "rtl",
    nav: { about: "عني", projects: "المشاريع", experience: "الخبرة", contact: "التواصل" },
    tag: "مطوّرة واجهات أمامية · تبوك، السعودية",
    first: "الهنوف",
    last: "العنزي",
    role: "مطوّرة واجهات أمامية",
    bio: "حديث تخرج في تخصص نظم المعلومات الإدارية، أعمل كإداري تنفيذي في شركة تقنية، وأمتلك خبرة عملية في تطوير واجهات الويب (Front-End) والمساهمة في بناء وتحليل أنظمة ERP. أركز على فهم احتياجات الأعمال وتحويلها إلى حلول تقنية فعّالة، مع خبرة في تحليل الأنظمة باستخدام مخططات UML لتصميم حلول واضحة وقابلة للتطوير. أسعى لدمج المعرفة الإدارية مع المهارات التقنية لبناء أنظمة تدعم كفاءة العمليات وتحسن تجربة المستخدم.",
    cta1: "عرض الأعمال",
    cta2: "تواصلي معي",
    stats: [
      { n: "+5", l: "مشاريع" },
      { n: "5", l: "أيام تدريب قدّمتها" },
      { n: "نظم", l: "حديثة تخرّج" },
    ],
    aboutTitle: "عني",
    about: " حديث تخرج في تخصص نظم المعلومات الإدارية وأعمل كإداري تنفيذي في شركة تقنية، أمتلك خبرة في تنفيذ واجهات المستخدم وتحويل التصاميم إلى واجهات عملية، والمشاركة في تحليل وبناء أنظمة ERP باستخدام مخططات UML لفهم وتوضيح تدفق العمليات. كما أشرفت على مشاريع التحول الرقمي للهوية المؤسسية من خلال متابعة مراحل التنفيذ والتنسيق بين الفرق لضمان جودة التسليم. أركز على دمج الجانب الإداري مع التقني لتطوير حلول فعالة تدعم كفاءة الأعمال واتخاذ القرار.",
    projTitle: "أعمالي",
    projHint: "شغّل الأمر لفتح كل مشروع",
    expTitle: "الخبرة",
    exp: [
      {
        role: "إداري تنفيذي",
        org: "مؤسسة سهب التقنية",
        period: "حالياً",
        desc: "أنسّق العمليات الرقمية وتسليم المشاريع، وأجمع بين التنفيذ التقني والتنظيم الإداري والعرض الرقمي الواضح للأعمال.",
      },
      {
        role: "مدرّبة واجهات أمامية",
        org: "برنامج تدريبي 5 أيام",
        period: "ورشة",
        desc: "صمّمت وقدّمت برنامجاً تدريبياً في الواجهات الأمامية لمدة خمسة أيام، من أساسيات HTML وCSS وJavaScript حتى أول واجهة متجاوبة للمتدرّبين.",
      },
    ],
    eduTitle: "التعليم",
    edu: {
      degree: "بكالوريوس نظم المعلومات الإدارية",
      org: "جامعة تبوك",
      period: "تخرّج 2026",
      desc: "خلفيتي في نظم المعلومات الإدارية ترسّخ عملي في الواجهات بفهم أوسع للأنظمة وسير العمل والبنية المؤسسية.",
    },
    langTitle: "اللغات",
    langs: [
      { name: "العربية", level: "اللغة الأم" },
      { name: "الإنجليزية", level: "احترافي" },
    ],
    skillsTitle: "المهارات",
    contactTitle: "لنعمل معاً",
    contactSub: "جاهزة لفرص وظيفية أو مشاريع فريلانس في تطوير الواجهات وتحليل الأنظمة وبناء الحلول الرقمية.",
    overview: "نظرة عامة",
    challenge: "التحدي",
    solution: "الحل",
    results: "النتائج",
    stack: "التقنيات",
    live: "النسخة المباشرة",
    code: "الكود",
    rights: "تصميم وتطوير الهنوف العنزي",
    runHint: "اضغط للتشغيل",
  },
};

const PROJECTS = [
  {
    idx: "01",
    cmd: "hind-erp",
    name: { en: "Hind — Engineering ERP", ar: "هند — نظام ERP هندسي" },
    line: {
      en: "Full-stack management system for an engineering & design firm",
      ar: "نظام إدارة متكامل لمكتب هندسي وتصميم",
    },
    badges: { en: ["Full-Stack", "Live"], ar: ["متكامل", "مباشر"] },
    overview: {
      en: "A complete system that runs an engineering & interior-design firm's whole operation — projects, engineers, contracts, finances, milestones and reporting — from one dashboard, with profitability computed automatically for every project.",
      ar: "نظام متكامل يدير عمليات مكتب هندسة وتصميم داخلي بالكامل — المشاريع والمهندسين والعقود والماليات والمراحل والتقارير — من لوحة واحدة، مع حساب ربحية كل مشروع تلقائياً.",
    },
    challenge: {
      en: "Firms track projects, invoices and expenses across scattered spreadsheets, so they rarely know whether a project is profitable until it's over.",
      ar: "تتبّع المكاتب مشاريعها وفواتيرها ومصروفاتها في جداول متفرّقة، فنادراً ما تعرف ربحية المشروع قبل انتهائه.",
    },
    solution: {
      en: "A typed React front end over a PostgreSQL backend (Supabase) with row-level security, where each project's contracts, payments and expenses roll up into one trustworthy net-profit figure used across the dashboard, finance tab and reports.",
      ar: "واجهة React بأنواع آمنة فوق قاعدة PostgreSQL (Supabase) بأمان على مستوى الصفوف، حيث تتجمّع عقود ومدفوعات ومصروفات كل مشروع في رقم صافي ربح واحد موثوق يُستخدم في لوحة التحكم والماليات والتقارير.",
    },
    results: {
      en: ["A live, deployed product anyone can try", "Automated PDF & Excel reporting replacing manual work", "A clean, maintainable codebase built to grow"],
      ar: ["منتج منشور ومباشر يمكن لأي شخص تجربته", "تقارير PDF وExcel تلقائية تغني عن العمل اليدوي", "كود نظيف وقابل للصيانة ومبني للتوسّع"],
    },
    stack: ["React", "TypeScript", "Supabase", "Tailwind", "Vite"],
    demo: { email: "admin@hind.com", password: "Admin12345" },
    live: "https://hind-eng1-ukhe.vercel.app",
    code: "https://github.com/AlhnoufAwad/Hind-eng1",
  },
  {
    idx: "02",
    cmd: "albluwi-system",
    name: { en: "ERP System Mohammed Al-Bluwi Group ", ar: "نظام ERP  لمجموعة محمد البلوي " },
    line: { en: "Front-end interface for internal operations & financial workflows", ar: "واجهة أمامية للعمليات الداخلية وسير العمل المالي" },
    badges: { en: ["System UI", "Engineering"], ar: ["واجهة سيستم", "هندسي"] },
    overview: {
      en: "A structured front-end for an engineering group to organize projects, support internal workflows, and present financial information through clear, dashboard-oriented screens.",
      ar: "واجهة أمامية منظّمة لمجموعة هندسية لتنظيم المشاريع ودعم سير العمل الداخلي وعرض البيانات المالية عبر شاشات واضحة بأسلوب الداشبورد.",
    },
    stack: ["HTML", "CSS", "JavaScript", "TypeScript"],
    code: "https://github.com/alhnoufawad",
  },
  {
    idx: "03",
    cmd: "pottery-store",
    name: { en: "1% — Pottery Store", ar: "1٪ — متجر فخار" },
    line: { en: "Pottery e-commerce front-end platform", ar: "واجهة متجر إلكتروني للفخار" },
    badges: { en: ["E-Commerce", "Retail"], ar: ["تجارة إلكترونية", "بيع منتجات"] },
    overview: {
      en: "An e-commerce platform presenting handmade products through clean visual hierarchy, responsive layouts and a smooth shopping-oriented flow.",
      ar: "منصة تجارة إلكترونية تعرض المنتجات اليدوية عبر تسلسل بصري واضح وتخطيطات متجاوبة وتجربة تسوّق سلسة.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://alhnoufawad.github.io/OP-artist/",
    code: "https://alhnoufawad.github.io/OP-artist/",
  },
  {
    idx: "04",
    cmd: "xthon",
    name: { en: "Xthon", ar: "Xthon" },
    line: { en: "University of Tabuk event platform", ar: "منصة فعالية جامعة تبوك" },
    badges: { en: ["Event", "University"], ar: ["فعالية", "جامعي"] },
    overview: {
      en: "A front-end platform for Xthon at the University of Tabuk presenting the event identity, participant flow and key information through a modern, engaging interface.",
      ar: "منصة واجهات أمامية لفعالية Xthon في جامعة تبوك تعرض هوية الحدث ومسار المشاركين والمعلومات الأساسية عبر واجهة حديثة وجذّابة.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://alhnoufawad.github.io/X-thon1/",
    code: "https://alhnoufawad.github.io/X-thon1/",
  },
  {
    idx: "05",
    cmd: "suhb-tech",
    name: { en: "Suhb Tech Website", ar: "موقع سهب التقنية" },
    line: { en: "Corporate website for a technology company", ar: "موقع شركة تقنية" },
    badges: { en: ["Corporate", "Technology"], ar: ["شركة", "تقنية"] },
    overview: {
      en: "A professional corporate website presenting Suhb Tech's services, brand identity and business communication through a confident, responsive interface.",
      ar: "موقع شركة احترافي يعرض خدمات سهب التقنية وهوية العلامة والتواصل المؤسسي عبر واجهة واثقة ومتجاوبة.",
    },
    stack: ["React.js, JavaScript (ES6+), Vite, HTML5, CSS3, Context API"],
    live: "https://suhb-tec.vercel.app/",
  },
];

const SKILLS = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Supabase", "Vite", "Git & GitHub", "Responsive UI", "UI Structure", "Figma"];

const CONTACTS = [
  { k: "Email", v: "alhnoufawad@gmail.com", href: "mailto:alhnoufawad@gmail.com", Icon: Mail },
  { k: "GitHub", v: "github.com/alhnoufawad", href: "https://github.com/alhnoufawad", Icon: Github },
  { k: "LinkedIn", v: "alhnouf-alenezi", href: "https://linkedin.com/in/alhnouf-alenezi-54675028a", Icon: Linkedin },
  { k: "WhatsApp", v: "+966 50 397 3950", href: "https://wa.me/966503973950", Icon: MessageCircle },
];

/* ------------------------------------------------------------------ */
/*  Rotating 3D sphere network (hero canvas) — drag / touch to spin   */
/* ------------------------------------------------------------------ */
function SphereNet() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let raf, w, h, dpr, R;

    // --- build nodes on a sphere (fibonacci distribution) ---
    const N = 190;
    const nodes = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2; // 1 .. -1
      const r = Math.sqrt(1 - y * y);
      const phi = i * 2.399963229728653; // golden angle
      nodes.push({ x: Math.cos(phi) * r, y, z: Math.sin(phi) * r });
    }
    // --- precompute edges by 3D proximity ---
    const edges = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < 0.40) edges.push([i, j]);
      }
    }

    let rotX = 0.35, rotY = 0;
    let velX = 0, velY = 0.0024; // gentle auto-spin
    let dragging = false, lastX = 0, lastY = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(w, h) * (w < 760 ? 0.30 : 0.26);
    }

    function project(n) {
      // rotate around Y then X
      const cy = Math.cos(rotY), sy = Math.sin(rotY);
      const cx = Math.cos(rotX), sx = Math.sin(rotX);
      let x = n.x * cy - n.z * sy;
      let z = n.x * sy + n.z * cy;
      let y = n.y * cx - z * sx;
      z = n.y * sx + z * cx;
      const persp = 320 / (320 + z * R); // depth scaling
      return { sx: x * R * persp, sy: y * R * persp, z, persp };
    }

    function step() {
      if (!dragging) {
        rotX += velX;
        rotY += velY;
        velX *= 0.96;
        velY += (0.0024 - velY) * 0.02; // ease back to base spin
      }
      ctx.clearRect(0, 0, w, h);
      const cxp = w / 2;
      const cyp = h * (w < 760 ? 0.42 : 0.5);

      const P = nodes.map(project);

      // edges
      for (const [i, j] of edges) {
        const a = P[i], b = P[j];
        const depth = (a.z + b.z) / 2; // -1 (front) .. 1 (back)
        const o = (1 - (depth + 1) / 2) * 0.55 + 0.05;
        ctx.strokeStyle = `rgba(120,165,255,${o.toFixed(3)})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(cxp + a.sx, cyp + a.sy);
        ctx.lineTo(cxp + b.sx, cyp + b.sy);
        ctx.stroke();
      }
      // nodes (sorted back-to-front for nicer overlap)
      const order = P.map((p, i) => i).sort((u, v) => P[v].z - P[u].z);
      for (const i of order) {
        const p = P[i];
        const front = (1 - (p.z + 1) / 2); // 1 front .. 0 back
        const size = 0.8 + front * 1.8;
        ctx.beginPath();
        ctx.arc(cxp + p.sx, cyp + p.sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${180 + front * 40},${200 + front * 40},255,${0.35 + front * 0.6})`;
        ctx.fill();
        if (front > 0.7) {
          ctx.beginPath();
          ctx.arc(cxp + p.sx, cyp + p.sy, size + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(130,170,255,${(front - 0.7) * 0.25})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(step);
    }

    // --- pointer / touch drag ---
    function down(e) {
      dragging = true;
      const t = e.touches ? e.touches[0] : e;
      lastX = t.clientX;
      lastY = t.clientY;
    }
    function move(e) {
      if (!dragging) return;
      const t = e.touches ? e.touches[0] : e;
      const dx = t.clientX - lastX;
      const dy = t.clientY - lastY;
      lastX = t.clientX;
      lastY = t.clientY;
      rotY += dx * 0.006;
      rotX += dy * 0.006;
      velY = dx * 0.006;
      velX = dy * 0.006;
      if (e.cancelable) e.preventDefault();
    }
    function up() {
      dragging = false;
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    canvas.addEventListener("touchstart", down, { passive: true });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", up);

    if (reduce) {
      velX = 0;
      velY = 0;
      step();
      cancelAnimationFrame(raf);
    } else {
      step();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      canvas.removeEventListener("touchstart", down);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", up);
    };
  }, []);
  return <canvas ref={ref} className="net" aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Reveal on scroll                                                  */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Terminal-reveal project card                                      */
/* ------------------------------------------------------------------ */
function ProjectTerminal({ p, t, lang }) {
  const [phase, setPhase] = useState("idle"); // idle | typing | running | open
  const [typed, setTyped] = useState("");
  const ref = useRef(null);
  const full = `open ${p.cmd}`;

  function run() {
    if (phase !== "idle") return;
    setPhase("typing");
    let i = 0;
    const tick = () => {
      i++;
      setTyped(full.slice(0, i));
      if (i < full.length) {
        setTimeout(tick, 42);
      } else {
        setPhase("running");
        setTimeout(() => setPhase("open"), 620);
      }
    };
    setTimeout(tick, 120);
  }

  return (
    <div className={`term ${phase}`} ref={ref}>
      <button className="term-bar" onClick={run} aria-expanded={phase === "open"}>
        <span className="dots">
          <i /> <i /> <i />
        </span>
        <span className="term-title">
          {p.idx} — {p.name[lang]}
        </span>
        {phase === "idle" && <span className="run-hint">{t.runHint}</span>}
      </button>

      <div className="term-screen">
        <div className="term-cmd">
          <span className="prompt">alhnouf@portfolio:~$</span>{" "}
          <span className="typed">{phase === "idle" ? full : typed}</span>
          {(phase === "idle" || phase === "typing") && <span className="cursor">▍</span>}
        </div>
        {(phase === "running" || phase === "open") && (
          <div className="term-out">
            <span className="ok">✓</span> {lang === "ar" ? "تم فتح المشروع" : "project loaded"}
          </div>
        )}

        <div className={`term-reveal ${phase === "open" ? "show" : ""}`}>
          <div className="tr-inner">
            <div className="tr-head">
              <h3 className="p-name">{p.name[lang]}</h3>
              <div className="p-badges">
                {p.badges[lang].map((b) => (
                  <span className="badge" key={b}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <p className="p-line">{p.line[lang]}</p>

            <div className="tr-grid">
              <div>
                <Label>{t.overview}</Label>
                <p className="cb-desc">{p.overview[lang]}</p>

                {p.challenge && (
                  <>
                    <Label mt>{t.challenge}</Label>
                    <p className="cb-desc">{p.challenge[lang]}</p>
                    <Label mt>{t.solution}</Label>
                    <p className="cb-desc">{p.solution[lang]}</p>
                    <Label mt>{t.results}</Label>
                    <ul className="feats">
                      {p.results[lang].map((r, k) => (
                        <li key={k}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}

                {p.demo && (
                  <div className="demo-box">
                    <div className="demo-lbl">{lang === "ar" ? "دخول تجريبي" : "Demo access"}</div>
                    <div className="demo-row">
                      {lang === "ar" ? "البريد" : "Email"}: <span>{p.demo.email}</span>
                    </div>
                    <div className="demo-row">
                      {lang === "ar" ? "كلمة المرور" : "Password"}: <span>{p.demo.password}</span>
                    </div>
                  </div>
                )}

                <div className="links">
                  {p.live && (
                    <a className="link" href={p.live} target="_blank" rel="noopener noreferrer">
                      {t.live} <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.code && (
                    <a className="link link-2" href={p.code} target="_blank" rel="noopener noreferrer">
                      {t.code} <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
              <div>
                <Label>{t.stack}</Label>
                <div className="pills">
                  {p.stack.map((s) => (
                    <span className="pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                              */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const rtl = lang === "ar";
  const nameChars = `${t.first}\u00A0${t.last}`.split("");

  return (
    <div dir={t.dir} style={{ background: "#04060a", color: "#E6ECF5", minHeight: "100vh" }}>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark" />
          <span className="brand-name">{rtl ? "الهنوف" : "Alhnouf"}</span>
        </a>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <button className="lang" onClick={() => setLang(rtl ? "en" : "ar")} aria-label="Toggle language">
          {rtl ? "EN" : "ع"}
        </button>
      </nav>

      <main id="top">
        {/* HERO with interactive network */}
        <header className="hero">
          <SphereNet />
          <div className="hero-overlay" />
          <div className="spin-hint">{rtl ? "اسحب الشبكة للفّها ↻" : "drag the network to rotate ↻"}</div>
          <div className="hero-content">
            <div className="hero-tag load" style={{ animationDelay: "60ms" }}>
              <span className="tag-dot" />
              {t.tag}
            </div>

            <h1 className="hero-name" aria-label={`${t.first} ${t.last}`} key={lang}>
              {nameChars.map((c, i) => (
                <span key={i} className="ch" style={{ animationDelay: `${240 + i * 42}ms` }}>
                  {c === " " || c === "\u00A0" ? "\u00A0" : c}
                </span>
              ))}
            </h1>

            <p className="hero-role load" style={{ animationDelay: "620ms" }}>
              <span className="prompt-sm">&gt;</span> {t.role}
              <span className="cursor">▍</span>
            </p>
            <p className="hero-bio load" style={{ animationDelay: "740ms" }}>
              {t.bio}
            </p>

            <div className="hero-btns load" style={{ animationDelay: "860ms" }}>
              <a href="#projects" className="btn btn-primary">
                {t.cta1} <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                {t.cta2}
              </a>
            </div>

            <div className="hero-stats load" style={{ animationDelay: "980ms" }}>
              {t.stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="stat-n">{s.n}</div>
                  <div className="stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="wrap">
          {/* ABOUT */}
          <section id="about" className="section">
            <Reveal>
              <SectionHead label="01" title={t.aboutTitle} />
            </Reveal>
            <Reveal delay={80}>
              <p className="about-lead">{t.about}</p>
            </Reveal>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="section">
            <Reveal>
              <SectionHead label="02" title={t.projTitle} />
            </Reveal>
            <Reveal delay={60}>
              <p className="proj-hint">
                <TermIcon size={14} /> {t.projHint}
              </p>
            </Reveal>
            <div className="proj-list">
              {PROJECTS.map((p, i) => (
                <Reveal delay={i * 70} key={p.idx}>
                  <ProjectTerminal p={p} t={t} lang={lang} />
                </Reveal>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="section">
            <Reveal>
              <SectionHead label="03" title={t.expTitle} />
            </Reveal>
            <div className="exp-list">
              {t.exp.map((e, i) => (
                <Reveal delay={i * 80} key={i}>
                  <div className="exp">
                    <div className="exp-top">
                      <div>
                        <div className="exp-role">{e.role}</div>
                        <div className="exp-org">{e.org}</div>
                      </div>
                      <div className="exp-period">{e.period}</div>
                    </div>
                    <p className="exp-desc">{e.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="section">
            <Reveal>
              <SectionHead label="04" title={t.eduTitle} />
            </Reveal>
            <Reveal delay={80}>
              <div className="exp">
                <div className="exp-top">
                  <div>
                    <div className="exp-role">{t.edu.degree}</div>
                    <div className="exp-org">{t.edu.org}</div>
                  </div>
                  <div className="exp-period">{t.edu.period}</div>
                </div>
                <p className="exp-desc">{t.edu.desc}</p>
              </div>
            </Reveal>
          </section>

          {/* SKILLS */}
          <section id="skills" className="section">
            <Reveal>
              <SectionHead label="05" title={t.skillsTitle} />
            </Reveal>
            <Reveal delay={80}>
              <div className="skills">
                {SKILLS.map((s) => (
                  <span className="skill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </section>

          {/* LANGUAGES */}
          <section id="languages" className="section">
            <Reveal>
              <SectionHead label="06" title={t.langTitle} />
            </Reveal>
            <div className="lang-grid">
              {t.langs.map((l, i) => (
                <Reveal delay={i * 70} key={l.name}>
                  <div className="lang-card">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <Reveal>
              <SectionHead label="07" title={t.contactTitle} />
            </Reveal>
            <Reveal delay={80}>
              <p className="about-lead">{t.contactSub}</p>
            </Reveal>
            <div className="contact-grid">
              {CONTACTS.map((c, i) => (
                <Reveal delay={i * 60} key={c.k}>
                  <a className="crow" href={c.href} target="_blank" rel="noopener noreferrer">
                    <span className="crow-ic">
                      <c.Icon size={17} />
                    </span>
                    <span className="crow-text">
                      <span className="crow-k">{c.k}</span>
                      <span className="crow-v">{c.v}</span>
                    </span>
                    <ArrowUpRight size={15} className="crow-arrow" />
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          <footer className="footer">
            <span className="brand-mark" />
            <span>
              {t.rights} © {new Date().getFullYear()}
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function SectionHead({ label, title }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{label}</span>
      <h2 className="sec-title">{title}</h2>
      <span className="sec-rule" />
    </div>
  );
}
function Label({ children, mt }) {
  return (
    <div className="cb-lbl" style={mt ? { marginTop: "1.2rem" } : undefined}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                            */
/* ------------------------------------------------------------------ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');

*{margin:0;padding:0;box-sizing:border-box}
::selection{background:#2f5bff;color:#fff}
html{scroll-behavior:smooth}

.wrap{max-width:1080px;margin:0 auto;padding:0 2rem;font-family:'Outfit',system-ui,'Segoe UI',sans-serif}

/* nav */
.nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;
  padding:1.05rem 2rem;max-width:1080px;margin:0 auto;backdrop-filter:blur(14px);
  background:rgba(4,6,10,.55);border-bottom:1px solid rgba(120,165,255,.1)}
.brand{display:flex;align-items:center;gap:.6rem;text-decoration:none;color:#E6ECF5}
.brand-mark{width:11px;height:11px;border-radius:3px;background:linear-gradient(135deg,#4f7bff,#9fc0ff);box-shadow:0 0 14px rgba(79,123,255,.7)}
.brand-name{font-family:'Fraunces',serif;font-size:1.05rem}
.nav-links{display:flex;gap:2rem}
.nav-links a{color:#8895ad;text-decoration:none;font-size:.86rem;transition:color .25s}
.nav-links a:hover{color:#E6ECF5}
.lang{width:38px;height:38px;border-radius:50%;border:1px solid rgba(120,165,255,.2);background:transparent;
  color:#E6ECF5;font-family:'JetBrains Mono',monospace;font-size:.8rem;cursor:pointer;transition:all .25s}
.lang:hover{border-color:#4f7bff;color:#9fc0ff;box-shadow:0 0 16px rgba(79,123,255,.3)}
@media(max-width:720px){.nav-links{display:none}.nav{padding:1rem 1.3rem}}

/* hero */
.hero{position:relative;min-height:92vh;display:flex;align-items:center;overflow:hidden;
  background:radial-gradient(ellipse at 70% 20%,rgba(36,58,120,.35),transparent 60%),radial-gradient(ellipse at 10% 90%,rgba(20,40,90,.3),transparent 55%),#04060a}
.net{position:absolute;inset:0;width:100%;height:100%;z-index:0;cursor:grab;touch-action:pan-y}
.net:active{cursor:grabbing}
.hero-overlay{position:absolute;inset:0;z-index:1;pointer-events:none;
  background:linear-gradient(180deg,transparent,rgba(4,6,10,.4) 80%,#04060a)}
.spin-hint{position:absolute;bottom:1.6rem;left:0;right:0;z-index:2;text-align:center;pointer-events:none;
  font-family:'JetBrains Mono',monospace;font-size:.66rem;letter-spacing:.08em;color:#5f6e8c;
  animation:hintPulse 3s ease-in-out infinite}
@keyframes hintPulse{0%,100%{opacity:.35}50%{opacity:.8}}
.hero-content{position:relative;z-index:2;max-width:1080px;margin:0 auto;padding:7rem 2rem 5rem;width:100%;pointer-events:none}
.hero-content a,.hero-content button{pointer-events:auto}

.hero-tag{display:inline-flex;align-items:center;gap:.55rem;font-family:'JetBrains Mono',monospace;font-size:.72rem;
  letter-spacing:.04em;color:#9fb0ce;border:1px solid rgba(120,165,255,.18);border-radius:100px;padding:.4rem 1rem;margin-bottom:2rem;
  background:rgba(8,14,28,.5)}
.tag-dot{width:6px;height:6px;border-radius:50%;background:#46e0a0;box-shadow:0 0 10px #46e0a0;animation:blink 2.4s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}

.hero-name{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(3rem,10vw,7.5rem);line-height:.96;letter-spacing:-.02em;margin-bottom:1.3rem;
  background:linear-gradient(180deg,#ffffff,#aebfe0);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-name .ch{display:inline-block;opacity:0;transform:translateY(.5em);filter:blur(8px);animation:chIn .8s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes chIn{to{opacity:1;transform:none;filter:blur(0)}}

.hero-role{font-family:'JetBrains Mono',monospace;font-size:.95rem;letter-spacing:.06em;color:#7fa0ff;margin-bottom:1.6rem;display:flex;align-items:center;gap:.5rem}
.prompt-sm{color:#46e0a0}
.hero-bio{max-width:600px;color:#9aa6bd;font-size:1.04rem;line-height:1.85;margin-bottom:2.3rem}
.hero-btns{display:flex;gap:.9rem;flex-wrap:wrap;margin-bottom:3.2rem}
.btn{display:inline-flex;align-items:center;gap:.5rem;text-decoration:none;font-size:.9rem;font-weight:500;padding:.82rem 1.5rem;border-radius:7px;transition:all .25s}
.btn-primary{background:linear-gradient(135deg,#cfd9f0,#ffffff);color:#04060a}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 34px rgba(150,180,255,.25)}
.btn-ghost{border:1px solid rgba(120,165,255,.25);color:#E6ECF5}
.btn-ghost:hover{border-color:#4f7bff;color:#9fc0ff}
.hero-stats{display:flex;gap:3rem;flex-wrap:wrap}
.stat-n{font-family:'Fraunces',serif;font-size:2.3rem;line-height:1;color:#fff}
.stat-l{font-size:.78rem;color:#7a869e;margin-top:.3rem}

.cursor{color:#7fa0ff;animation:blink 1s steps(1) infinite;font-weight:400}
.load{opacity:0;animation:loadUp .9s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes loadUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

/* sections */
.section{padding:5rem 0;border-top:1px solid rgba(120,165,255,.08)}
.sec-head{display:flex;align-items:center;gap:1rem;margin-bottom:2rem}
.sec-num{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#4f7bff;letter-spacing:.1em}
.sec-title{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(1.7rem,4vw,2.6rem)}
.sec-rule{flex:1;height:1px;background:linear-gradient(90deg,rgba(120,165,255,.2),transparent)}
[dir=rtl] .sec-rule{background:linear-gradient(270deg,rgba(120,165,255,.2),transparent)}
.about-lead{max-width:720px;font-size:1.12rem;line-height:1.9;color:#aeb8cd}
.proj-hint{display:inline-flex;align-items:center;gap:.5rem;font-family:'JetBrains Mono',monospace;font-size:.74rem;color:#7a869e;margin-bottom:1.6rem}

/* reveal */
.reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
.reveal.in{opacity:1;transform:none}

/* terminal project */
.proj-list{display:flex;flex-direction:column;gap:1.1rem}
.term{border:1px solid rgba(120,165,255,.14);border-radius:12px;overflow:hidden;background:#070b14;transition:border-color .3s,box-shadow .3s}
.term:hover{border-color:rgba(120,165,255,.4);box-shadow:0 0 30px rgba(40,70,160,.18)}
.term.open{border-color:rgba(120,165,255,.45)}
.term-bar{width:100%;display:flex;align-items:center;gap:.9rem;padding:.85rem 1.1rem;background:#0b1120;border:0;cursor:pointer;
  border-bottom:1px solid rgba(120,165,255,.1);font-family:inherit;color:inherit;text-align:start}
.dots{display:flex;gap:.4rem}
.dots i{width:11px;height:11px;border-radius:50%;display:block}
.dots i:nth-child(1){background:#ff5f56}.dots i:nth-child(2){background:#ffbd2e}.dots i:nth-child(3){background:#27c93f}
.term-title{flex:1;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#aeb8cd;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.run-hint{font-family:'JetBrains Mono',monospace;font-size:.64rem;color:#4f7bff;border:1px solid rgba(79,123,255,.3);border-radius:5px;padding:.2rem .55rem;white-space:nowrap}
.term-screen{padding:1.1rem 1.2rem;font-family:'JetBrains Mono',monospace;font-size:.84rem}
.term-cmd{color:#cdd6ea;white-space:nowrap;overflow:hidden}
.prompt{color:#46e0a0}
.typed{color:#9fc0ff}
.term-out{margin-top:.6rem;color:#8a97ad;font-size:.8rem}
.ok{color:#46e0a0}
.term-reveal{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s cubic-bezier(.3,.8,.3,1);margin-top:0}
.term-reveal.show{grid-template-rows:1fr;margin-top:1.1rem}
.tr-inner{overflow:hidden;font-family:'Outfit',sans-serif}
.tr-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}
.p-name{font-family:'Fraunces',serif;font-weight:400;font-size:1.3rem;color:#fff}
.p-badges{display:flex;gap:.4rem}
.badge{font-family:'JetBrains Mono',monospace;font-size:.62rem;padding:.28rem .6rem;border-radius:100px;border:1px solid rgba(120,165,255,.3);color:#9fc0ff;background:rgba(79,123,255,.08);white-space:nowrap}
.p-line{color:#8a97ad;font-size:.86rem;margin:.4rem 0 1.4rem}
.tr-grid{display:grid;grid-template-columns:1fr 200px;gap:2rem}
.cb-lbl{font-family:'JetBrains Mono',monospace;font-size:.64rem;letter-spacing:.1em;text-transform:uppercase;color:#6f7c92;margin-bottom:.5rem}
.cb-desc{color:#aeb8cd;font-size:.95rem;line-height:1.8}
.feats{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.feats li{position:relative;padding-inline-start:1.1rem;color:#aeb8cd;font-size:.92rem;line-height:1.6}
.feats li::before{content:'';position:absolute;inset-inline-start:0;top:.6em;width:5px;height:5px;border-radius:50%;background:#4f7bff}
.demo-box{margin-top:1.4rem;border:1px solid rgba(120,165,255,.25);border-radius:8px;padding:.9rem 1.1rem;background:rgba(79,123,255,.06);font-family:'JetBrains Mono',monospace}
.demo-lbl{font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:#7fa0ff;margin-bottom:.5rem}
.demo-row{font-size:.8rem;color:#cdd6ea;margin-top:.25rem}
.demo-row span{color:#9fc0ff}
.links{display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.6rem}
.link{display:inline-flex;align-items:center;gap:.45rem;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.72rem;padding:.6rem 1.1rem;border-radius:6px;background:linear-gradient(135deg,#cfd9f0,#fff);color:#04060a;transition:transform .25s}
.link:hover{transform:translateY(-2px)}
.link-2{background:transparent;border:1px solid rgba(120,165,255,.25);color:#E6ECF5}
.link-2:hover{border-color:#4f7bff;color:#9fc0ff}
.pills,.skills{display:flex;flex-wrap:wrap;gap:.5rem}
.pill{font-family:'JetBrains Mono',monospace;font-size:.68rem;padding:.34rem .7rem;border-radius:5px;border:1px solid rgba(120,165,255,.14);color:#9aa6bd}
@media(max-width:720px){.tr-grid{grid-template-columns:1fr;gap:1.3rem}}

/* experience */
.exp-list{display:flex;flex-direction:column;gap:1rem}
.exp{border:1px solid rgba(120,165,255,.12);border-radius:12px;padding:1.8rem;background:rgba(120,165,255,.02)}
.exp-top{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:1rem}
.exp-role{font-family:'Fraunces',serif;font-size:1.25rem;color:#fff}
.exp-org{color:#9fc0ff;font-size:.9rem;margin-top:.2rem}
.exp-period{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#7a869e;white-space:nowrap}
.exp-desc{color:#aeb8cd;line-height:1.85;font-size:.98rem}

/* skills */
.skill{font-size:.9rem;padding:.6rem 1.1rem;border-radius:7px;border:1px solid rgba(120,165,255,.13);color:#c2cad9;background:rgba(120,165,255,.02);transition:all .25s}
.skill:hover{border-color:rgba(79,123,255,.45);color:#9fc0ff;transform:translateY(-2px)}

/* languages */
.lang-grid{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
.lang-card{display:flex;align-items:center;justify-content:space-between;padding:1.2rem 1.4rem;border:1px solid rgba(120,165,255,.12);border-radius:10px;background:rgba(120,165,255,.02)}
.lang-name{font-family:'Fraunces',serif;font-size:1.15rem;color:#fff}
.lang-level{font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.06em;color:#9fc0ff;border:1px solid rgba(120,165,255,.25);border-radius:100px;padding:.3rem .7rem}
@media(max-width:640px){.lang-grid{grid-template-columns:1fr}}

/* contact */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin-top:2rem}
.crow{display:flex;align-items:center;gap:1rem;padding:1.2rem 1.4rem;border:1px solid rgba(120,165,255,.12);border-radius:10px;text-decoration:none;color:#E6ECF5;background:rgba(120,165,255,.02);transition:all .25s}
.crow:hover{border-color:rgba(79,123,255,.45);background:rgba(79,123,255,.05);transform:translateY(-2px)}
.crow-ic{display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:9px;background:rgba(79,123,255,.12);color:#9fc0ff;flex:none}
.crow-text{display:flex;flex-direction:column;gap:.15rem;flex:1;min-width:0}
.crow-k{font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:#7a869e}
.crow-v{font-size:.92rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.crow-arrow{color:#7a869e;flex:none}
@media(max-width:640px){.contact-grid{grid-template-columns:1fr}}

/* footer */
.footer{display:flex;align-items:center;gap:.7rem;padding:3rem 0;border-top:1px solid rgba(120,165,255,.08);color:#7a869e;font-size:.84rem}

@media(prefers-reduced-motion:reduce){
  .reveal{opacity:1;transform:none}
  .load{opacity:1;animation:none}
  .hero-name .ch{opacity:1;transform:none;filter:none;animation:none}
  .cursor{animation:none}
}
`;
