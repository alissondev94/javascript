function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manhapq.png'
        document.body.style.background ='#485059'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tardepq.png'
        document.body.style.background ='#F2AB6D'
    } else {
        //Boa noite!
        img.src = 'noitepq.png'
        document.body.style.background ='#1D3240'
    }
}