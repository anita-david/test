const quiz = [{
  question: "What is the name of the current President of Nigeria?",
  option: ["Muhammadu Buhari", "Bola Ahmed Tinubu", "Olusegun Obasanjo", "Goodluck Jonathan"],
  answer: "Bola Ahmed Tinubu"
},
{
  question: "Which Nigerian state has the largest population according to the most recent census?",
  option: ["Lagos", "Kano", "Rivers", "Kaduna"],
  answer: "Lagos"
},
{
  question: "Nigeria recently signed an agreement with a neighboring country to promote cross-border trade. Which country was it?",
  option: ["Benin", "Ghana", "Cameroon", "Chad"],
  answer: "Benin"
},
{
  question: "What is the name of Nigeria's National Security Advisor as of 2023?",
  option: ["Babagana Monguno", "Nuhu Ribadu", "Aliyu Gusau", "Mohammed Bello"],
  answer: "Nuhu Ribadu"
},
{
  question: "Which Nigerian author recently won a prestigious international literary award?",
  option: ["Chimamanda Ngozi Adichie", "Wole Soyinka", "Chigozie Obioma", "Sefi Atta"],
  answer: "Chimamanda Ngozi Adichie"
},
{
  question: "Nigeria's National Identification Number (NIN) is managed by which government agency?",
  option: ["National Identity Management Commission (NIMC)", "Nigerian Immigration Service (NIS)", "National Population Commission (NPC)", "Federal Road Safety Corps (FRSC)"],
  answer: "National Identity Management Commission (NIMC)"
},
{
  question: "What is the official currency of Nigeria?",
  option: ["Dollar", "Naira", "Cedi", "CFA Franc"],
  answer: "Naira"
},
{
  question: "Which international event did Nigeria recently host in 2023?",
  option: ["African Union Summit", "ECOWAS Conference", "African Continental Free Trade Area (AfCFTA) Summit", "Commonwealth Games"],
  answer: "ECOWAS Conference"
},
{
  question: "Nigeria's electoral body is known by what acronym?",
  option: ["INEC", "EFCC", "NDLEA", "NCDC"],
  answer: "INEC"
},
{
  question: "Which Nigerian musician recently won a Grammy Award in 2023?",
  option: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"],
  answer: "Burna Boy"
}
];
  let answers = [];
  let correctAnswer = [];
  let count = 0;
  function saveSelection(selectedQuestion, selectedOption) {
        // create a variable to hold the index of the current selection, if any
    const existingIndex = answers.findIndex(answer => answer.selectedQuestion === selectedQuestion);
    
    if (existingIndex !== -1) {
        // If a selection exists for the current question, replace it with the new selection
        answers[existingIndex] = { selectedQuestion, selectedOption };
    } else {
        // If no selection exists for the current question, add the new selection
        answers.push({ selectedQuestion, selectedOption });
    }
    console.log(answers);
  }
  

  
  function calculateScore(){
    for(i = 0; i < quiz.length; i++){
      correctAnswer.push(quiz[i].answer);
      }  
    for (i = 0; i < answers.length; i++) {
      
      if(answers[i].selectedOption === correctAnswer[i]) {
        count++
        console.log(count); 
      }
    }
  } 

  function submitConfirm() {
 
    document.getElementById('end-page').style['display'] = 'block';
    document.getElementById('q-ten').style['display'] = 'none';
    calculateScore();
    document.getElementById('timer').style.display = 'none';
    document.getElementById('result').innerHTML = `You got ${count} out of 10 questions correct! <br> That's a ${(count/10)*100}% score on average.`
    var endTimeout = setTimeout(timedSubmit, 300000);
    clearTimeout(endTimeout);

  
}

function timedSubmit() {
  
    document.getElementById('end-page').style['display'] = 'block';
    document.getElementById('q-ten').style['display'] = 'none';
    document.getElementById('q-nine').style['display'] = 'none';
    document.getElementById('q-eight').style['display'] = 'none';
    document.getElementById('q-seven').style['display'] = 'none';
    document.getElementById('q-six').style['display'] = 'none';
    document.getElementById('q-five').style['display'] = 'none';
    document.getElementById('q-four').style['display'] = 'none';
    document.getElementById('q-three').style['display'] = 'none';
    document.getElementById('q-two').style['display'] = 'none';
    document.getElementById('q-one').style['display'] = 'none';

    calculateScore();

    document.getElementById('result').innerHTML = `Your total score is ${count}!`
}

let timeLeft = 300; // 5 minutes in seconds
    let timerInterval;

    function startQuiz() {
        document.getElementById('q-one').style.display = 'block';
        document.getElementById('start').style.display = 'none';
        document.getElementById('timer').style.display = 'block';
        startTimer();
    }

    function startTimer() {
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timedSubmit();
            } else {
                timeLeft--;
                updateTimerDisplay();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

   
