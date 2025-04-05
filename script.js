// Seleciona todas as abas e o container do slider
const tabs = document.querySelectorAll('.tabs li');
const slider = document.querySelector('.slider');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove a classe 'active' de todas as abas
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Obtém o índice da aba clicada
    const index = parseInt(tab.getAttribute('data-index'));
    // Calcula a porcentagem para deslocar o slider
    const percentage = -(index * (100 / tabs.length));
    slider.style.transform = `translateX(${percentage}%)`;
  });
});
