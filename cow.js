document.addEventListener('DOMContentLoaded', () => {
    console.log('Cow Page Loaded');
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        window.location.href = 'dashboard.html'; // Navigate back to the dashboard
    });
});
