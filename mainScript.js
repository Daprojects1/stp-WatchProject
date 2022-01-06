let startBtn = document.querySelector(".startbtn")
let mainScreen = document.querySelector(".mainScreen")

// let showZeros = ()=> {
//     mainScreen.innerHTML= "<h1 >00</h1>"
// }
// showZeros();

let startTime = ()=> {}
let storedTime = 0;
let miniute =10;
let hours = 0;
let countTime = ()=> {
    if (storedTime >= 0 && storedTime < 10){
        mainScreen.innerHTML= "<h1>"+"00:0"+miniute+":0"+storedTime +"</h1>";
        storedTime++;
    } else if (storedTime >= 10 && storedTime < 60){
        mainScreen.innerHTML = "<h1>"+"00:"+miniute+":"+storedTime +"</h1>";
        storedTime++;
    } else if(storedTime === 60 ){
       storedTime=0;
       miniute++;     
    } 
    
}
setInterval(countTime, 1000);


