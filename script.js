const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menu.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const note = document.getElementById("formNote");

  if (!name || !email || !message) {
    note.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  // Démo front-end : ouvre WhatsApp avec le message préparé.
  const text = `Bonjour Kitsa David, je suis ${name}.%0A%0A${message}%0A%0AMon email : ${email}`;
  const phone = "243982246407";
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  note.textContent = "Ouverture de WhatsApp…";
  this.reset();
});
