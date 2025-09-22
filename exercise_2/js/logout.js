export function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '../../exercise_2/html/login.html';
}
