var discoContainer = document.querySelector("#disco-list")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60e1f1e588mshbfdd753b6261471p19ccc5jsna4b5c34f4030',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
};

function apiSearch(searchTerm) {
    //needs to exist within function 
    fetch(`https://theaudiodb.p.rapidapi.com/discography.php?s=${searchTerm}`, options)
        .then(function (response) {
            if (!response.ok) {
                console.log("invalid entry or information not available")
            }else{
                return response.json()
                //console.log(response.status)(to check for error codes)
            }
        })
        .then(function (data) {
            printData(data)
            console.log(data)
        })
        .catch(function (er) {
            console.log(er)
        });
}
function printData(data) {

    for (let i = 0; i < data.album.length; i++) {
        //1. create element-for each item create an element (like h2)
        var albumTitle = document.createElement("h2")
        var releaseYear = document.createElement("h3")
        //2. style/content
        albumTitle.textContent = data.album[i].strAlbum;
        releaseYear.textContent = data.album[i].releaseYear;

        console.log(data.album[i].strAlbum)
        console.log(data.album[i].intYearReleased)
       //3. append
        discoContainer.append(albumTitle)
         //discoContainer.append(releaseYear)--not functioning, review createElements
    }
}

var searchTerm = localStorage.getItem("searchTerm")
apiSearch (searchTerm)