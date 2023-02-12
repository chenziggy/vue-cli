<template>
  <div @click="() => count++">count：{{ count }}</div>
</template>

<script>
export default {
  name: "SelfCount",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
