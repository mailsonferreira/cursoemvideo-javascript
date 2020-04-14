function somar() {
    var n1 = document.getElementById('txt1')
    var n2 = document.getElementById('txt2')
    var soma = Number(txt1.value)
    var soma1 = Number(txt2.value)

    var ress = soma + soma1
    if (ress == '') {
        res.innerHTML = `A soma é ${ress}`
    } else {
        res.innerHTML = `A soma é ${ress}`
    }

}

function subtrair(){
    var nn1 = document.getElementById('txt3')
    var nn2 = document.getElementById('txt4')
    var somaa = Number(txt3.value)
    var soma11 = Number(txt4.value)

    var ressb = somaa - soma11
    if (ressb == '') {
        res.innerHTML = `A subtração é ${ressb}`
    } else {
        res.innerHTML = `A subtração é ${ressb}`
    }
}