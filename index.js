
var fraseUsuario = prompt("Dime una frase y te digo si es palíndromo o no:");


function esPalindromo(fraseUsuario){

    fraseUsuario = fraseUsuario.toLowerCase().replace(/ /g,"");

    fraseAlReves = fraseUsuario.split("").reverse().toString();    

    for(i=0; i<((fraseAlReves.length)-1);i++){

        fraseAlReves = fraseAlReves.replace(",", "");
    };

    if(fraseUsuario == fraseAlReves){
        resultado = "es un palíndromo.";
    } else{
        resultado = "no es un palíndromo.";
    }

    document.write("Tu frase " + resultado);
}
esPalindromo(fraseUsuario);


















