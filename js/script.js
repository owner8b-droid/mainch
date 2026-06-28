// =====================================================
// STRUCTURA ING. — site script
// =====================================================

// ---------- i18n dictionary ----------
// Every translatable string lives here. HTML elements reference a key via
// data-i18n="key" (for text content) or data-i18n-placeholder="key" (for
// input placeholders). To edit copy, just edit the strings below — no need
// to touch the HTML.
const STRINGS = {
  es: {
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    nav_contact_btn: "Contacto",

    hero_eyebrow: "Consultoría en Ingeniería Civil — Costa Rica",
    hero_line1: "Construimos",
    hero_line2: "lo que",
    hero_line3: "sostiene",
    hero_line4: "al país.",
    hero_lede: "Structura entrega soluciones de ingeniería de precisión para estructuras, infraestructura y sistemas de fundación. Desde las montañas volcánicas hasta las costas tropicales — construido para durar.",
    hero_btn_projects: "Proyectos",
    hero_btn_services: "Servicios",
    scroll_cue: "scroll",

    stat1_label: "Proyectos Entregados",
    stat2_label: "Años de Práctica",
    stat3_label: "Provincias Activas",
    stat4_label: "Tasa en Plazo",

    services_eyebrow: "Disciplinas",
    services_h2_1: "Nuestros",
    services_h2_2: "Servicios",
    butterfly_caption: "Mariposa Morpho — emblema de la biodiversidad que custodiamos.",

    svc1_title: "Ingeniería Estructural",
    svc1_desc: "Análisis y diseño de sistemas de carga para edificios, puentes y estructuras industriales en terreno sísmico y tropical.",
    svc1_tag1: "Análisis Sísmico", svc1_tag2: "Concreto Reforzado", svc1_tag3: "Estructuras de Acero",

    svc2_title: "Consultoría Geotécnica",
    svc2_desc: "Investigación de suelos y diseño de fundaciones para las complejas condiciones volcánicas, aluviales y de pendiente de Costa Rica.",
    svc2_tag1: "Diseño de Fundaciones", svc2_tag2: "Estabilidad de Taludes", svc2_tag3: "Muros de Retención",

    svc3_title: "Planificación de Infraestructura",
    svc3_desc: "Planificación maestra de carreteras, drenaje y servicios en entornos definidos por alta pluviosidad, ríos y topografía montañosa.",
    svc3_tag1: "Drenaje Urbano", svc3_tag2: "Diseño Vial", svc3_tag3: "Estudios Hidrológicos",

    svc4_title: "Gestión de Proyectos",
    svc4_desc: "Entrega integral desde el diseño conceptual hasta la construcción dentro del marco de permisos y cumplimiento ambiental de Costa Rica.",
    svc4_tag1: "Control de Costos", svc4_tag2: "Cumplimiento SETENA", svc4_tag3: "Gestión de Cronograma",

    projects_eyebrow: "Casos de Estudio",
    projects_h2_1: "Proyectos",
    projects_h2_2: "Destacados",
    projects_view_all: "Ver Todo",

    prj1_title: "Puente Río Sarapiquí",
    prj1_category: "Ingeniería de Puentes",
    prj1_desc: "Estructura suspendida que cruza el corredor del río Sarapiquí, diseñada para cargas de inundación estacional y condiciones de viento tropical.",
    prj2_title: "Viaducto Braulio Carrillo",
    prj2_category: "Estructural Sísmico",
    prj2_desc: "Viaducto elevado que cruza el corredor Braulio Carrillo, diseñado bajo especificaciones de zona sísmica IV sobre fundaciones de basalto volcánico.",
    prj3_title: "Sistema Pluvial Limón",
    prj3_category: "Infraestructura Hidráulica",
    prj3_desc: "Red de drenaje pluvial para la zona costera del Caribe, diseñada para los promedios de lluvia anual más altos del continente americano.",
    project_view_case: "Ver Caso Completo",

    about_eyebrow: "Quiénes Somos",
    about_h2_1: "Ingeniería",
    about_h2_2: "forjada en",
    about_h2_3: "precisión.",
    about_p1: "Structura nació con un principio claro: la gran ingeniería es invisible. Es simplemente lo que mantiene todo en pie. Durante casi dos décadas hemos aplicado esa disciplina en proyectos que van desde fundaciones residenciales hasta infraestructura pública crítica.",
    about_p2: "Operamos en un país de geografía excepcional — volcanes activos, ríos de alta energía, suelos volcánicos complejos y precipitaciones entre las más altas del continente. Eso no es un obstáculo: es nuestro dominio.",
    bridge_label: "Infraestructura en terreno tropical",
    bridge_type: "Tipología: puente colgante sobre río",
    bridge_zone: "Zona sísmica IV",
    context_callout: "Costa Rica concentra el <strong>6% de la biodiversidad mundial</strong> en menos del 0.03% de la superficie terrestre. Toda estructura que construimos coexiste con ese legado — esto define nuestra filosofía de diseño.",

    val1_title: "Integridad Técnica", val1_desc: "Cada cálculo verificado. Cada suposición documentada.",
    val2_title: "Factibilidad en Campo", val2_desc: "Diseñamos para constructibilidad, no solo para cumplimiento.",
    val3_title: "Claridad al Cliente", val3_desc: "Ingeniería compleja en recomendaciones comprensibles.",
    val4_title: "Responsabilidad Ambiental", val4_desc: "Obras que respetan el entorno natural que las rodea.",
    about_cta: "Iniciar un Proyecto",

    contact_eyebrow: "Contacto",
    contact_h2_1: "Construyamos",
    contact_h2_2: "algo que",
    contact_h2_3: "perdure.",
    cert_title: "Certificaciones",
    cert1: "CFIA Registrado", cert2: "ASCE Member", cert3: "Código Sísmico CR", cert4: "SETENA Acreditado",

    form_name: "Nombre completo",
    form_email: "Correo electrónico",
    form_company: "Empresa / Organización",
    form_service: "Servicio requerido",
    form_message: "Describa su proyecto...",
    form_submit: "Enviar Consulta",
    form_required: "Por favor complete los campos requeridos antes de enviar.",
    form_success: "Gracias — su mensaje está listo para enviarse. (Conecte un servicio de formularios para activarlo — vea los comentarios en el HTML.)",

    footer_tagline: "Hecho en Costa Rica — pura vida.",
    footer_copy: "© 2026 Structura Ingeniería Consultora. Todos los derechos reservados.",
    footer_privacy: "Privacidad", footer_terms: "Términos", footer_linkedin: "LinkedIn",
  },

  en: {
    nav_services: "Services",
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",
    nav_contact_btn: "Contact",

    hero_eyebrow: "Civil Engineering Consulting — Costa Rica",
    hero_line1: "We build",
    hero_line2: "what",
    hero_line3: "holds up",
    hero_line4: "the country.",
    hero_lede: "Structura delivers precision engineering solutions for structures, infrastructure, and foundation systems. From volcanic mountains to tropical coastlines — built to last.",
    hero_btn_projects: "Projects",
    hero_btn_services: "Services",
    scroll_cue: "scroll",

    stat1_label: "Projects Delivered",
    stat2_label: "Years of Practice",
    stat3_label: "Provinces Active",
    stat4_label: "On-Schedule Rate",

    services_eyebrow: "Disciplines",
    services_h2_1: "Our",
    services_h2_2: "Services",
    butterfly_caption: "Morpho butterfly — emblem of the biodiversity we safeguard.",

    svc1_title: "Structural Engineering",
    svc1_desc: "Analysis and design of load-bearing systems for buildings, bridges, and industrial structures in seismically active and tropical terrain.",
    svc1_tag1: "Seismic Analysis", svc1_tag2: "Reinforced Concrete", svc1_tag3: "Steel Framing",

    svc2_title: "Geotechnical Consulting",
    svc2_desc: "Soil investigation and foundation design for the complex volcanic, alluvial, and slope conditions found across Costa Rica's varied geography.",
    svc2_tag1: "Foundation Design", svc2_tag2: "Slope Stability", svc2_tag3: "Retaining Walls",

    svc3_title: "Infrastructure Planning",
    svc3_desc: "Master planning for roads, drainage, and utilities in environments shaped by high rainfall, river systems, and challenging mountain topography.",
    svc3_tag1: "Urban Drainage", svc3_tag2: "Road Design", svc3_tag3: "Hydrological Studies",

    svc4_title: "Project Management",
    svc4_desc: "End-to-end delivery from conceptual design through construction in Costa Rica's permitting and environmental compliance framework.",
    svc4_tag1: "Cost Control", svc4_tag2: "SETENA Compliance", svc4_tag3: "Schedule Management",

    projects_eyebrow: "Case Studies",
    projects_h2_1: "Featured",
    projects_h2_2: "Projects",
    projects_view_all: "View All",

    prj1_title: "Sarapiquí River Bridge",
    prj1_category: "Bridge Engineering",
    prj1_desc: "Suspension structure spanning the Sarapiquí river corridor, engineered for seasonal flood loads and tropical wind conditions.",
    prj2_title: "Braulio Carrillo Viaduct",
    prj2_category: "Seismic Structural",
    prj2_desc: "Elevated viaduct crossing the Braulio Carrillo corridor, designed to seismic zone IV specifications on volcanic basalt foundations.",
    prj3_title: "Limón Storm Drainage System",
    prj3_category: "Hydraulic Infrastructure",
    prj3_desc: "Storm drainage network for the Caribbean coastal zone, designed for the highest annual rainfall averages on the American continent.",
    project_view_case: "View Full Case",

    about_eyebrow: "Who We Are",
    about_h2_1: "Engineering",
    about_h2_2: "forged in",
    about_h2_3: "precision.",
    about_p1: "Structura was founded on a clear principle: great engineering is invisible. It's simply what keeps everything standing. For nearly two decades we've applied that discipline to projects ranging from residential foundations to critical public infrastructure.",
    about_p2: "We operate in a country of exceptional geography — active volcanoes, high-energy rivers, complex volcanic soils, and some of the highest rainfall on the continent. That's not an obstacle: it's our domain.",
    bridge_label: "Infrastructure on tropical terrain",
    bridge_type: "Typology: suspension bridge over river",
    bridge_zone: "Seismic zone IV",
    context_callout: "Costa Rica holds <strong>6% of the world's biodiversity</strong> on less than 0.03% of its land area. Every structure we build coexists with that legacy — it shapes our entire design philosophy.",

    val1_title: "Technical Integrity", val1_desc: "Every calculation verified. Every assumption documented.",
    val2_title: "Field Feasibility", val2_desc: "We design for constructability, not just compliance.",
    val3_title: "Client Clarity", val3_desc: "Complex engineering translated into clear recommendations.",
    val4_title: "Environmental Responsibility", val4_desc: "Work that respects the natural environment around it.",
    about_cta: "Start a Project",

    contact_eyebrow: "Contact",
    contact_h2_1: "Let's build",
    contact_h2_2: "something",
    contact_h2_3: "that lasts.",
    cert_title: "Certifications",
    cert1: "CFIA Registered", cert2: "ASCE Member", cert3: "CR Seismic Code", cert4: "SETENA Accredited",

    form_name: "Full name",
    form_email: "Email address",
    form_company: "Company / Organization",
    form_service: "Service needed",
    form_message: "Describe your project...",
    form_submit: "Send Inquiry",
    form_required: "Please fill in the required fields before sending.",
    form_success: "Thanks — your message is ready to send. (Connect a form service to make this live — see comments in the HTML.)",

    footer_tagline: "Made in Costa Rica — pura vida.",
    footer_copy: "© 2026 Structura Engineering Consultants. All rights reserved.",
    footer_privacy: "Privacy", footer_terms: "Terms", footer_linkedin: "LinkedIn",
  }
};

const STORAGE_KEY = "structura_lang";

function getLang() {
  return localStorage.getItem(STORAGE_KEY) || "es";
}

function applyTranslations(lang) {
  const dict = STRINGS[lang] || STRINGS.es;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-toggle button, .mobile-lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved/default language immediately
  applyTranslations(getLang());

  // Language toggle buttons (desktop + mobile)
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  // Header scroll state
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  // Smooth scroll for any element with data-scroll-to
  document.querySelectorAll("[data-scroll-to]").forEach(el => {
    el.addEventListener("click", () => {
      const target = document.getElementById(el.getAttribute("data-scroll-to"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      if (mobileMenu) mobileMenu.classList.remove("open");
    });
  });

  // Scroll-to-top brand click
  document.querySelectorAll(".brand").forEach(el => {
    el.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });

  // Project tabs
  const tabButtons = document.querySelectorAll(".project-tabs button");
  const panels = document.querySelectorAll(".project-panel");
  tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      panels[i].classList.add("active");
    });
  });

  // Footer year (if present)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ---------- Contact form ----------
function handleContactSubmit(event) {
  event.preventDefault();
  const lang = getLang();
  const dict = STRINGS[lang] || STRINGS.es;
  const status = document.getElementById("form-status");
  const form = event.target;

  const required = ["name", "email", "message"];
  for (const field of required) {
    const val = form.elements[field]?.value.trim();
    if (!val) {
      status.textContent = dict.form_required;
      status.className = "error";
      return;
    }
  }

  status.textContent = dict.form_success;
  status.className = "success";
  form.reset();
}