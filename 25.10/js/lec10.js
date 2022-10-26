class Contact {
    name;
    phone;

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

//get elements by ID
const btnAddContact = document.getElementById('add-contact');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const contactDiv = document.getElementById('contacts');

let contacts = [];

//first read
const strContactsFromDisk = localStorage.getItem('contacts');

//אם יש מידע שמור
//contacts = [מידע שמור]
if (strContactsFromDisk != null) {
    //parse sa array of objects
    const contactsFromDisk = JSON.parse(strContactsFromDisk);
    contacts = contactsFromDisk;
}
//show contacts to the user
contactDiv.innerHTML = '';
contacts.forEach(c => {
    contactDiv.innerHTML += `Name: ${c.name} - Phone: ${c.phone} <br>`;
})




//react to btnAddContact
btnAddContact.addEventListener('click', () => {
    const name = nameInput.value;
    const phone = phoneInput.value;

    //object with the input values:
    const contact = new Contact(name, phone);
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    //show contacts to the user
    contactDiv.innerHTML = '';
    contacts.forEach(c => {
        contactDiv.innerHTML += `Name: ${c.name} - Phone: ${c.phone} <br>`;
    })
})