export default class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  contains(m) {
    let l = m.position;
    return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h;
  }

  calculateDrag(m) {
    let speed = m.velocity.mag();
    let dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    let dragForce = m.velocity.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }

  display() {
    p5.noStroke();
    const color = p5.color(0, 134, 179);
    p5.fill(color);
    p5.rect(this.x, this.y, this.w, this.h);
  }
}
