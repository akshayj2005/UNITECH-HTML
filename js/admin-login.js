// Admin Login Page JavaScript

// Dummy admin credentials for demonstration
const adminCredentials = {
    username: 'admin',
    password: 'admin123'
};

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFormHandlers();
    initializeAnimations();
    initializeKeyboardNavigation();
    initializeAccessibility();
});

// Initialize form handlers
function initializeFormHandlers() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Add real-time validation
    if (usernameInput) {
        usernameInput.addEventListener('input', validateUsername);
        usernameInput.addEventListener('blur', validateUsername);
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', validatePassword);
        passwordInput.addEventListener('blur', validatePassword);
    }
    
    // Add enter key support
    [usernameInput, passwordInput].forEach(input => {
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    loginForm.dispatchEvent(new Event('submit'));
                }
            });
        }
    });
    
    // Load saved credentials if remember me was checked
    loadSavedCredentials();
}

// Handle login form submission
async function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Validate inputs
    if (!validateForm(username, password)) {
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    try {
        // Simulate API call
        await simulateLogin(username, password);
        
        // Save credentials if remember me is checked
        if (rememberMe) {
            saveCredentials(username);
        } else {
            clearSavedCredentials();
        }
        
        // Show success message
        showSuccessMessage();
        
        // Redirect after delay
        setTimeout(() => {
            // In a real application, redirect to admin dashboard
            console.log('Redirecting to admin dashboard...');
            // window.location.href = 'admin-dashboard.html';
            alert('Login successful! Redirecting to admin dashboard...');
        }, 1500);
        
    } catch (error) {
        showErrorMessage(error.message);
    } finally {
        hideLoadingState();
    }
}

// Validate form inputs
function validateForm(username, password) {
    let isValid = true;
    
    // Validate username
    if (!username) {
        showFieldError('username', 'Username is required');
        isValid = false;
    } else if (username.length < 3) {
        showFieldError('username', 'Username must be at least 3 characters');
        isValid = false;
    } else {
        clearFieldError('username');
    }
    
    // Validate password
    if (!password) {
        showFieldError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showFieldError('password', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearFieldError('password');
    }
    
    return isValid;
}

// Validate username in real-time
function validateUsername() {
    const username = document.getElementById('username').value.trim();
    const field = document.getElementById('username');
    
    if (username.length > 0 && username.length < 3) {
        showFieldError('username', 'Username must be at least 3 characters');
    } else {
        clearFieldError('username');
    }
}

// Validate password in real-time
function validatePassword() {
    const password = document.getElementById('password').value;
    const field = document.getElementById('password');
    
    if (password.length > 0 && password.length < 6) {
        showFieldError('password', 'Password must be at least 6 characters');
    } else {
        clearFieldError('password');
    }
}

// Show field error
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    // Remove existing error
    clearFieldError(fieldId);
    
    // Add error class
    field.classList.add('error');
    formGroup.classList.add('has-error');
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    field.classList.remove('error');
    formGroup.classList.remove('has-error');
    
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Simulate login API call
function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate network delay
            if (Math.random() < 0.1) {
                reject(new Error('Network error. Please try again.'));
                return;
            }
            
            // Check credentials
            if (username === adminCredentials.username && password === adminCredentials.password) {
                resolve({ success: true, message: 'Login successful' });
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1500);
    });
}

// Show loading state
function showLoadingState() {
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    
    loginBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    
    // Add shake animation to form if there are errors
    const form = document.getElementById('loginForm');
    if (form.querySelector('.field-error')) {
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
    }
}

// Hide loading state
function hideLoadingState() {
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    
    loginBtn.disabled = false;
    btnText.classList.remove('hidden');
    btnLoader.classList.add('hidden');
}

// Show error message
function showErrorMessage(message) {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    
    // Hide success message
    successDiv.classList.add('hidden');
    
    // Show error message
    errorDiv.querySelector('.error-text').textContent = message;
    errorDiv.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 5000);
}

// Show success message
function showSuccessMessage() {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    
    // Hide error message
    errorDiv.classList.add('hidden');
    
    // Show success message
    successDiv.classList.remove('hidden');
}

// Save credentials to localStorage
function saveCredentials(username) {
    try {
        localStorage.setItem('adminUsername', username);
        localStorage.setItem('rememberMe', 'true');
    } catch (error) {
        console.warn('Could not save credentials:', error);
    }
}

// Clear saved credentials
function clearSavedCredentials() {
    try {
        localStorage.removeItem('adminUsername');
        localStorage.removeItem('rememberMe');
    } catch (error) {
        console.warn('Could not clear credentials:', error);
    }
}

// Load saved credentials
function loadSavedCredentials() {
    try {
        const rememberMe = localStorage.getItem('rememberMe');
        const savedUsername = localStorage.getItem('adminUsername');
        
        if (rememberMe === 'true' && savedUsername) {
            document.getElementById('username').value = savedUsername;
            document.getElementById('rememberMe').checked = true;
        }
    } catch (error) {
        console.warn('Could not load saved credentials:', error);
    }
}

// Initialize animations
function initializeAnimations() {
    // Add focus animations to inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Add hover effects to login button
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        loginBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
}

// Initialize keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        if (e.key === 'Escape') {
            // Clear any error messages
            document.getElementById('errorMessage').classList.add('hidden');
            document.getElementById('successMessage').classList.add('hidden');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Initialize accessibility features
function initializeAccessibility() {
    // Add ARIA labels
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    if (usernameInput) {
        usernameInput.setAttribute('aria-label', 'Username');
        usernameInput.setAttribute('aria-required', 'true');
    }
    
    if (passwordInput) {
        passwordInput.setAttribute('aria-label', 'Password');
        passwordInput.setAttribute('aria-required', 'true');
    }
    
    // Add live region for error messages
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.setAttribute('aria-live', 'polite');
        errorMessage.setAttribute('role', 'alert');
    }
    
    // Add live region for success messages
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.setAttribute('aria-live', 'polite');
        successMessage.setAttribute('role', 'status');
    }
}

// Add CSS for field errors
const style = document.createElement('style');
style.textContent = `
    .form-group.has-error input {
        border-color: #dc2626;
        background-color: #fef2f2;
    }
    
    .field-error {
        color: #dc2626;
        font-size: 12px;
        margin-top: 4px;
        display: block;
    }
    
    .form-group.focused input {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
`;
document.head.appendChild(style);

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
        console.log('Admin login page load time:', loadTime + 'ms');
    });
}
