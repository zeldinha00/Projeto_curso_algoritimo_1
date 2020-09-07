/*   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("Digite a quantidade de vezes que vai ser verificado a idade: ")
   leia (limite)
   contador := 0
            enquanto contador < limite faca
            escreval ("Digite o nome da pessoa: ")
            leia (nome)
            escreval ("Digite a idade do ", nome, " : ")
            leia (idade)
            se idade > 18 entao
               escreval (nome, " Você é maior de idade!")
               senao
               escreval (nome, " Você é menor de idade!")
               fimse
             contador := contador + 1
             fimenquanto
*/
function acaoBotao() { 
    var  nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade:")
    contador = 0
     while(contador < limite ){
       nome = prompt ("Digite o nome da pessoa: ")
       idade = prompt ("Digite a idade do ", nome, " : ")
        if (idade > 18)
          document.getElementById("Paragrafo").innerText = nome + " Você é maior de idade!"
          else
          document.getElementById("Paragrafo").innerText = nome + " Você é menor de idade!"
         contador++
       }
}

