console.log('JS loaded');

let correctCards = 0;

const numbers2 = ['Proton', 'Neutron', 'Positron', '\u03C0+','\u03C0-', 'K+','K-','\u03C0\u2070'];
const numbers3 =['Gravitational', 'Gravitational1', 'weak', 'weak1', 'EM', 'EM1', 'Strong', 'Strong1'];
let numbers1 = ['Proton', 'Neutron', 'Electron', 'Positron', 'Pion+', 'Kaon+', 'kaon-', 'Pion'];

const slots2= ['uud', 'udd','\u203Eu','u-d', '-ud','-ud', '-du', 'u-u'];
const slots3 = ['affects all particles with mass', 'infinite range', 'affects all particles', 'responsable for beta decay', 'affects all particles with charge', 'infinite range', 'affects hadrons', 'very short range'];
let slots1 = ['p', 'n','e', 'p-','\u03C0+', 'K+','K-','\u03C0\u2070'];

let shuffledNumbers= [];
const numbersDeck = [numbers1, numbers2, numbers3];
const slotDeck = [slots1, slots2, slots3];
let slots =slots1;
let numbers = numbers1;

$( init );

function init() {
  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
  //show only one pair of arrays at a time
  shuffledNumbers = shuffleArray(numbers);
  console.log(slots);
  console.log(numbers);
  cardSlotAssign();
  cardAssign();
}





// Reset the game

correctCards = 0;
$('#cardPile').html( '' );




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
  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again
  if ( slotNumber === cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  }

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go
  if ( correctCards === 8 ) {
    // $('#successMessage').show();
    // $('#successMessage').animate( {
    //   left: '380px',
    //   top: '200px',
    //   width: '400px',
    //   height: '100px',
    //   opacity: 1
    // } );
    for (let j=1; j<3; j++){
      slots = slotDeck[j];
      numbers = numbersDeck[j];

      init();




    }
  }
}
