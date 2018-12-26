import _axios from '../../apiClient'

export async function getSchedules () {
  try {
    const response = await _axios.get('/schedules')
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function getJobs () {
  try {
    const response = await _axios.get('/jobs')
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function getPriorities () {
  try {
    const response = await _axios.get('/priorities')
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function getCardComponents () {
  try {
    const response = await _axios.get('/card-components')
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}
