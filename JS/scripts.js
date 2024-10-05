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
              <!-- header do modal -->
              <div class="header">
                <h2>${title}</h2>
              </div>
              <!-- body do modal -->
              <div class="body">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum eos distinctio, culpa dolorem beatae delectus? Itaque
                  ullam eos quas recusandae ad? Et enim quas accusantium ipsam
                  fugit, maxime consectetur ipsum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem provident illum quibusdam similique reprehenderit ex
                  doloremque. Culpa eligendi, odit ipsum molestiae minima harum
                  adipisci itaque eveniet sunt totam eum tempore.
                </p>
              </div>
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
