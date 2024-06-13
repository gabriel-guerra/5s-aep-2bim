function login(e){
    const form = document.querySelector("#login-form");
    const formData = new FormData(form);

    const user = formData.get('user');
    const password = formData.get('password');

    //continuar login
}