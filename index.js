document.addEventListener('DOMContentLoaded', function() {
  const homePhotos = document.querySelector('.home-photos');
  const homeVideos = document.querySelector('.home-videos');
  let homeVideosList = '';
  let homePhotosList = '';
  for (let i = 1; i <= 5; i++) {
    const photo = `<img src="images/home/home${i}.jpg" alt="Home ${i}">`;
    homePhotosList += photo;
  }
  for (let i = 1; i <= 1; i++) {
    const video = `<video class="home-video" src="images/home/videos/home${i}.mov" alt="home Video ${i}" controls autoplay loop muted></video>`;
    homeVideosList += video;
  }
  if (homePhotos) homePhotos.innerHTML = homePhotosList;
  if (homeVideos) homeVideos.innerHTML = homeVideosList;

  const saraPhotos = document.querySelector('.sara-photos');
  const saraVideos = document.querySelector('.sara-videos');
  let saraVideosList = '';
  let saraPhotosList = '';
  for (let i = 1; i <= 29; i++) {
    const photo = `<img src="images/sara/sara${i}.jpg" alt="Sara ${i}">`;
    saraPhotosList += photo;
  }
  for (let i = 1; i <= 4; i++) {
    const video = `<video class="sara-video" src="images/sara/videos/sara${i}.mov" alt="Sara Video ${i}" controls autoplay loop muted></video>`;
    saraVideosList += video;
  }
  if (saraPhotos) saraPhotos.innerHTML = saraPhotosList;
  if (saraVideos) saraVideos.innerHTML = saraVideosList;

  const tynsleePhotos = document.querySelector('.tynslee-photos');
  const tynsleeVideos = document.querySelector('.tyns-videos');
  let tynsleeVideosList = '';
  let tynsleePhotosList = '';
  for (let i = 1; i <= 9; i++) {
    const photo = `<img src="images/tynslee/tyns${i}.jpg" alt="Tyns ${i}">`;
    tynsleePhotosList += photo;
  }
  for (let i = 1; i <= 5; i++) {
    const video = `<video class="tyns-video" src="images/tynslee/videos/tyns${i}.mov" alt="Tyns Video ${i}" controls autoplay loop muted></video>`;
    tynsleeVideosList += video;
  }
  if (tynsleePhotos) tynsleePhotos.innerHTML = tynsleePhotosList;
  if (tynsleeVideos) tynsleeVideos.innerHTML = tynsleeVideosList;

  const masonPhotos = document.querySelector('.mason-photos');
  const masonVideos = document.querySelector('.mason-videos');
  let masonVideosList = '';
  let masonPhotosList = '';
  for (let i = 1; i <= 8; i++) {
    const photo = `<img src="images/mason/mason${i}.jpg" alt="Mason ${i}">`;
    masonPhotosList += photo;
  }
  for (let i = 1; i <= 6; i++) {
    const video = `<video class="mason-video" src="images/mason/videos/mason${i}.mov" alt="Mason Video ${i}" controls autoplay loop muted></video>`;
    masonVideosList += video;
  }
  if (masonPhotos) masonPhotos.innerHTML = masonPhotosList;
  if (masonVideos) masonVideos.innerHTML = masonVideosList;

  const csPhotos = document.querySelector('.cs-photos');
  const csVideos = document.querySelector('.cs-videos');
  let csPhotosList = '';
  let csVideosList = '';
  for (let i = 1; i <= 70; i++) {
    const photo = `<img class="cs-photo" src="images/cs/cs${i}.jpg" alt="C+S ${i}">`;
    csPhotosList += photo;
  }
  for (let i = 2; i <= 16; i++) {
    const video = `<video class="cs-video" src="images/cs/videos/cs${i}.mov" alt="C+S Video ${i}" controls autoplay loop muted></video>`;
    csVideosList += video;
  }
  if (csPhotos) csPhotos.innerHTML = csPhotosList;
  if (csVideos) csVideos.innerHTML = csVideosList;
});



// Function for cs play button
const carolinaPlayButton = document.querySelector('.play-button-cs');
const carolinaAudio = new Audio('audio/Carolina.mp3');
let isPlayingCarolina = false;

if (carolinaPlayButton) {
  carolinaPlayButton.addEventListener('click', function () {
    if (!isPlayingCarolina) {
      carolinaAudio.volume = 0.5;
      carolinaAudio.play();
      carolinaPlayButton.textContent = 'Pause';
      isPlayingCarolina = true;
    } else {
      carolinaAudio.pause();
      carolinaPlayButton.textContent = 'Play';
      isPlayingCarolina = false;
    }
  });

  carolinaAudio.addEventListener('ended', function () {
    carolinaPlayButton.textContent = 'Play';
    isPlayingCarolina = false;
  });
}

// Function for mason play button
const beautifulThingsPlayButton = document.querySelector('.play-button-mason');
const beautifulThingsAudio = new Audio('audio/Beautiful Things.m4a');
let isPlayingBeautifulThings = false;
if (beautifulThingsPlayButton) {
  beautifulThingsPlayButton.addEventListener('click', function () {
    if (!isPlayingBeautifulThings) {
      beautifulThingsAudio.volume = 0.5;
      beautifulThingsAudio.play();
      beautifulThingsPlayButton.textContent = 'Pause';
      isPlayingBeautifulThings = true;
    } else {
      beautifulThingsAudio.pause();
      beautifulThingsPlayButton.textContent = 'Play';
      isPlayingBeautifulThings = false;
    }
  });

  beautifulThingsAudio.addEventListener('ended', function () {
    beautifulThingsPlayButton.textContent = 'Play';
    isPlayingBeautifulThings = false;
  });
} 

// Function for sara play button
const saraPlayButton = document.querySelector('.play-button-sara');
const saraAudio = new Audio('audio/Take Me Home.mp3');
let isPlayingSara = false;

if (saraPlayButton) {
  saraPlayButton.addEventListener('click', function () {
    if (!isPlayingSara) {
      saraAudio.volume = 0.5;
      saraAudio.play();
      saraPlayButton.textContent = 'Pause';
      isPlayingSara = true;
    } else {
      saraAudio.pause();
      saraPlayButton.textContent = 'Play';
      isPlayingSara = false;
    }
  });

  saraAudio.addEventListener('ended', function () {
    saraPlayButton.textContent = 'Play';
    isPlayingSara = false;
  });
}

// Function for tynslee play button
const tynsleePlayButton = document.querySelector('.play-button-tynslee');
const tynsleeAudio = new Audio('audio/You\'re Gonna Be.mp3');
let isPlayingTynslee = false;

if (tynsleePlayButton) {
  tynsleePlayButton.addEventListener('click', function () {
    if (!isPlayingTynslee) {
      tynsleeAudio.volume = 0.5;
      tynsleeAudio.play();
      tynsleePlayButton.textContent = 'Pause';
      isPlayingTynslee = true;
    } else {
      tynsleeAudio.pause();
      tynsleePlayButton.textContent = 'Play';
      isPlayingTynslee = false;
    }
  });

  tynsleeAudio.addEventListener('ended', function () {
    tynsleePlayButton.textContent = 'Play';
    isPlayingTynslee = false;
  });
}