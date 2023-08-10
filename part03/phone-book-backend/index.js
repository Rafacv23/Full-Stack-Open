const express = require("express");
const app = express();
const { contact, getNumberContacts } = require("./contacts");
const getDate = require("./date")
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

morgan.token('req-body', (req, res) => {
    if (req.method === 'POST') {
        return JSON.stringify(req.body);
    }
    return '';
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'));

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

app.use(express.json());

app.post("/api/persons", (request, response) => {
    const body = request.body;
    const existingContact = contact.find((c) => c.name === body.name);

    if (!body.name || !body.number){
        return response.status(400).json({ error: "Name or number is missing" });
    } else if (existingContact){
        return response.status(400).json({ error: "Contact already exists" })
    }

    const id = Math.floor(Math.random() * 1000) + 1;
    const newPerson = {
        id: id,
        name: body.name,
        number: body.number,
    };

    contact.push(newPerson);
    response.status(201).json(newPerson);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})