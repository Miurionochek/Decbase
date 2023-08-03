import f1 from "./modern-interior__rectangle.js";
import f2 from "./about-us__rectangle.js";
import f3 from "./anniversary__rectangle.js";
import f4 from "./latest-news1.js";
import f5 from "./latest-news2.js";


const preloader = document.getElementById("preloader");
const container = document.getElementById("container");

container.style.display = "none";
function show(){
    setTimeout(hide, 5000);
}

const hide = () => {
    preloader.style.display = "none";
    container.style.display = "block";
    document.body.style.overflow = "visible";
    f1();
    f2();
    f3();
    f4();
    f5();
}

show();