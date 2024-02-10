let img;
let mx = 1324 - 600
let my = 1824 - 920;
let squareSize = 200;
let squareSizeY = 100;

let dvdX = 0;
let dvdY = 0;
let xSpeed = 1;
let ySpeed = 1;

function preload() {
  img = loadImage('poster1.png');
  imTxt = loadImage('text.png');
};
function setup() {
  createCanvas(mx,my);
};
function draw(){
  image(img, 0, 0, mx, my);
  image(imTxt, dvdX, dvdY, squareSize, squareSizeY )
  fill(0);
  // rect(dvdX,dvdY,squareSize, squareSize);

  dvdX = dvdX + xSpeed;
  dvdY = dvdY + ySpeed;

  if (dvdX + squareSize == mx || dvdX == 0) {
    xSpeed = xSpeed * -1
  }

  if (dvdY + squareSizeY == my || dvdY == 0) {
    ySpeed = ySpeed * -1
  }


};