import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import BookList from "@/pages/BookListPage.vue";
import AddBook from "@/pages/AddBook.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/list", component: BookList },
    { path: "/add", component: AddBook },
  ],
});

export default router;
