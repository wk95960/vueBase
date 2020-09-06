<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
body,html{
  height:100vh;
  width:100%;
  padding:0;
  margin:0;
}
#app {
  height:100%;
  width:100%;
}
</style>
