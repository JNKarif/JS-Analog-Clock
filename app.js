/*Hour calcultion: 12 hour = 360degree
1 hour = 360/12 = 30 degree
h hours = 30h + m/2

 1hour = 60 min = 30 degree
 1 min = 30/60 = 1/2
 m mins = (1/2)m = m/2

*/

/* Minute Calculation: 60min = 360 degree
1 minute = 360/60 = 6degree
m minutes = 6m
*/

/* Second Calculation:60 second = 360 degree
1 second = 360/60 = 6 degree
s second = 6s 

https://youtube.com/watch?v=4ul3q-cEhvU&t=942s
 */

function displayTime() {
  let hr = document.getElementById("hour");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  let date = new Date();

  //  Get hour, minutes, second from Date()
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let hourRotation = 30 * h + m / 2; /*from the calculation above */
  let minutesRotation = 6 * m;
  let secondRotation = 6 * s;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minutesRotation}deg)`;
  sec.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(displayTime, 1000);
