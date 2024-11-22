const animatedLetter = document.getElementById("animated-letter");
const wave = document.getElementById("wave");

let toggle = true; 

function typingAnimation() {
  let currentText = toggle ? "c" : "k"; 
  let deleting = false;

  
  const type = setInterval(() => {
    if (deleting) {
      animatedLetter.textContent = ""; 
      wave.style.opacity = "0"; 
      deleting = false;

      setTimeout(() => {
        animatedLetter.textContent = currentText; 
        if (currentText === "k") {
          wave.style.opacity = "1"; 
        }
        toggle = !toggle; 
      }, 1000);
    } else {
      deleting = true; 
    }
  }, 300); 
}

setInterval(typingAnimation, 2000); 