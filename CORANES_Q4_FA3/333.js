function getValidNumber() {
    let num;
    do {
      num = prompt("Please enter a number:");
    } while (isNaN(num) || num.trim() === "");
    return parseInt(num, 10);
  }

  function generateShape(n) {
    let result = "Number inputted: " + n + "\n\n";
    if (n % 2 !== 0) {
      for (let i = n; i >= 1; i--) {
        result += (i + " ").repeat(n).trim() + "\n";
      }
    } else {
      for (let i = n; i >= 1; i--) {
        result += (i + " ").repeat(i).trim() + "\n";
      }
    }
    document.getElementById("output").textContent = result;
  }

  const num = getValidNumber();
  generateShape(num);

  let contacts = [];

  function displayContacts() {
    document.getElementById("contactsOutput").textContent = "Contacts: " + contacts.join(", ");
  }

  function addContact() {
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
      if (contacts.length === 7) {
        contacts.shift();
      }
      contacts.push(name);
      displayContacts();
      document.getElementById("nameInput").value = "";
    }
  }

  function removeContact() {
    if (contacts.length > 0) {
      contacts.pop();
      displayContacts();
    }
  }