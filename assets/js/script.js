var btnA = document.querySelector("#OpenA")
var btnJ = document.querySelector("#OpenJ")
var btnL = document.querySelector("#OpenL")
var btnS = document.querySelector("#OpenS")
var discoBtn =document.querySelector("#disco")
//var discoInput = document.querySelector("#disco-search")
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
var searchTerm = 'jonas brothers'//this would var searchTerm = discoInput.value
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

//function printData()
        

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
                const musicContainer = document.querySelector('.music-container1')
                const playBtn = document.querySelector('#play')
                const prevBtn = document.querySelector('#prev')
                const nextBtn = document.querySelector('#next')
                const audio = document.querySelector('#audio')
                const progress1 = document.querySelector('.progress1')
                const progressContainer1 = document.querySelector('.progress-container1')
                const title = document.querySelector('#title1')
                const conver = document.querySelector('#natalie')
                
                // Song titles -- via array
                const songs = ['Torn', 'Done', 'Two-Black-Cadillacs', 'Blackbird', 'Gold', 'Location', 'Love-in-the-Dark', 'Centuries', 'Cruise', 'Year-3000']
                
                //keep track of songs
                let songIndex = 9
                
                // Initially load songs info DOM
                loadSong(songs[songIndex])
                
                //update song details
                function loadSong(song) {
                    title.innerText = song
                    audio.src = `music/${song}.mp3`
                    conver.src = `albums/${song}.jpg`
                }
                
                function playSong(){
                    musicContainer.classList.add('play')
                    playBtn.querySelector('i.fas').classList.remove('fa-play')
                    playBtn.querySelector('i.fas').classList.add('fa-pause')
                
                    audio.play()
                }
                
                function pauseSong(){
                    musicContainer.classList.remove('play')
                    playBtn.querySelector('i.fas').classList.add('fa-play')
                    playBtn.querySelector('i.fas').classList.remove('fa-pause')
                
                    audio.pause()
                }
                
                function prevSong(){
                    songIndex--
                
                
                if (songIndex <0) {
                    songIndex = songs.length - 1
                }
                    loadSong(songs[songIndex])
                
                    playSong()
                }
                
                function nextSong(){
                    songIndex++ 
                
                    if (songIndex > songs.length - 1){
                        songIndex = 0
                    }
                
                    loadSong(songs[songIndex])
                
                    playSong()
                    
                }
                
                function updateProgress(e) {
                console.log(e.srcElement.currentTime)
                }
                
                
                // Event listeners
                playBtn.addEventListener('click', () => {
                    const isPlaying = musicContainer.classList.contains('play')
                
                    if(isPlaying) {
                        pauseSong()
                    } else {
                        playSong()
                    }
                })
                
                // change song events
                prevBtn.addEventListener('click', prevSong)
                nextBtn.addEventListener('click', nextSong)
                
                audio.addEventListener('timeupdate', updateProgress)
                