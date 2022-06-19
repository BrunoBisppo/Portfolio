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

function mudarPt(){
    location.reload()
}

function mudarEn(){
    document.querySelector('.sobre-idioma').textContent = 'About'
    document.querySelector('.habilidade-idioma').textContent = 'Skill'
    document.querySelector('.projeto-idioma').textContent = 'Simple-Projects'
    document.querySelector('.ola-idioma').textContent = 'Hello, my name is'
    document.querySelector('.den-idioma').textContent = "I'm a developer Front-End Jr"
    document.querySelector('.titulo-sobre-mim-idioma').textContent = 'About me'
    document.querySelector('.sobre-mim-idioma').textContent = 
    "Hello, my name is Bruno Bispo as I mentioned before, I am 21 years old and I live in Indaiatuba - SP, I started to like programming in the middle of 2020 and since then, I have been dedicated to learning to program, watching video on the internet I've already learned to do some projects by myself with html, css and js, but I still have some difficulties in some things, but I'm already working to improve, further down the site, you'll see some simpler projects I can do, where I learned by watching videos on youtube and internet forums."
    document.querySelector('.habilidades-idioma').textContent = 'Skill'
    document.querySelector('.nivelHtml-idioma').textContent = 'Knowledge Level: Intermediate'
    document.querySelector('.nivelCss-idioma').textContent = 'Knowledge Level: Basic'
    document.querySelector('.nivelJs-idioma').textContent = 'Knowledge Level: Basic'
    document.querySelector('.titulo-projeto-idioma').textContent = 'Simple Projects'
    document.querySelector('.red-idioma').textContent = 'Red'
    document.querySelector('.blue-idioma').textContent = 'Blue'
    document.querySelector('.green-idioma').textContent = 'Green'
    document.querySelector('.mudarClasse-idioma').textContent = 'Change Class'
    document.querySelector('.footer-idioma').textContent = 'Website Completed By Bruno Bispo'
}