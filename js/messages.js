// Messages Page JavaScript

// Dummy message data
const messages = [
    {
        id: 1,
        full_name: "John Smith",
        company_name: "TechCorp Industries",
        email: "john.smith@techcorp.com",
        phone: "+1-555-0123",
        inquiry: "Sales Inquiry",
        message: "I'm interested in your conveyor systems for our new manufacturing facility. Could you please provide more information about your products and pricing?",
        category: "Sales",
        replied: false,
        date: "2024-03-20",
        time: "10:30 AM"
    },
    {
        id: 2,
        full_name: "Sarah Johnson",
        company_name: "Manufacturing Plus",
        email: "sarah.j@manufacturingplus.com",
        phone: "+1-555-0124",
        inquiry: "Technical Support",
        message: "We're experiencing issues with our existing conveyor system. The belt seems to be slipping and making unusual noises. Can you help us troubleshoot this issue?",
        category: "Support",
        replied: true,
        date: "2024-03-19",
        time: "2:15 PM"
    },
    {
        id: 3,
        full_name: "Michael Brown",
        company_name: "AutoParts Ltd",
        email: "michael.brown@autoparts.com",
        phone: "+1-555-0125",
        inquiry: "Request Quote",
        message: "We need a quote for a complete conveyor system for our automotive parts assembly line. The system should handle parts weighing up to 50kg and have a length of approximately 100 meters.",
        category: "Quote",
        replied: false,
        date: "2024-03-19",
        time: "9:45 AM"
    },
    {
        id: 4,
        full_name: "Emily Davis",
        company_name: "Food Processing Co",
        email: "emily.davis@foodprocessing.com",
        phone: "+1-555-0126",
        inquiry: "Parts & Service",
        message: "We need replacement parts for our pharmaceutical conveyor system. Specifically, we need new rollers and drive belts. Can you provide a parts list and pricing?",
        category: "Parts",
        replied: true,
        date: "2024-03-18",
        time: "4:20 PM"
    },
    {
        id: 5,
        full_name: "David Wilson",
        company_name: "Logistics Solutions",
        email: "david.wilson@logistics.com",
        phone: "+1-555-0127",
        inquiry: "Sales Inquiry",
        message: "We're looking to upgrade our warehouse conveyor system. Our current system is outdated and we need something more efficient. What would you recommend?",
        category: "Sales",
        replied: false,
        date: "2024-03-18",
        time: "11:30 AM"
    },
    {
        id: 6,
        full_name: "Lisa Anderson",
        company_name: "PharmaTech",
        email: "lisa.anderson@pharmatech.com",
        phone: "+1-555-0128",
        inquiry: "Technical Support",
        message: "Our pharmaceutical conveyor system is not meeting the required speed specifications. The system is running 20% slower than expected. Please advise on how to resolve this issue.",
        category: "Support",
        replied: false,
        date: "2024-03-17",
        time: "3:45 PM"
    },
    {
        id: 7,
        full_name: "Robert Taylor",
        company_name: "Heavy Industries",
        email: "robert.taylor@heavyindustries.com",
        phone: "+1-555-0129",
        inquiry: "Request Quote",
        message: "We need a heavy-duty conveyor system for our mining operation. The system should be able to handle materials weighing up to 200kg and operate in harsh environmental conditions.",
        category: "Quote",
        replied: true,
        date: "2024-03-17",
        time: "8:15 AM"
    },
    {
        id: 8,
        full_name: "Jennifer Martinez",
        company_name: "Packaging Solutions",
        email: "jennifer.martinez@packaging.com",
        phone: "+1-555-0130",
        inquiry: "Other",
        message: "We're interested in learning more about your conveyor maintenance services. Do you offer regular maintenance contracts? What would be the cost for a 6-month maintenance plan?",
        category: "Other",
        replied: false,
        date: "2024-03-16",
        time: "1:20 PM"
    }
];

// Current filter and pagination state
let currentFilter = 'all';
let currentPage = 1;
const messagesPerPage = 6;
let filteredMessages = [...messages];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeSearch();
    initializePagination();
    renderMessages();
    updateStats();
    initializeMessageInteractions();
});

// Initialize filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter
            currentFilter = this.id;
            currentPage = 1;
            
            // Filter messages
            filterMessages();
            renderMessages();
            updatePagination();
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            currentPage = 1;
            filterMessages(query);
            renderMessages();
            updatePagination();
        });
    }
}

// Initialize pagination
function initializePagination() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderMessages();
                updatePagination();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderMessages();
                updatePagination();
            }
        });
    }
}

// Filter messages based on current filter and search query
function filterMessages(searchQuery = '') {
    filteredMessages = messages.filter(message => {
        // Apply filter
        let matchesFilter = true;
        switch (currentFilter) {
            case 'today':
                const today = new Date().toISOString().split('T')[0];
                matchesFilter = message.date === today;
                break;
            case 'new':
                matchesFilter = !message.replied;
                break;
            case 'replied':
                matchesFilter = message.replied;
                break;
            case 'yesterday':
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];
                matchesFilter = message.date === yesterdayStr;
                break;
            case 'week':
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                const weekAgoStr = weekAgo.toISOString().split('T')[0];
                matchesFilter = message.date >= weekAgoStr;
                break;
            case 'month':
                const monthAgo = new Date();
                monthAgo.setDate(monthAgo.getDate() - 30);
                const monthAgoStr = monthAgo.toISOString().split('T')[0];
                matchesFilter = message.date >= monthAgoStr;
                break;
            case 'all':
            default:
                matchesFilter = true;
                break;
        }
        
        // Apply search query
        let matchesSearch = true;
        if (searchQuery) {
            matchesSearch = 
                message.full_name.toLowerCase().includes(searchQuery) ||
                message.company_name.toLowerCase().includes(searchQuery) ||
                message.email.toLowerCase().includes(searchQuery) ||
                message.message.toLowerCase().includes(searchQuery) ||
                message.inquiry.toLowerCase().includes(searchQuery);
        }
        
        return matchesFilter && matchesSearch;
    });
}

// Render messages
function renderMessages() {
    const messagesList = document.getElementById('messagesList');
    if (!messagesList) return;
    
    const startIndex = (currentPage - 1) * messagesPerPage;
    const endIndex = startIndex + messagesPerPage;
    const pageMessages = filteredMessages.slice(startIndex, endIndex);
    
    if (pageMessages.length === 0) {
        messagesList.innerHTML = `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                </svg>
                <h3>No messages found</h3>
                <p>Try adjusting your filters or search criteria.</p>
            </div>
        `;
        return;
    }
    
    messagesList.innerHTML = pageMessages.map(message => createMessageCard(message)).join('');
}

// Create message card HTML
function createMessageCard(message) {
    const statusClass = message.replied ? 'replied' : 'new';
    const statusText = message.replied ? 'Replied' : 'New';
    
    return `
        <div class="message-card bg-white rounded-lg shadow border-l-4 border-red-500" data-status="${statusClass}" data-id="${message.id}">
            <div class="p-4 sm:p-6">
                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                    <div class="flex-1">
                        <div class="flex flex-wrap items-center gap-2 mb-3">
                            <span class="status-badge ${statusClass} px-2 py-1 rounded text-xs font-medium">
                                ${statusText}
                            </span>
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                                ${message.category}
                            </span>
                            <span class="text-xs text-gray-500">
                                ${message.date} at ${message.time}
                            </span>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                            <span><strong>Name:</strong> ${message.full_name}</span>
                            <span><strong>Company:</strong> ${message.company_name}</span>
                            <span><strong>Email:</strong> ${message.email}</span>
                            <span><strong>Phone:</strong> ${message.phone}</span>
                        </div>
                        
                        <div class="mb-3">
                            <span class="text-sm text-gray-500"><strong>Type of Inquiry:</strong> ${message.inquiry}</span>
                        </div>
                        
                        <div class="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <p class="text-gray-700 text-sm sm:text-base message-content">
                                ${message.message}
                            </p>
                            ${message.message.length > 100 ? '<button class="expand-btn mt-2">Read more</button>' : ''}
                        </div>
                    </div>
                    
                    <div class="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 lg:ml-4">
                        <button class="reply-btn toggle-reply flex items-center space-x-2 ${message.replied ? 'replied' : ''} px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer" data-id="${message.id}">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            <span>${message.replied ? 'Replied' : 'Reply'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update statistics
function updateStats() {
    const totalMessages = messages.length;
    const newMessages = messages.filter(m => !m.replied).length;
    const repliedMessages = messages.filter(m => m.replied).length;
    
    // Calculate today's messages
    const today = new Date().toISOString().split('T')[0];
    const todayMessages = messages.filter(m => m.date === today).length;
    
    // Update DOM elements
    const totalElement = document.getElementById('totalMessages');
    const newElement = document.getElementById('newMessagesCount');
    const pendingElement = document.getElementById('pendingMessages');
    const todayElement = document.getElementById('todayMessages');
    const repliedElement = document.getElementById('repliedMessages');
    
    if (totalElement) totalElement.textContent = totalMessages;
    if (newElement) newElement.textContent = `${newMessages} New`;
    if (pendingElement) pendingElement.textContent = newMessages;
    if (todayElement) todayElement.textContent = todayMessages;
    if (repliedElement) repliedElement.textContent = repliedMessages;
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);
    const currentPageElement = document.getElementById('currentPage');
    const totalPagesElement = document.getElementById('totalPages');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    if (currentPageElement) currentPageElement.textContent = currentPage;
    if (totalPagesElement) totalPagesElement.textContent = totalPages;
    
    if (prevButton) {
        prevButton.disabled = currentPage === 1;
    }
    
    if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
    }
}

// Initialize message interactions
function initializeMessageInteractions() {
    // Add click handlers for reply buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.toggle-reply')) {
            const button = e.target.closest('.toggle-reply');
            const messageId = button.getAttribute('data-id');
            toggleReplyStatus(messageId, button);
        }
        
        if (e.target.closest('.expand-btn')) {
            const button = e.target.closest('.expand-btn');
            const messageContent = button.closest('.message-content');
            toggleMessageExpansion(messageContent, button);
        }
    });
}

// Toggle reply status
async function toggleReplyStatus(messageId, button) {
    try {
        // Show loading state
        button.disabled = true;
        button.innerHTML = '<span class="loading"></span>';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Find message in data
        const message = messages.find(m => m.id == messageId);
        if (message) {
            message.replied = !message.replied;
            
            // Update button
            button.disabled = false;
            button.classList.toggle('replied');
            button.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span>${message.replied ? 'Replied' : 'Reply'}</span>
            `;
            
            // Update status badge
            const messageCard = button.closest('.message-card');
            const statusBadge = messageCard.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = message.replied ? 'Replied' : 'New';
                statusBadge.className = `status-badge ${message.replied ? 'replied' : 'new'} px-2 py-1 rounded text-xs font-medium`;
            }
            
            // Update stats
            updateStats();
            
            // Show success message
            showAlert('Message status updated successfully!', 'success');
        }
    } catch (error) {
        console.error('Error updating message status:', error);
        showAlert('Failed to update message status. Please try again.', 'error');
        button.disabled = false;
        button.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>Reply</span>
        `;
    }
}

// Toggle message expansion
function toggleMessageExpansion(messageContent, button) {
    const isExpanded = messageContent.classList.contains('expanded');
    
    if (isExpanded) {
        messageContent.classList.remove('expanded');
        button.textContent = 'Read more';
    } else {
        messageContent.classList.add('expanded');
        button.textContent = 'Read less';
    }
}

// Show alert message
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-auto text-current opacity-70 hover:opacity-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    `;
    
    // Insert alert at the top of the main content
    const mainContent = document.querySelector('.max-w-7xl');
    if (mainContent) {
        mainContent.insertBefore(alert, mainContent.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alert.parentElement) {
                alert.remove();
            }
        }, 5000);
    }
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
        console.log('Messages page load time:', loadTime + 'ms');
    });
}
