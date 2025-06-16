import "../scss/style.scss";
import burger from "./files/burger.js";
import fileChange from "./files/fileChange.js";
import headerMobLocation from "./files/headerMobLocation.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import showTel from "./files/showTel.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import validateForms from "./files/validateForms.js";

spoller();
headerMobLocation();
showTel();
burger();
inputmask();
sliders();
headerScroll();
map();
fileChange();
validateForms();

Fancybox.bind("[data-fancybox]", {});
