let userLogged = JSON.parse(localStorage.getItem("userLogged"));

let logged = document.querySelector("#logged");

logged.innerHTML = `Seja bem vindo(a) ` + userLogged.nome;

document.querySelector("#sair").addEventListener("click", () => {
  logout();
});

if (localStorage.getItem("token") == null) {
  alert("Você precisa está logado para entrar");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogged");
  window.location.href = "index.html";
}
