var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('GALERIE - LES PLATS')
    .pauseFor(2500)
    .deleteAll()
    .start();
