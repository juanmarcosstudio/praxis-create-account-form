document.getElementById('signup-form').addEventListener('submit', function(event) {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const error = document.getElementById('password-error');

  if (password.value !== confirmPassword.value) {
      error.style.display = 'block';
      confirmPassword.style.borderColor = 'red';
      event.preventDefault(); // Prevent form submission
  } else {
      error.style.display = 'none';
      confirmPassword.style.borderColor = '';
  }
});
