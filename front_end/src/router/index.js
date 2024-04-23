import { createRouter, createWebHistory } from "vue-router";
import pageFrame from "~/layouts/pageFrame.vue";
import logFrame from "~/layouts/logFrame.vue";
import adminFrame from "~/layouts/adminFrame.vue";
import userFrame from "~/layouts/userFrame.vue";
import Home from "~/pages/home/home.vue";
import Login from "~/pages/form/login.vue";
import Register from "~/pages/form/register.vue";
import Detail from "~/pages/detail/detail.vue";
import Search from "~/pages/search/search.vue";
import Libary from "~/pages/libary/libary_info.vue";
import Contact from "~/pages/libary/contact.vue";
import Admin from "~/pages/admin/adminProduct.vue";
import AdminType from "~/pages/admin/adminType.vue";
import AdminPhieu from "~/pages/admin/adminPhieu.vue";
import AdminPhieuCho from "~/pages/admin/adminPhieuCho.vue";
import AdminPhieuDaDuyet from "~/pages/admin/adminPhieuDaDuyet.vue";
import AdminNV from "~/pages/admin/adminNV.vue";
import AdminNXB from "~/pages/admin/adminNXB.vue";
import User from "~/pages/user/user.vue";

const routes = [
  {
    path: "",
    component: pageFrame,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "detail",
        name: "detail",
        component: Detail,
      },
      {
        path: "search",
        name: "search",
        component: Search,
      },
      {
        path: "libary",
        name: "libary",
        component: Libary,
      },
      {
        path: "contact",
        name: "contact",
        component: Contact,
      },
    ],
  },
  {
    path: "",
    component: logFrame,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
    ],
  },
  {
    path: "",
    component: adminFrame,
    children: [
      {
        path: "admin",
        name: "admin",
        component: Admin,
      },
      {
        path: "admintype",
        name: "admintype",
        component: AdminType,
      },
      {
        path: "adminphieu",
        name: "adminphieu",
        component: AdminPhieu,
      },
      {
        path: "adminphieucho",
        name: "adminphieucho",
        component: AdminPhieuCho,
      },
      {
        path: "adminphieudaduyet",
        name: "adminphieudaduyet",
        component: AdminPhieuDaDuyet,
      },
      {
        path: "adminnv",
        name: "adminnv",
        component: AdminNV,
      },
      {
        path: "adminnxb",
        name: "adminnxb",
        component: AdminNXB,
      },
    ],
  },
  {
    path: "",
    component: userFrame,
    children: [
      {
        path: "user",
        name: "user",
        component: User,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
