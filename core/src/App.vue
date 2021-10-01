<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home Core</router-link> |
      <router-link to="/service">Service Core</router-link>
    </div>

    <router-view/>

    <!-- <service @coe="handlerService" :custom-props="{ active: 'teste' }" /> -->
  </div>
</template>

<script>
// import Service from 'service/App';

export default {
  name: 'CoreApp',

  // components: { Service },

  // methods: {
  //   handlerService () {
  //     console.log('clicked')
  //   }
  // }
}
</script>
