<template>
  <div class="todolist">
    

  <a-list
    itemLayout="horizontal"
    :dataSource="itemShow"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta is="listitem"
        :class="{even : index%2==0}"
        v-bind:key="index"
        v-bind:item1="item"
        v-bind:idx="index"
        style="width:100%">
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  </div>
</template>

<script>
import listitem from "./list-item.vue";

export default {
  name: "todolist",
  components: {
    listitem
  },
  computed: {
    itemShow(){
      return this.$store.state.items_show;
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
