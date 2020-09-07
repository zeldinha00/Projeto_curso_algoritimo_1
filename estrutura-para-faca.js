
function acaoBotao() { 
   var numero, fatorial
    numero = prompt("digite o numero pra calcular o fatorial: ")
    fatorial = 1
        for (var contador = 1; contador <= numero; contador++){
        fatorial = fatorial * contador       
        }


    document.getElementById("Paragrafo").innerText = "O fatorial de " + numero + " é " + fatorial
}