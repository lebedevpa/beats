const playerContainer = document.querySelector('.player');
const playerWrapper = document.querySelector('.player__wrapper');
const video = document.querySelector('.video');
const playerStart = document.querySelector('.player__start');
const playerPlayback = document.querySelector('.player__playback');
const progressbar = document.querySelector('.player__playback-line');
const playerVideoCircle = document.querySelector('.player__playback-button');
const playerVolumeIcon = document.querySelector('.player__volume-icon');
const playerVolumeBar = document.querySelector('.player__volume');
const playerVolumeCircle = document.querySelector('.player__volume-button');

let startVolume = 0;
let currentVolume;

// запуск функционала

const handleStart = () => {

  if(video.paused){
    video.play();
  } else {
    video.pause();
  }

}

playerStart.addEventListener('click', handleStart);
playerWrapper.addEventListener('click', handleStart);


// значок play не отлавливается

video.onplay = () => {
  togglePlayer();
}

video.onpause = () => {
  togglePlayer("pause");
} 

const togglePlayer = (action = "start" ) => {
  if (action === "start") {
    playerContainer.classList.add('player--active');
  } else {
    playerContainer.classList.remove('player--active');
  }
}


// звук

const changeVolume = (e) => {

  const currentTarget = e.currentTarget;
  const left = currentTarget.getBoundingClientRect().left;
  const soundBarWidth = parseInt(getComputedStyle(currentTarget).width);
  const newPosition = e.pageX - left;
  const percentValue = (newPosition / soundBarWidth) * 100;
  if (percentValue < 100) {
    video.volume = percentValue / 100;
    playerVolumeCircle.style.left = `${percentValue}%`;
  }

}

const toggleSound = () => {
  playerVolumeIcon.classList.toggle("muted");
  if (volume === 0) {
    video.volume = currentVolume;
    playerVolumeCircle.style.left = `${currentVolume * 100}%`;
  } else {
  currentVolume = video.volume;
  video.volume = startVolume;
  playerVolumeCircle.style.left = `${startVolume}%`;
  }
}


playerVolumeBar.addEventListener('click', changeVolume);
playerVolumeIcon.addEventListener('click', toggleSound);