<template>
  <div class="home">
     home storeOnboarding 1

     <br>
     <br>

     state: {{ storeOnboarding.service1 }}

     <button @click="onIncrement">increment</button>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

export default {
  name: 'OnboardingHome',

  computed: {
    ...mapState({ storeOnboarding: 'storeOnboarding' })
  },

  methods: {
    ...mapActions (['increment']),

    onIncrement () {
      this.increment()
    }
  }
}
</script>
