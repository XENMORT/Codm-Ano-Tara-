"use strict";

const tontonGifs = [
"https://media.tenor.com/CjlhwCXmOSgAAAAi/marsey-drama.gif",
"https://c.tenor.com/jL5e3AdC7jIAAAAd/tenor.gif",
"https://media.tenor.com/URQcWYKN3ZoAAAAi/cat.gif",
"https://c.tenor.com/vB-w7iKKQsMAAAAC/tenor.gif",
"https://c.tenor.com/StyK0kLY-5oAAAAC/tenor.gif",
"https://c.tenor.com/u8M7kk5ZXmwAAAAC/tenor.gif"
];

const title = document.querySelector(".title");
const btnCOntainer = document.querySelector(".buttons");
const YesBtn = document.querySelector(".btn-Yes");
const NoBtn = document.querySelector(".btn-No");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;

YesBtn.addEventListener("click", ()=> {
    title.innerHTML = "YAY! WILL DAN";
    btnCOntainer.classList.add("hidden");
    changeImage("yes");
});

NoBtn.addEventListener("click", ()=> {
    if(play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        shrinkNoButton();
        title.innerHTML = generateMessage(noCount);
        if(noCount == MAX_IMAGES) play = false;
    }
});

function resizeYesButton() {
    const currentSize = parseFloat(window.getComputedStyle(YesBtn).fontSize);
    YesBtn.style.fontSize = `${currentSize * 1.6}px`;
}

function shrinkNoButton() {
    noButtonSize -= 0.25;
    NoBtn.style.transform = `scale(${noButtonSize})`;
}
function generateMessage(noCount) {
    const messages = [
        "No? ☹️",
        "Sure uy 😕",
        "Sige Na pleaseeeee 🙏",
        "Muhilak jud ko ron 😢",
        "Nihilak nako 😭"
    ];
    return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
    img.src = 
    image === "yes" 
    ? "https://media.tenor.com/CnP64S7lszwAAAAi/meme-cat-cat-meme.gif"
    : tontonGifs[image];
}
