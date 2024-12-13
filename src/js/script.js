

const carrousels = document.querySelectorAll(".article--carrousel");

carrousels.forEach((carrousel) => {
    const container = carrousel.querySelector(".article__carrousel");
    const prevButton = carrousel.querySelector(".carrousel__btn--prev");
    const nextButton = carrousel.querySelector(".carrousel__btn--next");

    if (!container || !prevButton || !nextButton) return;

    prevButton.addEventListener("click", () => {
        console.log("prev")
        container.scrollBy({
            left: -container.offsetWidth,
            behavior: "smooth",
        });
    });

    nextButton.addEventListener("click", () => {
        console.log("next")
        container.scrollBy({
            left: container.offsetWidth,
            behavior: "smooth",
        });
    });
});