const fs = require("node:fs/promises");
const path = require("node:path");
const { v4: uuidv4 } = require("uuid");

// const contactsPath = path.format({
//   dir: "./db",
//   base: "contacts.json",
// });

const contactsPath = path.join("db","./contacts.json");

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
}

async function getContactById(contactId) {
  console.log("getContactById starts...");
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const results = contacts.filter((contact) => contact.id === contactId);
    return results;
  } catch (error) {
    throw new Error(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const results = contacts.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(results));
  } catch (error) {
    throw new Error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    const newId = uuidv4();
    contacts.push({ id: newId, name: name, email: email, phone: phone });
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
