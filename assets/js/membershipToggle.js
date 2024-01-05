const togglePlan = () => {
    const togglePlanBtn = document.querySelector(".gh-membership-toggle-btn");
    const membershipPage = document.querySelector(".gh-membership-page");
    
    const toggle = () => {
        membershipPage.classList.toggle("yearly");
    };

    if (togglePlanBtn && membershipPage) {
        togglePlanBtn.addEventListener("click", toggle);
    }
};

export { togglePlan };
