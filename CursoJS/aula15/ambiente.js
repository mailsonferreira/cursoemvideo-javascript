let num = [5,8,2,9,3]
num.push(1) // Adiciona automaticamento o proximo valor no estaço 
num.sort() // Organiza em ordem crescente
console.log(num) // mostra valor do vetor 
console.log(`O vetor tem ${num.length} posições`) // mostra quantas posiçoes tem o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra qual valor tem o []
var pos = num.indexOf(10)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
