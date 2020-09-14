


let counter = 0
let intervalID;

function greeting(name){
    counter++;
    console.log("Hello "+ name);
    if(counter >= 3){
        clearInterval(intervalID)
    }
}


intervalID = setInterval(greeting, 1000,"Puneet");