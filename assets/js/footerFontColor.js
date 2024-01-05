const changeFontColor = () => {
    const getContrastYIQ = (rgbColor) => {
        const rgb = rgbColor.slice(4, -1).split(", ");
        const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return yiq >= 128 ? "dark" : "light";
    };
    const rootElem = document.documentElement;
    const mainFooter = document.querySelector(".gh-foot-main-wrapper");
    const mainFooterBGColor =
        window.getComputedStyle(mainFooter).backgroundColor;
    const fontColor = getContrastYIQ(mainFooterBGColor);
    rootElem.classList.add(`gh-color-section-font-${fontColor}`);
};

const changeFontColorOnToggle = () => {
    const getContrastYIQ = (rgbColor) => {
        const rgb = rgbColor.slice(4, -1).split(", ");
        const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return yiq >= 128 ? "dark" : "light";
    };
    const rootElem = document.querySelector("html");
    const mainFooter = document.querySelector(".gh-foot-main-wrapper");
    const mainFooterBGColor =
        window.getComputedStyle(mainFooter).backgroundColor;
    const fontColor = getContrastYIQ(mainFooterBGColor);
    const commentsSectionIframe = document.querySelector(
        "#ghost-comments-root > iframe[title='comments-frame']"
    );

    if (commentsSectionIframe) {
        const commentsSection =
        commentsSectionIframe.contentWindow.document.querySelector(".ghost-display");

        if (rootElem.classList.contains("gh-color-section-font-dark")) {
            commentsSection.classList.add('dark');
        } else {
            commentsSection.classList.remove('dark');
        }
    }

    if (rootElem.classList.contains("gh-color-section-font-dark")) {
        rootElem.classList.remove("gh-color-section-font-dark");
        rootElem.classList.add(`gh-color-section-font-${fontColor}`);
    } else {
        rootElem.classList.remove("gh-color-section-font-light");
        rootElem.classList.add(`gh-color-section-font-${fontColor}`);
    }

    rootElem.classList.add(`gh-color-section-font-${fontColor}`);
};

export { changeFontColor, changeFontColorOnToggle };
