

let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: 'horizontalBar', // other types of charts available: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Seattle", "Portland", "Fresno", "Sacramento", "Longbeach", "Oakland"],
        datasets: [{
            label: "Population",
            data: [
                3999759,
                1419516,
                1035317,
                884363,
                724745,
                647805,
                527438,
                501901,
                469450,
                425195

            ],
            backgroundColor: [                
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgb(236,255,218)',
            'rgb(255,218,236)',
            'rgb(218,255,237)',
            'rgb(255,237,218)'
        ],


            borderwidth: 1,
            borderColor: 'grey',
            hoverBorderWidth: 2,
            hoverBorderColor: 'grey',
            hoverBorderColor: 'aquahazel'
        }],
    },
    
    options: {
        plugins: {
            colorschemes: {
                scheme: 'office.BlueRed6',
            }
        },
        title: {
            display: true,
            text: 'West Coast Cities',
            fontSize: 60,
        }
    }
});