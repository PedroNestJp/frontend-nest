import axios from 'axios'

const api = axios.create({
    baseURL:"https://nest-app.herokuapp.com"
})

export default api