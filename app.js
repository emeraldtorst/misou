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

    // --- 7. Menu Modals & Tabs ---
    initMenuModals();

    // --- 8. Booking Reservation Wizard ---
    initBookingWizard();
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

// --- 7. Menu Modals & Tabs ---
function initMenuModals() {
    const modal = document.getElementById('menuModal');
    const triggers = document.querySelectorAll('.menu-trigger-btn');
    const closeBtn = document.getElementById('menuCloseBtn');
    const tabs = document.querySelectorAll('.menu-tab-btn');
    const panels = document.querySelectorAll('.menu-panel-content');

    if (!modal || !closeBtn) return;

    const openMenuModal = (menuType) => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        switchTab(menuType);
    };

    const closeMenuModal = () => {
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
            if (panel.id === `menu-${tabId}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    };

    // Event listeners
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const menuType = trigger.getAttribute('data-menu') || 'food';
            openMenuModal(menuType);
        });
    });

    closeBtn.addEventListener('click', closeMenuModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMenuModal();
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Escape key listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeMenuModal();
        }
    });
}

// --- 8. Booking Reservation Wizard ---
function initBookingWizard() {
    const modal = document.getElementById('bookingModal');
    const triggers = document.querySelectorAll('.trigger-booking-modal, #mobileBookBtn');
    const closeBtn = document.getElementById('bookingCloseBtn');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    
    // Steps
    const steps = document.querySelectorAll('.booking-step');
    const stepDots = document.querySelectorAll('.step-dot');
    
    // Buttons
    const nextToStep2 = document.getElementById('nextToStep2');
    const backToStep1 = document.getElementById('backToStep1');
    const submitBtn = document.getElementById('submitBooking');
    
    // Guest Selector Input
    const guestBtns = document.querySelectorAll('.guest-btn');
    const guestsInput = document.getElementById('bookingGuests');

    if (!modal || !closeBtn) return;

    // Reset Booking Wizard
    const resetWizard = () => {
        steps.forEach((step, idx) => {
            if (idx === 0) step.classList.add('active');
            else step.classList.remove('active');
        });
        
        stepDots.forEach((dot, idx) => {
            if (idx === 0) dot.classList.add('active');
            else dot.classList.remove('active');
        });

        const form = document.getElementById('bookingForm');
        if (form) form.reset();
        
        // Reset Guests input
        guestBtns.forEach((btn, idx) => {
            if (idx === 0) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        if (guestsInput) guestsInput.value = '2';
    };

    const openBookingModal = () => {
        resetWizard();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeBookingModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const goToStep = (stepNumber) => {
        steps.forEach((step, idx) => {
            if (idx === (stepNumber - 1)) step.classList.add('active');
            else step.classList.remove('active');
        });

        stepDots.forEach((dot, idx) => {
            if (idx === (stepNumber - 1)) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    };

    // Listeners for triggers
    triggers.forEach(trig => {
        trig.addEventListener('click', openBookingModal);
    });

    closeBtn.addEventListener('click', closeBookingModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeBookingModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBookingModal();
        }
    });

    // Guest picker buttons inside wizard
    guestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            guestBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            guestsInput.value = btn.getAttribute('data-value');
        });
    });

    // Step 1 -> Step 2
    if (nextToStep2) {
        nextToStep2.addEventListener('click', () => {
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            
            if (!date || !time) {
                alert('Please select date and time before continuing.');
                return;
            }
            goToStep(2);
        });
    }

    // Step 2 -> Step 1 (Back)
    if (backToStep1) {
        backToStep1.addEventListener('click', () => {
            goToStep(1);
        });
    }

    // Step 2 -> Step 3 (Submit Booking)
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const name = document.getElementById('bookingName').value;
            const phone = document.getElementById('bookingPhone').value;
            const email = document.getElementById('bookingEmail').value;

            if (!name || !phone || !email) {
                alert('Please fill out all contact details to complete the booking.');
                return;
            }

            // Generate a random high-end booking ID
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
            let bookingCode = 'MU-';
            for (let i = 0; i < 4; i++) {
                bookingCode += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            bookingCode += '-' + chars.charAt(Math.floor(Math.random() * chars.length));

            const rawDate = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const guests = guestsInput.value;

            // Formatted Date
            const dateObj = new Date(rawDate);
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const formattedDate = dateObj.toLocaleDateString('en-US', options);

            // Populate Success screen
            const confirmIdEl = document.getElementById('confirmId');
            const confirmDateTimeEl = document.getElementById('confirmDateTime');
            const confirmPartyEl = document.getElementById('confirmParty');

            if (confirmIdEl) confirmIdEl.textContent = bookingCode;
            if (confirmDateTimeEl) confirmDateTimeEl.textContent = `${formattedDate} at ${time}`;
            if (confirmPartyEl) confirmPartyEl.textContent = `${guests} Guests`;

            goToStep(3);
        });
    }

    // Escape key listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeBookingModal();
        }
    });
}
