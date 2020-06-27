let dogApiUrl = "https://dog.ceo/api/breeds/image/random";

let getUrlByFetch = () => {
    let imgDog = document.getElementById("imgDog1");

    fetch(dogApiUrl)
        .then(res => {
            console.log("get response");
            return res.json();
        })
        .then(resJSON => {
            console.log("(fetch) img:", resJSON.message);
            imgDog.src = resJSON.message;
        })
        .catch(() => {
            console.log("fail");
        });
};

export default getUrlByFetch;
