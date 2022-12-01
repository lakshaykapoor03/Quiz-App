const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "forEach()",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "reverse()",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "Both the above",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "1995",
  },
];

// const quiz;
// const answerEls;
// const questionEl;
// const a_text;
// const b_text;
// const c_text;
// const d_text;
// const submitBtn;

// const options = document.getElementsByClassName("answer");
const radioButtons = document.querySelectorAll(".answer");
const question = document.getElementById("question");
question.innerText = quizData[0].question;
const submitBtn = document.getElementById("submit");
// console.log(radioButtons);

radioButtons[0].nextElementSibling.innerHTML = quizData[0].a;
radioButtons[1].nextElementSibling.innerHTML = quizData[0].b;
radioButtons[2].nextElementSibling.innerHTML = quizData[0].c;
radioButtons[3].nextElementSibling.innerHTML = quizData[0].d;

// let currentQuiz = 0;
// let score = 0;

let i = 0;

function loadQuiz() {
  let selectedValue;
  for(const radioButton of radioButtons){
    if(radioButton.checked){
      selectedValue=radioButton.nextElementSibling;
    }
   }

  // if(selectedVal.innerText !== quizData[i].correct){
  //   alert('WRONG ANSWER')
  //   return
  // }

  if(selectedValue.innerText!= quizData[i].correct){
    alert("Wrong Answer")
    return
  }

  
  // console.dir(selectedVal);
  // console.log(selectedVal, quizData[i].correct);

  i++;
  question.innerText = quizData[i].question;
  radioButtons[0].nextElementSibling.innerHTML = quizData[i].a;
  radioButtons[1].nextElementSibling.innerHTML = quizData[i].b;
  radioButtons[2].nextElementSibling.innerHTML = quizData[i].c;
  radioButtons[3].nextElementSibling.innerHTML = quizData[i].d;
}


submitBtn.addEventListener("click", loadQuiz);


// function deselectAnswers() {
// }

// function getSelected() {

// }
