const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

let i = 0

document.getElementById("counter").innerText =  "/" + images.length


document.getElementById("counter2").innerText = (i+1)%images.length

image = document.getElementById("main-image");

document.getElementById("arrowL").onclick = function(){
    i = (i-1+images.length)%images.length;
    image.src = images[i];
    document.getElementById("counter2").innerText = i + 1;
}

document.getElementById("arrowR").onclick = function(){
    i = (i+1)%images.length;
    image.src = images[i];
    document.getElementById("counter2").innerText = i + 1;
}



