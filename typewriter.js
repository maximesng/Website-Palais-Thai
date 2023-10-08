var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BIENVENUE AU PALAIS THAï ')
    .pauseFor(2500)
    .deleteAll()
    .start();
