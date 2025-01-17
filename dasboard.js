document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard Loaded');

    // Interactive feature: Animal selection alerts
    const animals = ['cat', 'dog', 'goat', 'cow'];
    animals.forEach(animal => {
        const box = document.getElementById(`${animal.toLowerCase()}-box`);
        if (box) {
            box.addEventListener('click', () => {
                window.location.href = `${animal.toLowerCase()}.html`; // Navigate to the specific animal page
            });
        }
    });
    
    // Logout button functionality
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', () => {
        alert('Logging out...');
        window.location.href = 'colorlib-regform-7/index.html'; // Redirect to login page
    });
});
    