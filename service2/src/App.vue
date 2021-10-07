<template>
  <div id="app-service2">
    <div class="nav-service2">
      <router-link to="/service2/home">Home Service 2</router-link> |
      <router-link to="/service2/about">About Service 2</router-link>
    </div>

    <div style="margin-top: 10px">

      <label>Name</label>
      <input type="text" v-model="name"> <br/>
      <label>Description</label>
      <input type="text" v-model="description"><br/>
      <button  @click="clickAdd">Add</button>
    </div>

    

    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'AppService2',

    computed: {
    ...mapState({
      list: (state) => state.product.list,
    }),
  },

  props: {
    customProps: Object
  },

  data() {
    return {
      name: '',
      description: '',
    }
  },

  mounted() {
  },
  methods: {
    ...mapActions(['addProduct']),

    clickAdd() {
      this.addProduct({
        name: this.name,
        description: this.description,
      })
    }
  }
}
</script>
