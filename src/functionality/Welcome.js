document.addEventListener("DOMContentLoaded", () => {
  const leftSoldier = document.getElementById("leftSoldier");
  const bubbletext1 = document.getElementById("bubbletext1");
  const rightSoldier = document.getElementById("rightSoldier");
  const bubbletext2 = document.getElementById("bubbletext2");
  const nextPageLink = document.getElementById("JourneyEmbarker");

  nextPageLink.style.display = "none";

  leftSoldier.style.display = "inline-block";
  rightSoldier.style.display = "inline-block";

  let pointInConversation = 0;

  leftSoldier.addEventListener("mouseenter", () => {
    if (pointInConversation === 0) {
      bubbletext1.style.backgroundImage = "url('../images/thoughtBubble.jpg')";
      bubbletext1.textContent = "I sure wish I could remember the Roman Empire...";
      pointInConversation = 1;
    } else if (pointInConversation === 2) {
      bubbletext1.style.backgroundImage = "url('../images/thoughtBubble.jpg')";
      bubbletext1.textContent = "Oh yeah? Well what are we waiting for? Let's sign up!";
      pointInConversation = 3;
    }
  });

  leftSoldier.addEventListener("mouseleave", () => {
    bubbletext1.textContent = "";
  });

  rightSoldier.addEventListener("mouseenter", () => {
    if (pointInConversation === 1) {
      bubbletext2.style.backgroundImage = "url('../images/thoughtBubble.jpg')";
      bubbletext2.textContent = "Didn't you hear? Mike and Marcel designed an incredible app to help us remember!";
      pointInConversation = 2;
    }
  });

  rightSoldier.addEventListener("mouseleave", () => {
    bubbletext2.textContent = "";
  });
});
