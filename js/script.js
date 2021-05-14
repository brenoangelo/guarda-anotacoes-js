
var anotacoes= localStorage.getItem('anotacoes')
anotacoes = JSON.parse(anotacoes)

// Variáveis
let btn_anotar = document.querySelector('#btn-anotar')
let titulo = document.querySelector('#titulo')
let conteudo = document.querySelector('#conteudo')


exibir()
limparCampos()

btn_anotar.addEventListener('click', adicionar)

function adicionar(){
    
    if(titulo.value == "" || titulo.value == null){
        alert("Está faltando o titulo")
        return false
    }

    if(conteudo.value == "" || conteudo.value == null){
        alert("Está faltando a descrição")
        return false
    }

    if(titulo.value.length > 35){
        alert('O título está muito longo')
        return false
    }

    if(conteudo.value.length > 244){
        alert('O conteúdo está gigantesco! :0')
        return false
    }

    salvar(titulo.value, conteudo.value)
    fecharPopUp()
    limparCampos()
    exibir()
    
}

function salvar(titulo, conteudo){
    const nota = {
        titulo: titulo,
        conteudo: conteudo
    }
    
    
    anotacoes.push(nota)
    localStorage.setItem("anotacoes", JSON.stringify(anotacoes))
    
    return true
}

function remover(){
    let btn_remover = document.querySelectorAll('.remover-nota')

    btn_remover.forEach((value, index)=>{
        btn_remover[index].addEventListener('click',()=>{
            alert('legal')
            anotacoes.splice(index,1)
            localStorage.setItem('anotacoes', JSON.stringify(anotacoes))
            exibir()
        })

        
    })
    
}

function exibir(){
    let blocosContainer = document.querySelector('.blocos')
    blocosContainer.innerHTML = ""

    anotacoes.forEach((value, index)=>{

        
        blocosContainer.innerHTML += `<div class="bloco-single">
                                        <span class="remover-nota"><i class="fas fa-recycle"></i></span>
                                        <h2>${value.titulo}</h2>
                                        <p>${value.conteudo}</p>
                                    </div>`
        let bloco_single = document.querySelectorAll('.bloco-single')
        bloco_single[index].style.backgroundColor = gerar_cor()
        
    })

    

    remover()
}

function limparCampos(){
    titulo.value = ""
    conteudo.value = ""
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