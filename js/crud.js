const firebaseConfig = {
   databaseURL: "https://login-f8995-default-rtdb.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const tableData = document.querySelector("tbody");
const btnEnviar = document.querySelector(".btn-save");
btnEnviar.addEventListener("click", sendData);

function sendData() {
   var correo = document.querySelector("#txtCorreo");
   var contra = document.querySelector("#txtPass");
   var des = document.querySelector("#txtDes");
   var listRef = database.ref("cuentas/");
   // para generar un unico id
   var newRef = listRef.push();
   if (correo.value == "" && contra.value == "" && des.value == "") {
      Swal.fire(
         'Error',
         'Hay Campos vacios',
         'error'
      );
      return;
   }

   newRef.set({
      'Correo': correo.value,
      'Contrasena': contra.value,
      'Descripcion': des.value
   });
   correo.value == "";
   contra.value == "";
   des.value == "";
   Swal.fire(
      'Guardado',
      'Registro Guardado',
      'success'
   );

}
// cargar los datos
window.addEventListener("DOMContentLoaded", function () {
   var fetchData = database.ref('cuentas/');
   fetchData.on('value', (snapshot) => {
      var data = snapshot.val();
      var htmlData = '';


      for (var key in data) {
         var value = data[key];


         htmlData += `
         <tr>
             <td>${key}</td>
             <td>${value.Correo}</td>
             <td>${value.Contrasena}</td>
             <td>${value.Descripcion}</td>
   
      <td>
         <button onclick="actualizar('${key}', this)" class="btn-edit"><span class="fa fa-edit" style="padding-right: 5px;"></span>Editar</button>
         <button class="btn-delete" onclick="remover('${key}')"><span class="fa fa-trash"
               style="padding-right: 5px;"></span>Eliminar</button>
      </td>`;

      }
      tableData.innerHTML = htmlData;
   });
});

//actualizar
function actualizar(uniqueId, elem) {
   console.log(uniqueId);
   var siblingTd = elem.parentElement.parentElement.getElementsByTagName('td');
   // convert first three td to editable
   for (var i = 0; i < siblingTd.length - 1; i++) {
      siblingTd[i].contentEditable = true;
      siblingTd[i].classList.add('temp-update-class');
   }
   // also change onclick function
   elem.setAttribute('onclick', `updateNow('${uniqueId}')`);
   elem.innerHTML = 'Enviar';
}
function updateNow(uniqueId) {
   var contentId = document.querySelectorAll('.temp-update-class');
   // now create obj using same keys as used during sending
   var obj = {
      'Id': contentId[0].textContent,
      'Correo': contentId[1].textContent,
      'Contrasena': contentId[2].textContent,
      'Descripcion': contentId[3].textContent
   };
   // create reference to the data first where data will update
   // uniqueId will be the id of each message in db
   var listRef = database.ref('cuentas/' + uniqueId);
   // now provide updated data
   listRef.update(obj);
   // after update new data will rerender automatically
   // same as during delete
}

//eliminar

function remover(uniqueId) {
   Swal.fire({
      title: 'Estas seguro de eliminar este registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
   }).then((result) => {
      if (result.isConfirmed) {
         database.ref('cuentas/' + uniqueId).remove();
         Swal.fire(
            'Eliminado!',
            'El archivo ha sido eliminado.',
            'success'
         );
      }
   });

}