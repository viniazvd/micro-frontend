<template>
  <div id="app-core">
    <div class="nav-service1">
      <router-link to="/service1/home">Home Service 1</router-link> |
      <router-link to="/service1/about">About Service 1</router-link>
    </div>

    <br>
    <br>

    <div class="nav-service2">
      <router-link to="/service2/home">Home Service 2</router-link> |
      <router-link to="/service2/about">About Service 2</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'CoreApp',
}
</script>

<style>
#app-core {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
