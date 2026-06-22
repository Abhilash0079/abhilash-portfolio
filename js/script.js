const toggleButton =
    document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }

});

const fadeElements =
    document.querySelectorAll(".fade-in");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

fadeElements.forEach((element) => {

    observer.observe(element);

});