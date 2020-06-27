import axios from "axios";

let dogApiUrl = "https://dog.ceo/api/breeds/image/random";
let getUrlByAxios = () => {
    let imgDog = document.getElementById("imgDog2");
    axios.get(dogApiUrl).then(function(res) {
        //Not need to use .json() to convert the response
        console.log("(axios) img:", res.data.message);
        imgDog.src = res.data.message;
    });
};

export default getUrlByAxios;
