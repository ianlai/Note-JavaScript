import basicMain from "./basic.ts";
import {
  useCallbackToSetTimeout,
  usePromiseToSetTimeout,
  usePromise
} from "./async.ts";

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

basicMain();

useCallbackToSetTimeout();
usePromiseToSetTimeout();
usePromise();
