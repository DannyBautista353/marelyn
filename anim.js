
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [

  { text: "[Música]", time: 0.01 },
  { text: "baby Tú me encantas cantas yo no sé cómo", time: 17.19 },
  { text: "explicar Solo sé que me encantas", time: 21.19 },
  { text: "cant bes", time: 25.03 },
  { text: "como estamos bien lejos a m me hacen falta ya no puedo", time: 28.96 },
  { text: "[Música]", time: 43.98 },
  { text: "no solo", time: 47.64 },
  { text: "[Música]", time: 51.46 },
  { text: "quiero simple vista la nena parece", time: 53.52 },
  { text: "indiferent que tan frí como el hielo", time: 55.92 },
  { text: "pero después de un par de en calor tomel", time: 58.84 },
  { text: "tú me tienes uno a se de", time: 62.44 },
  { text: "pronto r el combo mami Tú er un", time: 66.20 },
  { text: "bombón tú me tienes onzo mami se de", time: 70.28 },
  { text: "pronto llamo bombón mam tú eres un", time: 74.84 },
  { text: "bombón baby Tú me encantas encantas yo", time: 79.00 },
  { text: "no sé cómo explicar Solo sé que me encantas", time: 83.40 },
  { text: "cantas cantas tu beso dulce", time: 85.60 },
  { text: "como fanta fanta para que bienos me ha falta No", time: 89.52 },
  { text: "puedo", time: 106.60 },
  { text: "Tom solo quiero", time: 110.52 },
  { text: "[Música]", time: 116.45 },
  { text: "Tom Oh", time: 118.84 },
  { text: "[Música]", time: 121.21 }



];
function updateLyrics() {
  var time = audio.currentTime; // Mantén el tiempo en formato decimal
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


// Animar las letras
/* function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
} */

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);