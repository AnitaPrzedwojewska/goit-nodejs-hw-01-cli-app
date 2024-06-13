const contacts = require('./contacts');

function list() {
  contacts.listContacts();
}

function get(id) {
  contacts.getContactById(id);
}

function remove(id) {
  contacts.removeContact(id);
}

function add(name, email, phone) {
  contacts.addContact(name, email, phone);
}

list();
get("qdggE76Jtbfd9eWJHrssH");
add("Ana Parker", "ana.parker@gmail.com", "876-932-145");
remove("qdggE76Jtbfd9eWJHrssH");