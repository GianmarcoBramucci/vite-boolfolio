import { createRouter, createWebHistory } from "vue-router";

import AppProjectsList from "./pages/AppProjectsList.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "projects",
        component: AppProjectsList,
      },
    //   {
    //     path: "/",
    //     name: "",
    //     component: ,
    //   }
    ],
  });
  
  export { router };