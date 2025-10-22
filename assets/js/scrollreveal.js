const sr = ScrollReveal({ reset: true });

sr.reveal(".about .img-about", {
  origin: "left",
  distance: "100px",
  duration: 1500,
  scale: 1.3,
});

sr.reveal(".about .text-about", {
  origin: "right",
  distance: "50px",
  duration: 1500,
  scale: 1.3,
});

sr.reveal("form", {
  origin: "left",
  distance: "100px",
  duration: 1300,
  opacity: 0.1,
});

sr.reveal(".social-media", {
  origin: "right",
  distance: "100px",
  duration: 1300,
  opacity: 0.1,
});
