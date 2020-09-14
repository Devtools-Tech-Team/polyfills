function createSetIntervalPolyfill() {

    // Closure Scope.
    var intervalId = 0;
    var intervalMap = {}

    function setIntervalPolyfill (callbackFn, delay=0) {

        // Throw error if callback is not a function.
        if(typeof callbackFn !== "function"){
            throw new TypeError('"callback" argument must be a funtion.')
        }

        var id = intervalId++;
        

        // to be passed as paremeters in callback function call.
        var args = Array.prototype.slice.call(arguments,2);

        function repeat(){
            intervalMap[id] = setTimeout(
                () => {
                        callbackFn(args);
                        repeat();
                },
                delay
            );
            // console.log('From Repeat')
            // console.log(intervalMap[id]);
        }
        repeat();

        return id;
    }


    function clearIntervalPolyfill(intervalId) {
        // console.log(intervalMap[intervalId]);
        clearTimeout(intervalMap[intervalId])
        delete intervalMap[intervalId];
    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}





const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetIntervalPolyfill();





let counter = 0
let intervalID;

function greeting(name){
    counter++;
    console.log("Hello "+ name);
    if(counter >= 3){
        clearIntervalPolyfill(intervalID)
    }
}


intervalID = setIntervalPolyfill(greeting, 1000,"Puneet");