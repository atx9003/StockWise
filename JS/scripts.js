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
  // obtem os elementos do HTML e armazena-os em uma variável
  const modal = document.getElementById("modal");
  const modalBody = document.querySelector(".modal-body");
  const closeBtn = document.querySelector(".close");

  // Faz o modal aparecer
  modal.style.display = "block";

  // Acrescenta o que estiver dentro das crases no HTML
  modalBody.innerHTML = `
              <div class="header">
                <h2>Editar</h2>
              </div>
              <form action="" class="form-edit">
                <div class="box-input">
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Insira o nome do produto"
                    class="block"
                  />
                </div>
                <div class="box-input">
                  <label for="preco">Preço</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Insira o preço do produto"
                    class="block"
                  />
                </div>
                <div class="box-input">
                  <label for="qtd">Quantidade</label>
                  <input
                    type="text"
                    name="qtd"
                    placeholder="Insira o quantidade do produto"
                    class="block"
                  />
                </div>
                <input type="submit" name="" id="salvar" value="Salvar" />
              </form>
  `;

  // dá ao span a funcionalidade de fechar o modal
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
