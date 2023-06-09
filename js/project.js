//make a variable for user's first choice
let choice = 'X';

//make function that has an (event) parameter 
const addX = function(event) {
    const tileElement = event.currentTarget;//getting the element the event targeted
    // let tileText = $(tileElement).text();//getting the tileElement and getting the text and assigning it to tileText(in a new variable)
    let playerChoice = $(tileElement).find('.playerChoice')


    //allows for players to take turns
    if (!playerChoice.length) {
        // $(tileElement).text(choice);//sets the text of tileElement to be (choice)
        $(tileElement).text('');
        $(tileElement).append(`<span class="playerChoice">${choice}</span>`);

        if (choice === 'X') {
            choice = 'O';
        } else if (choice === 'O') {
            choice = 'X';
        } 
    }
    checkWinner();
}

//check winning conditions
const checkWinner = function() {
    //check horizontal X
    if (
        $('#1').text() == 'X' && $('#2').text() == 'X' && $('#3').text() == 'X' ||
        $('#4').text() == 'X' && $('#5').text() == 'X' && $('#6').text() == 'X' ||
        $('#7').text() == 'X' && $('#8').text() == 'X' && $('#9').text() == 'X'
    ) {
        $('.result').show();
        $('#winningMessage').text('PLAYER X WINS!');
        return;
    } else if (
        $('#1').text() == 'O' && $('#2').text() == 'O' && $('#3').text() == 'O' ||
        $('#4').text() == 'O' && $('#5').text() == 'O' && $('#6').text() == 'O' ||
        $('#7').text() == 'O' && $('#8').text() == 'O' && $('#9').text() == 'O'
    ) {
        $('.result').show();
        $('#winningMessage').text('PLAYER O WINS!');
        return;
    }

    //check vertical X
    if (
        $('#1').text() == 'X' && $('#4').text() == 'X' && $('#7').text() == 'X' ||
        $('#2').text() == 'X' && $('#5').text() == 'X' && $('#8').text() == 'X' ||
        $('#3').text() == 'X' && $('#6').text() == 'X' && $('#9').text() == 'X'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER X WINS!');
        return;
    } else if (
        $('#1').text() == 'O' && $('#4').text() == 'O' && $('#7').text() == 'O' ||
        $('#2').text() == 'O' && $('#5').text() == 'O' && $('#8').text() == 'O' ||
        $('#3').text() == 'O' && $('#6').text() == 'O' && $('#9').text() == 'O'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER O WINS!');
        return;
    } 

    //check diagonal X
    if ($('#1').text() == 'X' && $('#5').text() == 'X' && $('#9').text() == 'X' || 
        $('#3').text() == 'X' && $('#5').text() == 'X' && $('#7').text() == 'X'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER X WINS!');
        return;
    } else if (
        $('#1').text() == 'O' && $('#5').text() == 'O' && $('#9').text() == 'O' || 
        $('#3').text() == 'O' && $('#5').text() == 'O' && $('#7').text() == 'O'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER O WINS!');
        return;
    }

    //check draw
    if ($('#1').text() && $('#2').text() && $('#3').text() && $('#4').text() && $('#5').text() && $('#6').text() && $('#7').text() && $('#8').text() && $('#9').text()) {
        $('.result').show()
        $('#winningMessage').text('DRAW!')
        return;
    }
}

const showPreview = function(event) {
    const tileElement = event.currentTarget;
    let playerChoice = $(tileElement).text();

    if (!(playerChoice)) {
        $(tileElement).append(`<span class="previewChoice">${choice}</span>`);
    }
}

const removePreview = function(event) {
    const tileElement = event.currentTarget;
    let previewElement = $('.previewChoice')
    previewElement.remove();
    
}

const hideResult = function() {
    $('.result').hide()
    $('.tile').text('')
    choice = 'X';
}
//when .tile is clicked it will call addX function
const init = function() {
    $('.tile').on('click', addX);
    $('.tile').on('mouseenter', showPreview);
    $('.tile').on('mouseleave', removePreview);
    $('#resetButton').on('click', hideResult);
}
//when doc is ready run (init)
$(document).ready(init)