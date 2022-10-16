import axios from "axios"

const test = 'http://localhost:3001/';

export const api = axios.create({
    baseURL: test,   
});

