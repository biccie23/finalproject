// Book Filter

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.book-card').show('1000');
        }
        else{
            $('.book-card').not('.'+value).hide('1000');
            $('.book-card').filter('.'+value).show('1000');

        }
    })
})

const bookGenre = document.querySelectorAll('.list');
cost

for(let i=0; i>)