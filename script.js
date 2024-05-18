var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Programadora frontend junior')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Estudiante de Ing. en Logistica Internacional')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>micremprendedora en productos de importación</strong>')
    .pauseFor(1500)
    .start();