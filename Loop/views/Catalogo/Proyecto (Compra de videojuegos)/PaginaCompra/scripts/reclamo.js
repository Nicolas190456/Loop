const claim = document.getElementById("reclamo2");

const objectValid = {
    queja: true
}
claim.addEventListener("change", (event) => {
    console.log(event.target);
    const limit = /^([a-zA-ZÀ-Ö0-9]{2,200})$/;
    let valorReclamo = event.target.value;
    objectValid.queja = valorReclamo.match(limit) ? true : false;
    console.log (Object.values(objectValid));
    alert("Se envio su queja");
});