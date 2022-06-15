function calculo(){
    var altura=(document.getElementById("alt").value)/100
    var pesou=document.getElementById("peso").value
    
    var imc = pesou  /(altura*altura);
    var resultado="";

    if(imc<18.5)
        resultado="Seu imc é: " + imc.toFixed([1])+ "\n Abaixo do peso";
    else if( imc<24.9)
        resultado="Seu imc é: " + imc.toFixed([1])+ "\n Peso normal";
    else if( imc<29.9)
        resultado="Seu imc é: " + imc.toFixed([1])+ "\n Sobrepeso";
    else if( imc<39.9)
        resultado="Seu imc é: " + imc.toFixed([1])+ "\n Obeso";
    else if( imc>39.9)
        resultado="Seu imc é: " + imc.toFixed([1])+ "\n Obesidade mórbida";
    document.getElementById("texto").innerText=resultado   

}