

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger && burger.addEventListener('click', function () {
        if (!nav) return;

        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        }

        else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.gap = '8px';
            nav.style.padding = '12px';
            nav.style.background = 'rgba(15,16,21,0.95)';
            nav.style.position = 'absolute';
            nav.style.right = '20px';
            nav.style.top = '64px';
            nav.style.borderRadius = '10px';
        }
    });

    const contactButtons = document.querySelectorAll('.btn.contact');

    contactButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const email = btn.dataset.email || 'no-reply@example.com';

            navigator.clipboard?.writeText(email).then(() => {
                const old = btn.textContent;
                btn.textContent = 'Скопировано';
                setTimeout(() => btn.textContent = old, 1800);

            }).catch(() => {
                alert('Контакт: ' + email);
            });
        });
    });
});