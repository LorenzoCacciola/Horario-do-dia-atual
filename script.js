function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()//pegar a hora atual
    var hora =data.getHours()// a hora atual
    msg.innerHTML = `Agora sao ${hora} horas.`//escreveer a hora atual com uma mensagem
    
    if (hora >= 0 && hora < 12 ) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#6f2612'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fcbb00'
    }else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#2b0616'
    }
        

 }   

