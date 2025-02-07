const api = "https://localhost:8080";

export const login = async ({email, password} = {}) => {
    const response = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    if (response.status === 401) {
        throw new Error("Invalid login");
    }
    return await response.json();
};

export const getPrivateTest = async ({token}) => {
    const response = await fetch(`${api}/private/test`, {
        headers: { 
            "Authorization": `Bearer ${token}`
        }
    });
    return await response.json();
};