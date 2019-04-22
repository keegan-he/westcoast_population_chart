let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: 'bar', // other types of charts available: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Seattle", "Portland", "Fresno", "Sacramento", "Longbeach", "Oakland"],
        datasets: [{
            label: "City Population",
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
            backgroundColor: '#990066',


            borderwidth: 1,
            borderColor: 'purple',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
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
            text: 'West Coast City Population',
            fontSize: 50,
        }
    }
});