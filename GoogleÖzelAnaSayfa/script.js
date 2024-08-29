let url = "https://www.google.com/search?q=";
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {

    if (searchInput.value != "") {
        url = url + searchInput.value;
        window.open(url, "_blank");
        searchInput.value = "";
    };



});





