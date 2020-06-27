import basicMain from "./basic";
import {
    useCallbackToSetTimeout,
    usePromiseToSetTimeout,
    useAsyncFunctionToSetTimeout
} from "./async";
import usePromise from "./promise";
import getUrlByFetch from "./fetch";
import getUrlByAxios from "./axios";

document.getElementById("app").innerHTML = `
<h1>Hello Dog-Lovers:</h1>
<div>
  Look
  <a href="http://www.vetstreet.com/dogs/" target="_blank" rel="noopener noreferrer">here</a>
  for more info about the street dogs.
</div>

<div>
<h3> Click on the image to load a new doggie. </h3> 
</div>

<h1>Dog1 (Fetch)</h1>
<img id="imgDog1" border="0" alt="Dog1" src="" width="300"/>

<h1>Dog2 (Axios)</h1>
<img id="imgDog2" border="0" alt="Dog2" src="" width="300"/>

<p>
<p>
`;

let imgDog1 = document.getElementById("imgDog1");
if (imgDog1) {
    imgDog1.addEventListener("click", getUrlByFetch);
}

let imgDog2 = document.getElementById("imgDog2");
if (imgDog2) {
    imgDog2.addEventListener("click", getUrlByAxios);
}

getUrlByFetch();
getUrlByAxios();

// basicMain();
// useCallbackToSetTimeout();
// usePromiseToSetTimeout();
// useAsyncFunctionToSetTimeout();
//usePromise();
