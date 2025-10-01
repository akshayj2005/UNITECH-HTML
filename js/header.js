// Header Component JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeActiveLink();
    initializeScrollEffect();
});

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('hidden');
            
            if (isOpen) {
                // Open menu
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'true');
                
                // Add smooth animation
                setTimeout(() => {
                    mobileMenu.style.transform = 'translateY(0)';
                    mobileMenu.style.opacity = '1';
                }, 10);
            } else {
                // Close menu
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }, 300);
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.style.transform = 'translateY(-100%)';
                    mobileMenu.style.opacity = '0';
                    
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenuButton.setAttribute('aria-expanded', 'false');
                    }, 300);
                }
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }, 300);
            }
        });
    }
}

// Initialize active link highlighting
function initializeActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'home.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize scroll effect for navbar
function initializeScrollEffect() {
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.addEventListener('click', function(event) {
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Initialize smooth scrolling
initializeSmoothScrolling();

// Add loading state for navigation links
function addLoadingState() {
    const navLinks = document.querySelectorAll('a[href$=".html"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Only add loading state for internal links
            if (this.hostname === window.location.hostname) {
                const originalText = this.textContent;
                this.textContent = 'Loading...';
                this.style.pointerEvents = 'none';
                
                // Reset after a short delay (in case page doesn't load)
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });
}

// Initialize loading states
addLoadingState();

// Add keyboard navigation support
function initializeKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    let currentIndex = -1;
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            // Let default tab behavior handle focus
            return;
        }
        
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            currentIndex = Math.min(currentIndex + 1, navLinks.length - 1);
            navLinks[currentIndex].focus();
        }
        
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            currentIndex = Math.max(currentIndex - 1, 0);
            navLinks[currentIndex].focus();
        }
        
        if (event.key === 'Home') {
            event.preventDefault();
            currentIndex = 0;
            navLinks[currentIndex].focus();
        }
        
        if (event.key === 'End') {
            event.preventDefault();
            currentIndex = navLinks.length - 1;
            navLinks[currentIndex].focus();
        }
    });
}

// Initialize keyboard navigation
initializeKeyboardNavigation();

// Add focus management for mobile menu
function initializeFocusManagement() {
    const mobileMenuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (!mobileMenu.classList.contains('hidden')) {
                // Focus first link when menu opens
                setTimeout(() => {
                    if (mobileMenuLinks.length > 0) {
                        mobileMenuLinks[0].focus();
                    }
                }, 100);
            }
        });
        
        // Trap focus within mobile menu when open
        mobileMenu.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                const firstLink = mobileMenuLinks[0];
                const lastLink = mobileMenuLinks[mobileMenuLinks.length - 1];
                
                if (event.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstLink) {
                        event.preventDefault();
                        mobileMenuButton.focus();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastLink) {
                        event.preventDefault();
                        mobileMenuButton.focus();
                    }
                }
            }
        });
    }
}

// Initialize focus management
initializeFocusManagement();

// Add resize handler to close mobile menu on desktop
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuButton = document.getElementById('mobileMenuBtn');
    
    if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
});

// Export functions for external use
window.HeaderComponent = {
    initializeMobileMenu,
    initializeActiveLink,
    initializeScrollEffect,
    initializeSmoothScrolling,
    addLoadingState,
    initializeKeyboardNavigation,
    initializeFocusManagement
};
