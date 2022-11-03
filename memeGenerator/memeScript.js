const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image;

imageFileInput.addEventListener("change", () => {
    const imageDataUrl = URL.createObjectURL(imageFilenput.files[0]);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateMemeCanvas(canvas, image, topTextInput.ariaValueMax, bottomTextInput.value);
    }, { once: true });
});

topTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});
bottomTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
    const contxt = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;


    canvas.width = width;
    canvas.height = height;
    contxt.drawImage(image, 0, 0);

    contxt.strokeStyle = "black";
    contxt.lineWidth = Math.floor(fontSize /4);
    contxt.fillStyle = "white";
    contxt.textAlign = "center";
    contxt.lineJoin = "round";
    contxt.font = `${fontSize}px san-serif`;

    //topText
    contxt.textBaseline = "top";
    contxt.strokeText(topText, width / 2, yOffset);
    contxt.fillText(topText, width / 2, yOffset);

    //bottomText
    contxt.textBaseline = "bottom";
    contxt.strokeText(topText, width / 2, height - yOffset);
    contxt.fillText(topText, width / 2, height - yOffset);
}