import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AuthView.vue"),
  },
  {
    path: "/analytics",
    name: "analytics",
    meta: { auth: true },
    component: () => import("@/views/Analytics.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requireAuth = to.matched.some((rout) => rout.meta.auth);
  if (!localStorage.getItem("Leadhit-Site-Id") && requireAuth) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
