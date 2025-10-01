// Blogs Page JavaScript

// Dummy blog data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Automated Manufacturing: AI Integration in Industrial Machinery",
        category: "Manufacturing",
        date: "March 15, 2024",
        excerpt: "Discover how artificial intelligence is revolutionizing industrial manufacturing processes, improving efficiency, and reducing operational costs across various sectors.",
        image: "blue-gradient",
        featured: true
    },
    {
        id: 2,
        title: "Sustainable Manufacturing Practices",
        category: "Innovation",
        date: "March 12, 2024",
        excerpt: "Learn about eco-friendly approaches to industrial production and how modern machinery supports sustainability goals.",
        image: "green-gradient",
        featured: false
    },
    {
        id: 3,
        title: "Predictive Maintenance Strategies",
        category: "Maintenance",
        date: "March 10, 2024",
        excerpt: "Explore how IoT sensors and data analytics are transforming equipment maintenance schedules and reducing downtime.",
        image: "orange-gradient",
        featured: false
    },
    {
        id: 4,
        title: "Industrial Safety Standards 2024",
        category: "Safety",
        date: "March 8, 2024",
        excerpt: "Updated safety protocols and compliance requirements for modern industrial machinery operations.",
        image: "purple-gradient",
        featured: false
    },
    {
        id: 5,
        title: "Operator Training Programs",
        category: "Training",
        date: "March 5, 2024",
        excerpt: "Best practices for training industrial machinery operators in the digital age with VR and simulation technologies.",
        image: "indigo-gradient",
        featured: false
    }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeAnimations();
    initializeBlogInteractions();
    initializeNewsletterForm();
    initializeSearch();
    initializeFiltering();
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
                                <a href="blogs.html" class="text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Blogs</a>
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
                            <a href="about.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">About</a>
                            <a href="blogs.html" class="text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Blogs</a>
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
    // Add hover effects to blog cards
    const blogCards = document.querySelectorAll('article');
    blogCards.forEach(card => {
        card.classList.add('blog-card');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add hover effects to category tags
    const categoryTags = document.querySelectorAll('span[class*="bg-"]');
    categoryTags.forEach(tag => {
        if (tag.textContent.includes('Manufacturing') || tag.textContent.includes('Innovation') || 
            tag.textContent.includes('Maintenance') || tag.textContent.includes('Safety') || 
            tag.textContent.includes('Training')) {
            tag.classList.add('category-tag');
        }
    });
    
    // Add hover effects to sidebar cards
    const sidebarCards = document.querySelectorAll('aside > div');
    sidebarCards.forEach(card => {
        card.classList.add('sidebar-card');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add hover effects to blog links
    const blogLinks = document.querySelectorAll('a[href="#"]');
    blogLinks.forEach(link => {
        if (link.textContent.includes('Read More')) {
            link.classList.add('blog-link');
        }
    });
}

// Initialize blog interactions
function initializeBlogInteractions() {
    // Add click handlers to blog cards
    const blogCards = document.querySelectorAll('article');
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A') return;
            
            // Simulate blog post opening
            const title = this.querySelector('h4').textContent;
            console.log('Opening blog post:', title);
            
            // You can add navigation to individual blog post here
            // window.location.href = `blog-post.html?id=${this.dataset.id}`;
        });
    });
    
    // Add click handlers to category links
    const categoryLinks = document.querySelectorAll('aside a[href="#"]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim().split(' ')[0];
            filterByCategory(category);
        });
    });
}

// Initialize newsletter form
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                // Simulate newsletter subscription
                showNewsletterMessage('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
}

// Initialize search functionality
function initializeSearch() {
    // Add search input if it doesn't exist
    const mainContent = document.querySelector('main');
    if (mainContent && !document.getElementById('searchInput')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container mb-6';
        searchContainer.innerHTML = `
            <input type="text" id="searchInput" placeholder="Search blog posts..." 
                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <div id="searchResults" class="search-results hidden"></div>
        `;
        mainContent.insertBefore(searchContainer, mainContent.firstChild);
        
        // Add search functionality
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length > 2) {
                const results = blogPosts.filter(post => 
                    post.title.toLowerCase().includes(query) || 
                    post.excerpt.toLowerCase().includes(query) ||
                    post.category.toLowerCase().includes(query)
                );
                displaySearchResults(results);
            } else {
                searchResults.classList.add('hidden');
            }
        });
    }
}

// Display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
        searchResults.innerHTML = results.map(post => `
            <div class="search-result-item" onclick="openBlogPost(${post.id})">
                <h4 class="font-semibold">${post.title}</h4>
                <p class="text-sm text-gray-600">${post.excerpt}</p>
                <span class="text-xs text-gray-500">${post.category} • ${post.date}</span>
            </div>
        `).join('');
    }
    
    searchResults.classList.remove('hidden');
}

// Open blog post (placeholder)
function openBlogPost(id) {
    console.log('Opening blog post with ID:', id);
    // You can add navigation to individual blog post here
    // window.location.href = `blog-post.html?id=${id}`;
}

// Initialize filtering
function initializeFiltering() {
    // Add filter buttons
    const mainContent = document.querySelector('main');
    if (mainContent && !document.getElementById('filterTags')) {
        const filterContainer = document.createElement('div');
        filterContainer.id = 'filterTags';
        filterContainer.className = 'filter-tags mb-6';
        filterContainer.innerHTML = `
            <button class="filter-tag active" data-category="all">All</button>
            <button class="filter-tag" data-category="Manufacturing">Manufacturing</button>
            <button class="filter-tag" data-category="Innovation">Innovation</button>
            <button class="filter-tag" data-category="Maintenance">Maintenance</button>
            <button class="filter-tag" data-category="Safety">Safety</button>
            <button class="filter-tag" data-category="Training">Training</button>
        `;
        mainContent.insertBefore(filterContainer, mainContent.querySelector('.lg\\:col-span-3'));
        
        // Add filter functionality
        const filterTags = document.querySelectorAll('.filter-tag');
        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Update active state
                filterTags.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Filter posts
                const category = this.dataset.category;
                filterByCategory(category);
            });
        });
    }
}

// Filter by category
function filterByCategory(category) {
    const blogCards = document.querySelectorAll('article');
    
    blogCards.forEach(card => {
        const cardCategory = card.querySelector('span[class*="bg-"]').textContent.trim();
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show newsletter message
function showNewsletterMessage(message) {
    // Create or update message element
    let messageDiv = document.getElementById('newsletterMessage');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'newsletterMessage';
        messageDiv.className = 'bg-green-100 text-green-800 p-3 rounded-lg text-sm font-semibold mt-3';
        document.querySelector('form').appendChild(messageDiv);
    }
    
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    
    // Hide after 3 seconds
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 3000);
}

// Add smooth scrolling
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

// Add keyboard navigation
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

// Initialize all functionality
function initializeAll() {
    initializeSmoothScrolling();
    initializeKeyboardNavigation();
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
        console.log('Blogs page load time:', loadTime + 'ms');
    });
}
