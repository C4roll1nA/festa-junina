document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".caixa img");

  imagens.forEach(function (img) {
    img.addEventListener("click", function () {
      // Cria o fundo escuro
      const popup = document.createElement("div");
      popup.classList.add("img-popup");

      // Cria a imagem ampliada
      const popupImg = document.createElement("img");
      popupImg.src = img.src;

      // Adiciona a imagem ao popup
      popup.appendChild(popupImg);

      // Adiciona o popup ao corpo do documento
      document.body.appendChild(popup);

      // Remove o popup ao clicar nele
      popup.addEventListener("click", function () {
        popup.remove();
      });
    });
  });
});
