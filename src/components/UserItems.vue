<template>
  <div>
    <List :items="items" @list:add="addToList" @list:remove="removeFromList" />
    Total Items: {{ totalItems }}
  </div>
</template>
<script>
import List from "./List";
export default {
  name: "UserItems",
  components: { List },
  beforeMount: function() {
    this.getListItems();
  },
  data: () => ({
    items: []
  }),
  methods: {
    getListItems: async function() {
      const response = await fetch("/list/getAll");
      this.items = await response.json();
    },
    addToList: async function(itemVal) {
      this.items.push({
        _id: new Date().toString(),
        val: itemVal,
        isUnsaved: true
      });
      const response = await fetch("/list/add", {
        method: "POST",
        cache: "no-cache",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          item: itemVal
        })
      });
      this.items = await response.json();
    },
    removeFromList: async function(itemId, itemIndex) {
      this.items.splice(itemIndex, 1, {
        ...this.items[itemIndex],
        isUnsaved: true
      });
      const response = await fetch("/list/remove", {
        method: "POST",
        cache: "no-cache",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          itemId
        })
      });
      this.items = await response.json();
    }
  },
  computed: {
    totalItems: function() {
      return this.items.length;
    }
  }
};
</script>
