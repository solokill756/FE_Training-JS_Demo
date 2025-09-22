document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.querySelector('#studentTable tbody');
  const addStudentBtn = document.getElementById('addStudentBtn');
  let storedStudents = localStorage.getItem('list_student');
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
  console.log(`addStudentBtn : ${addStudentBtn}`);
  addStudentBtn.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'add_student_form.html';
  });
});
