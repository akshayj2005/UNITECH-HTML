// Home Page JavaScript

// Dummy data for customers
const customers = [
    "Standford", "Nestor", "UltraTech Cement", "Cooper",
    "Combitic", "Domino's Pizza", "Unicure", "Patanjali", 
    "Pan", "FDL", "Stella", "Today Tea Limited", 
    "Kaizen", "Staywell", "Bakson's Homeopathy", 
    "Alston Gerrard", "Jiva Ayurveda"
];

// Dummy data for reviews
const reviews = [
    {
        name: "John Smith",
        company: "TechCorp Industries",
        rating: 5,
        experience: "Excellent service and high-quality conveyor systems. Our production efficiency increased by 40% after implementing their solutions."
    },
    {
        name: "Sarah Johnson",
        company: "Manufacturing Plus",
        rating: 5,
        experience: "Outstanding customer support and reliable equipment. Highly recommend for industrial automation needs."
    },
    {
        name: "Michael Brown",
        company: "AutoParts Ltd",
        rating: 4,
        experience: "Great products with excellent durability. The installation team was professional and efficient."
    },
    {
        name: "Emily Davis",
        company: "Food Processing Co",
        rating: 5,
        experience: "Perfect solution for our food processing line. Clean, efficient, and meets all safety standards."
    },
    {
        name: "David Wilson",
        company: "Logistics Solutions",
        rating: 4,
        experience: "Reliable conveyor systems that have significantly improved our warehouse operations."
    },
    {
        name: "Lisa Anderson",
        company: "PharmaTech",
        rating: 5,
        experience: "Exceptional quality and precision. Their pharmaceutical-grade conveyors exceed our expectations."
    }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    populateCustomers();
    populateReviews();
    initializeStarRating();
    initializeReviewsCarousel();
    initializeCounterAnimation();
    initializeFormHandlers();
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

// Populate customers section
function populateCustomers() {
    const container = document.getElementById('customers-container');
    if (container) {
        // Create two sets of customers for seamless scrolling
        for (let repeat = 0; repeat < 2; repeat++) {
            customers.forEach(name => {
                const customerDiv = document.createElement('div');
                customerDiv.className = 'customer-card';
                customerDiv.innerHTML = `<div class="customer-name">${name}</div>`;
                container.appendChild(customerDiv);
            });
        }
    }
}

// Populate reviews section
function populateReviews() {
    const mobileContainer = document.getElementById('mobileReviewsContainer');
    const desktopContainer = document.getElementById('reviewsContainer');
    
    if (mobileContainer) {
        mobileContainer.innerHTML = reviews.map(review => createReviewCard(review)).join('');
    }
    
    if (desktopContainer) {
        desktopContainer.innerHTML = reviews.map(review => createReviewCard(review)).join('');
    }
}

// Create review card HTML
function createReviewCard(review) {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return `
        <div class="review-card p-4 sm:p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-3 sm:mb-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 sm:mr-4 flex-shrink-0">
                    <span class="text-sm sm:text-base">${review.name.charAt(0)}</span>
                </div>
                <div class="min-w-0">
                    <h4 class="font-bold text-gray-900 text-sm sm:text-base truncate">${review.name}</h4>
                    <p class="text-xs sm:text-sm text-gray-600 truncate">${review.company}</p>
                </div>
            </div>
            <div class="flex mb-2 sm:mb-3">
                ${stars.split('').map(star => 
                    `<span class="text-yellow-400 text-sm">${star}</span>`
                ).join('')}
            </div>
            <p class="text-gray-700 text-sm sm:text-base">${review.experience}</p>
        </div>
    `;
}

// Initialize star rating system
function initializeStarRating() {
    let selectedRating = 0;
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = parseInt(this.dataset.rating);
            updateStars();
        });

        star.addEventListener('mouseover', function () {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating);
        });
    });

    document.getElementById('starRating').addEventListener('mouseleave', function () {
        updateStars();
    });

    function updateStars() {
        stars.forEach((star, index) => {
            if (index < selectedRating) {
                star.classList.remove('text-gray-300');
                star.classList.add('text-yellow-400');
            } else {
                star.classList.remove('text-yellow-400');
                star.classList.add('text-gray-300');
            }
        });
    }

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('text-gray-300');
                star.classList.add('text-yellow-400');
            } else {
                star.classList.remove('text-yellow-400');
                star.classList.add('text-gray-300');
            }
        });
    }
}

// Initialize reviews carousel
function initializeReviewsCarousel() {
    let currentSlide = 0;
    let totalSlides = 1;
    let reviewsData = [];

    function createReviewSlides() {
        const carousel = document.getElementById('reviewsCarousel');
        const dotsContainer = document.getElementById('dotsContainer');

        if (!carousel || !dotsContainer) return;

        // Clear existing content
        carousel.innerHTML = '';
        dotsContainer.innerHTML = '';

        // Calculate reviews per slide based on screen size
        let reviewsPerSlide;
        if (window.innerWidth < 640) {
            reviewsPerSlide = 1; // Mobile: 1 review per slide
        } else if (window.innerWidth < 1024) {
            reviewsPerSlide = 2; // Tablet: 2 reviews per slide
        } else if (window.innerWidth < 1280) {
            reviewsPerSlide = 3; // Laptop: 3 reviews per slide
        } else {
            reviewsPerSlide = 4; // Desktop: 4 reviews per slide
        }

        totalSlides = Math.ceil(reviewsData.length / reviewsPerSlide);

        // Create slides
        for (let i = 0; i < totalSlides; i++) {
            const slide = document.createElement('div');
            slide.className = 'w-full flex-shrink-0';

            const grid = document.createElement('div');
            // Mobile gets single column, others get responsive grid
            if (window.innerWidth < 640) {
                grid.className = 'flex justify-center';
            } else {
                grid.className = 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6';
            }

            // Add reviews per slide
            for (let j = 0; j < reviewsPerSlide; j++) {
                const reviewIndex = i * reviewsPerSlide + j;
                if (reviewIndex < reviewsData.length) {
                    const reviewClone = reviewsData[reviewIndex].cloneNode(true);
                    // For mobile, ensure proper width
                    if (window.innerWidth < 640) {
                        reviewClone.className = reviewClone.className + ' w-full max-w-sm';
                    }
                    grid.appendChild(reviewClone);
                }
            }

            slide.appendChild(grid);
            carousel.appendChild(slide);

            // Create dot indicator
            const dot = document.createElement('button');
            dot.className = `dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'}`;
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const carousel = document.getElementById('reviewsCarousel');
        if (carousel) {
            carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-blue-600');
            } else {
                dot.classList.remove('bg-blue-600');
                dot.classList.add('bg-gray-300');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    // Initialize carousel with sample reviews
    const initialReviews = document.querySelectorAll('#reviewsContainer .review-card');
    reviewsData = Array.from(initialReviews);

    if (reviewsData.length > 0) {
        createReviewSlides();

        // Add event listeners for navigation
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    }

    // Handle window resize for carousel
    window.addEventListener('resize', function () {
        if (reviewsData.length > 0) {
            createReviewSlides();
            goToSlide(0);
        }
    });
}

// Initialize counter animation
function initializeCounterAnimation() {
    function animateCounter(element, target, suffix = '') {
        let current = 0;
        const increment = target / 60; // Adjust speed by changing divisor
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 25);
    }

    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                const counters = document.querySelectorAll('[data-target]');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    const suffix = counter.textContent.includes('%') ? '%' : '+';
                    animateCounter(counter, target, suffix);
                });
            }
        });
    }, observerOptions);

    // Start observing the stats section
    const statsSection = document.querySelector('.grid.grid-cols-2.gap-4.sm\\:gap-6.text-center');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Initialize form handlers
function initializeFormHandlers() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = document.getElementById('reviewerName').value;
            const company = document.getElementById('reviewerCompany').value;
            const reviewText = document.getElementById('reviewText').value;
            const selectedRating = document.querySelectorAll('.star').length - document.querySelectorAll('.star.text-gray-300').length;

            if (selectedRating === 0) {
                alert('Please select a rating!');
                return;
            }

            // Simulate form submission
            try {
                // Show loading state
                const submitBtn = reviewForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                alert('Thank you for your review! It has been posted successfully.');
                reviewForm.reset();
                
                // Reset star rating
                document.querySelectorAll('.star').forEach(star => {
                    star.classList.remove('text-yellow-400');
                    star.classList.add('text-gray-300');
                });

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

            } catch (err) {
                alert('Error submitting review. Please try again.');
                const submitBtn = reviewForm.querySelector('button[type="submit"]');
                submitBtn.textContent = 'Submit Review';
                submitBtn.disabled = false;
            }
        });
    }

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
}
