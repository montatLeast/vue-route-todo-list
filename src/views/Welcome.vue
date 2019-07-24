<template>
  <div class="welcome">
    <input id="name" type="text" placeholder="input your name!" v-model="myName" />
    <a-button  type="primary" icon="login" id="toHome" @click="jumpToHome">首页</a-button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      myName: ""
    };
  },
  methods: {
    jumpToHome() {
      this.$router.push({ name: "home", params: { name: this.myName } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
