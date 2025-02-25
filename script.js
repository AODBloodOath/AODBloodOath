document.addEventListener("DOMContentLoaded", function() {
    function startCountdown() {
        const eventDate = new Date("March 15, 2025 18:00:00").getTime();
        const countdownElement = document.getElementById("countdown");
        
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;
            
            if (timeLeft <= 0) {
                countdownElement.innerHTML = "The event has started!";
                return;
            }
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `Next Event In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        
        setInterval(updateCountdown, 1000);
    }
    
    startCountdown();
});
