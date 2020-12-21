async function searchClickHandler(event) {
    event.preventDefault();

    document.location.replace('/courses');
    
}

document.querySelector('#search-course').addEventListener('click', searchClickHandler);