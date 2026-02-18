/* COUNTDOWN */
const weddingDate = new Date("2026-04-26T18:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "🎉 It's Wedding Time! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
        `${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec`;
}, 1000);


/* QUIZ LOGIC */
let score = 0;
const scoreElement = document.getElementById("score");

document.querySelectorAll(".question").forEach(question => {
    const correctAnswer = question.dataset.answer;
    const buttons = question.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (question.classList.contains("answered")) return;

            question.classList.add("answered");

            if (button.innerText === correctAnswer) {
                button.classList.add("correct");
                score++;
                scoreElement.innerText = score;
            } else {
                button.classList.add("wrong");
                buttons.forEach(btn => {
                    if (btn.innerText === correctAnswer) {
                        btn.classList.add("correct");
                    }
                });
            }
        });
    });
});
