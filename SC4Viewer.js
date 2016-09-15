// VAR
var img = [];
var i;
var LastImage;
var x;
var y
var Mx;
var My;
var mx;
var my;
var Zx;
var Zy;
var zx;
var zy;
var s;
var Sx;
var Sy;
var Dx;
var dx;
var Dy;
var dy;
var ry;
var rx;


//SKETCH
function preload() {
  img[1] = loadImage("images/Rotation_1.jpg");
  img[2] = loadImage("images/Rotation_2.jpg");
  img[3] = loadImage("images/Rotation_3.jpg");
  img[4] = loadImage("images/Rotation_4.jpg");

i = 1;
x = displayWidth/2;
y = displayHeight/2;
mx = 256;
my = 256;
Sx = 1024; 
Sy = 658; 
ry = Sx/Sy;
rx = Sy/Sx;

}

function setup() {
createCanvas(displayWidth, displayHeight);
imageMode(CENTER);
noLoop(); 
}

function draw(){
  background(6);
  if (mouseIsPressed == true){  
  image(img[i],x,y,Sx,Sy);
   x = x - (10*Mx);
    y = y - (10*My);
   line(500,320,524,320);
line(512,308,512,332);
stroke(150);
   }else{
   image(img[i],x,y,Sx,Sy);}
  line(500,320,524,320);
line(512,308,512,332);
stroke(150);
}

// KEYBOARD
function keyPressed() {
  // right arrow
  if (keyCode === RIGHT_ARROW){
    if(i < 4){;
    LastImage = i;
    i = i+1 ;
    } else {
    i = 1;
    LastImage = 4;}
  //Rotations  
    if (((LastImage == 1)&&(i==2))||((LastImage == 3)&&(i==4))){
      dx = x-(width/2);
      dy = y-(height/2);
      Dx = ((dy*-ry)-dx);
      Dy = ((dx*rx)+(height/2));
      x = x+Dx;
      y = Dy;}
    if(((LastImage == 2)&&(i==3))||((LastImage == 4)&&(i==1))){
      dx = x-(width/2);
      dy = y-(height/2);
      Dx = ((width/2)-(dy*ry));
      Dy = ((dx*rx)-((height/2)-(height-y)));
      x = Dx;
      y = y+Dy;}
  }
  if (keyCode === LEFT_ARROW){
    LastImage = i;
    i = i-1 ;     
    if (i < 1){
    i = 4;
    LastImage = 1;}
  //Rotations  
    if (((LastImage == 1)&&(i==4))||((LastImage == 3)&&(i==2))){
      dx = x-(width/2);
      dy = y-(height/2);
      Dx= (dy*ry)-dx;
      Dy= ((dx*rx)+dy);
      x= x+Dx;
      y= y-Dy;}
    if (((LastImage == 4)&&(i==3))||((LastImage == 2)&&(i==1))){
      dx = x-(width/2);
      dy = y-(height/2);
      Dx= ((dy*ry)-dx);
      Dy= ((dx*rx)+(y-(height/2)));
      x= x+Dx;
      y= y-Dy;}
  }
  // zoom & position reset on spacebar
  if (key == ' '){
    x = displayWidth/2;
    y = displayHeight/2;
    Sx = 1024;
    Sy = 658;
    s = 1;
    Zx = 0;
    Zy = 0;
  }
  // alternative zoom
  if (keyCode === UP_ARROW){
    var e = -1;
    s = 1-(e*0.1);
    Sx = Sx*s;
    Sy = Sy*s;
    Zx = x-(width/2);
    zx = Zx*s;
    zX = zx-Zx;
    x = x+zX;
    Zy = y-(height/2);
    zy = Zy*s;
    zY = zy-Zy;
    y = y+zY;
  }  
  if (keyCode === DOWN_ARROW){
    var e = 1;
    s = 1-(e*0.1);
    Sx = Sx*s;
    Sy = Sy*s;
    Zx = x-(width/2);
    zx = Zx*s;
    zX = zx-Zx;
    x = x+zX;
    Zy = y-(height/2);
    zy = Zy*s;
    zY = zy-Zy;
    y = y+zY;
  }
  loop();
return false;
}

function keyTyped(){
  if (key === 'f'){
    var fs = fullscreen();
    fullscreen(!fs);
  }
}


// MOUSE
// motion
function mouseDragged(){
   Mx = -(((width/2)-pmouseX)/mx);
   My = -(((height/2)-pmouseY)/my);
   Zx = x-(width/2);
   Zy = y-(height/2);
   zx = Zx;
   zy = Zy;
   loop();
   return false;
} 

function mousePressed(){
   Mx = -(((width/2)-pmouseX)/mx);
   My = -(((height/2)-pmouseY)/my);
   Zx = x-(width/2);
   Zy = y-(height/2);
   zx = Zx;
   zy = Zy;
   loop();
   return false;
} 

// zoom
function mouseWheel(event){
var e = (event.delta/3);
print(event.delta);
// zoom in
if(e == -1){
   s = 1-(e*0.1);
    Sx = Sx*s;
    Sy = Sy*s;
  }
// zoom out
  if (e == 1){
   s = 1-(e*0.1);
   Sx = Sx*s;
   Sy = Sy*s;
  }
// center zoom 
Zx = x-(width/2);
zx = Zx*s;
zX = zx-Zx;
x = x+zX;
Zy = y-(height/2);
zy = Zy*s;
zY = zy-Zy;
y = y+zY;
 loop();
 return false;
}

function mouseReleased(){
return false;
  noLoop();
}