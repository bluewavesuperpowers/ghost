const scrollTop = () => {
    const offset = 200;
    const scrollTopBtn = document.querySelector(".gh-scroll-top-btn");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const progressPath = document.querySelector(".gh-scroll-top-progress path");
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    const updateProgress = function () {
        const scroll =
            window.scrollY ||
            window.scrollTopBtn ||
            document.documentElement.scrollTopBtn;

        const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        const windowHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );

        const height = docHeight - windowHeight;
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", scrollToTop);
    }

    window.addEventListener("scroll", () => {
        updateProgress();

        const scrollPos =
            window.scrollY ||
            window.scrollTop ||
            document.getElementsByTagName("html")[0].scrollTop;
        scrollPos > offset
            ? scrollTopBtn.classList.add("is-active")
            : scrollTopBtn.classList.remove("is-active");
    });
};

const scrollTopAlign = () => {
    const scrollTopBtn = document.querySelector(".gh-scroll-top-btn");
    const ghostPortalBtn = document.querySelector("#ghost-portal-root iframe");
    if (ghostPortalBtn) {
        scrollTopBtn.classList.add('alignUp');
    }
}

export { scrollTop, scrollTopAlign };
