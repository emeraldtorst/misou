/* ==========================================================================
   MISO·U INTERACTION LOGIC (VANILLA JS)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Page Load Initialization ---
    initPageLoad();

    // --- 2. Custom Cursor ---
    initCustomCursor();

    // --- 3. Scroll-Aware Header ---
    initScrollHeader();

    // --- 4. Mobile Menu Navigation ---
    initMobileNav();

    // --- 5. Parallax Background Scroll ---
    initParallax();

    // --- 6. Scroll Reveals (Intersection Observer) ---
    initScrollReveals();

    // --- 7. Inline Menu Tabs ---
    initInlineMenu();



    // --- 9. Legal Modals (Privacy & Imprint) ---
    initLegalModals();
});

/* ==========================================================================
   MODULES
   ========================================================================== */

// --- 1. Page Load Initialization ---
function initPageLoad() {
    // Add active animation classes on a short delay to allow styling to load
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.animate-fade, .animate-title, .hero-actions');
        animatedElements.forEach(el => {
            el.classList.add('animated');
        });
    }, 150);

    // Set minimum date for booking input to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0
        let dd = today.getDate();

        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;

        dateInput.min = `${yyyy}-${mm}-${dd}`;
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
}

// --- 2. Custom Cursor ---
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isMoving = false;

    // Track mouse move
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMoving) {
            document.body.classList.add('mouse-active');
            isMoving = true;
        }

        // Direct dot positioning
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth lerp (linear interpolation) for outer cursor ring
    function renderCursor() {
        const ease = 0.15; // Smooth lag rate
        
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Detect mouse leaving window
    document.addEventListener('mouseleave', () => {
        document.body.classList.remove('mouse-active');
        isMoving = false;
    });

    // Hover effect triggers
    const hoverables = 'a, button, select, input, textarea, .guest-btn, .nav-link, [role="button"]';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverables)) {
            cursor.classList.add('hovered');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverables)) {
            cursor.classList.remove('hovered');
        }
    });
}

// --- 3. Scroll-Aware Header ---
function initScrollHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// --- 4. Mobile Menu Navigation ---
function initMobileNav() {
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('mobileNav');
    const links = document.querySelectorAll('.mobile-nav-link, #mobileBookBtn');

    if (!toggle || !overlay) return;

    const toggleMenu = () => {
        const isActive = toggle.classList.toggle('active');
        overlay.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    toggle.addEventListener('click', toggleMenu);

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (toggle.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}

// --- 5. Parallax Background Scroll ---
function initParallax() {
    const heroBg = document.querySelector('.hero-parallax-bg');
    const loungeBg = document.querySelector('.lounge-parallax-bg');

    // Performant Scroll Parallax
    let tick = false;
    window.addEventListener('scroll', () => {
        if (!tick) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;

                // 1. Hero Parallax
                if (heroBg && scrolled < window.innerHeight) {
                    heroBg.style.transform = `translateY(${scrolled * 0.35}px) scale(${1 + scrolled * 0.00015})`;
                }

                // 2. Lounge Section Parallax
                if (loungeBg) {
                    const rect = loungeBg.parentElement.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    
                    // Check if parent container is visible inside viewport
                    if (rect.top < viewHeight && rect.bottom > 0) {
                        const relativeScroll = (viewHeight - rect.top) / (viewHeight + rect.height);
                        const translateVal = (relativeScroll - 0.5) * 120; // range of translation
                        loungeBg.style.transform = `translateY(${translateVal}px)`;
                    }
                }
                
                tick = false;
            });
            tick = true;
        }
    }, { passive: true });
}

// --- 6. Scroll Reveals (Intersection Observer) ---
function initScrollReveals() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12 // Trigger when 12% of element is in view
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve once revealed to keep animations clean
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach((el, index) => {
        // Automatically stagger delays for sibling reveal elements if not manually specified
        if (!el.classList.contains('delay-1') && !el.classList.contains('delay-2') && !el.classList.contains('delay-3')) {
            const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('scroll-reveal'));
            const sibIndex = siblings.indexOf(el);
            if (sibIndex > 0 && sibIndex < 4) {
                el.classList.add(`delay-${sibIndex}`);
            }
        }
        revealObserver.observe(el);
    });
}

// --- 7. Inline Menu Tabs ---
function initInlineMenu() {
    const tabs = document.querySelectorAll('.menu-tab-btn');
    const panels = document.querySelectorAll('.menu-panel-content');
    const triggers = document.querySelectorAll('.menu-trigger-btn');
    const menuSection = document.getElementById('menu');

    if (tabs.length === 0) return;

    const switchTab = (tabId) => {
        tabs.forEach(tab => {
            if (tab.getAttribute('data-target') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        panels.forEach(panel => {
            if (panel.id === `menu-${tabId}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    };

    // Tab buttons click listeners
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Outer triggers (View Full Menu, Explore Drinks, View Lunch Menu)
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const targetMenu = trigger.getAttribute('data-menu') || 'food';
            switchTab(targetMenu);
            
            if (menuSection) {
                // Let anchor behavior handle hash scroll, or force smooth scroll if browser overrides
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}



// --- 9. Legal Modals (Privacy & Imprint) ---
function initLegalModals() {
    const modal = document.getElementById('legalModal');
    const imprintLink = document.getElementById('imprintLink');
    const privacyLink = document.getElementById('privacyLink');
    const closeBtn = document.getElementById('legalCloseBtn');
    const tabs = document.querySelectorAll('.legal-tab-btn');
    const panels = document.querySelectorAll('.legal-panel-content');

    if (!modal || !closeBtn) return;

    const openLegalModal = (tabType) => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        switchTab(tabType);
    };

    const closeLegalModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const switchTab = (tabId) => {
        tabs.forEach(tab => {
            if (tab.getAttribute('data-target') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        panels.forEach(panel => {
            if (panel.id === `legal-${tabId}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    };

    if (imprintLink) {
        imprintLink.addEventListener('click', (e) => {
            e.preventDefault();
            openLegalModal('imprint');
        });
    }

    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            openLegalModal('privacy');
        });
    }

    closeBtn.addEventListener('click', closeLegalModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLegalModal();
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            switchTab(target);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLegalModal();
        }
    });
}
