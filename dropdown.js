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

    // Handle checkbox selections
    const checkboxes = dropdownContent.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            const selectedOptions = Array.from(checkboxes)
                .filter(function(checkbox) {
                    return checkbox.checked;
                })
                .map(function(checkbox) {
                    return checkbox.value;
                });

            dropdown.querySelector(".dropdown-button").textContent = selectedOptions.length > 0
                ? selectedOptions.join(", ")
                : "Select an option";
        });
    });
});

