let pla=document.getElementById("play");
let song=document.querySelector('audio');
let songimg=document.getElementById('songimg');
let forward=document.getElementById("forward");
let backward=document.getElementById("backward");
let songname=document.getElementById("songname");
let art=document.getElementById("artist");
let songplaying=false;
let arr=[{
    name:"TUM SE HI",
    music:"song1.mp3",
    artist:"PRITAM",
    img:"img-1.jpg"

},{
    name:"O Maahi",
    music:"song2.mp3",
    artist:" Arijit Singh",
    img:"img-02.jpg"
},{
    name:"3:59 AM",
    music:"song3.mp3",
    artist:"Divine",
    img:"img3.jfif"
},{
    name:"Cheques",
    music:"song4.mp3",
    artist:"Shubh",
    img:"img4.jpg"
},
{
    name:"295",
    music:"song5.mp3",
    artist:"Sidhu Moose Wala",
    img:"img5.jfif"

},
{
    name:"Bewajah",
    music:"son6.mp3",
    artist:"Himesh Reshammiya",
    img:"img6.jfif"

}]
console.log(songimg);
let playy=()=>{
    songplaying=true;
    song.play();
    pla.classList.replace('fa-play','fa-pause');
    songimg.classList.add("animate");
}
let pause=()=>{
    songplaying=false;
    song.pause();
    pla.classList.replace('fa-pause','fa-play');
    songimg.classList.remove("animate");
}
pla.addEventListener('click',()=>{
    if(songplaying){
        pause();

    }
    else{
        playy();
    }
})
const loadsong=(arr)=>{
    songname.textContent=arr.name;
    art.textContent=arr.artist;
    songimg.src=arr.img;
    song.src=arr.music;


}
let songindex=0;
const nextsong=()=>{
    songindex=(songindex+1) % arr.length; //(0+1) % 4=1%4=2
    loadsong(arr[songindex]);
    playy();
}
const prevsong=()=>{
    songindex=(songindex-1 + arr.length)%arr.length;
    loadsong(arr[songindex])
    playy();
}
forward.addEventListener('click',nextsong);
backward.addEventListener('click',prevsong);