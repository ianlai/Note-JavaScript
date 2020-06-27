import basicMain from "./basic";
import {
    useCallbackToSetTimeout,
    usePromiseToSetTimeout,
    useAsyncFunctionToSetTimeout
} from "./async";
import usePromise from "./promise";
import fetchUrl from "./fetch";

document.getElementById("app").innerHTML = `
<h1>Hello Dog-Lovers:</h1>
<div>
  Look
  <a href="http://www.vetstreet.com/dogs/" target="_blank" rel="noopener noreferrer">here</a>
  for more info about the street dogs.
</div>
<img id="imgDog" border="0" alt="W3Schools" src="" width="300"/>
<button id="loadButton"> Load </button>
<p>
<p>
`;

let loadButton = document.getElementById("loadButton");
if (loadButton) {
    loadButton.addEventListener("click", fetchUrl);
}

fetchUrl();

// basicMain();
// useCallbackToSetTimeout();
// usePromiseToSetTimeout();
// useAsyncFunctionToSetTimeout();
//usePromise();
