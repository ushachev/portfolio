import { flip } from "./modules/flip";
import { positionParalax, moveParalax } from "./modules/paralax";

flip.init();

positionParalax.set();

window.onresize = function() {
  positionParalax.set();
};

moveParalax.init();
