document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.querySelector('.info-box');
    const paymentBox = document.querySelector('.payment-box');
    const discordBox = document.querySelector('.discord-box');
    const loadingScreen = document.querySelector('.loading-screen');
    const infoSection = document.querySelector('.info-section');
    const scrollPrompt = document.querySelector('.scroll-prompt');

    infoBox.addEventListener('click', () => {
        loadingScreen.style.display = 'flex';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            infoSection.style.display = 'block';
            scrollPrompt.style.display = 'block';
            document.body.style.overflow = 'auto';
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }, 3000);
    });

    paymentBox.addEventListener('click', () => {
        loadingScreen.style.display = 'flex';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            window.location.href = 'https://www.tip4stream.pl/wplata/payme';
        }, 3000);
    });

    discordBox.addEventListener('click', () => {
        window.location.href = 'https://dsc.gg/leakstore';
    });
});
