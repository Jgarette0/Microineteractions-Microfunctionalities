function checkDiscount() {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const nameRecieve = nameInput.value;
  const ageRecieve = ageInput.value;
  let display ='';

  if (ageRecieve >= 65 || ageRecieve < 7) {
    display = 'You are eligible for a discount';
  } else {
    display = 'You are not eligible for a discount but';
  }

  alert(`Hello ${nameRecieve}!, Thank you for booking at Ferris. ${display} thank you for your service!`);
}

document.addEventListener("DOMContentLoaded", function() {
  const flipCardInner = document.querySelector('.flip-card-inner');
  flipCardInner.addEventListener("mouseenter", function() {
    flipCardInner.style.transform = "rotateY(180deg)";
  });
  flipCardInner.addEventListener("mouseleave", function() {
    flipCardInner.style.transform = "rotateY(0deg)";
  });
});
