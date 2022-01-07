let startBtn = document.querySelector(".startbtn")
let mainScreen = document.querySelector(".mainScreen")
let stopBtn = document.querySelector(".stopbtn")


// variables to hold time values

// let mainObj = {
//     storedTime: 00,
//     miniute :00,
//     hours:00
// }
   let storedTime = 00;
   let miniute = 00;
   let hours = 00;

// our Timeincrement function in seconds 
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

// this puts a placebo value in front of the time values till they are double digits
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


let secsPlaceBo = 0;
let minsPlacebo = 0;
let hoursPlacebo=0;

// function allows us to display the change & furthe down, this is being diplayed every 450ms so our values adjust.
let display = ()=> {
  placeboCheck();
  mainScreen.innerHTML= "<h1>"+hoursPlacebo+hours+":"+minsPlacebo+miniute+":"+secsPlaceBo+storedTime+"</h1>";

} 

let increaseSec = ()=> {
    setInterval(incSeconds, 1150);
    setInterval(display, 1000)
}

let addEventi = ()=> {
   startBtn.addEventListener("click", increaseSec, {once: true});
}

addEventi();

let pauseFunc = ()=> {
    startBtn.removeEventListener("click",addEventi)
    placeboCheck();
  mainScreen.innerHTML= "<h1>"+hoursPlacebo+hours+":"+minsPlacebo+miniute+":"+secsPlaceBo+storedTime+"</h1>";
}

stopBtn.addEventListener("click", pauseFunc, {once: true})