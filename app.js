const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const popup = document.querySelector(".popup-bg");
const emailDisplay = document.querySelector("#emailAddress");
const checkSpan = document.querySelector(".checkSpan");
const dismissBtn = document.querySelector(".dismissBtn");
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

form.onsubmit = (event) => {
  event.preventDefault();
  if (!validateEmail(email.value)) {
    email.style.border = "1px solid hsl(0, 100%, 67%)";
    email.style.background = "hsla(0, 100%, 67%, 0.1)";
    checkSpan.style.display = "block";
  } else {
    email.style.border = "solid 1px rgba(0, 0, 0, 0.4)";
    emailDisplay.textContent = email.value;
    popup.classList.add("visible");
  }
};

dismissBtn.onclick = function () {
  popup.classList.remove("visible");
  location.reload();
};
