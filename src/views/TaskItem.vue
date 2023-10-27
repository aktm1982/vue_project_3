<template>
  <div class="card">
    <h2>{{ Array.from(store.getters.todoItems).find(item => item.id === taskId)?.title }}</h2>
    <p><strong>Статус</strong>: <app-status :type="Array.from(store.getters.todoItems).find(item => item.id === taskId)?.status"></app-status></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(Array.from(store.getters.todoItems).find(item => item.id === taskId)?.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ Array.from(store.getters.todoItems).find(item => item.id === taskId)?.description }}</p>
    <div>
      <button
        class="btn btn"
        data-status-change="pending"
        :disabled="Array.from(store.getters.todoItems).find(item => item.id === taskId)?.status === 'done'"
        @click="onClickStatusItem"
      >Взять в работу</button>
      <button
        class="btn primary"
        data-status-change="done"
        :disabled="Array.from(store.getters.todoItems).find(item => item.id === taskId)?.status === 'done'"
        @click="onClickStatusItem"
      >Завершить</button>
      <button
        class="btn danger"
        data-status-change="cancelled"
        :disabled="Array.from(store.getters.todoItems).find(item => item.id === taskId)?.status === 'done'"
        @click="onClickStatusItem"
      >Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'

export default {
  setup (props, context) {
    const store = useStore()

    const checkStatusDone = () => null === 'done'
    const onClickStatusItem = (e) => {
      const target = e.target.closest('[data-status-change]')

      if (!target) {
        return
      }

      store.dispatch(
        'updateItem',
        {
          primary: props.taskId,
          data: { status: target.dataset.statusChange }
        }
      )
    }

    return {
      store,
      checkStatusDone,
      onClickStatusItem
    }
  },
  components: { AppStatus },
  props: ['taskId']
}
</script>

<style scoped>

</style>
