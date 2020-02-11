import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

const getMovieList = () => api.get('/list')
const sendMovie = (data) => api.post('/newReview',data)
const deleteMovie = (data) => api.delete('/deleteMovie',data)

const apis = {
    getMovieList,
    sendMovie,
    deleteMovie
}

export default apis
