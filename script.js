document.addEventListener('DOMContentLoaded', function() {
    // Update the time every minute
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true, 
            timeZone: 'Asia/Kolkata' 
        });
        document.querySelector('.time').textContent = `${timeString} | Bangalore`;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // Add click event listeners to contact links
    document.getElementById('emailLink').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:your.email@example.com';
    });

    document.getElementById('xLink').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://twitter.com/yourusername', '_blank');
    });

    document.getElementById('resumeLink').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('path/to/your/resume.pdf', '_blank');
    });
    
});

