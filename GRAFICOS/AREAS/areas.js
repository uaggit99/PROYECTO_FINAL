function grafico_areas() {
  const ctx = document.getElementById("areas");
  const labelst = ["Biomass", "Aeolica", "Hidrica"];
  const titulos = year();

  const valores_Biomass = [
    138.0, 147.0, 134.0, 17.0, 182.0, 199.0, 199.0, 211.0, 244.0, 28.0, 282.0,
  ];
  const valores_solar = [
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.13, 0.02, 0.02, 317.0,
  ];

  const valores_aeolica = [
    4127.0, 548.0, 5762.0, 70.0, 583.0, 5088.0, 307.0, 0.6, 0.4, 0.1, 5985.0,
  ];
  const valores_hidrica = [
    484.0, 475.0, 443.0, 4474.0, 4468.0, 4678.0, 573.0, 566.0, 5.0, 498.0,
    5985.0,
  ];

  const colorBiomass = "#8056b1ff";
  const colorSolar = "#FFDF20";
  const colorAeolica = "#3da8b6ff";
  const colorHidrica = "#5078b8ff";

  const borderBiomass = "#6b4497ff";
  const borderSolar = "#FFDF20";
  const borderAeolica = "#25909eff";
  const borderHidrica = "#416bafff";

  const grafico = new Chart(ctx, {
    type: "line",
    data: {
      labels: titulos,
      datasets: [
        {
          label: labelst[0],
          data: valores_Biomass,
          backgroundColor: colorBiomass,
          borderColor: borderBiomass,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
        
        {
          label: labelst[1],
          data: valores_solar,
          backgroundColor: colorSolar,
          borderColor: borderSolar,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
        {
          label: labelst[2],
          data: valores_aeolica,
          backgroundColor: colorAeolica,
          borderColor: borderAeolica,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
        {
          label: labelst[3],
          data: valores_hidrica,
          backgroundColor: colorHidrica,
          borderColor: borderHidrica,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          stacked: true,
        },
      },
    },
  });
}

grafico_areas();

function year() {
  arreglo = [];
  for (let i = 2011; i <= 2021; i++) {
    arreglo.push(i);
  }
  return arreglo;
}
