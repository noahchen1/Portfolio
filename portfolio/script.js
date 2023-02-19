const handleScrolling = () => {
    const handleAboutAnimation = () => {
        const container = document.getElementById('intro-container');
        const portrait = document.getElementById('portrait');
        const overLay = document.getElementById('intro-overlay');
        const icons = document.querySelectorAll('.fab');

        if (window.scrollY >= getScrollingPosition(container)) {
            portrait.style.opacity = '1'
            portrait.style.transform = 'translateX(0px)'
            portrait.style.transition = '1s ease-in-out'
            overLay.style.animation = 'text-transition 2s forwards';
            overLay.style.animationDelay = '0.5s';

            icons.forEach(icon => {
                icon.style.opacity = '1';
                icon.style.transform = 'rotateY(0)'
                icon.style.transition = '1.5s ease-in-out';
            });
        } else {
            portrait.style.opacity = '0';
            portrait.style.tranform = 'translateX(300px)';

            icons.forEach(icon => {
                icon.style.opacity = 0;
                icon.style.transform = 'rotateY(60deg)';
            });
        }
    };

    const handleProjectTitleAnimation = () => {
        const container = document.getElementById('project-container');
        const heading = document.getElementById('project-heading');
        const hr = document.getElementById('project-break');
        
        if (window.scrollY >= getScrollingPosition(container)) {
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
            heading.style.transition = '1s ease-in-out';
            hr.style.animation = 'hrline 1s ease-in-out forwards';
        } else {
            heading.style.opacity = '0';
            heading.style.transform = 'translateY(150px)';
        }
    };

    handleAboutAnimation();
    handleProjectTitleAnimation();
    handleProjectsAniamtion()
};

window.addEventListener('scroll', handleScrolling);


function getScrollingPosition (container) {
    return container.offsetTop  - window.innerHeight + 100;
}