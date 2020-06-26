function usePromise() {
    let promiseCreator = (name: String) => {
        let promise = new Promise((resolve, reject) => {
            let number = Math.random();
            if (number >= 0.5) {
                setTimeout(() => {
                    resolve(name + " resolve");
                }, 1000);
            } else {
                setTimeout(() => {
                    reject(name + " reject");
                }, 1000);
            }
        });
        return promise;
    };

    promiseCreator("KKK")
        .then(msg => {
            console.log("(o) promise.then: " + msg);
        })
        .catch(msg => {
            console.log("(x) promise.catch: " + msg);
        });
}

export default usePromise;
