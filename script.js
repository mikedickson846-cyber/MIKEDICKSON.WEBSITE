// =========================================
// MIKEYZZ DIGITAL SOLUTIONS
// WEBSITE INTERACTIONS
// =========================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuToggle.textContent = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// WHATSAPP CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();


    // Prepare the customer's message.

    const whatsappMessage =

        "Hello Mike, I found your Mikeyzz Digital Solutions website.\n\n" +

        "My name: " + name + "\n" +

        "My email: " + (email || "Not provided") + "\n" +

        "Service required: " + service + "\n\n" +

        "Project details:\n" + message;


    // Encode the message for a WhatsApp URL.

    const encodedMessage =
        encodeURIComponent(whatsappMessage);


    // Kenya country code and your WhatsApp number.

    const whatsappURL =
        "https://wa.me/254738378159?text=" + encodedMessage;


    // Open WhatsApp in a new tab.

    const whatsappWindow = window.open(
        whatsappURL,
        "_blank"
    );

    // Fallback if the browser blocks the new tab.

    if (!whatsappWindow) {
        window.location.href = whatsappURL;
    }

});