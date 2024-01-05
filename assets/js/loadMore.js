class LoadButton {
    constructor(button) {
        this.nextDom = document;
        this.loadBtnElement = button;
        this.tag = button.name?.toLowerCase();
        this.container = button
            .closest(".gh-grid-section")
            .querySelector(".gh-posts-feed");

        if (button) {
            this.toLoadMore();
            this.loadNextPage();
        }
    }

    async loadNextPage() {
        const next = this.nextDom.querySelector('link[rel="next"]');

        if (next) {
            let url = next.href;

            if (this.tag && this.tag !== "latest") {
                const urlObj = new URL(next.href);
                url = `${urlObj.origin}/tag/${this.tag}${urlObj.pathname}`;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    this.loadBtnElement.style.display = "none";
                    return;
                }
                this.nextDom = document
                    .createRange()
                    .createContextualFragment(await response.text());
            } catch {
                this.loadBtnElement.style.display = "none";
            }
        } else {
            this.loadBtnElement.style.display = "none";
        }
    }

    toLoadMore() {
        this.loadBtnElement.addEventListener("click", () => {
            this.loadNextPage();

            const className =
                this.tag === "latest"
                    ? ".gh-grid-section-latest .gh-card"
                    : ".gh-posts-feed .gh-card";

            for (const post of this.nextDom.querySelectorAll(className)) {
                this.container.appendChild(post);
            }
        });
    }
}

export const loadMore = () => {
    const btnsLoad = document.querySelectorAll(".gh-load-more-button");

    if (!btnsLoad.length) {
        return;
    }

    btnsLoad.forEach((btn) => new LoadButton(btn));
};
