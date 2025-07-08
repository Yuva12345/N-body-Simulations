/* Some fictional conditions we have added are to restrict the distance, just so we can see the force better. There are also other constraints, and are evident from the code */

let movers = [];
let sun;
//let sun2;
//let attractor;

function setup() {
  createCanvas(800, 800);
  
  for(let i = 0; i < 100; i++) {
    let pos = p5.Vector.random2D();
    pos.setMag(random(200, 350)); //200, 350 originally
    let vel = pos.copy();
    vel.setMag(random(5, 15));
    vel.rotate(PI/2);
    let m = random(5, 15);
    movers[i] = new Mover(pos.x, pos.y, vel.x, vel.y, m);
  }
 
  //movers[0] = new Mover(300, 200, 0, 1, 10);
  //movers[1] = new Mover(100, 200, 0, -1, 10);
  //movers[2] = new Mover(200, 300, -1, 0, 10);
  //movers[3] = new Mover(200, 100, 1, 0, 10);
  sun = new Attractor(0, 0, 1000);
  background(0);
}

function draw() {
  background(0, 12);
  translate(width/2, height/2);
  //sun2 = new Attractor(mouseX - width/2, mouseY - height/2, 500);
  for(let mover of movers) {
    sun.attract(mover);
    //sun2.attract(mover);
    for(let other of movers) {
      if(other != mover) {
        mover.attract(other);
      }
    }
  }
  for(let mover of movers) { 
    mover.update();
    mover.show();
  }
  sun.show();
  //sun2.show();
}