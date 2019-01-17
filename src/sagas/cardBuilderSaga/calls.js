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

export async function createCardComponent (payload) {
  try {
    const response = await _axios.post('/card-components', payload)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function deleteCardComponent (id) {
  try {
    const response = await _axios.delete(`/card-components/${id}`)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function updateCardComponent (id, payload) {
  try {
    const response = await _axios.put(`/card-components/${id}`, payload)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function validateCard (payload) {
  try {
    const response = await _axios.post('/cards/validate-query', payload)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function createCard (payload) {
  try {
    const response = await _axios.post('/cards', payload)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function getCard (payload) {
  try {
    const response = await _axios.get(`/cards/${payload}`)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}

export async function updateCard (id, payload) {
  try {
    const response = await _axios.put(`/cards/${id}`, payload)
    return response
  } catch (error) {
    const data = error.response.data
    throw (data)
  }
}
