const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const emo1 = document.querySelector('.emo1');
const emo2 = document.querySelector('.emo2');
const emo3 = document.querySelector('.emo3');
const emo4 = document.querySelector('.emo4');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
     
    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    result.querySelector('span').style.fontWeight = 'bolder';
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
         output++
       }
    }, 10);
    if (score === 100) {
        emo1.classList.remove('d-none');
         emo2.classList.add('d-none');
         p2.classList.add('d-none');

    } else if (score === 75) {
        emo2.classList.remove('d-none');
        // emo3.classList.add('d-none');
         p1.classList.add('d-none');
    } else if (score === 50) {
        emo3.classList.remove('d-none');
         emo4.classList.add('d-none');
        p1.classList.add('d-none');
         p2.classList.add('d-none');
    } else if (score < 50) {
        emo4.classList.remove('d-none');
        emo3.classList.add('d-none');
         p1.classList.add('d-none');
         p2.classList.add('d-none');
    }
});
