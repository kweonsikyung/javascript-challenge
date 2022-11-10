const quizData = [
    {
        question : 'how old is Florin?',
        a : '10',
        b : '17',
        c : '26',
        d : '110',
        correct : 'c'
    }, {
        question: "what is the most used programming language in 2019?",
        a : 'Java',
        b : 'C',
        c : 'Python',
        d : 'Javascript',
        correct : 'd'
    }, {
        question: "who is he President of US?",
        a : 'Florin Pop',
        b : 'Donald Thrump',
        c : 'Ivan Saldano',
        d : 'Mihai Andrei',
        correct : 'b'
    }, {
        question: "what does HTML stand for?",
        a : 'Hypertext Markup Language',
        b : 'Cascading Style Sheet',
        c : 'Jason Object Notation',
        d : 'Helicopters Terminals Motoboats Lanborginis',
        correct : 'a'
    }, {
        question: "What year was Javascript language",
        a : '1995',
        b : '1990',
        c : '1985',
        d : 'none of the above',
        correct : 'b'
    }
]


const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        // console.log(answer.checked);
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //checke to see the answer
    const answer = getSelected();

    // console.log(answer);
    
    if(answer) { 
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;  
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
           quiz.innerHTML = `<h2>you answered correctly at ${score}
           / ${quizData.length} question. </h2>`;
        }
    }
});