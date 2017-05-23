console.log('JS loaded');

let correctCards = 0;
let turnNumber = 1;

const numbersTwo = ['Proton', 'Neutron', 'Positron', '\u03C0+','\u03C0-', 'K+','K-','\u03C0\u2070'];
const numbersThree =['Gravitational', 'Gravitational1', 'weak', 'weak1', 'EM', 'EM1', 'Strong', 'Strong1'];
const numbersOne = ['Proton', 'Neutron', 'Electron', 'Positron', 'Pion+', 'Kaon+', 'kaon-', 'Pion'];

const slotsTwo= ['uud', 'udd','\u203Eu','u-d', '-ud','-ud', '-du', 'u-u'];
const slotsThree = ['affects all particles with mass', 'infinite range', 'affects all particles', 'responsable for beta decay', 'affects all particles with charge', 'infinite range', 'affects hadrons', 'very short range'];
const slotsOne = ['p', 'n','e', 'p-','\u03C0+', 'K+','K-','\u03C0\u2070'];

let shuffledNumbers= [];
let slots =slotsOne;
let numbers = numbersOne;

let correctClassification = 0;


//run function for the first time for turn 1.
$( init );

function init() {
  // Show only the first game.
  $('#levelTwo').hide();
  $('#levelThree').hide();

  //show only one pair of arrays at a time
  shuffledNumbers = shuffleArray(numbers);
  console.log(slots);
  console.log(numbers);
  cardSlotAssign(slots);
  cardAssign(numbers);
  //skip button for development purposes only.
  $('.skip-button').click(() => {
    $('#levelTwo').show();
    $('#levelTwo').animate( {

      opacity: 1
    } );
    levelTwoPlay();
  });
}

// Reset the game
correctCards = 0;
$('#cardPile').html( '' );

//to shuffle the cards so it is different each time for the player.
function shuffleArray(array) {
  // fisher-yates shuffle
  const newArray = array.slice(0);
  newArray.sort( function() {
    return Math.random() - 0.5;
  });
  return newArray;
}

// Create the card slots
function cardSlotAssign() {
  for ( let i=0; i<slots.length; i++ ) {
    $('<div />', { text: slots[i], 'data-position': i + 1 }).appendTo('#cardSlots')
    .droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }
}

// Create the pile of shuffled cards
function cardAssign(){

  for ( let i=0; i<shuffledNumbers.length; i++ ) {
    $('<div />', { text: shuffledNumbers[i], 'data-position': numbers.indexOf(shuffledNumbers[i]) + 1 }).attr( 'id', 'card'+i ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }
}
//dragging the cards to the right slot.
function handleCardDrop( event, ui ) {

  var slotNumber = $(this).data('position');
  var cardNumber = ui.draggable.data('position');
  console.log(slotNumber, cardNumber);
  // If the card was dropped to the correct slot,change the card colour, position it directly
  // on top of the slot, and prevent it being dragged again
  if ( slotNumber === cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  }
  // If all the cards have been placed correctly move onto next round, unless final round, display success message.
  //to take player to 2nd round
  if (correctCards === 8 && turnNumber === 1){
    slots = slotsTwo;
    numbers = numbersTwo;
    turnNumber++;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    init();
    //to take player onto the 3rd round.
  } else if (correctCards === 16 && turnNumber === 2){
    slots = slotsThree;
    numbers = numbersThree;
    turnNumber++;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    init();
    //to complete level 1
  } else if ( correctCards === 24 && turnNumber === 3) {
    console.log('COMPLETED!');
    $('#levelTwo').show();
    $('#levelTwo').animate( {
      opacity: 1
    } );
    $('#levelThree').hide();
    levelTwoPlay();
  }
}
//END OF LEVEL 1//////START OF LEVEL 2/////
function levelTwoPlay() {
  console.log('levelTwoPlay');
  console.log($('.unclassifiedParticle'));
  $('.unclassifiedParticle').draggable({
    containment: 'levelTwo',
    revert: true

  });

  $('#mesons').droppable({
    accept: '.mesons',
    drop: levelTwoDropEvent

  });
  $('#baryons').droppable({
    accept: '.baryons',
    drop: levelTwoDropEvent
  });
  $('#lepton').droppable({
    accept: '.leptons',
    drop: levelTwoDropEvent
  });
}

function levelTwoDropEvent( event, ui ) {
  var particleDiv = $(this).data('position');
  var particleClassification = ui.draggable.data('position');
  if (particleDiv === particleClassification){
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'option', 'revert', false );
    correctClassification ++;
    console.log(correctClassification);

    if ( correctClassification === 10) {
      console.log('Level Three');
      $('#levelThree').show();
      $('#levelThree').animate( {
        opacity: 1
      } );
      levelThreePlay();
      buttonClick();
    }
  }
}

const questions =[
  {
    answer: 'a',
    question: `Which of the fundamental forces do Lepton's not experience?`,
    options: [`Strong Nuclear Force`, `Weak Interaction`, `Electromagnetic force`]
  },
  {
    answer: 'c',
    question: `What is the charm quark's anti quark?`,
    options: [`Up`, `Top`, `Strange`]
  },
  {
    answer: 'c',
    question: `Which particle type consists of quark-antiquark pairs?`,
    options: [`Baryon`, `Lepton`, `Meson`]
  },
  {
    answer: 'a',
    question: `When is strangeness not conserved?`,
    options: [`weak interaction`, `electromagnetic force`, `gravitational force`]
  },
  {
    answer: 'b',
    question: `Which of the following is not a Lepton?`,
    options: [`Muon`, `Neutron`, `Tau`]
  }
];
let answer = '';
let correctQuestion = 0;
let actualAnswer = '';
let round = 0;
function levelThreePlay (){
  console.log('start of level 3');
  // for (let i = 0; i<questions.length; i++){
    //to generate the question for each round
  const chosenQuestion = questions[round].question;
  const answerA = questions[round].options[0];
  const answerB = questions[round].options[1];
  const answerC = questions[round].options[2];
  actualAnswer = questions[round].answer;
  //to print the questions and the buttons
  $('div.questions').html(chosenQuestion);
  $('button.a').html(answerA);
  $('button.b').html(answerB);
  $('button.c').html(answerC);
  console.log('answer = ' + actualAnswer);
  // }

  //to determine if answer is correct.

}

function buttonClick(){

  $('.roundThree button').click((e) => {
    const $button = $(e.target);
    const answer = $button.attr('class');

    if (answer === actualAnswer){
      console.log('correct');
      correctQuestion++;
      console.log('correctQuestion=' + correctQuestion);
    }
    if(round <= 3) {
      round++;
      levelThreePlay();
    } else {
      $('div.questions').html('end of game ' + correctQuestion +'/5');
    }

  });

  // $('.a').click(() => {
  //   let answer = 'a';
  //   console.log(answer);
  //
  // });
  //
  // $('.b').click(() => {
  //   let answer = 'b';
  //   console.log(answer);
  // });
  //
  // $('.c').click(() => {
  //   let answer = 'c';
  //   console.log(answer);
  // });


}
