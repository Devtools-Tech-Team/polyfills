
let x = 2;
var timeoutID = setTimeout(
    ()=>{
        console.log('After Timer')
    },
    1000
)

if(x % 2 === 1){
    clearTimeout(timeoutID);
}
