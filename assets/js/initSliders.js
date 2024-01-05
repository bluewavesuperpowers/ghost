const sliders = {
    forwardHero: {
        className: ".gh-hero-slider--forward",
        direction: "vertical",
        reverseDirection: true,
        speed: 7000,
        speedMobile: 7000,
    },
    reverseHero: {
        className: ".gh-hero-slider--reverse",
        direction: "vertical",
        reverseDirection: false,
        speed: 7000,
        speedMobile: 7000,
    },
    horizontalHero: {
        className: ".gh-hero-slider--horizontal",
        reverseDirection: false,
        speed: 5000,
        speedMobile: 7000,
    },
    forwardFooter: {
        className: ".gh-foot-slider--forward", 
        direction: "vertical", 
        reverseDirection: true, 
        speed: 5000,
        speedMobile: 4000,
        mobileDirection: 'vertical'
    },
    reverseFooter: {
        className: ".gh-foot-slider--reverse",
        direction: "vertical", 
        reverseDirection: false, 
        speed: 5000,
        speedMobile: 4000,
        mobileDirection: 'vertical'
    }
}

const initSliders = () => {
    const initHeroSlider = ({
        className,
        direction = 'horizontal',
        reverseDirection,
        speed,
        speedMobile,
        mobileDirection = 'horizontal'
    }) => {
        new Swiper(className, {
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection,
            },
            direction,
            slidesPerView: "auto",
            speed,
            loop: true,
            allowTouchMove: false,
            breakpoints: {
                1000: {
                    spaceBetween: 32,
                    speed,
                    direction,
                },
                769: {
                    spaceBetween: 32,
                    speed,
                    direction,
                },
                500: {
                    spaceBetween: 24,
                    speed,
                    direction: mobileDirection,
                },
                300: {
                    spaceBetween: 16,
                    speed: speedMobile,
                    direction: mobileDirection,
                },
            },
        });
    };

    for(const key in sliders) {
        initHeroSlider(sliders[key])
    }

    const initPostSlider = (className, slidesPerView, sPerV600, sPerV300) => {
        new Swiper(className, {
            spaceBetween: 32,
            navigation: {
                nextEl: ".gh-next-slide-btn",
                prevEl: ".gh-prev-slide-btn",
            },
            breakpoints: {
                900: {
                    slidesPerView: slidesPerView,
                },
                600: {
                    slidesPerView: sPerV600,
                },
                300: {
                    slidesPerView: sPerV300,
                },
            },
        });
    };

    initPostSlider(".gh-topic-slider--large", 3, 2, 1);
    initPostSlider(".gh-topic-slider--small", 4, 3, 1);
};

export { initSliders };
