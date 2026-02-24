<script>
  const texts = [
    "Hi, I am Aayu 👋",
    "I am a Student 📚",
    "Future Developer 💻",
    "Proud From Garhani 🌿"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function typeEffect() {
    currentText = texts[textIndex];
    
    if (!isDeleting) {
      document.getElementById("typing").innerHTML =
        currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    } else {
      document.getElementById("typing").innerHTML =
        currentText.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
</script>
