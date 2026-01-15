// js/script.js
// Menu mobile (hamburger)
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        
        // Actualizar enlace activo
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Actualizar enlace activo al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});

// Animación simple al scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observar elementos para animación
const elementsToAnimate = document.querySelectorAll('.service-card, .gallery-item, .value-item');
elementsToAnimate.forEach(el => {
    observer.observe(el);
});

// Validación del formulario
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Expresiones regulares para validación
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para mostrar errores
function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}

// Función para limpiar errores
function clearError(element) {
    element.textContent = '';
    element.style.display = 'none';
}

// Validar nombre
nameInput.addEventListener('input', () => {
    if (!nameRegex.test(nameInput.value.trim())) {
        showError(nameError, 'El nombre debe tener entre 2 y 50 caracteres (solo letras y espacios).');
    } else {
        clearError(nameError);
    }
});

// Validar email
emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailError, 'Por favor, introduce un email válido.');
    } else {
        clearError(emailError);
    }
});

// Validar mensaje
messageInput.addEventListener('input', () => {
    if (messageInput.value.trim().length < 10) {
        showError(messageError, 'El mensaje debe tener al menos 10 caracteres.');
    } else {
        clearError(messageError);
    }
});

// Envío del formulario
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validar nombre
    if (!nameRegex.test(nameInput.value.trim())) {
        showError(nameError, 'El nombre debe tener entre 2 y 50 caracteres (solo letras y espacios).');
        isValid = false;
    }
    
    // Validar email
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailError, 'Por favor, introduce un email válido.');
        isValid = false;
    }
    
    // Validar mensaje
    if (messageInput.value.trim().length < 10) {
        showError(messageError, 'El mensaje debe tener al menos 10 caracteres.');
        isValid = false;
    }
    
    // Si el formulario es válido
    if (isValid) {
        // Aquí normalmente se enviaría el formulario a un servidor
        // Por ahora, solo mostramos un mensaje de éxito
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
        
        // Limpiar errores
        clearError(nameError);
        clearError(emailError);
        clearError(messageError);
    }
});

// Actualizar año actual en el footer
document.getElementById('currentYear').textContent = new Date().getFullYear();