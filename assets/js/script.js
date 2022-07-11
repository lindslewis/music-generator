var searchInput = document.getElementById("concert-search")
var conBtn = document.getElementById("concert")
// var concertDisplay = document.getElementById("concertDisplay")
var searches = JSON.parse(localStorage.getItem("searches")) || [];
var btnA = document.querySelector("#OpenA")
var btnJ = document.querySelector("#OpenJ")
var btnL = document.querySelector("#OpenL")
var btnS = document.querySelector("#OpenS")
var discoBtn = document.querySelector("#disco")
var discoInput = document.querySelector("#disco-search")




//function to open a new page during concert search with local storage set
conBtn.addEventListener("click", search) 

function search(event) {
    event.preventDefault()

    localStorage.setItem("sTerm", searchInput.value);
//document.getElementById("search-log").innerText = searches;
    searches.push(searchInput.value)
    localStorage.setItem("searches", JSON.stringify(searches))

    window.open('results.html', '_blank');
         
}
//function to open a new page during discography search with local storage set
discoBtn.addEventListener("click", scanDisco)

function scanDisco(event) {
    event.preventDefault()
    var searchTerm = discoInput.value
    localStorage.setItem("searchTerm", searchTerm);
    window.open('disco.html', '_blank');
}


//option to like song (Listener event click box)
//if I like a song (could be if/ else if statements)
//?local storaege and get item related to liked songs vs recent searches


//// Jovi's Media Player Work ////
///Player A///
let now_playingA = document.querySelector(".now-playingA");
let track_artA = document.querySelector(".track-artA"); ///add to HTML!!
let track_nameA = document.querySelector(".tracknameA");
let track_artistA = document.querySelector(".trackartistA");

let playpause_btnA = document.querySelector(".playpause-trackA");
let next_btnA = document.querySelector(".next-trackA");
let prev_btnA = document.querySelector(".prev-trackA");

let seek_sliderA = document.querySelector(".seek_sliderA");
let volume_sliderA = document.querySelector(".volume_slider");
let curr_timeA = document.querySelector(".current-timeA");
let total_durationA = document.querySelector(".total-durationA");

//global values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// audio element
let curr = document.createElement('audio');

//define tracks to be played
// Asiya's playlist
let track_listA = {
    name: "Torn",
    artist: "Natalie Imbruglia",
    image: "placeholder",
}


