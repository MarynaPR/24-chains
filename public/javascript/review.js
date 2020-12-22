const newReview = async function(event) {
    event.preventDefault();

    const course_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const review_content = document.querySelector('textarea[name="review-body"]').value;
    const rating = document.querySelector('input[name="course-rating"]').value;
    const review_title = document.querySelector('input[name="review-title"]').value;
    
    if (review_content && review_title && rating) {
        const response = await fetch(`../api/review`, {
            method: "POST",
            body: JSON.stringify({
                course_id,
                review_content,
                rating,
                review_title
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
    
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#new-review").addEventListener("click", newReview);

