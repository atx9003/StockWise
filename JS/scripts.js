// const openModalButton = document.querySelector("#open-modal-edit");
// const closeModalButton = document.querySelector("#close-modal");
// const modal = document.querySelector("#modal");
// const fade = document.querySelector("#fade");

// // função
// const toggleModal = () => {
//   modal.classList.toggle("hide");
//   fade.classList.toggle("hide");
// };

// [openModalButton, closeModalButton, fade].forEach((el) => {
//   el.addEventListener("click", () => toggleModal());
// });

function openModal(title) {
  const modal = document.getElementById("modal");
  const modalBody = document.querySelector(".modal-body");
  const closeBtn = document.querySelector(".close");

  modalBody.innerHTML = `
     <h2>${title}</h2>
  `;

  modal.style.display = "block";

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // fechar modal ao clicar fora dele
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
