<template>
  <div class="welcome">
      <input id="name" type="text" placeholder="input your name!" v-model="myName">
      <button @click="jumpToHome">首页</button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data(){
    return{
      myName : ""
    }
  },
  methods:{
    jumpToHome(){
      this.$router.push({ name: 'home' ,params:{ name : this.myName }});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
