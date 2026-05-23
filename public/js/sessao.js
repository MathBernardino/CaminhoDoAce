// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function mostrarAlert(mensagem) {
    document.getElementById("alertMensagem").textContent = mensagem;
    document.getElementById("alertCustom").style.display = "flex";
}

function fecharAlert() {
    document.getElementById("alertCustom").style.display = "none";
}

