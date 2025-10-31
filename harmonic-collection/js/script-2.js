document.addEventListener('DOMContentLoaded') , () => {
  const animatedText = document.querySelector('.content');
}

// Get the span and audio elements by their IDs
const clickMe = document.getElementById(".effect");
const soundEffect = document.getElementById("sound-effect");

// Add a click event listener to the span
clickMe.addEventListener("hover", () => {
  // Play the sound when the span is clicked
  soundEffect.play();
});