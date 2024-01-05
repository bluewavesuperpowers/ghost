const scrollAnimate = () => {
    const footerSliderContainer = document.querySelector(
        ".gh-foot-subscribtion-sliders-wrapper"
    );
    const footer = document.querySelector(".gh-foot");

    if (footerSliderContainer) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            if (footer.offsetTop <= scrollTop + (windowHeight * 0.9)) {
                footerSliderContainer.classList.add("animateFade");
            }
        });
    }
};

export { scrollAnimate };
