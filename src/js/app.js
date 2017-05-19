console.log('JS loaded');

console.log('JS WORKS');

var correctCards = 0;
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

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  const $cardSlots = $('#cardSlots');

  const a = 'This is a';
  const b = 'This is b';
  const c = 'This is c';
  const d = 'This is d';
  const e = 'This is e';


  function shuffleArray(array) {
    // fisher-yates shuffle
    const newArray = array.slice(0);
    newArray.sort( function() {
      return Math.random() - 0.5;
    });
    return newArray;
  }

  const numbers = ['a', 'b', 'c', 'd', 'e'];
  const shuffledNumbers = shuffleArray(numbers);
// Create the card slots
  function valueAssign() {
    for ( let i=0; i<numbers.length; i++ ) {
      console.log(Object.values(numbers[i]));
      $('<div />', { text: numbers[i], 'data-position': i + 1 }).appendTo('#cardSlots')
      .droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
      } );
    }
  }
  valueAssign();
  //  // Create the pile of shuffled cards
  function keyAssign(){

    for ( let i=0; i<shuffledNumbers.length; i++ ) {
      $('<div />', { text: shuffledNumbers[i], 'data-position': numbers.indexOf(shuffledNumbers[i]) + 1 }).attr( 'id', 'card'+i ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
      } );
    }
  }
  keyAssign();



}

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

  if ( correctCards === 10 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }

}
