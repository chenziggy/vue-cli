<template>
  <div>
    <SelfCount></SelfCount>
    <router-view></router-view>
  </div>
</template>

<script>
import SelfCount from "@/components/SelfCount.vue";
export default {
  name: "HelloWorld",
  components: {
    SelfCount,
  },
};
</script>
