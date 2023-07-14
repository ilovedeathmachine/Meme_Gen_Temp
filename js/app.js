const memeContainer = document.querySelector("#memeContainer");
const submitBtn = document.querySelector("form button");
const upperTextInput = document.querySelector("#upperTextInput");
const lowerTextInput = document.querySelector("#lowerTextInput");
const imageUrlInput = document.querySelector("#imageUrlInput");


function makeMeme(upperTextValue,lowerTextValue,imageUrlValue){
    if(imageUrlValue !== ''){
        const memeDiv = document.createElement("div");
        const upperText = document.createElement("p");
        const lowerText = document.createElement("p");
        const newMeme = document.createElement("img");
        const hoverDiv = document.createElement("div");
        const deleteBtn = document.createElement("button");

        upperText.innerText = upperTextValue;
        lowerText.innerText = lowerTextValue;
        deleteBtn.innerText = "X";
        upperText.classList.add("upperText");
        lowerText.classList.add("lowerText");
        deleteBtn.classList.add("deleteBtn");
        memeDiv.classList.add("memeDiv");
        hoverDiv.classList.add("hoverDiv");
        newMeme.setAttribute("src", imageUrlValue);

        memeDiv.append(upperText);
        memeDiv.append(lowerText);
        memeDiv.append(newMeme);
        memeDiv.append(hoverDiv);
        memeDiv.append(deleteBtn)
        memeContainer.append(memeDiv);

        deleteBtn.addEventListener('click', function (e) {
            memeDiv.remove()
        })
    }
}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let upperTextValue = upperTextInput.value;
    let lowerTextValue = lowerTextInput.value;
    let imageUrlValue = imageUrlInput.value;
    upperTextInput.value = "";
    lowerTextInput.value = "";
    imageUrlInput.value = "";
    makeMeme(upperTextValue,lowerTextValue,imageUrlValue)
});



// Default starting memes.
let meme1top = "thank goodness you're home!"
let meme1bottom = "the christmas tree fainted!"
let meme1url = 'https://imgs.search.brave.com/mY9lb2iaYg9pPoc2h4_qcDRg1PjHsiPTHYRViaTIBkc/rs:fit:620:618:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3L2Mw/L2MyLzg3YzBjMjYw/YjFlYWEwODc1NzBm/NGI4MGIxMzExOGQ5/LmpwZw'
makeMeme(meme1top,meme1bottom,meme1url)

let meme2top = "*sniffles*"
let meme2bottom = "all da foods gone"
let meme2url = 'https://imgs.search.brave.com/sAAiczCYzwkRutccLuA4rfzhMKxPuZiOl2x2WPnuxWM/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3ODQwQVN0/cjlmbzB5Uzd1U0xK/TVN0V05zTlZHVEFB/SUhWNkhRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v'
makeMeme(meme2top,meme2bottom,meme2url)

let meme3top = "yo"
let meme3bottom = "cool beats bro"
let meme3url = "https://imgs.search.brave.com/JJBrb6riQSkLmBRNJLvGzBiaZiQQKgpXtf8AGYkvMU4/rs:fit:691:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/V1FwSkM1N25ueU93/VGZVb0lNcFJRSGFG/RiZwaWQ9QXBp"
makeMeme(meme3top,meme3bottom,meme3url)