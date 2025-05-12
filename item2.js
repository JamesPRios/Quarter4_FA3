let contacts = [];

function updateDisplay() {
  document.getElementById("contactList").innerText = contacts.join(" ");
}

function addName() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim().toLowerCase();

  if (name === "") return;

  if (contacts.length >= 7) {
    contacts.shift(); 
  }

  contacts.push(name); 
  input.value = ""; 
  updateDisplay();
}

function removeName() {
  contacts.pop(); 
  updateDisplay();
}
