let iterator = 0;
const i = window.setInterval(()=>{
    if(iterator===1){
        alert("Вам потрібна допомога?");
    }
    if(iterator===2){
        alert("Exit");
        window.clearTimeout(i);
        // window.close();
    }
    iterator++;
},60000);


window.addEventListener('mousemove', (event) => {
    iterator = 0;
});
