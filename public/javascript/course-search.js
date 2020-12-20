async function searchClickHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/course/', {
        method: 'GET',            
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/courses');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#search-course').addEventListener('click', searchClickHandler);