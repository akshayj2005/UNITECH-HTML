// About Page JavaScript

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeAnimations();
    initializeCounterAnimation();
    initializeScrollEffects();
});

// Load header component
function loadHeader() {
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center">
                            <img style="width: 60px; height: 60px;" src="images/Logo.png" alt="UniTech Logo">
                            <div class="text-xl sm:text-2xl font-bold text-orange-600 ml-2">UniTech Engineering Works</div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                                <a href="home.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Home</a>
                                <a href="our-products.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Products</a>
                                <a href="about.html" class="text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">About</a>
                                <a href="blogs.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Blogs</a>
                                <a href="contact.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                            </div>
                        </div>
                        <div class="md:hidden">
                            <button id="mobileMenuBtn" class="text-gray-700 hover:text-blue-600 p-2">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                    <div id="mobileMenu" class="md:hidden hidden bg-white border-t border-gray-200">
                        <div class="px-2 pt-2 pb-3 space-y-1">
                            <a href="home.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Home</a>
                            <a href="our-products.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Products</a>
                            <a href="about.html" class="text-blue-600 block px-3 py-2 text-base font-medium transition-colors">About</a>
                            <a href="blogs.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Blogs</a>
                            <a href="contact.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
        
        // Initialize mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

// Load footer component
function loadFooter() {
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="bg-gray-800 text-white py-8 sm:py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div class="sm:col-span-2 lg:col-span-1">
                            <div class="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">UniTech Engineering Works</div>
                            <p class="text-sm sm:text-base text-gray-300">Leading provider of best Converying solutions.</p>
                            <p>Precision. Performance. Reliability</p>
                        </div>
                        <div>
                            <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h3>
                            <ul class="space-y-1 sm:space-y-2 text-gray-300">
                                <li><a href="https://www.unitechengineeringworks.com/portable-telescopic-truck-conveyer-1792195.html" class="text-sm sm:text-base hover:text-white transition-colors">Portable Telescopic Truck Conveyer</a></li>
                                <li><a href="https://www.unitechengineeringworks.com/packing-conveyor-432358.html" class="text-sm sm:text-base hover:text-white transition-colors">Packing Conveyer</a></li>
                                <li><a href="https://www.unitechengineeringworks.com/ss-dustbin-paddle-type-1379913.html" class="text-sm sm:text-base hover:text-white transition-colors">SS Dustbin - Paddle Type</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
                            <ul class="space-y-1 sm:space-y-2 text-gray-300">
                                <li class="text-sm sm:text-base hover:text-white transition-colors">+91 08045801424</li>
                                <li class="text-sm sm:text-base hover:text-white transition-colors">ED-55, Tagore Garden, <br>New Delhi-110027, <br>Delhi, India</li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
                        <p class="text-sm sm:text-base">&copy; 2025 UniTech Engineering Works. All rights reserved. <a style="color: blue;" href="https://www.tradeindia.com/about-us/terms/terms_01.html">Terms of use</a></p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize counter animation
function initializeCounterAnimation() {
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    // Start counter animation when visible
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.scale-in').forEach(el => {
        counterObserver.observe(el);
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('bg-white/95', 'backdrop-blur-sm');
        } else {
            nav.classList.remove('bg-white/95', 'backdrop-blur-sm');
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-bg');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add hover effects to team members
    document.querySelectorAll('.scale-in').forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effects to value cards
    document.querySelectorAll('.text-center').forEach(card => {
        if (card.querySelector('.w-20.h-20')) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
                this.style.borderRadius = '1rem';
                this.style.padding = '1.5rem';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.background = 'transparent';
                this.style.borderRadius = '0';
                this.style.padding = '0';
            });
        }
    });

    // Add hover effects to mission/vision cards
    document.querySelectorAll('.bg-white.rounded-2xl').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add loading animation
function showLoading() {
    document.body.classList.add('loading');
}

function hideLoading() {
    document.body.classList.remove('loading');
}

// Initialize page loading
window.addEventListener('load', function() {
    hideLoading();
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus management for accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Initialize focus management
manageFocus();

// Add error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    });
}
