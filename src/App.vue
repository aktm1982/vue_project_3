<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheNavbar from './components/TheNavbar'

export default {
  methods: {
    ...mapActions(['loadItems'])
  },
  computed: {
    ...mapGetters(['todoItems'])
  },
  mounted () {
    this.loadItems()
  },
  components: {
    TheNavbar
  }
}
</script>
