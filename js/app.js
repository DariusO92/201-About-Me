'use strict';

let finalScore = 0;

function q1(){
  let answerOne = prompt('Am I under 30 years old?').toLowerCase();

  if(answerOne === 'y' || answerOne === 'yes'){
    alert('You are correct!');
    finalScore++;
  }else if(answerOne === 'n'|| answerOne === 'no'){
    alert('Sorry, you are incorrect');
  }

}

function q2(){

  let answerTwo = prompt('Do I like to BBQ?').toLowerCase();
  
  if(answerTwo === 'y' || answerTwo === 'yes'){
    alert('You are correct!');
    finalScore++;
  }else if(answerTwo === 'n'|| answerTwo === 'no'){
    alert('Sorry, you are incorrect');
  }
}

function q3(){

  let answerThree = prompt('Do I enjoy scary movies?').toLowerCase();
  
  if(answerThree === 'y' || answerThree === 'yes'){
    alert('You are correct! I love a good horror movie!!!');
    finalScore++;
  }else if(answerThree === 'n'|| answerThree === 'no'){
    alert('Sorry, you are incorrect');
  }
}

function q4(){

  let answerFour = prompt('Have I driven cross country more than once?').toLowerCase();
  
  if(answerFour === 'y' || answerFour === 'yes'){
    alert('You are correct! I/ve done it 5 times!');
    finalScore++;
  }else if(answerFour === 'n'|| answerFour === 'no'){
    alert('Sorry, you are incorrect');
  }
}

function q5(){

  let answerFive = prompt('Can I turn Super Sayain?').toLowerCase();
  
  if(answerFive === 'y' || answerFive === 'yes'){
    alert('Sorry you are incorrect! This is real life not anime.');
  }else if(answerFive === 'n'|| answerFive === 'no'){
    alert('You are correct!');
    finalScore++;
  }
}

function q6(){
  let responeOne = prompt('What is your name?');

  alert('Hello  ' + responeOne + ' Welcome to my page I am glad you found it. Any questions please feel free to ask. ' + 'Agian thank you for stopping by ' + responeOne + '!');
  console.log('user response to q1 was ' + responeOne);

}

function q7(){
  let myNumber = 85;
  let guesses = 4;

  while(guesses > 0){
    let userGuess = prompt('Whats my favorite football jersey number?');
    if(userGuess < myNumber){
      guesses--;
      alert('Sorry that is too low try again. You have '+ guesses +' guesses left');
    }else if(userGuess > myNumber){
      guesses--;
      alert('Sorry that is too high try again. You have '+ guesses +' guesses left');
    } else{
      alert('You guessed correctly!');
      finalScore++;
      break;
    }

  }

}

function q8(){

  let myJerseyNumbers = ['54', '90', '77', '68'];
  let numberOfTries = 6;
  while(numberOfTries){
    numberOfTries--;
    let jerseyGuess = prompt('Guess what jersey numbers I have worn.').toLowerCase();
    for(let i = 0; i < myJerseyNumbers.length; i++){
      if(jerseyGuess === myJerseyNumbers[i]){
        alert(`WINNER WINNER CHICKEN DINNER!! Yes I have worn ${myJerseyNumbers[i]}!`);
        finalScore++;
        numberOfTries = 0;
      }
    }
  }

}
q1(); q2(); q3(); q4(); q5(); q6(); q7(); q8();
alert(`I have been keeping track of your correct answers. Final score:${finalScore}.`);

