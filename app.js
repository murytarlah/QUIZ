const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#previous')
let question = document.querySelector('#question')
let options = document.querySelector('#options')
prevBtn.disabled = true

//  question counter
let questionCount = 0;

// user answers 
let userAnswers = new Map()

//  all question to be rendered
let allQuestions = [
    {
        id: 1,
        question:"1. What is Software?",
        options: [
            "Software is set of programs",
            "Software is set of programs, documentation & configuration of data",
            "None of the mentioned",
            "Software is documentation and configuration of data"
        ],
        correctAnswer: 2
    },
    {
        id: 2,
        question:"2. Which of the following statement is incorrect about software engineering?",
        options: [
            "Software engineering belongs to Computer science",
            "Software engineering is a part of more general form of System Engineering",
            "Computer science belongs to Software engineering",
            "Software engineering is concerned with the practicalities of developing and delivering useful software"
        ],
        correctAnswer:3
    },
    {
        id: 3,
        question:"3. The fundamental notions of software engineering does not account for?",
        options: [
            "Software processes",
            "Software security",
            "Software reuse",
            "Software validation"
        ],
        correctAnswer:3
    },
    {
        id: 4,
        question:"4. Which of these are not among the eight principles followed by Software Engineering Code of Ethics and Professional Practice?",
        options: [
            "PUBLIC",
            "PROFESSION",
            "PRODUCT",
            "ENVIRONMENT"
        ],
        correctAnswer:3
    },
    {
        id: 5,
        question:"5. Which of these software engineering activities are not a part of software processes?",
        options: [
            "Software dependence",
            "Software validation",
            "Software development",
            "Software specification"
        ],
        correctAnswer:1
    },
    {
        id: 6,
        question:"6. SDLC stands for?",
        options: [
            "Software Deveopment Life cycle",
            "System Development life cycle",
            "Software Design life cycle",
            "System Design life cycle"
        ],
        correctAnswer:1
    },
    {
        id: 7,
        question:"7. Who was first to proposed the Cleanroom philosophy in software engineering?",
        options: [
            "Mills",
            "Dyer",
            "Linger",
            "All of the Mentioned"
        ],
        correctAnswer:3
    }     
]

function questionTemplate(){
    let currentQuestion = allQuestions[questionCount].question;
    question.innerHTML = currentQuestion;
}


function optionsTemplate() {
    let markup = ''
    for (var i = 0; i < allQuestions[questionCount].options.length; i++) {
        // var choice = document.getElementsByTagName("p")[i];
        var option = 
        `<div class='form-check my-4'>
            <input class='mx-2' id='${allQuestions[questionCount].id}'type='radio' name='q${questionCount+1}' value='${allQuestions[questionCount].options[i]}'>${allQuestions[questionCount].options[i]}</input>
        </div>`                    
        markup += option        
    }
    options.innerHTML = markup;
}

function displayAlert() {
    var radios = document.getElementsByTagName("input");
    if (!radios[0].checked && !radios[1].checked && !radios[2].checked && !radios[3].checked) {
        alert("Please select an option");
    }
}
console.log(allQuestions.length)



// loads next question by changing the question count and also adjusting button functionality
function nextQuestion() {
    if (questionCount < allQuestions.length-1 && questionCount >= 0) {
        // increase the value of question count by 1 before calling questionTemplate and optionsTemplate
        questionCount++;
        prevBtn.disabled = false
        questionTemplate();
        optionsTemplate();
    }
    if(questionCount == allQuestions.length-1){
        nextBtn.innerHTML = 'submit'
    }
}
// loads previous question by changing the question count and also adjusting button functionality

function previousQuestion() {
    if (questionCount > 0) {
        questionCount--;
        nextBtn.disabled = false
        questionTemplate();
        optionsTemplate();
    }
    if(questionCount == 0){
        prevBtn.disabled = true
    }
}

function loadAnswer(){
    for (var x = 0; x < allQuestions.length; x++) {
        let radioButtons = document.getElementsByTagName("input");
        for (const option of radioButtons) {
            if (userAnswers.get(Number(option.id)) == option.value) {
                console.log(userAnswers.get(Number(option.id)))
                option.checked = true;
            }    
        }
    }
}


Window.onload = questionTemplate()
Window.onload = optionsTemplate()

nextBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let answer = document.querySelector('input[type="radio"]:checked')
    if(answer == null){
        displayAlert()
    }
    // console.log(answers.id,answers.value)
    else if(answer != null){
        if(userAnswers.has(Number(answer.id))){
            if(userAnswers.get(Number(answer.id)) == answer.value){
                loadAnswer()
                nextQuestion()
                loadAnswer()
            }
            else{
                userAnswers.set(Number(answer.id),answer.value)
                nextQuestion()
                loadAnswer()
            }
        }
        else if(!userAnswers.has(Number(answer.id))){
            userAnswers.set(Number(answer.id),answer.value)
            nextQuestion()
            console.log(userAnswers)
        }
    }

    if(userAnswers.size == 7){
        showScore()
    }
    console.log(questionCount,userAnswers.size)
})
console.log(userAnswers.size)


prevBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    previousQuestion()
    loadAnswer()
})

let score = 1
function showScore(){
    let answers = Array.from(userAnswers.values())
    console.log(answers)
    for (let i = 0; i < allQuestions.length; i++) {
        const element = answers[i];
        console.log(element,allQuestions[i].options[allQuestions[i].correctAnswer])
        if(element == allQuestions[i].options[allQuestions[i].correctAnswer]){
            score += 1
        }
        
    }
    alert(`You got ${score} out of ${allQuestions.length} questions`)
    document.location.reload()
}

if(nextBtn.innerHTML == 'submit'){
    nextBtn.addEventListener('click',()=>{
        e.preventDefault()
        showScore
    })
}