// Algorítimo de cadastro de senha.

var senha, repete, s;

// Estrutura de repetição do-while 
do {
  senha = prompt ("Insira sua senha numérica de 6 dígitos");
  console.clear()
} while (senha.length != 6);
    repete = prompt ("Redigite sua senha para validação. Ela deve ser a mesma.");
    console.clear()
  while (repete != senha){
    repete = prompt ("A senha não é a mesma. Insira novamente a senha para validação.");
    console.clear()
}
    alert ("Senha cadastrada com sucesso. ");
    alert ("\n");
    s = prompt ("Para acessar sua conta entre com sua senha.");
    
  console.clear()

// Estrutura for / if-else
for (var cont = 1; senha != s && cont < 3; cont++){
  alert ("A senha informada não confere. Insira novamente. \n1Você tem mais " + (3-cont) + " tentativa(s).")
  console.clear()
  s = prompt ("Para acessar sua conta entre com sua senha");
}
  if (cont < 3){
    alert ("Sua senha está correta! Você pode acessar sua conta.");
  } else {
      senha = 99;
      alert ("Sua senha foi bloqueada. Procure seu gerente");
}
    alert ("----------------------------------------------------");