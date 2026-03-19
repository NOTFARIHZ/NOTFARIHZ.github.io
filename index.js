//document.addEventListener('DOMContentLoaded', async () => {


//counter
window.seconds = 0;
//to connect
const timerElement = document.getElementById('timer');
//timer, it moves every second (1000ms)
setInterval(() => {
  seconds++;
//update the number
  timerElement.innerText = seconds;
}, 1000);
//});

//I'm bad at describing ><
