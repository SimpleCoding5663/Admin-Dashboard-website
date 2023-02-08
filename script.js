const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Sales',
        data: [27, 20, 18, 9, 12, 4, 10],
        backgroundColor: [
          '#11998e',
          'rgba(54, 162, 235, 0.2)',
          '#9cf0e8',
          'rgba(255, 26, 104, 0.2)',
          '#94f2b0',
          '#38ef7d',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          '#11998e',
          'rgba(54, 162, 235, 1)',
          '#9cf0e8',
          'rgba(255, 26, 104, 0.1)',
          '#94f2b0',
          '#38ef7d',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    // config 
    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
	
	//donut chart
	const dataDoughnut = {
      labels: ['Manwear', 'Womenwear', 'others'],
      datasets: [{
        label: 'Top selling products',
        data: [45, 35, 20],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          '#38ef7d',
          '#11998e'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          '#38ef7d',
          '#11998e'
        ],
        borderWidth: 1
      }]
    };

    // config 
    const configDoughnut = {
      type: 'doughnut',
      data:dataDoughnut,
      options: { 
      }
    };

    // render init block
    const myChartDoughnut = new Chart(
      document.getElementById('myChartDoughnut'),
      configDoughnut
    );
