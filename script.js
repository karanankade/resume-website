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
            duration: "October 2023"
        },
        {
            name: "CPP",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "February 2024"
        },
        {
            name: "C",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "February 2024"
        },
        {
            name: "PHP and MySQL",
            provider: "Spoken Tutorial Project At IIT Bombay",
            duration: "August 2024"
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

// Populate Skills
const skillsGrid = document.querySelector('.skills-grid');
resumeData.skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'card';
    skillCard.innerHTML = `
        <div class="flex justify-between items-center">
            <span>${skill.name}</span>
            <span class="text-primary">${skill.level}</span>
        </div>
    `;
    skillsGrid.appendChild(skillCard);
});

// Populate Courses
const coursesGrid = document.querySelector('.courses-grid');
resumeData.courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'card';
    courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <p>${course.provider}</p>
        <p class="text-sm text-light">${course.duration}</p>
    `;
    coursesGrid.appendChild(courseCard);
});

// Populate Languages
const languagesGrid = document.querySelector('.languages-grid');
resumeData.languages.forEach(language => {
    const languageCard = document.createElement('div');
    languageCard.className = 'card';
    languageCard.innerHTML = `
        <div class="flex justify-between items-center">
            <span>${language.name}</span>
            <span class="text-primary">${language.level}</span>
        </div>
    `;
    languagesGrid.appendChild(languageCard);
});

// Populate Hobbies
const hobbiesContainer = document.querySelector('.hobbies-container');
resumeData.hobbies.forEach(hobby => {
    const hobbyTag = document.createElement('span');
    hobbyTag.className = 'hobby-tag';
    hobbyTag.textContent = hobby;
    hobbiesContainer.appendChild(hobbyTag);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Close mobile menu if open
        navLinks.classList.remove('active');
    }
}

// Intersection Observer for animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});