let printMessage = (msg: String) => {
    console.log(msg);
};

function useCallbackToSetTimeout() {
    setTimeout(function() {
        printMessage("(1) callback");
        setTimeout(function() {
            printMessage("(2) callback");
            setTimeout(() => {
                printMessage("(3) callback");
            }, 3000);
        }, 2000);
    }, 1000);
}

function usePromiseToSetTimeout() {
    const delay = (ms: number) => {
        let promise = new Promise(resolve => {
            setTimeout(resolve, ms);
        });
        return promise;
    };

    delay(1000)
        .then(() => {
            printMessage("(1) promise.then");
            return delay(2000);
        })
        .then(() => {
            printMessage("(2) promise.then");
            return delay(3000);
        })
        .then(() => {
            printMessage("(3) promise.then");
        });
}

//async function; use await to wait for a time interval
async function useAsyncFunctionToSetTimeout() {
    const delay = (ms: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    };

    await delay(1000);
    printMessage("(1) async func");
    await delay(2000);
    printMessage("(2) async func");
    await delay(3000);
    printMessage("(3) async func");
}

//-----------------------------------

export {
    useCallbackToSetTimeout,
    usePromiseToSetTimeout,
    useAsyncFunctionToSetTimeout
};
