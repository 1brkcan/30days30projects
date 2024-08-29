
function showLoader(){

    document.getElementById("loader").style.display = "block";

}

function hideLoader(){

    document.getElementById("loader").style.display = "none";

}


let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
    myBtn.style.display = "none";
    showLoader();

    setTimeout(() => {
        hideLoader();
        document.querySelector("img").style.display = "block";
    }, 2000);

})









