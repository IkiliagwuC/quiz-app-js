const quizData = [
    {
        question: 'how old is the taj mahal',
        a: '10',
        b: '17',
        c: '26',
        d: '100',

        correct: 'x'

    },{
        question: 'what is the most used programming language',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'javascript',
        correct: 'a'
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
        question: 'what is the most used programming language',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'javascript',
        correct: 'a'
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
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit_btn = document.getElementById('submit')

let currentQuiz = 0;

loadQuiz()


//function to update the html content
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

// click button to do something
submit_btn.addEventListener('click', ()=> {
    currentQuiz ++;
    if (currentQuiz < quizData.length){
        loadQuiz();
    }else {
        alert("End of Questions, Quiz complete")
    };
    loadQuiz();

})