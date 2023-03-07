<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { errorHandler, registerError } from "./utils/errorHandler";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    registerError((error) => {
      console.log("🚀 ~ file: App.vue:18 ~ registerError ~ error:", error);
    });
    errorHandler(() => {
      throw new TypeError("app");
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
