import "./modules/login";
import { flip } from "./modules/flip";
import { positionParalax, moveParalax } from "./modules/paralax";
import { preloader } from "./modules/preloader";

flip.init();

positionParalax.set();

moveParalax.init();

preloader.set();

window.onresize = function() {
  positionParalax.set();
};

window.onload = function() {
  preloader.load();
};
