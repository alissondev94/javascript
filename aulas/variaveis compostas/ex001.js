var num = [ 4, 5, 9, 3, 7,]
num[4] = 6
num.push(7)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1){
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}