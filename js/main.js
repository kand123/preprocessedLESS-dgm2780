

function toggleMenu() {
    document.getElementById('navButton').classList.toggle("open");
    document.getElementById('primaryNav').classList.toggle("open");
    
}

var x = document.getElementById('navButton');
x.onclick=toggleMenu;


// let logoAnchor = document.querySelector('.centered');

window.addEventListener('load', (event) => {
gsap.to(".centered", {
duration: 3,
opacity: 1
})
});

let animatedsection = document.querySelector('.poolpic');

animatedsection.addEventListener('mouseover', (event) => {
gsap.to('.poolpic', {
y:50
})
})

animatedsection.addEventListener('mouseout', (event) => {
    gsap.to('.poolpic', {
    y:-50
    })
    })


let buttonEnlarge = document.querySelector('.buttonplay')

buttonEnlarge.addEventListener('mouseover', (event) => {
    gsap.to('.buttonplay', {
    scale:1.5
    })
})

buttonEnlarge.addEventListener('mouseout', (event) => {
    gsap.to('.buttonplay', {
    scale:1
    })
})

