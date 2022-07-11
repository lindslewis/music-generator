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

<<<<<<< HEAD
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
                
=======
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


>>>>>>> dev
