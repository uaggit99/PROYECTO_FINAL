

async function cargarCSV() {
  const respuesta = await fetch(
    "../DATA/02_modern-renewable-energy-consumption.csv"
  );

  const texto = await respuesta.text();
  const lineas = texto.trim().split("\n");
  const encabezados = lineas[0].split(",");
  const datos = lineas.slice(1);

  const body_table = document.querySelector("#tablaEnergy tbody");

  datos.forEach((linea) => {
    const columnas = linea.split(",");

    if (columnas.length === encabezados.length) {
      const fila = document.createElement("tr");

      columnas.forEach((dato,i) => {

        const celda = document.createElement("td");
        celda.style.textAlign="center";
        if(i===4){
          celda.style.backgroundColor="#FFFF99"
        }
        if(i===5){
          celda.style.backgroundColor="#b9f1f7ff"
        }
        if(i===6){
          celda.style.backgroundColor="#8fbce9ff"
        }

        celda.textContent = dato.trim();
        fila.appendChild(celda);
      });
      body_table.appendChild(fila);
    }
  });
}
cargarCSV();

async function cargarCSVColombia() {
  const respuesta = await fetch(
    "../DATA/02_modern-renewable-energy-consumption.csv"
  );

  const texto = await respuesta.text();
  const lineas = texto.trim().split("\n");
  const encabezados = lineas[0].split(",");
  const datos = lineas.slice(1038,1094);

  const body_table = document.querySelector("#tablaEnergy2 tbody");

  datos.forEach((linea) => {
    const columnas = linea.split(",");

    if (columnas.length === encabezados.length) {
      const fila = document.createElement("tr");

      columnas.forEach((dato,i) => {

        const celda = document.createElement("td");
        celda.style.textAlign="center";
        if(i===4){
          celda.style.backgroundColor="#FFFF99"
        }
        if(i===5){
          celda.style.backgroundColor="#b9f1f7ff"
        }
        if(i===6){
          celda.style.backgroundColor="#8fbce9ff"
        }

        celda.textContent = dato.trim();
        fila.appendChild(celda);
      });
      body_table.appendChild(fila);
    }
  });
}
cargarCSVColombia();
