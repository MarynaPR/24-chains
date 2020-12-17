const newReview = async function(event) {
    event.preventDefault();

    const course_id = document.querySelector('input[name="course-id"]').value;
    const review_content = document.querySelector('textarea[name="review-body"]').value;
    const rating = document.querySelector('input[name="course-rating"]').value;
    const user_id = document.querySelector(req.session.user_id).value;

    await fetch(`api/post`, {
        method: "POST",
        body: JSON.stringify({
            course_id,
            review_content,
            rating,
            user_id
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });

    document.location.reload();
};

document.querySelector("#new-review").addEventListener("submit", newReview);

