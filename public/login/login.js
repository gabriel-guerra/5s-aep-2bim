async function login(e){
    e.preventDefault();

    const form = document.querySelector("#login-form");
    const formData = new FormData(form);

    const obj = { 
        email: formData.get('email'),
        password: formData.get('password')
    }

    const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })

    console.log(await response.json())
}