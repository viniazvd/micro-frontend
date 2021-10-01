<template>
  <div id="app-service2">
    <div class="nav-service2">
      <router-link to="/service2/home">Home Service 2</router-link> |
      <router-link to="/service2/about">About Service 2</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AppService2',

  props: {
    customProps: Object
  }
}
</script>
