//numbers
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// .about section
var aboutImage = document.querySelector(".about-image");
var aboutCurrentPos = 0;
var aboutImages = ["Picture1.jpg", "Picture2.jpg", "Picture3.jpg"];
function rotateAboutImage() {
  if (++aboutCurrentPos >= aboutImages.length)
    aboutCurrentPos = 0;
    aboutImage.src = aboutImages[aboutCurrentPos];
}
setInterval(rotateAboutImage, 3000);

//.partners section

var partnersCurrentPos = 0;
var partnersImages = ["barilla.png", "elite.png", "misko.png"];
var partnersTitles = ["EBEC", "BEST Course in Summer", "JobFair"];
var partnersTexts = ["Barilla", "Elite", "Misko"];
var partnersImage = document.querySelector(".partners-image");
var partnersText = document.querySelector(".partners-text");
var partnersTitle = document.querySelector(".partners-title");

function rotatePartnersImage() {
    partnersCurrentPos = (partnersCurrentPos + 1) % partnersImages.length;
    partnersImage.src = partnersImages[partnersCurrentPos];
    partnersText.textContent = partnersTexts[partnersCurrentPos];
    partnersTitle.textContent = partnersTitles[partnersCurrentPos]; 
}

setInterval(rotatePartnersImage, 3500);


