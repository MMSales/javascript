function contador() {
    let inicio = document.getElementById("início")
    let final = document.getElementById("final")
    let passo = document.getElementById("passo")
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
    var resultado = document.getElementById("res")
    if (inicio.value.length = 0 || final.value == 0 || passo.value.length == 0)
    { 
        resultado.innerHTML = `ÍMPOSSÍVEL CONTAR`
        window.alert('[ERRO] FALTAM DADOS!') 
    }  
    else {
        resultado.innerHTML = `Contando...<br>`
        if (p<=0){
            window.alert("Passo Inválido! Considerando PASSO = 1")
            p = 1
        }
        if (i<f){
        for ( let c = i; c <=f; c+=p){
            resultado.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        for (let c=i; c >=f; c-=p) {
            resultado.innerHTML += `${c} \u{1F449}`
        }
    }
    resultado.innerHTML += `<strong> FIM</strong>`
    }

    
}