document.addEventListener('DOMContentLoaded', function() {
  const homePhotos = document.querySelector('.home-photos');
  let homePhotosList = '';
  for (let i = 1; i <= 10; i++) {
    const photo = `<img src="images/home/home${i}.jpg" alt="Home ${i}">`;
    homePhotosList += photo;
  }
  if (homePhotos) homePhotos.innerHTML = homePhotosList;

  const saraPhotos = document.querySelector('.sara-photos');
  let saraPhotosList = '';
  for (let i = 1; i <= 4; i++) {
    const photo = `<img src="images/sara/sara${i}.jpg" alt="Sara ${i}">`;
    saraPhotosList += photo;
  }
  if (saraPhotos) saraPhotos.innerHTML = saraPhotosList;

  const tynsleePhotos = document.querySelector('.tynslee-photos');
  let tynsleePhotosList = '';
  for (let i = 1; i <= 4; i++) {
    const photo = `<img src="images/tynslee/tynslee${i}.jpg" alt="Tynslee ${i}">`;
    tynsleePhotosList += photo;
  }
  if (tynsleePhotos) tynsleePhotos.innerHTML = tynsleePhotosList;

  const masonPhotos = document.querySelector('.mason-photos');
  let masonPhotosList = '';
  for (let i = 1; i <= 4; i++) {
    const photo = `<img src="images/mason/mason${i}.jpg" alt="Mason ${i}">`;
    masonPhotosList += photo;
  }
  if (masonPhotos) masonPhotos.innerHTML = masonPhotosList;

  const csPhotos = document.querySelector('.cs-photos');
  let csPhotosList = '';
  for (let i = 1; i <= 70; i++) {
    const photo = `<img class="cs-photos" src="images/cs/cs${i}.jpg" alt="C+S ${i}">`;
    csPhotosList += photo;
  }
  if (csPhotos) csPhotos.innerHTML = csPhotosList;
});



// Function for cs play button
const bestFriendPlayButton = document.querySelector('.play-button-best-friends');
const bestFriendAudio = new Audio('audio/My Best Friend.mp3');
let isPlayingBestFriends = false;

if (bestFriendPlayButton) {
  bestFriendPlayButton.addEventListener('click', function () {
    if (!isPlayingBestFriends) {
      bestFriendAudio.volume = 0.5;
      bestFriendAudio.play();
      bestFriendPlayButton.textContent = 'Pause';
      isPlayingBestFriends = true;
    } else {
      bestFriendAudio.pause();
      bestFriendPlayButton.textContent = 'Play';
      isPlayingBestFriends = false;
    }
  });

  bestFriendAudio.addEventListener('ended', function () {
    bestFriendPlayButton.textContent = 'Play';
    isPlayingBestFriends = false;
  });
}

// Function for mason play button
const beautifulThingsPlayButton = document.querySelector('.play-button-beautiful-things');
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