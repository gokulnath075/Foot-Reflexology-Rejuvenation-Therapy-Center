/**
 * பாத அழுத்த புத்துணர்வு சிகிச்சை மையம் - கோபிசெட்டிபாளையம்
 * Foot Reflexology Rejuvenation Therapy Center
 * Er. E. நல்லசிவம் M.E., Reflexologist
 * WhatsApp Booking, Interactive Foot Chart & Bilingual Localization
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initReflexologyChart();
  initNavigation();
  initDatePicker();
  initScrollAnimations();
});

/* ==========================================================================
   1. TAMIL LANGUAGE ENGINE
   ========================================================================== */
const translations = {
  ta: {
    top_welcome: "நற்புவி பாத அழுத்த புத்துணர்வு சிகிச்சை மையம் • சூரியம்பாளையம் | Er. E. நல்லசிவம் M.E.",
    timings_short: "காலை 7.00 - 12.00",
    nav_home: "முகப்பு",
    nav_philosophy: "தத்துவம்",
    nav_benefits: "நன்மைகள்",
    nav_oil: "மூட்டுவலி எண்ணெய் (₹100)",
    nav_pricing: "நேரம் & கட்டணம்",
    nav_guidelines: "முன்பதிவு குறிப்பு",
    nav_gallery: "சுவரொட்டிகள்",
    nav_chart: "பாத வரைபடம்",
    nav_contact: "இருப்பிடம்",
    btn_whatsapp_book: "WhatsApp முன்பதிவு",
    zone_btn_head: "🧠 தலை & நரம்பு மண்டலம்",
    zone_btn_eyes: "👁️ கண் & சைனஸ்",
    zone_btn_chest: "🫁 நுரையீரல் & இதயம்",
    zone_btn_stomach: "🥣 வயிறு & செரிமானம்",
    zone_btn_liver: "🧪 கல்லீரல் & நச்சு நீக்கம்",
    zone_btn_kidney: "💧 சிறுநீரகம் & கழிவு",
    zone_btn_spine: "🦴 முதுகு & நரம்பு",
    zone_btn_heel: "⚡ குதிகால் & உறக்கம்"
  }
};

const currentLang = 'ta';

function initLanguageSwitcher() {
  try {
    localStorage.removeItem('narpuvi_lang');
  } catch (e) {}
  applyLanguage('ta');
}

function applyLanguage(lang = 'ta') {
  document.documentElement.lang = 'ta';

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations.ta && translations.ta[key]) {
      el.textContent = translations.ta[key];
    }
  });

  if (typeof updateReflexZoneDisplay === 'function' && typeof activeZoneKey !== 'undefined') {
    updateReflexZoneDisplay(activeZoneKey);
  }
}

/* ==========================================================================
   2. INTERACTIVE FOOT REFLEXOLOGY CHART
   ========================================================================== */
const reflexZoneData = {
  head: {
    nameTa: "🧠 மண்டலம்: தலை & மூளை (பிட்யூட்டரி சுரப்பி)",
    nameEn: "Head, Brain & Nervous System Zone",
    titleTa: "தலைவலி, ஒற்றைத் தலைவலி (Migraine) & மன அழுத்தம் தீர்வு",
    titleEn: "Headache, Migraine Relief & Mental Relaxation",
    descTa: "பெருவிரலின் உச்சிப் பகுதி மூளையின் பிட்யூட்டரி மற்றும் பீனியல் சுரப்பிகளுடன் இணைகிறது. இந்த புள்ளியில் Er. E. நல்லசிவம் M.E., அவர்களின் வழிமுறையில் அக்குபிரஷர் கொடுக்கும்போது மூளைக்கு செல்லும் இரத்த ஓட்டம் அதிகரித்து, நாள்பட்ட தலைவலி, படபடப்பு மற்றும் மன உளைச்சல் உடனே தணிகிறது.",
    descEn: "The big toe corresponds to the brain and pituitary gland. Precise reflex stimulation calms neurological tension, relieves migraines, reduces stress, and revitalizes the mind.",
    benefitsTa: [
      "உடலில் உள்ள நரம்பு மண்டலத்தை சீராக்க உதவும்",
      "ஒற்றைத் தலைவலி (Migraine) மற்றும் மன உளைச்சல் நீங்குதல்",
      "கவனச்சிதறல் குறைந்து மூளை சுறுசுறுப்படைதல்",
      "மன அழுத்தம் மற்றும் சோர்வு குறைதல்"
    ],
    benefitsEn: [
      "Regulates whole-body nervous system pathways",
      "Eases chronic migraines and mental exhaustion",
      "Sharpens focus and memory retention",
      "Reduces psychological tension and fatigue"
    ]
  },
  eyes: {
    nameTa: "👁️ மண்டலம்: கண்கள், காதுகள் & சைனஸ்",
    nameEn: "Eyes, Ears & Sinus Reflex Zone",
    titleTa: "கண் பார்வை சோர்வு, சைனஸ் சளி & முக நரம்புகள் தளர்வு",
    titleEn: "Eye Strain, Sinus Pressure & Facial Relief",
    descTa: "கால் விரல்களின் கீழ் மற்றும் இரண்டாம், மூன்றாம் விரல்களின் அடிப்பகுதி கண்களுடனும், வெளி விரல்கள் காதுகள் மற்றும் சைனஸ் அறைகளுடனும் தொடர்பு கொண்டுள்ளன. கணினி மற்றும் மொபைல் திரைகளால் ஏற்படும் கண் எரிச்சலுக்கு உன்னத தீர்வு.",
    descEn: "Base of smaller toes connects to optic and auditory nerves. Stimulating these reflex zones dissipates eye strain, sinus congestion, and facial tension.",
    benefitsTa: [
      "கண் பார்வை தெளிவு மற்றும் கண் எரிச்சல் தீர்வு",
      "நாள்பட்ட சைனஸ் தலைபாரம், சளி தேக்கம் வெளியேறுதல்",
      "முக நரம்புகள் தளர்வடைந்து அமைதி பெறுதல்",
      "ரத்த ஓட்டத்தை மேம்படுத்த உதவும்"
    ],
    benefitsEn: [
      "Soothes digital screen eye fatigue",
      "Clears blocked sinuses & head heaviness",
      "Relaxes facial nerve tension",
      "Improves localized blood circulation"
    ]
  },
  chest: {
    nameTa: "🫁 மண்டலம்: நுரையீரல், இதயம் & மார்பு கூடு",
    nameEn: "Lungs, Heart & Thoracic Zone",
    titleTa: "ரத்த ஓட்டம் மேம்படுதல் & சீரான இதய இயக்கம்",
    titleEn: "Cardiovascular Circulation & Respiratory Vitality",
    descTa: "உள்ளங்காலின் மேட்டுப் பகுதி நுரையீரல் மற்றும் இதயத்தோடு நேரடித் தொடர்பு உடையது. இந்த பகுதியில் சிகிச்சை அளிக்கும்போது மார்பு இறுக்கம் குறைந்து நுரையீரல் கொள்ளளவு அதிகரித்து உடலுக்கு ஆக்ஸிஜன் சீராக பாய்கிறது.",
    descEn: "Ball of the foot corresponds to heart and lungs. Targeted pressure promotes deep diaphragmatic breathing, oxygenates tissues, and supports cardiovascular balance.",
    benefitsTa: [
      "ரத்த ஓட்டத்தை மேம்படுத்த உதவும்",
      "இதயத்திற்கு சீரான ஆக்ஸிஜன் பாய்தல்",
      "மார்பு இறுக்கம் குறைந்து மூச்சு சீராதல்",
      "உடல் புத்துணர்வு மற்றும் நல பராமரிப்பிற்கு உதவும்"
    ],
    benefitsEn: [
      "Aids enhanced arterial and venous circulation",
      "Oxygenates tissues and revitalizes internal organs",
      "Relieves shallow breathing and chest tightness",
      "Assists overall health and longevity"
    ]
  },
  stomach: {
    nameTa: "🥣 மண்டலம்: வயிறு, செரிமானம் & குடல்",
    nameEn: "Stomach, Digestion & Abdominal Zone",
    titleTa: "அஜீரணம், அல்சர், நெஞ்செரிச்சல் & மலச்சிக்கல் தீர்வு",
    titleEn: "Digestive Balance & Gastrointestinal Health",
    descTa: "பாதத்தின் நடு வளைவு பகுதி வயிறு, மண்ணீரல், கணையம் மற்றும் குடல் மண்டலத்தை பிரதிபலிக்கிறது. வாயுத்தொல்லை, நெஞ்செரிச்சல், மலச்சிக்கல் மற்றும் செரிமானக் கோளாறுகளுக்கு நிரந்தர நற்பலன் அளிக்கிறது.",
    descEn: "Plantar arch aligns with stomach, pancreas, and intestines. Resolves bloating, flatulence, acidity, and sluggish digestion naturally.",
    benefitsTa: [
      "செரிமான நொதிகள் சீராக சுரக்க உதவுதல்",
      "வாயுத்தொல்லை மற்றும் நெஞ்செரிச்சல் நீங்குதல்",
      "நாள்பட்ட மலச்சிக்கல் தீருதல்",
      "உடல் நச்சு கழிவுகள் சீராக வெளியேறுதல்"
    ],
    benefitsEn: [
      "Activates balanced gastric enzyme secretions",
      "Relieves abdominal gas and acidity",
      "Overcomes chronic constipation and sluggish gut",
      "Promotes natural internal waste elimination"
    ]
  },
  liver: {
    nameTa: "🧪 மண்டலம்: கல்லீரல் & பித்தப்பை (வலது பாதம்)",
    nameEn: "Liver, Gallbladder & Detox Zone",
    titleTa: "உடல் நச்சு கழிவுகள் வெளியேற்றம் & மெட்டபாலிசம் சீராக்கம்",
    titleEn: "Hepatic Detoxification & Metabolic Activation",
    descTa: "வலது பாதத்தின் நடுப்பகுதியில் அமைந்திருக்கும் கல்லீரல் புள்ளி உடலின் முதன்மை நச்சு நீக்கும் பகுதி. உணவு மற்றும் சூழல் மூலமாக உடலில் சேரும் நச்சுகளை நீக்கி உடலுக்கு புத்துணர்ச்சி அளிக்கிறது.",
    descEn: "Located on lateral mid-sole of right foot, this reflex stimulates metabolic liver activity, processing cellular toxins and enhancing energy.",
    benefitsTa: [
      "கல்லீரலில் உள்ள கழிவுகள் வெளியேறுதல்",
      "பித்த நீர் சுரப்பு சீராகி கொழுப்பு செரிமானம் ஆதல்",
      "உடல் அசதி மற்றும் சோம்பல் மறைதல்",
      "உடல் புத்துணர்வு மற்றும் நல பராமரிப்பிற்கு உதவும்"
    ],
    benefitsEn: [
      "Flushes cellular metabolic waste and toxins",
      "Harmonizes healthy bile synthesis and lipid digestion",
      "Eliminates bodily lethargy and sluggishness",
      "Restores natural holistic vitality"
    ]
  },
  kidney: {
    nameTa: "💧 மண்டலம்: சிறுநீரகம் & சிறுநீர்ப்பை",
    nameEn: "Kidneys, Adrenals & Fluid Balance Zone",
    titleTa: "யூரிக் அமிலம் வெளியேற்றம் & நீர்ச்சத்து சீராக்கம்",
    titleEn: "Fluid Balance, Toxin Flushing & Kidney Health",
    descTa: "உள்ளங்காலின் மையத்தில் உள்ள சிறுநீரக புள்ளி உடலின் நீர்ச்சமநிலை மற்றும் கழிவு நீக்கத்திற்கு மிக முக்கியமானது. கால்களில் நீர் தேங்குதல், பாத வீக்கம் மற்றும் நச்சுகளை அகற்ற உதவுகிறது.",
    descEn: "Positioned centrally on the sole, corresponding to kidneys and adrenals. Assists in relieving ankle fluid retention, excess uric acid, and adrenal burnout.",
    benefitsTa: [
      "கால்கள் மற்றும் பாத வீக்கம் வடிதல்",
      "யூரிக் அமிலம் சிறுநீர் வழியாக வெளியேறுதல்",
      "அட்ரினல் சுரப்பிகள் சீராகி புத்துணர்வு அடைதல்",
      "ரத்த ஓட்டத்தை மேம்படுத்த உதவும்"
    ],
    benefitsEn: [
      "Relieves ankle puffiness and water retention",
      "Aids natural filtration of excess uric acid crystals",
      "Recharges adrenal stamina and eases exhaustion",
      "Aids systemic circulation"
    ]
  },
  spine: {
    nameTa: "🦴 மண்டலம்: முதுகுத்தண்டு & இடுப்பு நரம்பு",
    nameEn: "Spine, Vertebrae & Lower Back Zone",
    titleTa: "முதுகு வலி, இடுப்பு பிடிப்பு & நரம்பு இழுத்தல் நிவாரணம்",
    titleEn: "Spinal Alignment & Musculoskeletal Ease",
    descTa: "பாதத்தின் உள்பக்க வளைவு விளிம்பு மனிதனின் முழு முதுகெலும்பையும் பிரதிபலிக்கிறது. நீண்ட நேரம் உட்கார்ந்து வேலை செய்வோருக்கும், விவசாயம் மற்றும் கடின உழைப்பாளர்களுக்கும் முதுகு, இடுப்பு வலிகளில் இருந்து நிவாரணம் அளிக்கிறது.",
    descEn: "The medial foot arch mirrors the spinal column. Delivers rapid relief for lower back tension, stiff neck, and compressed vertebral nerves.",
    benefitsTa: [
      "உடலில் உள்ள நரம்பு மண்டலத்தை சீராக்க உதவும்",
      "கீழ் முதுகு மற்றும் இடுப்பு வலி தணிதல்",
      "தசை இறுக்கம் தளர்ந்து உடல் லேசாகுதல்",
      "உடல் புத்துணர்வு மற்றும் நல பராமரிப்பிற்கு உதவும்"
    ],
    benefitsEn: [
      "Helps regulate spinal neural pathways",
      "Soothes lower back and lumbar stiffness",
      "Relaxes muscular spasms and posture stress",
      "Revitalizes core spinal mobility"
    ]
  },
  heel: {
    nameTa: "⚡ மண்டலம்: குதிகால் & தூக்க மையம்",
    nameEn: "Heel Spur, Sciatica & Sleep Reflex Zone",
    titleTa: "குதிகால் கூச்ச வலி (Heel Spur) & ஆழ்ந்த உறக்கம்",
    titleEn: "Plantar Fasciitis Relief & Deep Sleep Restoration",
    descTa: "குதிகால் பகுதி இடுப்பு பகுதி, சயாடிகா நரம்பு மற்றும் உடலின் தூக்க மையப்புள்ளியோடு தொடர்புடையது. காலையில் எழும்போது தரையில் கால் வைக்க முடியாத குதிகால் வலி நீங்கி, இரவில் நிம்மதியான ஆழ்ந்த தூக்கம் உண்டாக உதவுகிறது.",
    descEn: "Heel zone addresses calcaneal spur, morning plantar heel aches, and pineal sleep points. Highly effective for deep restorative slumber.",
    benefitsTa: [
      "உறக்கம் மற்றும் தளர்வை மேம்படுத்த உதவும்",
      "காலையில் ஏற்படும் குதிகால் வலி (Plantar Fasciitis) குணம்",
      "சயாடிகா நரம்பு இழுத்தல் தளருதல்",
      "மன அழுத்தம் மற்றும் சோர்வை குறைக்க உதவும்"
    ],
    benefitsEn: [
      "Helps improve sound sleep and relaxation",
      "Eradicates morning heel spur stabbing pain",
      "Releases tension along the sciatic nerve",
      "Helps reduce stress and physical fatigue"
    ]
  }
};

let activeZoneKey = 'head';

function initReflexologyChart() {
  const presetBtns = document.querySelectorAll('.preset-btn');
  const svgZones = document.querySelectorAll('.interactive-zone');

  svgZones.forEach(zone => {
    zone.addEventListener('click', () => {
      const zoneKey = zone.getAttribute('data-zone');
      if (zoneKey && reflexZoneData[zoneKey]) {
        setActiveZone(zoneKey);
      }
    });

    zone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const zoneKey = zone.getAttribute('data-zone');
        if (zoneKey && reflexZoneData[zoneKey]) {
          setActiveZone(zoneKey);
        }
      }
    });
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const zoneKey = btn.getAttribute('data-zone');
      if (zoneKey && reflexZoneData[zoneKey]) {
        setActiveZone(zoneKey);
      }
    });
  });

  setActiveZone('head');
}

function setActiveZone(zoneKey) {
  activeZoneKey = zoneKey;

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-zone') === zoneKey);
  });

  document.querySelectorAll('.interactive-zone').forEach(z => {
    z.classList.toggle('active', z.getAttribute('data-zone') === zoneKey);
  });

  updateReflexZoneDisplay(zoneKey);
}

function updateReflexZoneDisplay(zoneKey) {
  const data = reflexZoneData[zoneKey];
  if (!data) return;

  const isTa = (currentLang === 'ta');

  const badge = document.getElementById('infoBadge');
  const nameEn = document.getElementById('infoZoneNameEn');
  const title = document.getElementById('infoTitle');
  const desc = document.getElementById('infoDesc');
  const benefitsList = document.getElementById('infoBenefitsList');

  if (badge) badge.textContent = isTa ? data.nameTa : data.nameEn;
  if (nameEn) nameEn.textContent = isTa ? data.nameEn : data.nameTa;
  if (title) title.textContent = isTa ? data.titleTa : data.titleEn;
  if (desc) desc.textContent = isTa ? data.descTa : data.descEn;

  if (benefitsList) {
    benefitsList.innerHTML = '';
    const listItems = isTa ? data.benefitsTa : data.benefitsEn;
    listItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      benefitsList.appendChild(li);
    });
  }
}

/* ==========================================================================
   3. APPOINTMENT BOOKING MODAL & WHATSAPP DISPATCH
   ========================================================================== */
function openBookingModal() {
  const dialog = document.getElementById('bookingDialog');
  if (dialog) dialog.showModal();
}

function closeBookingModal() {
  const dialog = document.getElementById('bookingDialog');
  if (dialog) dialog.close();
}

function submitAppointmentForm(event) {
  event.preventDefault();
  const form = document.getElementById('appointmentForm');
  if (!form) return;

  const name = document.getElementById('clientName').value.trim();
  const phone = document.getElementById('clientPhone').value.trim();
  const place = document.getElementById('clientPlace').value.trim();
  const date = document.getElementById('preferredDate').value;
  const time = document.getElementById('preferredTime').value;
  const duration = document.getElementById('durationSelection').value;
  const concern = document.getElementById('healthConcern').value.trim();

  // Create formatted WhatsApp message sent to Er. E. Nallasivam M.E., Reflexologist
  const waMessage = 
`*🌿 பாத அழுத்த புத்துணர்வு சிகிச்சை மையம்*
*Foot Reflexology Rejuvenation Therapy Center*
📍 *குயிலங்காடு தோட்டம், சூரியம்பாளையம் (கவுந்தப்பாடி to கோபி மெயின் ரோடு)*
👨‍⚕️ *சிகிச்சை நிபுணர்: Er. E. நல்லசிவம் M.E., Reflexologist*

👤 *பெயர் (Name):* ${name}
📞 *WhatsApp எண்:* ${phone}
🏡 *ஊர்/பகுதி (Area):* ${place}
📅 *விரும்பும் தேதி (Date):* ${date}
⏰ *விரும்பும் நேரம் (Time):* ${time} (காலை 7.00 - மதியம் 12.00)
⏱️ *சிகிச்சை நேரம் (Duration):* ${duration}
💰 *கட்டணம்:* ரூ 200
📝 *உடல் உபாதை/குறிப்பு:* ${concern || 'உடல் புத்துணர்வு & நல பராமரிப்பு'}

⚠️ *முன்பதிவு குறிப்பு உறுதி:* சிகிச்சைக்கு 1 மணி நேரத்திற்கு முன்பும் பின்பும் உணவு, தண்ணீர் அருந்த மாட்டேன் என அறிவேன்.

_வணக்கம் Er. E. நல்லசிவம் அவர்களே, தயவுசெய்து எனது நேர ஒதுக்கீட்டை உறுதிப்படுத்தவும்._`;

  const encodedMsg = encodeURIComponent(waMessage);
  const waUrl = `https://wa.me/919791406655?text=${encodedMsg}`;

  const appointmentRecord = {
    id: 'NPV-' + Math.floor(1000 + Math.random() * 9000),
    name,
    phone,
    place,
    date,
    time,
    duration,
    fee: 'ரூ 200',
    concern
  };
  localStorage.setItem('narpuvi_last_booking', JSON.stringify(appointmentRecord));

  closeBookingModal();
  showSuccessModal(appointmentRecord);

  // Open WhatsApp in a new tab
  window.open(waUrl, '_blank');
}

function showSuccessModal(record) {
  const successDialog = document.getElementById('successDialog');
  const detailsBox = document.getElementById('bookingSummaryDetails');

  if (detailsBox && record) {
    detailsBox.innerHTML = `
      <p><strong>முன்பதிவு எண்:</strong> ${record.id}</p>
      <p><strong>பெயர்:</strong> ${record.name} (${record.place})</p>
      <p><strong>சிகிச்சை:</strong> பாத அழுத்த புத்துணர்வு சிகிச்சை</p>
      <p><strong>நேரம் & கட்டணம்:</strong> ${record.duration} | ${record.fee}</p>
      <p><strong>தேதி & நேரம்:</strong> ${record.date} | ${record.time}</p>
    `;
  }

  if (successDialog) successDialog.showModal();
}

function closeSuccessModal() {
  const successDialog = document.getElementById('successDialog');
  if (successDialog) successDialog.close();
}

/* ==========================================================================
   4. NAVIGATION & MOBILE DRAWER HELPERS
   ========================================================================== */
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');
  const navBackdrop = document.getElementById('navBackdrop');
  if (!navMenu) return;

  const isOpen = navMenu.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    navMenu.classList.add('open');
    if (menuToggle) menuToggle.classList.add('active');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');
  const navBackdrop = document.getElementById('navBackdrop');
  if (navMenu) navMenu.classList.remove('open');
  if (menuToggle) menuToggle.classList.remove('active');
  if (navBackdrop) navBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navbar = document.getElementById('navbar');

  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // Dismiss on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeBookingModal();
      closeSuccessModal();
    }
  });

  // Close booking dialog when clicking dialog backdrop
  const bookingDialog = document.getElementById('bookingDialog');
  if (bookingDialog) {
    bookingDialog.addEventListener('click', (e) => {
      const rect = bookingDialog.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        closeBookingModal();
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

function initDatePicker() {
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }
}

/* ==========================================================================
   7. SCROLL REVEAL & INTERACTIVE MOTION ENGINE
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.core-benefit-card, .oil-card-container, .philosophy-box-wrap, ' +
    '.guideline-card, .pricing-card, .timing-card, .flyer-card, ' +
    '.c-info-card, .map-card-wrapper, .hero-core-checklist, .visual-card-wrap'
  );

  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el, index) => {
    el.classList.add('reveal-fade-up');
    if (el.classList.contains('core-benefit-card') || el.classList.contains('guideline-card')) {
      el.style.transitionDelay = `${(index % 5) * 0.08}s`;
    }
    observer.observe(el);
  });
}

