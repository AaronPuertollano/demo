
const fetchCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const body = await res.json(); 
    return body[0]?.url; 
};

const loadGallery = async () => {
    const urls = await Promise.all([fetchCat(), fetchCat(), fetchCat(), fetchCat(), fetchCat(), fetchCat(), fetchCat(), fetchCat(), fetchCat()]);
    document.querySelector(".galery").innerHTML = urls
        .filter((url) => url) 
        .map((url) => `<img src="${url}"/>`)
        .join("\n");
};

const container = document.querySelector(".container");
container.innerHTML = "Loading...";

for (let i = 0; i < 1; i++){
    loadGallery();
}








