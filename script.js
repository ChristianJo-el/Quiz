//creating an array with the correct answers
const correctAnswer = ["B", "C", "B", "A"];
const form = document.querySelector(".quiz-form");
const scoreCalc = document.querySelector(".score");
const result = document.querySelector(".result")


//add an event listner of submit and prevent browser from loading on submit
form.addEventListener("submit", e => {
    e.preventDefault();

    //create another array of users answer to get the value of user input
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //initialize a counter to calculate the user score
    let score = 0

    //loop through each answer and compare both arrays

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        }
    });
    scrollTo(0,0);
    result.classList.remove("d-none");
    
    let i = 0;
    const timer = setInterval(() => {
        scoreCalc.textContent = i + "%";
        
        if (i === score) {
          clearInterval(timer);
        }else{
            i++;
        }
    },10);
});

