
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

var signUpBtn  = document.getElementById("signUpBtn");
var signInBtn  = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

openModal = modal => {
    modal.style.display = "block";
};

closeModal = modal => {
    modal.style.display = "none";
};

signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

// Event to handle the click on outer area which closes the modal
window.addEventListener("click", function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
});

signUpLink.onclick = function() {
  closeModal(signInModal);
  openModal(signUpModal);
};