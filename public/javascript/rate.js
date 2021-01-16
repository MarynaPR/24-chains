const clickOne = async function (event) {
    event.preventDefault();

    const rating = document.querySelector('#rating-star-1').value;
    const rateHolder = document.querySelector('#selected_rating');
    rateHolder.value = rating;
};

const clickTwo = async function (event) {
    event.preventDefault();

    const rating = document.querySelector('#rating-star-2').value;
    const rateHolder = document.querySelector('#selected_rating');

    rateHolder.value = rating;
};

const clickThree = async function (event) {
    event.preventDefault();

    const rating = document.querySelector('#rating-star-3').value;
    const rateHolder = document.querySelector('#selected_rating');

    rateHolder.value = rating;
};

const clickFour = async function (event) {
    event.preventDefault();

    const rating = document.querySelector('#rating-star-4').value;
    const rateHolder = document.querySelector('#selected_rating');

    rateHolder.value = rating;
};

const clickFive = async function (event) {
    event.preventDefault();

    const rating = document.querySelector('#rating-star-5').value;
    const rateHolder = document.querySelector('#selected_rating');

    rateHolder.value = rating;
};



document.querySelector("#rating-star-1").addEventListener("click", clickOne);
document.querySelector("#rating-star-2").addEventListener("click", clickTwo);
document.querySelector("#rating-star-3").addEventListener("click", clickThree);
document.querySelector("#rating-star-4").addEventListener("click", clickFour);
document.querySelector("#rating-star-5").addEventListener("click", clickFive);