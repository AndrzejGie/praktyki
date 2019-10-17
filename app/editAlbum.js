//Póki co tylko konstrukcja fetcha wrzucona, żeby nie zapomnieć.

fetch("http://localhost:3000/albums", {
    method: "PUT",
    body: JSON.stringify(album),
    headers: {
        "Content-Type": "application/json"
    },
    credentials: "same-origin"
})