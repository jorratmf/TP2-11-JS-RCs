function obtenerMayor() {
    let edades = document.getElementsByClassName("edad");
    let nombres = document.getElementsByClassName("nombre");
  
    let mayor = 0;
    let nombreMayor = "";
  
    for (let i = 0; i < edades.length; i++) {
      let edad = parseInt(edades[i].value);
      let nombre = nombres[i].value;
  
      if (isNaN(edad)) {
        alert("Ingresa un número válido");
        return;
      }
  
      if (edad > mayor) {
        mayor = edad;
        nombreMayor = nombre;
      }
    }
  
    document.getElementById("resultado").innerHTML = `El mayor es ${nombreMayor}`;
  }
  