/*escreval ("Digite o nome do aluno:")
   leia (nome)
   escreval("Digite a nota 01 do aluno:")
   leia (nota1)
   escreval("Digite a nota 02 do aluno:")
   leia (nota2)
   media := (nota1 + nota2) / 2

   se media >= 5 entao
   escreval("APROVADO!", nome)
   senao
   escreval ("Reprovado!", nome)
   fimse*/

   var nome, nota1, nota2;
   nome = prompt("Digite o nome do aluno:")
   nota1 = prompt("Digite a nota 01 do aluno:") 
   nota2 = prompt("Digite a nota 02 do aluno:") 

   media = (parseInt(nota1) + parseInt (nota2)) / 2

   if(media >= 50){
        alert("APROVADO:" + nome)
   }   
    else
        alert("REPROVADO:" + nome)