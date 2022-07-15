<template>
  <div class="home">
    <s-input
      placeholder="Digite aqui"
		  label="Label"
      v-model="teste"
    />
  </div>
</template>

<script>
import { SInput } from 'vue-sdz'

export default {
  name: "ForgotPasswordHome",

  components: { SInput },

  data () {
    return {
      teste: ''
    }
  }
}
</script>
