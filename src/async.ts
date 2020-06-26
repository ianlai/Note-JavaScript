function useCallbackToSetTimeout() {
  setTimeout(function() {
    console.log("(1) callback: A");
    setTimeout(function() {
      console.log("(2) callback: B");
      setTimeout(() => {
        //arrow function
        console.log("(3) callback: C");
      }, 3000);
    }, 2000);
  }, 1000);
}

function usePromiseToSetTimeout() {
  let promiseCreator = (name: String) => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 1000);
    });
    return promise;
  };

  promiseCreator("A")
    .then(msg => {
      console.log("(1) promise.then: " + msg);
      return promiseCreator("B");
    })
    .then(msg => {
      console.log("(2) promise.then: " + msg);
      return promiseCreator("C");
    })
    .then(msg => {
      console.log("(3) promise.then: " + msg);
    });
}

function usePromise() {
  let promiseCreator = (name: String) => {
    let promise = new Promise((resolve, reject) => {
      let number = Math.random();
      if (number >= 0.5) {
        setTimeout(() => {
          resolve(name);
        }, 1000);
      } else {
        setTimeout(() => {
          reject(name);
        }, 1000);
      }
    });
    return promise;
  };

  promiseCreator("A")
    .then(msg => {
      console.log("(1) promise.then: " + msg);
    })
    .catch(msg => {
      console.log("(x) promise.catch: " + msg);
    });
}

export { useCallbackToSetTimeout, usePromiseToSetTimeout, usePromise };
