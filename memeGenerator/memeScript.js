let img = document.querySelector("image-file");
let form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const img = document.createElement("img");

    img.src = document.getElementById("image-file").value;
    textTop.classList.add("textTop");
    textTop.innerHTML = document.getElementById("top-text").value;

    textBottom.classList.add("bottom-text");
    textBottom.innerHTML = document.getElementById("bottom-text").value;
      

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

form.reset()
   
    })
