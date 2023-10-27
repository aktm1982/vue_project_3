<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <app-status :type="status"></app-status>
    </h2>
    <p>
      <strong>
        <small>
          {{ date }}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click="navigateToTaskPage(taskId)">Посмотреть</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppStatus from '../components/AppStatus'

export default {
  components: { AppStatus },
  setup (props) {
    const taskId = ref(props.item.id)
    const title = ref(props.item.title)
    const status = ref(props.item.status)
    const date = new Date(props.item.date).toLocaleDateString()

    const router = useRouter()

    const navigateToTaskPage = (task) => {
      router.push(`/task/${task}`)
    }

    return { taskId, title, status, date, navigateToTaskPage }
  },
  props: ['item']
}
</script>
