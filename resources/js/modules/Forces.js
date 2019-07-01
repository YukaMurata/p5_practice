import P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

import Liquid from './Liquid';
import Mover from './Mover';

export default function Forces() {
  const sketch = p5 => {
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;
    window.p5 = p5;

    let movers = [];
    let liquid;

    p5.setup = () => {
      p5.createCanvas(canvasWidth, canvasHeight);
      liquid = new Liquid(0, p5.height / 2, p5.width, p5.height / 2, 0.1);
    };

    p5.draw = () => {
      const color = p5.color(255, 255, 255);
      p5.background(color);

      liquid.display();

      for (let i = 0; i < movers.length; i++) {
        if (liquid.contains(movers[i])) {
          // 抗力の計算
          let dragForce = liquid.calculateDrag(movers[i]);

          movers[i].applyForce(dragForce);
        }

        // 質量によって重力の増減を決める
        let gravity = p5.createVector(0, 0.1 * movers[i].mass);
        // 重力をかける
        movers[i].applyForce(gravity);

        // 更新
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
      }
    };

    //クリックしたときに実行
    p5.mousePressed = () => {
      for (let i = 0; i < 9; i++) {
        movers[i] = new Mover(p5.random(0.5, 3), 40 + i * 70, 0);
      }
    };
  };

  new P5(sketch);
}
