function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <15){
                //criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade <30){
                //Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <15){
                //criança
                img.setAttribute('src', 'criancaf.png')
            } else if (idade <30){
                //Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'adultof.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}