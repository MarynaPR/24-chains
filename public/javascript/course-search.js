async function searchClickHandler(event) {
    event.preventDefault();

    const searchRequest = document.querySelector('input[name="search-input"]').value;
    console.log(searchRequest)
    // if(searchRequest) {
    //     const response = await fetch('../api/course', {
    //         method: "GET",
    //         body: JSON.stringify({

    //         })
    //     })
    // }

    //SELECT * FROM course WHERE city LIKE '%water%';
    document.location.replace('/courses');

}

document.querySelector('#search-course').addEventListener('click', searchClickHandler);