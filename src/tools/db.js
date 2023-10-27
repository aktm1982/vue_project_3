export default {
  requestUrl: 'https://aktm-vue-todo-list-default-rtdb.europe-west1.firebasedatabase.app/items',
  async loadData () {
    const response = await fetch(this.requestUrl + '.json')
    const data = await response.json()

    return data
  },
  async uploadData (data) {
    const response = await fetch(
      this.requestUrl + '.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

    const result = response.json()

    return result
  },
  async updateData (primary, data) {
    const response = await fetch(
      this.requestUrl + `/${primary}/.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    const result = response.json()

    return result
  }
}
