var counterValue = 0;



/*
document.addEventListener("load", function (event)
{
    counterValue=0;

})
*/


document.addEventListener("DOMContentLoaded", function(event) 
{
    var counter="counter-"
    for (i = 0; i <=16 ; i++){
        var cc = sessionStorage.getItem(counter+i)
        var counterID = counter + i;
        if (typeof(cc)!= 'undefined' && cc!=null){
            //console.log("cc is: " + cc + " and counter is: " + counterID);
            if(cc>0){
                //cc--
            } else {
                resetCounter(counterID); 
                //counterValue = "0";
            }
        
        updateDisplay(counterID,cc)
        //console.log("From domcontentloaded counter is: " + counter+i + " and cc is " +cc);
        }
    }
})


function incrementClick(counter) {
    myval = Number(document.getElementById(counter).textContent)
  
    updateDisplay(counter, ++myval);

    increaseCounterCookie(counter, myval);
}

function resetCounter(counter) {
    updateDisplay(counter, 0);
    sessionStorage.setItem(counter, 0);
    //console.log("counter cookie is: " + sessionStorage.getItem("counter") )
}

function updateDisplay(counter,val) {
    if (typeof (counter) != 'undefined' && counter != null){
        document.getElementById(counter).innerHTML = val;
    }
    //console.log("from inside updateDisplay. val is: " + val +" and counter is: " + counter)
}

function increaseCounterCookie(counter, myval) {
    if(sessionStorage.getItem(counter) == null){
         sessionStorage.setItem(counter, "0");
    }

    sessionStorage.setItem(counter,myval);

    //console.log("Counter " + counter + ":",  sessionStorage.getItem(counter));
}

    function resetAllCounters () {
    
        var counter="counter-"
        for (i = 0; i <=16 ; i++){
            var cc = sessionStorage.getItem(counter+i)
            var counterID = counter + i;
            if (typeof(cc)!= 'undefined' && cc!=null){
                resetCounter(counterID);      
            
                updateDisplay(counterID,0)
                //console.log("From domcontentloaded counter is: " + counter+i + " and cc is " +cc);
            }
        }
    }

function resetAllCounters_Not_working() {
    for (i=0; i<=16; i++){

        var counter = "counter-";
        var counterID = counter+i;
        var counterElemenent =document.getElementById(counterID);
        
        if (typeof(counterElemenent)!= 'undefined' && counterElemenent!=null){
            //console.log("cc is: " + cc + " and counter is: " + counterID);
            if(cc>0){
                //cc--
            } else {
                resetCounter(counterID); 
                //counterValue = "0";
            }
        
        updateDisplay(counterID,cc)
        //console.log("From domcontentloaded counter is: " + counter+i + " and cc is " +cc);
        }

        updateDisplay(counterID, 0);
        sessionStorage.setItem(counterID, 0);
    }
}