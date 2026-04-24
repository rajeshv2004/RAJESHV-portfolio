// Typing Animation

let text = [
"Frontend Developer",
"Web Designer",
"UI Developer"
];

let i = 0;
let j = 0;

function typing(){

if(j < text[i].length){

document
.getElementById("typing")
.innerHTML +=
text[i].charAt(j);

j++;

setTimeout(typing,80);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(j > 0){

document
.getElementById("typing")
.innerHTML =
text[i].substring(0, j-1);

j--;

setTimeout(erase,40);

}

else{

i++;

if(i >= text.length){
i = 0;
}

setTimeout(typing,200);

}

}

typing();


// Scroll

function scrollToProjects(){

document
.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
});

}


// Contact Form

function sendMessage(event){

event.preventDefault();

alert("Message Sent Successfully ✅");

}


// Project

function openProject(){

window.open(
"https://github.com/yourusername",
"_blank"
);

}


// Skill Percentage Show

function showSkill(card, percent){

let bar =
card.querySelector(".progress-bar");

bar.style.width =
percent + "%";

}


// Open Certificate

function openCert(img){

let modal =
document.getElementById("certModal");

let modalImg =
document.getElementById("modalImg");

modal.style.display =
"block";

modalImg.src =
img.src;

}

// Close Certificate

function closeCert(){

document
.getElementById("certModal")
.style.display = "none";

}

function openCert(img){

let modal =
document.getElementById("certModal");

let modalImg =
document.getElementById("modalImg");

modal.style.display="block";

modalImg.src = img.src;

}

function closeCert(){

document
.getElementById("certModal")
.style.display="none";

}



const links =
document.querySelectorAll("#nav-links a");

links.forEach(link => {

link.addEventListener("click", () => {

document
.getElementById("nav-links")
.classList.remove("active");

});

});


function toggleMenu(){

document
.getElementById("nav-links")
.classList.toggle("active");

}