// Contact Page JavaScript

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeFormHandlers();
    initializeAnimations();
    initializeSocialLinks();
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
                                <a href="about.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">About</a>
                                <a href="blogs.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Blogs</a>
                                <a href="contact.html" class="text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Contact</a>
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
                            <a href="about.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">About</a>
                            <a href="blogs.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Blogs</a>
                            <a href="contact.html" class="text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Contact</a>
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

// Initialize form handlers
function initializeFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Show loading state
            showLoading();
            
            try {
                // Simulate form submission
                await simulateFormSubmission();
                
                // Show success message
                showSuccessMessage();
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                console.error('Form submission error:', error);
                showErrorMessage('Failed to send message. Please try again.');
            } finally {
                hideLoading();
            }
        });
    }
    
    // Add real-time validation
    addRealTimeValidation();
}

// Validate form
function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const formGroup = field.closest('.space-y-6 > div, .grid > div');
        if (formGroup) {
            formGroup.classList.remove('has-error', 'has-success');
            
            if (!field.value.trim()) {
                formGroup.classList.add('has-error');
                isValid = false;
            } else {
                formGroup.classList.add('has-success');
            }
        }
    });
    
    // Validate email
    const emailField = document.getElementById('email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const formGroup = emailField.closest('.space-y-6 > div, .grid > div');
        if (formGroup) {
            formGroup.classList.remove('has-error', 'has-success');
            if (!emailRegex.test(emailField.value)) {
                formGroup.classList.add('has-error');
                isValid = false;
            } else {
                formGroup.classList.add('has-success');
            }
        }
    }
    
    return isValid;
}

// Add real-time validation
function addRealTimeValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error state on input
            const formGroup = this.closest('.space-y-6 > div, .grid > div');
            if (formGroup) {
                formGroup.classList.remove('has-error');
            }
        });
    });
}

// Validate individual field
function validateField(field) {
    const formGroup = field.closest('.space-y-6 > div, .grid > div');
    if (!formGroup) return;
    
    formGroup.classList.remove('has-error', 'has-success');
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        formGroup.classList.add('has-error');
        return false;
    }
    
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            formGroup.classList.add('has-error');
            return false;
        }
    }
    
    if (field.value.trim()) {
        formGroup.classList.add('has-success');
    }
    
    return true;
}

// Simulate form submission
function simulateFormSubmission() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('Simulated network error'));
            }
        }, 2000);
    });
}

// Show loading state
function showLoading() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    form.classList.add('form-submitting');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
}

// Hide loading state
function hideLoading() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    form.classList.remove('form-submitting');
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled = false;
}

// Show success message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.remove('hidden');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
}

// Show error message
function showErrorMessage(message) {
    // Create or update error message
    let errorDiv = document.getElementById('errorMessage');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'errorMessage';
        errorDiv.className = 'bg-red-100 text-red-800 p-4 rounded mb-6 text-center font-semibold';
        document.querySelector('.form-demo').insertBefore(errorDiv, document.getElementById('contactForm'));
    }
    
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide after 5 seconds
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 5000);
}

// Initialize animations
function initializeAnimations() {
    // Add hover effects to contact cards
    const contactCards = document.querySelectorAll('.flex.items-start.space-x-4.p-6.bg-white.rounded-lg');
    contactCards.forEach(card => {
        card.classList.add('contact-card');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to social icons
    const socialIcons = document.querySelectorAll('.w-12.h-12.rounded-xl');
    socialIcons.forEach(icon => {
        icon.classList.add('social-icon');
    });
    
    // Add hover effects to form inputs
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.classList.add('form-input');
    });
    
    // Add hover effects to submit button
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.classList.add('submit-btn');
    }
}

// Initialize social links
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('a[href^="https://"]');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add analytics tracking here if needed
            console.log('Social link clicked:', this.href);
        });
    });
}

// Add smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Add keyboard navigation support
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Add form field focus management
function initializeFocusManagement() {
    const form = document.getElementById('contactForm');
    const focusableElements = form.querySelectorAll('input, textarea, select, button');
    
    focusableElements.forEach((element, index) => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && this.tagName !== 'TEXTAREA') {
                e.preventDefault();
                const nextElement = focusableElements[index + 1];
                if (nextElement) {
                    nextElement.focus();
                } else {
                    // If it's the last element, submit the form
                    form.dispatchEvent(new Event('submit'));
                }
            }
        });
    });
}

// Initialize all functionality
function initializeAll() {
    initializeSmoothScrolling();
    initializeKeyboardNavigation();
    initializeFocusManagement();
}

// Call initialization
initializeAll();

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
        console.log('Contact page load time:', loadTime + 'ms');
    });
}
