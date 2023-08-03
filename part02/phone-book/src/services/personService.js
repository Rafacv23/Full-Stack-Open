import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    const url = `${baseUrl}/${id}`
    return axios.put(url, newObject)
}

const remove = (id) => {
    const url = `${baseUrl}/${id}`
    return axios.delete(url)
}

export default { getAll, create, update, remove }