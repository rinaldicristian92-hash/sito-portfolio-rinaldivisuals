/* ════════════════════════════════════════════════════════════
   RINALDI VISUALS — main.js
   Contenuti (lavori, motion, foto, percorso) · lingua IT/EN · motion · avatar
   Per aggiungere un lavoro o un video: modifica gli array WORKS / MOTION qui sotto.
   ════════════════════════════════════════════════════════════ */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k, v){ try { localStorage.setItem(k, v); } catch(e){} }
};

/* ══════════════ TESTI ══════════════ */
const I18N = {
  it: {
    skip: 'Vai ai lavori',
    nav_works: 'Lavori', nav_motion: 'Motion', nav_photo: 'Fotografia', nav_about: 'Chi sono', nav_contact: 'Contatti',
    hero_eyebrow: 'Graphic designer e visual director a Foggia',
    hero_sub: 'Costruisco identità visive che si capiscono in un secondo e si ricordano a lungo.',
    hero_cta1: 'Guarda i lavori', hero_cta2: 'Parliamone', scroll: 'Scorri',
    statement: "Ogni progetto nasce da un'idea semplice: il design deve *emozionare.* Unisco tipografia, fotografia e colore per costruire identità che *non si dimenticano.*",
    wk_title: 'Lavori<br>selezionati<em class="dot">.</em>',
    wk_note: 'Tre progetti raccontati per intero, poi una selezione di stampa ed editoria. Tocca un lavoro per aprirlo.',
    open: 'Apri il progetto', view: 'Vedi', play: 'Play', next: 'Progetto successivo',
    m_client: 'Cliente', m_year: 'Anno', m_role: 'Ruolo', m_type: 'Tipo',
    more_t: 'Il resto è su Instagram', more_p: 'Post, caroselli e lavori in corso, ogni settimana.',
    c_context: 'Il contesto', c_solution: 'La soluzione', c_result: 'Il risultato',
    mo_title: 'In<br>movimento<em class="dot">.</em>',
    mo_p1: 'Reel, animazioni e video per i brand che seguo. Taglio, ritmo e grafica in movimento pensati per fermare il pollice nei primi due secondi.',
    mo_sound_on: 'Attiva audio', mo_sound_off: 'Disattiva audio',
    ph_title: 'Attraverso<br>l\'obiettivo<em class="dot">.</em>',
    ph_note: 'Ritratti, eventi, luoghi. Trascina per scorrere, tocca una foto per ingrandirla.',
    ab_title: 'Cristian<br>Rinaldi<em class="dot">.</em>',
    ab_p1: 'Sono un graphic designer e visual director di Foggia. Progetto identità visive, editoria, contenuti social e siti, e fotografo le persone e i luoghi che racconto.',
    ab_p2: 'Mi sono diplomato Tecnico Grafico all\'I.I.S. Einaudi–Grieco e oggi studio Progettazione Artistica per l\'Impresa, indirizzo Graphic Design, all\'Accademia di Belle Arti di Foggia.',
    ab_p3: 'I miei lavori sono stati scelti per campagne ufficiali, eventi cittadini e una mostra collettiva. Oggi curo la comunicazione social di GAM Ristorazione e MyPetLab.',
    f1_t: 'Base', f1_d: 'Foggia, anche da remoto', f2_t: 'Strumenti', f3_t: 'Lingue', f3_d: 'Italiano, inglese',
    pr_title: 'Come<br>lavoro<em class="dot">.</em>',
    pr1_t: 'Ascolto', pr1_p: 'Capisco il tuo brand, gli obiettivi e chi deve guardarlo. Ogni progetto parte dalle domande giuste.',
    pr2_t: 'Direzione', pr2_p: 'Scelgo una strada visiva chiara e te la mostro prima di disegnare tutto: niente sorprese a metà lavoro.',
    pr3_t: 'Sviluppo', pr3_p: 'Costruisco il progetto e rifinisco ogni dettaglio finché non funziona davvero, su ogni formato.',
    pr4_t: 'Consegna', pr4_p: 'Ti consegno file pronti all\'uso, per stampa e digitale, e resto disponibile anche dopo.',
    jr_title: 'Esperienze<br>e formazione<em class="dot">.</em>',
    ct_title: 'Iniziamo<br>un progetto<em class="dot">.</em>',
    ct_sub: 'Hai un\'idea, un brand da costruire o un progetto da rendere più forte? Scrivimi, ti rispondo entro un giorno.',
    ct_links: 'Tutti i link', ct_qr: 'Inquadra per tutti i miei link',
    ct_place: 'Foggia, Italia. Disponibile anche da remoto.',
    ft_made: 'Progettato e costruito a Foggia.', ft_top: 'Torna su',
    bub_idle: 'Ancora lì?', bub_contact: 'Parliamone.', bub_lang: 'Ok, cambio lingua.', bub_hello: 'Ciao, sono Cristian.',
  },
  en: {
    skip: 'Skip to work',
    nav_works: 'Work', nav_motion: 'Motion', nav_photo: 'Photography', nav_about: 'About', nav_contact: 'Contact',
    hero_eyebrow: 'Graphic designer and visual director in Foggia, Italy',
    hero_sub: 'I build visual identities that make sense in a second and stay with you for a long time.',
    hero_cta1: 'See the work', hero_cta2: "Let's talk", scroll: 'Scroll',
    statement: 'Every project starts from a simple idea: design has to *move you.* I bring typography, photography and colour together to build identities that *people remember.*',
    wk_title: 'Selected<br>work<em class="dot">.</em>',
    wk_note: 'Three projects told in full, then a selection of print and editorial work. Tap a project to open it.',
    open: 'Open the project', view: 'View', play: 'Play', next: 'Next project',
    m_client: 'Client', m_year: 'Year', m_role: 'Role', m_type: 'Type',
    more_t: 'The rest is on Instagram', more_p: 'Posts, carousels and work in progress, every week.',
    c_context: 'The context', c_solution: 'The solution', c_result: 'The result',
    mo_title: 'In<br>motion<em class="dot">.</em>',
    mo_p1: 'Reels, animations and video for the brands I work with. Cuts, rhythm and motion graphics designed to stop the thumb in the first two seconds.',
    mo_sound_on: 'Sound on', mo_sound_off: 'Sound off',
    ph_title: 'Through<br>the lens<em class="dot">.</em>',
    ph_note: 'Portraits, events, places. Drag to scroll, tap a photo to enlarge it.',
    ab_title: 'Cristian<br>Rinaldi<em class="dot">.</em>',
    ab_p1: "I'm a graphic designer and visual director based in Foggia, Italy. I design visual identities, editorial pieces, social content and websites, and I photograph the people and places I tell stories about.",
    ab_p2: 'I graduated as a Graphic Technician at I.I.S. Einaudi–Grieco and I now study Art Direction for Business, Graphic Design track, at the Academy of Fine Arts of Foggia.',
    ab_p3: 'My work has been chosen for official campaigns, city events and a group exhibition. Today I run social media communication for GAM Ristorazione and MyPetLab.',
    f1_t: 'Based in', f1_d: 'Foggia, also remote', f2_t: 'Tools', f3_t: 'Languages', f3_d: 'Italian, English',
    pr_title: 'How<br>I work<em class="dot">.</em>',
    pr1_t: 'Listen', pr1_p: 'I get to know your brand, your goals and who needs to see it. Every project starts with the right questions.',
    pr2_t: 'Direction', pr2_p: 'I pick one clear visual path and show it to you before designing everything: no surprises halfway through.',
    pr3_t: 'Build', pr3_p: 'I build the project and refine every detail until it truly works, in every format.',
    pr4_t: 'Delivery', pr4_p: 'You get ready-to-use files for print and digital, and I stay available afterwards.',
    jr_title: 'Experience<br>and education<em class="dot">.</em>',
    ct_title: "Let's start<br>a project<em class=\"dot\">.</em>",
    ct_sub: 'Got an idea, a brand to build or a project that needs a stronger visual voice? Write to me, I reply within a day.',
    ct_links: 'All links', ct_qr: 'Scan for all my links',
    ct_place: 'Foggia, Italy. Also available remotely.',
    ft_made: 'Designed and built in Foggia.', ft_top: 'Back to top',
    bub_idle: 'Still there?', bub_contact: "Let's talk.", bub_lang: 'Fine, switching language.', bub_hello: "Hi, I'm Cristian.",
  }
};

/* ══════════════ LAVORI ══════════════
   featured: true → raccontato in grande con testo completo.
   img: copertina · gallery: immagini nel case study · logo: true → sfondo carta */
const WORKS = [
  {
    id: 'foggiapp', featured: true, img: 'slide-03.png',
    gallery: ['slide-01.png','slide-02.png','slide-03.png','slide-04.png','slide-05.png','slide-06.png','slide-07.png','slide-08.png'],
    year: '2025 — 2026',
    it: { t: 'FoggiApp', cat: 'Web app, UX/UI, sviluppo', client: 'Progetto Grani Digitali', role: 'Ricerca, copy, UX/UI, front-end',
      d: 'Una web app che racconta Foggia tra storia, mito e tradizione. Design, codice e contenuti: tutto fatto da me.',
      ctx: 'Foggia non era sulla mappa digitale. Guide generiche, siti istituzionali poco interattivi, nessun racconto pensato per la città: chi la cercava online trovava frammenti, non una storia.',
      sol: 'Ho costruito una web app con percorsi storici, una mappa interattiva e moduli con gallerie, modelli 3D e video. Prima ho scritto la storia, poi ho disegnato l\'interfaccia.',
      res: 'Un prodotto completo, dalla ricerca storica al codice, che porta la città dentro il telefono di chi la visita.' },
    en: { t: 'FoggiApp', cat: 'Web app, UX/UI, development', client: 'Grani Digitali project', role: 'Research, copy, UX/UI, front-end',
      d: 'A web app that tells the story of Foggia through history, myth and tradition. Design, code and content: all done by me.',
      ctx: 'Foggia was missing from the digital map. Generic guides, barely interactive institutional sites, no story written for the city: people searching for it online found fragments, not a narrative.',
      sol: 'I built a web app with historical routes, an interactive map and modules with galleries, 3D models and video. I wrote the story first, then designed the interface.',
      res: 'A complete product, from historical research to code, that puts the city in the pocket of whoever visits it.' }
  },
  {
    id: 'refingo', featured: true, img: 'refingo-board.png',
    gallery: ['refingo-board.png','refingo-mockup.png','refingo-logo.png'],
    year: '2026',
    it: { t: 'Refingo', cat: 'Brand identity, logo', client: 'Refingo', role: 'Logo e identità visiva',
      d: 'Un marchio morbido e riconoscibile, ispirato all\'axolotl, pensato per vivere sia sul digitale sia sui prodotti.',
      ctx: 'Refingo aveva bisogno di un\'identità da zero: un segno semplice, che funzionasse in piccolo come in grande e non somigliasse a nessun altro.',
      sol: 'Ho disegnato un simbolo ispirato all\'axolotl, con linee fluide e un lettering minimale. L\'ho messo alla prova su app, packaging, tessuto e metallo.',
      res: 'Un sistema coerente su ogni supporto, dal favicon alla borraccia.' },
    en: { t: 'Refingo', cat: 'Brand identity, logo', client: 'Refingo', role: 'Logo and visual identity',
      d: 'A soft, recognisable mark inspired by the axolotl, designed to live both on screen and on products.',
      ctx: 'Refingo needed an identity from scratch: a simple sign that works small and large and looks like nobody else.',
      sol: 'I drew a symbol inspired by the axolotl, with fluid lines and minimal lettering, and tested it on app icons, packaging, fabric and metal.',
      res: 'A consistent system on every surface, from the favicon to the water bottle.' }
  },
  {
    id: 'admo', featured: true, img: 'work-admo.jpg', gallery: ['work-admo.jpg'],
    year: '2024',
    it: { t: 'Campagna ADMO Puglia', cat: 'Campagna di sensibilizzazione', client: 'ADMO Puglia, con Gianmarco Saurino', role: 'Layout e grafica',
      d: 'Un gesto semplice può salvare una vita. Una campagna per avvicinare i giovani alla donazione di midollo osseo.',
      ctx: 'ADMO cercava un messaggio diretto per spiegare in pochi secondi chi può donare e perché farlo.',
      sol: 'Ho costruito il layout attorno a un\'immagine che tutti riconoscono, due mani che si cercano, e ho ridotto i requisiti a tre icone leggibili al volo.',
      res: 'L\'elaborato è stato selezionato e pubblicato nella comunicazione ufficiale della campagna.' },
    en: { t: 'ADMO Puglia campaign', cat: 'Awareness campaign', client: 'ADMO Puglia, with Gianmarco Saurino', role: 'Layout and graphics',
      d: 'A simple gesture can save a life. A campaign to bring young people closer to bone marrow donation.',
      ctx: 'ADMO needed a direct message to explain in a few seconds who can donate and why.',
      sol: 'I built the layout around an image everyone recognises, two hands reaching for each other, and reduced the requirements to three icons you can read at a glance.',
      res: 'The artwork was selected and published in the official campaign communication.' }
  },
  { id: 'copertina', img: 'work-copertina.jpg', wide: true,
    it: { t: 'Copertina editoriale', cat: 'Editoria' }, en: { t: 'Editorial book cover', cat: 'Editorial' } },
  { id: 'fuoriquota', img: 'fuoriquota_logo_trasparente.png', logo: true, year: '2026',
    it: { t: 'fuoriQuota', cat: 'Logo', client: 'fuoriQuota, videografia con drone', d: 'Il marchio per fuoriQuota: tre segni che salgono, come un decollo.' },
    en: { t: 'fuoriQuota', cat: 'Logo', client: 'fuoriQuota, drone videography', d: 'The mark for fuoriQuota: three shapes rising, like a take-off.' } },
  { id: 'manifesto', img: 'work-manifesto.jpg',
    it: { t: 'Manifesto Off-Road', cat: 'Poster' }, en: { t: 'Off-Road poster', cat: 'Poster' } },
  { id: 'fashion', img: 'work-poster-fashion.jpg',
    it: { t: 'Fashion Poster', cat: 'Poster' }, en: { t: 'Fashion poster', cat: 'Poster' } },
  { id: 'memoria', img: 'work-memoria.jpg',
    it: { t: 'Giornata della Memoria', cat: 'Poster' }, en: { t: 'Holocaust Memorial Day', cat: 'Poster' } },
  { id: 'menu', img: 'work-menu.png',
    it: { t: 'Menù evento', cat: 'Stampa' }, en: { t: 'Event menu', cat: 'Print' } },
  { id: 'inviti', img: 'work-inviti.png',
    it: { t: 'Inviti compleanno', cat: 'Stampa' }, en: { t: 'Birthday invitations', cat: 'Print' } },
];

/* ══════════════ MOTION ══════════════
   Per aggiungere un video: copia un oggetto e cambia src / poster / testi. */
const MOTION = [
  { type: 'ident',
    it: { t: 'Ident Rinaldi Visuals', d: 'Motion graphic animata in codice, loop da 10 secondi' },
    en: { t: 'Rinaldi Visuals ident', d: 'Motion graphic built in code, 10-second loop' } },
  { src: 'assets/Maya_Style_Reel_01.mp4', poster: 'assets/maya-poster.jpg',
    it: { t: 'Maya Style', d: 'Reel per toelettatura, Foggia' },
    en: { t: 'Maya Style', d: 'Reel for a pet grooming salon, Foggia' } },
];

/* ══════════════ PERCORSO ══════════════ */
const JOURNEY = [
  { y: '2026', it: ['Mostra collettiva, Fondazione Monti Uniti, Foggia', 'Opera selezionata ed esposta al pubblico per la mostra del 27 gennaio.', 'Mostra'],
               en: ['Group exhibition, Monti Uniti Foundation, Foggia', 'Selected artwork shown to the public at the January 27th exhibition.', 'Exhibition'] },
  { y: '2026', it: ['Social Media Manager, GAM Ristorazione', 'Gestione dei canali social e creazione dei contenuti per il brand.', 'Social'],
               en: ['Social Media Manager, GAM Ristorazione', 'Running the social channels and creating content for the brand.', 'Social'] },
  { y: '2026', it: ['Social Media Manager, MyPetLab', 'Gestione dei canali social e creazione dei contenuti per il brand.', 'Social'],
               en: ['Social Media Manager, MyPetLab', 'Running the social channels and creating content for the brand.', 'Social'] },
  { y: '2026', it: ['Logo e identità, Refingo', 'Progettazione dell\'identità visiva e del logo.', 'Branding'],
               en: ['Logo and identity, Refingo', 'Visual identity and logo design.', 'Branding'] },
  { y: '2026', it: ['Logo, fuoriQuota', 'Realizzazione del marchio per un brand di videografia con drone.', 'Branding'],
               en: ['Logo, fuoriQuota', 'Mark for a drone videography brand.', 'Branding'] },
  { y: '2026 —', it: ['Accademia di Belle Arti di Foggia', 'Progettazione Artistica per l\'Impresa, indirizzo Graphic Design.', 'Formazione'],
               en: ['Academy of Fine Arts of Foggia', 'Art Direction for Business, Graphic Design track.', 'Education'] },
  { y: '2025 — 2026', it: ['Web app FoggiApp', 'Progettazione e sviluppo della web app per la città di Foggia, nel progetto Grani Digitali.', 'Web'],
               en: ['FoggiApp web app', 'Design and development of the web app for the city of Foggia, within the Grani Digitali project.', 'Web'] },
  { y: '2025', it: ['Capitanatale Foggia, fondale e poster', 'Layout per l\'evento nell\'ottavo centenario del "Cantico delle Creature".', 'Evento'],
               en: ['Capitanatale Foggia, backdrop and poster', 'Layout for the event marking the eighth centenary of the "Canticle of the Creatures".', 'Event'] },
  { y: '2024', it: ['Campagna ADMO Puglia, con Gianmarco Saurino', 'Elaborato selezionato e pubblicato nella comunicazione ufficiale.', 'Campagna'],
               en: ['ADMO Puglia campaign, with Gianmarco Saurino', 'Artwork selected and published in the official communication.', 'Campaign'] },
  { y: '2021 — 2026', it: ['Diploma Tecnico Grafico, I.I.S. Einaudi–Grieco, Foggia', 'Impaginazione editoriale e pubblicitaria, identità visiva, tipografia, file per la stampa, contenuti social.', 'Formazione'],
               en: ['Graphic Technician diploma, I.I.S. Einaudi–Grieco, Foggia', 'Editorial and advertising layout, visual identity, typography, print-ready files, social content.', 'Education'] },
];

const PHOTOS = 19;

/* ══════════════ STATO ══════════════ */
let lang = store.get('rv-lang') === 'en' ? 'en' : 'it';
const t = k => I18N[lang][k] ?? I18N.it[k] ?? '';
const L = o => o[lang] || o.it;

/* ══════════════ RENDER ══════════════ */
function renderWorks(){
  const feat = $('#featured'), grid = $('#grid');
  feat.innerHTML = ''; grid.innerHTML = '';
  WORKS.forEach((w, i) => {
    const c = L(w);
    if (w.featured){
      const el = document.createElement('article');
      el.className = 'feat';
      el.innerHTML = `
        <div class="feat-media" data-open="${i}" data-cursor="${t('view')}" role="button" tabindex="0" aria-label="${t('open')}: ${c.t}">
          <span class="media-glow"></span>
          <div class="media-frame focus${w.logo ? ' is-logo' : ''}" data-speed="0.05"><img src="assets/${w.img}" alt="${c.t}" loading="lazy"></div>
        </div>
        <div class="feat-copy">
          <p class="feat-cat">${c.cat}</p>
          <h3 class="feat-title">${c.t}<em class="dot">.</em></h3>
          <p class="feat-desc">${c.d}</p>
          <dl class="feat-meta">
            <dt>${t('m_client')}</dt><dd>${c.client}</dd>
            <dt>${t('m_year')}</dt><dd>${w.year}</dd>
            <dt>${t('m_role')}</dt><dd>${c.role}</dd>
          </dl>
          <button class="btn btn--ghost" type="button" data-open="${i}" data-cursor="">${t('open')}</button>
        </div>`;
      feat.appendChild(el);
    } else {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'tile' + (w.wide ? ' wide' : '');
      el.dataset.open = i; el.dataset.cursor = t('view');
      el.innerHTML = `
        <span class="media-glow"></span>
        <span class="media-frame focus${w.logo ? ' is-logo' : ''}" style="display:block"><img src="assets/${w.img}" alt="${c.t}" loading="lazy"></span>
        <span class="tile-cap"><b>${c.t}</b><span>${c.cat}</span></span>`;
      grid.appendChild(el);
    }
  });
  const more = document.createElement('a');
  more.className = 'tile-more';
  more.href = 'https://www.instagram.com/rinaldi.visuals/'; more.target = '_blank'; more.rel = 'noopener';
  more.dataset.cursor = 'Instagram';
  more.innerHTML = `<strong>${t('more_t')}<em class="dot">.</em></strong><span>${t('more_p')}<br>@rinaldi.visuals</span>`;
  grid.appendChild(more);
}

function renderTimeline(){
  $('#timeline').innerHTML = JOURNEY.map(j => {
    const [ti, p, tag] = L(j);
    return `<li class="tl"><span class="tl-year">${j.y}</span><div><h3>${ti}</h3><p>${p}</p></div><span class="tl-tag">${tag}</span></li>`;
  }).join('');
}

let motionIdx = 0;
function renderMotion(){
  const list = $('#motionList');
  list.innerHTML = MOTION.map((m, i) => {
    const c = L(m);
    return `<li><button type="button" data-motion="${i}" aria-current="${i === motionIdx}"><span class="ml-txt"><b>${c.t}</b><small>${c.d}</small></span>${i === motionIdx ? '<i class="live" aria-hidden="true"></i>' : ''}</button></li>`;
  }).join('');
  $('#motionCaption').textContent = L(MOTION[motionIdx]).t + ', ' + L(MOTION[motionIdx]).d.toLowerCase();
}

function renderStatement(){
  const el = $('#statementText');
  el.innerHTML = '';
  let accent = false;
  t('statement').split(/\s+/).forEach(tok => {
    let w = tok;
    if (w.startsWith('*')){ accent = true; w = w.slice(1); }
    const end = w.endsWith('*') || w.endsWith('*.') ;
    w = w.replace(/\*/g, '');
    const s = document.createElement('span');
    s.className = 'w' + (accent ? ' accent' : '');
    s.textContent = w;
    el.append(s, ' ');
    if (end) accent = false;
  });
}

function renderPhotos(){
  const strip = $('#strip');
  let html = '';
  for (let i = 1; i <= PHOTOS; i++){
    const n = String(i).padStart(2, '0');
    html += `<figure class="shot focus" data-idx="${i - 1}" data-cursor="${t('view')}" style="margin:0"><span class="n">${n}</span><img src="assets/photo-${n}.jpg" alt="Fotografia ${n}, Cristian Rinaldi" loading="lazy" draggable="false"></figure>`;
  }
  strip.innerHTML = html;
  $('#stripTot').textContent = String(PHOTOS);
}

/* ══════════════ LINGUA ══════════════ */
function applyStatic(){
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => { const v = I18N[lang][el.dataset.i18n]; if (v != null) el.textContent = v; });
  $$('[data-i18n-html]').forEach(el => { const v = I18N[lang][el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $('#langPill').style.transform = lang === 'en' ? 'translateX(100%)' : 'none';
  const snd = $('#soundBtn span:last-child');
  snd.textContent = video.muted ? t('mo_sound_on') : t('mo_sound_off');
  splitTitles();
}

/* Titoli divisi in righe per l'animazione a maschera */
const tio = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add('t-in'); tio.unobserve(e.target); }
}), { threshold: .3 }) : null;
function splitTitles(){
  $$('.h2, .contact-title').forEach(h => {
    const parts = h.innerHTML.split(/<br\s*\/?>/i);
    h.innerHTML = parts.map(p => `<span class="ln"><span>${p}</span></span>`).join('');
    if (reduced || !tio) h.classList.add('t-in');
    else if (!h.classList.contains('t-in')) tio.observe(h);
  });
}
function renderDynamic(){
  renderWorks(); renderTimeline(); renderMotion(); renderStatement();
  $$('.shot').forEach(s => s.dataset.cursor = t('view'));
  observeAll();
  updateStatement();
}
function setLang(next){
  if (next === lang) return;
  lang = next; store.set('rv-lang', lang);
  avatarFlash('impassibile', 1500, t('bub_lang'));
  if (reduced){ applyStatic(); renderDynamic(); return; }
  document.body.classList.add('lang-swap');
  $$('#featured, #grid, #timeline, #statementText, #motionList').forEach(e => e.classList.add('i18n-dyn'));
  setTimeout(() => {
    applyStatic(); renderDynamic();
    requestAnimationFrame(() => document.body.classList.remove('lang-swap'));
  }, 280);
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ══════════════ REVEAL: immagini che vanno a fuoco ══════════════ */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12, rootMargin: '0px 0px -5% 0px' }) : null;
function observeAll(){
  $$('.focus:not(.in), .steps li:not(.in)').forEach(el => io ? io.observe(el) : el.classList.add('in'));
}

/* ══════════════ TEMA CHIARO / SCURO PER SEZIONE ══════════════ */
const sections = $$('main section[data-theme], .footer');
function updateTheme(){
  const mid = innerHeight * .5;
  let theme = 'dark';
  for (const s of sections){
    const r = s.getBoundingClientRect();
    if (r.top <= mid && r.bottom > mid){ theme = s.dataset.theme; break; }
  }
  if (document.body.dataset.theme !== theme){
    document.body.dataset.theme = theme;
    fireStreak();
  }
}
const streak = $('#streak');
let streakT = 0;
function fireStreak(){
  if (reduced || !document.body.classList.contains('is-loaded')) return;
  const now = performance.now(); if (now - streakT < 1200) return; streakT = now;
  streak.classList.remove('go', 'up'); void streak.offsetWidth;
  streak.classList.add('go'); if (velocity < 0) streak.classList.add('up');
}

/* ══════════════ NAV ATTIVA ══════════════ */
const navMap = ['works','motion','photo','about','contact'];
function updateNav(){
  let cur = '';
  navMap.forEach(id => { const s = document.getElementById(id); if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = id; });
  $$('.nav-links a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + cur));
  return cur;
}

/* ══════════════ STATEMENT: parole che si accendono ══════════════ */
function updateStatement(){
  const sec = $('#statement');
  const words = $$('#statementText .w');
  if (!words.length) return;
  const r = sec.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .78 - r.top) / (r.height * .75)));
  const n = reduced ? words.length : Math.round(p * words.length);
  words.forEach((w, i) => w.classList.toggle('on', i < n));
}

/* ══════════════ PROCESSO: linea che si disegna ══════════════ */
const path = $('#stepsPath');
let pathLen = 0;
try { pathLen = path.getTotalLength(); path.style.strokeDasharray = pathLen; path.style.strokeDashoffset = pathLen; } catch(e){}
function updatePath(){
  if (!pathLen) return;
  const r = $('#steps').getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .25)));
  path.style.strokeDashoffset = reduced ? 0 : pathLen * (1 - p);
}

/* ══════════════ PARALLASSE ══════════════ */
const heroInner = $('.hero-inner');
function updateParallax(){
  if (reduced) return;
  $$('[data-speed]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > innerHeight + 200) return;
    const off = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.speed);
    el.style.translate = `0 ${off.toFixed(1)}px`;
  });
  // uscita dell'hero: il titolo si sfoca e sale mentre scorri
  const hp = Math.min(1, Math.max(0, scrollY / innerHeight));
  if (hp < 1){
    heroInner.style.transform = `translate3d(0, ${(-hp * 90).toFixed(1)}px, 0)`;
    heroInner.style.opacity = (1 - hp * 1.15).toFixed(3);
    heroInner.style.filter = hp > .01 ? `blur(${(hp * 10).toFixed(1)}px)` : '';
  }
  const bw = $('.motion-bgword');
  const mr = $('#motion').getBoundingClientRect();
  if (mr.bottom > 0 && mr.top < innerHeight) bw.style.transform = `translateX(${(-mr.top * .35 - 100).toFixed(1)}px)`;
}

/* ══════════════ STRISCIA IN MOVIMENTO (reagisce alla velocità di scroll) ══════════════ */
const track = $('#marquee');
track.innerHTML += track.innerHTML; // duplica per il loop
let mx = 0, mVel = 0;
function marqueeTick(){
  const half = track.scrollWidth / 2;
  mx -= 0.6 + Math.min(Math.abs(mVel) * 0.12, 14);
  if (-mx >= half) mx += half;
  track.style.transform = `translate3d(${mx.toFixed(2)}px,0,0)`;
}

/* ══════════════ SCROLL: un solo ciclo ══════════════ */
let lastY = scrollY, lastT = performance.now(), velocity = 0;
const nav = $('#nav'), prog = $('#progress');
function onScroll(){
  const y = scrollY, now = performance.now();
  velocity = (y - lastY) / Math.max(1, now - lastT) * 16;
  const max = document.documentElement.scrollHeight - innerHeight;
  prog.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  nav.classList.toggle('is-hidden', y > 300 && y > lastY + 2 && !drawerOpen);
  if (y < lastY - 2 || y < 300) nav.classList.remove('is-hidden');
  lastY = y; lastT = now; mVel = velocity;
  updateTheme(); updateStatement(); updatePath(); updateParallax();
  const cur = updateNav();
  avatarSection(cur);
  if (Math.abs(velocity) > 75) avatarFlash('scettico', 1200);
  poke();
}

/* ══════════════ SMOOTH SCROLL (Lenis, se disponibile) ══════════════ */
let lenis = null;
function startLenis(){
  if (lenis || reduced || typeof window.Lenis !== 'function') return;
  lenis = new window.Lenis({ duration: 1.15, easing: x => 1 - Math.pow(1 - x, 4), smoothWheel: true });
  lenis.on('scroll', onScroll);
}
function scrollToTarget(target){
  if (lenis) lenis.scrollTo(target, { offset: 0 });
  else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  const target = id === '#top' ? document.body : $(id);
  if (!target) return;
  e.preventDefault(); toggleDrawer(false); scrollToTarget(target);
}));

function frame(time){
  if (lenis) lenis.raf(time);
  if (!reduced){ marqueeTick(); heroTick(time); }
  mVel *= 0.92;
  requestAnimationFrame(frame);
}

/* ══════════════ MENU MOBILE ══════════════ */
let drawerOpen = false;
const burger = $('#burger'), drawer = $('#drawer');
function toggleDrawer(force){
  const open = force != null ? force : !drawerOpen;
  if (open === drawerOpen) return;
  drawerOpen = open;
  drawer.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  burger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('drawer-open', open);
  lockScroll(open);
}
burger.addEventListener('click', () => toggleDrawer());

let locks = 0;
function lockScroll(on){
  locks = Math.max(0, locks + (on ? 1 : -1));
  const locked = locks > 0;
  document.documentElement.style.overflow = locked ? 'hidden' : '';
  if (lenis) locked ? lenis.stop() : lenis.start();
}

/* ══════════════ CURSORE ══════════════ */
const cursor = $('#cursor'), cLabel = $('#cursorLabel');
if (finePointer && !reduced){
  document.body.classList.add('has-cursor');
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; cursor.classList.remove('is-hidden'); }, { passive: true });
  document.addEventListener('pointerleave', () => cursor.classList.add('is-hidden'));
  (function loop(){ cx += (tx - cx) * .2; cy += (ty - cy) * .2; cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); })();
  document.addEventListener('pointerover', e => {
    const el = e.target.closest('[data-cursor], a, button');
    const big = el && el.hasAttribute('data-cursor') && el.dataset.cursor;
    cursor.classList.toggle('is-big', !!big);
    cLabel.textContent = big || '';
  });
}

/* Luce rossa dell'hero che segue il mouse */
const glow = $('#heroGlow');
let gx = innerWidth * .7, gy = innerHeight * .45, gtx = gx, gty = gy;
addEventListener('pointermove', e => { if (scrollY < innerHeight){ gtx = e.clientX; gty = e.clientY; } }, { passive: true });
(function glowLoop(){
  gx += (gtx - gx) * .045; gy += (gty - gy) * .045;
  glow.style.transform = `translate3d(${gx}px,${gy + scrollY * .2}px,0)`;
  if (!reduced) requestAnimationFrame(glowLoop);
})();

/* ══════════════ AVATAR ══════════════
   Priorità: case study > lampo (lingua, scroll veloce) > hover lavoro > inattività > sezione */
const faces = $$('#avatarFace img');
const bubble = $('#avatarBubble');
const av = { base: 'neutro', hover: false, caseOpen: false, flash: null, idle: false, current: 'neutro' };
let flashTimer, idleTimer, bubbleTimer;
function setFace(m){
  if (av.current === m) return;
  av.current = m;
  faces.forEach(img => img.classList.toggle('on', img.dataset.mood === m));
}
function resolveFace(){
  setFace(av.caseOpen ? 'sgranato' : av.flash ? av.flash : av.hover ? 'soddisfatto' : av.idle ? 'stanco' : av.base);
}
function say(text, ms = 2200){
  if (!text) return;
  bubble.textContent = text; bubble.classList.add('show');
  clearTimeout(bubbleTimer); bubbleTimer = setTimeout(() => bubble.classList.remove('show'), ms);
}
function avatarFlash(m, ms, text){
  av.flash = m; resolveFace(); if (text) say(text, ms);
  clearTimeout(flashTimer); flashTimer = setTimeout(() => { av.flash = null; resolveFace(); }, ms);
}
let lastSec = '';
function avatarSection(cur){
  const base = cur === 'contact' ? 'serio' : 'neutro';
  if (cur !== lastSec){ lastSec = cur; if (cur === 'contact') say(t('bub_contact')); }
  if (av.base !== base){ av.base = base; resolveFace(); }
}
function poke(){
  if (av.idle){ av.idle = false; resolveFace(); }
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => { av.idle = true; resolveFace(); say(t('bub_idle')); }, 15000);
}
['pointermove','keydown','touchstart'].forEach(ev => addEventListener(ev, poke, { passive: true }));
document.addEventListener('pointerover', e => {
  const h = !!e.target.closest('.feat-media, .tile');
  if (h !== av.hover){ av.hover = h; resolveFace(); }
});
$('#avatar').addEventListener('click', () => { closeCase(); scrollToTarget($('#contact')); });

/* ══════════════ CASE STUDY ══════════════ */
const caseEl = $('#case'), caseScroll = $('#caseScroll');
let caseIdx = -1, lastFocus = null;
function openCase(i){
  const w = WORKS[i]; if (!w) return;
  const c = L(w);
  caseIdx = i;
  $('#caseCat').textContent = c.cat;
  $('#caseTitle').innerHTML = `${c.t}<em class="dot">.</em>`;
  const meta = [];
  if (c.client) meta.push([t('m_client'), c.client]);
  if (w.year) meta.push([t('m_year'), w.year]);
  if (c.role) meta.push([t('m_role'), c.role]);
  if (!c.client) meta.push([t('m_type'), c.cat]);
  $('#caseMeta').innerHTML = meta.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
  const body = [];
  if (c.ctx) body.push([t('c_context'), c.ctx]);
  if (c.sol) body.push([t('c_solution'), c.sol]);
  if (c.res) body.push([t('c_result'), c.res]);
  if (!body.length && c.d) body.push(['', c.d]);
  $('#caseBody').innerHTML = body.map(([h, p]) => `<div>${h ? `<h3>${h}</h3>` : ''}<p>${p}</p></div>`).join('');
  $('#caseBody').style.display = body.length ? '' : 'none';
  const gal = w.gallery || [w.img];
  $('#caseGallery').innerHTML = gal.map((src, k) => {
    const full = gal.length === 1 || (k === 0 && gal.length % 2 === 1);
    return `<figure class="focus${full ? ' full' : ''}${w.logo ? ' is-logo' : ''}"><img src="assets/${src}" alt="${c.t}, ${k + 1}" loading="lazy"></figure>`;
  }).join('');
  const nextW = WORKS[(i + 1) % WORKS.length];
  $('#caseNext').textContent = `${t('next')}: ${L(nextW).t}`;
  caseScroll.scrollTop = 0;
  if (!caseEl.classList.contains('open')){
    lastFocus = document.activeElement;
    caseEl.classList.add('open'); caseEl.setAttribute('aria-hidden', 'false');
    lockScroll(true);
  }
  av.caseOpen = true; resolveFace();
  setTimeout(() => $('#caseClose').focus({ preventScroll: true }), 50);
  // le immagini del case vanno a fuoco quando entrano nel pannello
  const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); cio.unobserve(e.target); } }), { root: caseScroll, threshold: .1 });
  $$('#caseGallery figure').forEach(f => cio.observe(f));
}
function closeCase(){
  if (!caseEl.classList.contains('open')) return;
  caseEl.classList.remove('open'); caseEl.setAttribute('aria-hidden', 'true');
  lockScroll(false);
  av.caseOpen = false; resolveFace();
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]');
  if (o && !e.target.closest('#case')) openCase(+o.dataset.open);
});
document.addEventListener('keydown', e => {
  const o = e.target.closest && e.target.closest('.feat-media[data-open]');
  if (o && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); openCase(+o.dataset.open); }
});
$('#caseClose').addEventListener('click', closeCase);
$('#caseNext').addEventListener('click', () => openCase((caseIdx + 1) % WORKS.length));
caseEl.addEventListener('click', e => { if (e.target === caseEl) closeCase(); });

/* ══════════════ MOTION: video ══════════════ */
const video = $('#motionVideo');
const soundBtn = $('#soundBtn');
const phone = $('#phone'), ident = $('#ident');
function loadMotion(i){
  motionIdx = i;
  const m = MOTION[i];
  const isIdent = m.type === 'ident';
  phone.classList.toggle('is-ident', isIdent);
  if (isIdent){ video.pause(); video.removeAttribute('src'); video.load(); renderMotion(); playIfVisible(); return; }
  video.src = m.src; video.poster = m.poster || '';
  video.muted = true; soundBtn.setAttribute('aria-pressed', 'false');
  $('#soundBtn span:last-child').textContent = t('mo_sound_on');
  renderMotion();
  playIfVisible();
}
$('#motionList').addEventListener('click', e => { const b = e.target.closest('[data-motion]'); if (b) loadMotion(+b.dataset.motion); });
soundBtn.addEventListener('click', e => {
  e.stopPropagation();
  video.muted = !video.muted;
  soundBtn.setAttribute('aria-pressed', String(!video.muted));
  $('#soundBtn span:last-child').textContent = video.muted ? t('mo_sound_on') : t('mo_sound_off');
  if (!video.muted) video.play().catch(() => {});
});
let videoVisible = false;
function playIfVisible(){
  const isIdent = MOTION[motionIdx].type === 'ident';
  ident.classList.toggle('paused', !videoVisible || !isIdent);
  if (isIdent) return;
  if (videoVisible && !reduced) video.play().catch(() => {}); else video.pause();
}
if (io){
  new IntersectionObserver(es => { videoVisible = es[0].isIntersecting; playIfVisible(); }, { threshold: .25 }).observe($('#phone'));
}
phone.addEventListener('click', e => {
  if (e.target === soundBtn || soundBtn.contains(e.target)) return;
  if (MOTION[motionIdx].type === 'ident'){ ident.classList.toggle('paused'); return; }
  video.paused ? video.play().catch(() => {}) : video.pause();
});
playIfVisible();

/* ══════════════ FOTOGRAFIA: trascina + lightbox ══════════════ */
const strip = $('#strip');
let drag = null, moved = 0;
strip.addEventListener('pointerdown', e => {
  if (e.pointerType !== 'mouse') return;
  drag = { x: e.clientX, left: strip.scrollLeft }; moved = 0;
});
addEventListener('pointermove', e => {
  if (!drag) return;
  const dx = e.clientX - drag.x; moved = Math.max(moved, Math.abs(dx));
  if (moved > 4) strip.classList.add('is-drag');
  strip.scrollLeft = drag.left - dx;
});
addEventListener('pointerup', () => { drag = null; setTimeout(() => strip.classList.remove('is-drag'), 0); });
function stripStep(){ const s = $('.shot'); return s ? s.offsetWidth + 20 : 400; }
$('#stripNext').addEventListener('click', () => strip.scrollBy({ left: stripStep(), behavior: 'smooth' }));
$('#stripPrev').addEventListener('click', () => strip.scrollBy({ left: -stripStep(), behavior: 'smooth' }));
strip.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight'){ e.preventDefault(); strip.scrollBy({ left: stripStep(), behavior: 'smooth' }); }
  if (e.key === 'ArrowLeft'){ e.preventDefault(); strip.scrollBy({ left: -stripStep(), behavior: 'smooth' }); }
});
let stripLast = 0, stripSk = 0;
strip.addEventListener('scroll', () => {
  const d = strip.scrollLeft - stripLast; stripLast = strip.scrollLeft;
  if (!reduced){ stripSk = Math.max(-7, Math.min(7, -d * .18)); strip.style.setProperty('--sk', stripSk.toFixed(2) + 'deg'); clearTimeout(strip._t); strip._t = setTimeout(() => strip.style.setProperty('--sk', '0deg'), 90); }
  const shots = $$('.shot'); const mid = strip.getBoundingClientRect().left + strip.clientWidth / 2;
  let best = 0, bd = Infinity;
  shots.forEach((s, i) => { const r = s.getBoundingClientRect(); const d = Math.abs(r.left + r.width / 2 - mid); if (d < bd){ bd = d; best = i; } });
  $('#stripNow').textContent = String(best + 1).padStart(2, '0');
}, { passive: true });

const lb = $('#lightbox'), lbImg = $('#lbImg');
let lbIdx = 0;
function showLb(i){
  lbIdx = (i + PHOTOS) % PHOTOS;
  const n = String(lbIdx + 1).padStart(2, '0');
  lbImg.classList.remove('ready');
  lbImg.onload = () => requestAnimationFrame(() => lbImg.classList.add('ready'));
  lbImg.src = `assets/photo-${n}.jpg`; lbImg.alt = `Fotografia ${n}`;
  $('#lbCount').textContent = `${n} / ${PHOTOS}`;
}
function openLb(i){ lastFocus = document.activeElement; showLb(i); lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.classList.add('lb-open'); lockScroll(true); $('#lbClose').focus({ preventScroll: true }); }
function closeLb(){ if (!lb.classList.contains('open')) return; lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.classList.remove('lb-open'); lockScroll(false); if (lastFocus) lastFocus.focus({ preventScroll: true }); }
strip.addEventListener('click', e => { if (moved > 6) return; const s = e.target.closest('.shot'); if (s) openLb(+s.dataset.idx); });
$('#lbClose').addEventListener('click', closeLb);
$('#lbNext').addEventListener('click', () => showLb(lbIdx + 1));
$('#lbPrev').addEventListener('click', () => showLb(lbIdx - 1));
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
let tsx = null;
lb.addEventListener('touchstart', e => { tsx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => { if (tsx == null) return; const dx = e.changedTouches[0].clientX - tsx; if (Math.abs(dx) > 50) showLb(lbIdx + (dx < 0 ? 1 : -1)); tsx = null; });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ closeLb(); closeCase(); toggleDrawer(false); }
  if (lb.classList.contains('open')){
    if (e.key === 'ArrowRight') showLb(lbIdx + 1);
    if (e.key === 'ArrowLeft') showLb(lbIdx - 1);
  }
});


/* ══════════════ HERO: lettere a peso variabile ══════════════
   Il titolo "respira": vicino al cursore le lettere si assottigliano. */
const heroLetters = [];
$$('.hero-title .line > span').forEach(span => {
  [...span.childNodes].forEach(node => {
    if (node.nodeType !== 3) return;
    const frag = document.createDocumentFragment();
    [...node.textContent].forEach(chr => {
      const c = document.createElement('span'); c.className = 'ch'; c.textContent = chr; c.setAttribute('aria-hidden', 'true');
      frag.appendChild(c); heroLetters.push({ el: c, w: 800 });
    });
    node.replaceWith(frag);
  });
});
let hpx = -9999, hpy = -9999, heroHover = false;
const heroEl = $('.hero');
heroEl.addEventListener('pointermove', e => { hpx = e.clientX; hpy = e.clientY; heroHover = true; });
heroEl.addEventListener('pointerleave', () => { heroHover = false; });
function heroTick(time){
  if (reduced || scrollY > innerHeight || !document.body.classList.contains('is-loaded')) return;
  heroLetters.forEach((L, i) => {
    let target;
    if (heroHover && finePointer){
      const r = L.el.getBoundingClientRect();
      const d = Math.hypot(r.left + r.width / 2 - hpx, r.top + r.height / 2 - hpy);
      const f = Math.max(0, 1 - d / 320);
      target = 800 - 580 * f * f;
    } else {
      target = 760 + 40 * Math.sin(time / 650 + i * .55); // respiro lento
    }
    L.w += (target - L.w) * .12;
    L.el.style.fontWeight = L.w.toFixed(0);
  });
}

/* ══════════════ CARD: inclinazione 3D + riflesso ══════════════ */
if (finePointer && !reduced){
  document.addEventListener('pointermove', e => {
    const host = e.target.closest('.feat-media, .tile');
    $$('.media-frame.tilting').forEach(f => { if (!host || !host.contains(f)){ f.classList.remove('tilting'); f.style.transform = ''; } });
    if (!host) return;
    const f = $('.media-frame', host); if (!f) return;
    const r = f.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    f.classList.add('tilting');
    f.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
    f.style.setProperty('--my', (y * 100).toFixed(1) + '%');
    f.style.transform = `rotateX(${((.5 - y) * 7).toFixed(2)}deg) rotateY(${((x - .5) * 9).toFixed(2)}deg) scale(.985)`;
  }, { passive: true });
}

/* ══════════════ BOTTONI MAGNETICI ══════════════ */
if (finePointer && !reduced){
  const magnets = () => $$('.btn, .round, .lang, .avatar');
  document.addEventListener('pointermove', e => {
    magnets().forEach(m => {
      const r = m.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const reach = Math.max(r.width, r.height) * .5 + 40;
      if (Math.abs(dx) < reach && Math.abs(dy) < reach){
        m.classList.add('magnet');
        m.style.translate = `${(dx * .22).toFixed(1)}px ${(dy * .28).toFixed(1)}px`;
      } else if (m.style.translate){ m.style.translate = ''; }
    });
  }, { passive: true });
}

/* ══════════════ AVVIO ══════════════ */
$('#year').textContent = new Date().getFullYear();
renderPhotos();
applyStatic();
renderDynamic();

function reveal(){
  const loader = $('#loader');
  if (loader.classList.contains('done')) return;
  loader.classList.add('done');
  document.body.classList.add('is-loaded');
  setTimeout(() => say(t('bub_hello'), 2600), reduced ? 0 : 2600);
}
addEventListener('load', () => setTimeout(reveal, reduced ? 0 : 900));
setTimeout(reveal, 3200); // sicurezza: mai bloccati sul loader

addEventListener('scroll', () => { if (!lenis) onScroll(); }, { passive: true });
addEventListener('resize', () => { try { pathLen = path.getTotalLength(); path.style.strokeDasharray = pathLen; } catch(e){} onScroll(); });

function boot(){ startLenis(); onScroll(); requestAnimationFrame(frame); }
if (document.readyState === 'complete') boot(); else addEventListener('load', boot);
// Lenis viene caricato con defer prima di questo file: se non c'è, si scorre in modo nativo.
setTimeout(() => { if (!lenis && typeof window.Lenis === 'function' && !reduced) startLenis(); }, 0);

})();
