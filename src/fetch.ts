let dogApiUrl = "https://dog.ceo/api/breeds/image/random";

let fetchUrl = () => {
    let imgDog = document.getElementById("imgDog");

    fetch(dogApiUrl)
        .then(res => {
            console.log("get response");
            return res.json();
        })
        .then(resJSON => {
            console.log("img:", resJSON.message);
            imgDog.src = resJSON.message;
        })
        .catch(() => {
            console.log("fail");
        });
};

export default fetchUrl;
