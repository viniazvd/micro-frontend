<template>
  <div id="app-core">
    <div>
      <router-link to="/onboarding/home">Home onboarding 1</router-link> |
      <router-link to="/onboarding/about">About onboarding 1</router-link>
    </div>

    <br>

    <div>
      <router-link to="/forgot-password/home">Home forgot-password 2</router-link> |
      <router-link to="/forgot-password/about">About forgot-password 2</router-link>
    </div>

    <br>
    <br>

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
