<template>
  <div id="app" :style="{minHeight: getScreenHeight() + 'px'}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getScreenHeight () {
      let height = window.innerHeight
      return height
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5a400;
  height: 100%;
  font-size: 35px;
}
body {
  margin: 0;
  padding: 0;
}
</style>
