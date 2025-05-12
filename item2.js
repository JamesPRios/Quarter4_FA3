let contacts = [];

function updateDisplay() {
  document.getElementById("contactList").innerText = contacts.join(" ");
}

function addName() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim().toLowerCase();

  if (name === "") return;

  if (contacts.length >= 7) {
    contacts.shift(); // remove first (oldest) entry
  }

  contacts.push(name); // add new name at end
  input.value = ""; // clear input
  updateDisplay();
}

function removeName() {
  contacts.pop(); // remove last (newest) entry
  updateDisplay();
}