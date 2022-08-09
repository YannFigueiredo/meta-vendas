import axios from 'axios';

const salesApi = axios.create({
    baseURL: 'https://meta-vendas.herokuapp.com'
});

export default salesApi;