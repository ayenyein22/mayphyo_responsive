function downloadLink() {
  let name = prompt("What is your name?");
  let email = prompt("What's your email?");
  name = name.toLowerCase().trim();
  if (name === "may pho pwint" && email === "mayphyopwint6@gmail.com") {
    document.querySelector(".certi-download").innerHTML =
      "Okay I have confirmed that you are May Phyo, You can download your certificate now.";
  }
}

let certiLink = document.querySelector(".certi-link");
certiLink.addEventListener("click", downloadLink);
