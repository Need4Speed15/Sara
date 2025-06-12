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