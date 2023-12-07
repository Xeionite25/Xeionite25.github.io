document.addEventListener('DOMContentLoaded', function () {
    const tribonacciElement = document.getElementById('tribo');
    tribonacciElement.addEventListener('mouseover', function () {
        tribonacciElement.style.display = 'none';
    });
    tribonacciElement.addEventListener('mouseout', function () {
        tribonacciElement.style.display = 'block';
    });
});
