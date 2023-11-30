  // Получаем коллекцию кнопок и элементов для переключения
const toggleButtons = document.querySelectorAll('.toggleButton');
const elementsToToggle = document.querySelectorAll('.vechiles > .elementToToggle');

  // Добавляем обработчик события для каждой кнопки
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Получаем идентификатор целевого элемента из атрибута data-target
        const targetElementId = button.getAttribute('data-target');
        // Скрываем все элементы, кроме целевого
        elementsToToggle.forEach((element) => {
            if (element.id === targetElementId) {
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        });
    });
});

function scrollToSection(sectionId) {
  let targetSection = document.getElementById(sectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });
}
