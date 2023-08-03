const f3 = () => {
const element3 = document.getElementById("anniversary-section__img");
const x3 = element3.getBoundingClientRect().left;
const resX3 = x3 + 35;
const rectangle3 = document.getElementById("anniversary-section__under-image-rectangle");
rectangle3.style.left = resX3.toString() + "px";
}
export default f3;