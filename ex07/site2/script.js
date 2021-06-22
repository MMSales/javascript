function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    if (fano.value.legth == 00 || Number(fano.value) >ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade<10){
                //CRIANÇA
                img.setAttribute('src', 'baby_boy.jpg')
            } else if (idade<21){
                img.setAttribute('src', 'young_boy.jpg')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', 'adult_man.jpg')
            } else {
                //IDOSO
                img.setAttribute('src','old_man.jpg')
            }
    
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
           if (idade >=0 && idade<10){
            //CRIANÇA
            img.setAttribute('src', 'baby_girl.jpg')
        }      else if (idade<21){
            //Jovem
            img.setAttribute('src', 'young_girl.jpg')
        }      else if (idade<50){
            //Adulto
            img.setAttribute('src', 'adult_woman.jpg')
        }      else {
            //IDOSO
            img.setAttribute('src','old_woman.jpg')
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}