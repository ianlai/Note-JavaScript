import axios from "axios";

let getUrlByAxios = () => {
    let dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    let imgDog = document.getElementById("imgDog2");
    axios.get(dogApiUrl).then(function(res) {
        console.log("(axios) img:", res.data.message);
        imgDog.src = res.data.message;
    });
};

export default getUrlByAxios;
