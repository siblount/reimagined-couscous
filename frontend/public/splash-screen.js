// public/splash-screen.js
window.addEventListener('load', function () {
    const splashScreen = document.getElementById('splash-screen');
    const content = document.getElementById('__next');

    function isRunningAsInstalledPWA() {
        return window.matchMedia('(display-mode: standalone)').matches ||
               window.navigator.standalone ||
               document.referrer.includes('android-app://');
    }

    if (isRunningAsInstalledPWA()) {
        // Show splash screen and hide content after a delay
        setTimeout(function () {
            splashScreen.style.opacity = '0';
            content.style.opacity = '1';

            // Remove splash screen from DOM after fade out
            setTimeout(function () {
                splashScreen.remove();
            }, 500);
        }, 2000); // Adjust this delay as needed
    } else {
        // If not running as installed PWA, immediately hide splash screen and show content
        splashScreen.style.display = 'none';
        content.style.opacity = '1';
    }
});