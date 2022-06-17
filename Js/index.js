// Start no video
player.start()
// Ocultar e mostrar os botões com o mouse
player.view.addEventListener("mouseenter", botoes.mostrar)
player.view.addEventListener("mouseleave", botoes.ocultar)
// Play e Pause
botoes.btnPP.addEventListener("click", botoes.PlayPause)
// Avançar e retroceder o percusso do vídeo
botoes.btnRetroceder.addEventListener("click", botoes.Avancar)
botoes.btnAvancar.addEventListener("click", botoes.Retroceder)
// Deixar mudo
botoes.btnVolume.addEventListener("click", botoes.Muted)
// Alterar o volume
botoes.Volume.addEventListener("input", botoes.mudarVolume)
botoes.Volume.addEventListener("charge", botoes.mudarVolume)
// Tela cheia
botoes.btnFullScreen.addEventListener("click", botoes.FullSreen)
// Tempo do vídeo
botoes.progresso.addEventListener("input", botoes.atualizarProgresso)
botoes.progresso.addEventListener("charge", botoes.atualizarProgresso)
player.video.addEventListener("timeupdate", botoes.atualizacaoDeProgresso)
player.video.addEventListener("ended", player.proximaMsc)
