document.addEventListener("DOMContentLoaded", () => {
  const imageFileInput = document.querySelector("#imageFileInput");
  const canvas = document.querySelector("#meme");
  const topTextInput = document.querySelector("#topText");
  const bottomTextInput = document.querySelector("#bottomText");
  const saveBtn = document.querySelector("#saveBtn");
  const savedMemesContainer = document.querySelector("#savedMemes")


  let image;

  imageFileInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener(
      "load",
      () => {
        updateMemeCanvas(
          canvas,
          image,
          topTextInput.value,
         bottomTextInput.value
        );
     },
      { once: true }
    );
  });

  topTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
  });

  bottomTextInput.addEventListener("change", () => {
   updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
  });

  saveBtn.addEventListener("click", () => {
    const dataUrl = canvas.toDataUrl("image/png");
    saveMemeToLocalStorage(dataUrl);
    updateSavedMemes();
  });

  function updateMemeCanvas(canvas, image, topText, bottomText) {
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

   // Update canvas background
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

   // Prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    // Add top text
    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, yOffset);
    ctx.fillText(topText, width / 2, yOffset);

   // Add bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);
  }


  function saveMemeToLocalStorage(dataUrl) {
    // Check if LS avail
    if (typeof(Storage) !== "undefined") {
    // Generate unique key for meme
      const key = "meme" + Date.now();

    // Save to LS
      localStorage.setItem(key, dataUrl);

    // Send feedback to user

      try {
        alert("Meme saved successfully!");
      } catch (error) {
        console.error("Error saving meme to local storage", error);
        alert("Uh oh, there seems to be a problem...")
      }
    }
  }

  function updateSavedMemes() {
    savedMemesContainer.innerHTML = "";

    // CHekc if local LS avail
    if (typeof localStorage !== "undefined") {
      const keys = Object.keys(localStorage);

      keys.forEach((key) => {
        if (key.startsWith("meme")) {
          const dataUrl = localStorage.getItem(key);
          const img = document.createElement("img");
          img.src = dataUrl;
          savedMemesContainer.appendChild(img);
        }
      });
    }
  }

  // Initial update of saved memes
  updateSavedMemes();
});
