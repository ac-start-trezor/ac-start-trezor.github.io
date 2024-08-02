document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('#intro .btn');
    
    getStartedButton.addEventListener('click', function() {
        document.querySelector('#setup').scrollIntoView({ behavior: 'smooth' });
    });
});
