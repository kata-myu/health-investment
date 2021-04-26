const preview = () => {
  if (document.getElementById("user_image")){
    const imageInput = document.getElementById("user_image");
    if (imageInput.getAttribute("data-load") != null) {
      return null;
    }
    imageInput.setAttribute("data-load", "true");

    imageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      const imageArea = document.getElementById("user_image_area");
      const preview = document.createElement("img");
      preview.setAttribute("src", blob);
      preview.setAttribute("class", "user-image-preview");
      imageArea.appendChild(preview);
    });
  }
}
setInterval(preview, 1000);
