function ActualizarHora() {
  // Declaración variables
  var canvas = document.getElementById("Reloj");
  var ctx = canvas.getContext("2d");
  var radio = (canvas.width - 20) / 2; // Ajuste del radio para evitar que se salga del límite

  // Dibujar los círculos
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(canvas.width / 2, canvas.height / 2, radio, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.arc(canvas.width / 2, canvas.height / 2, radio, 0, 2 * Math.PI);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(canvas.width / 2, canvas.height / 2, 15, 0, 2 * Math.PI);
  ctx.fill();

  ctx.font = radio / 10 + "px arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (var i = 1; i <= 12; i++) {
    ctx.fillText(
      i,
      canvas.width / 2 + radio * 0.9 * Math.sin((i * 2 * Math.PI) / 12),
      canvas.height / 2 - radio * 0.9 * Math.cos((i * 2 * Math.PI) / 12)
    );
  }

  // Manecillas del reloj
  var Horas = new Date().getHours();
  var Minutos = new Date().getMinutes();
  var Segundos = new Date().getSeconds();
  var horatotal = Horas % 12 + Minutos / 60 + Segundos / 3600;

  var anguloHoras = horatotal * 2 * Math.PI / 12;
  var anguloMinutos = Minutos * 2 * Math.PI / 60;
  var anguloSegundos = Segundos * 2 * Math.PI / 60;

  // Manecilla Horaria
  ctx.strokeStyle = "White";
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(
    canvas.width / 2 + radio * 0.4 * Math.sin(anguloHoras),
    canvas.height / 2 - radio * 0.6 * Math.cos(anguloHoras)
  );
  ctx.lineWidth = 10;
  ctx.stroke();

  // Manecilla Minutera
  ctx.strokeStyle = "White";
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(
    canvas.width / 2 + radio * 0.7 * Math.sin(anguloMinutos),
    canvas.height / 2 - radio * 0.6 * Math.cos(anguloMinutos)
  );
  ctx.lineWidth = 6;
  ctx.stroke();

  // Manecilla Segundera
  ctx.strokeStyle = "White";
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(
    canvas.width / 2 + radio * 0.8 * Math.sin(anguloSegundos),
    canvas.height / 2 - radio * 0.6 * Math.cos(anguloSegundos)
  );
  ctx.lineWidth = 3;
  ctx.stroke();
}

setInterval(ActualizarHora, 1000);