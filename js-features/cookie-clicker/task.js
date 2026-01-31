const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('speed');
 
let lastTime = Date.now();
 
cookie.onclick = () => {
 cookie.width = ++counter.textContent % 2 ? 230 : 200;
 const curTime = Date.now();
 speed.textContent = (1 / ((curTime - lastTime) / 1000)).toFixed(2);
 lastTime = curTime;
}