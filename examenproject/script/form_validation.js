const achternaam = document.querySelector("#achternaam");
achternaam.style.backgroundColor = "yellow";
const achternaamVal = document.createElement("p");
achternaamVal.style.visibility = "hidden";
achternaamVal.textContent = "Je ingevoerde waarde is kleiner dan 5 tekens.";
achternaamVal.style.color = "darkred";
achternaamVal.style.fontSize = "0.8em";
achternaam.after(achternaamVal);

const email = document.querySelector("#email");
email.style.backgroundColor = "orange";
const emailVal = document.createElement("p");
emailVal.style.visibility = "hidden";
emailVal.textContent = "Je ingevoerde e-mail behoort niet tot het KdG domein.";
emailVal.style.color = "darkred";
emailVal.style.fontSize = "0.8em";
email.after(emailVal);

let achternaamValidatie = false;
let emailValidatie = false;

function achterValFunc(event) {
  if (event.target.value.length < 5) {
    achternaamVal.style.visibility = "visible";
    achternaamValidatie = false;
  } else {
    achternaamVal.style.visibility = "hidden";
    achternaamValidatie = true;
  }
}

function emailValFunc(event) {
  const option =
    /^\w+[.][a-z]+[1-9]@kdg.be$|^\w+[.][a-z]+@kdg.be$|^\w+[.][a-z]+[1-9]@student.kdg.be$|^\w+[.][a-z]+@student.kdg.be$/;
  if (event.target.value.match(option)) {
    emailVal.style.visibility = "hidden";
    emailValidatie = true;
  } else {
    emailVal.style.visibility = "visible";
    emailValidatie = false;
  }
}

achternaam.addEventListener("focusout", achterValFunc);

email.addEventListener("keyup", emailValFunc);

const submitKnop = document.querySelector(".submitKnop");
const submitVal = document.createElement("p");
submitVal.style.visibility = "hidden";
submitVal.textContent = "Niet alle velden zijn correct ingevuld.";
submitVal.style.color = "darkred";
submitKnop.after(submitVal);

window.addEventListener("load", init);
function init() {
  const formulier = document.querySelector("#bform");
  formulier.addEventListener("submit", submitValFunc);
}

function submitValFunc(event) {
  if (!achternaamValidatie || !emailValidatie) {
    submitVal.style.visibility = "visible";
    event.preventDefault();
  } else {
    submitVal.style.visibility = "hidden";
  }
}
