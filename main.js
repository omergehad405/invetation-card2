function updateName() {
  const userName = document.getElementById("userNameInput").value;
  document.getElementById("userNameDisplay").innerText = userName;
}

// لتحميل الصورة بعد التعديل
function downloadImage() {
  const name = document.getElementById("userNameInput").value;

  if (!name) {
    alert("من فضلك أدخل اسمًا");
    return;
  }

  const backgroundImage = new Image();
  backgroundImage.src = document.querySelector(".background-image").src;

  backgroundImage.onload = function () {
    // الحصول على الـ canvas والعناصر
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // تحديد أبعاد الـ canvas بناءً على الصورة
    canvas.width = backgroundImage.width;
    canvas.height = backgroundImage.height;

    // رسم الصورة على الـ canvas
    ctx.drawImage(backgroundImage, 0, 0);

    // تحديد حجم الخط ديناميكيًا بناءً على عرض الصورة
    const fontSize = Math.min(canvas.width, canvas.height) / 20; // يمكنك تعديل النسبة حسب الحجم المطلوب

    // إضافة النص بحجم ديناميكي
    ctx.font = `${fontSize}px "Noto Nastaliq Urdu", serif`;
    ctx.fillStyle = "#1f6851";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, canvas.width / 2.8, canvas.height * 0.325); // تحديد موقع النص

    // تصدير الصورة كـ Blob
    canvas.toBlob(function (blob) {
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);

      // تفعيل رابط التحميل
      link.href = url;
      link.download = "invitation-card.png"; // اسم الملف عند تحميله
      link.click();

      // تنظيف الرابط بعد التحميل
      URL.revokeObjectURL(url);
    }, "image/png");
  };
}
