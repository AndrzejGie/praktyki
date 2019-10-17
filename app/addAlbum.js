function get() {
    // document.getElementById('addTitle').innerHTML = ''
    // document.getElementById('addAuthor').innerHTML = ''
    // document.getElementById('addDescription').innerHTML = ''

    let album = {
        title: document.getElementById("addTitle").value,
        author: document.getElementById("addAuthor").value,
        genre: document.getElementById("addGenre").value,
        description: document.getElementById("addDescription").value
    };

    fetch("http://localhost:3000/albums", {
            method: "POST",
            body: JSON.stringify(album),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(res => {
            alert("dodałeś album");
            book = {
                title: "",
                author: "",
                genre: "",
                description: "",
            };
        })
        .catch(err => {
            console.log("TCL: err", err);
        });
}

function titleLenght(sth) {
    if (sth == "addTitle") {
        let titleLen = document.getElementById("addTitle").value.split("").length;
        document.getElementById('titleSpan').innerHTML = titleLen;
    } else if (sth == "addAuthor") {
        let titleLen = document.getElementById("addAuthor").value.split("").length;
        document.getElementById('authorSpan').innerHTML = titleLen;
    } else if (sth == "addGenre") {
        let titleLen = document.getElementById("addGenre").value.split("").length;
        document.getElementById('genreSpan').innerHTML = titleLen;

    } else if (sth == "addDescription") {
        let titleLen = document.getElementById("addDescription").value.split("").length;
        document.getElementById('descriptionSpan').innerHTML = titleLen;
    }
}