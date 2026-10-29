/* =========================================================
   PDE Travel — interactions & i18n
   ========================================================= */

const AIRBNB_URL = "https://airbnb.com/h/apartos";

// ---------- Translations ----------
const I18N = {
  es: {
    "a11y.skip": "Saltar al contenido",
    "nav.destino": "Punta del Este",
    "nav.peninsula": "La Península",
    "nav.hacer": "Qué hacer",
    "nav.eventos": "Eventos",
    "nav.book": "Reservar",
    "nav.program": "Programa",
    "hero.eyebrow": "Punta del Este · Uruguay",
    "hero.title": "Punta del Este. Tu próximo lugar favorito.",
    "hero.sub": "Días de playa, atardeceres junto al mar, buena gastronomía y todo el encanto de la Península. Descubrí un destino para disfrutar a tu manera.",
    "hero.book": "Reservar apartamento",
    "hero.program": "Programa de entretenimiento",
    "hero.eventsTitle": "Qué pasa en Punta",
    "hero.eventsMore": "Ver todos los eventos en Maldonado →",
    "hero.explore": "Descubrir Punta del Este",
    "hero.scrollAria": "Desplazarse hacia abajo",
    "statement.text": "Un destino donde el mar marca el ritmo del día.",
    "destino.eyebrow": "El destino",
    "destino.title": "Un lugar que se siente distinto",
    "destino.lead": "Donde el Atlántico se encuentra con una ciudad vibrante. Playas de arena, paseos frente al mar y una vida que mezcla calma y energía.",
    "destino.cap1": "La península, vista desde el aire.",
    "destino.h3a": "Playas para cada momento",
    "destino.p1": "Mañanas tranquilas en la Mansa, olas y energía en la Brava. Punta del Este ofrece playas para descansar, caminar o simplemente mirar el horizonte.",
    "destino.h3b": "Atardeceres que se recuerdan",
    "destino.p2": "Cuando el sol baja sobre el Río de la Plata, la costa se tiñe de colores cálidos. Un ritual diario que invita a detenerse.",
    "destino.h3c": "Ciudad y mar, juntos",
    "destino.p3": "Todo queda cerca: la playa, los restaurantes, las tiendas y los paseos. Una escala humana que hace fácil disfrutar sin prisa.",
    "hacer.eyebrow": "Qué hacer",
    "hacer.title": "Experiencias que definen el viaje",
    "hacer.lead": "Punta del Este se disfruta en muchos ritmos: playa, gastronomía, compras, arte y noches con energía.",
    "hacer.t1": "Playas y mar",
    "hacer.d1": "Arena, viento suave y el sonido del Atlántico. Ideal para caminar, descansar o practicar deportes acuáticos.",
    "hacer.t2": "Gastronomía",
    "hacer.d2": "Restaurantes, cafés y bares con cocina local e internacional. Del chivito al marisco fresco.",
    "hacer.t3": "Arte y cultura",
    "hacer.d3": "Esculturas al aire libre, museos y una agenda cultural que se renueva cada temporada.",
    "hacer.t4": "Paseos y miradores",
    "hacer.d4": "El faro, la rambla y los recorridos a pie para descubrir la ciudad desde distintos ángulos.",
    "hacer.t5": "Puerto y marina",
    "hacer.d5": "Yates, pescadores y un ambiente único donde la ciudad se encuentra con el mar.",
    "hacer.t6": "Compras y moda",
    "hacer.d6": "Boutiques, diseño local y las tiendas de la avenida Gorlero y la calle 20.",
    "pen.eyebrow": "La Península",
    "pen.title": "El corazón de Punta del Este",
    "pen.lead": "La Península reúne playa, gastronomía, compras y atractivos en un área que se recorre caminando.",
    "pen.capGorlero": "Avenida Gorlero, eje comercial y social de la Península.",
    "pen.i1t": "Gorlero",
    "pen.i1d": "La avenida principal: tiendas, cafés y la energía de la ciudad.",
    "pen.i2t": "Calle 20",
    "pen.i2d": "Boutiques de moda y diseño en pocas cuadras.",
    "pen.i3t": "Plaza Artigas",
    "pen.i3d": "Corazón de la Península, con su feria artesanal.",
    "pen.i4t": "Puerto y marina",
    "pen.i4d": "Yates, pescadores y atardeceres sobre el agua.",
    "pen.i5t": "La Mano",
    "pen.i5d": "La escultura icónica emergiendo de la arena.",
    "pen.i6t": "El faro",
    "pen.i6d": "Mirador histórico con vistas a toda la costa.",
    "pen.link": "Más info",
    "pen.note": "Quedarse en la Península permite disfrutar la ciudad a pie: playa, restaurantes, tiendas y atractivos a pocos pasos.",
    "ev.eyebrow": "Qué pasa",
    "ev.title": "Qué pasa en Punta del Este",
    "ev.lead": "Descubrí actividades culturales, eventos y espectáculos que suceden en Maldonado durante tu estadía.",
    "ev.fallback": "No hay eventos próximos disponibles en este momento. Consultá la agenda oficial de la Intendencia de Maldonado.",
    "ev.link1": "Ver actividades",
    "ev.link2": "Programación cultural",
    "ev.link3": "Calendario de eventos",
    "ev.source": "Fuente: Intendencia Departamental de Maldonado. Datos mantenidos manualmente; no se actualizan automáticamente.",
    "ev.more": "Ver en la fuente oficial",
    "stay.eyebrow": "Tu estadía",
    "stay.title": "Viví Punta del Este desde la Península.",
    "stay.lead": "Disfrutá la ciudad desde una ubicación privilegiada, con la playa enfrente y restaurantes, tiendas y rincones únicos a pocos pasos.",
    "stay.f1": "Aprox. 60 m² en la Península.",
    "stay.f2": "Frente a una playa de arena.",
    "stay.f3": "Cocina, lavarropas y secarropas.",
    "stay.f4": "Limpieza complementaria a solicitud en recepción.",
    "stay.book": "Reservar en Airbnb",
    "stay.note": "Las fotografías del apartamento están en Airbnb, donde podés ver el listado completo.",
    "cta.title": "Punta del Este te espera.",
    "cta.sub": "El mar, la gastronomía, los paseos y todo lo que hace especial a este destino. Encontrá tu lugar para disfrutarlo.",
    "cta.book": "Reservar apartamento",
    "footer.copy": "Un destino para vivir, no solo para visitar.",
    "footer.events": "Agenda oficial",
    "footer.culture": "Programación cultural",
    "footer.book": "Reservar en Airbnb",
    "footer.credits": "Imágenes: Wikimedia Commons (CC BY-SA / CC0). Atribución a sus autores.",
    "footer.rights": "© {year} PDE Travel.",
    "events.empty": "No hay eventos próximos.",
    "events.updated": "Última actualización manual: {date}."
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.destino": "Punta del Este",
    "nav.peninsula": "The Peninsula",
    "nav.hacer": "Things to do",
    "nav.eventos": "Events",
    "nav.book": "Book",
    "nav.program": "Program",
    "hero.eyebrow": "Punta del Este · Uruguay",
    "hero.title": "Punta del Este. Your next favorite place.",
    "hero.sub": "Beach days, sunsets by the sea, great food and all the charm of the Peninsula. Discover a destination to enjoy your way.",
    "hero.book": "Book apartments",
    "hero.program": "Entertainment program",
    "hero.eventsTitle": "What's on in Punta",
    "hero.eventsMore": "See all events in Maldonado →",
    "hero.explore": "Discover Punta del Este",
    "hero.scrollAria": "Scroll down",
    "statement.text": "A destination where the sea sets the rhythm of the day.",
    "destino.eyebrow": "The destination",
    "destino.title": "A place that feels different",
    "destino.lead": "Where the Atlantic meets a vibrant city. Sandy beaches, seaside walks and a life that blends calm and energy.",
    "destino.cap1": "The peninsula, seen from above.",
    "destino.h3a": "Beaches for every moment",
    "destino.p1": "Quiet mornings on Mansa beach, waves and energy on Brava. Punta del Este offers beaches to rest, walk or simply watch the horizon.",
    "destino.h3b": "Sunsets you'll remember",
    "destino.p2": "When the sun sets over the Río de la Plata, the coast glows with warm colors. A daily ritual that invites you to pause.",
    "destino.h3c": "City and sea, together",
    "destino.p3": "Everything is close: the beach, restaurants, shops and promenades. A human scale that makes it easy to enjoy without rushing.",
    "hacer.eyebrow": "Things to do",
    "hacer.title": "Experiences that define the trip",
    "hacer.lead": "Punta del Este is enjoyed in many rhythms: beach, food, shopping, art and lively nights.",
    "hacer.t1": "Beaches & sea",
    "hacer.d1": "Sand, gentle wind and the sound of the Atlantic. Perfect for walking, resting or water sports.",
    "hacer.t2": "Gastronomy",
    "hacer.d2": "Restaurants, cafés and bars with local and international cuisine. From chivito to fresh seafood.",
    "hacer.t3": "Art & culture",
    "hacer.d3": "Open-air sculptures, museums and a cultural agenda that renews each season.",
    "hacer.t4": "Walks & viewpoints",
    "hacer.d4": "The lighthouse, the rambla and walking routes to discover the city from different angles.",
    "hacer.t5": "Port & marina",
    "hacer.d5": "Yachts, fishermen and a unique atmosphere where the city meets the sea.",
    "hacer.t6": "Shopping & fashion",
    "hacer.d6": "Boutiques, local design and the shops along Gorlero avenue and Calle 20.",
    "pen.eyebrow": "The Peninsula",
    "pen.title": "The heart of Punta del Este",
    "pen.lead": "The Peninsula brings together beach, dining, shopping and attractions in an area you can walk.",
    "pen.capGorlero": "Gorlero avenue, the commercial and social hub of the Peninsula.",
    "pen.i1t": "Gorlero",
    "pen.i1d": "The main avenue: shops, cafés and the city's energy.",
    "pen.i2t": "Calle 20",
    "pen.i2d": "Fashion and design boutiques within a few blocks.",
    "pen.i3t": "Plaza Artigas",
    "pen.i3d": "The heart of the Peninsula, with its artisan market.",
    "pen.i4t": "Port & marina",
    "pen.i4d": "Yachts, fishermen and sunsets over the water.",
    "pen.i5t": "La Mano",
    "pen.i5d": "The iconic sculpture rising from the sand.",
    "pen.i6t": "The lighthouse",
    "pen.i6d": "Historic viewpoint with views over the whole coast.",
    "pen.link": "More info",
    "pen.note": "Staying in the Peninsula lets you enjoy the city on foot: beach, restaurants, shops and attractions just steps away.",
    "ev.eyebrow": "What's on",
    "ev.title": "What's happening in Punta del Este",
    "ev.lead": "Discover cultural activities, events and shows taking place in Maldonado during your stay.",
    "ev.fallback": "No upcoming events available right now. Check the official calendar of the Intendencia de Maldonado.",
    "ev.link1": "View activities",
    "ev.link2": "Cultural program",
    "ev.link3": "Event calendar",
    "ev.source": "Source: Intendencia Departamental de Maldonado. Manually maintained data; not automatically updated.",
    "ev.more": "View on official source",
    "stay.eyebrow": "Your stay",
    "stay.title": "Experience Punta del Este from the Peninsula.",
    "stay.lead": "Enjoy the city from a privileged location, with the beach across the street and restaurants, shops and unique spots just steps away.",
    "stay.f1": "Approx. 60 m² in the Peninsula.",
    "stay.f2": "Facing a sandy beach.",
    "stay.f3": "Kitchen, washing machine and clothes dryer.",
    "stay.f4": "Complimentary cleaning available on request at reception.",
    "stay.book": "Book on Airbnb",
    "stay.note": "Apartment photos are on Airbnb, where you can see the full listing.",
    "cta.title": "Punta del Este awaits you.",
    "cta.sub": "The sea, the food, the walks and everything that makes this destination special. Find your place to enjoy it.",
    "cta.book": "Book apartments",
    "footer.copy": "A destination to live, not just to visit.",
    "footer.events": "Official agenda",
    "footer.culture": "Cultural program",
    "footer.book": "Book on Airbnb",
    "footer.credits": "Images: Wikimedia Commons (CC BY-SA / CC0). Attribution to their authors.",
    "footer.rights": "© {year} PDE Travel.",
    "events.empty": "No upcoming events.",
    "events.updated": "Last manual update: {date}."
  },
  ru: {
    "a11y.skip": "Перейти к содержимому",
    "nav.destino": "Пунта-дель-Эсте",
    "nav.peninsula": "Полуостров",
    "nav.hacer": "Чем заняться",
    "nav.eventos": "События",
    "nav.book": "Забронировать",
    "nav.program": "Программа",
    "hero.eyebrow": "Пунта-дель-Эсте · Уругвай",
    "hero.title": "Пунта-дель-Эсте. Ваше следующее любимое место.",
    "hero.sub": "Дни на пляже, закаты у моря, отличная кухня и всё очарование Полуострова. Откройте для себя место для отдыха в своём ритме.",
    "hero.book": "Забронировать апартамент",
    "hero.program": "Программа развлечений",
    "hero.eventsTitle": "События в Пунте",
    "hero.eventsMore": "Все события в Мальдонадо →",
    "hero.explore": "Открыть Пунта-дель-Эсте",
    "hero.scrollAria": "Прокрутить вниз",
    "statement.text": "Место, где море задаёт ритм дня.",
    "destino.eyebrow": "Направление",
    "destino.title": "Место, которое ощущается иначе",
    "destino.lead": "Где Атлантика встречается с живым городом. Песчаные пляжи, прогулки у моря и жизнь, сочетающая спокойствие и энергию.",
    "destino.cap1": "Полуостров с высоты птичьего полёта.",
    "destino.h3a": "Пляжи на любой момент",
    "destino.p1": "Спокойные утра на пляже Манса, волны и энергия на Браве. Пунта-дель-Эсте предлагает пляжи для отдыха, прогулок или просто созерцания горизонта.",
    "destino.h3b": "Закаты, которые запоминаются",
    "destino.p2": "Когда солнце садится над Рио-де-ла-Плата, побережье окрашивается тёплыми красками. Ежедневный ритуал, приглашающий остановиться.",
    "destino.h3c": "Город и море вместе",
    "destino.p3": "Всё рядом: пляж, рестораны, магазины и прогулочные зоны. Человеческий масштаб, позволяющий наслаждаться без спешки.",
    "hacer.eyebrow": "Чем заняться",
    "hacer.title": "Впечатления, определяющие поездку",
    "hacer.lead": "Пунта-дель-Эсте наслаждаются в разных ритмах: пляж, кухня, покупки, искусство и энергичные вечера.",
    "hacer.t1": "Пляжи и море",
    "hacer.d1": "Песок, лёгкий ветер и звук Атлантики. Идеально для прогулок, отдыха или водных видов спорта.",
    "hacer.t2": "Гастрономия",
    "hacer.d2": "Рестораны, кафе и бары с местной и международной кухней. От чивито до свежих морепродуктов.",
    "hacer.t3": "Искусство и культура",
    "hacer.d3": "Скульптуры под открытым небом, музеи и культурная программа, обновляющаяся каждый сезон.",
    "hacer.t4": "Прогулки и смотровые",
    "hacer.d4": "Маяк, набережная и пешие маршруты для знакомства с городом с разных ракурсов.",
    "hacer.t5": "Порт и марина",
    "hacer.d5": "Яхты, рыбаки и уникальная атмосфера, где город встречается с морем.",
    "hacer.t6": "Покупки и мода",
    "hacer.d6": "Бутики, местный дизайн и магазины на авеню Горлеро и улице 20.",
    "pen.eyebrow": "Полуостров",
    "pen.title": "Сердце Пунта-дель-Эсте",
    "pen.lead": "Полуостров объединяет пляж, рестораны, магазины и достопримечательности в районе, который удобно обходить пешком.",
    "pen.capGorlero": "Авеню Горлеро — торговый и социальный центр Полуострова.",
    "pen.i1t": "Горлеро",
    "pen.i1d": "Главная авеню: магазины, кафе и энергия города.",
    "pen.i2t": "Улица 20",
    "pen.i2d": "Бутики моды и дизайна в нескольких кварталах.",
    "pen.i3t": "Площадь Артигаса",
    "pen.i3d": "Сердце Полуострова с ремесленным рынком.",
    "pen.i4t": "Порт и марина",
    "pen.i4d": "Яхты, рыбаки и закаты над водой.",
    "pen.i5t": "La Mano",
    "pen.i5d": "Знаменитая скульптура, поднимающаяся из песка.",
    "pen.i6t": "Маяк",
    "pen.i6d": "Историческая смотровая с видом на всё побережье.",
    "pen.link": "Подробнее",
    "pen.note": "Проживание на Полуострове позволяет наслаждаться городом пешком: пляж, рестораны, магазины и достопримечательности в нескольких шагах.",
    "ev.eyebrow": "Что происходит",
    "ev.title": "Что происходит в Пунта-дель-Эсте",
    "ev.lead": "Откройте для себя культурные мероприятия, события и представления, проходящие в Мальдонадо во время вашего пребывания.",
    "ev.fallback": "В данный момент нет предстоящих событий. Обратитесь к официальному календарю Интенденсии Мальдонадо.",
    "ev.link1": "Смотреть мероприятия",
    "ev.link2": "Культурная программа",
    "ev.link3": "Календарь событий",
    "ev.source": "Источник: Интенденсия департамента Мальдонадо. Данные ведутся вручную; не обновляются автоматически.",
    "ev.more": "Открыть на официальном сайте",
    "stay.eyebrow": "Ваше проживание",
    "stay.title": "Почувствуйте Пунта-дель-Эсте с Полуострова.",
    "stay.lead": "Наслаждайтесь городом из привилегированного места: пляж напротив и рестораны, магазины и уникальные уголки в нескольких шагах.",
    "stay.f1": "Около 60 м² на Полуострове.",
    "stay.f2": "Напротив песчаного пляжа.",
    "stay.f3": "Кухня, стиральная и сушильная машины.",
    "stay.f4": "Уборка по запросу на ресепшене.",
    "stay.book": "Забронировать на Airbnb",
    "stay.note": "Фотографии апартамента доступны на Airbnb, где можно посмотреть полный список.",
    "cta.title": "Пунта-дель-Эсте ждёт вас.",
    "cta.sub": "Море, кухня, прогулки и всё, что делает это место особенным. Найдите своё место, чтобы насладиться им.",
    "cta.book": "Забронировать апартамент",
    "footer.copy": "Место для жизни, а не только для визита.",
    "footer.events": "Официальная повестка",
    "footer.culture": "Культурная программа",
    "footer.book": "Забронировать на Airbnb",
    "footer.credits": "Изображения: Wikimedia Commons (CC BY-SA / CC0). С указанием авторов.",
    "footer.rights": "© {year} PDE Travel.",
    "events.empty": "Нет предстоящих событий.",
    "events.updated": "Последнее ручное обновление: {date}."
  }
};

// ---------- State ----------
const state = { lang: "es" };

function t(key, vars) {
  const dict = I18N[state.lang] || I18N.es;
  let s = (dict[key] !== undefined) ? dict[key] : (I18N.es[key] !== undefined ? I18N.es[key] : key);
  if (vars) {
    for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
  }
  return s;
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });
  // title
  document.title = t("hero.title") + " | PDE Travel";
  // update year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  // update events source note
  renderEventsNote();
}

// ---------- Language switcher ----------
function setLang(lang) {
  if (!I18N[lang]) return;
  state.lang = lang;
  try { localStorage.setItem("pde_lang", lang); } catch (e) {}
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
  });
  applyTranslations();
  // re-render events with new language labels
  if (window.__eventsData) renderEvents(window.__eventsData);
}

// ---------- Events ----------
function formatDate(iso, lang) {
  const d = new Date(iso + "T00:00:00");
  const opts = { day: "numeric", month: "long", year: "numeric" };
  const locale = lang === "es" ? "es-ES" : (lang === "ru" ? "ru-RU" : "en-GB");
  try { return d.toLocaleDateString(locale, opts); } catch (e) { return iso; }
}

function renderEvents(data) {
  const list = document.getElementById("events-list");
  const fallback = document.getElementById("events-fallback");
  if (!list) return;
  const today = new Date();
  today.setHours(0,0,0,0);
  const upcoming = (data.events || [])
    .filter(e => new Date(e.date + "T00:00:00") >= today)
    .sort((a,b) => a.date.localeCompare(b.date));

  list.innerHTML = "";
  if (upcoming.length === 0) {
    fallback.hidden = false;
    return;
  }
  fallback.hidden = true;
  upcoming.forEach(e => {
    const card = document.createElement("article");
    card.className = "event-card reveal";
    card.innerHTML = `
      <span class="event-date">${formatDate(e.date, state.lang)}</span>
      <h3 class="event-title"></h3>
      <span class="event-venue"></span>
      ${e.category ? `<span class="event-cat"></span>` : ""}
      <a class="event-link" target="_blank" rel="noopener noreferrer" href="${escapeAttr(e.url)}"></a>
    `;
    card.querySelector(".event-title").textContent = e.title;
    card.querySelector(".event-venue").textContent = e.venue || "";
    if (e.category) card.querySelector(".event-cat").textContent = e.category;
    card.querySelector(".event-link").textContent = t("ev.more");
    list.appendChild(card);
  });
  observeReveals();
}

function renderEventsNote() {
  // nothing dynamic beyond translations
}

function escapeAttr(s) {
  return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function loadEvents() {
  const data = (window.PDE_EVENTS) ? window.PDE_EVENTS : { events: [] };
  window.__eventsData = data;
  renderEvents(data);
  renderHeroEvents(data);
}

function formatDateShort(iso) {
  const d = new Date(iso + "T00:00:00");
  const dd = String(d.getDate()).padStart(2,"0");
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const yyyy = d.getFullYear();
  return dd + "/" + mm + "/" + yyyy;
}

function renderHeroEvents(data) {
  const track = document.getElementById("hero-events-track");
  if (!track) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const upcoming = (data.events || [])
    .filter(e => new Date(e.date + "T00:00:00") >= today)
    .sort((a,b) => a.date.localeCompare(b.date));
  track.innerHTML = "";
  upcoming.forEach(e => {
    const card = document.createElement("a");
    card.className = "hero-event-card";
    card.href = e.url || "https://maldonado.gub.uy/actividades";
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    const imgSrc = e.image || "";
    card.innerHTML = `
      <div class="hero-event-media">
        <picture>
          <img src="${escapeAttr(imgSrc)}" alt="${escapeAttr(e.title)}" loading="lazy" />
        </picture>
      </div>
      <div class="hero-event-body">
        <span class="hero-event-kicker">${formatDateShort(e.date)} · ${escapeAttr(e.venue || "")}</span>
        <span class="hero-event-title">${escapeAttr(e.title)}</span>
      </div>
    `;
    track.appendChild(card);
  });
  startHeroCarousel();
}

let heroCarouselTimer = null;
function startHeroCarousel() {
  const track = document.getElementById("hero-events-track");
  if (!track) return;
  const cards = track.querySelectorAll(".hero-event-card");
  if (cards.length <= 1) return;
  let idx = 0;
  if (heroCarouselTimer) clearInterval(heroCarouselTimer);
  heroCarouselTimer = setInterval(() => {
    idx = (idx + 1) % cards.length;
    const card = cards[idx];
    track.scrollTo({ top: card.offsetTop - track.offsetTop, behavior: "smooth" });
  }, 3500);
}

// ---------- Nav / mobile menu ----------
function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 20) header.classList.add("is-scrolled"); else header.classList.remove("is-scrolled");
    if (y > lastY && y > 120) header.classList.add("is-hidden"); else header.classList.remove("is-hidden");
    lastY = y;
  }, { passive: true });
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  // smooth scroll offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (window.innerWidth <= 720 ? 70 : 80);
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ---------- Reveal on scroll ----------
let revealObserver;
function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  els.forEach(el => revealObserver.observe(el));
}

function initReveals() {
  // mark sections for reveal
  document.querySelectorAll(".destino-top, .destino-body, .bleed, .hacer-top, .h-scroll, .pen-top, .pen-grid, .ev-top, .events-list, .estadia-grid, .final-cta").forEach(el => el.classList.add("reveal"));
  observeReveals();
}

// ---------- Booking links centralization ----------
function initBookingLinks() {
  document.querySelectorAll('a[href="https://airbnb.com/h/apartos"]').forEach(a => {
    a.href = AIRBNB_URL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  // restore lang
  try {
    const saved = localStorage.getItem("pde_lang");
    if (saved && I18N[saved]) state.lang = saved;
  } catch (e) {}
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang")));
    if (b.getAttribute("data-lang") === state.lang) b.classList.add("is-active");
  });
  // set active initially
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang);
  });

  initNav();
  initBookingLinks();
  initReveals();
  applyTranslations();
  loadEvents();
});

// respect reduced motion: disable reveal transitions already handled in CSS
