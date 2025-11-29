
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('pointsChart');
  
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        datasets: [{
          label: 'Points',
          data: [450, 380, 520, 290, 410],
          backgroundColor: [
            '#60A5FA',
            '#A78BFA',
            '#F472B6',
            '#FB923C',
            '#FDB022'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: '#F5F5F5'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
});
