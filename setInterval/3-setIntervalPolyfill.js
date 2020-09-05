const {
    setIntervalPolyfill,
    clearIntervalPolyfill
}= (()=>{

    // Closure Scope.
    var intervalId = 0;
    var intervalMap = {}

    function setIntervalPolyfill (callbackFn, delay=0) {

        // Throw error if callback is not a function.
        if(typeof callbackFn !== "function"){
            throw new TypeError('"callback" argument must be a funtion.')
        }

        var id = intervalId++;
        intervalMap[id] = true;

        // to be passed as paremeters in callback function call.
        var args = Array.prototype.slice.call(arguments,2);

        (function repeat(){
            setTimeout(
                ()=>{
                    if(intervalMap[id]){
                        callbackFn(args);
                        repeat();
                    }  
                },
                delay
            );
        })();

        return id;
    }


    function clearIntervalPolyfill(intervalId) {
        delete intervalMap[intervalId];
    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
})();











let counter = 0
let intervalID;

function greeting(name){
    counter++;
    console.log("Counter is : "+ counter+num);
    console.log("Hello "+ name);
    if(counter >= 3){
        clearIntervalPolyfill(intervalID)
    }
}


intervalID = setIntervalPolyfill(printCounter, 1000,"Puneet");