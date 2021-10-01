<template>
  <div id="app-core">
    <div class="nav-core">
      <router-link to="/">Home Core</router-link> |
      <router-link to="/about">About Core</router-link> |
      <router-link to="/service1">Service 1 Core</router-link> |
      <router-link to="/service2">Service 2 Core</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'CoreApp'
}
</script>

<style>
#app-core {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.nav-core { margin-bottom: 30px; }
</style>
