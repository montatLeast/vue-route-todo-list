<template>
  <div id="listContent">

    <list-header></list-header>
    <todolist></todolist>
    <list-footer></list-footer>
  </div>
</template>

<script>
import todolist from './todolist.vue'
import listHeader from './Header.vue'
import listFooter from './Footer.vue'

export default {
  name: 'listContent',
  components: {
    listHeader,
    todolist,
    listFooter
  }
}
</script>

<style>

</style>