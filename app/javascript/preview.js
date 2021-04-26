if(document.URL.match(/sign_up/) || document.URL.match(/edit/)) {
  window.addEventListener("load", () => {
    const imageInput = document.getElementById("user_image");
    imageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      const imageArea = document.getElementById("user_image_area");
      const preview = document.createElement("img");
      preview.setAttribute("src", blob);
      preview.setAttribute("class", "user-image-preview");
      imageArea.appendChild(preview);
    });
  });
}