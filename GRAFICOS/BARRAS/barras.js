function grafico_barras(){
    const ctx2 = document.getElementById('barras');
    const xValues =[2011,2012.2013,2014,2015,2016,2017,2018,2019,2020,2021];
    const yValues =[48,47,44,447,446,467,57,56,0,49,590];
    const colores =['#1C398E','#53EAFD','#1C69A8','#21BCFF','#4F39F6','#AD46FF','#015F78','#2D9966','#90A1B9','#C81CDE','#FF692A' ];
    
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: xValues,
    datasets: [{
    label:'Valores por Año',
    data: yValues,
    backgroundColor: colores,
    borderColor:'#fff',
    borderWidth:1,
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
  }
});

}

grafico_barras();