// --- ГЕНЕРАТОР ЦИТАТ ---
const quotes = [
    "Жырнопузово это столица мира.",
    "так у меня маленькие птэнчыкi-лукашэнкi на гнезде.",
    "Ребята мы тут все соулмейты давайте полиаморные отношения.",
    "Пуля очень многое меняет, даже если попадает в задницу.",
    "я сделаю фотку как я ем кукурузу на дне города.",
    "Olga: Никаких гулянок.",
    "это уже можно назвать вокальным бдсм.",
    "ты тряси тряси пиздой заработай на дилдон 🤣✌️.",
    "в словакии нетц сво.",
    "пусть на него упадает жирная свинья.",
    "вот вот егор был бы мужчина он мы пенисом по губам поводил просто."
];

let lastIndex = -1;

function generateQuote() {
    const display = document.getElementById('quoteDisplay');
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);
    
    lastIndex = randomIndex;
    
    display.style.opacity = 0;
    setTimeout(() => {
        display.textContent = `«${quotes[randomIndex]}»`;
        display.style.opacity = 1;
    }, 200);
}

// Плавный скролл для кнопки "Узнать историю"
document.querySelector('a[href="#history"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('history').scrollIntoView({
        behavior: 'smooth'
    });
});

// --- ПАСХАЛКА: ТРОЙНОЙ КЛИК ПО ЗАГОЛОВКУ ---
let titleClickCount = 0;
let titleClickTimer;

document.getElementById('mainTitle').addEventListener('click', () => {
    titleClickCount++;
    clearTimeout(titleClickTimer);

    // Если 3 клика подряд (с интервалом менее 500 мс)
    if (titleClickCount === 3) {
        triggerMnMEasterEgg();
        titleClickCount = 0; // Сброс
    } else {
        // Сброс счетчика, если прошло больше 500 мс
        titleClickTimer = setTimeout(() => {
            titleClickCount = 0;
        }, 500);
    }
});

function triggerMnMEasterEgg() {
    const numMnMs = 40; // Количество M&M's
    const colors = ['#00FF41', '#8A2BE2', '#FF4500', '#FFD700', '#00BFFF']; // Зеленый, фиолетовый, оранжевый, золотой, голубой

    for (let i = 0; i < numMnMs; i++) {
        const mnm = document.createElement('div');
        mnm.classList.add('flying-mnm');
        
        // Случайная позиция по горизонтали (от 0 до 100% ширины экрана)
        const randomLeft = Math.random() * 100; 
        // Случайная задержка перед началом полета (от 0 до 1.5 секунд)
        const randomDelay = Math.random() * 1.5; 
        // Случайная длительность полета (от 2 до 4 секунд)
        const randomDuration = 2 + Math.random() * 2; 
        
        mnm.style.left = `${randomLeft}vw`;
        mnm.style.animationDelay = `${randomDelay}s`;
        mnm.style.animationDuration = `${randomDuration}s`;
        
        // Случайный цвет
        mnm.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(mnm);
        
        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            mnm.remove();
        }, (randomDelay + randomDuration) * 1000 + 100);
    }
}
