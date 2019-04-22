let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: 'bar', // other types of charts available: bar, horizontalBar, pie, line, doughnut, radar, polarArea
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
                '#6ba1ff',
                '#6ba1ff',
                '#ffa96b',
                '#fff36b',
                '#e46bff'
            ],
            borderwidth: 1,
            borderColor: 'purple',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'West Coast City Population',
            fontSize: 50,
        }
    }
});