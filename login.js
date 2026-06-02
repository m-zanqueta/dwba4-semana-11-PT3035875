document.getElementById('btn-login').addEventListener('click', function () {
    var email = document.getElementById('login-email');
    var senha = document.getElementById('login-senha');

    if (!email.value || !senha.value) {
        alert('Preencha todos os campos.');
        return;
    }

    // Limpa os campos e mantém na mesma página
    email.value = '';
    senha.value = '';
    email.focus();
});