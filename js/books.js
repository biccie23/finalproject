document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const bookGallery = document.querySelector(".book-gallery");
    const books = bookGallery.querySelectorAll(".book");

    // Function to filter books
    const filterBooks = (e) => {
        // Remove the 'active' class from all filter buttons
        filterButtons.forEach(button => button.classList.remove("active"));
        // Add the 'active' class to the clicked button
        e.target.classList.add("active");

        const filterValue = e.target.dataset.filter;

        // Loop through each book
        books.forEach(book => {
            if (filterValue === "all" || book.dataset.name === filterValue) {
                book.classList.remove("hide");
            } else {
                book.classList.add("hide");
            }
        });
    };

    // Add click event listener to each filter button
    filterButtons.forEach(button => button.addEventListener("click", filterBooks));
});







// const filterGenres = document.querySelectorAll("#filter-buttons button");
// const filterableBooks = document.querySelectorAll(".book-gallery .book");

// const filterBooks = (e) => {
//     // Remove the 'active' class from all filter buttons
//     filterGenres.forEach(button => button.classList.remove("active"));
//     // Add the 'active' class to the clicked button
//     e.target.classList.add("active");

//     // Loop through each book
//     filterableBooks.forEach(book => {
//         // If the book matches the filter or the filter is 'all', show it; otherwise, hide it
//         if (e.target.dataset.filter === "all" || book.dataset.name === e.target.dataset.filter) {
//             book.classList.replace("hide", "show");
//         } else {
//             book.classList.replace("show", "hide");
//         }
//     });
// };

// // Add click event listener to each filter button
// filterGenres.forEach(button => button.addEventListener("click", filterBooks));






// window.onload = () => {
//     filterGenres.oncliick = (selectedItem) =>{ //when user clicks on a filter button
//         if(selectedItem.target.classList.contains("genre")){
//             filterGenres.querySelector(".active").classList.remove("active");
//             selectedItem.target.classList.add("active");
//             let filterGenres = selectedItem.target.getAttribute("data-name");
            
//             filterableBooks.forEach((book) =>{
//                 let filterBooks = book.getAttribute("data-name");

//                 if((filterBooks == filterGenres) || (filterGenres == "all")){
//                     book.classList.remove("hide");
//                     book.classList.add("show");
//                 }
//                 else{
//                     book.classList.add("hide");
//                     book.classList.remove("show");
//                 }
//             });
//         }
//     }   
//     for(let i=0; i< filterableBooks.length; i++){
//         filterBook[i].setAttribute("onclick", "preview(this");
//     }	
// }