// Footer Component JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeFooterAnimations();
    initializeFooterLinks();
    initializeScrollToTop();
    initializeNewsletterSignup();
});

// Initialize footer animations
function initializeFooterAnimations() {
    // Create intersection observer for footer animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe footer sections for animation
    const footerSections = document.querySelectorAll('footer > div > div > div');
    footerSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        observer.observe(section);
    });
}

// Initialize footer links with analytics tracking
function initializeFooterLinks() {
    const footerLinks = document.querySelectorAll('footer a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Track external link clicks
            if (this.hostname !== window.location.hostname) {
                trackExternalLinkClick(this.href, this.textContent);
            }
            
            // Add loading state for internal links
            if (this.hostname === window.location.hostname) {
                addLoadingState(this);
            }
        });
    });
}

// Track external link clicks (placeholder for analytics)
function trackExternalLinkClick(url, linkText) {
    // This would integrate with your analytics service
    console.log('External link clicked:', { url, linkText, timestamp: new Date() });
    
    // Example: Google Analytics 4
    // gtag('event', 'click', {
    //     event_category: 'footer',
    //     event_label: linkText,
    //     value: url
    // });
}

// Add loading state to links
function addLoadingState(link) {
    const originalText = link.textContent;
    link.textContent = 'Loading...';
    link.style.pointerEvents = 'none';
    
    // Reset after timeout
    setTimeout(() => {
        link.textContent = originalText;
        link.style.pointerEvents = 'auto';
    }, 2000);
}

// Initialize scroll to top functionality
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
    `;
    scrollToTopButton.className = 'fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none z-50';
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollToTopButton.title = 'Scroll to top';
    
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.pointerEvents = 'auto';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.pointerEvents = 'none';
        }
    });
    
    // Scroll to top on click
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize newsletter signup (if present)
function initializeNewsletterSignup() {
    const newsletterForm = document.querySelector('footer form[data-newsletter]');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                subscribeToNewsletter(email);
            }
        });
    }
}

// Newsletter subscription function
function subscribeToNewsletter(email) {
    // This would integrate with your email service
    console.log('Newsletter subscription:', email);
    
    // Show success message
    showNotification('Successfully subscribed to newsletter!', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize social media sharing
function initializeSocialSharing() {
    const shareButtons = document.querySelectorAll('[data-share]');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const platform = this.getAttribute('data-share');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl = '';
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title} ${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Initialize social sharing
initializeSocialSharing();

// Add copyright year update
function updateCopyrightYear() {
    const copyrightElements = document.querySelectorAll('[data-copyright-year]');
    const currentYear = new Date().getFullYear();
    
    copyrightElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Update copyright year
updateCopyrightYear();

// Initialize contact info interactions
function initializeContactInfo() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackContactClick('phone', this.href);
        });
    });
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackContactClick('email', this.href);
        });
    });
}

// Track contact clicks
function trackContactClick(type, value) {
    console.log('Contact clicked:', { type, value, timestamp: new Date() });
    
    // Example: Google Analytics 4
    // gtag('event', 'contact_click', {
    //     event_category: 'footer',
    //     event_label: type,
    //     value: value
    // });
}

// Initialize contact info
initializeContactInfo();

// Add keyboard navigation for footer links
function initializeFooterKeyboardNavigation() {
    const footerLinks = document.querySelectorAll('footer a');
    let currentIndex = -1;
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab' && event.target.closest('footer')) {
            // Let default tab behavior handle focus
            return;
        }
        
        if (event.key === 'ArrowDown' && event.target.closest('footer')) {
            event.preventDefault();
            currentIndex = Math.min(currentIndex + 1, footerLinks.length - 1);
            footerLinks[currentIndex].focus();
        }
        
        if (event.key === 'ArrowUp' && event.target.closest('footer')) {
            event.preventDefault();
            currentIndex = Math.max(currentIndex - 1, 0);
            footerLinks[currentIndex].focus();
        }
    });
}

// Initialize footer keyboard navigation
initializeFooterKeyboardNavigation();

// Export functions for external use
window.FooterComponent = {
    initializeFooterAnimations,
    initializeFooterLinks,
    initializeScrollToTop,
    initializeNewsletterSignup,
    initializeSocialSharing,
    updateCopyrightYear,
    initializeContactInfo,
    initializeFooterKeyboardNavigation
};
