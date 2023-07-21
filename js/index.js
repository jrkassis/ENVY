function phonenumber() {
    var inputtxt = document.getElementById("specificSizeInputName").value;
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (inputtxt.value.match(phoneno)){
        return true;
    }
    else {
        alert("Wrong Number Format!");
        return false;
    }
}

