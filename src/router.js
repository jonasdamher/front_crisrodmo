import Vue from "vue";
import Router from "vue-router";

import { isLogged } from "./helpers/role";

import Home from "./views/Home.vue";
import Categories from "./views/Categories.vue";
import Category from "./views/Category.vue";
import Recipe from "./views/Recipe.vue";
import Login from "./views/Login.vue";

import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // PUBLIC
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next("/dashboard");
        } else {
          next();
        }
      }
    },
    {
      path: "/categorias",
      name: "categories",
      component: Categories,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next("/dashboard");
        } else {
          next();
        }
      }
    },
    {
      path: "/categorias/:id",
      name: "category",
      component: Category,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next("/dashboard");
        } else {
          next();
        }
      }
    },
    {
      path: "/receta/:id",
      name: "recipe",
      component: Recipe,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next("/dashboard");
        } else {
          next();
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next("/dashboard");
        } else {
          next();
        }
      }
    },
    // PRIVATE
    // ADMINISTRATOR
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (!isLogged()) {
          next("/login");
        } else {
          next();
        }
      }
    }
  ]
});

export default router;
