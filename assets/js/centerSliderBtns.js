const centerSwiperBtns = () => {
    const windowWidth = window.innerWidth;
    let btnRadius = 0;

    if (windowWidth >= 1300) {
        btnRadius = 30;
    } else if (windowWidth <= 768) {
        btnRadius = 22.5;
    } else {
        btnRadius = 26;
    }

    const largeImgContainer = document.querySelector(
        ".gh-topic-slider--large .gh-card-image-video-outer"
    );
    const smallImgContainer = document.querySelector(
        ".gh-topic-slider--small .gh-card-image-video-outer"
    );

    if (largeImgContainer) {
        const largeImgContainerHeight = largeImgContainer.offsetHeight;
        const btnsForLarge = document.querySelectorAll(
            ".gh-topic-slider--large .gh-next-slide-btn, .gh-topic-slider--large .gh-prev-slide-btn"
        );

        btnsForLarge.forEach((btn) => {
            btn.style.top = largeImgContainerHeight / 2 - btnRadius + "px";
        });
    }

    if (smallImgContainer) {
        const smallImgContainerHeight = smallImgContainer.offsetHeight;
        const btnsForSmall = document.querySelectorAll(
            ".gh-topic-slider--small .gh-next-slide-btn, .gh-topic-slider--small .gh-prev-slide-btn"
        );

        btnsForSmall.forEach((btn) => {
            btn.style.top = smallImgContainerHeight / 2 - btnRadius + "px";
        });
    }
};

export { centerSwiperBtns };
