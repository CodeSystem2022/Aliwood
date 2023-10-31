const productBtn2 = document.getElementById("product-btn2");
const idCocina1 = document.getElementById("idCocina1");
const idCocina2 = document.getElementById("idCocina2");

const productBtn3 = document.getElementById("product-btn3");
const idBaño1 = document.getElementById("idBaño1");
const idBaño2 = document.getElementById("idBaño2");

const productBtn4 = document.getElementById("product-btn4");
const idLiving1 = document.getElementById("idLiving1");
const idLiving2 = document.getElementById("idLiving2");

productBtn2.addEventListener("click", function () {
    idCocina1.classList.remove("ocultar")
    idCocina2.classList.remove("ocultar");
    idBaño1.classList.add("ocultar");
    idBaño2.classList.add("ocultar");
    idLiving1.classList.add("ocultar");
    idLiving2.classList.add("ocultar");
});

productBtn3.addEventListener("click", function () {
    idCocina1.classList.add("ocultar")
    idCocina2.classList.add("ocultar");
    idBaño1.classList.remove("ocultar");
    idBaño2.classList.remove("ocultar");
    idLiving1.classList.add("ocultar");
    idLiving2.classList.add("ocultar");
});

productBtn4.addEventListener("click", function () {
    idCocina1.classList.add("ocultar")
    idCocina2.classList.add("ocultar");
    idBaño1.classList.add("ocultar");
    idBaño2.classList.add("ocultar");
    idLiving1.classList.remove("ocultar");
    idLiving2.classList.remove("ocultar");
});
