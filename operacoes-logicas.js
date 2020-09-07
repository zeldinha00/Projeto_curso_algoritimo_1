var nome, nota1, nota2, passou;
 passou = false;

   nome = prompt("Digite o nome do aluno:")
   nota1 = prompt("Digite a nota 01 do aluno:") 
   nota2 = prompt("Digite a nota 02 do aluno:") 

   media = (parseInt(nota1) + parseInt (nota2)) / 2

   if(media >= 50)
    passou = true;
           
   if(passou && (media >= 70 && media <= 90))
        alert("APROVADO:" + nome)   
    else
        alert("REPROVADO:" + nome)