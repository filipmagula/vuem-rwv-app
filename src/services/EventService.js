import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:1337/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProjects() {
    return apiClient.get('/projects')
  },
  getProject(id) {
    return apiClient.get('/projects/' + id)
  },
  deleteProject(id) {
    return apiClient.delete('/projects/' + id)
  }
}