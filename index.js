

let username;

document.getElementById("sub").onclick = function(){
       
    username = document.getElementById("username").value;
    if (username == "mishtifix"){
        window.location.href = "home.html";
    }


    else{
        document.getElementById("myh1").textContent = "Please try again";
    }
}