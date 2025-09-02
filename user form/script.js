function showData() {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  let tableBody = document.getElementById("dataBody");
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.regNo}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.state}</td>
        <td>${student.course}</td>
        <td><button class="action-btn" onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}


function submitData() {
  let regNo = document.getElementById("regNo").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let state = document.getElementById("state").value;
  let course = document.getElementById("course").value;

  if (!regNo || !name || !email || !state || !course) {
    alert("Please fill all fields!");
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push({
    regNo: regNo,
    name: name,
    email: email,
    state: state,
    course: course
  });

  localStorage.setItem("students", JSON.stringify(students));
  showData();

  document.getElementById("regNo").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("state").value = "";
  document.getElementById("course").value = "";
}


function deleteStudent(index) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  showData();
}


window.onload = showData;
