
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
console.log(questions);

generateQuiz(questions, quizBox, resultsBox, submitButton);
var quizBox = document.getElementById('quiz');
var resultsBox = document.getElementById('results');
var submitButton = document.getElementById('submit');


//Generating the quiz
function generateQuiz(questions, quizBox, resultsBox, submitButton) {
    // show quiZ

    function showQuestions(questions, quizBox) {
        //console.log(questions)
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
            quizBox.innerHTML = output.join('');
        }
        // show results
        function showResults(questions, quizBox, resultsBox) {
            var answerBox = quizBox.querySelectorAll('.answers');

            // tracking the answers and what not

            // keep track of user's answers
            var userChoice = '';
            var numCorrect = 0;
            var numWrong = 0;

            // need a for loop for questions and answers: 
            for (var i = 0; i < questions.length; i++) {

                userChoice = (answerBox[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
                console.log(userchoice)
                // if answer is correct
                if (userChoice === questions[i].correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                }
                // if answer is wrong or blank
                else {

                    numWrong++;
                }
            }

            //Timer:
            function startTimer(duration, display) {
                var timer = duration, minutes, seconds;
                setInterval(function () {
                    minutes = parseInt(timer / 60, 10)
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    display.textContent = minutes + ":" + seconds;

                    if (--timer < 0) {
                        timer = duration;
                        alert(resultsbox.innerHTML = 'Correct Answers' + numCorrect + 'Incorrect Answers' + numWrong);
                    }
                }, 1000);
            }

            window.onload = function () {
                var twoMinutes = 60 * 2,
                    display = document.querySelector('#timer');
                startTimer(twoMinutes, display);
            };



        }

        showQuestions(questions, quizBox);
        submitButton.onclick = function () {
            showResults(questions, quizBox, resultsBox);
        }
    }

}
