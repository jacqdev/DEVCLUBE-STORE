const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');


let active = 0;
const total = items.length;
let timer;

function update(direction) {
    // Remover classe ativa dos elementos atuais
    document.querySelector('.item.active')?.classList.remove('active');
    document.querySelector('.dot.active')?.classList.remove('active');

    // Atualizar índice ativo
    if (direction > 0) {
        active = active +1
        if (active >= total) {
            active = 0;
        }
    } else if (direction < 0) { // Tratando decremento corretamente
        active--;
        if (active < 0) {
            active = total - 1;
        }
    }

    // Adicionar classe ativa ao novo elemento
    items[active].classList.add('active');
    dots[active].classList.add('active');
      
    numberIndicator.textContent = String(active + 1).padStart(2, '0');


}
clearInterval(timer)
timer = setInterval(() => {
      update(1)
  },5000);

// Adicionando eventos aos botões
prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});