document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('graficoPizza').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'],
      datasets: [{
        label: 'Valor Final (R$)',
        data: [1300, 1000, 500, 150],
        backgroundColor: [
          '#4bc0c0', // Passagem de avião
          '#36a2eb', // Hospedagem
          '#ffce56', // Alimentação
          '#ff6384'  // Transporte
        ],
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Distribuição de Gastos da Viagem',
          font: {
            size: 16
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let value = context.raw;
              return `${context.label}: R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            }
          }
        }
      }
    }
  });
});
