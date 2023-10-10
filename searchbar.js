function toggleSearchBox() {
            var searchBox = document.getElementById("searchBox");
            if (searchBox.style.display === "block") {
                searchBox.style.display = "none";
            } else {
                searchBox.style.display = "block";
            }
        }

        // Close the search box when clicking outside of it
        window.addEventListener("click", function(event) {
            var searchContainer = document.querySelector(".search-container");
            var searchBox = document.getElementById("searchBox");
            if (!searchContainer.contains(event.target)) {
                searchBox.style.display = "none";
            }
        });
