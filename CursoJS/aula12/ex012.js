var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Agora é bom dia!')
} else if (hora <= 18) {
    console.log('Agora é boa tarde!')
} else {
    console.log('Agora é noite!')
}