// Your code goes here


const funBus = document.querySelector('.intro img')
funBus.addEventListener('dblclick', () => {
    funBus.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
})

const whiteIntroH2 = document.querySelector(".intro h2")
whiteIntroH2.addEventListener('mouseover', () => {
    event.target.style.color = "white";
})


// function zoom(event) {
//     event.preventDefault();

//     scale += event.deltaY * -0.01;

//     scale = Math.min(Math.max(.25, scale) 4);

//     el.style.transform = `scale(${scale})`;
// }

// const el = document.querySelector(".content-destination img")
// el.onwheel = zoom;

// const dragged = document.querySelector(".content-destination img")
// dragged.addEventListener("drag", () => {
//     event.preventDefault();
// } )

// var dragged = document.querySelector('.content-destination img');

// dragged.document.addEventListener("drag", function(event){
//     event.target = 
// }, false);


var dragged;

document.addEventListener("drag", function(event){

}, false);

document.addEventListener("dragstart", function(event){
    dragged = event.target;
    event.target.style.opacity = .75;
}, false)

document.addEventListener("dragend", function(event){
    event.target.style.opacity = "";
}, false)

document.addEventListener("dragover", function(event){
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event){
    if (event.target.className == "footer") {
        event.target.style.background = "purple";
    }
}, false);

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "footer"){
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function(event){
    event.preventDefault();
    if (event.target.className === "footer") {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
}, false)



window.addEventListener('load', () => {
    console.log('page === loaded');
})




const form = document.querySelector('nav');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'orange';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);


const navSelect = document.querySelector('btn');

navSelect.addEventListener('select', (event) => {
    event.target.style.color = 'red';
})























// const resizeMapImg = document.getElementsByClassName('.img-content img')[1]
// window.addEventListenter('resize', () => {
//     resizeMapImg.src = "img/adventure.jpg"
// })


// const mapImg = document.querySelector(".img-content .img/adventure.jpg")

// mapImg.addEventListener("mouseenter", (event) => {
//     event.target.style.transform = "scale(1.2)";
//     event.target.style.transition = "all 0.3";
// })

// mapImg.addEventListener("mouseover", () => {
//     mapImg.style.transform = "scale(1)";
// })

// const txt = document.querySelectorAll('.destination')
// txt[0].addEventListener('select', (event) => {
//     event.target.style.color = 'blue';
// })