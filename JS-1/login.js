function showPass() {
  const inputPass = document.getElementById("pass");
  const eyeShow = document.getElementById("eye");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    eyeShow.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    inputPass.setAttribute("type", "password");
    eyeShow.classList.replace("bi-eye-slash", "bi-eye");
  }
}
