export default class BaseRepository {
  constructor (API, resource, headers) {
    this.API = API
    this.resource = resource
  }

  async find (id, headers = {}) {
    let response = await this.API.get(`${this.resource}/${id}`, headers)
    return response
  }

  async get (url = '', headers = {}) {
    let response = await this.API.get(`${this.resource}/${url}`, headers)
    return response
  }

  async post (url = '', form, headers = {}) {
    let response = this.API.post(`${this.resource}/${url}`, form, headers)
    return response
  }

  async put (url = '', form, headers = {}) {
    let response = this.API.put(`${this.resource}/${url}`, form, headers)
    return response
  }

  async delete (url = '', form, headers = {}) {
    let response = this.API.delete(`${this.resource}/${url}`, form, headers)
    return response
  }
}