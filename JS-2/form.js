function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaConfirma = document.getElementById("confirmaSenha").value;

  if (senha === senhaConfirma) {
    alert("As senhas são iguais");
  } else {
    alert("As senhas não correspondem");
  }
}
