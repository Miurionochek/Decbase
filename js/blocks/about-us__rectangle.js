const f2 = () => {
const element2 = document.getElementById("about-us__img");
const x2 = element2.getBoundingClientRect().left;
const resX2 = x2 - 35;
const rectangle2 = document.getElementById("about-us__under-image-rectangle");
rectangle2.style.left = resX2.toString() + "px";
}
export default f2;