const photoCells = document.querySelectorAll('.photo-cell');

// Функция для загрузки изображения с анимацией
const loadImageWithDelay = (cell, delay) => {
    const loader = cell.querySelector('.loading-animation');
    const image = cell.querySelector('.delayed-image');

    // Запускаем задержку
    setTimeout(() => {
        loader.style.visibility = 'visible'; // Показываем индикатор загрузки

        // Когда изображение загружено
        image.addEventListener('load', () => {
            loader.style.visibility = 'hidden'; // Убираем индикатор
            image.classList.add('loaded');     // Показываем изображение
        });

        // Устанавливаем src для загрузки изображения
        const src = image.src;
        image.src = ''; // Сбрасываем src
        image.src = src; // Перезаписываем src для загрузки
    }, delay);
};

// Загрузка изображений по очереди
photoCells.forEach((cell, index) => {
    const delay = index * 1000; // Задержка между карточками (1000 мс = 1 секунда)
    loadImageWithDelay(cell, delay);
});
