


let counter = 0
let intervalID;

function greeting(name){
    counter++;
    console.log("Counter is : "+ counter+num);
    console.log("Hello "+ name);
    if(counter >= 3){
        clearInterval(intervalID)
    }
}


intervalID = setInterval(printCounter, 1000,"Puneet");