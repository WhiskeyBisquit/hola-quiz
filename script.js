'use strict';

let question_1 = 'Кто солнышко?';
let question_2 = 'О ком/о чем автор этой игры думает all the time?';
let question_3 =
  'Назовите самую восхитительную девушку в мире по версии автора?';

let answer_1 = 'Оля';
let answer_2a = 'Об Оле';
let answer_2b = 'О негрони';
let answer_2c = 'Об удоне';

let questionText = document.getElementById('question');
let btn1 = document.getElementById('answer1');
let btn2 = document.getElementById('answer2');
let btn3 = document.getElementById('answer3');
let btn4 = document.querySelector('.play');

let correctAnswer = '';

// Changing a question
const displayQuestion = question => {
  questionText.textContent = question;
};

// Start game
btn4.addEventListener('click', function () {
  btn4.classList.toggle('hidden');
  questionText.classList.toggle('hidden');
  btn1.classList.toggle('hidden');
  displayQuestion(question_1);
  btn1.textContent = answer_1;
});

const play = () => {
  if (questionText.textContent === question_1) {
    correctAnswer = answer_1;
  } else if (questionText.textContent === question_2) {
    correctAnswer = answer_2a;
  } else {
    correctAnswer = answer_1;
  }
};
play();

const answerButtons = document.querySelector('.answer-box');
const round = () => {
  answerButtons.addEventListener('click', event => {
    const isButton = event.target.nodeName === 'BUTTON';
    let buttonCheck = event.target.textContent;
    if (!isButton) {
      return;
    }

    function nextRound() {
      if (buttonCheck === correctAnswer && correctAnswer === answer_2a) {
        displayQuestion(question_3);
        btn1.textContent = answer_1;
        btn2.classList.toggle('hidden');
        btn3.classList.toggle('hidden');
        play();
      } else if (
        buttonCheck === correctAnswer &&
        correctAnswer === answer_1 &&
        questionText.textContent === question_3
      ) {
        btn1.classList.toggle('hidden');
        questionText.classList.toggle('hidden');
        document.getElementById('victory').classList.toggle('hidden');

        //////////////////////////////////////////
        var scalar = 3;
        var heart = confetti.shapeFromText({ text: '💘', scalar });

        var defaults = {
          spread: 360,
          ticks: 100,
          gravity: 0,
          decay: 0.96,
          startVelocity: 20,
          shapes: [heart],
          scalar,
        };

        function shoot() {
          confetti({
            ...defaults,
            particleCount: 50,
          });

          confetti({
            ...defaults,
            particleCount: 5,
            flat: true,
          });

          confetti({
            ...defaults,
            particleCount: 15,
            scalar: scalar / 2,
            shapes: ['circle'],
          });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 400);
        setTimeout(shoot, 600);
        setTimeout(shoot, 800);
        //////////////////////////////////////////
      } else if (buttonCheck === correctAnswer) {
        displayQuestion(question_2);
        btn1.textContent = answer_2a;
        btn2.classList.toggle('hidden');
        btn2.textContent = answer_2b;
        btn3.classList.toggle('hidden');
        btn3.textContent = answer_2c;
        play();
      }
    }
    nextRound();
  });
};

round();
