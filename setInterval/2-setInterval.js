var counter = 0;
var intervalId;

function greeting(){
    counter++;
    console.log("Hello Puneet");
    if(counter >=3){
        clearInterval(intervalId);
    }
}

intervalId = setInterval(greeting, 1000);





