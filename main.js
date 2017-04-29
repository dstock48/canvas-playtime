const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// draw head
c.beginPath();
c.fillStyle = '#ffc600';
c.fillRect(100, 200, 500, 500);

// draw eyes
c.fillStyle = '#000';
c.beginPath(); // left eye
c.arc(230, 320, 30, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
c.fill();
c.beginPath(); // right eye
c.arc(470, 320, 30, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
c.fill();

// draw mouth
c.beginPath();
c.arc(350, 470, 120, (Math.PI / 180) * 0, (Math.PI / 180) * 180, false);
c.lineWidth = 30;
c.lineCap = 'round';
c.strokeStyle = '#000';
c.stroke();

setInterval(makeBubble, 300);

function makeBubble() {
  const xpos = Math.random() * canvas.width;
  const ypos = Math.random() * canvas.height;
  const randNumRange = Math.floor(Math.random() * 30) + 30;
  const rad2deg = deg => deg * (Math.PI / 180);
  c.beginPath();
  c.arc(xpos, ypos, randNumRange, rad2deg(0), rad2deg(360), false);
  c.lineWidth = 4;
  c.strokeStyle = 'rgba(255,255,255,0.6)';
  c.stroke();
  c.fillStyle = 'rgba(255,255,255,0.4)';
  c.fill();
}
