import axios from 'axios';
export const RegisteFire = (dataToSave) =>{
  const Swal = require('sweetalert2')
    const {Correo, Contraseña, Apellido, Nombre, uid, accessToken, proveedor, fechaCreacion, Avatar } = dataToSave
    axios.post('https://reactfinal-5c36d-default-rtdb.firebaseio.com/Usuarios.json', {
        Correo,
        Contraseña,
        Apellido,
        Nombre,
        uid,
        accessToken,
        proveedor,
        fechaCreacion,
        Avatar
      })
      .then(function (response) {
        Swal.fire(
            'Felicidades!',
            'Se ha registrado con exito!',
            'success'
        )
      })
      .catch(function (error) {
        Swal.fire({
            icon: 'error',
            title: 'Revisar que los datonpm s sean correctos...',
            text: 'Intente otra vez!',
          })
    });
}   

