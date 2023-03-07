<template>
  <div @click="() => count++">count：{{ count }}</div>
</template>

<script>
import { errorHandler, registerError } from "@/utils/errorHandler";
export default {
  name: "SelfCount",
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    registerError((error) => {
      console.log(
        "🚀 ~ file: SelfCount.vue:18 ~ registerError ~ error:",
        error
      );
    });
    errorHandler(() => {
      throw new TypeError("SelfCount");
    });
  },
  updated() {
    errorHandler(() => {
      throw new TypeError("SelfCount");
    });
  },
};
</script>

<style></style>
