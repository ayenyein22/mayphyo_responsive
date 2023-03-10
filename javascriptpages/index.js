function checkAndDownload(event) {
  event.preventDefault();
  password = prompt("To verify you are May Phyo, Enter our friendship code.");
  if ((password = "773823032003")) {
    document.querySelector(".certi-Link").innerHTML = "Click To Download";
    document.querySelector(".certi-Link").href =
      "https://drive.google.com/file/d/1v35SmKYCJ6twqoy5hPF-20bYawNjFzw5/view?usp=share_link";
    document.querySelector(".download-certi-para").innerHTML =
      "Okay, you are May Phyo!!! Now click the link!!";
  }
}
let link = document.querySelector(".certi-link");
link.addEventListener("click", checkAndDownload);

//Photo Gallery
const images = [
  "/images/images_people/mayphyo-green.jpeg",
  "/images/images_people/mayphyo-green.jpeg",
  "/images/images_people/mayphyo-green.jpeg",
  "/images/images_people/mayphyo-green.jpeg",
  "/images/images_people/mayphyo-green.jpeg",
];
function displayImages() {
  const gallery = document.querySelector(".middle");
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    gallery.appendChild(img);
  }
}
window.onload = function () {
  displayImages();
};
