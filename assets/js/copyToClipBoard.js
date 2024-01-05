const copyToClipboard = () => {
    const shareLinkBtns = document.querySelectorAll(".copyToClipboardBtn");

    const toCopy = (clickedBtn) => {
        const url = window.location.href;

        const changeText = (btn, success) => {
            if (success) {
                btn.classList.add("copied");
                setTimeout(() => {
                    btn.classList.remove("copied");
                }, 1000);
            } else {
                btn.classList.add("notCopied");
                setTimeout(() => {
                    btn.classList.remove("notCopied");
                }, 1000);
            }
        };

        navigator.clipboard.writeText(url).then(
            () => {
                changeText(clickedBtn, true);
            },
            () => {
                changeText(clickedBtn, false);
            }
        );
    };

    if (shareLinkBtns) {
        Array.from(shareLinkBtns).forEach((btn) => {
            btn.addEventListener("click", () => toCopy(btn));
        });
    }
};

export { copyToClipboard };
