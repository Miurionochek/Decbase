const f5 = () => {
const element5 = document.getElementById("latest-news2__img");
const x5 = element5.getBoundingClientRect().left;
const resX5 = x5 - 35;
const rectangle5 = document.getElementById("latest-news2__under-image-rectangle");
rectangle5.style.left = resX5.toString() + "px";
}
export default f5;
