<template>
  <div>
    <ul class="list">
      <li
        :key="item._id"
        v-for="(item, index) in items"
        :class="!!item.isUnsaved ? 'unsaved' : ''"
      >
        <span class="list-item-content"> {{ item.val }}</span>
        <button
          class="delete-btn"
          v-if="!item.isUnsaved"
          @click="deleteItemAtIndex(item._id, index)"
        >
          ✘
        </button>
      </li>
      <li class="new-item-input">
        <input
          type="text"
          v-model="newItemVal"
          v-on:keyup.enter="insertItem()"
          placeholder="write it here and relax... 😉"
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
    deleteItemAtIndex: function(itemId, itemIndex) {
      this.$emit("list:remove", itemId, itemIndex);
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
  background-color: #fff;
  margin: 11px 0;
  border: 1px solid #fff;
  display: flex;
  color: #275;
  border-radius: 10px;
}
ul.list li.unsaved {
  opacity: 0.6;
}
ul.list li.new-item-input {
  background: #ffffff;
}
.list-item-content {
  padding: 5px 15px;
  font-size: 16px;
  flex: 1;
}
.delete-btn {
  background-color: transparent;
  border: 0;
  color: tomato;
  cursor: pointer;
  font-size: 12px;
  padding: 5px 10px;
  outline: none;
}
input[type="text"] {
  border: 0;
  font-size: 16px;
  padding: 5px 15px;
  width: 100%;
  outline: none;
  background-color: transparent;
}
</style>
