window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.body.style.fontSize = "100%";    
        console.log("Largura da tela é maior que 600px");
    } else {
        console.log("Largura da tela é menor que 600px");
        document.body.style.fontSize = "70%";       
    }
});