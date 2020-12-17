async function upvoteClickHandler(event) {
    event.preventDefault();

    const rating = document.querySelector('input[name="course-id"]').value;
    const response = await fetch('/api/posts/rate', {
        method: 'PUT',
        body: JSON.stringify({
            rating: id
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
// add button for each disc
document.querySelector('.rate-btn').addEventListener('click', upvoteClickHandler);
//