
    // Get all the buttons inside card headers
    var buttons = document.querySelectorAll('.card-header button');

    // Loop through each button
    buttons.forEach(function(button) {
        // Add event listener for click event
        button.addEventListener('click', function() {
            // Get the parent card header div
            var cardHeader = this.closest('.card-header');
            // Toggle a class on the parent card header div
            cardHeader.classList.toggle('selected');
        });
    });







// //get all of the buttons inside the faq which are within the card-header class
// var questions = document.querySelectorAll('.card-header button');

// //loop through all the buttons and add an event listener for when that question

// questions.forEach(function(question){

//     question.addEventListener('mouseover', function()){
//         var cardHeader = this.closest('.card-header');
//         cardHeader.classList.add('selected');
//     }
// })