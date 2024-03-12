function registrarse() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = parseInt(document.getElementById("edad").value);
    let direccion = document.getElementById("direccion").value;
    let contrasenia = document.getElementById("contrasenia").value;

    document.getElementById('nombreBienvenida').innerText = nombre + ' ' + apellido;
    if (nombre && apellido && !isNaN(edad) && edad >= 18 && direccion && contrasenia) {
        document.getElementById('seccionCombo').style.display = 'block';
    } else if (edad < 18) {
        alert("Tienes que ser mayor de 18 años para registrarte.");
    } else {
        alert("Todos los campos son obligatorios.");
    }
}

function mostrarPrecio() {
    let precioCombo = parseInt(document.getElementById("combos").value, 10);
    let cantCombos = parseInt(document.getElementById("cantCombos").value, 10);
    let costoTotalSinIva = precioCombo * cantCombos; 
    let IVA = costoTotalSinIva * 0.21; // 21% de IVA
    let costoTotalConIVA = costoTotalSinIva + IVA;

    document.getElementById("costoTotalSinIVA").innerHTML = "Total sin IVA: " + (costoTotalSinIva / 100).toLocaleString("es-CO", {style: "currency", currency: "COP"});
    document.getElementById("costoIVA").innerHTML = "IVA (21%): " + (IVA / 100).toLocaleString("es-CO", {style: "currency", currency: "COP"});
    document.getElementById("costoTotalConIVA").innerHTML = "Total (IVA incluido): " + (costoTotalConIVA / 100).toLocaleString("es-CO", {style: "currency", currency: "COP"});
}


function comprarCombo() {
    alert("Compra realizada con éxito. Estas por ser redirigido a los demas productos disponibles.");
    window.location.href= '/Pages/carrito.html';
}
