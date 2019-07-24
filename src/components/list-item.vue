<template>
  <div class="listitem">
    <a-row>
      <a-col :span="2">
        <label :class="{ isSelected: item1.status}">{{idx + 1}}.</label>
      </a-col>
      <a-col :span="2">
        <a-checkbox v-model="item1.status" style="zoom:1.5"></a-checkbox>
      </a-col>
      <a-col :span="16">
        <input v-if="editable" v-model="editText" @keydown.enter="finishEdit(item1)" style="width:100%"/>
        <span
          :class="{ drawLine: item1.status}"
          @dblclick="openEdit(item1)"
          v-else
        >{{ item1.content }}</span>
      </a-col>
      <a-col :span="4">
        <a-button
          icon="delete"
          @click="deleteSelf(item1)"
          ghost="true"
          style="border:0 ;color:grey"
        ></a-button>
      </a-col>
    </a-row>

    <!--<span :class="{ drawLine: item1.status}" @dblclick="openEdit(item1)">{{ item1.content }}</span>-->
  </div>
</template>



<script>
export default {
  name: "listitem",
  props: {
    item1: Object,
    idx: Number
  },
  data() {
    return {
      editText: null,
      editable: false
    };
  },
  methods: {
    openEdit(item) {
      this.editText = item.content;
      this.editable = true;
    },
    finishEdit(item) {
      if (this.editText != null) {
        item.content = this.editText;
      }
      this.editable = false;
      this.$store.dispatch("updateItem", item);
    },
    deleteSelf(item) {
      this.$store.dispatch("deleteItem", item);
    }
  }
};
</script>

<style scoped>
</style>
