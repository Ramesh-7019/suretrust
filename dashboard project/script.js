const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    userList.innerHTML = "";
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.id}. ${user.name} (Age: ${user.age})`;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = () => deleteUser(user.id);
      li.appendChild(delBtn);

      userList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  const newUser = { name, age };

  try {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });
    form.reset();
    getUsers();
  } catch (error) {
    console.error("Error adding user:", error);
  }
});

async function deleteUser(id) {
  try {
    await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
    getUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

getUsers();
