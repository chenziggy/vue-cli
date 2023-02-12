<template>
  <div @click="() => count++">hello FastDog {{ count }}</div>
</template>

<script>
export default {
  name: "FastDog",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
