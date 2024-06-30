var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
var allSongs = document.querySelector("#allsong")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backword = document.querySelector("#backword")
var forward = document.querySelector("#forward")
var audio = new Audio;
var selectedSong = 0;



  function showData() {
    var clutter = "";
    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
                    <div class="part-1">
                        <img src="${elem.img}" alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>3.56</h6>
                </div>`
    })
   allSongs.innerHTML = clutter
   audio.src = arr[selectedSong].url
   poster.style.backgroundImage = `url(${arr[selectedSong].img})`  

  }


function musicPlay() {
    allSongs.addEventListener("click", function (dets) {
        selectedSong = dets.target.id
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flag = 1;
        showData()
        audio.play()
    })   
    }


    var flag = 0;
    play.addEventListener("click", function () {
        if (flag == 0) {
            play.innerHTML = `<i class="ri-pause-line"></i>`
            showData()
        audio.play()
            flag = 1;

        } else {
            play.innerHTML = `<i class="ri-play-fill"></i>`
            showData()

            audio.pause()

            flag = 0;
        }
    })

    forward.addEventListener("click", function () {
        if (selectedSong < arr.length-1) {
            selectedSong++;
            showData()
            audio.play()
        } else {
            forward.style.opacity = 0.4
        }        
    })
    backword.addEventListener("click", function () {
        if (selectedSong > 0) {
            selectedSong--;
            showData()
            audio.play()
        } else {
            backword.style.opacity = 0.4
        }        
    })








  showData();
  musicPlay();