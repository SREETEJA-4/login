const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'sree' && password === '1234') {
   
    window.location.href = 'home.html';

  } else {
    alert('Invalid credentials. Please try again.');
  }

  loginForm.reset();
});
