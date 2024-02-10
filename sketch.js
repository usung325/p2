let img;

function preload() {
  img = loadImage('poster1.png');
}

function setup() {
  let mx = 1324/2.01
  let my = 1824/2.01
  createCanvas(mx,my)
  image(img, 0, 0, mx, my);
  // img.resize(1920, 1080);
  describe('Image of the underside of a white umbrella and a gridded ceiling.');
}