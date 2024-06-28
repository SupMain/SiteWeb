$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1);
    }, 0);

    return false;
});
document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour détecter si l'utilisateur est sur un appareil mobile
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        // Affiche le message et masque le contenu principal
        document.getElementById("mobile-message").style.display = "flex";
        document.getElementById("main-content").style.display = "none";
        document.getElementById("main-content").classList.add("hidden");

    }
});
