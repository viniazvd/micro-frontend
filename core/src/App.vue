<template>
  <div id="app-core">
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
