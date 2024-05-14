// Configuração inicial: define o tamanho do canvas
´´´function setup() {
  createCanvas(600, 600); // Cria um canvas de largura 600 e altura 600 pixels
  background("white"); // Define a cor de fundo do canvas como branco
}

// Função de desenho contínuo
function draw() {
  stroke("blue"); // Define a cor da borda para azul
  fill("yellow"); // Define a cor de preenchimento para amarelo

  // Verifica se o botão do mouse está pressionado
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35); // Desenha um retângulo na posição do mouse com largura 20 e altura 35
  }
}
´´´
