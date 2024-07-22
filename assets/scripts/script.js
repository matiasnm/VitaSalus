function displaySection(id) {
    sectionHome.style.display = "none";
    sectionHistoria.style.display = "none";
    sectionQuehacemos.style.display = "none";
    sectionNosotros.style.display = "none";
    sectionPacientes.style.display = "none";
    id = id.split("-")[1];
    document.getElementById("section-" + id).style.display = "block";
}

function menuClick(ev) {
  ev.preventDefault();
  displaySection(ev.target.id);
}

let menuHome = document.getElementById("menu-home");
let menuHistoria = document.getElementById("menu-historia");
let menuQuehacemos = document.getElementById("menu-quehacemos")
let menuNosotros = document.getElementById("menu-nosotros");
let menuPacientes = document.getElementById("menu-pacientes");
let sectionHome = document.getElementById("section-home");
let sectionHistoria = document.getElementById("section-historia");
let sectionQuehacemos = document.getElementById("section-quehacemos")
let sectionNosotros = document.getElementById("section-nosotros");
let sectionPacientes = document.getElementById("section-pacientes");
menuHome.addEventListener("click", menuClick);
menuHistoria.addEventListener("click", menuClick);
menuQuehacemos.addEventListener("click", menuClick);
menuNosotros.addEventListener("click", menuClick);
menuPacientes.addEventListener("click", menuClick);