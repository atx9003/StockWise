function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaConfirma = document.getElementById("confirmaSenha").value;

  if (senha === "") {
    alert("Por favor, preencha este campo");
  } else if (senha.length < 8) {
    alert("A senha deve conter pelo menos 8 caracteres");
  }

  if (senha === senhaConfirma) {
    alert("As senhas são iguais");
  } else {
    alert("As senhas não correspondem");
  }
}
