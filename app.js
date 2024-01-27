const login = document.querySelector(".login");
const startButton = document.querySelector(".start-btn");
const main = document.querySelector("main");
const categories = document.querySelector(".categories");
const tagBadgeSpn = document.querySelector(".tag-badge-spn");
const castegoriesBox = document.querySelector(".castegories-box");
const tagBadge = document.querySelectorAll(".tag-badge");
const qouestionBox = document.querySelector(".qouestion-box");
const StartQuiz = document.getElementById("Start-Quiz");
const Previous = document.querySelector(".Previous")

let currentQuestion = 0;
let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
                "question": "What is the capital of Australia?",
                "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                "answer": "Canberra"
            },
            {
                "question": "What is the largest planet in our solar system?",
                "options": ["Jupiter", "Saturn", "Neptune", "Uranus"],
                "answer": "Jupiter"
            },
            {
                "question": "What is the smallest country in the world?",
                "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                "answer": "Vatican City"
            },
            {
                "question": "What is the highest mountain in Africa?",
                "options": ["Mount Kilimanjaro", "Mount Kenya", "Mount Meru", "Mount Elgon"],
                "answer": "Mount Kilimanjaro"
            }
        ]
    },
    {
        "category": "Science",
        "questions": [
            {
                "question": "What is the smallest unit of life?",
                "options": ["Cell", "Atom", "Molecule", "Organ"],
                "answer": "Cell"
            },
            {
                "question": "What is the largest organ in the human body?",
                "options": ["Liver", "Lungs", "Heart", "Skin"],
                "answer": "Skin"
            },
            {
                "question": "What is the process by which plants make their own food?",
                "options": ["Photosynthesis", "Respiration", "Transpiration", "Evaporation"],
                "answer": "Photosynthesis"
            },
            {
                "question": "What is the name of the first man to walk on the moon?",
                "options": ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Alan Shepard"],
                "answer": "Neil Armstrong"
            },
            {
                "question": "What is the name of the force that opposes motion between two surfaces?",
                "options": ["Friction", "Gravity", "Magnetism", "Inertia"],
                "answer": "Friction"
            }
        ]
    },
    {
        "category": "Mathematics",
        "questions": [
            {
                "question": "What is the value of pi (π)?",
                "options": ["3.14", "2.71", "1.62", "4.39"],
                "answer": "3.14"
            },
            {
                "question": "What is the square root of 64?",
                "options": ["6", "8", "10", "12"],
                "answer": "8"
            },
            {
                "question": "What is the formula for the area of a circle?",
                "options": ["πr^2", "2πr", "πd", "2πd"],
                "answer": "πr^2"
            },
            {
                "question": "What is the formula for the Pythagorean theorem?",
                "options": ["a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a^2 + b^2 = c", "a^2 - b^2 = c"],
                "answer": "a^2 + b^2 = c^2"
            },
            {
                "question": "What is the value of x in the equation 2x + 5 = 13?",
                "options": ["3", "4", "6", "8"],
                "answer": "4"
            }
        ]
    },
    {
        "category": "Geography",
        "questions": [
            {
                "question": "What is the capital of Brazil?",
                "options": ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
                "answer": "Brasília"
            },
            {
                "question": "What is the largest desert in the world?",
                "options": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
                "answer": "Antarctica"
            },
            {
                "question": "What is the longest river in the world?",
                "options": ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
                "answer": "Nile River"
            },
            {
                "question": "What is the highest waterfall in the world?",
                "options": ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
                "answer": "Angel Falls"
            },
            {
                "question": "What is the largest country in the world by area?",
                "options": ["Russia", "Canada", "China", "United States"],
                "answer": "Russia"
            }
        ]
    }
    ,
    {

        "category": "Sports",
        "questions": [
            {
                "question": "What is the most popular sport in the world?",
                "options": ["Soccer", "Basketball", "Cricket", "Tennis"],
                "answer": "Soccer"
            },
            {
                "question": "What is the oldest tennis tournament in the world?",
                "options": ["US Open", "Wimbledon", "French Open", "Australian Open"],
                "answer": "Wimbledon"
            },
            {
                "question": "What is the highest score possible in a single turn in bowling?",
                "options": ["200", "250", "300", "350"],
                "answer": "300"
            },
            {
                "question": "What is the name of the first horse to win the Triple Crown?",
                "options": ["Secretariat", "American Pharoah", "Justify", "Seattle Slew"],
                "answer": "Sir Barton"
            },
            {
                "question": "What is the name of the first African American to play in Major League Baseball?",
                "options": ["Jackie Robinson", "Satchel Paige", "Hank Aaron", "Willie Mays"],
                "answer": "Jackie Robinson"
            }
        ]
    },
    {
        "category": "Music",
        "questions": [
            {
                "question": "Who is the lead singer of the band U2?",
                "options": ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
                "answer": "Bono"
            },
            {
                "question": "What is the name of the first album released by The Beatles?",
                "options": ["Please Please Me", "With The Beatles", "A Hard Day's Night", "Beatles for Sale"],
                "answer": "Please Please Me"
            },
            {
                "question": "What is the name of the first female artist to win Album of the Year at the Grammy Awards?",
                "options": ["Adele", "Taylor Swift", "Whitney Houston", "Joni Mitchell"],
                "answer": "Judy Collins"
            },
            {
                "question": "What is the name of the first music video played on MTV?",
                "options": ["Video Killed the Radio Star", "Money for Nothing", "Thriller", "Take on Me"],
                "answer": "Video Killed the Radio Star"
            },
            {
                "question": "What is the name of the first rapper to win the Pulitzer Prize for Music?",
                "options": ["Kendrick Lamar", "Jay-Z", "Nas", "Drake"],
                "answer": "Kendrick Lamar"
            }
        ]
    }


];

// login.addEventListener("click",()=>{
//     let loginVal =  prompt("eneter your name");
//     login.innerText = loginVal;
//     if(login.innerText == "Login"){
//         startButton.addEventListener("click",()=>{
//             alert("Please Login First");
//         })
//     }
//     else if(login.innerText != "Login")
//     {
//         startButton.addEventListener("click",(e)=>{
//             categories.classList.toggle("hide")
//             categories.classList.toggle("show")
//             main.classList.toggle("show")
//             main.classList.toggle("hide")
//         })
//     }
// })

startButton.addEventListener("click", (e) => {
    main.classList.toggle("hide");
    main.classList.toggle("show");
    categories.classList.toggle("hide")
    categories.classList.toggle("show")
})
StartQuiz.addEventListener("click", (e) => {
    categories.classList.toggle("show")
    categories.classList.toggle("hide")
    qouestionBox.classList.remove("hide")
    qouestionBox.classList.add("show")
    const questionData = quizData[currentQuestion].questions[currentQuestion];

    qouestionBox.innerHTML = `<h2>${quizData[currentQuestion].questions[currentQuestion].question}</h2>
    <div class="options">
        <button>#${quizData[currentQuestion].questions[currentQuestion].options[0]}</button>
        <button>#${quizData[currentQuestion].questions[currentQuestion].options[1]}</button>
        <button>#${quizData[currentQuestion].questions[currentQuestion].options[2]}</button>
        <button>#${quizData[currentQuestion].questions[currentQuestion].options[3]}</button>
    </div>
    <div class="bottom">
        <button class="Previous"><img src="./assets/prev arr.svg" alt="">Previous</button>
        <div class="bottom-right">
            <button class="next">Next <img src="./assets/next arr.svg" alt=""></button>
            <button class="skip next">Skip <img src="./assets/skip arr.svg" alt=""></button>
        </div>
    </div>`
    // console.log(quizData[currentQuestion].question[0])
    // console.log(currentQuestion)
    let next = document.querySelector(".next");
    next.addEventListener("click",(e)=>{
        currentQuestion++;
    })
})


// let categoriesClick = 0;
// castegories_box.addEventListener("click", function (e) {
//     if (e.target.classList.contains("tag-badge")) {
//         e.target.classList.toggle("tag-badge-active");
//         categoriesClick++;
//     }
//     if (categoriesClick > 5) {
//         StartQuiz.disabled = false;
//     }
// });
