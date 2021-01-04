const loginFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");

    if (usernameEl && passwordEl) {
        const response = await fetch("/api/user/login", {
            method: "post",
            body: JSON.stringify({
                username: usernameEl.value,
                password: passwordEl.value
            }),
            headers: { "Content-Type": "application/json" }
        })

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);

function myFunction() {
    var google = document.getElementById("google");
    if (google.style.display === "none") {
        google.style.display = "block";
    } else {
        google.style.display = "none";
    }
}

myFunction()