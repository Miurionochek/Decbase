import getData from "../get/what-we-do__fetch.js";

const interior = "Interior Design";
const architecture = "Architecture";
const planning = "Planning";
const url1 = "http://127.0.0.1:5500/images/interior-design.svg"
const url2 = "http://127.0.0.1:5500/images/architecture.svg"
const url3 = "http://127.0.0.1:5500/images/planning.svg"


const firstArray = await getData(1);
for(let i = 0; i < firstArray.length; i++){
    let num = i + 1;
    firstArray[i].title = interior + num; 
    firstArray[i].url = url1;
}

const secondArray = await getData(2);
for(let i = 0; i < secondArray.length; i++){
    let num = i + 1;
    secondArray[i].title = architecture + num;
    secondArray[i].url = url2;
}

const thirdArray = await getData(3);
for(let i = 0; i < thirdArray.length; i++){
    let num = i + 1;
    thirdArray[i].title = planning + num; 
    thirdArray[i].url = url3;
}

document.getElementsByClassName('what-we-do__card')[0].style.backgroundColor = "#fff";
document.getElementsByClassName('what-we-do__card-header')[0].style.color = "#000";
document.getElementsByClassName('what-we-do__card-text')[0].style.color = "#000";
document.getElementsByClassName('what-we-do__card')[1].style.backgroundColor = "#CAA892";
document.getElementsByClassName('what-we-do__card-header')[1].style.color = "#FFF";
document.getElementsByClassName('what-we-do__card-text')[1].style.color = "#FFF";
document.getElementsByClassName('what-we-do__card')[2].style.backgroundColor = "#fff";
document.getElementsByClassName('what-we-do__card-header')[2].style.color = "#000";
document.getElementsByClassName('what-we-do__card-text')[2].style.color = "#000";

document.getElementById("1_img").src = url1;
document.getElementById("2_img").src = url2;
document.getElementById("3_img").src = url3;
document.getElementById("h_1").innerHTML = firstArray[0].title;
document.getElementById("h_2").innerHTML = secondArray[0].title;
document.getElementById("h_3").innerHTML = thirdArray[0].title;
document.getElementById("t_1").innerHTML = firstArray[0].body;
document.getElementById("t_2").innerHTML = secondArray[0].body;
document.getElementById("t_3").innerHTML = thirdArray[0].body;
document.getElementById("cards_d").style.display = "none";

document.getElementById("all").addEventListener("click",function (event) {
    document.getElementsByClassName('what-we-do__card')[0].style.backgroundColor = "#fff";
    document.getElementsByClassName('what-we-do__card-header')[0].style.color = "#000";
    document.getElementsByClassName('what-we-do__card-text')[0].style.color = "#000";
    document.getElementsByClassName('what-we-do__card')[1].style.backgroundColor = "#CAA892";
    document.getElementsByClassName('what-we-do__card-header')[1].style.color = "#FFF";
    document.getElementsByClassName('what-we-do__card-text')[1].style.color = "#FFF";
    document.getElementsByClassName('what-we-do__card')[2].style.backgroundColor = "#fff";
    document.getElementsByClassName('what-we-do__card-header')[2].style.color = "#000";
    document.getElementsByClassName('what-we-do__card-text')[2].style.color = "#000";
    
    document.getElementById("1_img").src = url1;
    document.getElementById("2_img").src = url2;
    document.getElementById("3_img").src = url3;
    document.getElementById("h_1").innerHTML = firstArray[0].title;
    document.getElementById("h_2").innerHTML = secondArray[0].title;
    document.getElementById("h_3").innerHTML = thirdArray[0].title;
    document.getElementById("t_1").innerHTML = firstArray[0].body;
    document.getElementById("t_2").innerHTML = secondArray[0].body;
    document.getElementById("t_3").innerHTML = thirdArray[0].body;
    document.getElementById("cards_d").style.display = "none";
});
 
document.getElementById("inter-d").addEventListener("click",function (event) {
    let elements = document.getElementsByClassName('what-we-do__card'); // get all elements
	for(let i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#fff";
        document.getElementsByClassName('what-we-do__card-header')[i].style.color = "#000";
        document.getElementsByClassName('what-we-do__card-text')[i].style.color = "#000";
	}
    document.getElementById("1_img").src = url1;
    document.getElementById("2_img").src = url1;
    document.getElementById("3_img").src = url1;
    document.getElementById("4_img").src = url1;
    document.getElementById("5_img").src = url1;
    document.getElementById("h_1").innerHTML = firstArray[0].title;
    document.getElementById("h_2").innerHTML = firstArray[1].title;
    document.getElementById("h_3").innerHTML = firstArray[2].title;
    document.getElementById("h_4").innerHTML = firstArray[3].title;
    document.getElementById("h_5").innerHTML = firstArray[4].title;
    document.getElementById("t_1").innerHTML = firstArray[0].body;
    document.getElementById("t_2").innerHTML = firstArray[1].body;
    document.getElementById("t_3").innerHTML = firstArray[2].body;
    document.getElementById("t_4").innerHTML = firstArray[3].body;
    document.getElementById("t_5").innerHTML = firstArray[4].body;
    document.getElementById("cards_d").style.display = "flex";
});

document.getElementById("arch").addEventListener("click",function (event) {
    let elements = document.getElementsByClassName('what-we-do__card'); // get all elements
	for(let i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#CAA892";
        document.getElementsByClassName('what-we-do__card-header')[i].style.color = "#ffffff";
        document.getElementsByClassName('what-we-do__card-text')[i].style.color = "#ffffff";
	}
    document.getElementById("1_img").src = url2;
    document.getElementById("2_img").src = url2;
    document.getElementById("3_img").src = url2;
    document.getElementById("4_img").src = url2;
    document.getElementById("5_img").src = url2;
    document.getElementById("h_1").innerHTML = secondArray[0].title;
    document.getElementById("h_2").innerHTML = secondArray[1].title;
    document.getElementById("h_3").innerHTML = secondArray[2].title;
    document.getElementById("h_4").innerHTML = secondArray[3].title;
    document.getElementById("h_5").innerHTML = secondArray[4].title;
    document.getElementById("t_1").innerHTML = secondArray[0].body;
    document.getElementById("t_2").innerHTML = secondArray[1].body;
    document.getElementById("t_3").innerHTML = secondArray[2].body;
    document.getElementById("t_4").innerHTML = secondArray[3].body;
    document.getElementById("t_5").innerHTML = secondArray[4].body;
    document.getElementById("cards_d").style.display = "flex";
});


document.getElementById("plan").addEventListener("click",function (event) {
    let elements = document.getElementsByClassName('what-we-do__card'); // get all elements
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#fff";
        document.getElementsByClassName('what-we-do__card-header')[i].style.color = "#000";
        document.getElementsByClassName('what-we-do__card-text')[i].style.color = "#000";
    }
    document.getElementById("1_img").src = url3;
    document.getElementById("2_img").src = url3;
    document.getElementById("3_img").src = url3;
    document.getElementById("4_img").src = url3;
    document.getElementById("5_img").src = url3;
    document.getElementById("h_1").innerHTML = thirdArray[0].title;
    document.getElementById("h_2").innerHTML = thirdArray[1].title;
    document.getElementById("h_3").innerHTML = thirdArray[2].title;
    document.getElementById("h_4").innerHTML = thirdArray[3].title;
    document.getElementById("h_5").innerHTML = thirdArray[4].title;
    document.getElementById("t_1").innerHTML = thirdArray[0].body;
    document.getElementById("t_2").innerHTML = thirdArray[1].body;
    document.getElementById("t_3").innerHTML = thirdArray[2].body;
    document.getElementById("t_4").innerHTML = thirdArray[3].body;
    document.getElementById("t_5").innerHTML = thirdArray[4].body;
    document.getElementById("cards_d").style.display = "flex";
});