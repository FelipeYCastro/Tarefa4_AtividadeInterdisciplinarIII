const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  ativar(msg);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  CheckInputs();
});

function CheckInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome do usuáro é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um e-mail válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className == "form-control success";
  });

  if (formIsValid) {
    alert("O formulário está preenchido corretamente!");
  }
}

//
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // mensagem de erro
  small.innerText = message;

  //classe erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

//checador de email valido
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
