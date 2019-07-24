<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created(){
    this.$store.dispatch("getAllItems");
  }
}
</script>

<style>

</style>
