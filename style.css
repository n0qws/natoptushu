/* --- ПЕРЕМЕННЫЕ И СБРОС --- */
:root {
    --bg-dark: #121212;
    --bg-card: #1A1A1A;
    --accent-green: #00FF41;
    --accent-purple: #8A2BE2;
    --text-main: #FFFFFF;
    --text-muted: #B0B0B0;
    --font-heading: 'Unbounded', sans-serif;
    --font-body: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3 {
    font-family: var(--font-heading);
    text-transform: uppercase;
}

a {
    text-decoration: none;
    color: inherit;
}

/* --- HERO SECTION --- */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background-image: url('M&M баскетбол.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.7) 100%);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 900;
    letter-spacing: 5px;
    margin-bottom: 1rem;
    text-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
    animation: glow 3s infinite alternate;
    cursor: pointer; /* Курсор-рука, чтобы было понятно, что можно кликать */
    user-select: none; /* Чтобы текст не выделялся при тройном клике */
}

@keyframes glow {
    0% { text-shadow: 0 0 20px rgba(0, 255, 65, 0.4); }
    100% { text-shadow: 0 0 40px rgba(138, 43, 226, 0.8); }
}

.hero p {
    font-size: 1.2rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    letter-spacing: 2px;
}

.btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    border: 2px solid var(--accent-green);
    color: var(--accent-green);
    font-family: var(--font-heading);
    font-weight: 700;
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    background: transparent;
}

.btn:hover {
    background-color: var(--accent-green);
    color: var(--bg-dark);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
    transform: translateY(-3px);
}

/* --- ОБЩИЕ СЕКЦИИ --- */
.section {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-main);
}

.section-title span {
    color: var(--accent-purple);
}

/* --- ИСТОРИЯ --- */
.history-text {
    background: var(--bg-card);
    padding: 3rem;
    border-radius: 20px;
    border-left: 5px solid var(--accent-purple);
    font-size: 1.1rem;
    color: #d1d1d1;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.history-text p {
    margin-bottom: 1.5rem;
}

.history-text strong {
    color: var(--accent-green);
    font-family: var(--font-heading);
}

/* --- КОМАНДА --- */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.team-card {
    background: var(--bg-card);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #333;
    text-align: center;
}

.team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 40px rgba(138, 43, 226, 0.3);
    border-color: var(--accent-purple);
}

.team-card img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
    filter: grayscale(20%);
    transition: filter 0.3s ease;
}

.team-card:hover img {
    filter: grayscale(0%);
}

.team-info {
    padding: 1.5rem;
}

.team-info h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-main);
}

.team-info p {
    color: var(--text-muted);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* --- ГЕНЕРАТОР ЦИТАТ --- */
.quote-section {
    text-align: center;
    background: var(--bg-card);
    border-radius: 20px;
    padding: 4rem 2rem;
    border: 1px dashed var(--accent-green);
}

.quote-display {
    font-size: 1.5rem;
    font-style: italic;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: #fff;
    font-family: var(--font-body);
    transition: opacity 0.2s ease;
}

/* --- МУЗЫКА --- */
.music-section {
    text-align: center;
}

.music-section audio {
    width: 100%;
    max-width: 500px;
    margin-top: 2rem;
    border-radius: 10px;
    outline: none;
}

/* --- FOOTER --- */
footer {
    text-align: center;
    padding: 3rem;
    border-top: 1px solid #333;
    color: var(--text-muted);
    font-size: 0.9rem;
}

footer a {
    color: var(--accent-green);
}

/* --- АДАПТИВНОСТЬ --- */
@media (max-width: 768px) {
    .section { padding: 4rem 1rem; }
    .history-text { padding: 1.5rem; }
    .team-card img { height: 280px; }
    .hero h1 { font-size: 3rem; }
}

/* --- ПАСХАЛКА: ЛЕТАЮЩИЕ M&M's --- */
.flying-mnm {
    position: fixed;
    z-index: 9999;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Unbounded', sans-serif;
    font-weight: 900;
    color: #121212;
    font-size: 22px;
    pointer-events: none; /* Чтобы клики проходили сквозь них */
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    animation: fly 3s linear forwards;
}

.flying-mnm::after {
    content: 'm';
}

@keyframes fly {
    0% {
        transform: translateY(-100px) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
