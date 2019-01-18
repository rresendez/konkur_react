import axios from 'axios'

export const _dev = process.env.NODE_ENV === 'development'

let BASE_URL = _dev
  ? 'http://localhost:4444/v1/api'
  : `kunkur-global-backend.demo.demo-kunkur-international.bootcamp.qa.walmart.com:4444/v1/api`

/*
if (!_dev) {
  if (!localStorage.getItem('token')) {
    window.location.href = `${window.location.origin}/`
  }
}
*/
const _axios = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'token': localStorage.getItem('token') || 'holi'
  }
})

export default _axios
