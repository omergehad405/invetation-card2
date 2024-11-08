const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const backgroundImage = document.getElementById("backgroundImage");
const userNameDisplay = document.getElementById("userNameDisplay");

function updateName() {
  const name = document.getElementById("userNameInput").value;
  userNameDisplay.innerText = name;
}

function downloadImage() {
  const name = document.getElementById("userNameInput").value;

  if (!name) {
    alert("من فضلك أدخل اسمًا");
    return;
  }

  // زيادة دقة الـ canvas على أساس devicePixelRatio
  const scaleFactor = window.devicePixelRatio || 1;
  canvas.width = backgroundImage.width * scaleFactor;
  canvas.height = backgroundImage.height * scaleFactor;
  ctx.scale(scaleFactor, scaleFactor);

  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // إعدادات النص
  ctx.font = '24px "Noto Nastaliq Urdu", serif';
  ctx.fillStyle = "#1f6851";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name, canvas.width / 2, canvas.height * 0.325);

  // تحويل الصورة إلى بيانات صورة مع الحفاظ على الجودة
  const link = document.createElement("a");
  link.download = "invitation-card.png";
  link.href = canvas.toDataURL("image/png", 1.0); // "1.0" للحفاظ على أفضل جودة
  link.click();
}
