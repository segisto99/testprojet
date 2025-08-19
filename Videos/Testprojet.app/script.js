document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                const animationClass = element.getAttribute('data-animation');
                element.classList.add(animationClass || 'animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Gestion du formulaire de contact
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs du formulaire
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        sheepType: document.getElementById('sheep-type').value,
        message: document.getElementById('message').value
    };
    
    // Ici vous pouvez ajouter le code pour envoyer les données
    // Par exemple avec fetch() ou en les affichant dans la console pour test
    console.log('Données du formulaire:', formData);
    
    // Message de confirmation
    alert('Merci pour votre demande! Nous vous contacterons rapidement.');
    
    // Réinitialisation du formulaire
    this.reset();
});

src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js">

    // Initialisation de Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Options ici
    });
    
    // Gestion du bouton "Recevoir par email"
    document.querySelector('.request-convention').addEventListener('click', function() {
        const email = prompt("Veuillez entrer votre email pour recevoir la convention:");
        if (email) {
            alert("Merci! La convention vous sera envoyée à " + email);
            // Ici vous pourriez ajouter un appel AJAX pour envoyer l'email
        }
    });

    
