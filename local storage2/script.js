function getData() {
  return JSON.parse(localStorage.getItem("students")) || [];
}

function saveData(data) {
  localStorage.setItem("students", JSON.stringify(data));
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

  let students = getData();
  students.push({ regNo, name, email, state, course, status: "hold" });
  saveData(students);
  renderData();
  document.getElementById("studentForm").reset();
}

function renderData() {
  let students = getData();
  let acceptedBody = document.getElementById("acceptedBody");
  let rejectedBody = document.getElementById("rejectedBody");
  let holdBody = document.getElementById("holdBody");

  acceptedBody.innerHTML = "";
  rejectedBody.innerHTML = "";
  holdBody.innerHTML = "";

  students.forEach((student, index) => {
    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.regNo}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.state}</td>
        <td>${student.course}</td>
        <td>
          <button class="action-btn accept" onclick="updateStatus(${index}, 'accepted')">Accept</button>
          <button class="action-btn reject" onclick="updateStatus(${index}, 'rejected')">Reject</button>
          <button class="action-btn hold" onclick="updateStatus(${index}, 'hold')">Hold</button>
          <button class="action-btn delete" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;

    if (student.status === "accepted") {
      acceptedBody.innerHTML += row;
    } else if (student.status === "rejected") {
      rejectedBody.innerHTML += row;
    } else {
      holdBody.innerHTML += row;
    }
  });
}

function updateStatus(index, status) {
  let students = getData();
  students[index].status = status;
  saveData(students);
  renderData();
}

function deleteStudent(index) {
  let students = getData();
  students.splice(index, 1);
  saveData(students);
  renderData();
}

window.onload = renderData;
