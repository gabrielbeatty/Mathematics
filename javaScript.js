document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form, input field, and feedback message element
    const mathForm = document.getElementById('mathForm');
    const answerInput = document.getElementById('answer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    // The correct answer for the problem "What is 4 x 5?"
    const CORRECT_ANSWER = 20;

    // Add an event listener to the form for the 'submit' event
    mathForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting in the default HTML way (which reloads the page)
        event.preventDefault();

        // Clear previous feedback message
        feedbackMessage.textContent = '';
        feedbackMessage.style.backgroundColor = '';

        // Get the value from the input field and convert it to a number
        // The <input type="number"> helps ensure it's a number, but we convert it anyway.
        const userAnswer = Number(answerInput.value);

        // Perform the validation
        if (userAnswer === CORRECT_ANSWER) {
            // Correct answer
            feedbackMessage.textContent = 'Correct! Great job!';
            feedbackMessage.style.backgroundColor = '#4CAF50'; // Green background
            feedbackMessage.style.color = 'white';
        } else {
            // Incorrect answer
            feedbackMessage.textContent = 'Incorrect. Please try again.';
            feedbackMessage.style.backgroundColor = '#FF5733'; // Red background
            feedbackMessage.style.color = 'white';
        }
    });
});