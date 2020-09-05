

function greeting(name){
    console.log('Hello ' + name)
    console.log('How are you?')
}

const timeoutId = setTimeout(greeting , 1000 , "Puneet");

clearTimeout(timeoutId);

console.log('Current Execution')

// Applications of SetTimeout

// -> Debaunce and throttle.
// -> to show modal after some time