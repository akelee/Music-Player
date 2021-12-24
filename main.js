const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles in array

const songs = ['hey', 'summer', 'ukulele']

//Keep track of songs

let  songIndex = 2 //default no. of idexes 0,1,2

// Initially load songs into DOM. Call loadSong func and create fn in a sec

loadSong(songs[songIndex]) //takes in songs in the songIndex

//Update song details

function loadSong(song){//takes in a song in 3-steps: title, audio src, img src in order to load song
    title.innerText = song
    audio.src = `music/${song}.mp3` //songs need to be in mp3
    cover.src = `img/${song}.jpg` //img need to be in jpg

}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function prevSong(){
    songIndex-- //decrease 

    if(songIndex < 0){
        songIndex = songs.length - 1 //puts it to the last song
    }
    loadSong(songs[songIndex])

    playSong()
}

function nextSong(){
    songIndex++ //increase 

    if(songIndex > songs.length - 1){//if we're at the end of list
songIndex = 0 //puts it to the first song
    }
    loadSong(songs[songIndex])

    playSong()
}

//event listeners

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  //change song events

  prevBtn.addEventListener('click', prevSong)
  nextBtn.addEventListener('click', nextSong)

