<template>
  <div class="Myinfo">
    <p>姓名为: {{name}}</p>
    <p>电话号码为： {{phone}}</p>
  </div>
</template>

<script>
export default {
  name: 'Myinfo',
  props:['name'],
  data(){
    return{
      phone : "1111111111"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>