function grafico_barras(){
    const ctx2 = document.getElementById('barras');
    const xValues =[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
    const yValues =[48.0,47.0,44.0,447.0,446.0,467.0,57.0,56.0,0.0,49.0,590.0];
    const colores =['#1C398E','#53EAFD','#1C69A8','#21BCFF','#4F39F6','#AD46FF','#015F78','#2D9966','#90A1B9','#C81CDE','#FF692A' ];
    
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: xValues,
    datasets: [{
    label:'Valores por Año',
    data: yValues,
    backgroundColor: colores,
    borderColor:'#f2f4faff',
    borderWidth:2,
    borderSkipped: false,
    categoryPercentage: 0.8
      
    }]
  },
  options: {
    responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        title: {
        display: true,
        text: 'Energia Hidraulica'
      }

  }
});

}

grafico_barras();