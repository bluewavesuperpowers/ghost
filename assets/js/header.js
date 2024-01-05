const hideHeader = () => {
    const header = document.querySelector("#gh-head");
    let lastScrollTop = 0;

    const scrollHandler = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 200) {
            if (scrollTop > lastScrollTop) {
                header.classList.add("is-hidden");
            } else {
                header.classList.remove("is-hidden");
            }
        }
        lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", scrollHandler);
};

const showSubNav = () => {
    const subNavIcon = document.querySelector(".gh-subnav-icon");
    const subNavItems = document.querySelectorAll(".gh-subnav-item");

    if (subNavItems.length) {
        subNavIcon.classList.add("show");
    }
}

export { hideHeader, showSubNav };
