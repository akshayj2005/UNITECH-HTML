// Product Detail Page Script

// Keep dataset aligned with js/our-products.js (ids, names, specs, images)
const productDataset = [
    { id: 1, name: "PORTABLE TELESCOPIC TRUCK CONVEYER", specs: ["length: 20-40 foot", "Product type: Conveyor"], image: "public/images/product1.png" },
    { id: 2, name: "Pharmaceutical Multi Mill", specs: ["Capacity: 50-500 Kg/hr", "Type: Pharmaceutical Multi Mill"], image: "public/images/product2.png" },
    { id: 3, name: "Vertical Slat Chain Conveyor", specs: ["Usage: Freight Elevator cargo Lift", "Type: Elevators"], image: "public/images/product3.png" },
    { id: 4, name: "SS Locker Cabinet", specs: ["Thickness: 0.5-1.0 Millimeter (mm)", "Shape: Customized"], image: "public/images/product4.png" },
    { id: 5, name: "Chain Conveyor", specs: ["Material: Stainless Steel", "Length: 1-10 Foot (ft)"], image: "public/images/product5.png" },
    { id: 6, name: "Roller Conveyor", specs: ["Material Stainless Steel", "Type: Roller Conveyor"], image: "public/images/product6.png" },
    { id: 7, name: "Gravity Roller Conveyor", specs: ["Usage Industrial", "Material Metal"], image: "public/images/product7.png" },
    { id: 8, name: "SS Floor Trolley", specs: ["Steel Type: Stainless Steel", "Application: Floor Trolley"], image: "public/images/product8.png" }
];

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function renderProduct(product) {
    if (!product) {
        const hero = document.getElementById('product-hero');
        if (hero) hero.innerHTML = '<div class="p-6"><a href="our-products.html" class="text-blue-600 hover:underline text-sm">← Back to Products</a><p class="mt-4 text-red-600">Product not found.</p></div>';
        return;
    }

    document.title = `${product.name} - UniTech Engineering Works`;

    // Summary/Hero
    const summary = document.getElementById('product-summary');
    if (summary) {
        summary.innerHTML = `
            <div class="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-contain">
            </div>
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-3">${product.name}</h1>
                <p class="text-gray-600">High performance product engineered for industrial applications.</p>
                <div class="mt-6 flex gap-3">
                    <a href="contact.html" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Enquire Now</a>
                    <a href="tel:+9108045801424" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">Call Us</a>
                </div>
            </div>
        `;
    }

    // Gallery
    const gallery = document.getElementById('product-gallery');
    if (gallery) {
        gallery.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Gallery</h2>
            <div class="grid sm:grid-cols-2 gap-4">
                <div class="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"><img src="${product.image}" alt="${product.name}" class="w-full h-72 object-contain"></div>
                <div class="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"><img src="${product.image}" alt="${product.name}" class="w-full h-72 object-contain"></div>
            </div>
        `;
    }

    // Description
    const description = document.getElementById('product-description');
    if (description) {
        description.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-900 mb-2">Product Description</h2>
            <p class="text-gray-700 leading-relaxed">${product.name} by UniTech Engineering Works is designed for durability and efficiency. Contact us for custom sizes and configurations suited to your workflow.</p>
        `;
    }

    // Specs
    const specs = document.getElementById('product-specs');
    if (specs) {
        specs.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-900 mb-3">Specifications</h2>
            <ul class="space-y-1 text-gray-700">
                ${product.specs.map(s => `<li>• ${s}</li>`).join('')}
            </ul>
        `;
    }

    // CTA
    const cta = document.getElementById('product-cta');
    if (cta) {
        const shareUrl = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(product.name);
        cta.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-900 mb-3">Enquiry</h2>
            <a href="contact.html" class="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Best Price</a>
            <div class="mt-4">
                <h3 class="font-semibold mb-2 text-gray-800">Share</h3>
                <div class="flex gap-2">
                    <a class="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200" href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}" target="_blank">Twitter</a>
                    <a class="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200" href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank">LinkedIn</a>
                    <a class="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200" href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank">Facebook</a>
                </div>
            </div>
        `;
    }

    // Related products
    const related = document.getElementById('related-products');
    if (related) {
        const others = productDataset.filter(p => p.id !== product.id).slice(0, 4);
        related.innerHTML = `
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${others.map(o => `
                    <a class="glass-effect rounded-2xl p-4 block hover:shadow-2xl transition" href="product.html?id=${o.id}">
                        <div class="h-36 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                            <img src="${o.image}" alt="${o.name}" class="h-full w-full object-contain">
                        </div>
                        <div class="mt-3 text-sm font-semibold text-gray-900 line-clamp-2">${o.name}</div>
                    </a>
                `).join('')}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const idParam = getQueryParam('id');
    const id = idParam ? parseInt(idParam, 10) : NaN;
    const product = productDataset.find(p => p.id === id);
    renderProduct(product);

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});


