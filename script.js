let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: 'bar', // other types of charts available: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Seattle", "Vancouver", "San Francisco", "Los Angeles"],
        datasets:[{
            label: "Population",
            data:[
            724745,
            2555884,
            884363,
            3999759
            
            ]
        }],
    },
    options:{}
}); 