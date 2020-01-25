<template>
  <div>
    <ul class="list">
      <li :key="item.id" v-for="item in items">
        <span class="list-item-content">
          {{ item.val }}
        </span>
        <button class="delete-btn" @click="deleteItemAtIndex(item.id)">
          X
        </button>
      </li>
      <li class="new-item-input">
        <input
          type="text"
          v-model="newItemVal"
          v-on:keyup.enter="insertItem()"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["items"],
  data: () => ({
    newItemVal: ""
  }),
  methods: {
    insertItem: function() {
      this.$emit("list:add", this.newItemVal);
      this.newItemVal = "";
    },
    deleteItemAtIndex: function(itemId) {
      this.$emit("list:remove", itemId);
    }
  }
};
</script>

<style scoped>
ul.list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
ul.list li {
  padding: 10px;
  background-color: #ece7e7;
  margin: 5px 0;
  border: 1px solid #aca6a6;
  display: flex;
}
ul.list li.new-item-input {
  background: #ffffff;
}
.list-item-content {
  font-size: 20px;
  flex: 1;
}
.delete-btn {
  background-color: #ffffff;
  border: 1px solid tomato;
  color: tomato;
  cursor: pointer;
  font-size: 12px;
  padding: 5px 10px;
}
.delete-btn:hover {
  background-color: tomato;
  border: 1px solid #ece7e7;
  color: #ffffff;
}
input[type="text"] {
  border: 0;
  font-size: 20px;
  width: 100%;
  outline: none;
}
</style>
