
const createProjectList = (() => {

    const projectList = document.getElementById('project-list');

    projectArr.forEach(project => {
        const listItem = document.createElement('li');

        listItem.innerText = project.name;
        listItem.classList.add('project-link');
        projectList.append(listItem);
    });

})();


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

    const handleProjectsAniamtion = () => {
        const projects = document.querySelectorAll('.project-link');
        const overLay = document.getElementById('body-overlay');
        const container = document.getElementById('project-intro-container');
        const title = document.getElementById('project-title');
        const intro = document.getElementById('project-intro');
        const vid = document.getElementById('project-vid');

        if (window.scrollY >= getScrollingPosition(container) && window.scrollY <= container.offsetTop) {
            overLay.style.animation = 'project-overlay-in 1s ease-out forwards';
            overLay.classList.remove('hidden');
        } else {
            overLay.style.animation = 'project-overlay-out 1s ease-out forwards';
        }

        projects.forEach((project, idx) => {
            project.onmouseover = () => {
                const tools = document.querySelectorAll('.tools');

                tools.forEach(tool => tool.remove());

                title.innerText = projectArr[idx].name;
                intro.innerText = projectArr[idx].description;
                vid.src = `./assets/videos/${projectArr[idx].name}.mp4`

                projectArr[idx].tools.forEach(tool => {
                    const p = document.createElement('p');

                    p.innerText = tool;
                    p.classList.add('tools');
                    container.append(p);
                })
            };
        });
    };

    const handleCvAniamation = () => {
        const container = document.getElementById('cv-container');
        const overlay = document.getElementById('cv-header-overlay');
        const bg = document.getElementById('cv-header-bg');

        if (window.scrollY >= getScrollingPosition(container)) {
            const projectOverlay = document.getElementById('body-overlay');

            // projectOverlay.style.animation = 'project-overlay-out 1s ease-out forwards';
            overlay.style.animation = 'text-transition 1.5s forwards';
            bg.style.animation = 'blur-filter 1s ease forwards';
            bg.style.animationDelay = '1.5s';
        }
    };

    handleAboutAnimation();
    handleProjectTitleAnimation();
    handleProjectsAniamtion();
    handleCvAniamation();
};

window.addEventListener('scroll', handleScrolling);


function getScrollingPosition(container) {
    return container.offsetTop - window.innerHeight + 100;
}