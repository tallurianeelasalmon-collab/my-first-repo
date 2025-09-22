document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    myButton.addEventListener('click', function() {
        messageParagraph.textContent = 'Button clicked successfully!';
    });
});
