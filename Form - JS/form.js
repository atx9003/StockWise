const form = document.getElementById("form");
const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telefone = document.getElementById("telefone");
const passInput = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");
const noticeName = document.getElementById("noticeName");
const noticeEmail = document.getElementById("noticeEmail");
const noticeTel = document.getElementById("noticeTel");
const noticePass = document.getElementById("noticePass");
const noticeConfPass = document.getElementById("noticeConfPass");

// variável para envio do form
const inputs = document.querySelectorAll(`form input`);

form.addEventListener("submit", (e) => {
  // impede que o botão envie o formulário antes da validação do JS
  e.preventDefault();

  // verifica se o input do nome tá preenchido
  if (nameInput.value === "") {
    noticeName.innerHTML = `Por favor, preencha o seu nome`;
    noticeName.style.display = "block";
    return;
  } else {
    noticeName.style.display = "none";
  }

  // verifica se o email foi preenchido corretamente
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    noticeEmail.innerHTML = `Por favor, informe um email válido`;
    noticeEmail.style.display = "block";
    return;
  } else {
    noticeEmail.style.display = "none";
  }

  // verifica se o número foi preenchido corretamente
  if (telefone.value === "" || !isNumberValid(telefone.value)) {
    noticeTel.innerHTML = `Por favor, digite um número no seguinte padrão: (XX) XXXXX-XXXX`;
    noticeTel.style.display = "block";
    return;
  } else {
    noticeTel.style.display = "none";
  }

  // verifica se a senha está vazia ou se tem no mínimo 8 caracteres
  if (passInput.value === "") {
    noticePass.innerHTML = `Por favor, crie uma senha`;
    noticePass.style.display = "block";
    return;
  } else if (passInput.value.length < 8) {
    noticePass.innerHTML = `A sua senha deve conter no mínimo 8 caracteres`;
    noticePass.style.display = "block";
    return;
  } else if (passInput.value.length > 20) {
    noticePass.innerHTML = `A sua senha deve conter no máximo 20 caracteres`;
    noticePass.style.display = "block";
    return;
  } else {
    noticePass.style.display = "none";
  }

  // verifica se a senha é igual a da confirmação
  if (confirmaSenha.value !== passInput.value) {
    noticeConfPass.innerHTML = `As senhas não correspondem`;
    noticeConfPass.style.display = "block";
    return;
  } else {
    noticeConfPass.style.display = "none";
  }

  // se todos os campos estiverem preenchidos, envie o formulário
  form.submit();
  // redireciona para a página login.html após o envio do formulário
  window.location.href = "/Login - HTML/login.html";
});

// função que valida o email
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  return emailRegex.test(email);
}

// função para validar o telefone
function isNumberValid(number) {
  const numberRegex = new RegExp(/^\(\d{2}\) \d{5}-\d{4}$/);
  return numberRegex.test(number);
}

// evento para enviar o form ao pressionar Enter
inputs.forEach((input) => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      form.dispatchEvent(new Event("submit"));
    }
  });
});
