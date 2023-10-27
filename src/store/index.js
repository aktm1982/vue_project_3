import { createStore } from 'vuex'
import db from '../tools/db.js'

export default createStore({
  state: {
    todoItems: []
  },
  getters: {
    todoItems (state) {
      return state.todoItems
    }
  },
  mutations: {
    setTodoItems (state, data) {
      const result = []

      for (const index in data) {
        result.push({
          id: index,
          ...data[index]
        })
      }

      state.todoItems = result
    }
  },
  actions: {
    async loadItems (context) {
      const data = await db.loadData()
      context.commit('setTodoItems', data)
    },
    async uploadItem (context, data) {
      await db.uploadData(data)
      context.dispatch('loadItems')
    },
    async updateItem (context, { primary, data }) {
      await db.updateData(primary, data)
      context.dispatch('loadItems')
    }
  },
  modules: {
  }
})
