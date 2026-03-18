// gerou numero
let numeroCerto = Math.floor(Math.random()*10);

console.log(numeroCerto);

function Comparar(){
    var numeroDado = document.getElementById("numero").value;

    if(numeroDado == numeroCerto){
        document.getElementById("resultado").innerHTML = "Acertoooo miseravi";
        document.getElementById("adivinhacao").style.setProperty("background-color","green");
    }else if(numeroDado > numeroCerto){
        document.getElementById("resultado").innerHTML = "Errooooooou miseravi, muito alto!";
        document.getElementById("adivinhacao").style.setProperty("background-color","red");
    }else{
        document.getElementById("resultado").innerHTML = "Errooooooou miseravi, muito baixo";
        document.getElementById("adivinhacao").style.setProperty("background-color","red");

    }

}




