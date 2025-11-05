// JavaScript Document

/* 

Tooplate 2145 Eco Lume

https://www.tooplate.com/view/2145-eco-lume

*/

// Particle system
function createBioParticles() {
   const particleSystem = document.getElementById('particleSystem');
   const particleCount = 50;

   for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'bio-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

      // Random color variation
      const colors = ['#00ff88', '#00d4ff', '#ffeb3b'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randomColor;
      particle.style.boxShadow = `0 0 10px ${randomColor}`;

      particleSystem.appendChild(particle);
   }
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
   navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', () => {
      navMenu.classList.remove('active');
   });
});

// Navbar scroll effect and active link management
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
   const scrollPosition = window.pageYOffset + 100;

   sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
         navLinks.forEach(link => link.classList.remove('active'));
         const currentNav = document.querySelector(`.nav-link[href="#${section.id}"]`);
         if (currentNav) currentNav.classList.add('active');
      }
   });
}

window.addEventListener('scroll', () => {
   // Navbar scroll effect
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }

   // Update active navigation
   updateActiveNav();
});

// Smooth scrolling
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

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
   e.preventDefault();

   // Simple form validation and submission simulation
   const formData = new FormData(this);
   const data = Object.fromEntries(formData);

   // Simulate form submission
   const submitBtn = this.querySelector('.submit-btn');
   const originalText = submitBtn.textContent;

   submitBtn.textContent = '🌱 Sending...';
   submitBtn.disabled = true;

   setTimeout(() => {
      alert('🌿 Message sent successfully! We\'ll sprout back to you soon.');
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
   }, 1500);
});

// Animated counters for stats
function animateCounters() {
   const statItems = document.querySelectorAll('.stat-item h3');

   statItems.forEach(stat => {
      const target = stat.textContent;
      const isPercentage = target.includes('%');
      const isLarge = target.includes('M') || target.includes('K');

      let numericTarget;
      if (isPercentage) {
         numericTarget = parseInt(target);
      } else if (target.includes('M')) {
         numericTarget = parseFloat(target) * 1000000;
      } else if (target.includes('K')) {
         numericTarget = parseFloat(target) * 1000;
      } else if (target.includes('/')) {
         return; // Skip 24/7
      } else {
         numericTarget = parseInt(target);
      }

      let current = 0;
      const increment = numericTarget / 100;
      const timer = setInterval(() => {
         current += increment;
         if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
         }

         if (isPercentage) {
            stat.textContent = Math.floor(current) + '%';
         } else if (target.includes('M')) {
            stat.textContent = (current / 1000000).toFixed(1) + 'M+';
         } else if (target.includes('K')) {
            stat.textContent = (current / 1000).toFixed(0) + 'K+';
         } else {
            stat.textContent = Math.floor(current) + '+';
         }
      }, 50);
   });
}

// Intersection Observer for animations
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         if (entry.target.classList.contains('stats')) {
            animateCounters();
            observer.unobserve(entry.target);
         }
      }
   });
}, observerOptions);

// Observe stats section for counter animation
const statsSection = document.querySelector('.stats');
if (statsSection) {
   observer.observe(statsSection);
}

// Rotating text in hero section
function rotateCircleText() {
   const textCircles = document.querySelectorAll('.text-circle');
   let currentIndex = 0;

   setInterval(() => {
      textCircles.forEach((circle, index) => {
         circle.classList.remove('active');
      });

      currentIndex = (currentIndex + 1) % textCircles.length;
      textCircles[currentIndex].classList.add('active');
   }, 3000);
}

// Feature tabs functionality
function initializeFeatures() {
   const navItems = document.querySelectorAll('.nav-item');
   const featurePanels = document.querySelectorAll('.feature-panel');

   navItems.forEach(item => {
      item.addEventListener('click', () => {
         const targetFeature = item.getAttribute('data-feature');

         // Remove active class from all items and panels
         navItems.forEach(nav => nav.classList.remove('active'));
         featurePanels.forEach(panel => panel.classList.remove('active'));

         // Add active class to clicked item and corresponding panel
         item.classList.add('active');
         const targetPanel = document.getElementById(targetFeature);
         if (targetPanel) {
            targetPanel.classList.add('active');
         }
      });
   });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function () {
   console.log('DOM Content Loaded');
   createBioParticles();
   updateActiveNav();
   rotateCircleText();
   initializeFeatures();
});

// Also initialize immediately in case DOM is already loaded
if (document.readyState === 'loading') {
   // DOM not ready, wait for DOMContentLoaded
} else {
   // DOM is ready
   console.log('DOM already loaded, initializing immediately');
   createBioParticles();
   updateActiveNav();
   rotateCircleText();
   initializeFeatures();
}

// Additional organic animations
function addOrganicMovement() {
   const leaves = document.querySelectorAll('.leaf');
   leaves.forEach((leaf, index) => {
      leaf.addEventListener('mouseenter', () => {
         leaf.style.transform = `scale(1.2) rotate(${Math.random() * 20 - 10}deg)`;
         leaf.style.opacity = '0.3';
      });

      leaf.addEventListener('mouseleave', () => {
         leaf.style.transform = '';
         leaf.style.opacity = '0.1';
      });
   });
}

addOrganicMovement();

// Dynamic background color shifts
let hueShift = 0;
setInterval(() => {
   hueShift = (hueShift + 1) % 360;
   document.documentElement.style.setProperty('--dynamic-hue', hueShift);
}, 100);