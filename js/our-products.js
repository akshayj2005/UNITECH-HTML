// Our Products Page JavaScript

// Product data
const products = [
    {
        id: 1,
        name: "PORTABLE TELESCOPIC TRUCK CONVEYER",
        specs: ["length: 20-40 foot", "Product type: Conveyor"],
        link: "https://www.unitechengineeringworks.com/portable-telescopic-truck-conveyer-1792195.html",
        image: "images/product1.png"
    },
    {
        id: 2,
        name: "Pharmaceutical Multi Mill",
        specs: ["Capacity: 50-500 Kg/hr", "Type: Pharmaceutical Multi Mill"],
        link: "https://www.unitechengineeringworks.com/pharmaceutical-multi-mill-432343.html",
        image: "images/product2.png"
    },
    {
        id: 3,
        name: "Vertical Slat Chain Conveyor",
        specs: ["Usage: Freight Elevator cargo Lift", "Type: Elevators"],
        link: "https://www.unitechengineeringworks.com/vertical-slat-chain-conveyor-1792212.html",
        image: "images/product3.png"
    },
    {
        id: 4,
        name: "SS Locker Cabinet",
        specs: ["Thickness: 0.5-1.0 Millimeter (mm)", "Shape: Customized"],
        link: "https://www.unitechengineeringworks.com/ss-locker-cabinet-1379883.html",
        image: "images/product4.png"
    },
    {
        id: 5,
        name: "Chain Conveyor",
        specs: ["Material: Stainless Steel", "Length: 1-10 Foot (ft)"],
        link: "https://www.unitechengineeringworks.com/chain-conveyor-438440.html",
        image: "images/product5.png"
    },
    {
        id: 6,
        name: "Roller Conveyor",
        specs: ["Material Stainless Steel", "Type: Roller Conveyor"],
        link: "https://www.unitechengineeringworks.com/roller-conveyor-438443.html",
        image: "images/product6.png"
    },
    {
        id: 7,
        name: "Gravity Roller Conveyor",
        specs: ["Usage Industrial", "Material Metal"],
        link: "https://www.unitechengineeringworks.com/gravity-roller-conveyor-1379954.html",
        image: "images/product7.png"
    },
    {
        id: 8,
        name: "SS Floor Trolley",
        specs: ["Steel Type: Stainless Steel", "Application: Floor Trolley"],
        link: "https://www.unitechengineeringworks.com/ss-floor-trolley-1379917.html",
        image: "images/product8.png"
    }
];

// Video data
const videos = [
    {
        id: 1,
        title: "Getting Started Guide",
        description: "Complete walkthrough of setup and basic features to get you up and running in minutes",
        type: "youtube",
        url: "https://www.youtube.com/embed/fmd_FpYl_lU?si=4q7ZMXDIlp22Up7B",
        duration: "15 min",
        level: "Beginner",
        category: "Live Demo"
    },
    {
        id: 2,
        title: "Power User Features",
        description: "Unlock advanced capabilities and learn pro tips to maximize your productivity",
        type: "youtube",
        url: "https://www.youtube.com/embed/K3okaOUlQLE?si=hQcbOkqnxTmrhrkw",
        duration: "25 min",
        level: "Advanced",
        category: "Advanced"
    },
    {
        id: 3,
        title: "Customer Transformations",
        description: "Real stories from customers who achieved remarkable results with our products",
        type: "youtube",
        url: "https://www.youtube.com/embed/p-jNSIjw9nU?si=G7bhKkvP2Hj6suk0",
        duration: "20 min",
        level: "Success Stories",
        category: "Success Stories"
    },
    {
        id: 4,
        title: "Foundation Setup",
        description: "Learn the essential setup process and configure your workspace for optimal performance",
        type: "local",
        url: "images/video1.mp4",
        duration: "15 min",
        level: "Beginner",
        category: "Live Demo"
    },
    {
        id: 5,
        title: "Advanced Workflows",
        description: "Discover powerful automation features and create efficient workflows that save hours",
        type: "local",
        url: "images/video2.mp4",
        duration: "25 min",
        level: "Intermediate",
        category: "Live Demo"
    },
    {
        id: 6,
        title: "Pro Tips & Tricks",
        description: "Master advanced techniques and hidden features that professionals use daily",
        type: "local",
        url: "images/video3.mp4",
        duration: "20 min",
        level: "Expert",
        category: "Live Demo"
    },
    {
        id: 7,
        title: "Troubleshooting Guide",
        description: "Quick solutions to common issues and how to get help when you need it",
        type: "local",
        url: "images/video4.mp4",
        duration: "12 min",
        level: "Support",
        category: "Live Demo"
    }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeAnimations();
    initializeProductInteractions();
    initializeVideoInteractions();
    initializeSearch();
    initializeFiltering();
    initializeLazyLoading();
    initializePageMobileMenu();
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
                                <a href="our-products.html" class="text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">Products</a>
                                <a href="about.html" class="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors">About</a>
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
                            <a href="our-products.html" class="text-blue-600 block px-3 py-2 text-base font-medium transition-colors">Products</a>
                            <a href="about.html" class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">About</a>
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

// Initialize mobile menu for pages with static header markup
function initializePageMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
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
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add hover effects to video cards
    const videoCards = document.querySelectorAll('.glass-effect');
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
        });
    });
}

// Initialize product interactions
function initializeProductInteractions() {
    // Add click handlers to product cards: navigate directly to detail page
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            const product = products[index];
            if (product) {
                window.location.href = `product.html?id=${product.id}`;
            }
        });
    });
    
    // Add click handlers to product links
    const productLinks = document.querySelectorAll('.product-card a[href^="https://"], .product-card a[href^="product.html"]');
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            // Track external link clicks
            console.log('External product link clicked:', this.href);
        });
    });
}

// Initialize video interactions
function initializeVideoInteractions() {
    // Add click handlers to video cards
    const videoCards = document.querySelectorAll('.glass-effect');
    videoCards.forEach((card, index) => {
        const video = videos[index];
        if (video) {
            card.addEventListener('click', function(e) {
                // Don't trigger if clicking on iframe or video
                if (e.target.tagName === 'IFRAME' || e.target.tagName === 'VIDEO') return;
                
                openVideoModal(video);
            });
        }
    });
    
    // Add play/pause functionality to local videos
    const localVideos = document.querySelectorAll('video');
    localVideos.forEach(video => {
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    // Add search input
    const mainContent = document.querySelector('main');
    if (mainContent && !document.getElementById('productSearch')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'product-search mb-8';
        searchContainer.innerHTML = `
            <div class="flex justify-center">
                <input type="text" id="productSearch" placeholder="Search products..." 
                       class="search-input">
            </div>
        `;
        mainContent.insertBefore(searchContainer, mainContent.firstChild);
        
        // Add search functionality
        const searchInput = document.getElementById('productSearch');
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            filterProducts(query);
        });
    }
}

// Initialize filtering
function initializeFiltering() {
    // Add filter buttons
    const mainContent = document.querySelector('main');
    if (mainContent && !document.getElementById('productFilter')) {
        const filterContainer = document.createElement('div');
        filterContainer.id = 'productFilter';
        filterContainer.className = 'product-filter mb-8';
        filterContainer.innerHTML = `
            <button class="filter-button active" data-filter="all">All Products</button>
            <button class="filter-button" data-filter="conveyor">Conveyors</button>
            <button class="filter-button" data-filter="mill">Mills</button>
            <button class="filter-button" data-filter="cabinet">Cabinets</button>
            <button class="filter-button" data-filter="trolley">Trolleys</button>
        `;
        mainContent.insertBefore(filterContainer, mainContent.querySelector('section'));
        
        // Add filter functionality
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter products
                const filter = this.dataset.filter;
                filterProductsByCategory(filter);
            });
        });
    }
}

// Initialize lazy loading
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[src^="images/"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.classList.add('lazy-load');
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// Filter products by search query
function filterProducts(query) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        const product = products[index];
        if (product) {
            const matches = product.name.toLowerCase().includes(query) ||
                          product.specs.some(spec => spec.toLowerCase().includes(query));
            
            if (matches || query === '') {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Filter products by category
function filterProductsByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        const product = products[index];
        if (product) {
            let matches = false;
            
            switch (category) {
                case 'all':
                    matches = true;
                    break;
                case 'conveyor':
                    matches = product.name.toLowerCase().includes('conveyor');
                    break;
                case 'mill':
                    matches = product.name.toLowerCase().includes('mill');
                    break;
                case 'cabinet':
                    matches = product.name.toLowerCase().includes('cabinet');
                    break;
                case 'trolley':
                    matches = product.name.toLowerCase().includes('trolley');
                    break;
            }
            
            if (matches) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Open product modal
function openProductModal(product) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('productModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productModal';
        modal.className = 'product-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div id="modalContent"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close functionality
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.id === 'closeModal') {
                modal.classList.remove('active');
            }
        });
    }
    
    // Populate modal content
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-contain rounded-lg">
            </div>
            <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">${product.name}</h2>
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">Specifications:</h3>
                    <ul class="space-y-1">
                        ${product.specs.map(spec => `<li class="text-gray-600">• ${spec}</li>`).join('')}
                    </ul>
                </div>
                <a href="product.html?id=${product.id}" 
                   class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                </a>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
}

// Open video modal
function openVideoModal(video) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('videoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'videoModal';
        modal.className = 'product-modal';
        modal.innerHTML = `
            <div class="modal-content max-w-4xl">
                <button id="closeVideoModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div id="videoModalContent"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close functionality
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.id === 'closeVideoModal') {
                modal.classList.remove('active');
                // Stop video when modal closes
                const video = modal.querySelector('video, iframe');
                if (video) {
                    if (video.tagName === 'VIDEO') {
                        video.pause();
                    } else if (video.tagName === 'IFRAME') {
                        video.src = video.src; // Reset iframe to stop video
                    }
                }
            }
        });
    }
    
    // Populate modal content
    const modalContent = document.getElementById('videoModalContent');
    modalContent.innerHTML = `
        <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">${video.title}</h2>
            <p class="text-gray-600 mb-4">${video.description}</p>
            <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>Duration: ${video.duration}</span>
                <span>Level: ${video.level}</span>
                <span>Category: ${video.category}</span>
            </div>
        </div>
        <div class="video-container">
            ${video.type === 'youtube' ? 
                `<iframe src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>` :
                `<video controls class="w-full h-full object-cover">
                    <source src="${video.url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`
            }
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
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
        
        if (e.key === 'Escape') {
            // Close any open modals
            const modals = document.querySelectorAll('.product-modal.active');
            modals.forEach(modal => modal.classList.remove('active'));
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

// Add error handling for images and videos
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

document.querySelectorAll('video').forEach(video => {
    video.addEventListener('error', function() {
        console.warn('Video failed to load:', this.src);
    });
});

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Products page load time:', loadTime + 'ms');
    });
}
