const newPlayed = async function(event) {
    event.preventDefault();

    const course_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const score = document.querySelector('input[name="played-score"]').value;


    if (score) {
        const response = await fetch(`../api/played`, {
            method: "POST",
            body: JSON.stringify({
                course_id: course_id,
                score: score
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#new-played").addEventListener("click", newPlayed);
