    var num = document.getElementById('num')
    var lista = document.getElementById('list')
    var res = document.getElementById('res')
    var valores = []

    function isNumero(n) {
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }

    function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
            window.alert('Tudo ok!')

        } else{
            window.alert('Valor inválido ou já encontrado na lista')
        }
    }
