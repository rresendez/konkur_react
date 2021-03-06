import axios from 'axios'

export const _dev = process.env.NODE_ENV === 'development'

let BASE_URL = _dev
  ? 'http://localhost'
  : window.location.origin

if (!_dev) {
  if (!localStorage.getItem('token')) {
    window.location.href = `${window.location.origin}/`
  }
}

const _axios = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'token': localStorage.getItem('token')
  }
})

export default _axios
