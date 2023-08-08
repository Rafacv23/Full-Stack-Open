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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})