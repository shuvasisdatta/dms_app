import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/",
    redirect: "/documents"
  },
  {
    path: "/login",
    component: require("@/components/Login.vue").default,
    meta: {
      title: "Login"
    }
  },
  {
    path: "/dashboard",
    component: require("@/components/Dashboard.vue").default,
    meta: {
      title: "Dashboard",
      requiresAuth: true
    }
  },
  {
    path: "/users",
    component: require("@/components/Users.vue").default,
    meta: {
      title: "Users",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/roles",
    component: require("@/components/Roles.vue").default,
    meta: {
      title: "Roles",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/categories",
    component: require("@/components/Categories.vue").default,
    meta: {
      title: "Categories",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/lockers",
    component: require("@/components/Lockers.vue").default,
    meta: {
      title: "Lockers",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/departments",
    component: require("@/components/Departments.vue").default,
    meta: {
      title: "Departments",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/plants",
    component: require("@/components/Plants.vue").default,
    meta: {
      title: "Plants",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/equipments",
    component: require("@/components/Equipments.vue").default,
    meta: {
      title: "Equipments",
      requiresAuth: true,
      adminAuth: true
    }
  },
  {
    path: "/documents",
    component: require("@/components/Documents.vue").default,
    meta: {
      title: "Documents",
      requiresAuth: true
    }
  },
  {
    path: "/contact",
    component: require("@/components/Contact.vue").default,
    meta: {
      title: "Contact"
    }
  },
  {
    path: "*",
    component: require("@/components/helper/404.vue").default
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
