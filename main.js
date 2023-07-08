let cursor = document.querySelector(".cursor");
let timeout;

// Cursor movement
document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';
  cursor.style.display = "block";

  //Stop animation
  function mouseStopped() {
    cursor.style.display = "none";
  }

 // Hide animation
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = 'none';
});
