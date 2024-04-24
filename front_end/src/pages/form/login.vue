<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { useAdminStore } from "~/store/adminStore";
import { useUserStore } from "~/store/userStore";
export default {
  setup() {
    const DienThoai = ref("");
    const Password = ref("");
    const hide = ref(false);
    const userStore = useUserStore();
    const adminStore = useAdminStore();
    const isUser = ref(window.location.href.indexOf("admin") === -1);
    const toggle = async () => {
      hide.value = !hide.value;
    };
    const hamlogin = async () => {
      try {
        console.log(DienThoai, Password);
        const sdt = DienThoai.value;
        const matkhau = Password.value;
        if (isUser.value) {
          await loginUser(matkhau, sdt);
        } else {
          await loginAdmin(matkhau, sdt);
        }
      } catch (e) {
        alert("tên tài khoản hoặc mật khẩu không chính xác");
      }
    };
    const loginUser = async (pass, phone) => {
      try {
        await userStore.login(pass, phone);

        if (userStore.user?._id) {
          router.push("/");
        } else {
          alert("Đăng nhập thất bại!");
        }
      } catch (err) {
        alert("Đăng nhập thất bại!");
      }
    };

    const loginAdmin = async (pass, phone) => {
      try {
        await adminStore.login(pass, phone);

        if (adminStore.admin) {
          router.push("/admin");
        } else {
          alert("Đăng nhập thất bại!");
        }
      } catch (err) {
        alert("Đăng nhập thất bại!");
      }
    };
    return {
      hide,
      toggle,
      DienThoai,
      Password,
      hamlogin,
    };
  },
};
</script>
<template>
  <div class="form-log">
    <div class="container">
      <h2>Đăng Nhập</h2>
      <div class="form-log-father">
        <span class="form-log-child">
          <span class="form-log-fi">
            <i class="fa-regular fa-circle-user"></i>
          </span>
        </span>
        <form @submit.prevent="hamlogin" method="post" class="form-log-body">
          <div class="bao-input">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <input
              type="text"
              name="username"
              placeholder="Số điện thoại"
              required
              v-model="DienThoai"
            />
          </div>
          <div class="bao-input">
            <i class="fa-solid fa-lock"></i>
            <input
              :type="hide ? 'text' : 'password'"
              name="password"
              placeholder="Mật khẩu"
              required
              v-model="Password"
            />
            <i
              :class="`fa-solid ${hide ? 'fa-eye-slash' : 'fa-eye'}`"
              id="togglePassword"
              @click="toggle"
            ></i>
          </div>
          <button class="btn btn-submit-log" type="submit">Đăng Nhập</button>
        </form>
        <div class="sigup d-flex">
          <p class="px-3">bạn chưa có tài khoản?</p>
          <router-link to="/register" class="form-group__link"
            >đăng ký ngay</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/form/kyNhap.scss");
</style>
