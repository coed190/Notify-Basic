    window.postMessage = function() {
    var notification = document.getElementById("notification");
    notification.style.display = "flex";
    sessionStorage.setItem("notificationShown", "true");
};

document.addEventListener("DOMContentLoaded", function() {
    var notification = document.getElementById("notification");
    var progress = document.querySelector(".progress-containero");
    notification.style.display = "none";

    var notificationShown = sessionStorage.getItem("notificationShown");

    if (!notificationShown) {
        postMessage();
    }

    function hideNotification() {
        notification.style.display = "none";
    }

    progress.addEventListener("animationend", function() {
        hideNotification();
    });

    setTimeout(hideNotification, 5000);
});