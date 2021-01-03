var currentQuestion = 0;
var score =0;
var totQuestion = question.length;
var abc=0;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton =document.getElementById('nextButton');
var resultCount = document.getElementById('result');

 function loadQuestion (questionIndex){
   var q = question[questionIndex];
   questionEl.textContent = (questionIndex + 1) +'.'+q.question;
   opt1.textContent =q.option1;
   opt2.textContent =q.option2;
   opt3.textContent =q.option3;
   opt4.textContent =q.option4;
 };
  loadQuestion(currentQuestion);
function loadNextQuestion(){
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
  alert('Please select your answe!');
  return;
  }
  var answer =selectedOption.value;
  if(question[currentQuestion].answer == answer){
    abc=1;
    score += 1;
  }
  selectedOption.checked=false;
  currentQuestion++;
  if(currentQuestion == totQuestion -1){
    nextButton.textContent= 'Finish';
  }
  if(currentQuestion == totQuestion){
    container.style.display= 'none';
    result.style.display= '';
    resultCount.textContent = 'Your Score : '+score;
    return;
  }
  loadQuestion(currentQuestion);
}

function check(){
if(abc==1){
  alert("true");
  abc=0;
}
else {
    alert("false");
    abc=0;
}
}
