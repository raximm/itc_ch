
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('pointsChart');
  
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12'],
        datasets: [{
          label: 'ITC Referral',
          data: [150, 180, 220, 240, 200, 190, 250, 280, 320, 250, 270, 300],
          borderColor: '#FDB022',
          backgroundColor: 'rgba(253, 176, 34, 0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#FDB022',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              boxWidth: 0,
              color: '#6B7280',
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#111827',
            bodyColor: '#6B7280',
            borderColor: '#E5E5E5',
            borderWidth: 1,
            padding: 12,
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: '#F5F5F5',
              drawBorder: false
            },
            ticks: {
              color: '#6B7280',
              font: {
                size: 11
              }
            }
          },
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              color: '#6B7280',
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  }
});
