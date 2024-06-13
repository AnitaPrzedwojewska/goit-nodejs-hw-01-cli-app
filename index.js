const contacts = require("./contacts");
const path = require("path");
const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      try {
        const resultsList = await contacts.listContacts();
        console.table(resultsList);
      } catch (error) {
        console.log(error)
      }
      break;

    case "get":
      try {
        const resultsGet = await contacts.getContactById(id);
        console.table(resultsGet);
      } catch (error) {
        console.log(error)
      }
      break;

    case "remove":
      try {
        await contacts.removeContact(id);
        console.log("The contact has been removed");
      } catch (error) {
        console.log(error)
      }
      break;

    case "add":
      try {
        await contacts.addContact(name, email, phone);
        console.log("The contact:  has been added");
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);