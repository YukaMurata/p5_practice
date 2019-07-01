export default class Mover {
  constructor(m, x, y) {
    this.mass = m;
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector(0, 0);
    this.acceleration = p5.createVector(0, 0);
  }

  applyForce(force) {
    function vectorDiv(force, mass, target) {
      if (!target) {
        target = force.copy();
      } else {
        target.set(force);
      }
      target.div(mass);
      return target;
    }

    //本来はp5.Vector.div()という関数らしいが、動かなかったので、vectorDivという関数をこちらで定義
    let f = vectorDiv(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    // 速度によるポジションの変化
    this.position.add(this.velocity);
    // フレームごとに加速度をクリアする
    this.acceleration.mult(0);
  }

  display() {
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.fill(255, 127);
    p5.ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }

  checkEdges() {
    if (this.position.y > p5.height - this.mass * 8) {
      // 底に到達した時
      this.velocity.y *= -0.9;
      this.position.y = p5.height - this.mass * 8;
    }
  }
}
