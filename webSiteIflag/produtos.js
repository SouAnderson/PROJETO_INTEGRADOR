//Linha 2 à 82, códigos do filtro
function mostrarCards(){
    for(let card of container){
        card.style.display = "block"
    }

    removeFiltro.style.display = "none"
}

function filtraCard(itemClass){

    for(let card of container){
        let temClass = card.classList.contains(itemClass);
        console.log(temClass)

        if(!temClass){
            card.style.display = "none" 
        }
        
    }

    removeFiltro.style.display = "block"
}

let filtro = document.querySelectorAll(".menu li p")
let container = document.querySelectorAll("#teste section")
let removeFiltro = document.querySelector("#remove-filtro")


filtro[0].addEventListener("click", ()=> {

    mostrarCards()
    filtraCard("notebook")

})


filtro[1].addEventListener("click", ()=> {

    mostrarCards()
    filtraCard("teclado")

})


filtro[2].addEventListener("click", ()=> {
    
    mostrarCards()
    filtraCard("mouse")

})


filtro[3].addEventListener("click", ()=> {

    mostrarCards()
    filtraCard("fone")

})


filtro[4].addEventListener("click", ()=> {

    mostrarCards()
    filtraCard("placa-video")

})


filtro[4].addEventListener("click", ()=> {

    mostrarCards()
    filtraCard("placa-video")

})


removeFiltro.addEventListener("click", ()=> {

    mostrarCards()

})