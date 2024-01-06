document.addEventListener("DOMContentLoaded", function () {
  generateCaptcha();

  document.getElementById("checkButton").addEventListener("click", function () {
    checkCaptcha();
  });
});

function generateCaptcha() {
  const captchaText = generateRandomString(6); // Change the length as needed
  document.getElementById("captchaText").textContent = captchaText;
}

function generateRandomString(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }

  return result;
}

function checkCaptcha() {
  const userInput = document.getElementById("userInput").value;
  const captchaText = document.getElementById("captchaText").textContent;

  if (userInput === captchaText) {
    alert("CAPTCHA passed!");
    generateCaptcha(); // Generate a new CAPTCHA after a successful match
  } else {
    alert("CAPTCHA failed. Please try again.");
    generateCaptcha(); // Generate a new CAPTCHA after a failed attempt
  }

  document.getElementById("userInput").value = ""; // Clear the input field
}






