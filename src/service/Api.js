import axios from 'axios'

const api = axios.create({
    DATABASE_URL:'https://backend-nest.herokuapp.com/'
})

export default api