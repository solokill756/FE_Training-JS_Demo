import { checkLogin } from '../../exercise_2/js/login.js';
import { logout } from '../../exercise_2/js/logout.js';
document.addEventListener('DOMContentLoaded', function () {
  checkLogin();

  const tableBody = document.querySelector('#studentTable tbody');
  const addStudentBtn = document.getElementById('addStudentBtn');
  let storedStudents = localStorage.getItem('list_student');
  const logoutBtn = document.getElementById('logoutBtn');

  storedStudents = storedStudents ? JSON.parse(storedStudents) : [];
  storedStudents.forEach(function (student) {
    const row = document.createElement('tr');
    const formattedBirthday = new Date(student.birthday).toLocaleDateString(
      'vi-VN'
    );
    row.innerHTML = `
      <td class="border px-4 py-2">${student.id}</td>
      <td class="border px-4 py-2">${student.name}</td>
      <td class="border px-4 py-2">${formattedBirthday}</td>
      <td class="border px-4 py-2">${student.phoneNumber}</td>
    `;
    tableBody.appendChild(row);
  });

  addStudentBtn.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'add_student_form.html';
  });
  logoutBtn.addEventListener('click', function (event) {
    event.preventDefault();
    logout();
  });
});
