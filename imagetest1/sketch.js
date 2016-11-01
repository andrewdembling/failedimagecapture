var img;
var capture;
 
function setup() {
  createCanvas(600,600);
  capture = createCapture(VIDEO);
  capture.size(300,300);
  
  img=createImage(600,600);
  img.loadPixels();
}
 
function draw() {
  background(255);
  capture.loadPixels();
  
  for (var i=0; i < 4*(capture.width*capture.height); i+=4) {
    
    var r = capture.pixels[i];
    var g = capture.pixels[i+ 1];
    var b = capture.pixels[i+ 2];
    var a = capture.pixels[i+ 3];
    
    img.pixels[i] = r;
    img.pixels[i + 1] = g;
    img.pixels[i + 2] = b;
    img.pixels[i + 3] = a;
  
  }
  img.updatePixels();
  image(img,0,0);
  //filter('INVERT');
}