const fetchCat = async () => {

    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const body = await Response.json();
    return body[0];

};

alert (JSON.stringify(await fetchCat()));
/*https://api.thecatapi.com/v1/images/search*/

