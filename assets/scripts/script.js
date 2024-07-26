function displaySection(id) {
    sectionHome.style.display = "none";
    sectionHistoria.style.display = "none";
    sectionQuehacemos.style.display = "none";
    sectionNosotros.style.display = "none";
    //sectionPacientes.style.display = "none";
    sectionContacto.style.display = "none";

    id = id.split("-")[1];
    document.getElementById("section-" + id).style.display = "block";
    navMenu.className = "header-nav__ul";
    scroll(0,0);
}

function menuClick(ev) {
  ev.preventDefault();
  displaySection(ev.target.id);
}

let navMenu = document.getElementById("nav-menu");
function showMenu() {
  if (navMenu.className === "header-nav__ul") {
    navMenu.className += " responsive";
  } else {
    navMenu.className = "header-nav__ul";
  }
}
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target)) {
    navMenu.className = "header-nav__ul";
  }
});

let menuHome = document.getElementById("menu-home");
let menuHistoria = document.getElementById("menu-historia");
let menuQuehacemos = document.getElementById("menu-quehacemos")
let menuNosotros = document.getElementById("menu-nosotros");
//let menuPacientes = document.getElementById("menu-pacientes");
let menuContacto = document.getElementById("menu-contacto");
menuHome.addEventListener("click", menuClick);
menuHistoria.addEventListener("click", menuClick);
menuQuehacemos.addEventListener("click", menuClick);
menuNosotros.addEventListener("click", menuClick);
//menuPacientes.addEventListener("click", menuClick);
menuContacto.addEventListener("click", menuClick);

let footerHome = document.getElementById("footer-home");
let footerHistoria = document.getElementById("footer-historia");
let footerQuehacemos = document.getElementById("footer-quehacemos")
let footerNosotros = document.getElementById("footer-nosotros");
//let footerPacientes = document.getElementById("footer-pacientes");
let footerContacto = document.getElementById("footer-contacto");
footerHome.addEventListener("click", menuClick);
footerHistoria.addEventListener("click", menuClick);
footerQuehacemos.addEventListener("click", menuClick); 
footerNosotros.addEventListener("click", menuClick);
//footerPacientes.addEventListener("click", menuClick);
footerContacto.addEventListener("click", menuClick);

let sectionHome = document.getElementById("section-home");
let sectionHistoria = document.getElementById("section-historia");
let sectionQuehacemos = document.getElementById("section-quehacemos")
let sectionNosotros = document.getElementById("section-nosotros");
//let sectionPacientes = document.getElementById("section-pacientes");
let sectionContacto = document.getElementById("section-contacto");