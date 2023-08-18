console.clear();
function getElememt(id) {
    return document.getElementById(id);
}

function getInputValue(id) {
    return getElememt(id).value;
}

function clearInputValue(id) {
    getElememt(id).value = "";
}

// login section
getElememt("loginBtn").addEventListener("click", function () {
    let userEmail = getInputValue("user-email");
    let userPass = getInputValue("user-pass");

    if (userEmail === "child@bap.com" && userPass === "12345") {
        getElememt("loginSection").style.display = "none";
        getElememt("dashboardSection").style.display = "block";
    } else {
        console.log("please check your email or password!");
    }
});


// diposit section
getElememt("dipositBtn").addEventListener("click", function() {
    let dipositAmount = parseFloat(getInputValue("dipositAmount"));
    let diposit = parseFloat(getElememt("diposit").innerHTML);
    let balance = parseFloat(getElememt("balance").innerHTML);

    getElememt("diposit").innerHTML = diposit + dipositAmount;
    getElememt("balance").innerHTML = balance + dipositAmount;

    clearInputValue("dipositAmount");
});


// withdraw section
getElememt("withdrawBtn").addEventListener("click", function() {
    let withdrawAmount = parseFloat(getInputValue("withdrawAmount"));
    let withdraw = parseFloat(getElememt("withdraw").innerHTML);
    let balance = parseFloat(getElememt("balance").innerHTML);

    getElememt("withdraw").innerHTML = withdraw + withdrawAmount;
    getElememt("balance").innerHTML = balance - withdrawAmount;

    clearInputValue("withdrawAmount");
});