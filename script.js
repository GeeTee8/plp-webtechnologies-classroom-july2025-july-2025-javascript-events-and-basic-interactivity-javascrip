// Interactive Web Pages with JavaScript - Main Script File

// Part 1: JavaScript Event Handling and Interactive Elements

let clickCount = 0;
const messageDisplay = document.getElementById('messageDisplay');

// Function to update message display with timestamp
function updateMessage(message) {
    messageDisplay.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong> - ${message}`;
    messageDisplay.style.background = '#4a5568';
    setTimeout(() => {
        messageDisplay.style.background = '#2d3748';
    }, 500);
}

// Wait for DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Click event handler for the click button
    document.getElementById('clickBtn').addEventListener('click', function() {
        clickCount++;
        updateMessage(`🎉 Button clicked ${clickCount} time(s)! Great job!`);
    });
    
    // Mouse hover events for the hover button
    const hoverBtn = document.getElementById('hoverBtn');
    hoverBtn.addEventListener('mouseenter', function() {
        updateMessage('🖱️ Mouse entered the hover button! Hover effects are working!');
        this.style.transform = 'scale(1.05)';
    });
    
    hoverBtn.addEventListener('mouseleave', function() {
        updateMessage('👋 Mouse left the hover button. Thanks for hovering!');
        this.style.transform = 'scale(1)';
    });
    
    // Double click event for the double click button
    document.getElementById('doubleClickBtn').addEventListener('dblclick', function() {
        updateMessage('💥 Double click detected! You\'re mastering JavaScript events!');
        this.style.background = 'linear-gradient(45deg, #ff6b6b, #ffa726)';
        setTimeout(() => {
            this.style.background = 'linear-gradient(45deg, #45b7d1, #96c93d)';
        }, 1000);
    });
    
    // Dark mode toggle functionality
    document.getElementById('darkModeToggle').addEventListener('change', function() {
        if (this.checked) {
            document.body.style.background = 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)';
            updateMessage('🌙 Dark mode activated! Looking sleek!');
        } else {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            updateMessage('☀️ Light mode restored! Bright and beautiful!');
        }
    });
    
    // Keyboard event listener for Ctrl + Enter combination
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && event.ctrlKey) {
            updateMessage('⌨️ Ctrl + Enter pressed! Keyboard events are working!');
        }
    });
    
    // Real-time form validation event listeners
    document.getElementById('fullName').addEventListener('input', validateName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('age').addEventListener('input', validateAge);
    document.getElementById('password').addEventListener('input', validatePassword);
    document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
    
    // Initialize the page with welcome message
    updateMessage('🚀 JavaScript Interactive Web Page loaded successfully! Try all the features above.');
});

// Part 2: Building Interactive Elements

let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');

// Counter functions
function incrementCounter() {
    counter++;
    updateCounter();
    updateMessage(`➕ Counter incremented to ${counter}`);
}

function decrementCounter() {
    counter--;
    updateCounter();
    updateMessage(`➖ Counter decremented to ${counter}`);
}

function resetCounter() {
    counter = 0;
    updateCounter();
    updateMessage('🔄 Counter has been reset to zero!');
}

function updateCounter() {
    counterDisplay.textContent = counter;
    // Change color based on counter value
    if (counter > 0) {
        counterDisplay.style.color = '#48bb78';
    } else if (counter < 0) {
        counterDisplay.style.color = '#e53e3e';
    } else {
        counterDisplay.style.color = '#667eea';
    }
}

// FAQ toggle functionality
function toggleFAQ(faqNumber) {
    const faqAnswer = document.getElementById(`faq${faqNumber}`);
    const isVisible = faqAnswer.style.display === 'block';
    
    // Close all FAQs first
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`faq${i}`).style.display = 'none';
    }
    
    // Toggle the clicked FAQ
    if (!isVisible) {
        faqAnswer.style.display = 'block';
        updateMessage(`📖 FAQ ${faqNumber} opened. Learning in progress!`);
    } else {
        updateMessage(`📚 FAQ ${faqNumber} closed. Knowledge absorbed!`);
    }
}

// Dropdown menu toggle functionality
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    const isVisible = dropdown.style.display === 'block';
    
    if (isVisible) {
        dropdown.style.display = 'none';
        updateMessage('📋 Dropdown menu closed.');
    } else {
        dropdown.style.display = 'block';
        updateMessage('📋 Dropdown menu opened!');
    }
}

// Hidden interface toggle functionality
function toggleHiddenInterface() {
    const hiddenInterface = document.getElementById('hiddenInterface');
    const isVisible = hiddenInterface.style.display === 'block';
    
    if (isVisible) {
        hiddenInterface.style.display = 'none';
        updateMessage('🔒 Secret interface hidden.');
    } else {
        hiddenInterface.style.display = 'block';
        updateMessage('🔓 Secret interface revealed!');
    }
}

// Alert function for hidden interface
function showAlert() {
    alert('🎉 This is a JavaScript alert from the hidden interface!');
    updateMessage('🚨 Alert displayed from hidden interface!');
}

// Part 3: Form Validation with JavaScript

// Individual validation functions for each form field

function validateName() {
    const nameField = document.getElementById('fullName');
    const errorElement = document.getElementById('nameError');
    const name = nameField.value.trim();
    
    // Name must have at least 2 words
    if (name.length < 2 || name.split(' ').length < 2) {
        showError(nameField, errorElement);
        return false;
    } else {
        showSuccess(nameField, errorElement);
        return true;
    }
}

function validateEmail() {
    const emailField = document.getElementById('email');
    const errorElement = document.getElementById('emailError');
    const email = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        showError(emailField, errorElement);
        return false;
    } else {
        showSuccess(emailField, errorElement);
        return true;
    }
}

function validatePhone() {
    const phoneField = document.getElementById('phone');
    const errorElement = document.getElementById('phoneError');
    const phone = phoneField.value.trim();
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    
    // Phone is optional, but if provided, must be valid
    if (phone && !phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        showError(phoneField, errorElement);
        return false;
    } else {
        showSuccess(phoneField, errorElement);
        return true;
    }
}

function validateAge() {
    const ageField = document.getElementById('age');
    const errorElement = document.getElementById('ageError');
    const age = parseInt(ageField.value);
    
    // Age must be between 13 and 120
    if (isNaN(age) || age < 13 || age > 120) {
        showError(ageField, errorElement);
        return false;
    } else {
        showSuccess(ageField, errorElement);
        return true;
    }
}

function validatePassword() {
    const passwordField = document.getElementById('password');
    const errorElement = document.getElementById('passwordError');
    const password = passwordField.value;
    
    // Password must be at least 8 characters with uppercase, lowercase, and number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    if (!passwordRegex.test(password)) {
        showError(passwordField, errorElement);
        return false;
    } else {
        showSuccess(passwordField, errorElement);
        return true;
    }
}

function validateConfirmPassword() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const errorElement = document.getElementById('confirmPasswordError');
    
    if (passwordField.value !== confirmPasswordField.value) {
        showError(confirmPasswordField, errorElement);
        return false;
    } else {
        showSuccess(confirmPasswordField, errorElement);
        return true;
    }
}

// Helper functions for showing validation states
function showError(field, errorElement) {
    field.classList.remove('success');
    field.classList.add('error');
    errorElement.style.display = 'block';
}

function showSuccess(field, errorElement) {
    field.classList.remove('error');
    field.classList.add('success');
    errorElement.style.display = 'none';
}

// Form submission handler
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Validate all fields before submission
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isAgeValid = validateAge();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    const isFormValid = isNameValid && isEmailValid && isPhoneValid && 
                       isAgeValid && isPasswordValid && isConfirmPasswordValid;
    
    if (isFormValid) {
        // Simulate successful form submission
        updateMessage('🎉 Form submitted successfully! All validations passed!');
        alert('✅ Congratulations! Your form has been submitted successfully!\n\nAll JavaScript validations passed perfectly!');
        
        // Optional: Reset form after successful submission
        // document.getElementById('validationForm').reset();
    } else {
        updateMessage('❌ Form submission failed. Please fix the errors above.');
        alert('❌ Please fix all form errors before submitting.');
    }
}

// Additional Interactive Features

// Track total page interactions
let totalInteractions = 0;
document.addEventListener('click', function() {
    totalInteractions++;
    if (totalInteractions % 10 === 0) {
        updateMessage(`🎯 You've made ${totalInteractions} interactions on this page! You're really exploring JavaScript!`);
    }
});

// Window resize event handler
window.addEventListener('resize', function() {
    updateMessage('📱 Window resized! Responsive design in action!');
});

// Page visibility change event handler
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page hidden - user switched tabs');
    } else {
        updateMessage('👋 Welcome back! Page is visible again!');
    }
});

// Mouse movement tracking (optional - for demonstration)
let mouseMovements = 0;
document.addEventListener('mousemove', function() {
    mouseMovements++;
    // Only show message every 100 movements to avoid spam
    if (mouseMovements % 100 === 0) {
        updateMessage(`🖱️ Mouse has moved ${mouseMovements} times! You're active!`);
    }
});