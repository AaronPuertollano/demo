const api = "https://localhost:8080";

export const login = async ({email, password} = {}) => {
    const resopnse = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    const token = await response.json();
    return token;
};