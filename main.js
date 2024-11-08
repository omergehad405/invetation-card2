let backgroundImageLoaded = false;

// نضع الصورة على الـ canvas لمرة واحدة
backgroundImage.onload = function () {
  canvas.width = backgroundImage.width;
  canvas.height = backgroundImage.height;
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  backgroundImageLoaded = true; // نعلم أن الصورة قد تم تحميلها
};

// دالة لتحميل الصورة المعدلة مع النص
function downloadImage() {
  const name = document.getElementById("userNameInput").value;

  if (!name) {
    alert("من فضلك أدخل اسمًا");
    return;
  }

  // إذا كانت الصورة قد تم تحميلها مسبقًا
  if (backgroundImageLoaded) {
    // إعادة رسم الصورة على الـ canvas فقط إذا كانت الصورة تم تحميلها
    ctx.clearRect(0, 0, canvas.width, canvas.height); // مسح الـ canvas أولاً
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // رسم الصورة من جديد

    // إضافة النص فوق الصورة
    ctx.font = '24px "Noto Nastaliq Urdu", serif';
    ctx.fillStyle = "#1f6851";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, canvas.width / 2, canvas.height * 0.325);

    // تحميل الصورة المعدلة
    const link = document.createElement("a");
    link.download = "invitation-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } else {
    alert("لم يتم تحميل الصورة بعد. يرجى الانتظار.");
  }
}
