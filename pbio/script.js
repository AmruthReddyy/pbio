document.addEventListener('DOMContentLoaded', function() {
    // Skill box interactions
    const skills = document.querySelectorAll('.skill-box');
    const experienceDisplay = document.createElement('div');
    experienceDisplay.className = 'experience-display';
    document.body.appendChild(experienceDisplay);

    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            let experienceText = this.getAttribute('data-experience');
            if (experienceDisplay.style.display === 'block') {
                experienceDisplay.style.display = 'none';
            } else {
                experienceDisplay.textContent = experienceText;
                experienceDisplay.style.display = 'block';
            }
        });
    });


    // Parallax background blur and darken effect
    window.addEventListener('scroll', function() {
        var scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
        var blurAmount = Math.min(10, scrollAmount / 100);
        var darkenAmount = Math.min(0.7, scrollAmount / 500);

        var homeSection = document.querySelector('#home');
        var overlay = document.querySelector('.darken-overlay');
        homeSection.style.filter = `blur(${blurAmount}px)`;
        overlay.style.background = `rgba(0, 0, 0, ${darkenAmount})`;
    });
}); 