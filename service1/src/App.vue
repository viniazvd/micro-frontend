<template>
  <div id="app">
    <div id="nav">
      <router-link to="/service/home">Home Service</router-link> |
      <router-link to="/service/about">About Service</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AppService',

  props: {
    customProps: Object
  }
}
</script>
