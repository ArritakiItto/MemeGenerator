let img = document.querySelector("#image-file");
let form = document.querySelector("form")
let topTxt = document.querySelector("#top-text");
let bottomTxt = document.querySelector("#bottom-text");
const button = document.querySelector("#submit");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const meme = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const imgFile = document.createElement("img");

    imgFile.src = document.getElementById("image-file").value;
    textTop.classList.add("top-text");
    textTop.innerHTML = document.getElementById("top-text").value;

    textBottom.classList.add("bottom-text");
    textBottom.innerHTML = document.getElementById("bottom-text").value;
      

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(imgFile);
    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

form.reset()
   
    });
