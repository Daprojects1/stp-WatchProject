let startBtn = document.querySelector(".startbtn")
let mainScreen = document.querySelector(".mainScreen")
let stopBtn = document.querySelector(".stopbtn")



let storedTime = 00;
let miniute =00;
let hours = 00;


let incSeconds = ()=> {
    storedTime++
    if (storedTime > 59 ){
        storedTime = 0
        miniute++;
        if (miniute > 59){
            miniute = 0
            hours++;
        }
        if (hours === 24){
            hours = 0;
        }
    }
}
let increaseSec = ()=> {
    setInterval(incSeconds, 1000)
}
increaseSec();

let secsPlaceBo = 0;
let minsPlacebo = 0;
let hoursPlacebo=0;
let display = ()=> {
   placeboCheck();
  mainScreen.innerHTML= "<h1>"+hoursPlacebo+hours+":"+minsPlacebo+miniute+":"+secsPlaceBo+storedTime+"</h1>";

} 

let placeboCheck = ()=> {
    if (storedTime >=0 && storedTime < 10 ){
        secsPlaceBo =0;
    } else if (storedTime >= 10){
        secsPlaceBo="";
    }
    if (miniute >= 0 && miniute < 10){
       minsPlacebo=0;

    }else if (miniute >=10){
        minsPlacebo=""
    }
    if (hours >= 0 && hours < 10 ){
        hoursPlacebo= 0;
    } else {
        hoursPlacebo= "";
    }
}
setInterval(display, 450)
