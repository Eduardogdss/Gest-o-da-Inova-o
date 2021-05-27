import axios from "axios";

const { REACT_APP_API_URL } = process.env;
const apiClient = axios.create(
  {
    baseURL: REACT_APP_API_URL || "http://localhost:8080",
    responseType: 'json'
  }
)

const getTestemoniess = () => (apiClient.get('/testemony'))
const getTestemonies = (id) => (apiClient.get('/testemony/' + id))

export { getTestemoniess, getTestemonies }
