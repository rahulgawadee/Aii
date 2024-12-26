document.addEventListener("DOMContentLoaded", function() {
    // Create the IntersectionObserver for scroll-based animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in view, add the class to trigger animation
                entry.target.classList.add("in-view");
            } else {
                // When it's out of view, remove the class
                entry.target.classList.remove("in-view");
            }
        });
    }, { threshold: 0.5 });

    // Target all elements with the class 'isScrollView'
    const scrollElements = document.querySelectorAll(".isScrollView");

    // Start observing each of the scroll elements
    scrollElements.forEach(element => {
        observer.observe(element);
    });
});
