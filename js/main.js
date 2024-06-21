/* Change Language */

let languageBtn = document.querySelector('.language');
let opciones = document.querySelector('.options');
let iconoDrop = document.querySelector('.icono-drop');

    languageBtn.addEventListener('click', ()=> {
        opciones.classList.toggle('open');
        iconoDrop.classList.toggle('active');
    })



/* NAVEGACION */

let btnMenu = document.querySelector('.menu_bar'),
    nav = document.querySelector('.navigation'),
    closeBar = document.querySelector('.close-bar');

    btnMenu.addEventListener('click', ()=> {
        nav.classList.add('open');
    })

    closeBar.addEventListener('click', ()=> {
        nav.classList.remove('open');
    })


let btnNav = document.querySelectorAll(".link");
console.log(btnNav);

btnNav.forEach((CadabtnNav, i) => {
  btnNav[i].addEventListener("click", () => {
    btnNav.forEach((CadabtnNav, i) => {
      btnNav[i].classList.remove("selected");
    });
    btnNav[i].classList.add("selected");
  });
});


/* video */

new VenoBox({
    selector: '.video-presentation',
    maxwidth: "80%"
});