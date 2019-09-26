import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl);
};

const create = person => {
    return axios.post(baseUrl, person);
};

const update = (person) => {
    const { id } = person;
    console.log('updating', id);
    return axios.put(`${baseUrl}/${id}`, person);
};

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`);
};

export default {
    getAll,
    create,
    update,
    remove,
};
