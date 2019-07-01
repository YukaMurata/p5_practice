import P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

export default function ThreeD() {
  const sketch = p5 => {
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;
    window.p5 = p5;

    p5.setup = () => {
      p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL);
    };

    p5.draw = () => {
      p5.background(0);

      let locY = (p5.mouseY / p5.height - 0.5) * -2;
      let locX = (p5.mouseX / p5.width - 0.5) * 2;

      //丸の色
      p5.ambientLight(255, 255, 255);

      p5.pointLight(200, 200, 200, locX, locY, 0);

      //y回転
      p5.rotateY(p5.frameCount * 0.0001);
      //ドラック対応
      p5.orbitControl();

      for (let j = 0; j < 5; j++) {
        p5.push();
        for (let i = 0; i < 100; i++) {
          p5.translate(p5.sin(p5.frameCount * 0.001 + j) * 200, p5.sin(p5.frameCount * 0.001 + j) * 300, i * 0.1);
          p5.rotateZ(p5.frameCount * 0.002);
          p5.push();

          //丸(球)の描画
          p5.sphere(2, 10, 100);
          p5.pop();
        }
        p5.pop();
      }
    };
  };

  new P5(sketch);
}
