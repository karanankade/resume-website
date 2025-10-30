// Resume Data
const resumeData = {
    skills: [
        { name: "MySQL", level: "★★★☆☆" },
        { name: "Python", level: "★★★☆☆" },
        { name: "PHP", level: "★★☆☆☆" },
        { name: "SQL", level: "★★☆☆☆" },
        { name: "Java", level: "★★☆☆☆" },
        { name: "HTML/CSS/JavaScript", level: "★★★☆☆" },
        { name: "C++", level: "★★★☆☆" },
        { name: "MongoDB", level: "★★★☆☆" },
        { name: "Express.js", level: "★★★☆☆" },
        { name: "React.js", level: "★★★☆☆" },
        { name: "Node.js", level: "★★★☆☆" }
    ],
    courses: [
        {
            name: "Python 3.4.3",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "October 2023",
            certificate: "certificates/Python 3.4.3.pdf"
        },
        {
            name: "CPP",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "February 2024",
            certificate: "certificates/CPP.pdf"
        },
        {
            name: "C",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "February 2024",
            certificate: "certificates/C.pdf"
        },
        {
            name: "PHP and MySQL",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "August 2024",
            certificate: "certificates/PHP and MySQL.pdf"
        },
        {
            name: "Microsoft Azure AI Essential Professional Certificate by Microsoft and LinkedIn",
            provider: "Microsoft and LinkedIn",
            duration: "July 14, 2025",
            certificate: "certificates/CertificateOfCompletion_Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn.pdf"
        },
        {
            name: "Business Analysis Foundations LinkedIn Learning",
            provider: " LinkedIn Learning",
            duration: "Aug 05, 2025",
            certificate: "certificates/Business Analysis Foundations.pdf"
        },
        {
            name: "Cybersecurity Awareness Cybersecurity Terminology",
            provider: " LinkedIn Learning",
            duration: "Aug 27, 2025",
            certificate: "certificates/CertificateOfCompletion_Cybersecurity Awareness Cybersecurity Terminology.pdf"
        },
        {
            name: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
            provider: " LinkedIn Learning",
            duration: "September 13, 2025",
            certificate: "certificates/Oracle Fusion AI Agent Studio Certified Foundations Associate.pdf"
        }
    ],
    projects: [
        {
            title: "ShopHub - Premium E-Commerce Product Showcase",
            description: "A modern, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript. Features a beautiful UI, smooth animations, and comprehensive shopping functionality.",
            technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
            github: "https://github.com/karanankade/ShopHub",
            liveDemo: "https://karanankade.github.io/ShopHub/"
        },
        {
            title: "MusicHub – Personal Music Streaming Experience",
            description: "Music Hub Music Hub is a simple and interactive web-based music player built using HTML, CSS, and JavaScript. It allows users to play, pause, and manage songs through a modern and responsive user interface.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/karanankade/Music-Hub",
            liveDemo: "https://karanankade.github.io/Music-Hub/"
        },
        {
            title: "typing-practice - Typing Speed Test Application",
            description: "This project is a modern Typing Practice Web App that helps users improve speed and accuracy with randomized paragraphs. It tracks WPM, accuracy, errors, and completed paragraphs in real-time. Features include auto-switching texts, copy-paste prevention, responsive design, and an interactive dark/light themed UI.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/karanankade/typing-practice",
            liveDemo: "https://karanankade.github.io/typing-practice/"
        }
    ],
    languages: [
        { name: "English", level: "★★★★☆" },
        { name: "Hindi", level: "★★★★☆" },
        { name: "Marathi", level: "★★★★☆" }
    ],
    hobbies: [
        "Hiking",
        "Photography",
        "Traveling",
        "Adventure Fun",
        "Playing kabaddi",
        "Playing Tennis"
    ]
};

// Skills
const skillsGrid = document.querySelector('.skills-grid');
resumeData.skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'card';
    skillCard.innerHTML = `<div class="flex justify-between"><span>${skill.name}</span><span>${skill.level}</span></div>`;
    skillsGrid.appendChild(skillCard);
});

// Courses
const coursesGrid = document.querySelector('.courses-grid');
resumeData.courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'card course-card';
    courseCard.setAttribute('data-cert', course.certificate || '');
    courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <p>${course.provider}</p>
        <p>${course.duration}</p>
    `;
    coursesGrid.appendChild(courseCard);
});

// Projects
const projectsGrid = document.querySelector('.projects-grid');
resumeData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
            ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Languages
const languagesGrid = document.querySelector('.languages-grid');
resumeData.languages.forEach(lang => {
    const langCard = document.createElement('div');
    langCard.className = 'card';
    langCard.innerHTML = `<div><span>${lang.name}</span> <span>${lang.level}</span></div>`;
    languagesGrid.appendChild(langCard);
});

// Hobbies
const hobbiesContainer = document.querySelector('.hobbies-container');
resumeData.hobbies.forEach(hobby => {
    const hobbyTag = document.createElement('span');
    hobbyTag.className = 'hobby-tag';
    hobbyTag.textContent = hobby;
    hobbiesContainer.appendChild(hobbyTag);
});

// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Smooth scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    const offset = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    navLinks.classList.remove('active');
}

// Intersection animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '-50px' });
sections.forEach(section => observer.observe(section));

// Open certificates
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".course-card").forEach(card => {
        card.addEventListener("click", () => {
            const certPath = card.getAttribute("data-cert");
            if (certPath) {
                window.open(certPath, "_blank");
            }
        });
    });
});
