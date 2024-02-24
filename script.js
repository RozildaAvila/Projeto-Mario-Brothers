const formulario = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-form")


function cliqueiNoBotao(){
    formulario.style.left = "50%"
    formulario.style.transform = "tranlatex(-50%)"
    mascara.style.visibility = "visible"
}

function sumirFormulario(){
    
    formulario.style.left = "-320px"
    formulario.style.transform = "tranlatex(0)"
    mascara.style.visibility = "hidden"


}
