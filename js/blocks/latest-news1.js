const f4 = () => {
const element4 = document.getElementById("latest-news1__img");
const x4 = element4.getBoundingClientRect().left;
const resX4 = x4 - 35;
const rectangle4 = document.getElementById("latest-news1__under-image-rectangle");
rectangle4.style.left = resX4.toString() + "px";
}
export default f4;
