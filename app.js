import { GROUPS, PRICE_DATE } from './price-data.js';

const T = {
  ru: {
    kicker: 'Bloom & Care · опт и импорт',
    hero: 'Ваш надёжный мост в цветочный бизнес Китая',
    heroSub: 'Прямые поставки срезанных цветов и растений из Куньмина в Россию и СНГ — своя холодовая цепь и таможня.',
    navAbout: 'О компании', navCatalog: 'Каталог', navPrice: 'Прайс', navPartners: 'Партнёры', navLog: 'Логистика', navContact: 'Контакты',
    stat1: 'склад в куньмине', stat2: 'позиций в ассортименте', stat3: 'дней пути',
    aboutTitle: 'От саженца до премиального цветка',
    aboutBody: 'Amma Flowers — оптовый импортёр и дистрибьютор. Мы держим весь путь цветка: закупка и собственный склад в Куньмине, холодовая логистика, таможенное оформление и отгрузка сетям, оптовым базам и флористическим студиям России и СНГ.',
    f1t: 'Собственный склад в Куньмине', f1d: 'Приёмка, сортировка и предохлаждение в день срезки',
    f2t: 'Холодовая цепь без разрывов', f2d: 'Рефрижераторный транспорт до склада получателя',
    f3t: 'Саженцы · срез · горшечные', f3d: 'Три направления поставки в одном контракте',
    videoKicker: 'Видео', videoTitle: 'Как это выглядит у нас',
    video1: 'Рабочие будни', video2: 'Плантации срезов',
    galleryKicker: 'Фотографии', galleryTitle: 'Мы в деле',
    catalogTitle: 'Ассортимент недели',
    catCut: 'Срезы', catPot: 'Горшечные', catSup: 'Сопутка',
    priceTerms: 'Заказ от 1 паллеты · логистика "под ключ" 150 000 ₽ · отгрузка 3–5 дней после подтверждения.',
    priceCta: 'Скачать прайс',
    priceShortNote: 'Это сокращённый прайс.', priceManagerLink: 'Полный прайс — напишите менеджеру',
    partnersTitle: 'Наши партнёры',
    p1kicker: 'Партнёр · выращивание, Оренбург', p1title: 'Тепличное хозяйство «Атэна»', p1body: 'Собственные луковицы, 3 га теплиц и полный цикл выращивания. Сильный российский производитель, с которым мы работаем в паре.',
    p2kicker: 'Партнёр · таможня и ВЭД', p2title: 'Таможенно-логистический терминал М9', p2body: 'Крупный терминал у границы с Европой, 700 м от МАПП «Бурачки»: СВХ и таможенный склад, ФТС, Россельхознадзор и аккредитованная лаборатория на одной площадке. Комплексный оператор ВЭД с представительствами в ЕС и Китае.',
    search: 'Поиск по названию или 花材名称', found: 'найдено', positions: 'позиций', priceOn: 'прайс от', gradeA: 'Grade A · за вязку', gradeApLabel: 'Grade A+ · за вязку', boxLabel: '¥ за короб (A)', boxSize: 'короб',
    onRequestBody: 'Прайс по этой категории ведём отдельным файлом — пришлём актуальную версию под ваш объём и регион.', onRequestCta: 'Запросить прайс',
    p2f1: '48 000 м² территории', p2f2: '400 машино-мест', p2f3: 'СВХ + таможенный склад',
    clientsKicker: 'Клиенты', clientsTitle: 'Поставляем в крупные российские сети',
    client1: 'Федеральные сети', client2: 'DIY и гипермаркеты', client3: 'Региональные оптовики',
    logTitle: 'Маршрут и сроки',
    route1: 'КУНЬМИН', route2: 'ГРАНИЦА', route3: 'РФ · СНГ',
    city1: 'Москва', city1v: '7–10 дн · зима 14', city2: 'Новосибирск', city3: 'Казань',
    contactTitle: 'Поговорим на стенде', contactSub: 'Отдел оптовых продаж — ответим в течение дня.',
    vcard: 'Сохранить визитку',
    barPrice: 'Прайс PDF', barWrite: 'Написать',
    sheetCta: 'Запросить по этой позиции',
    waGeneric: 'Здравствуйте! Хочу узнать про поставки Amma Flowers.',
    waItem: (name) => `Здравствуйте! Интересует позиция: ${name}`,
    waFullPrice: 'Здравствуйте! Пришлите, пожалуйста, полный прайс.'
  },
  en: {
    kicker: 'Bloom & Care · wholesale & import',
    hero: 'Your reliable bridge to China’s flower business',
    heroSub: 'Direct supply of cut flowers and plants from Kunming to Russia and the CIS — our own cold chain and customs.',
    navAbout: 'About', navCatalog: 'Catalogue', navPrice: 'Price', navPartners: 'Partners', navLog: 'Logistics', navContact: 'Contact',
    stat1: 'warehouse in kunming', stat2: 'items in the range', stat3: 'days to dispatch',
    aboutTitle: 'From seedlings to premium blooms',
    aboutBody: 'Amma Flowers is a wholesale importer and distributor. We own the whole journey: sourcing and our own warehouse in Kunming, cold-chain logistics, customs clearance and delivery to chains, wholesalers and floral studios across Russia and the CIS.',
    f1t: 'Own warehouse in Kunming', f1d: 'Intake, grading and pre-cooling on the day of cutting',
    f2t: 'Unbroken cold chain', f2d: 'Refrigerated transport to the buyer’s warehouse',
    f3t: 'Seedlings · cut flowers · pot plants', f3d: 'Three supply lines in one contract',
    videoKicker: 'Video', videoTitle: 'See it for yourself',
    video1: 'Plantation & cutting', video2: 'Warehouse & loading',
    galleryKicker: 'Photos', galleryTitle: 'Behind the scenes',
    catalogTitle: 'This week’s range',
    catCut: 'Cut', catPot: 'Potted', catSup: 'Supplies',
    priceTerms: 'From 8 boxes / RUB 80,000 · +10 % for single boxes · dispatch 3–5 days after confirmation.',
    priceCta: 'Download price list',
    priceShortNote: 'This is an abbreviated price list.', priceManagerLink: 'For the full price list, message our manager',
    partnersTitle: 'Our partners',
    p1kicker: 'Partner · growing, Orenburg', p1title: 'Atena Green House', p1body: 'Own bulbs, 3 ha of greenhouses and a full growing cycle. A strong Russian grower we work alongside.',
    p2kicker: 'Partner · customs & foreign trade', p2title: 'M9 Customs & Logistics Hub', p2body: 'A major terminal on the European border, 700 m from the Burachki crossing: bonded and customs warehouses, federal customs, phytosanitary service and an accredited lab on one site. A full-service foreign-trade operator with offices across the EU and China.',
    search: 'Search by name or 花材名称', found: 'found', positions: 'items', priceOn: 'price as of', gradeA: 'Grade A · per bunch', gradeApLabel: 'Grade A+ · per bunch', boxLabel: '¥ per box (A)', boxSize: 'box',
    onRequestBody: 'This category has its own price file — we will send the current version for your volume and region.', onRequestCta: 'Request price list',
    p2f1: '48,000 m² site', p2f2: '400 truck slots', p2f3: 'Bonded + customs warehouse',
    clientsKicker: 'Clients', clientsTitle: 'Supplying major Russian retail chains',
    client1: 'Federal chains', client2: 'DIY & hypermarkets', client3: 'Regional wholesalers',
    logTitle: 'Route and lead times',
    route1: 'KUNMING', route2: 'BORDER', route3: 'RU · CIS',
    city1: 'Moscow', city1v: '7–10 days · winter 14', city2: 'Novosibirsk', city3: 'Kazan',
    contactTitle: 'Let’s talk at the booth', contactSub: 'Wholesale sales team — we reply within the day.',
    vcard: 'Save contact card',
    barPrice: 'Price PDF', barWrite: 'Message us',
    sheetCta: 'Request this item',
    waGeneric: 'Hello! I would like to know more about Amma Flowers supply.',
    waItem: (name) => `Hello! I'm interested in: ${name}`,
    waFullPrice: 'Hello! Could you send me the full price list, please?'
  },
  cn: {
    kicker: 'Bloom & Care · 批发与进口',
    hero: '通往中国花卉产业的可靠桥梁',
    heroSub: '昆明直发，鲜切花与植物供应俄罗斯及独联体——自有冷链与清关团队。',
    navAbout: '关于我们', navCatalog: '产品', navPrice: '价格', navPartners: '合作伙伴', navLog: '物流', navContact: '联系',
    stat1: '昆明仓库', stat2: '个供应品种', stat3: '天内发货',
    aboutTitle: '从种苗到高端鲜花',
    aboutBody: 'Amma Flowers 是批发进口与分销商。我们掌控全链条：昆明自采与自有仓库、全程冷链、清关，并配送至俄罗斯及独联体的连锁商超、批发市场与花艺工作室。',
    f1t: '昆明自有仓库', f1d: '当日收货、分级与预冷',
    f2t: '全程不断链冷藏', f2d: '冷藏车直送客户仓库',
    f3t: '种苗 · 鲜切花 · 盆栽', f3d: '一份合同覆盖三条供应线',
    videoKicker: '视频', videoTitle: '现场实拍',
    video1: '基地与采收', video2: '仓库与装车',
    galleryKicker: '照片', galleryTitle: '工作实况',
    catalogTitle: '本周供应',
    catCut: '鲜切花', catPot: '盆栽', catSup: '辅料',
    priceTerms: '起订 8 箱 / 80,000 卢布 · 单箱加价 10% · 确认后 3–5 天发货。',
    priceCta: '下载价格表',
    priceShortNote: '这是简化版价格表。', priceManagerLink: '完整价格表请联系经理',
    partnersTitle: '合作伙伴',
    p1kicker: '伙伴 · 种植（奥伦堡）', p1title: 'Atena 温室农场', p1body: '自有种球、3 公顷温室、全周期种植。我们并肩合作的俄罗斯优质种植商。',
    p2kicker: '伙伴 · 清关与外贸', p2title: 'M9 报关物流枢纽', p2body: '欧洲边境的大型口岸，距 Burachki 通关口 700 米：保税仓与海关仓、海关、植检机构及认证实验室集于一地。并在欧盟与中国设有机构的综合外贸服务商。',
    search: '按名称或花材名称搜索', found: '条结果', positions: '个品种', priceOn: '价格更新于', gradeA: 'Grade A · 每扎', gradeApLabel: 'Grade A+ · 每扎', boxLabel: '¥ / 件（A）', boxSize: '箱型',
    onRequestBody: '该类目单独出价格表——我们会按您的数量与区域发送最新版本。', onRequestCta: '索取价格表',
    p2f1: '48,000 平方米园区', p2f2: '400 个车位', p2f3: '保税仓 + 海关仓',
    clientsKicker: '客户', clientsTitle: '供货俄罗斯大型连锁',
    client1: '全国连锁', client2: 'DIY 与大卖场', client3: '区域批发商',
    logTitle: '线路与时效',
    route1: '昆明', route2: '边境', route3: '俄罗斯 · 独联体',
    city1: '莫斯科', city1v: '7–10 天 · 冬季 14', city2: '新西伯利亚', city3: '喀山',
    contactTitle: '欢迎到展台洽谈', contactSub: '批发销售部——当天回复。',
    vcard: '保存名片',
    barPrice: '价格 PDF', barWrite: '联系我们',
    sheetCta: '就此品种询价',
    waGeneric: '您好！我想了解 Amma Flowers 的供货情况。',
    waItem: (name) => `您好！我对这个品种感兴趣：${name}`,
    waFullPrice: '您好！请发送完整价格表给我，谢谢。'
  }
};

const WA_PHONE = '79771667788';
const TG_HANDLE = 'Amma_Flowers';
const PRICE_PDF = 'assets/amma-price.pdf';

// Add more photos any time: just drop the file into assets/gallery/ and add its name here.
const GALLERY_IMAGES = [
  'assets/gallery/team-office.jpg',
  'assets/gallery/expo-interview.jpg',
  'assets/gallery/peonies-vase.jpg',
  'assets/gallery/peonies-crates.jpg'
];

const state = { lang: 'ru', catC: 'cut', group: 0, q: '', item: null };

const $ = (id) => document.getElementById(id);
const t = () => T[state.lang];

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function updateHeaderHeight() {
  document.documentElement.style.setProperty('--header-h', $('appHeader').offsetHeight + 'px');
}

function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  render();
}

function render() {
  const tt = t();
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (tt[key] != null) el.textContent = tt[key];
  });
  document.querySelectorAll('.pill').forEach((p) => p.classList.toggle('active', p.dataset.lang === state.lang));
  document.querySelectorAll('.tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.cat === state.catC));
  $('weekBadge').textContent = PRICE_DATE ? (tt.priceOn + ' ' + PRICE_DATE).toUpperCase() : '';
  renderCatalogBody();
  renderSheet();
}

function renderCatalogBody() {
  const tt = t();
  const body = $('catalogBody');
  if (state.catC === 'cut') {
    body.innerHTML = `
      <div class="catalog-search-wrap">
        <input id="searchInput" type="search" autocomplete="off">
        <div class="catalog-meta"><span id="resultLabel"></span><span id="priceDateLabel"></span></div>
      </div>
      <div class="chips-row scr" id="groupChips"></div>
      <div class="rows" id="catalogRows"></div>
    `;
    const input = $('searchInput');
    input.placeholder = tt.search;
    input.value = state.q;
    input.addEventListener('input', (e) => { state.q = e.target.value; renderCatalogRows(); });
    renderCatalogRows();
  } else {
    const label = state.catC === 'pot' ? tt.catPot : tt.catSup;
    body.innerHTML = `
      <div class="on-request">
        <div class="on-request-card">
          <div class="or-title">${escapeHtml(label)}</div>
          <div class="or-body">${escapeHtml(tt.onRequestBody)}</div>
          <div class="or-cta" id="orCta">${escapeHtml(tt.onRequestCta)}</div>
        </div>
      </div>
    `;
    $('orCta').addEventListener('click', () => openWhatsApp());
  }
}

function renderCatalogRows() {
  const tt = t();
  const q = state.q.trim().toLowerCase();
  let rows = [];
  if (q) {
    GROUPS.forEach((g, gi) => g.items.forEach((it, ii) => {
      if ((it.ru + ' ' + it.cn).toLowerCase().includes(q)) rows.push({ it, key: gi + ':' + ii });
    }));
  } else if (GROUPS[state.group]) {
    rows = GROUPS[state.group].items.map((it, ii) => ({ it, key: state.group + ':' + ii }));
  }
  rows = rows.slice(0, 60);

  $('resultLabel').textContent = q
    ? rows.length + ' ' + tt.found
    : (GROUPS[state.group] ? GROUPS[state.group].items.length + ' ' + tt.positions : '…');
  $('priceDateLabel').textContent = PRICE_DATE ? tt.priceOn + ' ' + PRICE_DATE : '';

  const chipsEl = $('groupChips');
  chipsEl.innerHTML = '';
  GROUPS.forEach((g, i) => {
    const chip = document.createElement('div');
    chip.className = 'chip' + (i === state.group && !q ? ' active' : '');
    chip.textContent = g.name;
    chip.addEventListener('click', () => {
      state.group = i; state.q = '';
      const input = $('searchInput'); if (input) input.value = '';
      renderCatalogRows();
    });
    chipsEl.appendChild(chip);
  });

  const rowsEl = $('catalogRows');
  rowsEl.innerHTML = '';
  if (!rows.length) {
    rowsEl.innerHTML = `<div class="rows-empty">${escapeHtml(tt.found)}: 0</div>`;
    return;
  }
  rows.forEach((r) => {
    const row = document.createElement('div');
    row.className = 'row';
    const thumb = r.it.img
      ? `<img src="${escapeHtml(r.it.img)}" alt="" loading="lazy">`
      : `<span>${escapeHtml((r.it.ru || '?').trim().charAt(0))}</span>`;
    row.innerHTML = `
      <div class="row-thumb">${thumb}</div>
      <div class="row-mid">
        <div class="row-name">${escapeHtml(r.it.ru)}</div>
        <div class="row-sub">${escapeHtml([r.it.cn, r.it.len].filter(Boolean).join(' · '))}</div>
      </div>
      <div class="row-price">
        <div class="row-price-num">${r.it.a ? '¥ ' + escapeHtml(r.it.a) : '—'}</div>
        <div class="row-price-unit">${escapeHtml(tt.gradeA)}</div>
      </div>
    `;
    row.addEventListener('click', () => { state.item = r.key; renderSheet(); });
    rowsEl.appendChild(row);
  });
}

function getSelectedItem() {
  if (state.item == null) return null;
  const [gi, ii] = state.item.split(':').map(Number);
  const g = GROUPS[gi];
  return g ? g.items[ii] : null;
}

function renderSheet() {
  const overlay = $('sheetOverlay');
  const it = getSelectedItem();
  if (!it) { overlay.classList.remove('open'); return; }
  const tt = t();

  $('sheetThumb').innerHTML = it.img
    ? `<img src="${escapeHtml(it.img)}" alt="">`
    : `<span>${escapeHtml((it.ru || '?').trim().charAt(0))}</span>`;
  $('sheetBadge').textContent = tt.gradeA;
  $('sheetName').textContent = it.ru;
  $('sheetSub').textContent = [it.cn, it.len].filter(Boolean).join(' · ');
  $('sheetPrice').textContent = it.a ? '¥ ' + it.a : '—';
  $('sheetGradeApLabel').textContent = tt.gradeApLabel;
  $('sheetGradeAp').textContent = it.ap ? '¥ ' + it.ap : '—';
  $('sheetBoxLabel').textContent = tt.boxLabel;
  $('sheetBoxA').textContent = it.boxA ? '¥ ' + it.boxA : '—';
  const packParts = [];
  if (it.pack) packParts.push(it.pack);
  if (it.len) packParts.push(it.len);
  if (it.box) packParts.push(tt.boxSize + ' ' + it.box);
  $('sheetPack').textContent = packParts.join(' · ');
  $('sheetCta').textContent = tt.sheetCta;
  $('sheetCta').onclick = () => openWhatsApp(it.ru);

  overlay.classList.add('open');
}

function closeSheet() {
  state.item = null;
  renderSheet();
}

function openWhatsApp(itemName) {
  const tt = t();
  const text = itemName === 'fullPrice' ? tt.waFullPrice : (itemName ? tt.waItem(itemName) : tt.waGeneric);
  window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
}
function openTelegram() {
  window.open(`https://t.me/${TG_HANDLE}`, '_blank', 'noopener');
}
function downloadPrice() {
  window.open(PRICE_PDF, '_blank', 'noopener');
}
function saveVcard() {
  const v = [
    'BEGIN:VCARD', 'VERSION:3.0', 'N:;AMMA FLOWERS;;;', 'FN:AMMA FLOWERS', 'ORG:AMMA FLOWERS',
    'TEL;TYPE=WORK,VOICE:+79771667788', 'URL:https://t.me/' + TG_HANDLE, 'END:VCARD'
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([v], { type: 'text/vcard' }));
  const a = document.createElement('a');
  a.href = url; a.download = 'amma-flowers.vcf';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function jumpTo(id) {
  const target = $('sec-' + id);
  const feed = $('feed');
  if (!target || !feed) return;
  const headerH = $('appHeader').offsetHeight;
  const navH = $('navChips').offsetHeight;
  feed.scrollTo({ top: target.offsetTop - headerH - navH, behavior: 'smooth' });
}

function wireStaticEvents() {
  document.querySelectorAll('.pill').forEach((p) => p.addEventListener('click', () => setLang(p.dataset.lang)));
  document.querySelectorAll('.nav-chip').forEach((c) => c.addEventListener('click', () => jumpTo(c.dataset.jump)));
  document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => {
    state.catC = tab.dataset.cat;
    document.querySelectorAll('.tab').forEach((x) => x.classList.toggle('active', x === tab));
    renderCatalogBody();
  }));
  $('priceDlBtn').addEventListener('click', downloadPrice);
  $('priceManagerLink').addEventListener('click', () => openWhatsApp('fullPrice'));
  $('barPriceBtn').addEventListener('click', downloadPrice);
  $('barWriteBtn').addEventListener('click', () => openWhatsApp());
  $('waBtn').addEventListener('click', () => openWhatsApp());
  $('tgBtn').addEventListener('click', openTelegram);
  $('vcardBtn').addEventListener('click', saveVcard);
  $('sheetClose').addEventListener('click', closeSheet);
  $('sheetOverlay').addEventListener('click', (e) => { if (e.target === $('sheetOverlay')) closeSheet(); });
  $('lightboxClose').addEventListener('click', closeLightbox);
  $('lightboxOverlay').addEventListener('click', (e) => { if (e.target === $('lightboxOverlay')) closeLightbox(); });
  window.addEventListener('resize', updateHeaderHeight);
}

function openLightbox(src) {
  $('lightboxImg').src = src;
  $('lightboxOverlay').classList.add('open');
}
function closeLightbox() {
  $('lightboxOverlay').classList.remove('open');
  $('lightboxImg').src = '';
}

function initGallery() {
  if (!GALLERY_IMAGES.length) return;
  const track = $('galleryTrack');
  // duplicate the list once so translateX(-50%) loops seamlessly
  const doubled = GALLERY_IMAGES.concat(GALLERY_IMAGES);
  doubled.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    img.addEventListener('click', () => openLightbox(src));
    track.appendChild(img);
  });
  track.style.setProperty('--gallery-duration', Math.max(20, GALLERY_IMAGES.length * 6) + 's');
  const pause = () => track.classList.add('paused');
  const resume = () => track.classList.remove('paused');
  track.addEventListener('mouseenter', pause);
  track.addEventListener('mouseleave', resume);
  track.addEventListener('touchstart', pause, { passive: true });
  track.addEventListener('touchend', resume);
}

wireStaticEvents();
updateHeaderHeight();
initGallery();
render();
