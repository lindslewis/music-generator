var btnA = document.querySelector("#OpenA")
var btnJ = document.querySelector("#OpenJ")
var btnL = document.querySelector("#OpenL")
var btnS = document.querySelector("#OpenS")

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


    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60e1f1e588mshbfdd753b6261471p19ccc5jsna4b5c34f4030',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
};
//LISTENER EVENT
var searchTerm = 'jonas brothers'
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
