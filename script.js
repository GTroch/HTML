// Track login state
let isLoggedIn = false;
let currentStudent = '';

// Show/Hide Sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Toggle content visibility
function toggleContent(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hidden');
    }
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in production, this would check against a server)
    if (username === 'student' && password === '123') {
        isLoggedIn = true;
        currentStudent = username;
        
        // Update dashboard
        document.getElementById('studentName').textContent = username.charAt(0).toUpperCase() + username.slice(1);
        
        // Show CodeOcean section
        document.getElementById('codeoceanSection').classList.remove('hidden');
        
        // Clear form
        document.getElementById('loginForm').reset();
        
        // Show dashboard
        showSection('dashboard');
        alert('Willkommen, ' + username + '! Du bist jetzt angemeldet.');
    } else {
        alert('Ungültige Anmeldedaten. Versuche es erneut. Demo: Benutzername: student, Passwort: 123');
    }
}

// Handle Logout
function handleLogout() {
    isLoggedIn = false;
    currentStudent = '';
    document.getElementById('codeoceanSection').classList.add('hidden');
    showSection('home');
    alert('Du bist jetzt abgemeldet.');
}

// Initialize - Show home page on load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // Ctrl+H = Home
        if (event.ctrlKey && event.key === 'h') {
            showSection('home');
        }
        // Ctrl+T = Tutorials
        if (event.ctrlKey && event.key === 't') {
            showSection('tutorials');
        }
        // Ctrl+R = Resources
        if (event.ctrlKey && event.key === 'r') {
            showSection('resources');
        }
        // Ctrl+A = Assignments
        if (event.ctrlKey && event.key === 'a') {
            showSection('assignments');
        }
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);
    });
});
