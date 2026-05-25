const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const offerSection = document.querySelector('.offer-section');
const nav = document.querySelector('.nav');
const langToggle = document.querySelector('.lang-toggle');
const contactForm = document.querySelector('.contact-form');
const offerModal = document.querySelector('#offer-modal');
const offerTriggers = document.querySelectorAll('.offer-trigger');
const offerCloseControls = document.querySelectorAll('[data-offer-close]');
const offerLeadForm = document.querySelector('.offer-lead-form');
const offerEmailInput = document.querySelector('#offer-email');
const phoneInput = document.querySelector('#phone');
const faqItems = document.querySelectorAll('[data-faq-item]');
const revealItems = document.querySelectorAll('[data-reveal]');
const formspreeSuccessMessage = 'Thank you! Your request has been received. Elite Empire Notary will contact you soon.';
const formspreeErrorMessage = 'Something went wrong. Please try again or contact us directly.';

const translations = {
  en: {
    brandName: 'Elite Empire Notary LLC',
    brandTagline: 'Notary Services',
    navServices: 'Services',
    navWhy: 'Why Us',
    navFAQ: 'Q&A',
    navPayment: 'Pay',
    navContact: 'Contact',
    heroEyebrow: 'Catawba County Notary Services',
    heroHeading: 'Notary Services Done Right',
    heroCopy: 'Fast. Reliable. Mobile. Trusted across Catawba County and surrounding areas.',
    heroCta: 'Book Now',
    payNow: 'Pay Now',
    credentialCertified: 'Licensed and certified notary professional',
    credentialMobile: 'Mobile notary service - we come to you',
    credentialSameDay: 'Same-day appointments may be available',
    credentialSecure: 'Fast, accurate, and secure document handling',
    credentialFlexible: 'Flexible evening and weekend availability',
    credentialPricing: 'Affordable, transparent pricing',
    credentialBilingual: 'Bilingual service - Hablamos Español',
    offerEyebrow: 'Offer',
    offerHeading: '10% off for first-time clients',
    offerCopy: 'Enter your email to receive your first-time client discount.',
    offerCta: 'Claim Offer',
    offerModalEyebrow: 'First-Time Client Offer',
    offerModalHeading: 'Enter your email to receive 10% off.',
    offerModalCopy: 'Submit your email and Elite Empire Notary LLC will follow up with your discount details.',
    offerEmailLabel: 'Email Address',
    offerEmailPlaceholder: 'you@example.com',
    offerSubmit: 'Send My Discount',
    areaLabel: 'Serving',
    contactLabel: 'Call or Text',
    emailLabel: 'Email',
    emailLinkText: 'Email Us',
    serviceAreaShort: 'Catawba County and surrounding areas',
    servicesEyebrow: 'Elite Services',
    serviceOther: 'Other',
    storiesHeading: 'Real moments when a reliable notary matters.',
    storyImmigrationLabel: 'Immigration Paperwork',
    storyImmigrationTitle: 'I needed help quickly, and time mattered.',
    storyImmigrationCopy: 'I was nervous because my immigration paperwork needed to be notarized right away, and I did not want one missing signature to slow everything down. Cindy arrived quickly, walked me through what needed to be signed, and handled the notarization with care. In a moment that felt overwhelming, I felt supported, respected, and able to move forward. - Daniela',
    storyTitleLabel: 'Weekend Title Notary',
    storyTitleTitle: 'I found a buyer, but it was the weekend.',
    storyTitleCopy: 'I finally had someone ready to buy my vehicle, but the timing was stressful because it was the weekend and we needed the title notarized before the deal fell through. Cindy was available, met us when we needed help, and made the process simple. I was relieved because I did not have to wait until Monday or risk losing the sale. - Mike',
    storyPassportLabel: 'Passport Paperwork',
    storyPassportTitle: 'I wanted the passport process to feel less confusing.',
    storyPassportCopy: 'I had passport paperwork that needed attention, and I was worried about making a mistake or missing something important. Cindy made the notarization quick, clear, and easy to understand. Instead of feeling rushed or unsure, I left feeling confident that my paperwork was handled properly and ready for the next step. - Alex',
    trustedEyebrow: 'Trusted By',
    whyEyebrow: 'Experience the Elite Difference',
    whyHeading: 'Simple, reliable notary support.',
    whyCopy: 'Elite Empire Notary LLC keeps the process clear, convenient, and professional from start to finish.',
    whyMobile: 'Mobile Notary',
    whyProfessional: 'Professional service',
    whyReliable: 'Reliable scheduling',
    whyTrusted: 'Trusted notary service business',
    whyBilingual: 'Bilingual-friendly experience',
    paymentEyebrow: 'Payment',
    paymentHeading: 'Secure Payment',
    paymentCopy: 'Pay for your notary services safely and securely using PayPal or Venmo.',
    contactEyebrow: 'Contact',
    contactHeading: 'Request notary service.',
    contactCopy: 'Share a few details and Elite Empire Notary LLC will follow up to confirm timing, location, and service needs.',
    phoneLabel: 'Phone',
    serviceAreaLabel: 'Service Area',
    serviceAreaFull: 'Catawba County and surrounding areas',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone Number',
    formService: 'Service Needed',
    serviceOptionDefault: 'Select a service',
    formMessage: 'Message',
    policyConsent: 'By submitting this form, you agree to be contacted by Elite Empire Notary regarding your request.',
    formSubmit: 'Send Message',
    formNote: 'Your request will be sent securely by email.',
    formSuccess: formspreeSuccessMessage,
    formError: formspreeErrorMessage,
    footerCopy: '© 2026 Elite Empire Notary LLC. Notary services in Catawba County and surrounding areas.',
    privacyPolicyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
    cookiePolicyLink: 'Cookie Policy',
    smsPolicyLink: 'SMS/Text Policy',
    legalDisclaimerLink: 'Legal Disclaimer',
    refundPolicyLink: 'Cancellation/Refund Policy',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    phonePlaceholder: '(123) 456-7890',
    phoneRequired: 'Please enter your phone number.',
    phoneIncomplete: 'Please enter a complete 10-digit phone number.',
    messagePlaceholder: 'Tell us about your document, location, and preferred appointment time.',
    thankYou: 'Thank you. Elite Empire Notary LLC will follow up soon to confirm your request.',
    languageLabel: 'Switch language to Spanish',
    faqEyebrow: 'Q&A',
    faqHeading: 'Common Notary Questions',
    faqIntro: 'Simple answers to common questions about notary services, identification, appointments, and document signing.',
    backHome: 'Back to Home',
    faqDisclaimer: 'This Q&A is for general information only and is not legal advice.',
    faqQ1: 'Do both parties need to be present when signing a car title?',
    faqA1: 'All required signers should be present with valid ID. Requirements can depend on the title, the transaction, and DMV rules, so it is best to confirm what is needed before the appointment.',
    faqQ2: 'What identification is needed for a notary in North Carolina?',
    faqA2: 'Bring acceptable government-issued photo identification, such as a driver’s license, state ID, passport, military ID, or another valid government ID.',
    faqQ3: 'Can a notary explain legal documents?',
    faqA3: 'A notary can identify the type of notarial act being performed, but cannot explain legal rights, give legal advice, or tell you how to complete a legal document.',
    faqQ4: 'Can a notary notarize a document without the signer present?',
    faqA4: 'No. The signer must personally appear before the notary, provide acceptable identification, and sign or acknowledge the document as required.',
    faqQ5: 'What should I bring to my notary appointment?',
    faqA5: 'Bring the document, valid photo ID, any required witnesses, and any instructions you received from the agency, lender, attorney, or business requesting the notarization.',
    faqQ6: 'Can a notary come to my location?',
    faqA6: 'Yes. Appointments may be available at an agreed location, such as a home, office, hospital, care facility, or other convenient public or private location.',
    faqQ7: 'Can expired identification be used?',
    faqA7: 'In most cases, identification should be current and valid. If your ID is expired, ask before the appointment so the notary can explain what options may be available.',
    faqQ8: 'Do documents need to be filled out before notarization?',
    faqA8: 'Documents should usually be completed before notarization, except for signatures and notarial certificate sections. A notary cannot choose answers or complete legal forms for you.',
    faqQ9: 'Can a notary refuse to notarize a document?',
    faqA9: 'Yes. A notary may refuse if the signer is not present, cannot be properly identified, appears unwilling or unaware, the document is incomplete, or the request does not meet notary requirements.',
    faqQ10: 'Are mobile appointments available?',
    faqA10: 'Mobile Notary Appointments may be available at an agreed location, making the process more convenient for individuals, families, and businesses.',
    thankYouHeading: 'Thank You for Reaching Out',
    thankYouMessage: 'Your information has been received. A member of our team will be in touch with you soon to discuss your notary service request.',
    thankYouSecondary: 'We appreciate the opportunity to assist you with reliable and professional notary services.',
  },
  es: {
    brandName: 'Elite Empire Notary LLC',
    brandTagline: 'Servicios notariales',
    navServices: 'Servicios',
    navWhy: 'Por qué elegirnos',
    navFAQ: 'Preguntas',
    navPayment: 'Pagar',
    navContact: 'Contacto',
    heroEyebrow: 'Servicios notariales en el condado de Catawba',
    heroHeading: 'Servicios notariales bien hechos',
    heroCopy: 'Rapido. Confiable. Movil. De confianza en el condado de Catawba y areas cercanas.',
    heroCta: 'Reservar ahora',
    payNow: 'Pagar ahora',
    credentialCertified: 'Profesional notarial con licencia y certificación',
    credentialMobile: 'Servicio notarial móvil - vamos a usted',
    credentialSameDay: 'Puede haber citas disponibles el mismo día',
    credentialSecure: 'Manejo de documentos rápido, preciso y seguro',
    credentialFlexible: 'Disponibilidad flexible por las tardes y fines de semana',
    credentialPricing: 'Precios accesibles y transparentes',
    credentialBilingual: 'Servicio bilingüe - Hablamos Español',
    offerEyebrow: 'Oferta especial',
    offerHeading: '10% de descuento para clientes nuevos',
    offerCopy: 'Ingrese su correo para recibir su descuento de cliente nuevo.',
    offerCta: 'Reclamar oferta',
    offerModalEyebrow: 'Oferta para clientes nuevos',
    offerModalHeading: 'Ingrese su correo para recibir 10% de descuento.',
    offerModalCopy: 'Envíe su correo y Elite Empire Notary LLC le contactará con los detalles de su descuento.',
    offerEmailLabel: 'Correo electrónico',
    offerEmailPlaceholder: 'usted@ejemplo.com',
    offerSubmit: 'Enviar mi descuento',
    areaLabel: 'Servicio en',
    contactLabel: 'Llame o envíe texto',
    emailLabel: 'Correo electrónico',
    emailLinkText: 'Enviar correo',
    serviceAreaShort: 'Condado de Catawba y areas cercanas',
    servicesEyebrow: 'Servicios Elite',
    serviceOther: 'Otro',
    storiesHeading: 'Momentos reales en los que una notaría confiable importa.',
    storyImmigrationLabel: 'Documentos de inmigración',
    storyImmigrationTitle: 'Necesitaba ayuda rápido, y el tiempo importaba.',
    storyImmigrationCopy: 'Estaba nervioso porque mis documentos de inmigración necesitaban notarizarse de inmediato, y no quería que una firma faltante retrasara todo. Cindy llegó rápidamente, me explicó lo que debía firmarse y manejó la notarización con cuidado. En un momento que se sentía abrumador, me sentí apoyado, respetado y listo para seguir adelante. - Daniela',
    storyTitleLabel: 'Título en fin de semana',
    storyTitleTitle: 'Encontré un comprador, pero era fin de semana.',
    storyTitleCopy: 'Por fin tenía a alguien listo para comprar mi vehículo, pero el momento era estresante porque era fin de semana y necesitábamos notarizar el título antes de que se cayera el trato. Cindy estuvo disponible, se reunió con nosotros cuando necesitábamos ayuda e hizo que el proceso fuera sencillo. Sentí alivio porque no tuve que esperar hasta el lunes ni arriesgarme a perder la venta. - Mike',
    storyPassportLabel: 'Documentos de pasaporte',
    storyPassportTitle: 'Quería que el proceso del pasaporte fuera menos confuso.',
    storyPassportCopy: 'Tenía documentos de pasaporte que necesitaban atención, y me preocupaba cometer un error u olvidar algo importante. Cindy hizo que la notarización fuera rápida, clara y fácil de entender. En lugar de sentirme apurado o inseguro, me fui con confianza de que mis documentos estaban manejados correctamente y listos para el siguiente paso. - Alex',
    trustedEyebrow: 'Confiado por',
    whyEyebrow: 'Experimente la diferencia Elite',
    whyHeading: 'Apoyo notarial simple y confiable.',
    whyCopy: 'Elite Empire Notary LLC mantiene el proceso claro, conveniente y profesional de principio a fin.',
    whyMobile: 'Notaría móvil',
    whyProfessional: 'Servicio profesional',
    whyReliable: 'Programación confiable',
    whyTrusted: 'Negocio de servicios notariales de confianza',
    whyBilingual: 'Experiencia amigable para personas bilingües',
    paymentEyebrow: 'Pago',
    paymentHeading: 'Pago seguro',
    paymentCopy: 'Pague sus servicios notariales de forma segura usando PayPal o Venmo.',
    contactEyebrow: 'Contacto',
    contactHeading: 'Solicite servicio notarial.',
    contactCopy: 'Comparta algunos detalles y Elite Empire Notary LLC le contactará para confirmar horario, ubicación y servicio.',
    phoneLabel: 'Teléfono',
    serviceAreaLabel: 'Área de servicio',
    serviceAreaFull: 'Condado de Catawba y areas cercanas',
    formName: 'Nombre',
    formEmail: 'Correo electrónico',
    formPhone: 'Número de teléfono',
    formService: 'Servicio necesario',
    serviceOptionDefault: 'Seleccione un servicio',
    formMessage: 'Mensaje',
    policyConsent: 'By submitting this form, you agree to be contacted by Elite Empire Notary regarding your request.',
    formSubmit: 'Enviar mensaje',
    formNote: 'Su solicitud se enviará de forma segura por correo electrónico.',
    formSuccess: formspreeSuccessMessage,
    formError: formspreeErrorMessage,
    footerCopy: '© 2026 Elite Empire Notary LLC. Servicios notariales en el condado de Catawba y areas cercanas.',
    privacyPolicyLink: 'Politica de Privacidad',
    termsLink: 'Terminos de Servicio',
    cookiePolicyLink: 'Politica de Cookies',
    smsPolicyLink: 'Politica de SMS/Textos',
    legalDisclaimerLink: 'Aviso Legal',
    refundPolicyLink: 'Cancelacion/Reembolso',
    namePlaceholder: 'Su nombre',
    emailPlaceholder: 'usted@ejemplo.com',
    phonePlaceholder: '(123) 456-7890',
    phoneRequired: 'Ingrese su número de teléfono.',
    phoneIncomplete: 'Ingrese un número de teléfono completo de 10 dígitos.',
    messagePlaceholder: 'Cuéntenos sobre su documento, ubicación y horario preferido.',
    thankYou: 'Gracias. Elite Empire Notary LLC se comunicará pronto para confirmar su solicitud.',
    languageLabel: 'Cambiar idioma a inglés',
    faqEyebrow: 'Preguntas',
    faqHeading: 'Preguntas comunes de notaría',
    faqIntro: 'Respuestas sencillas a preguntas comunes sobre servicios notariales, identificación, citas y firma de documentos.',
    backHome: 'Volver al inicio',
    faqDisclaimer: 'Esta sección de preguntas es solo información general y no es asesoría legal.',
    faqQ1: '¿Deben estar presentes ambas partes al firmar un título de vehículo?',
    faqA1: 'Todas las personas que deban firmar deben estar presentes con identificación válida. Los requisitos pueden depender del título, la transacción y las reglas del DMV, por eso es mejor confirmar lo necesario antes de la cita.',
    faqQ2: '¿Qué identificación se necesita para una notaría en Carolina del Norte?',
    faqA2: 'Traiga una identificación con foto emitida por el gobierno, como licencia de conducir, identificación estatal, pasaporte, identificación militar u otra identificación gubernamental válida.',
    faqQ3: '¿Puede una notaría explicar documentos legales?',
    faqA3: 'Una notaría puede identificar el tipo de acto notarial que se realizará, pero no puede explicar derechos legales, dar asesoría legal ni decirle cómo completar un documento legal.',
    faqQ4: '¿Puede una notaría notarizar un documento sin que la persona firmante esté presente?',
    faqA4: 'No. La persona firmante debe comparecer personalmente ante la notaría, presentar identificación aceptable y firmar o reconocer el documento según sea necesario.',
    faqQ5: '¿Qué debo llevar a mi cita notarial?',
    faqA5: 'Traiga el documento, identificación válida con foto, testigos requeridos y cualquier instrucción recibida de la agencia, prestamista, abogado o negocio que solicita la notarización.',
    faqQ6: '¿Puede una notaría venir a mi ubicación?',
    faqA6: 'Sí. Puede haber citas disponibles en una ubicación acordada, como una casa, oficina, hospital, centro de cuidado u otro lugar conveniente público o privado.',
    faqQ7: '¿Se puede usar una identificación vencida?',
    faqA7: 'En la mayoría de los casos, la identificación debe estar vigente y válida. Si su identificación está vencida, pregunte antes de la cita para conocer qué opciones pueden estar disponibles.',
    faqQ8: '¿Los documentos deben estar llenos antes de la notarización?',
    faqA8: 'Por lo general, los documentos deben estar completos antes de la notarización, excepto las firmas y las secciones del certificado notarial. Una notaría no puede escoger respuestas ni completar formularios legales por usted.',
    faqQ9: '¿Puede una notaría negarse a notarizar un documento?',
    faqA9: 'Sí. Una notaría puede negarse si la persona firmante no está presente, no puede ser identificada correctamente, parece no estar dispuesta o consciente, el documento está incompleto o la solicitud no cumple los requisitos notariales.',
    faqQ10: '¿Hay citas móviles disponibles?',
    faqA10: 'Las citas notariales móviles pueden estar disponibles en una ubicación acordada, haciendo el proceso más conveniente para personas, familias y negocios.',
    thankYouHeading: 'Gracias por comunicarse',
    thankYouMessage: 'Hemos recibido su información. Un miembro de nuestro equipo se comunicará pronto para hablar sobre su solicitud de servicio notarial.',
    thankYouSecondary: 'Agradecemos la oportunidad de ayudarle con servicios notariales confiables y profesionales.',
  },
};

let currentLanguage = 'en';

const setLanguage = (language) => {
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = language === 'en' ? 'ES' : 'EN';
    langToggle.setAttribute('aria-label', dictionary.languageLabel);
  }
};

const toggleExclusiveItem = (items, selectedItem) => {
  const isExpanded = selectedItem.getAttribute('aria-expanded') === 'true';

  items.forEach((item) => {
    if (item !== selectedItem) {
      item.setAttribute('aria-expanded', 'false');
    }
  });

  selectedItem.setAttribute('aria-expanded', String(!isExpanded));
};

faqItems.forEach((item) => {
  item.addEventListener('click', () => toggleExclusiveItem(faqItems, item));
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '').substring(0, 10);
  const parts = digits.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

  if (!parts) {
    return value;
  }

  return !parts[2]
    ? parts[1]
    : `(${parts[1]}) ${parts[2]}${parts[3] ? `-${parts[3]}` : ''}`;
};

const validatePhone = () => {
  if (!phoneInput) {
    return true;
  }

  const digits = phoneInput.value.replace(/\D/g, '');
  const dictionary = translations[currentLanguage];

  if (!digits) {
    phoneInput.setCustomValidity(dictionary.phoneRequired);
    return false;
  }

  if (digits.length < 10) {
    phoneInput.setCustomValidity(dictionary.phoneIncomplete);
    return false;
  }

  phoneInput.setCustomValidity('');
  return true;
};

phoneInput?.addEventListener('input', (event) => {
  event.target.value = formatPhone(event.target.value);
  validatePhone();
});

phoneInput?.addEventListener('blur', validatePhone);
phoneInput?.addEventListener('invalid', validatePhone);

langToggle?.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  setLanguage(currentLanguage);
  validatePhone();
});

menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('show') ?? false;
  document.body.classList.toggle('nav-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove('show');
    document.body.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  }
});

const updateFloatingHeader = () => {
  const shouldFloat = window.scrollY > 12;
  siteHeader?.classList.toggle('is-floating', shouldFloat);
  offerSection?.classList.toggle('is-floating', shouldFloat);
};

window.addEventListener('scroll', updateFloatingHeader, { passive: true });
updateFloatingHeader();

const openOfferModal = () => {
  if (!offerModal) {
    return;
  }

  offerModal.classList.add('is-open');
  offerModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  offerEmailInput?.focus();
};

const closeOfferModal = () => {
  if (!offerModal) {
    return;
  }

  offerModal.classList.remove('is-open');
  offerModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

offerTriggers.forEach((trigger) => {
  trigger.addEventListener('click', openOfferModal);
});

offerCloseControls.forEach((control) => {
  control.addEventListener('click', closeOfferModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && offerModal?.classList.contains('is-open')) {
    closeOfferModal();
  }
});

const setFormStatus = (form, message = '', type = '') => {
  const status = form.querySelector('[data-form-status]');

  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.remove('is-success', 'is-error');

  if (type) {
    status.classList.add(`is-${type}`);
  }
};

const submitFormspreeForm = async (form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent;

  setFormStatus(form);
  submitButton?.setAttribute('disabled', '');

  if (submitButton) {
    submitButton.textContent = 'Sending...';
  }

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Formspree submission failed.');
    }

    form.reset();
    setFormStatus(form, translations[currentLanguage].formSuccess, 'success');
  } catch (error) {
    setFormStatus(form, translations[currentLanguage].formError, 'error');
  } finally {
    submitButton?.removeAttribute('disabled');

    if (submitButton && originalButtonText) {
      submitButton.textContent = originalButtonText;
    }
  }
};

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  validatePhone();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  submitFormspreeForm(contactForm);
});

offerLeadForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!offerLeadForm.checkValidity()) {
    offerLeadForm.reportValidity();
    return;
  }

  submitFormspreeForm(offerLeadForm);
});

setLanguage(currentLanguage);
openOfferModal();
