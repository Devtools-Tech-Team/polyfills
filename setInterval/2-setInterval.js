
let counter = 0;

const intervalId = setInterval(
    ()=>{
        console.log('After Every 1 sec');
        counter++;
        if(counter >= 3){
            clearInterval(intervalId)
        }
    },
    1000
)