let cor;
let nome = "TrueLoki8250";

function setup() {
  
  createCanvas(400, 400);
  cor = color("white");
}

function config_text() {
  
  background  ("black");
  textFont("Times New Roman");
  textAlign(CENTER,CENTER);
  textSize(50)
}

function palavraParcial(minimo, maximo) {
  
  let quantidade = map(mouseX, minimo, maximo, 4, nome.length);
  let parcial = nome.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  config_text();
  
  stroke(cor);
  fill('black');
  rect (50,100,300,200);
  
  fill(cor);
  stroke('black');
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
 if(mouseIsPressed) {
        cor = color(random(0, 255), random(0, 255), random(0,255));
    }
}
