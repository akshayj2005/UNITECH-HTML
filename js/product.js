// product.js

const productDataset = [
  {
    id: 1,
    name: "PORTABLE TELESCOPIC TRUCK CONVEYER",
    price: "₹3.50 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "3–4 Weeks",
    paymentTerms: "Cheque, Cash in Advance (CID), Cash Advance (CA)",
    description:
      "Portable Telescopic Truck Conveyors are widely used for loading and unloading bags, cartons, boxes in logistics and warehouses. They are extendable, height-adjustable and built with heavy-duty construction for industrial operations.",
    specs: [
      { label: "Type", value: "Conveyor" },
      { label: "Length Range", value: "20‑40 foot" },
      { label: "Material", value: "Mild Steel / Optional SS" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Capacity", value: "100 kg per foot" },
      { label: "Voltage", value: "220‑440V" },
    ],
    images: ["public/images/product1.png"],
  },
  {
    id: 2,
    name: "Pharmaceutical Multi Mill",
    price: "₹2.20 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "4 Weeks",
    paymentTerms: "Advance 50% + Balance on Delivery",
    description:
      "The Pharmaceutical Multi Mill is designed for fine milling of solid pharmaceuticals. It provides grinding of dry powders using impact and attrition mechanisms, with adjustable size reduction.",
    specs: [
      { label: "Capacity", value: "50‑500 Kg/hr" },
      { label: "Type", value: "Pharmaceutical Multi Mill" },
      { label: "Material", value: "SS 316 / SS 304" },
      { label: "Motor", value: "3‑15 HP" },
      { label: "Voltage", value: "220‑380V" },
    ],
    images: ["public/images/product2.png"],
  },
  {
    id: 3,
    name: "Industrial Mixer Machine",
    price: "₹1.75 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "2–3 Weeks",
    paymentTerms: "Advance Payment",
    description:
      "Heavy-duty industrial mixer suitable for mixing powders, pastes, or granules. Used in chemical, pharmaceutical, and food industries.",
    specs: [
      { label: "Capacity", value: "100–1000 L" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Mixing Type", value: "Ribbon / Paddle" },
      { label: "Power", value: "5–20 HP" },
    ],
    images: ["public/images/product3.png"],
  },
  {
    id: 4,
    name: "Automatic Labeling Machine",
    price: "₹3.10 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "3 Weeks",
    paymentTerms: "50% Advance, 50% on Dispatch",
    description:
      "High-speed automatic labeling machine for round bottles, jars, and containers. Suitable for pharmaceutical and FMCG applications.",
    specs: [
      { label: "Label Speed", value: "100–200 BPM" },
      { label: "Bottle Type", value: "Round" },
      { label: "Control System", value: "PLC Based" },
      { label: "Material", value: "SS 304" },
    ],
    images: ["public/images/product4.png"],
  },
  {
    id: 5,
    name: "Tablet Counting & Filling Machine",
    price: "₹4.50 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "4–5 Weeks",
    paymentTerms: "50% Advance + 50% Before Dispatch",
    description:
      "Accurate tablet counting and bottle filling machine with sensors and automation. Commonly used in pharmaceutical production lines.",
    specs: [
      { label: "Counting Speed", value: "50–100 Bottles/Min" },
      { label: "Tablet Type", value: "All Shapes" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Voltage", value: "220 V" },
    ],
    images: ["public/images/product5.png"],
  },
  {
    id: 6,
    name: "Industrial Drying Oven",
    price: "₹1.90 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "3 Weeks",
    paymentTerms: "Advance Payment Required",
    description:
      "Double-walled construction oven used for drying, curing, or baking applications in pharmaceutical, chemical, and lab industries.",
    specs: [
      { label: "Temperature Range", value: "50°C – 300°C" },
      { label: "Material", value: "Mild Steel / SS 304" },
      { label: "Chamber Volume", value: "Up to 500 L" },
      { label: "Power Supply", value: "230 V, Single Phase" },
    ],
    images: ["public/images/product6.png"],
  },
  {
    id: 7,
    name: "Granule Filling Machine",
    price: "₹2.60 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "2 Weeks",
    paymentTerms: "100% Advance",
    description:
      "Designed to fill free-flowing granules into containers or pouches with high precision. Used in food and pharma sectors.",
    specs: [
      { label: "Filling Capacity", value: "10–500 g" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Automation Grade", value: "Automatic" },
      { label: "Voltage", value: "220 V" },
    ],
    images: ["public/images/product7.png"],
  },
  {
    id: 8,
    name: "Heavy Duty Belt Conveyor",
    price: "₹2.95 Lakh / Unit",
    minOrder: "1 Unit",
    deliveryTime: "3–4 Weeks",
    paymentTerms: "30% Advance + Balance Before Dispatch",
    description:
      "Sturdy belt conveyor system for material handling in warehouses, factories, and assembly lines. Customizable in size and specs.",
    specs: [
      { label: "Belt Width", value: "500–1000 mm" },
      { label: "Material", value: "Mild Steel / SS" },
      { label: "Speed", value: "Adjustable" },
      { label: "Voltage", value: "220/440 V" },
    ],
    images: ["public/images/product8.png"],
  },
];

// Utility function to get query parameter by name
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Render product details page
function renderProduct(product) {
  if (!product) {
    const hero = document.getElementById("product-hero");
    if (hero)
      hero.innerHTML = `<div class="p-6"><a href="our-products.html" class="back-link">← Back to Products</a><p class="mt-4 text-red-600">Product not found.</p></div>`;
    return;
  }

  // Set document title
  document.title = `${product.name} — UniTech Engineering Works`;

  // Update meta description for SEO
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const descText = `Explore specifications, price, and details for ${product.name} by UniTech Engineering Works.`;
    metaDesc.setAttribute("content", descText);
  }

  // Render summary section (hero image, title, price, etc.)
  const summary = document.getElementById("product-summary");
  if (summary) {
    const heroImg = product.images && product.images.length > 0 ? product.images[0] : "";
    summary.innerHTML = `
      <div class="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
        <img src="${heroImg}" alt="${product.name}" class="w-full h-80 object-contain">
      </div>
      <div>
        <h1 class="product-title"><strong>${product.name}</strong></h1>
        <p class="product-subtitle">${product.description.substring(0, 120)}…</p>
        <div class="price-moq-box">
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Minimum Order Quantity:</strong> ${product.minOrder}</p>
          <p><strong>Delivery Time:</strong> ${product.deliveryTime}</p>
          <p><strong>Payment Terms:</strong> ${product.paymentTerms}</p>
        </div>
        <div class="mt-6 flex gap-3">
          <a href="contact.html" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Enquire Now</a>
          <a href="tel:+9108045801424" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">Call Us</a>
        </div>
      </div>
    `;
  }

  // Render product gallery (only images in dataset)
  const gallery = document.getElementById("product-gallery");
  if (gallery) {
    gallery.innerHTML = `
      <h2 class="product-section-heading">Gallery</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        ${product.images
          .map(
            (img) => `
          <div class="rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
            <img src="${img}" alt="${product.name}" class="w-full h-72 object-contain">
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  // Render description
  const description = document.getElementById("product-description");
  if (description) {
    description.innerHTML = `
      <h2 class="product-section-heading">Product Description</h2>
      <p class="text-gray-700 leading-relaxed">${product.description}</p>
    `;
  }

  // Render specifications table
  const specsEl = document.getElementById("product-specs");
  if (specsEl) {
    specsEl.innerHTML = `
      <h2 class="product-section-heading">Specifications</h2>
      <table class="specs-table">
        <tbody>
          ${product.specs
            .map(
              (s) => `
            <tr>
              <th>${s.label}</th>
              <td>${s.value}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  // Render enquiry & social share section
  const cta = document.getElementById("product-cta");
  if (cta) {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(product.name);
    cta.innerHTML = `
      <h2 class="product-section-heading">Enquiry</h2>
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

  // Render related products (other products except current)
  const related = document.getElementById("related-products");
  if (related) {
    const others = productDataset.filter((p) => p.id !== product.id).slice(0, 4);
    related.innerHTML = `
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${others
          .map(
            (o) => `
          <a class="glass-effect rounded-2xl p-4 block" href="product.html?id=${o.id}">
            <div class="h-36 flex items-center justify-center bg-white rounded-xl overflow-hidden">
              <img src="${o.images && o.images.length > 0 ? o.images[0] : ''}" alt="${o.name}" class="h-full w-full object-contain">
            </div>
            <div class="mt-3 text-sm font-semibold text-gray-900">${o.name}</div>
          </a>
        `
          )
          .join("")}
      </div>
    `;
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const idParam = getQueryParam("id");
  const id = idParam ? parseInt(idParam, 10) : NaN;
  const product = productDataset.find((p) => p.id === id);
  renderProduct(product);

  // Mobile menu toggle (optional, if you have a mobile menu)
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
