window.addEventListener("load", function(){
    var fName = localStorage.getItem("firstname");
    var lName = localStorage.getItem("lastname");

    document.querySelector(".title h2").textContent = "Hello " + fName + " " + lName + " !";
})
