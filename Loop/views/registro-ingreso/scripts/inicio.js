const user = document.getElementById("usuario");
const password = document.getElementById("clave");

const objectValid = {
    usuario: false, 
    codigo: false,
};

user.addEventListener('change', (event) => {
    console.log(event.target.value);
    const usuario1 = /^[-\w.%+]{0,64}@(?:[A-Z0-9-]{0,63}\.){0,125}[A-Z]{2,63}$/i;
    objectValid.usuario = event.target.value.match(usuario1) ? false : true; 
    console.log(Object.values(objectValid));
});

password.addEventListener('change', (event) => {
    console.log(event.target.value);
    const clave = /^([a-zA-Z]{1,5})([0-9]{0,5})$/g;
    objectValid.codigo = event.target.value.match(clave) ? false : true;
    console.log(Object.values(objectValid));
});