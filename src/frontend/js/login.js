const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;

  const userData = {
    email: email,
    senha: senha
  };

  axios.post('http://localhost:3000/auth/login', userData)
    .then(res => {
      const accessToken = res.data.accessToken;
      document.cookie = `accessToken=${accessToken}; path=/`;
      window.location.href = 'shop.html';
    })
    .catch(err => alert('Email ou Senha inválidos'));

  form.reset();
});
