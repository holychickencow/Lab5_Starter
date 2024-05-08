// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // parameters
  const button = document.querySelector('button');
  const face = document.querySelector('img');
  const select = document.getElementById('voice-select');
  const inputText = document.getElementById('text-to-speak');
  const synth = window.speechSynthesis;

  // check if the voices have been loaded before populating the dropdown
  speechSynthesis.onvoiceschanged = speechSynthesis.onvoiceschanged !== undefined ? dropdown : null;

  // filling in dropdown
  function dropdown() {
    synth.getVoices().forEach(voice => {
        const options = document.createElement("option");
        options.textContent = `${voice.name} (${voice.lang})`;
        options.setAttribute("data-lang", voice.lang);
        options.setAttribute("data-name", voice.name);
        select.appendChild(options);
    });
  }

  // when button is clicked
  button.addEventListener('click', function() {
    const selectedOption = select.selectedOptions[0];
    const lang = selectedOption.getAttribute('data-lang');
    const name = selectedOption.getAttribute('data-name');
    const talkingTime = new SpeechSynthesisUtterance(inputText.value);

    // setting name and language and speaking it
    talkingTime.name= name;
    talkingTime.lang = lang;
    synth.speak(talkingTime);

    // talking animation
    talkingTime.onstart = function() {
      face.src = 'assets/images/smiling-open.png';
    }
    talkingTime.onend = function() {
      face.src = 'assets/images/smiling.png';
    }
  });
}