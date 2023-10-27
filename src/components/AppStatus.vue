<template>
  <span
    class="badge"
    :class="stateMap[type]?.color"
  >{{ stateMap[type]?.title }}</span>
</template>

<script>
export default {
  setup (props) {
    const stateMap = {
      active: {
        title: 'Активно',
        color: 'primary'
      },
      done: {
        title: 'Завершено',
        color: 'warning'
      },
      cancelled: {
        title: 'Отменено',
        color: 'danger'
      },
      pending: {
        title: 'Выполняется',
        color: 'primary'
      }
    }

    return {
      stateMap
    }
  },
  props: ['type']
}
</script>
