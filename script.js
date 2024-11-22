// Select DOM elements
const resultBox = document.getElementById('result-box');
const generateButton = document.getElementById('generate-button');
const minValueInput = document.getElementById('min-value');
const maxValueInput = document.getElementById('max-value');

// Add event listener to the Generate button
generateButton.addEventListener('click', function () {
  // Get user inputs
  const min = parseInt(minValueInput.value, 10);
  const max = parseInt(maxValueInput.value, 10);

  // Validate inputs
  if (isNaN(min) || isNaN(max) || min > max) {
    alert('Please enter valid numbers, and ensure that the minimum is less than or equal to the maximum.');
    return;
  }

  // Generate random number
  generateRandomNumber(min, max);
});

// Function to generate a random number and display it
function generateRandomNumber(min, max) {
  // Generate a random number
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Add blur animation
  resultBox.classList.remove('blur-animation');
  void resultBox.offsetWidth; // Trigger reflow to restart animation
  resultBox.classList.add('blur-animation');

  // Update the result box after animation
  setTimeout(() => {
    resultBox.textContent = randomNumber;
  }, 300); // Matches the animation duration
}
