// =========Objeto PLayer=========
window.player = {
    view: document.querySelector(".card-main"),
    titleVideo: document.querySelector(".titulo-video"),
    video: document.querySelector(".video-principal"),
    arquivoVideos: videos,
    videoAtual: {},
    videoContagem: 2,
    start() {
        player.videoAtual = player.arquivoVideos[player.videoContagem]

        player.titleVideo.innerHTML = `<p>${player.videoAtual.titulo}</p>`
        player.video.setAttribute("src", player.videoAtual.video)
        player.video.setAttribute("poster", player.videoAtual.thumb)
        botoes.progresso.value = 0
        botoes.progresso.max = player.video.duration
    },
    proximaMsc(){
        player.videoAtual = player.arquivoVideos[player.videoContagem]
        player.videoContagem++

        player.titleVideo.innerHTML = `<p>${player.videoAtual.titulo}</p>`
        player.video.setAttribute("src", player.videoAtual.video)
        player.video.setAttribute("poster", player.videoAtual.thumb)
        botoes.progresso.value = 0
        botoes.progresso.max = player.video.duration
        botoes.btnPP.setAttribute("src", "./icons/play.PNG")
    }
    ,
    // recomecar(){
    //     if(player.audioContagem > player.arquivoVideos)
    // }
}

// =========Objeto Botões==========
window.botoes = {
    controle: document.querySelector(".controle"),
    btnPP: document.getElementsByClassName("btn")[0],
    btnRetroceder: document.getElementsByClassName("btn")[1],
    btnAvancar: document.getElementsByClassName("btn")[2],
    btnFullScreen: document.getElementsByClassName("btn")[3],
    btnVolume: document.getElementsByClassName("btn")[4],
    Volume: document.getElementById("vol-controle"),
    progresso: document.querySelector("#progresso"),
    mostrar() {
        if (botoes.controle.style.display === "none") {
            botoes.controle.style.display = "block"
        } else {
            botoes.controle.style.display = "block"
        }
    },
    ocultar() {
        if (botoes.controle.style.display === "block") {
            botoes.controle.style.display = "none"
        }
    },
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
        player.video.currentTime -= 10
    },
    Retroceder() {
        player.video.currentTime += 10
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
    },
    atualizarProgresso() {
        player.video.currentTime = botoes.progresso.value
    },
    atualizacaoDeProgresso() {
        botoes.progresso.value = player.video.currentTime
        botoes.progresso.max = player.video.duration
    }

}

window.playlist = {
    cardList: document.querySelector(".card-list"),
    imagem: document.getElementsByClassName("img-list")
}

for (let i = 0; player.arquivoVideos.length > i; i++) {
    playlist.cardList.innerHTML += `
    <section class="card-list-item">
        <img class="img-list" src="${player.arquivoVideos[i].thumb}" alt="${player.arquivoVideos[i].alt}">
        <h4>${player.arquivoVideos[i].titulo}</h4>
    </section>
    `

}

for (let i = 0; player.arquivoVideos.length > i; i++) {
    playlist.imagem[i].addEventListener('click', function () {

        player.titleVideo.innerHTML = `<p>${player.arquivoVideos[i].titulo}</p>`
        player.video.setAttribute("src", player.arquivoVideos[i].video)
        player.video.setAttribute("poster", player.arquivoVideos[i].thumb)
        player.videoAtual = player.arquivoVideos[player.videoContagem[i]]
        botoes.btnPP.setAttribute("src", "./icons/play.PNG")
    })
}
