let startBtn = document.querySelector(".startbtn")
let mainScreen = document.querySelector(".mainScreen")
let stopBtn = document.querySelector(".stopbtn")
let clearBtn = document.querySelector(".clearbtn")
let newInt;
// variables to hold time values 
   let storedTime = 0;
   let miniute = 0;
   let hours = 0;

// our Timeincrement function in seconds 
    let incSeconds = ()=> {
        storedTime++;
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

// placebo values 

let secsPlaceBo = 0;
let minsPlacebo = 0;
let hoursPlacebo=0;

// function allows us to display the change & further down, this is being displayed every 750ms so our values adjust Also has a placebo check & time inc function.
let display = ()=> {
  placeboCheck();
  mainScreen.innerHTML= "<h1>"+hoursPlacebo+hours+":"+minsPlacebo+miniute+":"+secsPlaceBo+storedTime+"</h1>";
  incSeconds();
} 

// displayShow sets interval and has event listeners to stop and clear mainscreen.

let displayShow= ()=> {
     clearInterval(newInt)
     newInt = setInterval(display, 1000)
     stopBtn.addEventListener("click", ()=> {
       clearInterval(newInt)
   })
   clearBtn.addEventListener("click", ()=> {
       clearInterval(newInt);
        storedTime = 0;
        miniute = 0;
        hours = 0;
       mainScreen.innerHTML= "<h1>"+"00:00:00"+"<h1>"
   })
}

// event listners for the start btn.  
startBtn.addEventListener("click", displayShow);


