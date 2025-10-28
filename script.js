// Общие функции для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация тултипов
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    tooltipTriggers.forEach(trigger => {
        const tooltip = document.createElement('div');
        tooltip.className = 'hidden absolute z-50 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap';
        tooltip.textContent = trigger.getAttribute('data-tooltip');
        trigger.appendChild(tooltip);
        
        trigger.addEventListener('mouseenter', () => {
            tooltip.classList.remove('hidden');
        });
        
        trigger.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });

    // Показать/скрыть пароль
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.querySelector('i').setAttribute('data-feather', type === 'password' ? 'eye' : 'eye-off');
            feather.replace();
        });
    });
});

// API для работы с расписанием
async function fetchSchedule(groupId) {
    try {
        const response = await fetch(`https://schedule.uust.ru/api/schedule?group=${groupId}`);
        if (!response.ok) throw new Error('Ошибка загрузки расписания');
        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        return null;
    }
}

// Функция для открытия страницы 404
function open404Page() {
    window.location.href = '/404.html';
}

// Автоматическое перенаправление на 404 при ошибках загрузки
window.addEventListener('error', function(e) {
    console.error('Произошла ошибка:', e.error);
    open404Page();
});

// Обработка несуществующих маршрутов
if (window.location.pathname !== '/' && 
    !window.location.pathname.includes('.html') && 
    !window.location.pathname.includes('feedback') && 
    !window.location.pathname.includes('career')) {
    open404Page();
}