function showPass() {
  const inputPass = document.getElementById("password");
  const eyeShow = document.getElementById("eye");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    eyeShow.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    inputPass.setAttribute("type", "password");
    eyeShow.classList.replace("bi-eye-slash", "bi-eye");
  }
}

// validação dos inputs
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const noticeEmail = document.getElementById("noticeEmail");
const noticePass = document.getElementById("noticePass");

form.addEventListener("submit", (event) => {
  // cancela o envio do form antes da validção
  event.preventDefault();

  // verifica se o email foi digitado
  if (emailInput.value === "") {
    noticeEmail.innerHTML = "Por favor, digite o seu email";
    noticeEmail.style.display = "block";
    return;
  } else {
    noticeEmail.style.display = "none";
  }

  // valida se a senha foi digitada
  if (passInput.value === "") {
    noticePass.innerHTML = "Por favor, digite a sua senha";
    noticePass.style.display = "block";
    return;
  } else {
    noticePass.style.display = "none";
  }

  // envia o formulário depois de todas as validações
  form.submit();
});
