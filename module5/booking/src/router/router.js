import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import ReservPage from "@/pages/ReservPage";
import HotelPage from "@/pages/HotelPage";
import SearchPage from "@/pages/SearchPage";
import ErrorPage from "@/pages/ErrorPage";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
    meta: {
      title: "Home",
      description: "The best hotels at the lowest prices.",
    },
  },
  {
    name: "reserv",
    path: "/reserv",
    component: ReservPage,
    meta: {
      title: "Reserv",
      description: "Book hotels at an attractive price.",
    },
  },
  {
    name: "search-result",
    path: "/search",
    component: SearchPage,
    meta: {
      title: "Search result",
      description: "Choose a hotel in the desired location.",
    },
  },
  {
    name: "hotel",
    path: "/hotel/:id",
    component: HotelPage,
    meta: {
      title: "Hotel",
      description: "Check out the detailed information about the hotel.",
    },
  },
  {
    name: "error",
    path: "/:any(.*)",
    component: ErrorPage,
    meta: {
      title: "Error",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//добавляет SEO
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  document.querySelector(
    'meta[name="description"]'
  ).content = `${to.meta.description}`;
  next();
});

export default router;
