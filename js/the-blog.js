// The Blog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeader();
    loadFooter();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize reading progress
    initializeReadingProgress();
    
    // Initialize social sharing
    initializeSocialSharing();
});

// Load header component
function loadHeader() {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
            // Re-initialize header functionality
            initializeHeader();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Fallback header
            document.getElementById('header').innerHTML = `
                <nav class="bg-white shadow-lg">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center">
                                <a href="home.html" class="flex-shrink-0 flex items-center">
                                    <img class="h-8 w-auto" src="public/images/Logo.png" alt="UniTech Logo">
                                    <span class="ml-2 text-xl font-bold text-gray-900">UniTech</span>
                                </a>
                            </div>
                            <div class="hidden md:flex items-center space-x-8">
                                <a href="home.html" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                                <a href="our-products.html" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Products</a>
                                <a href="about.html" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
                                <a href="blogs.html" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Blogs</a>
                                <a href="contact.html" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            `;
        });
}

// Load footer component
function loadFooter() {
    fetch('partials/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback footer
            document.getElementById('footer').innerHTML = `
                <footer class="bg-gray-800 text-white">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div class="text-center">
                            <p>&copy; 2024 UniTech Engineering Works. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            `;
        });
}

// Initialize header functionality
function initializeHeader() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Initialize animations
function initializeAnimations() {
    // Create intersection observer for animations
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('article, section, .related-post');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize reading progress
function initializeReadingProgress() {
    // Create reading progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-full h-1 bg-gray-200 z-50';
    progressBar.innerHTML = '<div class="h-full bg-blue-600 transition-all duration-300 ease-out" style="width: 0%"></div>';
    document.body.appendChild(progressBar);

    const progressFill = progressBar.querySelector('div');

    // Update progress on scroll
    function updateProgress() {
        const article = document.querySelector('article');
        if (!article) return;

        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        const progress = Math.min(
            Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
            1
        );

        progressFill.style.width = `${progress * 100}%`;
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
}

// Initialize social sharing
function initializeSocialSharing() {
    // Add social sharing buttons
    const article = document.querySelector('article');
    if (!article) return;

    const shareButtons = document.createElement('div');
    shareButtons.className = 'fixed right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 hidden lg:block';
    shareButtons.innerHTML = `
        <div class="flex flex-col space-y-3">
            <button onclick="shareOnTwitter()" class="p-2 text-blue-400 hover:bg-blue-50 rounded-full transition-colors" title="Share on Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            </button>
            <button onclick="shareOnLinkedIn()" class="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="Share on LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </button>
            <button onclick="shareOnFacebook()" class="p-2 text-blue-800 hover:bg-blue-50 rounded-full transition-colors" title="Share on Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </button>
            <button onclick="copyLink()" class="p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors" title="Copy Link">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
            </button>
        </div>
    `;

    document.body.appendChild(shareButtons);
}

// Social sharing functions
function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        // Show success message
        const button = event.target.closest('button');
        const originalHTML = button.innerHTML;
        button.innerHTML = '<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy link:', err);
        alert('Failed to copy link to clipboard');
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add table of contents functionality
function generateTableOfContents() {
    const headings = document.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const toc = document.createElement('div');
    toc.className = 'bg-gray-50 rounded-lg p-6 mb-8';
    toc.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3><ul class="space-y-2"></ul>';

    const tocList = toc.querySelector('ul');

    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;

        const li = document.createElement('li');
        const level = heading.tagName === 'H3' ? 'ml-4' : '';
        li.className = level;
        
        li.innerHTML = `<a href="#${id}" class="text-blue-600 hover:text-blue-800 text-sm">${heading.textContent}</a>`;
        tocList.appendChild(li);
    });

    // Insert TOC after the article header
    const article = document.querySelector('article');
    const articleContent = article.querySelector('.p-6, .p-8');
    articleContent.insertBefore(toc, articleContent.firstChild);
}

// Initialize table of contents
document.addEventListener('DOMContentLoaded', function() {
    generateTableOfContents();
});

// Add print functionality
function printArticle() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printArticle();
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
            if (mobileMenuButton) {
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        }
    }
});
