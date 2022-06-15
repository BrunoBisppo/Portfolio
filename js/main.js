function calcular(tipo,valor){
    if (tipo === 'acao'){
        if ( valor === 'c'){
            // limpar o visor de resultado
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if (valor === '='){
           let valorCampo = eval(document.getElementById('resultado').value) 
           document.getElementById('resultado').value = valorCampo
        }

    } else if ( tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}

function mudarCor(cor){
    document.querySelector('.cores').style.background = cor
}

function mudarClasse(){
    document.querySelector('.texto-classe').className = 'classe2'
}