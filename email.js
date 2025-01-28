

function showError(inputElement, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    inputElement.classList.add("error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function clearError(inputElement, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    inputElement.classList.remove("error");
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

// Show the notification
function showNotification() {
    const notification = document.querySelector('.notification');
    const notificationContainer = document.querySelector('.notification-container');

    // Show notification
    notificationContainer.style.display = 'block';

    // Hide notification after 5 seconds
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 5000);
}

// Close notification manually
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    const notificationContainer = document.querySelector('.notification-container');
    notificationContainer.style.display = 'none';
});