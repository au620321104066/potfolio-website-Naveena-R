<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="stylesheet.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://unpkg.com/typed.js@2.0.15/dist/typed.umd.js"></script>
</head>
<body>
    <!-- Your HTML Structure Here -->
    
    <!-- JavaScript for Typed.js -->
    <script>
        var typed = new Typed(".text", {
            strings: ["Frontend Developer", "YouTuber", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    </script>

    <!-- JavaScript for Radial Bars -->
    <script>
        document.querySelectorAll('.radial-bars').forEach(function (bar) {
            const percentage = bar.getAttribute('data-percentage');
            const radius = 80; // Radius of the circle
            const circumference = 2 * Math.PI * radius;

            // Calculate the stroke-dashoffset based on the percentage
            const offset = circumference - (percentage / 100) * circumference;

            // Select the path and set the stroke-dashoffset
            const path = bar.querySelector('.path');
            path.style.strokeDashoffset = offset;

            // Set the percentage text
            const percentageText = bar.querySelector('.percentage');
            percentageText.textContent = `${percentage}%`;
        });
    </script>

    <!-- JavaScript for Navbar Toggle -->
    <script>
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.getElementById('navbar');

        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
    </script>
</body>
</html>
