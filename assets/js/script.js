var searchInput = document.getElementById("concert-search")
var conBtn = document.getElementById("concert")
var searches = [];
var btnA = document.querySelector("#OpenA")
var btnJ = document.querySelector("#OpenJ")
var btnL = document.querySelector("#OpenL")
var btnS = document.querySelector("#OpenS")
var discoBtn = document.querySelector("#disco")
var discoInput = document.querySelector("#disco-search")
var playlistBtn = document.querySelector("#playlist-page")




//function to open a new page during concert search with local storage set
conBtn.addEventListener("click", search)
console.log()
function search(event) {
    event.preventDefault()
    if (searchInput.value > 0) {
        localStorage.setItem("sTerm", searchInput.value);
        window.open('HTML/results.html','_blank')
    }
}

//function to open a new page during discography search with local storage set
discoBtn.addEventListener("click", scanDisco)

function scanDisco(event) {
    event.preventDefault()
    var searchTerm = discoInput.value
    if (searchTerm.length > 0) {
        localStorage.setItem("searchTerm", searchTerm);
        window.open('HTML/disco.html', '_blank');
    }
}

//listener event to bring up playlist page
playlistBtn.addEventListener("click", playListPage)

    function playListPage(event) {
        event.preventDefault()
        window.open('HTML/playlists.html', '_blank');
    }

//option to like song (Listener event click box)
//if I like a song (could be if/ else if statements)
//?local storaege and get item related to liked songs vs recent searches