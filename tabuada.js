
function Tabuada(){
    var num = document.getElementById('num')
    var end = document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[Erro] Preencha os campos abaixo')
    } else { 
        var n = Number(num.value)
        var e = Number(end.value)
        var r = ''
        var x = 0
        var res = document.getElementById('resposta')
        res.innerHTML = `A tabuada de ${n} é: <br>`
        do{
            r = n*x
            res.innerHTML += `${x} X ${n} = ${r} <br>`
            x++
        } while (x <= e)
    }
}