

function greeting(name){
    console.log('Hello ' + name);
}

var timeoutId = setTimeout(greeting, 1000 , "Saloni");

clearTimeout(timeoutId);




