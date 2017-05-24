console.log('JS loaded');

//level one constants///
let correctCards = 0;
let turnNumber = 1;

const numbersTwo = ['Proton', 'Neutron', 'k\u2070', '\u03C0+','\u03C0-', 'K+','K-','\u03C0\u2070'];
const numbersThree =['Gravitational', 'Gravitational1', 'weak', 'weak1', 'EM', 'EM1', 'Strong', 'Strong1'];
const numbersOne = ['Proton', 'Neutron', 'Electron', 'Positron', 'tau', 'Kaon+', 'Muon', 'Pion'];

const slotsTwo= ['uud', 'udd','ds\u0304','u\u0304d', 'd\u0304u','us\u0304', 'u\u0304s', 'uu\u0304'];
const slotsThree = ['affects all particles with mass', 'infinite range', 'affects all particles', 'responsable for beta decay', 'affects all particles with charge', 'infinite range', 'affects hadrons', 'very short range'];
const slotsOne = ['p', 'n','e', 'p\u0304','\u03C4', 'K+','\u03BC','\u03C0\u2070'];

let shuffledNumbers= [];
let slots =slotsOne;
let numbers = numbersOne;

let levelOneStart = '';
let levelOneEnd = '';
let levelOneScore = '';

//level two constants////

let levelTwoStart = '';
let levelTwoEnd = '';
let levelTwoScore = '';

//level three constants///
let correctClassification = 0;
const questions =[
  {
    answer: 'a answer-button',
    question: `Which of the fundamental forces do Lepton's not experience?`,
    options: [`Strong Nuclear Force`, `Weak Interaction`, `Electromagnetic force`]
  },
  {
    answer: 'c answer-button',
    question: `What is the charm quark's anti quark?`,
    options: [`Up`, `Top`, `Strange`]
  },
  {
    answer: 'c answer-button',
    question: `Which particle type consists of quark-antiquark pairs?`,
    options: [`Baryon`, `Lepton`, `Meson`]
  },
  {
    answer: 'a answer-button',
    question: `When is strangeness not conserved?`,
    options: [`weak interaction`, `electromagnetic force`, `gravitational force`]
  },
  {
    answer: 'b answer-button',
    question: `Which of the following is not a Lepton?`,
    options: [`Muon`, `Neutron`, `Tau`]
  }
];

let levelThreeScore = 0;
let actualAnswer = '';
let round = 0;

//////////////////end of constants////////////////////////////////


//run function for the first time for turn 1.

$(levelOnePlay );

function levelOnePlay() {
  // Show only the first game.
  //show only one pair of arrays at a time
  shuffledNumbers = shuffleArray(numbers);
  cardSlotAssign(slots);
  cardAssign(numbers);
  //start button to collect time stamp.
  $('.start-button').click(() => {
    console.log('welcome clicked!');
    $('#welcome').hide(10);
    $('#levelOne').show(500);
    levelOneStart = (new Date()).getTime();
    console.log(levelOneStart);

  });
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
      containment: '#levelOne',
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
    console.log(correctCards);
  }
  // If all the cards have been placed correctly move onto next round, unless final round, display success message.
  if (correctCards === 8 && turnNumber === 1){
    slots = slotsTwo;
    numbers = numbersTwo;
    turnNumber++;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    levelOnePlay();
    //to take player onto the 3rd round.
  } else if (correctCards === 16 && turnNumber === 2){
    slots = slotsThree;
    numbers = numbersThree;
    turnNumber++;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    levelOnePlay();
    //to complete level 1
  } else if ( correctCards === 24 && turnNumber === 3) {
    levelOneEnd = (new Date()).getTime();
    levelOneScore = Math.round((100 - ((levelOneEnd - levelOneStart)/1000))/10);
    console.log(levelOneScore);
    $('#levelTwo').show();
    console.log('leveltworevealed');
    levelTwoStart = (new Date()).getTime();
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

    if ( correctClassification === 10) {
      levelTwoEnd = (new Date()).getTime();
      levelTwoScore = Math.round((100 - ((levelTwoEnd - levelTwoStart)/1000))/10);
      console.log(levelTwoScore);
      console.log('Level Three');
      //Reveal level three and hide level two.
      $('#levelThree').show().animate( {
        opacity: 1
      } );
      $('#levelTwo').hide();

      levelThreePlay();
      buttonClick();
    }
  }
}

//////////////////////////level 3///////////////////////////////////////////
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
}


function buttonClick(){
  $('.roundThree button').click((e) => {
    const $button = $(e.target);
    const answer = $button.attr('class');

    if (answer === actualAnswer){
      levelThreeScore++;
    }
    if(round <= 3) {
      round++;
      levelThreePlay();
    } else {
      console.log('results');

      //assigning colours to divs for the results

      $( 'div.feedbackOne p' ).html(levelOneScore);
      if (levelOneScore > 4){
        $('.feedbackOne').addClass('good');
      } if (levelOneScore === 3 || levelOneScore === 4){
        $('.feedbackOne').addClass('average');
      } if(levelOneScore < 3){
        $('.feedbackOne').addClass('bad');
      }
      $( 'div.feedbackTwo p' ).html(levelTwoScore);
      if (levelTwoScore > 6){
        $('.feedbackTwo').addClass('good');
      } if (levelTwoScore === 5 || levelTwoScore === 6){
        $('.feedbackTwo').addClass('average');
      } if (levelTwoScore < 5){
        $('.feedbackTwo').addClass('bad');
      }
      $( 'div.feedbackThree p' ).html(levelThreeScore);
      if (levelThreeScore > 4){
        $('.feedbackThree').addClass('good');
      } if (levelThreeScore === 3 || levelThreeScore === 4){
        $('.feedbackThree').addClass('average');
      } if (levelThreeScore < 3){
        $('.feedbackThree').addClass('bad');
      }
      console.log('student feedback loading');
      $('#studentFeedback').show().animate( {
        opacity: 1
      } );

    }
  });
}
