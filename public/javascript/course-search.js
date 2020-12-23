async function searchClickHandler(event) {
    event.preventDefault();
    let search = document.getElementById("search_term").value
    document.location.replace('/courses?city=' + search);

    // const searchRequest = document.querySelector('input[name="search-input"]').value;

    // if(searchRequest) {
    //     const response = await fetch('../api/course', {
    //         method: "GET",
    //         body: JSON.stringify({

    //         })
    //     })
    // }

    //SELECT * FROM course WHERE course_name LIKE '%water%';
    document.location.replace('/courses');

}

document.querySelector('#search-course').addEventListener('click', searchClickHandler);