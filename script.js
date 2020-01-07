function createpw(){
    let length = document.getElementById("slider").value;

    const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var i = 0; i<= length; i++)
    {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)))
    }

    document.getElementById("password").value = password;
}

document.getElementById("length").innerHTML ="Length : 25";

document.getElementById('slider').oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length :" + document.getElementById("slider").value;
    }
    else
    {
        document.getElementById("length"),innerHTML = "Length : 1"
    }
}

function copyPW(){
    document.getElementById("password").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}