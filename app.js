let stranger = document.querySelector(".stranger");
let fallow= document.querySelector("#fallow");

let check = 0;
function addFriend(){
    if(check===0){
        stranger.innerHTML = "Friend"
    stranger.style.color = "green"
    fallow.innerHTML = "Friend"
    check = 1

    } else{
        stranger.innerHTML = "Stranger"
    stranger.style.color = "red"
    fallow.innerHTML = "unFriend"
    check = 0
    }



}

