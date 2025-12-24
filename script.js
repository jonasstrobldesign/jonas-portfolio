/* -------------------------------------- */
/* MOBILE MENU */
/* -------------------------------------- */

function togglemenu(event) {
    event.stopPropagation();

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    if (menu.classList.contains("open")) {
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        closeMenu();
    }
}

function closeMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.remove("open");
    icon.classList.remove("open");

    document.removeEventListener("click", closeMenuOnClickOutside);
}

/* -------------------------------------- */
/* SCROLL REVEAL */
/* -------------------------------------- */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
