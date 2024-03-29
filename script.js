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

var eventsCurrentPos = 0;
var eventsImages = ["Event1.jpg", "Event2.jpg", "Event3.jpg"];
var eventsTitles = ["EBEC", "BEST Course in Summer", "JobFair"]; // Changed the variable name to eventsTitles
var eventsTexts = ["About Text 1", "About Text 2", "About Text 3"];
var eventsImage = document.querySelector(".events-image");
var eventsText = document.querySelector(".events-text");
var eventsTitle = document.querySelector(".events-title");

function rotateEventsImage() {
    // Increment the current position and loop back to the start if necessary
    eventsCurrentPos = (eventsCurrentPos + 1) % eventsImages.length;
    eventsImage.src = eventsImages[eventsCurrentPos];
    eventsText.textContent = eventsTexts[eventsCurrentPos];
    eventsTitle.textContent = eventsTitles[eventsCurrentPos]; // Corrected variable name
}

// Call rotateEventsImage function every 3000 milliseconds (3 seconds)
setInterval(rotateEventsImage, 3000);


