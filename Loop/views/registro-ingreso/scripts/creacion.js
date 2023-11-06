const mail = document.getElementById("usuario");
const password1 = document.getElementById("clave1");
const password2 = document.getElementById("clave2")

const objectValid = {
    cuenta: false,
    clave: false,
}


mail.addEventListener('change', (event) => {
    console.log(event.target.value);
    const emailRegrex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    objectValid.cuenta = event.target.value.match(emailRegrex) ? true : false;
    console.log(Object.values(objectValid));
})

password1.addEventListener('change', (event) => {
    console.log(event.target.value);
    const passRegrex = /^([a-zA-Z]{1,20})([0-9]{0,20})$/g;
    objectValid.clave = event.target.value.match(passRegrex) ? false : true;
    console.log(Object.values(objectValid));
})

    if (password1.value != password2.value){
        console.log("La contraseÃ±a es diferente");
    }
    else{
        console.log("La contraseÃ±a es corecta");
    }