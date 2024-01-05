const initMobileMenu = () => {
    const burgerBtn = document.querySelector(".gh-burger-btn");
    const mobileMenu = document.querySelector(".gh-mobile-menu");
    const overlay = document.querySelector(".gh-overlay");
    const closeMenuBtn = document.querySelector(".gh-mobile-menu__close-btn");
    const mobileMenuFooter = document.querySelector(".gh-mobile-menu__footer");
    const scrollTopBtn = document.querySelector(".gh-scroll-top-btn");

    const openMobileMenu = () => {
        mobileMenu.classList.add("show", "animateRight");
        mobileMenuFooter.classList.add("show", "animateRight");
        overlay.classList.add("show");
        scrollTopBtn.classList.add("hide");
        document.documentElement.classList.add("lock-scroll");
        setTimeout(() => {
            mobileMenu.classList.remove("animateRight");
            mobileMenuFooter.classList.remove("animateRight");
        }, 475);
    };

    const closeMobileMenu = () => {
        mobileMenu.classList.add("animateLeft");
        mobileMenuFooter.classList.add("animateLeft");
        overlay.classList.remove("show");
        document.documentElement.classList.remove("lock-scroll");
        setTimeout(() => {
            mobileMenu.classList.remove("show", "animateLeft");
            mobileMenuFooter.classList.remove("show", "animateLeft");
            scrollTopBtn.classList.remove("hide");
        }, 250);
    };

    const closeMenuOutsideClick = (e) => {
        const element = e.target;

        if (!element.closest(".gh-mobile-menu")) {
            closeMobileMenu();
        }
    };

    if (burgerBtn) {
        burgerBtn.addEventListener("click", openMobileMenu);
        overlay.addEventListener("click", closeMenuOutsideClick);
        closeMenuBtn.addEventListener("click", closeMobileMenu);
    }
};

export { initMobileMenu };
