function grafico_lineas(){
    const ctx = document.getElementById("lineas");
    const labelst = ["Biomass", "Solar", "Aeolica", "Hidrica"];
    const titulos=year();
    const valores_Biomass=[138.0,147.0,134.0,17.0,182.0,199.0,199.0,211.0,244.0,28.0,282.0];
    const valores_solar=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.13,0.02,0.02,317.0];
    const valores_aeolica=[4127.0, 548.0,5762.0,70.0,583.0, 5088.0,307.0,0.6,0.4,0.1,5985.0];
    const valores_hidrica=[484.0,475.0,443.0,4474.0,4468.0,4678.0, 573.0,566.0,5.0,498.0,5985.0];

    const colorBiomass='#5d2c94ff';
    const colorSolar='#FFDF20';
    const colorAeolica='#16545cff'
    const colorHidrica='#16325eff'

    const borderBiomass='#5d2c94ff';
    const borderSolar='#FFDF20';
    const borderAeolica='#0b7454ff'
    const borderHidrica='#1f57aaff'
    
    const grafico = new Chart(ctx,{
        type:'line',
        data:{
            labels: titulos,
            datasets:[{
                label:labelst[0],
                data:valores_Biomass,
                 backgroundColor: colorBiomass,
                 borderColor:borderBiomass,
                 borderWidth:1.5,
                 fill: false

            },
            {
                label:labelst[1],
                data:valores_solar,
                 backgroundColor: colorSolar,
                 borderColor:borderSolar,
                 borderWidth:1.5,
                 fill: false

            },
            {
                label:labelst[2],
                data:valores_aeolica,
                 backgroundColor: colorAeolica,
                 borderColor:borderAeolica,
                 borderWidth:1.5,
                 fill: false

            },
            {
                label:labelst[3],
                data:valores_hidrica,
                 backgroundColor: colorHidrica,
                 borderColor:borderHidrica,
                 borderWidth:1.5,
                 fill: false

            }
        ]
        },
        options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
        

    });

}

grafico_lineas();


function year(){
    arreglo=[];
    for(let i=2011;i<=2021;i++){
        arreglo.push(i);
    }
    return arreglo;
}