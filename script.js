const appContainer = document.getElementById("root");

const firstButton = document.createElement("button");
firstButton.id = "checkButton";
firstButton.textContent = "Реалізувати перевірку на http/https";
appContainer.appendChild(firstButton);

const inputElement = document.createElement("input");
inputElement.value = "www.ithillel.ua";
appContainer.appendChild(inputElement);

const secondButton = document.createElement("button");
secondButton.textContent = "Переадресовується на інший сайт";
secondButton.id = "redirectButton";
appContainer.appendChild(secondButton);

const validRedirect = (urlFromInput) => {
  const regex = /^(https?:\/\/)/;
  if (urlFromInput.trim() === "") {
    alert(
      "Будь ласка, введіть дійсну електронну адресу наприклад: www.amazon.com"
    );
    return;
  } else if (regex.test(urlFromInput)) {
    inputElement.value = urlFromInput;
  } else {
    inputElement.value = "http://" + urlFromInput;
  }
};
document.addEventListener("click", (event) => {
  if (event.target.id === "checkButton") {
    validRedirect(inputElement.value);
  } else if (event.target.id === "redirectButton") {
    window.open(inputElement.value, "_blank");
  }
});