const botao = document.querySelector(".btn-plataforma");

const elemento_Plataforma = document.querySelector(".btn-plataforma .platform")

botao.addEventListener("click", () => {
    const botao_Esta_Aberto = elemento_Plataforma.classList.contains("ativo");

    if(botao_Esta_Aberto) {
        elemento_Plataforma.classList.remove("ativo");
    }else{
        elemento_Plataforma.classList.add("ativo")
    }
});