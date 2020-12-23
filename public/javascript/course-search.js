async function searchClickHandler(event) {
    event.preventDefault();
    let search = document.getElementById("search_term").value
    document.location.replace('/courses?city=' + search);

}

document.querySelector('#search-course').addEventListener('click', searchClickHandler);