const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = '';
//input.question("Who was the first American woman in space?");
let correctAnswer = "Sally Ride?";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size of the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("What is your name, candidate? ") 
console.log(`Good luck on the test, ${candidateName}!`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
    console.log(questions[i]);
    let tempAnswer = input.question("Your answer: ");
    candidateAnswers.push(tempAnswer);
    console.log (`Correct Answer: ${correctAnswers[i]}\n`)
  }
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

// insert if else statement here
for (let i=0; i< questions.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  grade++;
  }
}

let percent = (grade/questions.length)*100
//take total grade and determine if they pass (80%)

console.log(`>>> Overall Grade: ${percent}% (${grade} of $   {questions.length} responses correct) <<<`)
  if (percent >=80) {
    console.log('STATUS: PASSED');
    }else{
    console.log('STATUS: FAILED');
  };
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions, 
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};