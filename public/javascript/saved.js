async function savedClickHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/course/saved', {
        method: 'PUT',
        body: JSON.stringify({
            course_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#saved-course').addEventListener('click', savedClickHandler);