let submitbutton = document.getElementById("submit");
let checkboxischecked = document.getElementById("checkbox");
let existingbutton = document.getElementById("existing");

// ✅ Check if user credentials already exist in localStorage
window.addEventListener("load", () => {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingbutton.style.display = "block";
  }
});

// ✅ When user submits the form
submitbutton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent form reload

  let usernameval = document.getElementById("username").value.trim();
  let userpassword = document.getElementById("password").value.trim();

  alert(`Logged in as ${usernameval}`);

  if (checkboxischecked.checked) {
    // Save credentials
    localStorage.setItem("username", usernameval);
    localStorage.setItem("password", userpassword);
    existingbutton.style.display = "block";
  } else {
    // Remove previously saved credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingbutton.style.display = "none";
  }
});

// ✅ Existing user login button
existingbutton.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
