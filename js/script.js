// ЗМІСТ
// ---- Перевірка активності посилань
// ---- Ін'єкція повторюваних елементів
// ---- Згортаний зміст

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
    document.querySelectorAll('[data-include]').forEach(el => {
        fetch(el.getAttribute('data-include'))
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            });
    });
});

// === Згортаний зміст ===
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