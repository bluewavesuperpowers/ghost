const toggleDarkMode = (changeTweetsTheme) => {
    const switchTheme = () => {
        const rootElem = document.querySelector("html[data-color-scheme]");
        let dataTheme = rootElem.getAttribute("data-color-scheme");
        let newTheme = dataTheme === "light" ? "dark" : "light";
        rootElem.setAttribute("data-color-scheme", newTheme);
        localStorage.setItem("color-scheme", newTheme);
        changeTweetsTheme();
    };

    const toggleBtns = document.querySelectorAll(".gh-dark-mode-toggle-btn");
    toggleBtns.forEach((btn) => {
        btn.addEventListener("click", switchTheme);
    });
};

export { toggleDarkMode };
