const anotacoes = [
    {titulo: 'Minha senha', conteudo: 'loremipsum123'},
    {titulo: 'Fazer prova', conteudo: 'A prova será dia 23/05'},
    {titulo: 'Livros para comprar', conteudo: 'O hobbit, Senhor dos aneis, O último desejo'},
    {titulo: 'Estudar front end', conteudo: 'Aprender ReactJs, Angular, VueJs'}
]


exibir()

function exibir(){
    let blocosContainer = document.querySelector('.blocos')
    anotacoes.forEach((value, index)=>{
        blocosContainer.innerHTML += `<div class="bloco-single">
                                        <h2>${value.titulo}</h2>
                                        <p>${value.conteudo}</p>
                                    </div>`
        let bloco_single = document.querySelectorAll('.bloco-single')
        bloco_single[index].style.backgroundColor = gerar_cor()
        
    })
}


function gerar_cor(opacidade = 0.4){
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255

    return `rgba(${r}, ${g}, ${b}, ${opacidade})`
}



/* POPUP */
let btn_popup = document.querySelector('#btn-criar-anotacao')
let popup = document.querySelector('.popup-container')
let btn_close = document.querySelector('.close-btn')
let popup_conteudo = document.querySelector('.popup-conteudo')

btn_popup.addEventListener('click', abrirPopUp)
popup_conteudo.addEventListener('click', (e)=>{
    e.stopPropagation()
})
popup.addEventListener('click', fecharPopUp)
btn_close.addEventListener('click', fecharPopUp)


function abrirPopUp(){
    popup.style.display = "block"
    popup_conteudo.style.backgroundColor = gerar_cor(opacidade=1)
}

function fecharPopUp(){
    popup.style.display = "none"
}



