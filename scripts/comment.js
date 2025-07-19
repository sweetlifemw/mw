document.addEventListener("DOMContentLoaded", () => {
  const names = ["Chikondi", "Thokozani", "Blessings", "Tamara", "Limbani", "Mphatso", "Tiwonge", "Chimwemwe", "Yamikani", "Fatsani", "Zione", "Precious", "Dalitso", "Tadala", "Mayeso", "Alinafe", "Wiza", "Chifundo", "Memory", "Pilirani", "Hope", "Inno", "Madalitso", "Bright", "Misheck"];
  const fakeComments = ["I really love this!", "This is amazing!", "Wow, didn’t expect this!", "Keep it up!", "Best site ever!", "So interesting!", "How do I join?", "Looks legit!", "Following now.", "Can’t believe this works!", "Already deposited!", "I'm enjoying this so much."];
  const timeOptions = ["Now", "1 min ago", "2 mins ago", "3 mins ago", "5 mins ago", "Just now"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generateComments() {
    const container = document.getElementById("commentSection");
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const name = names[getRandomInt(names.length)];
      const comment = fakeComments[getRandomInt(fakeComments.length)];
      const time = timeOptions[getRandomInt(timeOptions.length)];

      const commentElement = document.createElement("div");
      commentElement.className = "testimony";
      commentElement.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="comment-icon" alt="icon" />
        <div class="comment-content">
          <div class="comment-left">
            <div class="comment-name">${name}</div>
            <div class="comment-text">${comment}</div>
          </div>
          <div class="comment-time">${time}</div>
        </div>
      `;

      container.appendChild(commentElement);
    }
  }

  generateComments();

  // Popup logic
  window.showMoneyPopup = function () {
    const popup = document.getElementById("moneyPopup");
    if (popup) popup.style.display = "flex";
  };

  window.closePopup = function () {
    const popup = document.getElementById("moneyPopup");
    if (popup) popup.style.display = "none";
  };

  window.goToAccount = function () {
    window.location.href = "./account.html";
  };
});
