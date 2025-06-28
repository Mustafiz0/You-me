

let username;

document.getElementById("mysubmit").onclick = function(){
       
    username = document.getElementById("myinput").value
    if (username == "mishtifix"){
        window.location.href = "home.html";
    }
    else{
        document.getElementById("myh1").textContent = "Please try again"
    }
}