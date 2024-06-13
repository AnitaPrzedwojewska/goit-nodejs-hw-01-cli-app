const fs = require("node:fs/promises");
const path = require("node:path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.format({
  dir: "./db",
  base: "contacts.json",
});
// console.log(contactsPath);

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  // ...twój kod
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    console.log(`Results - listContacts:`);
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  // ...twój kod
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const results = contacts.filter((contact) => contact.id === contactId);
    console.log(`Results - getContactById id=${contactId}:`);
    console.table(results);
    return results;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  // ...twój kod
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const results = contacts.filter((contact) => contact.id !== contactId);
    console.log(`Results - removeContact id=${contactId}:`);
    console.table(results);
    await fs.writeFile(contactsPath, results);
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  // ...twój kod
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const newId = uuidv4();
    contacts.push({ id: newId, name: name, email: email, phone: phone });
    console.log(`Results - addContact name=${name} | email=${email} | phone=${phone}:`);
    console.table(contacts);
    await fs.writeFile(contactsPath, contacts)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
