<template>
  <div class="home">
    <div id="topNav">
      <h1>Home</h1>
      <strong>{{name}}</strong>
      <router-link to="/home">back</router-link>
    </div>
    <div id="contentLayout">
      <div id="leftNav">
        <router-link :to="{name:'todolist'}">todolist</router-link>
        <router-link :to="{name:'profile'}">profile</router-link>
      </div>
      <div id="content">
          <router-view></router-view>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props:{
    name : String
  },
  data(){
    return{
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
