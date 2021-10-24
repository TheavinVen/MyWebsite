document.querySelector(".submitBtn").addEventListener("click", function(){
    var fName = document.querySelector("#firstName").value;
    var lName = document.querySelector("#lastName").value;
    var gen = document.querySelector("#gender").value;
    var country = document.querySelector("#country").value;
    console.log(fName);
    // var day = document.querySelector("#day").value;
    // var month = document.querySelector("#month").value;
    // var year = document.querySelector("#year").value;
    //var dob = day.concat(month, year);
    var dob;
    dob=document.querySelector("#day").value;
    dob = dob.concat(document.querySelector("#month").value, document.querySelector("#year").value);

    // console.log(fName);
    // console.log(lName);
    // console.log(gen);
    // console.log(country);
    // console.log(dob);
    if(((fName == "Theavin" && lName == "Ven") || (fName == "theavin" && lName == "ven") || (fName == "Ven" && lName == "Theavin") || (fName == "ven" && lName == "theavin")) && gen == "Female" && dob =="28102001" && country == "Tbong Khmum")
    {
        document.getElementById('Mylove').click();
    }
    else if(fName != "" && lName != ""){
        localStorage.setItem("firstname", fName);
        localStorage.setItem("lastname", lName);
        document.getElementById('Welcome').click();
    }
    else{
        alert("Please enter all your information!");
    }
});

