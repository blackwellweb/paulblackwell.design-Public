window.addEventListener("load", function() {
  // Get the modal
  var modal = document.getElementById("modal_one");

  var img = document.getElementsByClassName("modal_image_1");
  for (var i = 0; i < img.length; i++) {
    var modalImg = document.getElementById("img01");
    img[i].addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  }

  //Listen for outside click
  window.addEventListener("click", outsideClick);

  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
});
