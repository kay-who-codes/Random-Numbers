document.getElementById('generate-button').addEventListener('click', function () {
  // Get user inputs
  const min = parseInt(document.getElementById('min-value').value, 10);
  const max = parseInt(document.getElementById('max-value').value, 10);

  // Validate inputs
  if (isNaN(min) || isNaN(max) || min > max) {
    alert('Please enter valid numbers, and ensure that the minimum is less than or equal to the maximum.');
    return;
  }

  // Generate random number
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Update result box with blur animation
  const resultBox = document.getElementById('result-box');
  resultBox.classList.remove('blur-animation');
  void resultBox.offsetWidth; // Trigger reflow to restart animation
  resultBox.classList.add('blur-animation');

  setTimeout(() => {
    resultBox.textContent = randomNumber;
  }, 300); // Matches the animation duration
});
