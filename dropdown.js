document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropdown-button")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});
