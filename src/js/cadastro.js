let inputNome = document.querySelector("#inputNome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let inputTelefone = document.querySelector("#inputTelefone");
let labelTelefone = document.querySelector("#labelTelefone");
let validTelefone = false;

let inputUsuario = document.querySelector("#inputUsuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let inputSenha = document.querySelector("#inputSenha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let inputConfSenha = document.querySelector("#inputConfSenha");
let labelConfSenha = document.querySelector("#labelConfSenha");
let validConfSenha = false;

let verSenha = document.querySelector("#verSenha");
let verConfSenha = document.querySelector("#verConfSenha");

let msgError = document.querySelector("#msgError");
let msgSucess = document.querySelector("#msgSucess");

verSenha.addEventListener("click", () => {
  let inputSenha = document.querySelector("#inputSenha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

verConfSenha.addEventListener("click", () => {
  let inputConfSenha = document.querySelector("#inputConfSenha");

  if (inputConfSenha.getAttribute("type") == "password") {
    inputConfSenha.setAttribute("type", "text");
  } else {
    inputConfSenha.setAttribute("type", "password");
  }
});

inputNome.addEventListener("keyup", () => {
  if (inputNome.value.length < 3) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = `Nome * Insira no minímo 3 caracteres`;
    inputNome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = `Nome`;
    inputNome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

inputTelefone.addEventListener("keyup", () => {
  if (inputTelefone.value.length < 11) {
    labelTelefone.setAttribute("style", "color: red");
    labelTelefone.innerHTML = `Telefone * Insira um número de telefone valido`;
    inputTelefone.setAttribute("style", "border-color: red");
    validTelefone = false;
  } else {
    labelTelefone.setAttribute("style", "color: green");
    labelTelefone.innerHTML = `Telefone`;
    inputTelefone.setAttribute("style", "border-color: green");
    validTelefone = true;
  }
});

inputUsuario.addEventListener("keyup", () => {
  if (inputUsuario.value.length < 10) {
    labelUsuario.setAttribute("style", "color: red");
    labelUsuario.innerHTML = `Usuario * Insira no minímo 11 caracteres`;
    inputUsuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    labelUsuario.innerHTML = `Usuario`;
    inputUsuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

inputSenha.addEventListener("keyup", () => {
  if (inputSenha.value.length <= 3) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = `Senha * Insira no minímo 4 caracteres`;
    inputSenha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = `Senha`;
    inputSenha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

inputConfSenha.addEventListener("keyup", () => {
  if (inputSenha.value !== inputConfSenha.value) {
    labelConfSenha.setAttribute("style", "color: red");
    labelConfSenha.innerHTML = `Confirmar senha * As senhas não correspondem`;
    inputConfSenha.setAttribute("style", "border-color: red");
    validConfSenha = false;
  } else {
    labelConfSenha.setAttribute("style", "color: green");
    labelConfSenha.innerHTML = `Confirmar senha`;
    inputConfSenha.setAttribute("style", "border-color: green");
    validConfSenha = true;
  }
});

document.querySelector("#cadastrar").addEventListener("click", (event) => {
  event.preventDefault();
  saveAccount();
});

function saveAccount() {
  if (
    validNome &&
    validTelefone &&
    validUsuario &&
    validSenha &&
    validConfSenha
  ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nome: inputNome.value,
      telefone: inputTelefone.value,
      usuario: inputUsuario.value,
      senha: inputSenha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSucess.setAttribute("style", "display: block");
    msgSucess.innerHTML = `<strong>Cadastrando usuário...</strong>`;
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = ``;

    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = `<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>`;
    msgSucess.innerHTML = ``;
    msgSucess.setAttribute("style", "display: none");
  }
}
