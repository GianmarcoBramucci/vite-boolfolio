import { createRouter, createWebHistory } from "vue-router";

import AppProjectsList from "./pages/AppProjectsList.vue";
import AppSingleProject from "./pages/AppSingleProject.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "projects",
        component: AppProjectsList,
      },
      {
        path: "/projects/:slug",
        name: "singleProject",
        component: AppSingleProject,
      }
    ],
  });
  
  export { router };