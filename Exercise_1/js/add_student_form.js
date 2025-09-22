import { checkLogin } from '../../exercise_2/js/login.js';
document.addEventListener('DOMContentLoaded', function () {
  checkLogin();

  const birthdayInput = document.getElementById('birthday');
  const phoneInput = document.getElementById('phoneNumber');
  const idInput = document.getElementById('id');
  const nameInput = document.getElementById('name');

  document
    .getElementById('studentForm')
    .addEventListener('submit', function (e) {
      e.preventDefault();
      const id = idInput.value;
      const name = nameInput.value;
      const birthday = birthdayInput.value;
      const phoneNumber = phoneInput.value;

      const birthdayDate = new Date(birthday);
      const today = new Date();
      let age = today.getFullYear() - birthdayDate.getFullYear();
      const monthDiff = today.getMonth() - birthdayDate.getMonth();
      const dayDiff = today.getDate() - birthdayDate.getDate();

      let storedStudents = localStorage.getItem('list_student');
      storedStudents = storedStudents ? JSON.parse(storedStudents) : [];

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      if (age < 18) {
        alert('You must be at least 18 years old.');
        return;
      }

      if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Phone number must be exactly 10 digits.');
        return;
      }

      if (storedStudents.some((student) => student.id === id)) {
        const studentIndex = storedStudents.findIndex(
          (student) => student.id === id
        );
        storedStudents[studentIndex] = { id, name, birthday, phoneNumber };
      } else {
        storedStudents.push({ id, name, birthday, phoneNumber });
      }
      localStorage.setItem('list_student', JSON.stringify(storedStudents));
      alert('Student added successfully!');
      window.location.href = 'list_students.html';
    });
});
