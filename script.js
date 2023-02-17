const startAniamtion = (() => {
    const pageIntroContainer = document.querySelector('.page-loading-screen');

    setTimeout(() => {
        const paragraph = pageIntroContainer.querySelectorAll('.hello');
        const welcomeText = pageIntroContainer.querySelector('.welcome-text');

        welcomeText.parentNode.removeChild(welcomeText);
        for (var i = 0; i < paragraph.length; i++) {
            paragraph[i].remove();
        }
    }, 4000);

    setTimeout(() => {
        const body = document.querySelector('.body-overflow')
        const portfolioVisible = document.querySelector('.page-visibility')


        pageIntroContainer.parentNode.removeChild(pageIntroContainer);
        body.classList.remove('body-overflow')
        portfolioVisible.classList.remove('page-visibility')

    }, 5500);
})();

const handleScrolling = () => {
    const handleAboutAnimation = () => {
        const portfolioPic = document.querySelector('.portfolio-picture')
        const aboutTextVisibility = document.querySelector('.about-text-wrapper')
        const icons = document.querySelectorAll('.fab')
    
        if (window.scrollY >= 150) {
            portfolioPic.style.opacity = '1'
            portfolioPic.style.transform = 'translateX(0px)'
            portfolioPic.style.transition = '1s ease-in-out'
            aboutTextVisibility.style.animation = 'text-transition 2s forwards'
            aboutTextVisibility.style.animationDelay = '0.5s'
    
            for (var i = 0; i < icons.length; i++) {
                icons[i].style.opacity = '1'
                icons[i].style.transform = 'rotateY(0)'
                icons[i].style.transition = '1.5s ease-in-out'
            }
        } else {
            portfolioPic.style.opacity = '0'
            portfolioPic.style.tranform = 'translateX(300px)'
    
            for (var i = 0; i < icons.length; i++) {
                icons[i].style.opacity = 0
                icons[i].style.transform = 'rotateY(60deg)'
            }
        }
    };
    
    const handleProjectTitleAnimation = () => {
        const workSampleTitle = document.querySelector('.work-samples-title')
        const hr = document.querySelector('.work-samples-hr')
    
    
        if (window.scrollY >= 900) {
            workSampleTitle.style.opacity = '1'
            workSampleTitle.style.transform = 'translateY(0)'
            workSampleTitle.style.transition = '1s ease-in-out'
            hr.style.animation = 'hrline 1s ease-in-out forwards'
        } else {
            workSampleTitle.style.opacity = '0'
            workSampleTitle.style.transform = 'translateY(150px)'
        }
    };

    const handleProjectsAnimation = () => {
        const projects = document.querySelectorAll('.project');
        const bodyOverlay = document.getElementById('body-overlay');

        if (window.scrollY >= 1400) {
            for (var i = 0; i < projects.length; i++) {
                projects[i].style.opacity = '1'
                projects[i].style.transform = 'scale(1) translateY(0)'
                projects[i].style.transition = '1s ease'

                
            }
        } else {
            for (var i = 0; i < projects.length; i++) {
                projects[i].style.opacity = '0'
                projects[i].style.transform = 'scale(0.5) translateY(200px)'
            }
        }
    };

    handleAboutAnimation();
    handleProjectTitleAnimation();
    handleProjectsAnimation();
};

window.addEventListener('scroll', handleScrolling);




















// window.onload = function () {
//     const portfolioPic = document.querySelector('.portfolio-picture')
//     const aboutTextVisibility = document.querySelector('.about-text-wrapper')
//     const projectWrapper = document.querySelector('.project-header-wrapper')
//     const projectImage = document.querySelector('.project-header-img')
//     const projects = document.querySelectorAll('.project')

//     const webAppTittle = document.querySelector('.webApp-title')
//     const webAppFeature = document.querySelector('.webApp-feature')
//     const framework = document.querySelectorAll('.framework')
//     const webAppVidCover = document.querySelector('.webApp-vid-cover')

//     const searchToolTitle = document.querySelector('.search-tool-title')
//     const searchToolFeature = document.querySelector('.search-tool-feature')
//     const searchToolFramework = document.querySelectorAll('.search-tool-framewrok')
//     const searchToolWrapper = document.querySelector('.search-tool-vid-cover')

//     const activityTrackerTitle = document.querySelector('.activity-tracker-title')
//     const activityTrackerFeature = document.querySelector('.activity-tracker-feature')
//     const activityTrackerFramework = document.querySelectorAll('.activity-tracker-framework')
//     const activityTrackerCover = document.querySelector('.activity-tracker-vid-cover')


//     const workSampleTitle = document.querySelector('.work-samples-title')
//     const hr = document.querySelector('.work-samples-hr')
//     const icons = document.querySelectorAll('.fab')


//     // window.addEventListener('scroll', scrollEffect)

//     function scrollEffect() {

//         // if (window.scrollY >= 150) {
//         //     portfolioPic.style.opacity = '1'
//         //     portfolioPic.style.transform = 'translateX(0px)'
//         //     portfolioPic.style.transition = '1s ease-in-out'
//         //     aboutTextVisibility.style.animation = 'text-transition 2s forwards'
//         //     aboutTextVisibility.style.animationDelay = '0.5s'

//         //     for (var i = 0; i < icons.length; i++) {
//         //         icons[i].style.opacity = '1'
//         //         icons[i].style.transform = 'rotateY(0)'
//         //         icons[i].style.transition = '1.5s ease-in-out'
//         //     }

//         // }

//         // else {

//         //     portfolioPic.style.opacity = '0'
//         //     portfolioPic.style.tranform = 'translateX(300px)'


//         //     for (var i = 0; i < icons.length; i++) {
//         //         icons[i].style.opacity = 0
//         //         icons[i].style.transform = 'rotateY(60deg)'
//         //     }

//         // }

//         /* Work Sample Transition */

//         // if (window.scrollY >= 900) {
//         //     workSampleTitle.style.opacity = '1'
//         //     workSampleTitle.style.transform = 'translateY(0)'
//         //     workSampleTitle.style.transition = '1s ease-in-out'
//         //     hr.style.animation = 'hrline 1s ease-in-out forwards'
//         // }

//         // else {
//         //     workSampleTitle.style.opacity = '0'
//         //     workSampleTitle.style.transform = 'translateY(150px)'
//         // }

//         /* Spotify Player Shocase */

//         if (window.scrollY >= 1400) {
//             webAppTittle.style.opacity = '1'
//             webAppTittle.style.transform = 'rotateY(0) translateX(0) translateY(0)'
//             webAppTittle.style.transition = '1s ease-in-out'
//             webAppFeature.style.opacity = '1'
//             webAppFeature.style.transform = 'rotateY(0) translateX(0) translateY(0)'
//             webAppFeature.style.transition = '1s ease-in-out'
//             for (var i = 0; i < framework.length; i++) {
//                 framework[i].style.opacity = '1'
//                 framework[i].style.transform = 'rotateY(0) translateX(0) translateY(0)'
//                 framework[i].style.transition = '1s ease-in-out'
//             }
//             webAppVidCover.style.animation = 'text-transition 1.5s ease forwards'
//         }

//         else {
//             webAppTittle.style.opacity = '0'
//             webAppTittle.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
//             webAppFeature.style.opacity = '0'
//             webAppFeature.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
//             for (var i = 0; i < framework.length; i++) {
//                 framework[i].style.opacity = '0'
//                 framework[i].style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'

//             }
//         }

//         /* Search Tool Showcase */

//         if (window.scrollY >= 2300) {
//             searchToolTitle.style.opacity = '1'
//             searchToolTitle.style.transform = 'rotateY(0) translateX(0) translateY(0)'
//             searchToolTitle.style.transition = '1s ease-in-out'
//             searchToolFeature.style.opacity = '1'
//             searchToolFeature.style.transform = 'rotateY(0) translateX(0) translateY(0)'
//             searchToolFeature.style.transition = '1s ease-in-out'
//             for (var i = 0; i < searchToolFramework.length; i++) {
//                 searchToolFramework[i].style.opacity = '1'
//                 searchToolFramework[i].style.transform = 'rotateY(0) translateX(0) translateY(0)'
//                 searchToolFramework[i].style.transition = '1s ease-in-out'
//             }
//             searchToolWrapper.style.animation = 'text-transition 1.5s ease forwards'
//         }

//         else {
//             searchToolTitle.style.opacity = '0'
//             searchToolTitle.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
//             searchToolFeature.style.opacity = '0'
//             searchToolFeature.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
//             for (var i = 0; i < searchToolFramework.length; i++) {
//                 searchToolFramework[i].style.opacity = '0'
//                 searchToolFramework[i].style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'

//             }
//         }

//         /* Activity Tracker Showcase*/

//         if (window.scrollY >= 3300) {
//             activityTrackerTitle.style.opacity = '1'
//             activityTrackerTitle.style.transform = 'rotateY(0) translateX(0) translateY(0)'
//             activityTrackerTitle.style.transition = '1s ease-in-out'
//             activityTrackerFeature.style.opacity = '1'
//             activityTrackerFeature.style.transform = 'rotateY(0) translateX(0) translateY(0)'
//             activityTrackerFeature.style.transition = '1s ease-in-out'
//             for (var i = 0; i < activityTrackerFramework.length; i++) {
//                 activityTrackerFramework[i].style.opacity = '1'
//                 activityTrackerFramework[i].style.transform = 'rotateY(0) translateX(0) translateY(0)'
//                 activityTrackerFramework[i].style.transition = '1s ease-in-out'
//             }
//             activityTrackerCover.style.animation = 'text-transition 1.5s ease forwards'
//         } else {
//             activityTrackerTitle.style.opacity = '0'
//             activityTrackerTitle.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
//             activityTrackerFeature.style.opacity = '0'
//             activityTrackerFeature.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
//             for (var i = 0; i < activityTrackerFramework.length; i++) {
//                 activityTrackerFramework[i].style.opacity = '0'
//                 activityTrackerFramework[i].style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'

//             }
//         }

//         /* Project Header */

//         if (window.scrollY >= 4600) {
//             projectWrapper.style.animation = 'text-transition 1.5s forwards'
//             projectImage.style.animation = 'blur-filter 1s ease forwards'
//             projectImage.style.animationDelay = '1.5s'
//         }

//         /* Projects */

//         if (window.scrollY >= 5300) {
//             for (var i = 0; i < projects.length; i++) {
//                 projects[i].style.opacity = '1'
//                 projects[i].style.transform = 'scale(1) translateY(0)'
//                 projects[i].style.transition = '1s ease'
//             }
//         }

//         else {
//             for (var i = 0; i < projects.length; i++) {
//                 projects[i].style.opacity = '0'
//                 projects[i].style.transform = 'scale(0.5) translateY(200px)'

//             }
//         }


//     }

//     scrollEffect()

// }




