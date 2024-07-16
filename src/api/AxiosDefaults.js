import axios from "axios";

axios.defaults.baseURL = 'https://souls-like-api-bc59577c0282.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosRes = axios.create();