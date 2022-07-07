
$(document).ready(function () {



    let video = document.querySelector(".video");
    let btn = document.getElementById("play-pause");
    let mark = document.querySelector(".player__playback-button");
    let splash = document.querySelector(".player__splash");
    let playerWrapper = document.querySelector(".player__wrapper");
    let progress = document.getElementById('progress');
    let playback = document.querySelector('.player__playback');
    let soundBtn = document.querySelector(".sound__btn");
    let sound = document.querySelector(".sound");
    document.querySelector('#volume').onclick = videoVolume;
    let soundLevel;



    video.addEventListener('timeupdate', function () {
        progressUpdate();
        let timePos = video.currentTime / video.duration;
        mark.style.left = timePos * 100 + "%";
        if (video.ended) {
            btn.className = "player__start-play"
            splash.style.display = "block";
        }
    })

    soundBtn.onclick = soundOf;

    playback.onclick = videoRewind;

    btn.onclick = function () {
        togglePlayPause();
    };
    
    playerWrapper.onclick = function () {
        togglePlayPause();
    }


    function togglePlayPause() {
        if (video.paused) {
            btn.className = "player__start-pause"
            splash.style.display = "none";
            video.play();
        }
        else {
            btn.className = "player__start-play";
            splash.style.display = "block";
            video.pause();
        }
    }

    function progressUpdate() {
        let duration = video.duration;
        let newPos = video.currentTime;
        progress.value = (100 * newPos) / duration;

    }

    function videoRewind() {
        let progressWidth = this.offsetWidth;
        let coordinate = event.offsetX;
        progress.value = coordinate / progressWidth * 100;
        video.currentTime = video.duration * (coordinate / progressWidth);

    }

    function videoVolume() {
        let volume = this.value;
        video.volume = volume / 100;

    }

    function soundOf() {
        if (video.volume === 0) {
            sound.classList.remove('active');
            video.volume = soundLevel;
            volume.value = volume;
        } else {
            soundLevel = video.volume;
            video.volume = 0;
            volume.value = 0;
            sound.classList.add('active');
        }
    }
});


