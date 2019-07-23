<template>
  <div class="home">
    <div class="topNav">
      <h1>Home</h1>
      <strong>姓名：{{name}}</strong>
      <router-link to="/welcome">back</router-link>
    </div>
    <div class="contentLayout">
      <div class="leftNav">
        <router-link class="link" :to="{name:'listContent'}">todolist</router-link>
        <br />
        <router-link class="link" :to="{name:'Myinfo'}">info</router-link>
      </div>
      <div class="content">
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
  },
  created(){
    this.$router.push({name:'listContent'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.leftNav {
  background-color: #f5f5f5;
  float: left;
  width: 20%;
  min-height: 500px;
}
.content {
  background-color: #f6f6f6;
  float: left;
  width: 80%;
  min-height: 500px;
}
strong{
  float: right;
}
.link{
  margin-left: 20px;
}
</style>
