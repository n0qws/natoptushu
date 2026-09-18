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
    
    // Чтобы цитаты не повторялись подряд
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);
    
    lastIndex = randomIndex;
    
    // Анимация смены текста (плавное появление)
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