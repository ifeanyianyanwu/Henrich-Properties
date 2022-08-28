"use strict";

// ==================
// MOBILE NAVBAR
// ==================
const icon = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-nav-bar");
const modalState = document.querySelector(".modal");
const noScroll = document.querySelector("html");

// ----- FN == FUNCTION ------
// FN FOR POSITION AND VISIBILITY OF SIDEBAR
const style = (visVal, posVal) => {
    sideBar.style.visibility = visVal;
    sideBar.style.right = posVal;
};

// FN FOR ADDING CLASS
const addClass = (element, className) => element.classList.add(className);

// FN FOR REMOVING CLASS
const removeClass = (element, className) => element.classList.remove(className);

// FN FOR STYLING ELEENTS
const styleElement = (element, choice, value) =>
    (element.style[choice] = value);

// FN FOR SIDE NAV BAR TO SLIDE OUT
const sideBarOpen = () => {
    style("visible", "0em");
    addClass(icon, "slide");
    addClass(modalState, "overlay");
    styleElement(noScroll, "overflow", "hidden");
};

// FN FOR SIDE NAV BAR TO GO BACK IN
const sideBarClose = () => {
    style("hidden", "-20em");
    removeClass(icon, "slide");
    removeClass(modalState, "overlay");
    styleElement(noScroll, "overflow", "scroll");
};

// TRANSITION STYLE OF ICON AND SIDE NAV BAR
styleElement(sideBar, "transition", ".5s ease-in-out");
styleElement(icon, "transition", ".4s ease-in-out");

// TOGGLING ICON FN
const toggleIcon = () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-arrow-left");
};

// THE EVENT LISTENER FOR WHEN ICON IS CLICKED
icon.addEventListener("click", () => {
    toggleIcon();
    !icon.classList.contains("fa-bars") ? sideBarOpen() : sideBarClose();
});

// THE EVENT LISTENER FOR WHEN ELEMENTS IN THE SIDE BAR IS CLICKED
sideBar.addEventListener("click", () => {
    toggleIcon();
    sideBarClose();
});
// WHEN BROWSER BACK BUTTON IS CLICKED
window.onhashchange = () => {
    sideBarClose();
};

// ========================
//SWIPER SECTION
// ========================
const scrollable = document.querySelector(".services-cards-container");
const prev = document.querySelector(".button-next");
const next = document.querySelector(".button-prev");

next.addEventListener("click", () => {
    scrollable.scrollLeft -= 362;
});
prev.addEventListener("click", () => {
    scrollable.scrollLeft += 362;
});
// ==========================

// =====================
//BACK TO TOP BUTTON
// =====================
const homePage = document.querySelector(".home-page");
const backToTopBtn = document.querySelector(".back-to-top");

const options = {
    rootMargin: "-50px 0px 0px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
    entries[0].isIntersecting
        ? backToTopBtn.classList.add("hidden")
        : backToTopBtn.classList.remove("hidden");
}, options);

observer.observe(homePage);
// =========================

// =========================
// REVEAL ANIMATION
// =========================
const reveals = document.querySelectorAll(".reveal");

reveals.forEach((reveal) => {
    const optionsTwo = {
        rootMargin: "+5000px 0px -120px 0px",
    };
    const observerTwo = new IntersectionObserver((entries, observer) => {
        entries[0].isIntersecting
            ? reveal.classList.add("active")
            : reveal.classList.remove("active");
    }, optionsTwo);
    observerTwo.observe(reveal);
});
// =========================

// =======================
// LEARN MORE FUNCTIONALITY
// =======================
const buttons = document.querySelectorAll("[data-id]");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        localStorage.setItem("id", button.dataset.id);
    });
});
// =======================

// =======================
//IMAGE SLIDER
// =======================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// =======================
