document.getElementById("backbutton").addEventListener("click", goBack);

function goBack(){
    window.history.back();
}




document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var joinForm = document.querySelector('.join-container form');

    // Add event listener for form submission
    joinForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Show a confirmation popup
        var confirmation = confirm('the girlies will be in touch. click to go back to the home page');

        // If user clicks OK, redirect to index.html
        if (confirmation) {
            window.location.href = 'index.html';
        }
    });
});


