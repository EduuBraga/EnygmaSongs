// =========Objeto PLayer=========
const player = {
    view: document.querySelector(".card-main"),
    titleVideo: document.querySelector(".titulo-video"),
    video: document.querySelector(".video-principal"),
    controle: document.querySelector(".controle"),
    mostrar() {
        if (player.controle.style.display === "none") {
            player.controle.style.display = "block"
        } else {
            player.controle.style.display = "block"
        }
    },
    ocultar() {
        if (player.controle.style.display === "block") {
            player.controle.style.display = "none"
        }
    }
}


// =========Mostrar=======
player.view.addEventListener("mouseenter", player.mostrar)
// =========Ocultar======
player.view.addEventListener("mouseleave", player.ocultar)


// =========Objeto Botões==========
const botoes = {
    btnPP: document.getElementsByClassName("btn")[0],
    btnRetroceder: document.getElementsByClassName("btn")[1],
    btnAvancar: document.getElementsByClassName("btn")[2],
    btnFullScreen: document.getElementsByClassName("btn")[3],
    btnVolume: document.getElementsByClassName("btn")[4],
    Volume: document.getElementById("vol-controle"),
    PlayPause() {
        if (player.video.paused) {
            botoes.btnPP.setAttribute("src", "./icons/pause.PNG")
            player.video.play()
        } else {
            botoes.btnPP.setAttribute("src", "./icons/play.PNG")
            player.video.pause()
        }
    },
    Avancar() {
        player.video.currentTime -= 5
    },
    Retroceder() {
        player.video.currentTime += 5
    },
    Muted() {
        if (player.video.volume <= 0) {
            botoes.btnVolume.setAttribute("src", "./icons/volume-alto.PNG")
            player.video.volume = 1
            botoes.Volume.value = 100
        } else {
            botoes.btnVolume.setAttribute("src", "./icons/mudo.PNG")
            player.video.volume = 0
            botoes.Volume.value = 0
        }
    },
    mudarVolume() {
        player.video.volume = botoes.Volume.value / 100
        if (player.video.volume === 0) {
            botoes.btnVolume.setAttribute("src", "./icons/mudo.PNG")
        } else if (player.video.volume < 0.5) {
            botoes.btnVolume.setAttribute("src", "./icons/volume-baixo.PNG")
        } else if (player.video.volume >= 0.5) {
            botoes.btnVolume.setAttribute("src", "./icons/volume-alto.PNG")
        }
    },
    FullSreen() {
        player.video.requestFullscreen()
    }
}

// ==========Eventos atribuidos aos Botões=========
botoes.btnPP.addEventListener("click", botoes.PlayPause)
botoes.btnRetroceder.addEventListener("click", botoes.Avancar)
botoes.btnAvancar.addEventListener("click", botoes.Retroceder)
botoes.btnVolume.addEventListener("click", botoes.Muted)
botoes.Volume.addEventListener("input", botoes.mudarVolume)
botoes.Volume.addEventListener("charge", botoes.mudarVolume)
botoes.btnFullScreen.addEventListener("click", botoes.FullSreen)


// Variáveis dos videos.
const Video1 = document.getElementsByClassName("img-list")[0]
const Video2 = document.getElementsByClassName("img-list")[1]
const Video3 = document.getElementsByClassName("img-list")[2]
const Video4 = document.getElementsByClassName("img-list")[3]
const Video5 = document.getElementsByClassName("img-list")[4]


//======== Eventos de mudança de vídeos =======
Video1.addEventListener("click", () => {
    player.video.setAttribute("src", "./videos/O Monstro Sem Nome-Johan Liebert.mp4")
    player.video.setAttribute("poster", "./imagens/johan-liebert.jpg")
    player.titleVideo.innerHTML = `<p>O Mostro Sem Nome - Johan Liebert<p>`
    botoes.btnPP.setAttribute("src", "./icons/play.PNG")
})

Video2.addEventListener("click", () => {
    player.video.setAttribute("src", "./videos/Pai da Humanidade-Adão.mp4")
    player.video.setAttribute("poster", "./imagens/adão.jpg")
    player.titleVideo.innerHTML = `<p>Pai da Humanidade - Adão<p>`
    botoes.btnPP.setAttribute("src", "./icons/play.PNG")
})

Video3.addEventListener("click", () => {
    player.video.setAttribute("src", "./videos/O Sol e a Lua-Chrollo Lucilfer.mp4")
    player.video.setAttribute("poster", "./imagens/chrollo.jpg")
    player.titleVideo.innerHTML = `<p>O Sol e a Lua - Chrollo<p>`
    botoes.btnPP.setAttribute("src", "./icons/play.PNG")
})

Video4.addEventListener("click", () => {
    player.video.setAttribute("src", "./videos/Hekireki_Issen-Zenitsu.mp4")
    player.video.setAttribute("poster", "./imagens/zenitsu.jpg")
    player.titleVideo.innerHTML = `<p>Hakireki Issen - Zenitsu<p>`
    botoes.btnPP.setAttribute("src", "./icons/play.PNG")
})

Video5.addEventListener("click", () => {
    player.video.setAttribute("src", "./videos/Revisão-Overhaul.mp4")
    player.video.setAttribute("poster", "./imagens/overhaul.jpg")
    player.titleVideo.innerHTML = `<p>Revisão - Overhaul<p>`
    botoes.btnPP.setAttribute("src", "./icons/play.PNG")
})

