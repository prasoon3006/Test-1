window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
 
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {
        //startAngle: 45,
       indexLabelFontSize: 20,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: false,
       dataPoints: [
       {  y: 53.37  },
       {  y: 20  },
       {  y: 10  },
       {  y: 7  },
       {  y: 9.63  },

       ]
     }
     ]
    });

    chart.render();
}

