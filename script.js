// Global variables for storing quiz data
const totalQuestions = 10;
let correctAnswers = 0;

// Function to check answers and display feedback
function checkAnswers() {
    correctAnswers = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);

        if (selectedAnswer && selectedAnswer.value === "true") {
            correctAnswers++;
        }
    }

    const quizFeedback = document.getElementById("quizFeedback");
    const feedbackHTML = `<p>You answered ${correctAnswers} out of ${totalQuestions} questions correctly!</p>`;
    quizFeedback.innerHTML = feedbackHTML;
}

// Event listener for quiz form submission
const quizForm = document.getElementById("quizForm");
if (quizForm) {
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();
        checkAnswers();
    });
}

// Add any additional scripts for other interactive elements on your pages
// For example, you can add scripts for animations, form validation, etc.
// Here's a sample script that displays an alert when the "Learn More" button is clicked.
const learnMoreButton = document.getElementById("learnMoreButton");
if (learnMoreButton) {
    learnMoreButton.addEventListener("click", function () {
        alert("You clicked the Learn More button!");
    });
}
