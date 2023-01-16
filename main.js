const divDesenho = document.getElementById('desenho')
const divPaleta = document.getElementById('paleta')
const divsCores = Array.from(divPaleta.querySelectorAll("div"))

let cor = null

window.onload= () => {

    for (i = 0; i < 667; i++){
        let espacos = document.createElement('div')
        espacos.className = 'espaco'
        desenho.appendChild(espacos)
    }

    const divsEspacos = Array.from(document.getElementsByClassName("espaco"))
    divDesenho.addEventListener("click", evento => {
        let indice = divsEspacos.indexOf(evento.target)
        divsEspacos[indice].style = 'background-color:'+cor
    })
}

divPaleta.addEventListener("click", ev => {
    let indice = divsCores.indexOf(ev.target)
    console.log(indice)

    switch (indice) {
        case 0:
            cor = 'black'
            break;
        case 1:
            cor = 'blue'
            break;
        case 2:
            cor = 'purple'
            break;
        case 3:
            cor = 'yellow'
            break;
        case 4:
            cor = 'red'
            break;
        case 5:
            cor = 'green'
            break;
        case 6:
            cor = 'cyan'
            break;
        case 7:
            cor = 'white'
            break;
        default:
            break;
    }

    for(idx = 0; idx < 8; idx ++){
        switch (idx) {
            case 0:
                cor1 = 'black'
                break;
            case 1:
                cor1 = 'blue'
                break;
            case 2:
                cor1 = 'purple'
                break;
            case 3:
                cor1 = 'yellow'
                break;
            case 4:
                cor1 = 'red'
                break;
            case 5:
                cor1 = 'green'
                break;
            case 6:
                cor1 = 'cyan'
                break;
            case 7:
                cor1 = 'white'
                break;
            default:
                break;
        }
        divsCores[idx].style = "border: 2px solid black; background-color:"+cor1
        estado = false
    }
    divsCores[indice].style = "border: 2px solid yellow; background-color:"+cor
})