
const f1 = () => {
const element1 = document.getElementById("modern-interior__img");
const x1 = element1.getBoundingClientRect().left;
const resX1 = x1 + 35;
const rectangle1 = document.getElementById("modern-interior__under-image-rectangle");
rectangle1.style.left = resX1.toString() + "px";
}
export default f1;