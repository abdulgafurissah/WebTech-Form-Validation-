function validateForm() {
  document.getElementById('usernameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('passwordError').innerText = '';

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  let isValid = true;

  if (username.length < 5) {
    document.getElementById('usernameError').innerText = 'Username must be at least 5 characters.';
    isValid = false;
  }

  if (!email.includes('@')) {
    document.getElementById('emailError').innerText = 'Email must contain an "@" symbol.';
    isValid = false;
  }

  if (password.length < 8) {
    document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
    isValid = false;
  }

  return isValid;
}
