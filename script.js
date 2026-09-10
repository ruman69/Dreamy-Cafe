// ================= ABOUT LEARN MORE =================

function showMoreAbout() {

    const moreAbout = document.getElementById("moreAbout");
    const button = document.querySelector(".learn-button");

    if (!moreAbout || !button) {
        return;
    }

    if (moreAbout.style.display === "block") {

        moreAbout.style.display = "none";
        button.innerText = "Learn More";

    } else {

        moreAbout.style.display = "block";
        button.innerText = "Show Less";

    }
}


// ================= CONTACT BUTTON =================

function showContactMessage() {

    alert(
        "Thank you for contacting Dreamy Cafe! ☕❤️\n" +
        "We would love to hear from you."
    );

}


// ================= MENU CATEGORY =================

function showCategory(categoryId) {

    const sections = document.querySelectorAll(".product-section");

    // Hide all categories
    sections.forEach(function(section) {

        section.classList.remove("active");

    });


    // Show selected category
    const selectedCategory = document.getElementById(categoryId);

    if (selectedCategory) {

        selectedCategory.classList.add("active");

        selectedCategory.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ================= MENU DEFAULT =================

document.addEventListener("DOMContentLoaded", function() {

    const menuSections = document.querySelectorAll(".product-section");

    if (menuSections.length > 0) {

        showCategory("coffee");

    }

});