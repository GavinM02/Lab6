// Add JavaScript below
const sr = ScrollReveal();

// Image 1
sr.reveal(".img1", {
  origin: "left",
  distance: "100px",
  duration: 1000,
  delay: 200
});

// Image 2
sr.reveal(".img2", {
  origin: "right",
  distance: "150px",
  duration: 1200,
  rotate: { x: 0, y: 90, z: 0 }
});

// Image 3
sr.reveal(".img3", {
  origin: "bottom",
  distance: "120px",
  duration: 900,
  scale: 0.8
});

// Image 4
sr.reveal(".img4", {
  origin: "top",
  distance: "200px",
  duration: 1300,
  delay: 300
});

// Image 5
sr.reveal(".img5", {
  opacity: 0,
  duration: 1500,
  easing: "ease-in-out",
  reset: true
});
