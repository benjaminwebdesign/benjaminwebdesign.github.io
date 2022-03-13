// Curseur 

const cursor = document.querySelector("#curseur"),
    anchor = document.querySelectorAll("a"); 

window.addEventListener("mousemove", (e) => {
    let x = e.pageX
    y = e.pageY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

anchor.forEach((anc) => {
    anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.animationName ="borderAnim";
    });
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
        cursor.style.animationName ="";
    });
});

// Reveal

const sr = ScrollReveal();

sr.reveal('img', {
    duration: 500,
    scale: 0.5,
    reset: true
});

sr.reveal('.items1', {
    duration: 900,
    scale: 0.5,
    reset: true
});

sr.reveal('.items2', {
    duration: 1300,
    scale: 0.5,
    reset: true
});

sr.reveal('.items3', {
    duration: 1700,
    scale: 0.5,
    reset: true
});

sr.reveal('.items4', {
    duration: 2100,
    scale: 0.5,
    reset: true
});

sr.reveal('.me3', {
    duration: 13000,
    scale: 0.5,
    reset: true
});

// Textes

const txtAnim = document.querySelector('.me1')

new Typewriter(txtAnim , {
    // deleteSpeed: 20
})
.typeString('Enchanté,')
.pauseFor(300)
.typeString(' moi c\'est')
.pauseFor(300)
.deleteChars(10)
.typeString(' je suis')
.start()

const txtAnim2 = document.querySelector('.me2')

new Typewriter(txtAnim2 , {
    loop: true
    // deleteSpeed: 20
})
.pauseFor(3100)
.typeString('BENJAMIN LUBINEAU')
.pauseFor(4000)
.deleteChars(17)
.typeString('<span style="color: #7d7c79"> BENJAMIN')
.pauseFor(5000)
.deleteChars(8)
.typeString('<span style="color: #fff"> BENJAMIN')
.pauseFor(4000)
.start()

// Bouton

const btnToggle = document.querySelector('.boutonmode');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('light')){
        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Day"

    } else if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Night"
    }

})




