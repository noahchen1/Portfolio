const elem = document.querySelector('.page-loading-screen')

setTimeout( () => {
    const paragraph = elem.querySelectorAll('.hello')
    const welcomeText = elem.querySelector('.welcome-text')
    welcomeText.parentNode.removeChild(welcomeText)
    for (var i = 0; i < paragraph.length; i++ ) {
        paragraph[i].remove()
    }
}, 4000)


setTimeout( () => {
    elem.parentNode.removeChild(elem)

}, 5500)


setTimeout( () => {
    const body = document.querySelector('.body-overflow')
    body.classList.remove('body-overflow')

}, 5500)

setTimeout( () => {
    const portfolioVisible = document.querySelector('.page-visibility')
    portfolioVisible.classList.remove('page-visibility')


}, 5500)



window.onload = function() {
    const portfolioPic = document.querySelector('.portfolio-picture')
    const aboutTextVisibility = document.querySelector('.about-text-wrapper')
    const projectWrapper = document.querySelector('.project-header-wrapper')
    const projectImage = document.querySelector('.project-header-img')
    const projects = document.querySelectorAll('.project')
    //const skillLevel = document.querySelector('.skill-level')
    //const intermediaLevels = document.querySelectorAll('.intermedia-level')

    const webAppTittle = document.querySelector('.webApp-title')
    const webAppFeature = document.querySelector('.webApp-feature')
    const framework = document.querySelectorAll('.framework')
    const webAppVidCover = document.querySelector('.webApp-vid-cover')


    const pageTitle = document.querySelector('.page-title')
    const pageFeature = document.querySelector('.page-feature')
    const techLanguages = document.querySelectorAll('.tech-language')
    const videoWrapper = document.querySelector('.ecommerce-vid-cover')

    const workSampleTitle = document.querySelector('.work-samples-title')
    const hr = document.querySelector('.work-samples-hr')
    const icons = document.querySelectorAll('.fab')
    //const techStack = document.querySelector('.techStack')


    window.addEventListener('scroll', scrollEffect)

    function scrollEffect() {

        if(window.scrollY >= 150) {
            portfolioPic.style.opacity= '1'
            portfolioPic.style.transform = 'translateX(0px)'
            portfolioPic.style.transition = '1s ease-in-out'
            aboutTextVisibility.style.animation = 'text-transition 2s forwards'
            aboutTextVisibility.style.animationDelay = '0.5s'
           
            for (var i=0; i < icons.length; i++) {
                icons[i].style.opacity = '1'
                icons[i].style.transform = 'rotateY(0)'
                icons[i].style.transition = '1.5s ease-in-out'
            }

            //skillLevel.style.opacity = '1'
            //skillLevel.style.transform = 'translateX(0px)'
            //skillLevel.style.transition = '1s ease-in-out'

           //for (var i=0; i < intermediaLevels.length; i++) {
           //     intermediaLevels[i].style.animation = 'glowing 2s forwards'
           //     intermediaLevels[i].style.animationDelay = '1s'
           // }           
        } 
        
        else {

            portfolioPic.style.opacity = '0'
            portfolioPic.style.tranform = 'translateX(300px)'

            
            for (var i=0; i < icons.length; i++) {
                icons[i].style.opacity = 0
                icons[i].style.transform = 'rotateY(60deg)'
            }

           // skillLevel.style.opacity = '0'
            //skillLevel.style.transform = 'translateX(-500px)'
       
        }

        /* Work Sample Transition */

        if(window.scrollY >= 900) {
            workSampleTitle.style.opacity = '1'
            workSampleTitle.style.transform = 'translateY(0)'
            workSampleTitle.style.transition = '1s ease-in-out'
            hr.style.animation = 'hrline 1s ease-in-out forwards'
        }

        else {
            workSampleTitle.style.opacity ='0'
            workSampleTitle.style.transform = 'translateY(150px)'
        }

        /* Spotify Player Shocase */

        if(window.scrollY >= 1400) {
            webAppTittle.style.opacity = '1'
            webAppTittle.style.transform = 'rotateY(0) translateX(0) translateY(0)'
            webAppTittle.style.transition = '1s ease-in-out'
            webAppFeature.style.opacity = '1'
            webAppFeature.style.transform = 'rotateY(0) translateX(0) translateY(0)'
            webAppFeature.style.transition = '1s ease-in-out'
            for(var i=0; i < framework.length; i++) {
                framework[i].style.opacity = '1'
                framework[i].style.transform = 'rotateY(0) translateX(0) translateY(0)'
                framework[i].style.transition = '1s ease-in-out'
            } 
            webAppVidCover.style.animation = 'text-transition 1.5s ease forwards'
        }

        else {
            webAppTittle.style.opacity = '0'
            webAppTittle.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
            webAppFeature.style.opacity = '0'
            webAppFeature.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
            for(var i=0; i < framework.length; i++) {
                framework[i].style.opacity = '0'
                framework[i].style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'

            }
        }

        /* Landing Page Showcase */

        if(window.scrollY >= 2300) {
            pageTitle.style.opacity = '1'
            pageTitle.style.transform = 'rotateY(0) translateX(0) translateY(0)'
            pageTitle.style.transition = '1s ease-in-out'
            pageFeature.style.opacity = '1'
            pageFeature.style.transform = 'rotateY(0) translateX(0) translateY(0)'
            pageFeature.style.transition = '1s ease-in-out'
            for(var i=0; i < techLanguages.length; i++) {
                techLanguages[i].style.opacity = '1'
                techLanguages[i].style.transform = 'rotateY(0) translateX(0) translateY(0)'
                techLanguages[i].style.transition = '1s ease-in-out'
            } 
            videoWrapper.style.animation = 'text-transition 1.5s ease forwards'
        }

        else {
            pageTitle.style.opacity = '0'
            pageTitle.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
            pageFeature.style.opacity = '0'
            pageFeature.style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'
            for(var i=0; i < techLanguages.length; i++) {
                techLanguages[i].style.opacity = '0'
                techLanguages[i].style.transform = 'rotateY(60deg) translateX(100px) translateY(100px)'

            }
        }

        /* Project Header */

        if(window.scrollY >= 4600) {
            projectWrapper.style.animation = 'text-transition 1.5s forwards'
            projectImage.style.animation = 'blur-filter 2s ease forwards'
            projectImage.style.animationDelay = '0.5s'
        }

        /* Projects */

        if(window.scrollY >= 5300) {
            for(var i=0; i < projects.length; i++) {
                projects[i].style.opacity = '1'
                projects[i].style.transform = 'scale(1) translateY(0)'
                projects[i].style.transition = '1s ease'
            }
        }  

        else {
            for(var i=0; i < projects.length; i++) {
                projects[i].style.opacity = '0'
                projects[i].style.transform = 'scale(0.5) translateY(200px)'

            }
        }

        
    }

    scrollEffect()

}









/* Calculator APP */

class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    doOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const firstInput = parseFloat(this.previousOperand)
        const secondInput = parseFloat(this.currentOperand)
        
        switch (this.operation) {
            case '+':
                computation = firstInput + secondInput
                break
            case '-':
                computation = firstInput - secondInput 
                break
            case 'x':
                computation = firstInput * secondInput
                break
            case '÷':
                computation = firstInput / secondInput
                break
            case '+/-':
                if (firstInput > 0 || firstInpute < 0) {
                    computation = -1 * firstInput
                } else {
                    computation = undefined
                }
                break
            case '%':
                computation = firstInput / 100
                break
            default: 
                return
        }

        this.currentOperand = computation 
        this.operation = undefined
        this.previousOperand = ''
    }

    displayNumber(number) {
        const stringNumber = number.toString()
        const integer = parseFloat(stringNumber.split('.')[0])
        const decimal = stringNumber.split('.')[1]

        let integerNumber 
        if (isNaN(integer)) {
            integerNumber = ''
        } else {
            integerNumber = integer.toLocaleString('en')
        }
        if (decimal != null) {
            return `${integerNumber}.${decimal}`
        } else {
            return integerNumber
        }
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.displayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandText.innerText = 
            `${this.displayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandText.innerText = ''
        }
    }

}

const previousOperandText = document.querySelector('.previous-operand')
const currentOperandText = document.querySelector('.current-operand')
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const clearButton = document.querySelector('.clear')
const signChangeButton = document.querySelector('.sign-change')
const percentButton = document.querySelector('.percent')
const equalButton = document.querySelector('.equal')




const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.doOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', (button) => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', (button) => {
    calculator.clear()
    calculator.updateDisplay()
})

