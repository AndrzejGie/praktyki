function showMe() {

    fetch("http://localhost:3000/albums")
        .then(res => res.json())
        .then(res => {
            console.log("TCL: showMe -> res", res)
            //createCard = [];
            // Object.keys(res).map(
            //     id => {
            //         newCard = {};
            //         newCard.key = id
            //         newCard.title = res[id].title;
            //         newCard.author = res[id].author;
            //         newCard.genre = res[id].genre;
            //         newCard.description = res[id].description;

            //         createCard.push(newCard);
            //         console.log("TCL: showMe -> createCard", createCard)
            //         return createCard;
            //     }
            // )


            res.forEach(res => {



                const albumCard = document.getElementById('app')

                //---Create main div 
                let mainCard = document.createElement('div')
                mainCard.classList.add('card', 'col-6', 'albumCard')
                mainCard.setAttribute('id', 'album' + res.id)

                //---Create card body
                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

                //---Create inner elements
                let cardTitle = document.createElement('h4')
                cardTitle.classList.add('card-title')
                cardTitle.innerHTML = res.title
                let cardAuthor = document.createElement('h5')
                cardAuthor.classList.add('card-subtitle', 'mb-2')
                cardAuthor.innerHTML = res.author
                let cardGenre = document.createElement('h6')
                cardGenre.classList.add('card-subtitle', 'mb-2', 'text-muted')
                cardGenre.innerHTML = res.genre
                let cardDescr = document.createElement('p')
                cardDescr.classList.add('card-text')
                cardDescr.innerHTML = res.description
                let deleteAlbum = document.createElement('a')
                deleteAlbum.classList.add('card-link', 'delElem')
                deleteAlbum.setAttribute('href', '#')
                deleteAlbum.innerHTML = "Usuń"
                let editAlbum = document.createElement('a')
                editAlbum.classList.add('card-link', 'editElem')
                editAlbum.setAttribute('href', '#')
                editAlbum.innerHTML = "Edytuj"

                //---append elements to parents
                cardBody.appendChild(cardTitle)
                cardBody.appendChild(cardAuthor)
                cardBody.appendChild(cardGenre)
                cardBody.appendChild(cardDescr)
                cardBody.appendChild(deleteAlbum)
                cardBody.appendChild(editAlbum)

                mainCard.appendChild(cardBody)
                albumCard.appendChild(mainCard)

            });
        })
}
showMe();

function deleteAlbum() {
    fetch("http://localhost:3000/albums")
        .then(album => album.json())
        .then(album => {
            console.log("TCL: deleteAlbum -> album", album)

            let erase = document.getElementById('album' + res.id)

        })
}