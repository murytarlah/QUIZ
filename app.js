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