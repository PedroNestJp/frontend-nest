import axios from 'axios'

const api = axios.create({
    baseURL:"https://frontend-nest.herokuapp.com/"
})

export default api