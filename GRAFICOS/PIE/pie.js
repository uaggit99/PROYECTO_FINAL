function grafico_pie() {
  const ctx = document.getElementById("pie");
  const titulos = ["Biomass", "Solar", "Aeolica", "Hidrica"];
  const valores = [178.0, 32.0, 225.0, 226.0];
  const colores = ["#704f96ff", "#FFDF20", "#5fa0a8ff", "#2B7FFF"];
  const border = "#E2E8F0";

  const grafico = new Chart(ctx, {
    type: "pie",
    data: {
      labels: titulos,
      datasets: [
        {
          label: "Valores",
          data: valores,
          backgroundColor: colores,
          borderColor: border,
        },
      ],
    },
    options: {
      responsive: "true",
      maintoinAspectRatio: "false",
     
    },
     
  });
}

grafico_pie();
