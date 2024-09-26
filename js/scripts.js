const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });
        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200)
    })
})

var coll = document.getElementsByClassName("collapsible");

// Itera sobre todos os cabeçalhos
for (var i = 0; i < coll.length; i++) {
  // Adiciona um evento de clique a cada cabeçalho
  coll[i].addEventListener("click", function() {
    // Alterna a classe 'active' no cabeçalho clicado
    this.classList.toggle("active");
    
    // Seleciona o próximo elemento (neste caso, a lista <ul>)
    var content = this.nextElementSibling;
    
    // Alterna a exibição do conteúdo
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  })}