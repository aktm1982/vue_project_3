<template>
  <form class="card" @submit.prevent="submitForm">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
      <small v-if="validationErrors.title">{{ validationErrors.title }}</small>
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
      <small v-if="validationErrors.date">{{ validationErrors.date }}</small>
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
      <small v-if="validationErrors.description">{{ validationErrors.description }}</small>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const formData = reactive({
      title: '',
      date: '',
      description: ''
    })

    let validationErrors = reactive({})
    let validationFailed = false

    const validate = () => {
      for (const key in formData) {
        validationErrors[key] = null
        if (!formData[key]) {
          validationFailed = true
          validationErrors[key] = 'Поле необходимо заполнить'
        }
      }
    }

    const submitForm = () => {
      validationErrors = validate()
      if (!validationFailed) {
        store.dispatch('uploadItem', {
          ...formData,
          status: 'active'
        })
      }
    }

    return {
      ...toRefs(formData),
      validationErrors,
      submitForm
    }
  }
}
</script>
