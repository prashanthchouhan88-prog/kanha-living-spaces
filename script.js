const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const phone = form.querySelector('input[placeholder="Phone Number"]').value;
    const city = form.querySelector('input[placeholder="City"]').value;
    const service = form.querySelector("select").value;

    const message =
        "Hello Kanha Living Spaces!%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "City: " + city + "%0A" +
        "Requirement: " + service;

    window.open(
        "https://wa.me/917674895991?text=" + message,
        "_blank"
    );
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("mobile-nav");
});

const mobileLinks = document.querySelectorAll("nav a");

mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("mobile-nav");
    });
});