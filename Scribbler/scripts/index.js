var createPostModal = document.getElementById("createPostModal");
var createPostBtn   = document.getElementById("createPostBtn");
var closeCreatePost = document.getElementById("closeCreatePost");

openModal = modal => {
    modal.style.display = "block";
};

closeModal = modal => {
    modal.style.display = "none";
};

createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

window.addEventListener("click", function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
});