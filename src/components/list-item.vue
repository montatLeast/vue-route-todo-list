<template>
  <div class="listitem">
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk(item1)"
      @cancel="handleCancel"
      okText="确定"
      cancelText="取消"
    >
    <span>你将修改为{{editText}},确定吗:</span>
    </a-modal>
    <a-row>
      <a-col :span="2">
        <label :class="{ isSelected: item1.status}">{{idx + 1}}.</label>
      </a-col>
      <a-col :span="2">
        <a-checkbox v-model="item1.status" @change="updateStatus(item1)" style="zoom:1.5"></a-checkbox>
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
          ghost=true
          @click="deleteSelf(item1)"
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
    idx: Number,
  },
  data() {
    return {
      editText: null,
      editable: false,
      visible: false
    };
  },
  methods: {
    openEdit(item) {
      this.editText = item.content;
      this.editable = true;
    },
    finishEdit() {
      this.editable = false;
      this.visible = true;
    },
    deleteSelf(item) {
      this.$store.dispatch("deleteItem", item);
    },
    updateStatus(item){
      this.$store.dispatch("updateItem", item);
    },
    handleOk(item){
      let item1 = {};
      item1.id = item.id;
      item1.content = item.content;
      item1.status = item.status;
      if (this.editText != null) {
        item1.content = this.editText;
      }
      this.editable = false;
      this.$store.dispatch("updateItem", item1);
      this.visible = false;
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
</style>
