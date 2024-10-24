const form = document.getElementById("form");
const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const tefelone = document.getElementById("telefone");
const passInput = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");
const noticeName = document.getElementById("noticeName");
const noticeEmail = document.getElementById("noticeEmail");
const noticeTel = document.getElementById("noticeTel");
const noticePass = document.getElementById("noticePass");
const noticeConfPass = document.getElementById("noticeConfPass");

form.addEventListener("submit", (e) => {
  // impede que o botão envie o formulário antes da validação do JS
  e.preventDefault();

  // verifica se o input do  nome tá preenchido
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

  // verifica se o numero foi preenchido corretamente
  if (tefelone.value === "" || !isNumberValid(tefelone.value)) {
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
  } else {
    noticePass.style.display = "none";
  }

  // verifica se a senha é igual a da confimação
  if (confirmaSenha.value !== passInput.value) {
    noticeConfPass.innerHTML = `As senhas não correspondem`;
    noticeConfPass.style.display = "block";
    return;
  } else {
    noticeConfPass.style.display = "none";
  }
  // se todos os campos estiverem preenchidos envie o form
  form.submit();
});

// função que valida o email
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

// função para validar o telefone
function isNumberValid(number) {
  const numberRegex = new RegExp(/^\(\d{2}\) \d{5}-\d{4}$/);

  if (numberRegex.test(number)) {
    return true;
  }

  return false;
}
