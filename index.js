//document.addEventListener('DOMContentLoaded', async () => {

alert("1");
//counter
let seconds = 0;
alert(2);
//to connect
const timerElement = document.getElementById('timer');
alert(3);
//timer, it moves every second (1000ms)
setInterval(() => {
  seconds++;
//update the number
  timerElement.innerText = seconds;
}, 1000);
//});

//I'm bad at describing ><
