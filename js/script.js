// ЗМІСТ
// ---- Рядок пошуку
// ---- Запуск навігації на мобільних пристроях
// ---- Автокорекція абсолютних шляхів для GitHub Pages
// ---- Перевірка активності посилань
// ---- Ін'єкція повторюваних елементів
// ---- Згорнутий зміст

// === Рядок пошуку ===
const backroomsIndex = [
    { title: "Рівень 0", name: "Лобі", url: "/normal-pages/levels/level-0.html" },
    { title: "Рівень 1", name: "Населена зона", url: "/normal-pages/levels/level-1.html" },
    { title: "Рівень 2", name: "Технічний поверх", url: "/normal-pages/levels/level-2.html" },
    { title: "Рівень 3", name: "Електрична станція", url: "/normal-pages/levels/level-3.html" },
    { title: "Рівень 4", name: "Покинуті офіси", url: "/normal-pages/levels/level-4.html" },
    { title: "Рівень 5", name: "Жахливий готель", url: "/normal-pages/levels/level-5.html" },
    { title: "Рівень 6", name: "Темна сторона", url: "/normal-pages/levels/level-6.html" },
    { title: "Рівень 7", name: "Таласофобія", url: "/normal-pages/levels/level-7.html" },
    { title: "Рівень 8", name: "Система печер", url: "/normal-pages/levels/level-8.html" },
    { title: "Рівень 9", name: "Передмістя", url: "/normal-pages/levels/level-9.html" },
    { title: "Рівень 10", name: "Пшеничне поле", url: "/normal-pages/levels/level-10.html" },
    { title: "Рівень 11", name: "Місто", url: "/normal-pages/levels/level-11.html" },
    { title: "Рівень 12", name: "Колодязь", url: "/normal-pages/levels/level-12.html" },
    { title: "Рівень 13", name: "Торговий центр", url: "/normal-pages/levels/level-13.html" },
    { title: "Рівень 14", name: "Ігрова зона", url: "/normal-pages/levels/level-14.html" },
    { title: "Рівень 15", name: "Бібліотека", url: "/normal-pages/levels/level-15.html" },
    { title: "Рівень 16", name: "Басейни", url: "/normal-pages/levels/level-16.html" },
    { title: "Рівень 17", name: "Колектори", url: "/normal-pages/levels/level-17.html" },
    { title: "Кімната 1", name: "Кінець", url: "/normal-pages/rooms/room-1.html" },
    { title: "Кімната 2", name: "Двір із вікнами", url: "/normal-pages/rooms/room-2.html" },
    { title: "Кімната 3", name: "Поля ілюзій", url: "/normal-pages/rooms/room-3.html" },
    { title: "Кімната 4", name: "Вежа", url: "/normal-pages/rooms/room-4.html" },
    { title: "Об'єкт 0", name: "Вікі про Закулісся", url: "/normal-pages/objects/object-0.html" },
    { title: "Об'єкт 1", name: "Мигдальна вода", url: "/normal-pages/objects/object-1.html" },
    { title: "Об'єкт 2", name: "Невизначений ключ", url: "/normal-pages/objects/object-2.html" },
    { title: "Об'єкт 3", name: "Wi-Fi", url: "/normal-pages/objects/object-3.html" },
    { title: "Об'єкт 4", name: "Банка з водою", url: "/normal-pages/objects/object-4.html" },
    { title: "Об'єкт 5", name: "Глюк", url: "/normal-pages/objects/object-5.html" },
    { title: "Об'єкт 6", name: "Текст", url: "/normal-pages/objects/object-6.html" },
    { title: "Сутність 0", name: "Невідома", url: "/normal-pages/entities/entity-0.html" },
    { title: "Сутність 1", name: "Смола", url: "/normal-pages/entities/entity-1.html" },
    { title: "Сутність 2", name: "Вікна", url: "/normal-pages/entities/entity-2.html" },
    { title: "Сутність 3", name: "Усміхнені", url: "/normal-pages/entities/entity-3.html" },
    { title: "Сутність 4", name: "Смертомолі", url: "/normal-pages/entities/entity-4.html" },
    { title: "Сутність 5", name: "Багаторукі", url: "/normal-pages/entities/entity-5.html" },
    { title: "Сутність 6", name: "Сірості", url: "/normal-pages/entities/entity-6.html" },
    { title: "Сутність 7", name: "Божевільні", url: "/normal-pages/entities/entity-7.html" },
    { title: "Сутність 8", name: "Гончі", url: "/normal-pages/entities/entity-8.html" },
    { title: "Сутність 9", name: "Безликі", url: "/normal-pages/entities/entity-9.html" },
    { title: "Сутність 10", name: "Шкірокради", url: "/normal-pages/entities/entity-10.html" },
    { title: "Сутність 11", name: "Ліфти", url: "/normal-pages/entities/entity-11.html" },
    { title: "Сутність 12", name: "Манекени", url: "/normal-pages/entities/entity-12.html" },
    { title: "Сутність 13", name: "Живі стіни", url: "/normal-pages/entities/entity-13.html" },
    { title: "Рівні", name: "Список рівнів", url: "/special-pages/levels.html" },
    { title: "Кімнати", name: "Список кімнат", url: "/special-pages/rooms.html" },
    { title: "Об'єкти", name: "Список об'єктів", url: "/special-pages/objects.html" },
    { title: "Сутності", name: "Список сутностей", url: "/special-pages/entities.html" },
    { title: "Посібники", name: "Список посібників", url: "/special-pages/guides.html" },
    { title: "Я в Закуліссі", name: "Глосарій", url: "/special-pages/me-in-the-backrooms.html" },
    { title: "Класифікація", name: "Класифікація рівнів", url: "/special-pages/level-classification.html" },
    { title: "Ключові свідки", name: "Список свідків", url: "/special-pages/key-witnesses.html" },
    { title: "Джерела", name: "Список джерел", url: "/special-pages/sources.html" },
    { title: "База даних Закулісся", name: "Головна сторінка", url: "/" }
];

function initiateSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        searchResults.innerHTML = '';

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const filtered = backroomsIndex.filter(page => {
            const titleMatch = page.title.toLowerCase().includes(query);
            const nameMatch = page.name ? page.name.toLowerCase().includes(query) : false;
            return titleMatch || nameMatch;
        });

        if (filtered.length === 0) {
            searchResults.innerHTML = '<a style="color: rgb(114, 119, 125);">Нічого не знайдено</a>';
            searchResults.style.display = 'block';
            return;
        }

        filtered.slice(0, 7).forEach(page => {
            const link = document.createElement('a');
            link.href = page.url;

            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedQuery})`, 'gi');
            const resultTemplate  = `${page.title} &mdash; ${page.name}`;
            const highlightedTitle = resultTemplate.replace(regex, '<b>$1</b>');

            link.innerHTML = highlightedTitle;

            searchResults.appendChild(link);
        });

        searchResults.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

// === Запуск навігації на мобільних пристроях ===
function initiateNavigation() {
    const burgerButton = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('aside');

    if (!burgerButton || !sidebar) return;

    burgerButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// === Автокорекція абсолютних шляхів для GitHub Pages ===
function fixGitHubPagesPaths() {
    const repositoryName = '/backrooms-ru/'; 

    if (window.location.hostname.includes('github.io') || window.location.pathname.startsWith(repositoryName)) {
        if (typeof backroomsIndex !== 'undefined' && Array.isArray(backroomsIndex)) {
            backroomsIndex.forEach(item => {
                if (item.url && item.url.startsWith('/') && !item.url.startsWith(repositoryName)) {
                    item.url = repositoryName + item.url.slice(1);
                }
            });
        }

        const links = document.querySelectorAll('a, img');

        links.forEach(el => {
            if (el.hasAttribute('href')) {
                const currentHref = el.getAttribute('href');

                if (currentHref.startsWith('/') && !currentHref.startsWith(repositoryName)) {
                    el.setAttribute('href', repositoryName + currentHref.slice(1));
                }
            }
            if (el.hasAttribute('src')) {
                const currentSrc = el.getAttribute('src');

                if (currentSrc.startsWith('/') && !currentSrc.startsWith(repositoryName)) {
                    el.setAttribute('src', repositoryName + currentSrc.slice(1));
                }
            }
        });
    }
}

// === Перевірка активності посилань ===
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const url = new URL(href, location.href);

        if (url.hostname !== location.hostname || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:') || url.pathname === location.pathname) {
            link.classList.add('active');
            return;
        };

        fetch(url.href, {
            method: 'HEAD',
            mode: 'same-origin',
            redirect: 'manual'
        })
            .then(response => {
                if (response.ok) {
                    link.classList.add('active');
                } else {
                    link.classList.add('inactive');
                }
            })
            .catch(() => {
                link.classList.add('inactive');
            });
    });
});

// === Ін'єкція повторюваних елементів ===
document.addEventListener('DOMContentLoaded', () => {
    const includes = document.querySelectorAll('[data-include]');
    if (includes.length === 0) return;

    let loadedCount = 0;

    includes.forEach(el => {
        fetch(el.getAttribute('data-include'))
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
                
                loadedCount++;

                if (loadedCount === includes.length) {
                    fixGitHubPagesPaths();
                    initiateSearch();
                    initiateNavigation();
                }
            });
    });
});

// === Згорнутий зміст ===
document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(container => {
        const toggle = document.createElement('div');
        toggle.classList.add('collapsible-toggle');

        const content = container.querySelector('.collapsible-content');

        if (container.classList.contains('collapsed')) {
            toggle.textContent = 'розгорнути';
            if (content) content.style.display = 'none';
        } else {
            toggle.textContent = 'згорнути';
        }

        container.insertBefore(toggle, container.firstChild);

        toggle.addEventListener('click', () => {
            const isCollapsed = container.classList.contains('collapsed');

            if (isCollapsed) {
                container.classList.remove('collapsed');
                toggle.textContent = 'згорнути';
                if (content) content.style.display = 'block';
            } else {
                container.classList.add('collapsed');
                toggle.textContent = 'розгорнути';
                if (content) content.style.display = 'none';
            }
        });
    });
});