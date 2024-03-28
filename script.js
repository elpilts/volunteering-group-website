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

// Rotate images in the .about section
var aboutImage = document.querySelector(".about-image");
var aboutCurrentPos = 0;
var aboutImages = ["Picture1.jpg", "Picture2.jpg", "Picture3.jpg"];
function rotateAboutImage() {
  if (++aboutCurrentPos >= aboutImages.length)
    aboutCurrentPos = 0;
    aboutImage.src = aboutImages[aboutCurrentPos];
}
setInterval(rotateAboutImage, 3000);

// Rotate images in the .events section
var eventsImage = document.querySelector(".events-image");
var eventsCurrentPos = 0;
var eventsImages = ["Event1.jpg", "Event2.jpg", "Event3.jpg"];
function rotateEventsImage() {
  if (++eventsCurrentPos >= eventsImages.length)
    eventsCurrentPos = 0;
    eventsImage.src = eventsImages[eventsCurrentPos];
}
setInterval(rotateEventsImage, 3000);

/*var aboutImages = ["Picture1.jpg", "Picture2.jpg", "Picture3.jpg"];
var aboutTexts = ["About Text 1", "About Text 2", "About Text 3"];
var aboutImage = document.querySelector(".about-image");
var aboutText = document.querySelector(".about-text");
var currentPos = 0;

function rotateImage() {
    if (++currentPos >= aboutImages.length)
        currentPos = 0;
    aboutImage.src = aboutImages[currentPos];
    aboutText.textContent = aboutTexts[currentPos]; // Update text
}

setInterval(rotateImage, 3000); */