function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar no botão!<b>"
   
}

function redirecionar() {
    //abre página diferente
    window.open("https://www.youtube.com/")
    //abre na mesma página
    window.location.href = "https://www.youtube.com/"
}

function trocar(elemento) {
    //document.getElementById("mouse_move").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse."
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui."
   
}

function load() {
    alert("Página carregada")
}

function change(elemento){
    console.log(elemento.value)
}








/*AULA 4
function soma(n1,n2) {
    return n1 + n2
}

function validadeIdade(idade) {
    var validar
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar
}

var idade = prompt("Digite sua idade.")
console.log(validadeIdade(idade))

alert(soma(5,10))*/

/*Aula 3


var d = new Date()
alert(d.getMonth() + 1)



var count 
for(count=0;count <= 5;count++){
    alert(count)
}



var count = 0
while (count < 5){
    console.log(count)
    count++
}





var idade = prompt("Digite sua idade")
if (idade >= 18) {
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/




/*AULA 2

var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva" , cor:  "roxa"}]
alert(frutas[1].nome)
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta)
console.log(fruta.nome)
var lista = ["maçã", "pêra" , "laranja"]
//lista começa do índice 0
lista.push("uva")
lista.pop() //tira o último elemento da lista
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" - "))*/
                       
                 
/*AULA 1
var nome = "Matheus Maciel";
var frase = "Japão é o melhor país do mundo"
var idade = 20
var idade2 = 33
alert(nome + " tem " + idade + " anos.")
alert(idade+idade2);  
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase())
alert(frase.toLowerCase())*/