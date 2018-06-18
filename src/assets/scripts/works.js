import { blur } from "./modules/blur";
import { foo } from "./modules/example";

blur.set();

window.onresize = function() {
  blur.set();
};
