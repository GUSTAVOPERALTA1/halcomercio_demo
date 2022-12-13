const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    
    if (navMenu.classList.contains("nav-menu_visible")) {
            navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir-menú");
    }
});
const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`)

        if (entry.isIntersecting){
            menuLink.classList.add("nav-menu-link_active");
        }
        else {
            menuLink.classList.remove("nav-menu-link_active")
        }
    });
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        navMenu.classList.remove("nav-menu_visible");
    })

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target){
        observer.observe(target);
    }
})

/*
let favIcon = document.querySelector("#fa");

favIcon.addEventListener("click", () => favIcon.style.backgroundColor = "#FF0000")
*/