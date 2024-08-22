// Add smooth scrolling to navigation links
document.querySelectorAll('nav ul li a'). forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefualt();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

});

// Add animation on scroll for skills section
window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const skillPostion = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (skillPosition < screenPosition) {
            skill.style.width = skill.getAttribute('style').split(':')[1];

        }
    });
});

