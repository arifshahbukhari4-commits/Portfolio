/* =====================================================================
   EDIT YOUR CONTENT HERE. Everything on the page is built from this data.
   ===================================================================== */
const SITE = {
  name: "Syed Ahsan",
  whatsapp: "923088155438",
  email: "syedsultan50@gmail.com",
  waMessage: "Hello Syed Ahsan, I visited your portfolio website and would like to discuss your services.",
  mailLink: "mailto:syedsultan50@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Syed%20Ahsan%2C%0A%0AI%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project.",
  /* Contact form delivery. Leave empty until you connect a service such as
     Formspree (https://formspree.io/f/yourFormId). While empty, the form
     never claims a message was sent; it offers email/WhatsApp instead. */
  formEndpoint: ""
};

const ABOUT = "I'm Syed Ahsan, a technology-focused professional interested in web development, website creation, and office productivity. I work with WordPress and front-end web technologies to build clean, responsive websites. I also create organized documents, spreadsheets, and presentations using Microsoft Office tools.";

const HIGHLIGHTS = [
  { icon: "wordpress", title: "Website Development", tone: "" },
  { icon: "html", title: "Front-End Coding", tone: "" },
  { icon: "excel", title: "Office Productivity", tone: "p" }
];

const SERVICE_GROUPS = [
  { id: "web", title: "Web Development", services: [
    { icon: "wordpress", title: "WordPress Website Development", text: "Create modern, responsive WordPress websites for personal brands, portfolios, businesses, and online projects." },
    { icon: "html", title: "HTML Development", text: "Build clean, well-structured web pages using HTML." },
    { icon: "css", title: "CSS Styling", text: "Create attractive website layouts with responsive styling, modern color palettes, and polished visual details." },
    { icon: "js", title: "JavaScript Development", text: "Add interactive elements, dynamic behavior, and useful functionality to websites using JavaScript." }
  ]},
  { id: "office", title: "Office Management", services: [
    { icon: "word", title: "Microsoft Word", text: "Create and format professional documents, reports, letters, and other business materials." },
    { icon: "excel", title: "Microsoft Excel", text: "Organize information in spreadsheets, create formulas, structure data, and prepare useful tables and reports." },
    { icon: "ppt", title: "Microsoft PowerPoint", text: "Design clean, professional presentations with organized layouts, readable text, and attractive visual elements." }
  ]}
];

const SKILLS = [
  { icon: "wordpress", name: "WordPress" }, { icon: "html", name: "HTML" },
  { icon: "css", name: "CSS" }, { icon: "js", name: "JavaScript" },
  { icon: "word", name: "Microsoft Word" }, { icon: "excel", name: "Microsoft Excel" },
  { icon: "ppt", name: "Microsoft PowerPoint" }
];

/* To replace a sample with real work: change title/text/overview/etc., set
   sample:false (removes the "Sample concept" labels), add url:"https://..."
   for a live link, and swap preview for an image: images:["data:... or file path"]. */
const PROJECTS = [
  { id: "wp", title: "WordPress Portfolio Website", category: "WordPress Development", sample: true, preview: "wp",
    text: "A modern personal portfolio website concept featuring responsive layouts, professional typography, and clear contact options.",
    overview: "A concept for a personal portfolio built on WordPress. It shows how a single-page brand site can present services, work samples, and contact options in a clear order.",
    objectives: ["Present a personal brand clearly on the first screen", "Keep layouts readable on phones, tablets, and desktops", "Make contact options easy to find from every section"],
    tools: ["WordPress", "HTML", "CSS", "Responsive layout"],
    approach: "Start with the content structure, choose a restrained color palette and one clean typeface, then build reusable layout blocks that adapt to each screen size. Contact buttons stay visible in the navigation and at the end of the page.",
    url: "" },
  { id: "web", title: "Responsive Web Design", category: "HTML, CSS & JavaScript", sample: true, preview: "web",
    text: "A front-end website concept focused on responsive layouts, clean styling, and interactive elements.",
    overview: "A front-end concept that demonstrates how one page adapts from a wide desktop layout to a narrow phone screen, with a few interactive details written in JavaScript.",
    objectives: ["Build a page structure with semantic HTML", "Style flexible layouts with CSS grid and flexbox", "Add small interactions such as a mobile menu and form checks with JavaScript"],
    tools: ["HTML", "CSS", "JavaScript"],
    approach: "Write the markup first so the page works without styling, add CSS for layout and color, then layer in JavaScript only where interaction helps the visitor.",
    url: "" },
  { id: "office", title: "Office Productivity Solutions", category: "Microsoft Word, Excel & PowerPoint", sample: true, preview: "office",
    text: "A collection of sample document layouts, organized spreadsheet examples, and professional presentation concepts.",
    overview: "A set of sample layouts that show how documents, spreadsheets, and presentations can be organized so they are easy to read and easy to update.",
    objectives: ["Format reports and letters with consistent headings and spacing", "Structure spreadsheet data into clear tables with formulas", "Lay out slides with readable text and simple visuals"],
    tools: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    approach: "Decide what the reader needs first, then use consistent styles, clear tables, and plenty of white space so each file stays easy to scan and edit.",
    url: "" }
];

const SERVICE_OPTIONS = ["WordPress Website Development","HTML Development","CSS Styling","JavaScript Development","Microsoft Word","Microsoft Excel","Microsoft PowerPoint","Other Inquiry"];

/* ===================== icons ===================== */
const I = {
  wordpress:'<circle cx="12" cy="12" r="9"/><path d="M6.8 8.6l2.9 7.9 2.3-5.6 2.3 5.6 2.9-7.9"/>',
  html:'<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/>',
  css:'<path d="M4.5 4h15L18 18.5 12 20.5 6 18.5z"/><path d="M8 8.5h8l-.4 4-3.6 1.2-3.6-1.2"/>',
  js:'<rect x="3" y="3" width="18" height="18" rx="3.5"/><path d="M11 9.5v5.3a2 2 0 0 1-2 2M14.5 15.7c.5.9 3 1.2 3-.4 0-2-3-1.2-3-3 0-1.5 2.6-1.6 3-.3"/>',
  word:'<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8 9l1.6 6 2.4-5.5 2.4 5.5L16 9"/>',
  excel:'<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/>',
  ppt:'<rect x="3" y="4" width="18" height="12" rx="2.5"/><path d="M12 16v4M8 20h8M8 12.5l2.4-3 2 2 3.2-3.5"/>',
  wa:'<path d="M5 19l1.2-3.6A7.5 7.5 0 1 1 9 18z"/>'
};
const icon = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${I[k]}</svg>`;

/* ===================== helpers ===================== */
const $ = (s, r = document) => r.querySelector(s);
const waLink = msg => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const mailTo = (subject, body) => `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const WA_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I.wa + '</svg>';

/* ===================== render ===================== */
$("#aboutText").textContent = ABOUT;
$("#highlights").innerHTML = HIGHLIGHTS.map(h => `<li class="hl"><span class="ico ${h.tone}">${icon(h.icon)}</span><h3>${esc(h.title)}</h3></li>`).join("");

$("#serviceGroups").innerHTML = SERVICE_GROUPS.map(g => `
  <div class="group ${g.id}" role="group" aria-labelledby="g-${g.id}">
    <div class="group-head"><span class="bar" aria-hidden="true"></span><h3 id="g-${g.id}">${esc(g.title)}</h3></div>
    <div class="svc-grid">${g.services.map(s => `
      <article class="svc">
        <span class="ico ${g.id === 'office' ? 'p' : ''}">${icon(s.icon)}</span>
        <h4>${esc(s.title)}</h4>
        <p>${esc(s.text)}</p>
        <a class="link-btn" target="_blank" rel="noopener noreferrer" href="${waLink(`Hello Syed Ahsan, I visited your portfolio website and would like to discuss ${s.title}.`)}">${WA_SVG}Discuss This Service</a>
      </article>`).join("")}
    </div>
  </div>`).join("");

$("#skillList").innerHTML = SKILLS.map(s => `<li class="skill"><span class="ico">${icon(s.icon)}</span>${esc(s.name)}</li>`).join("");

/* project preview illustrations (sample visuals, drawn as SVG) */
const PV = {
  wp: [
    `<svg viewBox="0 0 400 250" role="img" aria-label="Sample concept: portfolio website homepage"><rect width="400" height="250" fill="#0B1020"/><rect x="0" y="0" width="400" height="26" fill="#111A2C"/><circle cx="14" cy="13" r="4" fill="#fb7185"/><circle cx="28" cy="13" r="4" fill="#fbbf24"/><circle cx="42" cy="13" r="4" fill="#34d399"/><text x="24" y="52" font-family="Arial" font-weight="800" font-size="13" fill="#F8FAFC">SA<tspan fill="#67E8F9">.</tspan></text><rect x="230" y="42" width="30" height="5" rx="2.5" fill="#94A3B8"/><rect x="270" y="42" width="30" height="5" rx="2.5" fill="#94A3B8"/><rect x="310" y="42" width="30" height="5" rx="2.5" fill="#94A3B8"/><rect x="350" y="38" width="28" height="13" rx="6.5" fill="#67E8F9"/><rect x="24" y="82" width="190" height="14" rx="4" fill="#F8FAFC"/><rect x="24" y="104" width="130" height="14" rx="4" fill="#8B5CF6"/><rect x="24" y="132" width="170" height="5" rx="2.5" fill="#94A3B8"/><rect x="24" y="144" width="150" height="5" rx="2.5" fill="#94A3B8"/><rect x="24" y="164" width="64" height="18" rx="9" fill="#67E8F9"/><rect x="96" y="164" width="64" height="18" rx="9" fill="none" stroke="#94A3B8"/><circle cx="320" cy="125" r="46" fill="#8B5CF6" opacity=".35"/><circle cx="345" cy="105" r="30" fill="#67E8F9" opacity=".25"/><rect x="24" y="200" width="104" height="36" rx="8" fill="#111A2C"/><rect x="148" y="200" width="104" height="36" rx="8" fill="#111A2C"/><rect x="272" y="200" width="104" height="36" rx="8" fill="#111A2C"/></svg>`,
    `<svg viewBox="0 0 400 250" role="img" aria-label="Sample concept: portfolio on a phone"><rect width="400" height="250" fill="#0B1020"/><rect x="140" y="12" width="120" height="226" rx="18" fill="#111A2C" stroke="#94A3B8" stroke-opacity=".4"/><text x="156" y="42" font-family="Arial" font-weight="800" font-size="11" fill="#F8FAFC">SA<tspan fill="#67E8F9">.</tspan></text><rect x="232" y="34" width="14" height="2.5" rx="1" fill="#94A3B8"/><rect x="232" y="39" width="14" height="2.5" rx="1" fill="#94A3B8"/><rect x="156" y="62" width="80" height="9" rx="3" fill="#F8FAFC"/><rect x="156" y="77" width="56" height="9" rx="3" fill="#8B5CF6"/><rect x="156" y="98" width="88" height="4" rx="2" fill="#94A3B8"/><rect x="156" y="107" width="70" height="4" rx="2" fill="#94A3B8"/><rect x="156" y="124" width="52" height="14" rx="7" fill="#67E8F9"/><rect x="156" y="152" width="88" height="34" rx="8" fill="#0B1020"/><rect x="156" y="194" width="88" height="34" rx="8" fill="#0B1020"/></svg>`
  ],
  web: [
    `<svg viewBox="0 0 400 250" role="img" aria-label="Sample concept: desktop and phone layouts"><rect width="400" height="250" fill="#0B1020"/><rect x="20" y="30" width="250" height="170" rx="10" fill="#111A2C" stroke="#94A3B8" stroke-opacity=".4"/><rect x="20" y="30" width="250" height="18" rx="10" fill="#0B1020"/><rect x="34" y="62" width="120" height="10" rx="3" fill="#F8FAFC"/><rect x="34" y="80" width="90" height="10" rx="3" fill="#67E8F9"/><rect x="34" y="104" width="100" height="4" rx="2" fill="#94A3B8"/><rect x="34" y="114" width="80" height="4" rx="2" fill="#94A3B8"/><rect x="34" y="150" width="68" height="34" rx="6" fill="#0B1020"/><rect x="110" y="150" width="68" height="34" rx="6" fill="#0B1020"/><rect x="186" y="150" width="68" height="34" rx="6" fill="#0B1020"/><rect x="200" y="62" width="54" height="68" rx="8" fill="#8B5CF6" opacity=".4"/><rect x="296" y="52" width="76" height="150" rx="14" fill="#111A2C" stroke="#94A3B8" stroke-opacity=".4"/><rect x="306" y="72" width="46" height="8" rx="3" fill="#F8FAFC"/><rect x="306" y="86" width="34" height="8" rx="3" fill="#67E8F9"/><rect x="306" y="108" width="54" height="22" rx="5" fill="#0B1020"/><rect x="306" y="136" width="54" height="22" rx="5" fill="#0B1020"/><rect x="306" y="164" width="54" height="22" rx="5" fill="#0B1020"/></svg>`,
    `<svg viewBox="0 0 400 250" role="img" aria-label="Sample concept: front-end code"><rect width="400" height="250" fill="#0B1020"/><g font-family="Menlo,Consolas,monospace" font-size="12"><text x="24" y="44" fill="#64748b">/* responsive grid */</text><text x="24" y="68" fill="#8B5CF6">.cards <tspan fill="#94A3B8">{</tspan></text><text x="40" y="90" fill="#F8FAFC">display: <tspan fill="#67E8F9">grid</tspan>;</text><text x="40" y="112" fill="#F8FAFC">gap: <tspan fill="#67E8F9">1.5rem</tspan>;</text><text x="24" y="134" fill="#94A3B8">}</text><text x="24" y="166" fill="#8B5CF6">menu<tspan fill="#F8FAFC">.addEventListener(</tspan><tspan fill="#67E8F9">'click'</tspan><tspan fill="#F8FAFC">, toggle);</tspan></text><text x="24" y="196" fill="#64748b">// interactive, accessible</text></g></svg>`
  ],
  office: [
    `<svg viewBox="0 0 400 250" role="img" aria-label="Sample concept: document, spreadsheet, and slide layouts"><rect width="400" height="250" fill="#0B1020"/><rect x="22" y="30" width="104" height="150" rx="8" fill="#F8FAFC"/><rect x="34" y="46" width="60" height="8" rx="2" fill="#2563eb"/><g fill="#94A3B8"><rect x="34" y="66" width="80" height="4" rx="2"/><rect x="34" y="76" width="72" height="4" rx="2"/><rect x="34" y="86" width="80" height="4" rx="2"/><rect x="34" y="106" width="76" height="4" rx="2"/><rect x="34" y="116" width="60" height="4" rx="2"/></g><rect x="148" y="30" width="104" height="150" rx="8" fill="#F8FAFC"/><g stroke="#94A3B8" stroke-opacity=".7"><path d="M148 58h104M148 82h104M148 106h104M148 130h104M148 154h104M182 30v150M217 30v150"/></g><rect x="148" y="30" width="104" height="28" fill="#16a34a"/><rect x="226" y="86" width="20" height="40" fill="#16a34a" opacity=".5"/><rect x="274" y="30" width="104" height="150" rx="8" fill="#F8FAFC"/><rect x="274" y="30" width="104" height="150" rx="8" fill="none"/><rect x="286" y="46" width="56" height="9" rx="2" fill="#ea580c"/><g fill="#94A3B8"><rect x="286" y="66" width="76" height="4" rx="2"/><rect x="286" y="76" width="64" height="4" rx="2"/></g><rect x="286" y="104" width="80" height="62" rx="6" fill="#fed7aa"/><text x="74" y="210" font-family="Arial" font-size="11" fill="#94A3B8" text-anchor="middle">Word</text><text x="200" y="210" font-family="Arial" font-size="11" fill="#94A3B8" text-anchor="middle">Excel</text><text x="326" y="210" font-family="Arial" font-size="11" fill="#94A3B8" text-anchor="middle">PowerPoint</text></svg>`,
    `<svg viewBox="0 0 400 250" role="img" aria-label="Sample concept: organized spreadsheet table"><rect width="400" height="250" fill="#0B1020"/><rect x="24" y="28" width="352" height="190" rx="10" fill="#111A2C"/><rect x="24" y="28" width="352" height="30" rx="10" fill="#16a34a"/><g stroke="#94A3B8" stroke-opacity=".3"><path d="M24 90h352M24 122h352M24 154h352M24 186h352M112 58v160M200 58v160M288 58v160"/></g><g font-family="Arial" font-size="11" fill="#F8FAFC"><text x="36" y="48" font-weight="700">Item</text><text x="124" y="48" font-weight="700">Qty</text><text x="212" y="48" font-weight="700">Price</text><text x="300" y="48" font-weight="700">Total</text><text x="36" y="79" fill="#94A3B8">Sample A</text><text x="36" y="111" fill="#94A3B8">Sample B</text><text x="36" y="143" fill="#94A3B8">Sample C</text><text x="300" y="206" fill="#67E8F9" font-weight="700">=SUM(D2:D4)</text></g></svg>`
  ]
};

$("#projGrid").innerHTML = PROJECTS.map((p, i) => `
  <article class="proj">
    <div class="thumb">${PV[p.preview] ? PV[p.preview][0] : ""}</div>
    <div class="proj-body">
      <span class="cat">${esc(p.category)}</span>
      <h3>${esc(p.title)}</h3>
      ${p.sample ? '<span class="tag">Sample concept</span>' : ''}
      <p>${esc(p.text)}</p>
      <button class="btn btn-ghost" type="button" data-proj="${i}" aria-haspopup="dialog">View Project</button>
    </div>
  </article>`).join("");

/* contact links + service dropdown + year */
const waHref = waLink(SITE.waMessage);
$("#waBtn").href = waHref;
$("#mailBtn").href = SITE.mailLink;
$("#fMail").href = SITE.mailLink;
$("#year").textContent = new Date().getFullYear();
$("#f-service").innerHTML = '<option value="">Select a service</option>' + SERVICE_OPTIONS.map(o => `<option>${esc(o)}</option>`).join("");

/* ===================== mobile menu ===================== */
const burger = $("#burger"), links = $("#navlinks");
function setMenu(open){
  links.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  $("#burgerPath").setAttribute("d", open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16");
}
burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && links.classList.contains("open")) { setMenu(false); burger.focus(); } });
window.addEventListener("resize", () => { if (innerWidth > 860) setMenu(false); });

/* active nav link */
const secs = ["home","about","services","projects","skills","contact"];
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) document.querySelectorAll(".nav-links a:not(.btn)").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
}

/* ===================== project detail view ===================== */
const modal = $("#modal"), mBody = $("#mBody");
let lastTrigger = null;
function openProject(i, trigger){
  const p = PROJECTS[i]; lastTrigger = trigger;
  const prevs = (PV[p.preview] || []).map((svg, n) => `<figure>${svg}<figcaption>${p.sample ? "Sample concept preview" : "Project preview"} ${n + 1}</figcaption></figure>`).join("");
  const imgs = (p.images || []).map((src, n) => `<figure><img src="${esc(src)}" alt="${esc(p.title)} image ${n + 1}" loading="lazy" style="width:100%;border-radius:10px"></figure>`).join("");
  const msg = `Hello Syed Ahsan, I viewed the "${p.title}" project on your portfolio and would like to discuss something similar.`;
  mBody.innerHTML = `
    <div><span class="cat">${esc(p.category)}</span><h2 id="m-title">${esc(p.title)}</h2></div>
    ${p.sample ? '<div class="notice"><strong>Sample concept.</strong> This is an illustrative example, not work delivered to a real client.</div>' : ''}
    <div><h3>Project overview</h3><p>${esc(p.overview)}</p></div>
    <div><h3>Project objectives</h3><ul class="obj">${p.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>
    <div><h3>Tools used</h3><div class="chips">${p.tools.map(t => `<span>${esc(t)}</span>`).join("")}</div></div>
    <div><h3>Design and development approach</h3><p>${esc(p.approach)}</p></div>
    <div><h3>Previews</h3><div class="previews">${imgs || prevs}</div></div>
    <div class="sheet-foot">
      ${p.url ? `<a class="btn btn-primary" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Open Live Project</a>` : ''}
      <a class="btn btn-wa" href="${waLink(msg)}" target="_blank" rel="noopener noreferrer">Discuss a Similar Project</a>
      <button class="btn btn-ghost" type="button" data-close>Close</button>
    </div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.scrollTop = 0;
  $("#mClose").focus();
}
function closeProject(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastTrigger) lastTrigger.focus();
}
$("#projGrid").addEventListener("click", e => { const b = e.target.closest("[data-proj]"); if (b) openProject(+b.dataset.proj, b); });
$("#mClose").addEventListener("click", closeProject);
$("#mBack").addEventListener("click", closeProject);
modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("[data-close]")) closeProject(); });
document.addEventListener("keydown", e => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") { closeProject(); return; }
  if (e.key === "Tab") { /* keep focus inside the dialog */
    const f = [...modal.querySelectorAll("a[href],button:not([disabled])")];
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ===================== contact form ===================== */
const form = $("#contactForm"), statusBox = $("#formStatus");
const fields = {
  name: { el: $("#f-name"), err: $("#e-name"), check: v => v.trim().length < 2 ? "Enter your full name." : "" },
  email: { el: $("#f-email"), err: $("#e-email"), check: v => !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Enter a valid email address, like name@example.com." : "" },
  service: { el: $("#f-service"), err: $("#e-service"), check: v => !v ? "Choose the service you are interested in." : "" },
  msg: { el: $("#f-msg"), err: $("#e-msg"), check: v => v.trim().length < 10 ? "Write at least 10 characters about your project." : "" }
};
function validateField(f){
  const m = f.check(f.el.value);
  f.err.textContent = m;
  f.el.setAttribute("aria-invalid", m ? "true" : "false");
  return !m;
}
Object.values(fields).forEach(f => { f.el.addEventListener("blur", () => validateField(f)); f.el.addEventListener("input", () => { if (f.el.getAttribute("aria-invalid") === "true") validateField(f); }); });
function showStatus(kind, html){ statusBox.className = "status show " + kind; statusBox.innerHTML = html; statusBox.focus(); }

form.addEventListener("submit", async e => {
  e.preventDefault();
  const results = Object.values(fields).map(validateField);
  if (results.includes(false)) {
    const bad = Object.values(fields).find(f => f.el.getAttribute("aria-invalid") === "true");
    showStatus("error", "Please fix the highlighted fields and submit again.");
    bad.el.focus();
    return;
  }
  const d = { name: fields.name.el.value.trim(), email: fields.email.el.value.trim(), service: fields.service.el.value, message: fields.msg.el.value.trim() };

  if (SITE.formEndpoint) {
    try {
      const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(d) });
      if (r.ok) { form.reset(); showStatus("ok", "Thank you. Your inquiry was delivered to Syed Ahsan."); return; }
      throw new Error("Request failed");
    } catch (err) {
      showStatus("error", "Your inquiry could not be delivered. Please use the WhatsApp or email buttons instead.");
      return;
    }
  }
  /* No email service is connected, so nothing is sent from here. */
  const body = `Name: ${d.name}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.message}`;
  showStatus("info", `<strong>Nothing has been sent yet.</strong> This form is not connected to an email service. Your details are ready to send by email or WhatsApp:<div class="row"><a class="btn btn-ghost" href="${mailTo("Portfolio Inquiry: " + d.service, body)}">Open email draft</a><a class="btn btn-wa" target="_blank" rel="noopener noreferrer" href="${waLink("Hello Syed Ahsan, my name is " + d.name + ". I'm interested in: " + d.service + ".\n\n" + d.message)}">Send on WhatsApp</a></div>`);
});
