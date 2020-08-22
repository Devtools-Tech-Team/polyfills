const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = (()=>{

    let intervalId = 0;
    const intervalMap = {};

    const setIntervalPolyfill = (callbackFn,timer) => {

        const id = intervalId++;
        intervalMap[id] = true;

        const repeat = () => {
            setTimeout(
                () => {
                    if(!intervalMap[id]){
                        return;
                    }
                    callbackFn();
                    repeat();
                },
                timer
            )
        }
        repeat();
        return id;
    }

    const clearIntervalPolyfill = (intervalId) => {
        delete intervalMap[intervalId];
    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
})();











let counter = 0;

const intervalId = setIntervalPolyfill(
    ()=>{
        console.log('After Every 1 sec');
        counter++;
        if(counter >= 3){
            clearIntervalPolyfill(intervalId)
        }
    },
    1000
)