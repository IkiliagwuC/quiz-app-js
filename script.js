//data structure to store question information( an array of objects)
const quizData = [
    {
        question: 'how old is the taj mahal',
        a: '10',
        b: '17',
        c: '26',
        d: '100',
        correct: 'd'

    },{
        question: 'what is the most used programming language',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'javascript',
        correct: 'c'
    }
    ,{
        question: 'who is the president of the US',
        a: 'Barack Obama',
        b: 'Malia Obama',
        c: 'Donald Trump',
        d: 'Joe Biden',
        correct: 'd'
    }
    ,{
        question: 'what is the least used programming language',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'javascript',
        correct: 'b'
    }
    ,{
        question: 'what does html stand for',
        a: 'hypertext markup language',
        b: 'javascript object notation',
        c: 'cascading style sheet',
        d: 'c sharp sharp',
        correct: 'a'
    }
]

//grab ids to manipulate dom
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit_btn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0

loadQuiz()


//function to update the html content
function loadQuiz(){
    deselectAnswers();
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
            answer =  answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });

}

// click button to do something
submit_btn.addEventListener('click', ()=> {
    
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz ++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        }else {
           quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly</h2> <button onclick = location.reload()>Reload</button>`
        };
    }
})
