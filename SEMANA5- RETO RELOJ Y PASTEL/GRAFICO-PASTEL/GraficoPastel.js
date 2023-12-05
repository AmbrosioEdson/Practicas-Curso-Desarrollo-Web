
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de lienzo (canvas) y su contexto
    const canvas = document.getElementById("grafico-pastel");
    const contexto = canvas.getContext("2d");

    // Datos del gráfico de pastel (porcentajes)
    const datos = [10, 20, 30, 40]; // Porcentajes
    const colores = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"]; // Colores

    // Calcular el centro y radio del gráfico
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const radio = Math.min(centroX, centroY);

    let anguloInicio = 0;
    let anguloFin = 0;

    // Dibujar los sectores de lso gráficos
    for (let i = 0; i < datos.length; i++) {
        anguloFin += (Math.PI * 2) * (datos[i] / 100);

        const anguloMedio = anguloInicio + (anguloFin - anguloInicio) / 2;
        const x = centroX + Math.cos(anguloMedio) * (radio / 1.5); // Ajusta la posición X
        const y = centroY + Math.sin(anguloMedio) * (radio / 1.5); // Ajusta la posición Y

        // Dibujar el sector del gráfico
        contexto.beginPath();
        contexto.moveTo(centroX, centroY);
        contexto.arc(centroX, centroY, radio, anguloInicio, anguloFin, false);
        contexto.closePath();

        contexto.fillStyle = colores[i];
        contexto.fill();

        // Mostrar porcentaje en el centro del sector
        contexto.fillStyle = "#000"; // Color del texto
        contexto.font = "bold 12px Arial";
        contexto.textAlign = "center";
        contexto.textBaseline = "middle";
        contexto.fillText(datos[i] + "%", x, y);

        // Actualizar el ángulo de inicio el sector que sigue
        anguloInicio = anguloFin;
    }

});
