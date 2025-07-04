// This file contains all the logic to power the smart website template.
// It reads from config.js and populates the HTML pages.

function populateContent() {
    if (typeof config === 'undefined' || typeof config !== 'object') {
        console.error("FATAL ERROR: The 'config' object from config.js is missing or invalid.");
        document.body.innerHTML = `<div style="font-family: sans-serif; padding: 2rem; text-align: center;"><h1 style="color: #d9534f;">Website Configuration Error</h1><p>The main settings file, <strong>config.js</strong>, could not be loaded.</p><p>Please check the following:</p><ul style="text-align: left; display: inline-block; margin-top: 1rem;"><li>Is the file named exactly <strong>config.js</strong> (all lowercase)?</li><li>Is it in the same main folder as your HTML files?</li><li>Check the browser's developer console (F12) for a <strong>404 Not Found</strong> error.</li></ul></div>`;
        return;
    }

    const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    const setHTML = (id, value) => { const el = document.getElementById(id); if (el) el.innerHTML = value; };
    const setHref = (id, value) => { const el = document.getElementById(id); if (el) el.href = value; };
    const setSrc = (id, value) => { const el = document.getElementById(id); if (el) el.src = value; };

    // --- Global Elements (apply to all pages) ---
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        if (document.querySelector('#home')) { pageTitle.textContent = config.content.home.title; }
        else if (document.body.innerHTML.includes('Privacy Policy')) { pageTitle.textContent = `Privacy Policy - ${config.company.name}`; }
        else if (document.body.innerHTML.includes('Terms of Service')) { pageTitle.textContent = `Terms of Service - ${config.company.name}`; }
    }
    
    setHref('favicon', config.company.favicon);
    const appleTouchIcon = document.getElementById('apple-touch-icon');
    if(appleTouchIcon) appleTouchIcon.href = config.company.logo;

    document.querySelectorAll('#header-logo').forEach(el => setSrc(el.id, config.company.logo));
    document.querySelectorAll('#header-company-name').forEach(el => setText(el.id, config.company.name));
    document.querySelectorAll('#header-company-subtitle').forEach(el => setText(el.id, config.company.subtitle));
    document.querySelectorAll('.dynamic-company-name').forEach(el => el.textContent = config.company.name);
    
    setText('contact-phone', config.contact.phone);
    setText('contact-email', config.contact.email);
    
    document.querySelectorAll('#footer-company-name').forEach(el => setText(el.id, config.company.name));
    document.querySelectorAll('#footer-company-subtitle').forEach(el => setText(el.id, config.company.subtitle));
    setText('footer-copyright', `© ${config.legal.copyrightYear} ${config.company.name}. All Rights Reserved.`);
    
    const socialContainer = document.getElementById('social-links-container');
    if(socialContainer) {
        socialContainer.innerHTML = '';
        config.socialLinks.forEach(link => { socialContainer.innerHTML += `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white" title="${link.name}">${link.icon}</a>`; });
    }

    // --- INDEX.HTML SPECIFIC ELEMENTS ---
    const headerPhoneLink = document.getElementById('header-phone-link');
    if (headerPhoneLink) {
        headerPhoneLink.href = `tel:${config.contact.phone}`;
        headerPhoneLink.textContent = `Call ${config.contact.phone}`;
    }
    const mobilePhoneLink = document.getElementById('mobile-phone-link');
    if (mobilePhoneLink) {
        mobilePhoneLink.href = `tel:${config.contact.phone}`;
        mobilePhoneLink.textContent = `Call ${config.contact.phone}`;
    }
    setHTML('home-headline', config.content.home.headline);
    setText('home-subheadline', config.content.home.subheadline);
    setText('home-description', config.content.home.description);
    setText('home-cta-button', config.content.home.ctaButton);
    const featuresContainer = document.getElementById('features-section');
    if(featuresContainer) { featuresContainer.innerHTML = ''; config.content.features.forEach(feature => { featuresContainer.innerHTML += `<div class="bg-white p-8 rounded-lg shadow-lg"><div class="bg-blue-100 text-blue-600 rounded-full p-3 inline-block mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="text-xl font-bold text-gray-800 mb-2">${feature.title}</h3><p class="text-gray-600">${feature.description}</p></div>`; }); }
    const videoMain = document.getElementById('video-main'); if(videoMain) videoMain.innerHTML = `<video class="w-full" controls poster="${config.content.videos.main.poster}"><source src="${config.content.videos.main.src}" type="video/mp4"></video><div class="p-4 bg-white"><h3 class="font-bold text-lg text-gray-800">${config.content.videos.main.title}</h3></div>`;
    const videoSide1 = document.getElementById('video-side1'); if(videoSide1) videoSide1.innerHTML = `<img src="${config.content.videos.side1.image}" alt="${config.content.videos.side1.caption}" class="rounded-lg mb-2 w-full h-auto object-cover"><p class="text-gray-600 text-sm">${config.content.videos.side1.caption}</p>`;
    const videoSide2 = document.getElementById('video-side2'); if(videoSide2) videoSide2.innerHTML = `<img src="${config.content.videos.side2.image}" alt="${config.content.videos.side2.caption}" class="rounded-lg mb-2 w-full h-auto object-cover"><p class="text-gray-600 text-sm">${config.content.videos.side2.caption}</p>`;
    const stepsContainer = document.getElementById('how-it-works-steps'); if(stepsContainer) { stepsContainer.innerHTML = ''; config.content.howItWorks.steps.forEach((step, index) => { stepsContainer.innerHTML += `<div class="flex flex-col md:flex-row items-center"><div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8"><div class="flex items-center justify-center w-24 h-24 bg-gray-800 text-white rounded-full text-4xl font-bold shadow-lg">${index + 1}</div></div><div><h3 class="text-2xl font-bold text-gray-800">${step.title}</h3><p class="mt-2 text-gray-600">${step.description}</p></div></div>`; }); }
    const bookingContainer = document.getElementById('booking-widget-container'); if(bookingContainer) { bookingContainer.innerHTML = `<iframe src="${config.booking.iframeSrc}" style="width: 100%; border:none; overflow: hidden;" scrolling="no" id="booking-iframe"></iframe>`; const bookingScript = document.createElement('script'); bookingScript.src = "https://link.msgsndr.com/js/form_embed.js"; bookingScript.type = "text/javascript"; document.body.appendChild(bookingScript); }
    const footerPhoneLink = document.getElementById('footer-phone-link'); if(footerPhoneLink) { footerPhoneLink.href = `tel:${config.contact.phone}`; footerPhoneLink.textContent = config.contact.phone; }
    const footerEmailLink = document.getElementById('footer-email-link'); if(footerEmailLink) { footerEmailLink.href = `mailto:${config.contact.email}`; footerEmailLink.textContent = config.contact.email; }
    const footerSlogan = document.getElementById('footer-slogan'); if(footerSlogan) footerSlogan.textContent = config.company.slogan;
}

function setupEventListeners() {
    const pages = document.querySelectorAll('.page');
    if (pages.length > 0) {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        window.showPage = function(pageId) { if(document.getElementById(pageId)) { pages.forEach(p => p.classList.remove('active')); document.getElementById(pageId).classList.add('active'); mobileMenu.classList.add('hidden'); window.scrollTo(0, 0); } else { window.location.href = `index.html#${pageId}`; } };
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        if (window.location.hash) { const pageId = window.location.hash.substring(1); showPage(pageId); } else { showPage('home'); }
    }
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const submitButton = document.getElementById('submit-button');
        const consentCheckbox = document.getElementById('consent-checkbox');
        const termsCheckbox = document.getElementById('terms-checkbox');
        function validateCheckboxes() { if (consentCheckbox.checked && termsCheckbox.checked) { submitButton.disabled = false; } else { submitButton.disabled = true; } }
        consentCheckbox.addEventListener('change', validateCheckboxes);
        termsCheckbox.addEventListener('change', validateCheckboxes);
        validateCheckboxes();
    }
}

// --- Main Execution ---
document.addEventListener('DOMContentLoaded', () => {
    populateContent();
    setupEventListeners();
});
