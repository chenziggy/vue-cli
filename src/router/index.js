import Vue from "vue";
import VueRouter from "@/router/vueRouter";
import SelfCount from "@/components/SelfCount.vue";
import FastDog from "@/components/FastDog.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/selfCount",
    name: "selfCount",
    component: SelfCount,
  },
  {
    path: "/fastDog",
    name: "fastDog",
    component: FastDog,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
