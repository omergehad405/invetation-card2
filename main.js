const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const backgroundImage = document.getElementById("backgroundImage");
const userNameDisplay = document.getElementById("userNameDisplay");

// Update name on the design (displaying on the page while typing)
function updateName() {
  const name = document.getElementById("userNameInput").value;
  userNameDisplay.innerText = name;
}

// Function to download the modified image
function downloadImage() {
  const name = document.getElementById("userNameInput").value;

  if (!name) {
    alert("من فضلك أدخل اسمًا");
    return;
  }

  // Set canvas dimensions based on the image size
  canvas.width = backgroundImage.width;
  canvas.height = backgroundImage.height;

  // Draw the image on the canvas
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // Add the user's name to the image with the same style as in the CSS
  ctx.font = '24px "Noto Nastaliq Urdu", serif'; // Same font and size
  ctx.fillStyle = "#1f6851"; // Same color
  ctx.textAlign = "center"; // Align the text in the center
  ctx.textBaseline = "middle"; // Align vertically in the center
  ctx.fillText(name, canvas.width / 2.1, canvas.height * 0.325); // Position the text at 26.5% height

  // Create a link to download the image
  const link = document.createElement("a");
  link.download = "invitation-card.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
