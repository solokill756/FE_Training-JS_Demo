document.addEventListener('DOMContentLoaded', function () {
  let storedUsers = JSON.parse(localStorage.getItem('admin'));

  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  if (!storedUsers) {
    storedUsers = [
      { name: 'admin', password: 'Aa@123456' },
      { name: 'admin2', password: 'admin123admin' },
    ];
    localStorage.setItem('admin', JSON.stringify(storedUsers));
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const user = storedUsers.find(
      (user) => user.name === username && user.password === password
    );

    if (user) {
      alert('Login successful!');
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = '../../Exercise_1/html/list_students.html';
    } else {
      errorMessage.classList.remove('hidden');
    }
  });
  usernameInput.addEventListener('input', function () {
    errorMessage.classList.add('hidden');
  });
  passwordInput.addEventListener('input', function () {
    errorMessage.classList.add('hidden');
  });
});

function checkLogin() {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) {
    window.location.href = '../../exercise_2/html/login.html';
  }
}

export { checkLogin };
