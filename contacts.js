const fs = require("fs")
const path = require("path")

const contactsPath = path.basename("C:\\Users\\Andrey\\WebstormProjects\\node_edu\\db\\contacts.json")


function listContacts() {
    fs.readFile("./db/contacts.json", "utf8",
        function(error,data){
            if(error) throw error; // если возникла ошибка
            console.table(JSON.parse(data));  // выводим считанные данные
        });
}

function getContactById(contactId) {
    fs.readFile("./db/contacts.json", "utf8",
        function(error,data){
            if(error) throw error; // если возникла ошибка
            let newData = JSON.parse(data)
            newData.forEach(contact => (contact.id === contactId) ? console.table(contact) : '')
        });
}

function removeContact(contactId) {
    fs.readFile("./db/contacts.json", "utf8",
        function(error,data){
            if(error) throw error; // если возникла ошибка
            let newData = JSON.parse(data)
            const newArr = newData.filter(contact => contact.id !== contactId)

            fs.writeFile("./db/contacts.json", JSON.stringify(newArr), function(error){
                if(error) throw error; // если возникла ошибка
            });
        });
}

function addContact(name, email, phone) {
    fs.readFile("./db/contacts.json", "utf8",
        function(error,data){
            if(error) throw error; // если возникла ошибка
            let newData = JSON.parse(data)

            if(name !== undefined && email !== undefined && phone !== undefined){
                newData.push({
                    id: newData.length + 1,
                    name: name,
                    email: email,
                    phone: phone
                })
            } else {
                console.log("name, email, phone must be filled!")
            }
            fs.writeFile("./db/contacts.json", JSON.stringify(newData), function(error){
                if(error) throw error; // если возникла ошибка
            });
        });
}


module.exports = {listContacts, addContact, getContactById, removeContact}