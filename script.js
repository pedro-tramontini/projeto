function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img", "profile alt");

  if (html.classList.contains("light")) {
    // se conter a class light, vai trocar a imagem
    img.setAttribute("src", "./assets/assets/avatar-light.png");
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos de sol e camisa preta, barba e fundo azul.");

  } else {
    // se não conter a class light, vai manter a imagem antiga
    img.setAttribute("src", "./assets/assets/avatar.png");

  }
}
