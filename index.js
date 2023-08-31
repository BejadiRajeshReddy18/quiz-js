const correctAnswer = ["B","C","C","A","C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const quesions = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();

    let score = 0;
    const userAnwers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    userAnwers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score+=1
            quesions[index].classList.add("correct");
        }else{
            quesions[index].classList.add("wrong");
        }
    })
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/5!`
});