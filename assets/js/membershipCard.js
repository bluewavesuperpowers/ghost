const calcHeight = () => {
    const membershipCards = document.querySelectorAll(".gh-tier-card");

    if (membershipCards.length && window.innerWidth > 1100) {
        const cardsDescriptions = document.querySelectorAll(
            ".gh-tier-card__desc"
        );
        let maxHeight = 0;

        cardsDescriptions.forEach((desc) => {
            if (desc.clientHeight >= maxHeight) {
                console.log(desc.clientHeight);
                maxHeight = desc.clientHeight;
            }
        });

        cardsDescriptions.forEach((desc) => {
            desc.style.height = `${maxHeight}px`;
        });
    }
};

export { calcHeight };
