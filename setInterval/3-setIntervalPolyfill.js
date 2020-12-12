function createSetIntervalPolyfill(){


    // closure
    var intervalID = 0;
    var intervalMap = {};


    function setIntervalPolyfill(callbackFn , delay = 0, ...args){

        if(typeof callbackFn !== 'function'){
            throw new TypeError("'callback' should be a function")
        }

        // Unique
        var id = intervalID++;


        function repeat(){
            intervalMap[id] = setTimeout(
                ()=> {
                    callbackFn(...args)
                    // Terminating
                    if(intervalMap[id]){
                        repeat();
                    }
                },
                delay
            )
        }
        repeat();


        return id

    }

    function clearIntervalPolyfill(intervalID){
        clearTimeout(intervalMap[intervalID]);
        delete intervalMap[intervalID];

    }


    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }

}

const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetIntervalPolyfill()

let counter = 0
let intervalID;

function greeting(name){
    counter++;
    console.log("Hello" , name);
    if(counter >= 3){
        clearIntervalPolyfill(intervalID)
    }
}


intervalID = setIntervalPolyfill("", 1000 , "Yomesh");