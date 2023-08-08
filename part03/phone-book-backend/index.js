const express = require("express");
const app = express();
const { contact, getNumberContacts } = require("./contacts");
const getDate = require("./date")

app.get("/", (request, response) => {
    response.send("<h1>Notes</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(contact)
})

app.get("/info", (request, response) => {
    response.send(`<p>Phonebook has info of ${getNumberContacts(contact)} people</p> <p>${getDate()}</p>`)
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const selectedContact = contact.find(contact => contact.id === id)
    if(selectedContact){
        response.json(selectedContact)
    } else {
        response.status(404).json({error: "Contact not found"})
    }
})

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const contactIndex = contact.findIndex(contact => contact.id === id);

    if (contactIndex !== -1) {
    contact.splice(contactIndex, 1);
    response.status(204).end();
    } else {
    response.status(404).end();
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})