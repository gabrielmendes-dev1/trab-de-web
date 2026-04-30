// 1. pega o botão do HTML através do ID 'theme-switch' e guarda na constante 'btn' , o const é a constante
const btn = document.getElementById("theme-switch");

// 2. espera o usuário clicar no botão
btn.addEventListener("click", () => {
  
  /*
    O comando 'toggle' verifica se a classe 'light-mode' já existe no <body>.
    Se nao existir, o jS adiciona a classe (ativando o modo claro).
    Se já existir o js remove a classe (voltando para o modo escuro).
   */
  document.body.classList.toggle("light-mode");
  
  // Isso faz com que o CSS perceba a mudança e troque as cores das variáveis :root que eu coloquei antes
});
/*ensinado no youtube, creditos ao canal Coding with Luiz  */