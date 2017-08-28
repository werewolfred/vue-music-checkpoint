<template>
  <div id="app">
    <Home></Home>   
  </div>
</template>

<script>
  import Home from './components/Home'
  
  import Mytunes from './components/Mytunes'

  export default {
    name: 'app',
    components: {
      Home,
      Mytunes
    }
  }

</script>

<style>

</style>