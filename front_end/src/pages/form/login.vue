<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { docGiaAPI } from "~/services/docGia.service";
export default {
  setup() {
    const DienThoai = ref("");
    const Password = ref("");
    const hide = ref(false);
    const toggle = async () => {
      hide.value = !hide.value;
    };
    const hamlogin = async () => {
      try {
        console.log(DienThoai, Password);
        const res = await docGiaAPI.login({
          DienThoai: DienThoai.value,
          Password: Password.value,
        });
        alert(res.message);
        router.push("/");
      } catch (e) {
        alert("tên tài khoản hoặc mật khẩu không chính xác");
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
