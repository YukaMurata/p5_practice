import P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

export default function sinAnimation() {
  const sketch = p5 => {
    let diameter;
    let angle = 0;
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;
    window.p5 = p5;

    p5.setup = () => {
      let canvas = p5.createCanvas(canvasWidth, canvasHeight);
      // canvas.parent('sketch');
      // p5.frameRate(30);
      diameter = p5.height - 10;
      p5.noStroke();
      p5.fill(255, 204, 0);
    };

    p5.draw = () => {
      p5.background(0);

      let d1 = 50 + (p5.sin(angle) * diameter) / 2 + diameter / 2;
      let d2 = 10 + (p5.sin(angle + p5.PI / 2) * diameter) / 2 + diameter / 2;
      let d3 = 10 + (p5.sin(angle + p5.PI) * diameter) / 2 + diameter / 2;

      p5.ellipse(0, p5.height / 2, d1, d1);
      p5.ellipse(p5.width / 2, p5.height / 2, d2, d2);
      p5.ellipse(p5.width, p5.height / 2, d3, d3);

      angle += 0.02;
    };
  };

  new P5(sketch);
}
