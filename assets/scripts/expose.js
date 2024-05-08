// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // initializing parameters
  const volume = document.getElementById("volume");
  const horn = document.getElementById("horn-select");
  const soundButton = document.querySelector("button");

  // volume image changed if slider moved
  volume.addEventListener('input', (event) => {
    const volumeImage = document.querySelector('#volume-controls img');
    const volumeNumber = event.target.value;
    if (volumeNumber == 0) {
      volumeImage.src = './assets/icons/volume-level-0.svg';
    } else if (volumeNumber < 33) {
        volumeImage.src = './assets/icons/volume-level-1.svg';
    } else if (volumeNumber < 67) {
        volumeImage.src = './assets/icons/volume-level-2.svg';
    } else {
        volumeImage.src = './assets/icons/volume-level-3.svg';
    }
  });

  // image/audio being shown/played changed
  horn.addEventListener('change', (event) => {
    const image = document.querySelector('img');
    const audio = document.querySelector('audio');
    image.src = `./assets/images/${event.target.value}.svg`;
    audio.src = `./assets/audio/${event.target.value}.mp3`;
  });

  // confetti for party horn
  const jsConfetti = new JSConfetti();

  // playing audio if button is clicked
  soundButton.addEventListener('click', (event) => {
    const audio = document.querySelector('audio');
    audio.volume = volume.value / 100;
    audio.play();

    // confetti only if party-horn
    if(horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}