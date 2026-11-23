const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const offerSection = document.querySelector('.offer-section');
const nav = document.querySelector('.nav');
const langToggle = document.querySelector('.lang-toggle');
const contactForm = document.querySelector('#service-request');
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
    navForms: "Forms & Downloads",
    formsEyebrow: "Resources",
    formsHeading: "Forms & Downloads",
    formsIntro: "Download blank forms in the language and version you need. No account, payment, email address, or appointment is required to download.",
    formsNoticeHeading: "Before using a form",
    formsNotice: "Forms are provided for general convenience and informational purposes. Elite Empire Notary is not a law firm and does not provide legal advice. These forms may not meet every legal, agency, airline, or destination requirement. Confirm the required form and wording with the receiving organization or a licensed attorney before use. Providing a form does not guarantee acceptance or legal sufficiency.",
    formsPrepHeading: "Prepare for your appointment",
    formsPrep: "Complete the applicable information, but leave signature lines and all notary certificate fields blank until your appointment. If notarization is requested, bring acceptable identification.",
    formsTravelHeading: "Minor Travel Consent",
    formsTravelNote: "Travel requirements vary by destination, airline, and custody circumstances. Confirm whose consent is required and whether a specific form or supporting documentation is needed.",
    formsActNote: "Confirm which notarial act is required with the receiving organization or a licensed attorney. Elite Empire Notary cannot choose the notarial act for you. A jurat requires the signer to sign in the notary’s presence and take an oath or affirmation.",
    formsVehicleHeading: "Vehicle Bill of Sale",
    formsVehicleNote: "This form does not replace an assigned vehicle title, lien release, required odometer disclosure, or other DMV documents.",
    formsCertificatesHeading: "Standalone North Carolina Notarial Certificates",
    formsSpanishNote: "The form is in Spanish; the notarial certificate section remains in English.",
    formsEnglish: "English · PDF · 1 page",
    formsSpanish: "Spanish body / English certificate · PDF · 1 page",
    formsView: "View PDF",
    formsDownload: "Download PDF",
    formsNewTab: "(opens in a new tab)",
    formsPrivacyHeading: "Your privacy",
    formsPrivacy: "Download blank forms to your own device. This page does not collect or receive completed forms. Do not submit completed forms, identification documents, or sensitive personal information through this download page.",
    formsContactHeading: "Questions or appointments",
    formsContact: "Contact Elite Empire Notary",
    formsServing: "Serving Catawba County and surrounding areas",
    formsSkip: "Skip to forms and downloads",
    formsTitle0: "Minor Travel Consent — Acknowledgment",
    formsDescription0: "Travel permission form with a North Carolina acknowledgment certificate.",
    formsTitle1: "Minor Travel Consent — Jurat",
    formsDescription1: "Travel permission form with an oath-or-affirmation statement and a North Carolina jurat.",
    formsTitle2: "Minor Travel Consent — Acknowledgment (Spanish)",
    formsDescription2: "Spanish travel permission form with a North Carolina acknowledgment certificate.",
    formsTitle3: "Minor Travel Consent — Jurat (Spanish)",
    formsDescription3: "Spanish travel permission form with an oath-or-affirmation statement and a North Carolina jurat.",
    formsTitle4: "Vehicle Bill of Sale",
    formsDescription4: "A record of a private-party vehicle sale, including buyer, seller, vehicle, and sale details.",
    formsTitle5: "North Carolina Acknowledgment Certificate",
    formsDescription5: "A separate acknowledgment certificate with optional document-identification fields.",
    formsTitle6: "North Carolina Jurat Certificate",
    formsDescription6: "A separate jurat certificate for a signature under oath or affirmation, with optional document-identification fields.",
    translationEyebrow: 'Our Affiliate Partner',
    translationHeading: 'Translation Services',
    translationIntro: 'We are now an affiliate of Idiomatic Language Services.',
    translationCopy: 'Need your documents translated? Connect with Idiomatic Language Services through our affiliate link to get started.',
    translationCta: 'Translate Documents',
    translationNote: 'Translation services are provided by Idiomatic Language Services.',
    translationAffiliateCta: 'click here to register',
    translationAffiliateInvite: 'If you would like to become an affiliate of Idiomatic Language Services,',
    apostilleSelect: "Select an option",
    apostilleHeading: "Request apostille services.",
    apostilleCopy: "Tell us about your documents so we can confirm the next steps, timing, and pricing.",
    apostilleType: "Document type(s)",
    apostilleCount: "Number of documents",
    apostilleOrigin: "Issuing state / country",
    apostilleDestination: "Country where documents will be used",
    apostilleNotarized: "Are the documents already notarized?",
    apostilleYes: "Yes",
    apostilleNo: "No",
    apostilleUnsure: "Not sure",
    apostilleDeadline: "Date needed (optional)",
    apostilleDelivery: "Preferred document handoff",
    apostilleMeet: "Local appointment",
    apostilleMail: "Mail / courier",
    apostilleDiscuss: "Discuss with me",
    apostilleNotes: "Additional details (optional)",
    apostilleSubmit: "Send Apostille Request",
    apostilleNote: "This is a service inquiry. We will contact you to confirm requirements and availability.",

    brandName: 'Elite Empire Notary LLC',
    brandTagline: 'Notary Services',
    navServices: 'Services',
    navWhy: 'Why Us',
    navFAQ: 'Q&A',
    requestService: 'Request a Service',
    navContact: 'Contact',
    heroEyebrow: 'Catawba County Notary Services',
    heroHeading: 'Notary Services Done Right',
    heroCopy: 'Fast. Reliable. Mobile. Trusted across Catawba County and surrounding areas.',
    heroCta: 'Book Now',
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
    reviewsHeading: 'Google Reviews',
    invoiceHeading: 'Simple, Secure Invoicing',
    invoiceCopy: 'Submit your service request. We’ll confirm your service details and total, including any applicable travel fees, then email you a QuickBooks invoice with payment instructions.',
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
    formFullName: 'Full Name',
    formEmailAddress: 'Email Address',
    formPreferredAppointment: 'Preferred Appointment Date and Time (subject to confirmation)',
    formLocation: 'Service Location or City',
    formMessage: 'Additional Details (optional)',
    serviceGeneral: 'General Notary Services',
    serviceMobile: 'Mobile Notary Services',
    serviceRealEstate: 'Real Estate & Loan Signing Services',
    serviceLegal: 'Legal & Estate Planning Documents',
    serviceBusiness: 'Business & Financial Documents',
    serviceFamily: 'Family & Personal Documents',
    serviceApostille: 'Apostille & Authentication Services',
    serviceSpecialty: 'Specialty / Premium Services',
    policyConsent: 'By submitting this form, you agree to be contacted by Elite Empire Notary regarding your request.',
    formSubmit: 'Submit Service Request',
    requestSending: 'Submitting…',
    formNote: 'Submitting a request does not confirm an appointment. Service details, pricing, and availability will be confirmed before an invoice is sent.',
    requestSuccess: 'Thank you! Your service request has been received. We’ll contact you to confirm availability, service details, and pricing. Once confirmed, you’ll receive a QuickBooks invoice by email.',
    requestError: 'We couldn’t submit your service request. Please try again or contact us directly.',
    formSuccess: formspreeSuccessMessage,
    formError: formspreeErrorMessage,
    footerCopy: '© 2026 Elite Empire Notary LLC. Notary services in Catawba County and surrounding areas.',
    privacyPolicyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
    cookiePolicyLink: 'Cookie Policy',
    smsPolicyLink: 'SMS/Text Policy',
    legalDisclaimerLink: 'Legal Disclaimer',
    refundPolicyLink: 'Cancellation/Refund Policy',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'you@example.com',
    phonePlaceholder: '(123) 456-7890',
    phoneRequired: 'Please enter your phone number.',
    phoneIncomplete: 'Please enter a complete 10-digit phone number.',
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
    navForms: "Formularios y descargas",
    formsEyebrow: "Recursos",
    formsHeading: "Formularios y descargas",
    formsIntro: "Descargue formularios en blanco en el idioma y la versión que necesite. No necesita cuenta, pago, correo electrónico ni cita para descargarlos.",
    formsNoticeHeading: "Antes de usar un formulario",
    formsNotice: "Estos formularios se ofrecen para su comodidad y con fines informativos. Elite Empire Notary no es un bufete de abogados y no ofrece asesoría legal. Es posible que estos formularios no cumplan todos los requisitos legales ni los de una agencia, aerolínea o destino. Antes de usarlos, confirme el formulario y el texto requeridos con la organización destinataria o un abogado autorizado. Proporcionar un formulario no garantiza su aceptación ni su suficiencia legal.",
    formsPrepHeading: "Prepárese para su cita",
    formsPrep: "Complete la información que corresponda, pero deje en blanco las líneas de firma y todos los campos del certificado notarial hasta su cita. Si se solicita notarización, traiga una identificación aceptable.",
    formsTravelHeading: "Autorización de viaje para menores",
    formsTravelNote: "Los requisitos de viaje varían según el destino, la aerolínea y las circunstancias de custodia. Confirme de quién se necesita el consentimiento y si se requiere un formulario específico o documentación de respaldo.",
    formsActNote: "Confirme con la organización destinataria o un abogado autorizado qué acto notarial se requiere. Elite Empire Notary no puede elegir el acto notarial por usted. Un jurat requiere que la persona firme ante el notario y preste juramento o haga una afirmación solemne.",
    formsVehicleHeading: "Comprobante de venta de vehículo",
    formsVehicleNote: "Este formulario no sustituye el título del vehículo debidamente transferido, la liberación de un gravamen, la declaración requerida del odómetro ni otros documentos del DMV.",
    formsCertificatesHeading: "Certificados notariales independientes de Carolina del Norte",
    formsSpanishNote: "El formulario está en español; la sección del certificado notarial permanece en inglés.",
    formsEnglish: "Inglés · PDF · 1 página",
    formsSpanish: "Texto en español / certificado en inglés · PDF · 1 página",
    formsView: "Ver PDF",
    formsDownload: "Descargar PDF",
    formsNewTab: "(se abre en una pestaña nueva)",
    formsPrivacyHeading: "Su privacidad",
    formsPrivacy: "Descargue los formularios en blanco a su propio dispositivo. Esta página no recopila ni recibe formularios completados. No envíe formularios completados, documentos de identificación ni información personal sensible a través de esta página de descargas.",
    formsContactHeading: "Preguntas o citas",
    formsContact: "Contacte a Elite Empire Notary",
    formsServing: "Al servicio del condado de Catawba y áreas cercanas",
    formsSkip: "Ir a los formularios y descargas",
    formsTitle0: "Autorización de viaje para menores — Reconocimiento",
    formsDescription0: "Formulario de autorización de viaje con un certificado de reconocimiento de Carolina del Norte.",
    formsTitle1: "Autorización de viaje para menores — Jurat",
    formsDescription1: "Formulario de autorización de viaje con una declaración bajo juramento o afirmación y un jurat de Carolina del Norte.",
    formsTitle2: "Autorización de viaje para menores — Reconocimiento (español)",
    formsDescription2: "Formulario de autorización de viaje en español con un certificado de reconocimiento de Carolina del Norte.",
    formsTitle3: "Autorización de viaje para menores — Jurat (español)",
    formsDescription3: "Formulario de autorización de viaje en español con una declaración bajo juramento o afirmación y un jurat de Carolina del Norte.",
    formsTitle4: "Comprobante de venta de vehículo",
    formsDescription4: "Constancia de una venta de vehículo entre particulares, con datos del comprador, vendedor, vehículo y venta.",
    formsTitle5: "Certificado de reconocimiento de Carolina del Norte",
    formsDescription5: "Certificado independiente de reconocimiento con campos opcionales para identificar el documento.",
    formsTitle6: "Certificado de juramento o afirmación de Carolina del Norte",
    formsDescription6: "Certificado independiente de juramento o afirmación para una firma, con campos opcionales para identificar el documento.",
    translationEyebrow: 'Nuestro socio afiliado',
    translationHeading: 'Servicios de traducción',
    translationIntro: 'Ahora somos afiliados de Idiomatic Language Services.',
    translationCopy: '¿Necesita traducir sus documentos? Visite Idiomatic Language Services a través de nuestro enlace de afiliado para comenzar.',
    translationCta: 'Traducir documentos',
    translationNote: 'Los servicios de traducción son proporcionados por Idiomatic Language Services.',
    translationAffiliateCta: 'haga clic aquí para registrarse',
    translationAffiliateInvite: 'Si desea convertirse en afiliado de Idiomatic Language Services,',
    apostilleSelect: "Seleccione una opción",
    apostilleHeading: "Solicite servicios de apostilla.",
    apostilleCopy: "Cuéntenos sobre sus documentos para confirmar los próximos pasos, los plazos y el precio.",
    apostilleType: "Tipo(s) de documento",
    apostilleCount: "Número de documentos",
    apostilleOrigin: "Estado / país de emisión",
    apostilleDestination: "País donde se utilizarán los documentos",
    apostilleNotarized: "¿Los documentos ya están notarizados?",
    apostilleYes: "Sí",
    apostilleNo: "No",
    apostilleUnsure: "No estoy seguro/a",
    apostilleDeadline: "Fecha necesaria (opcional)",
    apostilleDelivery: "Entrega preferida de documentos",
    apostilleMeet: "Cita local",
    apostilleMail: "Correo / mensajería",
    apostilleDiscuss: "Consultar conmigo",
    apostilleNotes: "Detalles adicionales (opcional)",
    apostilleSubmit: "Enviar solicitud de apostilla",
    apostilleNote: "Esta es una consulta de servicio. Le contactaremos para confirmar los requisitos y la disponibilidad.",

    brandName: 'Elite Empire Notary LLC',
    brandTagline: 'Servicios notariales',
    navServices: 'Servicios',
    navWhy: 'Por qué elegirnos',
    navFAQ: 'Preguntas',
    requestService: 'Solicitar un servicio',
    navContact: 'Contacto',
    heroEyebrow: 'Servicios notariales en el condado de Catawba',
    heroHeading: 'Servicios notariales bien hechos',
    heroCopy: 'Rapido. Confiable. Movil. De confianza en el condado de Catawba y areas cercanas.',
    heroCta: 'Reservar ahora',
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
    reviewsHeading: 'Reseñas de Google',
    invoiceHeading: 'Facturación sencilla y segura',
    invoiceCopy: 'Envíe su solicitud de servicio. Confirmaremos los detalles del servicio y el precio total, incluidos los cargos de desplazamiento que correspondan. Luego le enviaremos por correo electrónico una factura de QuickBooks con las instrucciones de pago.',
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
    formFullName: 'Nombre completo',
    formEmailAddress: 'Correo electrónico',
    formPreferredAppointment: 'Fecha y hora preferidas para la cita (sujetas a confirmación)',
    formLocation: 'Lugar o ciudad del servicio',
    formMessage: 'Detalles adicionales (opcional)',
    serviceGeneral: 'Servicios notariales generales',
    serviceMobile: 'Servicios notariales móviles',
    serviceRealEstate: 'Servicios de firma para bienes raíces y préstamos',
    serviceLegal: 'Documentos legales y de planificación patrimonial',
    serviceBusiness: 'Documentos comerciales y financieros',
    serviceFamily: 'Documentos familiares y personales',
    serviceApostille: 'Servicios de apostilla y autenticación',
    serviceSpecialty: 'Servicios especializados o prémium',
    policyConsent: 'Al enviar este formulario, acepta que Elite Empire Notary se comunique con usted sobre su solicitud.',
    formSubmit: 'Enviar solicitud de servicio',
    requestSending: 'Enviando…',
    formNote: 'Enviar una solicitud no confirma una cita. Confirmaremos los detalles del servicio, el precio y la disponibilidad antes de enviarle una factura.',
    requestSuccess: '¡Gracias! Hemos recibido su solicitud de servicio. Nos comunicaremos con usted para confirmar la disponibilidad, los detalles del servicio y el precio. Una vez confirmados, recibirá una factura de QuickBooks por correo electrónico.',
    requestError: 'No pudimos enviar su solicitud de servicio. Vuelva a intentarlo o comuníquese directamente con nosotros.',
    formSuccess: formspreeSuccessMessage,
    formError: formspreeErrorMessage,
    footerCopy: '© 2026 Elite Empire Notary LLC. Servicios notariales en el condado de Catawba y areas cercanas.',
    privacyPolicyLink: 'Politica de Privacidad',
    termsLink: 'Terminos de Servicio',
    cookiePolicyLink: 'Politica de Cookies',
    smsPolicyLink: 'Politica de SMS/Textos',
    legalDisclaimerLink: 'Aviso Legal',
    refundPolicyLink: 'Cancelacion/Reembolso',
    namePlaceholder: 'Su nombre completo',
    emailPlaceholder: 'usted@ejemplo.com',
    phonePlaceholder: '(123) 456-7890',
    phoneRequired: 'Ingrese su número de teléfono.',
    phoneIncomplete: 'Ingrese un número de teléfono completo de 10 dígitos.',
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

const setFormStatus = (form, messageKey = '', type = '') => {
  const status = form.querySelector('[data-form-status]');

  if (!status) {
    return;
  }

  if (form === contactForm) {
    status.dataset.i18n = messageKey;
  }
  status.textContent = translations[currentLanguage][messageKey] ?? '';
  status.classList.remove('is-success', 'is-error');

  if (type) {
    status.classList.add(`is-${type}`);
  }
};

const submitFormspreeForm = async (form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent;
  const isServiceRequest = form === contactForm;

  setFormStatus(form);
  submitButton?.setAttribute('disabled', '');

  if (submitButton) {
    if (isServiceRequest) {
      submitButton.dataset.i18n = 'requestSending';
      submitButton.textContent = translations[currentLanguage].requestSending;
    } else {
      submitButton.textContent = 'Sending...';
    }
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
    setFormStatus(form, isServiceRequest ? 'requestSuccess' : 'formSuccess', 'success');
  } catch (error) {
    setFormStatus(form, isServiceRequest ? 'requestError' : 'formError', 'error');
  } finally {
    submitButton?.removeAttribute('disabled');

    if (isServiceRequest && submitButton) {
      submitButton.dataset.i18n = 'formSubmit';
      submitButton.textContent = translations[currentLanguage].formSubmit;
    } else if (submitButton && originalButtonText) {
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

const apostilleForm = document.querySelector('.apostille-form');
if (apostilleForm) {
  const country = new URLSearchParams(window.location.search).get('country');
  const destinationInput = apostilleForm.querySelector('#apostille-destination');
  if (country && destinationInput) {
    destinationInput.value = country.trim().slice(0, 200);
  }
}

apostilleForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!apostilleForm.checkValidity()) {
    apostilleForm.reportValidity();
    return;
  }
  submitFormspreeForm(apostilleForm);
});

setLanguage(currentLanguage);
openOfferModal();
