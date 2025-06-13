const musicContanierPlaylist = {
  Carolina: {},
}


// Function for my best friend play button
const myBestFriendPlayButton = document.querySelector('.play-button-my-best-friend');
const myBestFriendAudio = new Audio('audio/My Best Friend.mp3');
let isPlayingMyBestFriend = false;

if (myBestFriendPlayButton) {
  myBestFriendPlayButton.addEventListener('click', function () {
    if (!isPlayingMyBestFriend) {
      pauseAllAudiosAndResetButtons();
      myBestFriendAudio.volume = 0.5;
      myBestFriendAudio.play();
      myBestFriendPlayButton.textContent = 'Pause';
      isPlayingMyBestFriend = true;
    } else {
      myBestFriendAudio.pause();
      myBestFriendPlayButton.textContent = 'My Best Friend';
      isPlayingMyBestFriend = false;
    }
  });

  myBestFriendAudio.addEventListener('ended', function () {
    myBestFriendPlayButton.textContent = 'My Best Friend';
    isPlayingMyBestFriend = false;
  });
}

// function for til you can't play button
const tilYouCantPlayButton = document.querySelector('.play-button-til-you-cant');
const tilYouCantAudio = new Audio('audio/Til You Can\'t.mp3');
let isPlayingTilYouCant = false;

if (tilYouCantPlayButton) {
  tilYouCantPlayButton.addEventListener('click', function () {
    if (!isPlayingTilYouCant) {
      pauseAllAudiosAndResetButtons();
      tilYouCantAudio.volume = 0.5;
      tilYouCantAudio.play();
      tilYouCantPlayButton.textContent = 'Pause';
      isPlayingTilYouCant = true;
    } else {
      tilYouCantAudio.pause();
      tilYouCantPlayButton.textContent = 'Til You Can\'t';
      isPlayingTilYouCant = false;
    }
  });

  tilYouCantAudio.addEventListener('ended', function () {
    tilYouCantPlayButton.textContent = 'Til You Can\'t';
    isPlayingTilYouCant = false;
  });
}

// Function for crazy on me play button
const crazyOnMePlayButton = document.querySelector('.play-button-crazy-on-me');
const crazyOnMeAudio = new Audio('audio/Crazy On Me.mp3');
let isPlayingCrazyOnMe = false;

if (crazyOnMePlayButton) {
  crazyOnMePlayButton.addEventListener('click', function () {
    if (!isPlayingCrazyOnMe) {
      pauseAllAudiosAndResetButtons();
      crazyOnMeAudio.volume = 0.5;
      crazyOnMeAudio.play();
      crazyOnMePlayButton.textContent = 'Pause';
      isPlayingCrazyOnMe = true;
    } else {
      crazyOnMeAudio.pause();
      crazyOnMePlayButton.textContent = 'Crazy On Me';
      isPlayingCrazyOnMe = false;
    }
  });

  crazyOnMeAudio.addEventListener('ended', function () {
    crazyOnMePlayButton.textContent = 'Crazy On Me';
    isPlayingCrazyOnMe = false;
  });
}

//function for save me play button
const saveMePlayButton = document.querySelector('.play-button-save-me');
const saveMeAudio = new Audio('audio/Save Me.mp3');
let isPlayingSaveMe = false;

if (saveMePlayButton) {
  saveMePlayButton.addEventListener('click', function () {
    if (!isPlayingSaveMe) {
      pauseAllAudiosAndResetButtons();
      saveMeAudio.volume = 0.5;
      saveMeAudio.play();
      saveMePlayButton.textContent = 'Pause';
      isPlayingSaveMe = true;
    } else {
      saveMeAudio.pause();
      saveMePlayButton.textContent = 'Save Me';
      isPlayingSaveMe = false;
    }
  });

  saveMeAudio.addEventListener('ended', function () {
    saveMePlayButton.textContent = 'Save Me';
    isPlayingSaveMe = false;
  });
}

// Function for a thousand years play button
const aThousandYearsPlayButton = document.querySelector('.play-button-a-thousand-years');
const aThousandYearsAudio = new Audio('audio/A Thousand Years.mp3');
let isPlayingAThousandYears = false;

if (aThousandYearsPlayButton) {
  aThousandYearsPlayButton.addEventListener('click', function () {
    if (!isPlayingAThousandYears) {
      pauseAllAudiosAndResetButtons();
      aThousandYearsAudio.volume = 0.5;
      aThousandYearsAudio.play();
      aThousandYearsPlayButton.textContent = 'Pause';
      isPlayingAThousandYears = true;
    } else {
      aThousandYearsAudio.pause();
      aThousandYearsPlayButton.textContent = 'A Thousand Years';
      isPlayingAThousandYears = false;
    }
  });

  aThousandYearsAudio.addEventListener('ended', function () {
    aThousandYearsPlayButton.textContent = 'A Thousand Years';
    isPlayingAThousandYears = false;
  });
}

// Function for dance with you play button
const danceWithYouPlayButton = document.querySelector('.play-button-dance-with-you');
const danceWithYouAudio = new Audio('audio/Dance With You.mp3');
let isPlayingDanceWithYou = false;

if (danceWithYouPlayButton) {
  danceWithYouPlayButton.addEventListener('click', function () {
    if (!isPlayingDanceWithYou) {
      pauseAllAudiosAndResetButtons();
      danceWithYouAudio.volume = 0.5;
      danceWithYouAudio.play();
      danceWithYouPlayButton.textContent = 'Pause';
      isPlayingDanceWithYou = true;
    } else {
      danceWithYouAudio.pause();
      danceWithYouPlayButton.textContent = 'Dance With You';
      isPlayingDanceWithYou = false;
    }
  });

  danceWithYouAudio.addEventListener('ended', function () {
    danceWithYouPlayButton.textContent = 'Dance With You';
    isPlayingDanceWithYou = false;
  });
}

// Function for oceans play button
const oceansPlayButton = document.querySelector('.play-button-oceans');
const oceansAudio = new Audio('audio/Oceans.mp3');
let isPlayingOceans = false;

if (oceansPlayButton) {
  oceansPlayButton.addEventListener('click', function () {
    if (!isPlayingOceans) {
      pauseAllAudiosAndResetButtons();
      oceansAudio.volume = 0.5;
      oceansAudio.play();
      oceansPlayButton.textContent = 'Pause';
      isPlayingOceans = true;
    } else {
      oceansAudio.pause();
      oceansPlayButton.textContent = 'Oceans';
      isPlayingOceans = false;
    }
  });

  oceansAudio.addEventListener('ended', function () {
    oceansPlayButton.textContent = 'Oceans';
    isPlayingOceans = false;
  });
}

function pauseAllAudiosAndResetButtons() {
  // Pause all audio elements created in this script
  myBestFriendAudio.pause();
  tilYouCantAudio.pause();
  crazyOnMeAudio.pause();

  // Reset play states
  isPlayingMyBestFriend = false;
  isPlayingTilYouCant = false;
  isPlayingCrazyOnMe = false;

  // Reset button text
  if (myBestFriendPlayButton) {
    myBestFriendPlayButton.textContent = 'My Best Friend';
  }
  if (tilYouCantPlayButton) {
    tilYouCantPlayButton.textContent = "Til You Can't";
  }
  if (crazyOnMePlayButton) {
    crazyOnMePlayButton.textContent = 'Crazy On Me';
  }
}