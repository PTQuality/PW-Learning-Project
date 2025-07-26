// Your task:
// 1. Create Contact class with properties: name, phone, email
// 2. Create Group class with properties: groupName, contacts (array of Contact objects)
// 3. Create AddressBook class with properties: groups (array of Group objects)
// 4. Create instance of AddressBook representing address book
// 5. Add contact groups by creating Group instances with appropriate names (e.g. "Rodzina", "Przyjaciele", "Praca")
// 6. Add contacts to each group by creating Contact instances with appropriate data
// 7. Add getContactsByGroup(groupName) method to AddressBook class that returns list of all contacts from specified group
// 8. Display in console: list of all groups and their contacts, list of contacts from selected group using getContactsByGroup method

// to test your solution in terminal You can run following command:
// npm run l01e22

//// TODO:
// here place your solution:

class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}
class Group {
  constructor(groupName) {
    this.groupName = groupName;
    this.contacts = [];
  }
}
class AddressBook {
  constructor() {
    this.groups = [];
  }
  getContactsByGroup(groupName) {
    const group = this.groups.find(group => group.groupName === groupName);

    if (group) {
      return group.contacts;
    } else {
      console.log("Such group does not exists");
      return [];
    }
  }
}

let addressBook = new AddressBook();
let familyGroup = new Group("Family");
let friendGroup = new Group("Friends");
let workGroup = new Group("Works");

let contact1 = new Contact("Jan Kowalski", 123456789, "jan@example.com");
let contact2 = new Contact("Anna Nowak", 987654321, "anna@example.com");
let contact3 = new Contact("Piotr Wiśniewski", 555666777, "piotr@example.com");
let contact4 = new Contact("Kasia Zielińska", 444555666, "kasia@example.com");
let contact5 = new Contact("Paweł Wójcik", 333444555, "pawel@example.com");

familyGroup.contacts.push(contact1);
familyGroup.contacts.push(contact2);

friendGroup.contacts.push(contact3);
friendGroup.contacts.push(contact4);

workGroup.contacts.push(contact5);

addressBook.groups.push(familyGroup);
addressBook.groups.push(friendGroup);
addressBook.groups.push(workGroup);

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Test data to create:
// Rodzina:
// Jan Kowalski, 123456789, jan@example.com
// Anna Nowak, 987654321, anna@example.com
// Przyjaciele:
// Piotr Wiśniewski, 555666777, piotr@example.com
// Kasia Zielińska, 444555666, kasia@example.com
// Praca:
// Paweł Wójcik, 333444555, pawel@example.com

// Test getContactsByGroup method with "Przyjaciele" group
console.log(addressBook.getContactsByGroup("Friends"));

// Expected output:
// After running this script on console You should display:
// All groups and their contacts, then:
// [
//   { name: 'Piotr Wiśniewski', phone: '555666777', email: 'piotr@example.com' },
//   { name: 'Kasia Zielińska', phone: '444555666', email: 'kasia@example.com' }
// ]
