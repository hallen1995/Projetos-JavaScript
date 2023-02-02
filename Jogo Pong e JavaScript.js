//Estrutura da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//Velocidade Bolinha
let velocidadeXBolinha = 1;
let velocidadeYBolinha = 1;

//variáveis da raquete
let xRaquete = 05;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete oponente
let xRaqueteOponente = 582;
let yRaqueteOponente = 150;
let raqueteComprimentoOp = 10
let raqueteAlturaOp = 90


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  minhaRaquete();
  oponenteRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOp();
}
  
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);  
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  //yBolinha += velocidadeYBolinha;  
}
function verificaColisaoBolinha(){
  if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1 
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1  
  }
}
function minhaRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura)
}
function oponenteRaquete(){
  rect(xRaqueteOponente,yRaqueteOponente,raqueteComprimentoOp,raqueteAlturaOp)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
} 

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento)
{ 
  velocidadeXBolinha *= -1;  
  }
}

function verificaColisaoRaqueteOp(){
  if (xBolinha + raio < xRaqueteOponente + raqueteComprimentoOp)
{ 
  velocidadeXBolinha *= -1;  
  }
}