<template>
  <div id="app-service1">
    <div class="nav-service1">
      <router-link to="/service1/home">Home Service 1</router-link> |
      <router-link to="/service1/about">About Service 1</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AppService1',

  props: {
    customProps: Object
  }
}
</script>
