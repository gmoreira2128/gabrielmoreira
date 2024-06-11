const botao = document.getElementById('botao');
const sidebar = document.getElementById('sidebar');

botao.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
