const signupFormHandler = async function (event) {
    event.preventDefault();

    const firstNameEl = document.querySelector("#firstname-input-signup");
    const lastNameEl = document.querySelector("#lastname-input-signup");
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");
    const emailEl = document.querySelector("#email-input-signup");

    if (usernameEl && passwordEl && emailEl) {
        const response = await fetch("/api/user", {
            method: "post",
            body: JSON.stringify({
                firstname: firstNameEl.value,
                lastname: lastNameEl.value,
                username: usernameEl.value,
                password: passwordEl.value,
                email: emailEl.value
            }),
            headers: { "Content-Type": "application/json" }
        })
            
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
};

document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);