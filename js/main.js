const input = document.getElementById('Password');
const alerta = document.querySelector('.alert');
const check = document.querySelector('.check');
const passwordInput = document.querySelector('#Password');
const ckMostrar = document.querySelector('.ocultar');
const inputUsuario = document.getElementById('UserName');

// Función para autocompletar con "@gmail.com" cuando el usuario escriba
inputUsuario.addEventListener("blur", function () {
   const valorUsuario = inputUsuario.value.trim();

   if (valorUsuario !== '' && !valorUsuario.includes('@gmail.com')) {

      inputUsuario.value = valorUsuario + '@gmail.com';
   }
});

alerta.style.display = 'none';

input.addEventListener('input', function () {
   if (input.value.length > 0) {
      ckMostrar.style.display = 'block';
   } else {
      ckMostrar.style.display = 'none';
   }
   if (input.value == '') {
      alerta.style.display = 'none';

   }


});



ckMostrar.addEventListener('click', pass);
function pass() {
   if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      ckMostrar.classList.remove('fa-eye-slash');
      ckMostrar.classList.add('fa-eye');
   } else {
      passwordInput.type = 'password';
      ckMostrar.classList.remove('fa-eye');
      ckMostrar.classList.add('fa-eye-slash');


   }
}