<template>
  <div class="listFooter">
    <div class="buttons">
      <a-button type="primary" class="selector" @click="getState('All')">ALL</a-button>
      <a-button type="primary" class="selector" @click="getState('Active')">Active</a-button>
      <a-button type="primary" class="selector" @click="getState('Complete')">Complete</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "listFooter",
  data() {
    return {
        
    };
  },
  methods: {
    getState(msg) {
      this.$store.commit("showByItemStatus", msg);
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
