import P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

export default function easing() {
  const sketch = p5 => {
    let x = 1;
    let y = 1;
    let easing = 0.05;
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;
    window.p5 = p5;

    p5.setup = () => {
      let canvas = p5.createCanvas(canvasWidth, canvasHeight);
      // canvas.parent('sketch');
      // p5.frameRate(30);

      p5.noStroke();
    };

    p5.draw = () => {
      // background(237, 34, 93);
      p5.background(44, 44, 44);
      let targetX = p5.mouseX;
      let dx = targetX - x;
      x += dx * easing;
      let targetY = p5.mouseY;
      let dy = targetY - y;
      y += dy * easing;
      // console.log(p5);
      p5.ellipse(x, y, 66, 66);
    };
  };

  new P5(sketch);
}
