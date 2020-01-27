let questions = ["q1", "q2", "q3"];
let answers = [["a1", "a2", "a3", "a4"], ["b1", "b2", "b3", "b4"], ["c1", "c2", "c3", "c4"]]
let correct = ["a2", "b3", "c1"]
console.log(answers)
console.log(questions)

function startTimer() {
    let count = 60;
    let handle = setInterval(function () {
        let timerdiv = document.getElementById("timer")
        timerdiv.textContent = count;
        count--;
        if(count < 0) {
            clearInterval(handle)
        }
    }, 1000)
}

let start = document.getElementById("start");

start.addEventListener("click", function() {
    startTimer();
    askQuestions()
})

function askQuestions() {

    for (i = 0; i <questions.length; i++){
        askQuestion(i)
    }

    
}

function askQuestion(n)  {
    console.log(questions[n]);
    document.getElementById("questions1").textContent = questions[n];
    document.getElementById("answer1").textContent = answers[n][0]
    document.getElementById("answer2").textContent = answers[n][1]
    document.getElementById("answer3").textcontent = answers[n][2]
    document.getElementById("answer4").textcontent = answers[n][3]
}

let currentQuestion = 