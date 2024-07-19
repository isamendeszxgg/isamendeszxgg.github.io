let notificationBar = document.getElementById("notificationBar");
let notifications = [
    "Fernanda D. cadastrou e acabou de ganhar R$55",
    "Marcos Antonio cadastrou e acabou de ganhar R$403",
    "Vitor Augusto cadastrou e acabou de ganhar R$43",
    "Fernanda D. cadastrou e acabou de ganhar R$55",
    "Gabriel Oliveira cadastrou e acabou de ganhar R$597",
    "Marcos Antonio cadastrou e acabou de ganhar R$403",
    "Eduardo Silva cadastrou e acabou de ganhar R$403",
    "Renata Souza cadastrou e acabou de ganhar R$112",
    "Juliana Santos cadastrou e acabou de ganhar R$230",
    "Rafael Lima cadastrou e acabou de ganhar R$175"
];
let currentIndex = 0;

function showNotification() {
    notificationBar.textContent = notifications[currentIndex];
    notificationBar.classList.remove("hidden");
    notificationBar.classList.add("slide-in");

    setTimeout(function() {
        notificationBar.classList.remove("slide-in");
        notificationBar.classList.add("slide-out");

        setTimeout(function() {
            notificationBar.classList.remove("slide-out");
            notificationBar.classList.add("hidden");
            currentIndex = (currentIndex + 1) % notifications.length;
            showNotification(); // Chama recursivamente para exibir a próxima notificação
        }, 5000); // Tempo de espera antes de iniciar a próxima notificação
    }, 3000); // Tempo de exibição da notificação atual
}

showNotification(); // Inicia o ciclo de exibição das notificações