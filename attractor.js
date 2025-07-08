class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  } 
  //let sun = new Attractor(0, 0);
  
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  attract(mover) {
    let r = p5.Vector.sub(this.pos, mover.pos);
    //let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(r.magSq(), 100, 1000);
    let G = 0.2;
    let force = G * (this.mass * mover.mass) / distanceSq;
    r.setMag(force);
    mover.applyForce(r);
  }
  
  show() {
    noStroke();
    fill(255, 0, 100);
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }
}