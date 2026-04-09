let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function() {
        // Desenhamos usando o raio para centralizar a imagem no mouse
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
    }
};

bola.img.src =" bola.webp"

function animacao() {
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bola.desenha();
    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    
    // Calcula a posição bruta do mouse
    let mouseX = evento.clientX - rect.left;
    let mouseY = evento.clientY - rect.top;

    // LÓGICA PARA NÃO SAIR DO CANVAS:
    // Restringe o X entre (0 + raio) e (largura - raio)
    if (mouseX < bola.raio) {
        bola.x = bola.raio;
    } else if (mouseX > canvas.width - bola.raio) {
        bola.x = canvas.width - bola.raio;
    } else {
        bola.x = mouseX;
    }

    // Restringe o Y entre (0 + raio) e (altura - raio)
    if (mouseY < bola.raio) {
        bola.y = bola.raio;
    } else if (mouseY > canvas.height - bola.raio) {
        bola.y = canvas.height - bola.raio;
    } else {
        bola.y = mouseY;
    }
});
