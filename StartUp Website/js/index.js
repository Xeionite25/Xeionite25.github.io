window.onscroll = function() {
    changeNavbar();
};

function changeNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

let usersSection = document.querySelector(".crew-member");
let isShow = true;

function showCrewMembers(){
    if (isShow) {
        usersSection.style.display = "none";
        isShow = false;
    } else{
        usersSection.style.display = "block";
        isShow = true;
    }
}

let currentShownDivId = null;

function showData(divId) {
 
  if (currentShownDivId !== null) {
    const previousDiv = document.getElementById(currentShownDivId);
    previousDiv.classList.add('p-des1');
    previousDiv.closest('.career-div-des').classList.remove('show');
  }

 
  const selectedDiv = document.getElementById(divId);
  selectedDiv.classList.remove('p-des1');

 
  const clickedButton = selectedDiv.closest('.career-div-des');
  clickedButton.classList.add('show');
}

function emails(){
document.getElementById("em").innerHTML = "Submitted";
document.getElementById('ema').disabled = true;
}