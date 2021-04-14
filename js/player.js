const playerContainer = document.querySelector('.player');

const video = document.querySelector('.video');
const playerStart = document.querySelector('.player__start');
const playerPlayback = document.querySelector('.player__playback');
const progressBar = document.querySelector('.player__playback-line');
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
    playerStart.classList.add('player__start--active');
  } else {
    video.pause();
    playerStart.classList.remove('player__start--active');
  }

}

playerStart.addEventListener('click', handleStart);
video.addEventListener('click', handleStart);


// значок play 

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

const changeCirclePosition = (percent) => {
  playerVideoCircle.style.left = `${percent}`;
}


const changeVolume = (e) => {

  const currentTarget = e.currentTarget;
  const left = e.offSetX;

  const soundBarWidth = parseInt(getComputedStyle(currentTarget).width);

  // const newPosition = e.pageX - left;
  
  const percentValue = (left / soundBarWidth) * 100;
  if (percentValue < 100) {
    video.volume = percentValue / 100;
    playerVolumeCircle.style.left = `${percentValue}%`;
    changeCirclePosition(percentValue);
    document.querySelector('.player__volume-bar').style.width = `${percentValue}%`;
   
  }

}

const toggleSound = () => {
  playerVolumeIcon.classList.toggle("muted");
  if (video.volume === 0) {
    video.volume = currentVolume;
    playerVolumeCircle.style.left = `${currentVolume * 100}%`;
    changeCirclePosition('currentVolume' * 100);
  } else {
    currentVolume = video.volume;
    video.volume = startVolume;
    playerVolumeCircle.style.left = `${startVolume}%`;
    changeCirclePosition('startVolume');
  }
}


playerVolumeBar.addEventListener('click', changeVolume);
playerVolumeIcon.addEventListener('click', toggleSound);

// Duration

const handleDuration = (e) => {

  const barSize = parseInt(getComputedStyle(playerPlayback).width);
  const cirсleWidth = parseInt(getComputedStyle(playerVideoCircle).width);

  // const {offSetX} = e;

  const offSetX = e.offSetX;
  const newSize = offSetX + cirleWidth / 2;
  const newTime = (newSize + video.duration) / barSize;
  video.currentTime = newTime;
}

const updateTime = () => {
  let redBar = video.currentTime / video.duration;
  progressBar.style.width = `${redBar * 100}%`;

}


playerPlayback.addEventListener('click', handleDuration);
video.addEventListener('click', updateTime);