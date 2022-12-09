let verSenha = document.querySelector(".fa-eye");

verSenha.addEventListener("click", () => {
  let senha = document.querySelector("#inputSenha");

  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});

document.querySelector("#logar").addEventListener("click", (event) => {
  event.preventDefault();
  login();
});

function login() {
  let usuario = document.querySelector("#inputUsuario");
  let labelUsuario = document.querySelector("#labelUsuario");

  let senha = document.querySelector("#inputSenha");
  let labelSenha = document.querySelector("#labelSenha");

  let msgError = document.querySelector("#msgError");

  let listaUser = [];

  let userValid = {
    nome: "",
    telefone: "",
    usuario: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (usuario.value === item.usuario && senha.value === item.senha) {
      userValid = {
        nome: item.nome,
        telefone: item.telefone,
        usuario: item.usuario,
        senha: item.senha,
      };
    }
  });

  if (usuario.value === userValid.usuario && senha.value === userValid.senha) {
    window.location.href = "home.html";

    let token = Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);

    localStorage.setItem("userLogged", JSON.stringify(userValid));
  } else {
    labelUsuario.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    labelSenha.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = `Usuário ou senha incorretos`;
    usuario.focus();
  }
}
