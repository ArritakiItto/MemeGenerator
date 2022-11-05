let img = document.querySelector("#image-file");
let form = document.querySelector("form")
let topTxt = document.querySelector("#top-text");
let bottomTxt = document.querySelector("#bottom-text");
const button = document.querySelector("#submit");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const memeImage = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const imgFile = document.getElementById("image-file");

    imgFile.src = document.getElementById("image-file").value;
    textTop.classList.add("top-text");
    textTop.innerHTML = document.getElementById("top-text").value;

    textBottom.classList.add("bottom-text");
    textBottom.innerHTML = document.getElementById("bottom-text").value;
      

    memeImage.classList.add("meme");
    memeImage.append(textTop);
    memeImage.append(textBottom);
    memeImage.append(imgFile);
    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

form.reset()
   
