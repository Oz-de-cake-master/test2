
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const Btn1 = document.getElementById("btn1")
const message1 = document.getElementById("input-message1")
const Btn2 = document.getElementById("btn2")
const message2 = document.getElementById("input-message2")
const output = document.getElementById("output")
const outputmssage = document.getElementById("output-message")

Btn1.addEventListener("click", function() {
    Btn1.classList.toggle("clicked-input")
    if (Btn1.classList.contains("clicked-input")) {
        message1.textContent = "ON"
        if (Btn2.classList.contains("clicked-input")) {
            output.classList.add("clicked-output")
            outputMessage.textContent = "ON"
        }
        else {
            output.classList.remove("clicked-output")
            outputMessage.textContent = "OFF"
        }
    }
    else {
        message1.textContent = "OFF"
        output.classList.remove("clicked-output")
        outputMessage.textContent = "OFF"
    }
})

Btn2.addEventListener("click", function() {
    Btn2.classList.toggle("clicked-input")
    if (Btn2.classList.contains("clicked-input")) {
        message2.textContent = "ON"
        if (Btn1.classList.contains("clicked-input")) {
            output.classList.add("clicked-output")
            outputMessage.textContent = "ON"
        }
        else {
            output.classList.remove("clicked-output")
            outputMessage.textContent = "OFF"
        }
    }
    else {
        message2.textContent = "OFF"
        output.classList.remove("clicked-output")
        outputMessage.textContent = "OFF"
    }
})

const inputBtn = document.getElementById("input")
const offOn = document.getElementById("input-message")
const outputEl = document.getElementById("output")
const outputMessage = document.getElementById("output-message")

inputBtn.addEventListener("click", function() {
    inputBtn.classList.toggle("clicked-input")
    if (inputBtn.classList.contains("clicked-input")) {
        offOn.textContent = "ON"
        outputEl.classList.remove("clicked-output")
        outputMessage.textContent = "OFF"
    }
    else {
        offOn.textContent = "OFF"
        outputEl.classList.add("clicked-output")
        outputMessage.textContent = "ON"
    }
})