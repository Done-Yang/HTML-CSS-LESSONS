const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['python', 'Javascript', 'HTML', 'CSS'],
        datasets: [{
            label: 'Tracffic Source',
            data: [10, 1, 8, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});