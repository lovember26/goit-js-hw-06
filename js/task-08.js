const formEl = document.querySelector(".login-form");
const emailEl = formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value !== "" && password.value !== "") {
    const userData = { email: email.value, password: password.value };
    console.log(userData);
  } else {
    alert("Всі поля мають бути заповнені!");
  }

  event.currentTarget.reset();
}
