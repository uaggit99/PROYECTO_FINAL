async function totales() {
  const respuesta = await fetch("../DATA/02_modern-renewable-energy-consumption.csv");

  const texto = await respuesta.text();
  const lineas = texto.trim().split("\n");
  const encabezados = lineas[0].split(",");
  const datos = lineas.slice(1);

  const total_biomass = 0;
  const total_solar = 0;
  const total_aeolica = 0;
  const total_hidrica = 0;
  const total1= document.getElementById("totalbiomass");

  datos.forEach((linea) => {
    const columnas = linea.split(",");
    if (columnas.length === encabezados.length) {
        columnas.forEach((dato,i)=>{
            if(i===3){
              const valor1=parseFloat(columnas[3]);
              total_biomass+=valor1;
            }
            if(i===4){
                total_solar+=parseFloat(dato);
            }
            if(i===5){
                total_aeolica+=parseFloat(dato);
            }
            if(i===6){
                total_hidrica+=parseFloat(dato);
            }

        })
     

    }
  });
  total1.textContent=`total de Biomass ${total_biomass}`;
  
}
totales();



