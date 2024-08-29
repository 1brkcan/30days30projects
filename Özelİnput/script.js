const input = document.querySelector(".input_field");
const icon = document.querySelector(".input_icon");

icon.addEventListener("click", (e) => {

    e.preventDefault

    if(input.getAttribute("type") === "password"){
        icon.setAttribute("src", "eye-solid.svg");
        input.setAttribute("type", "text");

    }else{
        icon.setAttribute("src", "eye-slash-solid.svg");
        input.setAttribute("type", "password");
    }


});






















