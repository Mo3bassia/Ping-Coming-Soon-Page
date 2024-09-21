let small = document.querySelector("small");
let inputEmail = document.querySelector("input");
let buttonCheck = inputEmail.nextElementSibling;

buttonCheck.onclick = function () {
  if (inputEmail.value.match(/(\w)+@(\w)+.(\w)+/gi)) {
    inputEmail.classList.remove("border-LightRed");
    small.textContent = "Email sent!";
    small.classList.add("text-green-600");
    small.classList.remove("text-LightRed");
  } else {
    small.textContent = "Please enter a valid email!";
    small.classList.remove("text-green-600");
    small.classList.add("text-LightRed");
    inputEmail.classList.add("border-LightRed");
  }
  if (inputEmail.value == "") {
    small.textContent = "Please enter an email!";
    inputEmail.classList.add("border-LightRed");
    small.classList.remove("text-green-600");
  }
};
