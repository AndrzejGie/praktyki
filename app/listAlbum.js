function showMe() {

    fetch("http://localhost:3000/albums")
        .then(res => res.json())
        .then(res => {
            createCard = [];
            Object.keys(res).map(
                id => {
                    newCard = {};
                    newCard.key = id
                    newCard.title = res[id].title;
                    newCard.author = res[id].author;
                    newCard.genre = res[id].genre;
                    newCard.description = res[id].description;

                    createCard.push(newCard);
                    return createCard;
                }
            )


            createCard.forEach(element => {



                const albumCard = document.getElementById('app')

                //---Create main div 
                let mainCard = document.createElement('div')
                mainCard.classList.add('card')
                mainCard.setAttribute('style', 'width: 20rem')

                //---Create card body
                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

                //---Create inner elements
                let cardTitle = document.createElement('h3')
                cardTitle.classList.add('card-title')
                cardTitle.innerHTML = element.title
                let cardAuthor = document.createElement('h4')
                cardAuthor.classList.add('card-subtitle', 'mb-2')
                cardAuthor.innerHTML = element.author
                let cardGenre = document.createElement('h5')
                cardGenre.classList.add('card-subtitle', 'mb-2', 'text-muted')
                cardGenre.innerHTML = element.genre
                let cardDescr = document.createElement('p')
                cardDescr.classList.add('card-text')
                cardDescr.innerHTML = element.description
                let deleteAlbum = document.createElement('a')
                deleteAlbum.classList.add('card-link')
                deleteAlbum.setAttribute('href', '#')
                deleteAlbum.innerHTML = "Usuń"
                let editAlbum = document.createElement('a')
                editAlbum.classList.add('card-link')
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