'use strict';

let answerOne = prompt('Am I under 30 years old?').toLowerCase();

if(answerOne === 'y' || answerOne === 'yes'){
  alert('You are correct!');
}else if(answerOne === 'n'|| answerOne === 'no'){
  alert('Sorry, you are incorrect');
}

let answerTwo = prompt('Do I like to BBQ?').toLowerCase();

if(answerTwo === 'y' || answerTwo === 'yes'){
  alert('You are correct!');
}else if(answerTwo === 'n'|| answerTwo === 'no'){
  alert('Sorry, you are incorrect');
}

let answerThree = prompt('Do I enjoy scary movies?').toLowerCase();

if(answerThree === 'y' || answerThree === 'yes'){
  alert('You are correct!');
}else if(answerThree === 'n'|| answerThree === 'no'){
  alert('Sorry, you are incorrect');
}

let answerFour = prompt('Have I driven cross country more than once?').toLowerCase();

if(answerFour === 'y' || answerFour === 'yes'){
  alert('You are correct!');
}else if(answerFour === 'n'|| answerFour === 'no'){
  alert('Sorry, you are incorrect');
}

let answerFive = prompt('Can I turn Super Sayain?').toLowerCase();

if(answerFive === 'y' || answerFive === 'yes'){
  alert('Sorry you are incorrect! This is real life not anime.');
}else if(answerFive === 'n'|| answerFive === 'no'){
  alert('You are correct!');
}

let responeOne = prompt('What is your name?');

alert('Hello  ' + responeOne + ' Welcome to my page I am glad you found it. Any questions please feel free to ask. ' + 'Agian thank you for stopping by ' + responeOne + '!');
console.log('user response to q1 was ' + responeOne);
