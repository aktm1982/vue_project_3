<template>
  <h1 v-if="!store.getters.todoItems.length" class="text-white center">Задач пока нет</h1>
  <h3 v-else class="text-white">Всего активных задач: {{ store.getters.todoItems.length }}</h3>
  <task-preview
    v-for="item in store.getters.todoItems"
    :key="item.id"
    :item="item"
  ></task-preview>
</template>

<script>
import TaskPreview from './TaskPreview.vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      store
    }
  },
  components: { TaskPreview }
}
</script>
