async function upvoteClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/posts/rate', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
            // course_id
            //user_id
            //rating
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.rate-btn').addEventListener('click', upvoteClickHandler);