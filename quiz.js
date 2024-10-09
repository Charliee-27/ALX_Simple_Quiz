function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        // Handle incorrect answer case
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

// let number = 0

// if (number > 0) {
// console.log(number + ' ' + 'is positive')
// } else if (number < 0) {
//     console.log(number + ' ' + 'is negative')
// } else {
//     console.log(number + ' ' + 'is zero')
// }

// for (let i=1; i<=10; i++) {
//     console.log('the initial value is' + ' ' + i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// function sum(num1, num2) {
//     return num1 + num2;
//   }
  
//   const result = sum(5, 3);
//   console.log("The sum is:", result);
  