const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//Song titles in array

const songs = ['hey', 'summer', 'ukulele'];

//Keep track of songs

let  songIndex = 2; //default no. of idexes 0,1,2

// Initially load songs into DOM. Call loadSong func and create fn in a sec

loadSong(songs[songIndex]); //takes in songs in the songIndex

//Update song details

function loadSong(song){//takes in a song in 3-steps: title, audio src, img src in order to load song
    title.innerText = song;
    audio.src = `music/${song}.mp3`; //songs need to be in mp3
    cover.src = `img/${song}.jpg`; //img need to be in jpg

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
    songIndex--; //decrease 

    if(songIndex < 0){
        songIndex = songs.length - 1; //puts it to the last song
    }
    loadSong(songs[songIndex]);

    playSong();
}

function nextSong(){
    songIndex++; //increase 

    if(songIndex > songs.length - 1){//if we're at the end of list
    songIndex = 0; //puts it to the first song
    }
    loadSong(songs[songIndex]);

    playSong();
}

//Update progress bar
function updateProgress(e) {//on (e)event object, can get dur and time
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100; /* 100 to get decimal*/
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
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
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);
 //html5 audio tag w api,, there's event called timeupdate

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
