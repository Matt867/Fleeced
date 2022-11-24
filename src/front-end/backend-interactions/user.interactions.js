
async function SignUp (username, password, email) {

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
            setErrorMessage(data)
        }
    } catch (error) {
        setErrorMessage(error.message)
    }

}

async function LogIn (username, password) {
    fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => {
        if (response.status !== 200) {
            throw new Error("Invalid username or password")
        }
        return response.text()
    })
    .then(data => {
        window.localStorage.setItem('jwt', data)
        window.location.href = "/"
    })
    .catch(err => {
        setErrorMessage(error.message)
    })
}
