// Generar número secreto entre 1 y 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

// Conectar el botón
document.getElementById("btnComprobar").addEventListener("click", comprobar);

function comprobar() {
    // Tomar el valor del input
    let valorUsuario = document.getElementById("numeroUsuario").value;
    let usuario = parseInt(valorUsuario);
    let cajaResultado = document.getElementById("resultado");

    // Comprobar si escribió algo
    if (isNaN(usuario)) {
        cajaResultado.innerHTML = "⚠️ Escribe un número";
        cajaResultado.style.color = "orange";
        return;
    }

    // Lógica del juego
    if (usuario < numeroSecreto) {
        cajaResultado.innerHTML = "📉 Cantidad menor";
        cajaResultado.style.color = "blue";
    } 
    else if (usuario > numeroSecreto) {
        cajaResultado.innerHTML = "📈 Cantidad mayor";
        cajaResultado.style.color = "red";
    } 
    else {
        cajaResultado.innerHTML = "✅ ACERTASTE el número";
        cajaResultado.style.color = "green";
    }
}
