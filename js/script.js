// JavaScript para mostrar y ocultar el menú desplegable al hacer clic en el botón de perfil
var perfilBtn = document.querySelector('.perfil');
var perfilMenu = document.querySelector('.perfil-menu');
var info = document.querySelector(".infor");
perfilBtn.addEventListener('click', function () {
   if (perfilMenu.style.display === 'block') {
      perfilMenu.style.display = 'none';
   } else {
      perfilMenu.style.display = 'block';
   }
});

// JavaScript para ocultar el menú desplegable cuando se haga clic en cualquier parte fuera de él
document.addEventListener('click', function (event) {
   if (!perfilBtn.contains(event.target) && !perfilMenu.contains(event.target)) {
      perfilMenu.style.display = 'none';
   }
});
// para los dropdown
$('.sub-btn').click(function () {
   $(this).next('.sub-menu').slideToggle();
   $(this).find('.dropdown').toggleClass('rotate');
});

// sidebar
var btnSide = document.querySelector(".btn");
$('.btn').click(function () {
   $('.sidebar').toggleClass('active');
});
//cualquier parte de la pagina
$(document).on('click', function (event) {
   if (!$(event.target).closest('.sidebar').length && !$(event.target).closest('.btn').length) {
      $('.sidebar').removeClass('active');
   }
});
// JavaScript para ocultar el sidebar y ajustar el margen izquierdo del main al hacer clic en el botón de menú en el sidebar
var sidebar = document.querySelector('.sidebar');
var mainContent = document.querySelector('main');

function toggleSidebar() {
   sidebar.classList.toggle('sidebar-oculto');
   mainContent.classList.toggle('sidebar-oculto');
}

// Agregar evento de clic al botón de menú en el sidebar
document.querySelector('.perfil').addEventListener('click', toggleSidebar);


$("#home").click(function () {
   window.location.reload();
});
