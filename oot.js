function validateForm() {
    let validForm = 1
    let x = document.forms["feedback"]["name"].value;
    if (x == "") {
        alert("The name field is blank");
        validForm = 0;
        return false;
    }

    let y = document.forms["feedback"]["email"].value;
    let atSymbol = y.indexOf('@');
    let emailDot = y.indexOf('.');
    let dotCo = y.indexOf('co');

    if ((atSymbol < 1) || ((emailDot - atSymbol) < 2) || ((dotCo - emailDot) < 1)) {
        alert("You did not input a valid email address");
        validForm = 0;
        return false;
    }
    
    let z = document.forms["feedback"]["comment"].value;
    if(z == "") {
        alert("The comment section is blank");
        validForm = 0;
        return false;
    }

    if (validForm == 1) {
        alert("Thank you for your time and feedback!");
    }
}

function displayWelcome() {
    let x = document.getElementById("welcomecontent");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function displayTheory() {
    let x = document.getElementById("theorycontent");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function displaySynopsis() {
    let x = document.getElementById("synopsiscontent");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function displayTimeTravel() {
    let x = document.getElementById("timetravelcontent");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}