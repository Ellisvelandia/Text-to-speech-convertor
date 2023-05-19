let text = document.getElementById("text");
let submitButton = document.getElementById("submit");
let resumeButton = document.getElementById("resume");
let pauseButton = document.getElementById("pause");

let audioMessage;

submitButton.addEventListener("click", () => {
  audioMessage.text = text.value;
  window.speechSynthesis.speak(audioMessage);
});

resumeButton.addEventListener("click", () => {
  pauseButton.style.display = "block";
  resumeButton.style.display = "none";
  if (speechSynthesis.pause) {
    speechSynthesis.resume();
  }
});

pauseButton.addEventListener("click", () => {
  pauseButton.style.display = "none";
  resumeButton.style.display = "block";
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

window.onload = () => {
  resumeButton.style.display = "none";
  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthesis is not Supported");
  }
};
