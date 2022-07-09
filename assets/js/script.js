var btnA = document.querySelector("#OpenA")
var btnJ = document.querySelector("#OpenJ")
var btnL = document.querySelector("#OpenL")
var btnS = document.querySelector("#OpenS")
var discoBtn =document.querySelector("#disco")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60e1f1e588mshbfdd753b6261471p19ccc5jsna4b5c34f4030',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
};
//Listener events for genre selection/button selection:

//listener event needs to include modal pop up
    //song provided (other steps may need to be added depending on how user is accessing the music)
    //stop and next
//changing file
//option to like song (Listener event click box)
    //if I like a song (could be if/ else if statements)
    //liking song will store info to local storage (set.Item)
    //generate liked artist onto browser (?get.Item which will also store in browser for later)
    //triggers another modal w/ band discography(API?)

  
discoBtn.addEventListener("click", apiSearch)
function apiSearch(){
var searchTerm = 'jonas brothers'//this should be text box value
//searchInput.value
//needs to exist within function 
fetch(`https://theaudiodb.p.rapidapi.com/discography.php?s=${searchTerm}`, options)
    .then(function (response) {
        return response.json()
        //console.log(response.status)(to check for error codes)
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < data.album.length; i++) {
            //for each item create an element (like h2)
            //then set the text content for the newly created element for the current item in the array
            //append that newly created element to the div
            console.log(data.album[i].strAlbum)
        }
    })
    .catch(function (er) {
        console.log(er)
    });
}
    //console.log(data[i].album)
        

//Type input into search/input window for upcoming concerts
    //"enter or search" button to populate list (Listener event)
    //needs to fetch API data
    //data needs to render to page  (another modal)
    //need a way to close out of list of concerts

    //TO DO: intial modal with song and (?)thumb art needs a click box
    //TO DO: another modal to present discography
    //TO DO: input text window for concert search
    //TO DO: button to accompany the  input window




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