<template>
  <div class="home">
     home service 1

     <br>
     <br>

     state: {{ storeService1.service1 }}

     <button @click="onIncrement">increment</button>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

export default {
  name: 'Service1Home',

  computed: {
    ...mapState({ storeService1: 'storeService1' })
  },

  methods: {
    ...mapActions (['increment']),

    onIncrement () {
      this.increment()
    }
  }
}
</script>
