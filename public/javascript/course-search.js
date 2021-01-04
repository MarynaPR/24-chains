async function searchClickHandler(event) {
    event.preventDefault();

    const searchRequest = document.querySelector('input[name="search-input"]').value;

    if(searchRequest) {
        const response = await fetch(`../api/course/city/${searchRequest}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        if(response.ok) {
            document.location.replace(`/courses/${searchRequest}`);
        } else {
            alert(response.statusText);
        }
    }

    //SELECT * FROM course WHERE course_name LIKE '%water%';

}

document.querySelector('#search-course').addEventListener('click', searchClickHandler);