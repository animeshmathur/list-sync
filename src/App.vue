<template>
  <UserItems />
</template>

<script>
import UserItems from "./components/UserItems";
export default {
  name: "app",
  components: {
    UserItems
  }
};
</script>

<style>
body {
  font-family: "Calibri";
  font-size: 14px;
  padding: 10px;
  background-color: #275;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
