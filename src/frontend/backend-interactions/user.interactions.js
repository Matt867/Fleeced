
async function signUp(username, password, email) {

    function setErrorMessage() {
        console.log("BRUH")
    }

    try {
        const response = await fetch("http://localhost:3000/users/signup", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        })

        const data = await response.text()

        if (response.status === 200) {
            console.log(data)
            window.localStorage.setItem('jwt', data)
            window.location.href = "/login"
        } else {
            console.log(response.status, data)
            // setErrorMessage(data)
        }
    } catch (error) {
        // setErrorMessage(error.message)
    }

}

module.exports = { SignUp }
