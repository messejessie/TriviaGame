var questions = [
    {
        question: "What are six signs of depresion you should never ignore?",
        answers: {
            a: 'Trouble Sleeping, Loss of Interest in Favorite Activities, Increase in Energy, Change in Appetite, Touchiness, An Emerging Dark Side',
            b: 'Sleeping perfect, Increase Interest in Favorite Activities, Decrease in Energy, Normal Appetite, Tough, A positive attitude',
            c: 'Jumping, Sudden New Interest, Mild energy, Normal Appetite habits, Not offensive, a balanced attitude',
            d: 'All of the above'
        },
        correctAnswer: 'a'
    },
    {
        question: "What are normal risk factors in Depresison?",
        answers: {
            a: 'Personal or family History',
            b: 'Major life changes, trauma, or stress',
            c: 'Certain physical illnesses and medications',
            d: 'All of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is Imposter Syndrome?",
        answers: {
            a: 'A collection of feelings of superiority that persists despite evident failure',
            b: 'A collection of feelings that you are a unicorn',
            c: 'A collection of feelings of inadequacy that persist despite evident success',
            d: 'All of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is Imposter Syndrome?",
        answers: {
            a: 'A collection of feelings of superiority that persists despite evident failure',
            b: 'A collection of feelings that you are a unicorn',
            c: 'A collection of feelings of inadequacy that persist despite evident success',
            d: 'All of the above'
        },
        correctAnswer: 'd'
    },

]
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//Generating the quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    // show answers
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            // reset the list of answers
            answers = [];

            //each available answer to a question
            for (letter in questions[i].answers) {

                //attempting to use a HTML radio button// 
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }
            //converting to HTML??? 
            quizContainer.innerHTML = output.join('');
        }
        // show results
        function showResults(questions, quizContainer, resultsContainer) {
        }

        showQuestions(questions, quizContainer);
        submitButton.onclick = function () {
            showResults(questions, quizContainer, resultsContainer);
        }
    }
}