let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: 'bar', // other types of charts available: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Seattle", "Portland", "Vancouver", "San Francisco", "Los Angeles"],
        datasets:[{
            label: "Population",
            data:[
            724745,
            647805,
            2555884,
            884363,
            3999759
            ],
            backgroundColor: [
                '#6ba1ff',
                '#6ba1ff',
                '#ffa96b',
                '#fff36b',
                '#e46bff'

            ]
        }],
    },
    options:{}
}); 