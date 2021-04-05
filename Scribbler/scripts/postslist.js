// Search the modals and obtain the reference here
var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");


var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);

// Delete the seleted post
var selectedPost;
openDeletePostModal = (deletePostModal, clickedIcon) => {
  selectedPost = "";
  openModal(deletePostModal);
  selectedPost = clickedIcon.closest(".post");
};

deletePost = () => {
  selectedPost.remove();
  closeModal(deletePostModal);
};


deleteIconsArray.map(deleteIcon => {
    deleteIcon.addEventListener("click", e =>
      openDeletePostModal(deletePostModal, e.target)
    );
});

window.addEventListener("click", function(event) {
    if (event.target == deletePostModal) {
      deletePostModal.style.display = "none";
    }
});

cancelDelete.addEventListener("click", () => closeModal(deletePostModal));
confirmDelete.addEventListener("click", () => deletePost());


var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);

dotsArray.map(dot => {
    dot.addEventListener("click", e => navigateToPost(e.target));
});

navigateToPost = postThread => {
    var post = postThread.closest(".post");
    var author = post.querySelector(".username p").textContent.trim();
    var postTitle = post.querySelector(".title p").textContent.trim();
    var postContent = post.querySelector(".content").textContent.trim();

    sessionStorage.setItem("author", author);
    sessionStorage.setItem("postTitle", postTitle);
    sessionStorage.setItem("postContent", postContent);
    window.location.href = "../html/post.html";
};